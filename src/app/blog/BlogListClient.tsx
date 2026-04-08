"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import CategoryFilter from "@/components/blog/CategoryFilter";
import type { BlogPostMeta } from "@/lib/blog";

type Props = {
  initialPosts: BlogPostMeta[];
  categories: string[];
};

export default function BlogListClient({
  initialPosts,
  categories,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "전체") return initialPosts;
    return initialPosts.filter((post) => post.category === selectedCategory);
  }, [initialPosts, selectedCategory]);

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

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition duration-300 hover:border-amber-300/40 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.coverImage || "/images/blog/default-cover.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="rounded-full bg-white/10 px-3 py-1 text-xs text-amber-200/90">
                    {post.category}
                  </p>
                  <p className="text-xs text-white/40">{post.date}</p>
                </div>

                <h2 className="text-2xl font-semibold leading-snug transition group-hover:text-amber-200">
                  {post.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/70">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
