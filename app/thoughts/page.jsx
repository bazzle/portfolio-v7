import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata = {
  title: "Thoughts | Barry Richards",
  description: "Writing, notes, and ideas from Barry Richards.",
};

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

export default async function ThoughtsPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return (
    <main className="main thoughts">
      <section className="section">
        <h1>Thoughts</h1>
        <p>Notes, experiments, and reflections on work and life.</p>
      </section>

      <section className="section">
        <h2>Latest posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-list__item">
              <h3>
                <Link href={`/thoughts/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.date ? <p className="post-list__meta">{formatDate(post.date)}</p> : null}
              {post.excerpt ? <p>{post.excerpt}</p> : null}
              {post.tags.length ? (
                <p className="post-list__tags">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/thoughts/${tag}`} prefetch={false}>
                      #{tag}
                    </Link>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
          {!posts.length ? <li>No posts yet. Check back soon.</li> : null}
        </ul>
      </section>

      {tags.length ? (
        <section className="section">
          <h2>Tags</h2>
          <ul className="tag-list">
            {tags.map((tag) => (
              <li key={tag}>
                <Link href={`/thoughts/${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
