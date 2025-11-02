import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getAllTags, getPostBySlug, getPostsByTag } from "@/lib/posts";

function formatDate(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(value));
  } catch (error) {
    return value;
  }
}

function renderBody(markdown) {
  if (!markdown) return null;
  const paragraphs = markdown
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

export async function generateStaticParams() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);
  const postParams = posts.map((post) => ({ identifier: post.slug }));
  const tagParams = tags.map((tag) => ({ identifier: tag }));
  return [...postParams, ...tagParams];
}

export async function generateMetadata({ params }) {
  const { identifier } = await params;
  const [post, taggedPosts] = await Promise.all([
    getPostBySlug(identifier),
    getPostsByTag(identifier),
  ]);

  if (post) {
    return {
      title: `${post.title} | Thoughts by Barry Richards`,
      description: post.excerpt || post.title,
    };
  }

  if (taggedPosts.length) {
    return {
      title: `#${identifier} | Thoughts by Barry Richards`,
      description: `Posts tagged with ${identifier}.`,
    };
  }

  return {
    title: "Not found | Thoughts",
  };
}

export default async function ThoughtNode({ params }) {
  const { identifier } = await params
  const post = await getPostBySlug(identifier);

  if (post) {
    return (
      <main className="main thoughts-post">
        <article className="section">
          <header>
            <p className="post-meta">{formatDate(post.date)}</p>
            <h1>{post.title}</h1>
            {post.tags.length ? (
              <p className="post-tags">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/thoughts/${tag}`}>
                    #{tag}
                  </Link>
                ))}
              </p>
            ) : null}
          </header>
          <div className="post-body">{renderBody(post.content)}</div>
        </article>
      </main>
    );
  }

  const taggedPosts = await getPostsByTag(identifier);

  if (taggedPosts.length) {
    return (
      <main className="main thoughts-tag">
        <section className="section">
          <h1>#{identifier}</h1>
          <p>{`Posts filed under ${identifier}.`}</p>
        </section>
        <section className="section">
          <ul className="post-list">
            {taggedPosts.map((taggedPost) => (
              <li key={taggedPost.slug} className="post-list__item">
                <h2>
                  <Link href={`/thoughts/${taggedPost.slug}`}>
                    {taggedPost.title}
                  </Link>
                </h2>
                {taggedPost.date ? (
                  <p className="post-list__meta">{formatDate(taggedPost.date)}</p>
                ) : null}
                {taggedPost.excerpt ? <p>{taggedPost.excerpt}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }

  notFound();
}
