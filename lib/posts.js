import { promises as fs } from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

async function ensurePostsDir() {
  try {
    await fs.access(POSTS_DIR);
  } catch (error) {
    return false;
  }
  return true;
}

function parseFrontMatter(frontMatterRaw) {
  const lines = frontMatterRaw.split(/\r?\n/);
  const data = {};
  let currentKey = null;

  for (const line of lines) {
    if (!line.trim()) continue;

    if (/^\s*-\s+/.test(line)) {
      if (!currentKey) continue;
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      data[currentKey].push(line.replace(/^\s*-\s+/, "").trim());
      continue;
    }

    const [rawKey, ...rest] = line.split(":");
    if (!rawKey) continue;
    const key = rawKey.trim();
    const valuePart = rest.join(":").trim();

    if (valuePart === "") {
      currentKey = key;
      data[key] = [];
      continue;
    }

    currentKey = key;
    data[key] = valuePart;
  }

  return data;
}

function parseMarkdownFile(fileContents, fallbackSlug) {
  const trimmed = fileContents.trimStart();
  const match = trimmed.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Missing front matter in post: ${fallbackSlug}`);
  }

  const frontMatterRaw = match[1];
  const content = match[2].trim();
  const data = parseFrontMatter(frontMatterRaw);

  const slug = data.slug || fallbackSlug;
  const tags = Array.isArray(data.tags)
    ? data.tags
    : data.tags
    ? [String(data.tags)]
    : [];

  return {
    ...data,
    slug,
    tags,
    date: data.date || null,
    content,
  };
}

async function readPostFile(filename) {
  const filePath = path.join(POSTS_DIR, filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  const fallbackSlug = filename.replace(/\.md$/i, "");
  return parseMarkdownFile(fileContents, fallbackSlug);
}

export async function getAllPosts() {
  const hasDir = await ensurePostsDir();
  if (!hasDir) return [];

  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));

  const posts = await Promise.all(files.map((file) => readPostFile(file.name)));

  return posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostsByTag(tag) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export async function getAllTags() {
  const posts = await getAllPosts();
  const tagSet = new Set();
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tag) tagSet.add(tag);
    });
  });
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}
