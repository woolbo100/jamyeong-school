import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-300/80">
            Jamyeong Journal
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">자명스쿨 블로그</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            AI, 마음공부, 창작, 지식창업의 흐름을 기록합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-amber-300/40 hover:bg-white/10"
            >
              <div className="mb-5 rounded-2xl bg-white/10 px-4 py-3 text-sm text-amber-200/90">
                {post.category}
              </div>

              <h2 className="text-2xl font-semibold leading-snug transition group-hover:text-amber-200">
                {post.title}
              </h2>

              <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/70">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                <span>{post.date}</span>
                <span>Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
