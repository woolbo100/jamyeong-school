import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/50">{post.date}</p>
        </div>

        {post.coverImage && (
          <div className="mx-auto mb-8 max-w-4xl overflow-hidden rounded-[28px] border border-white/10">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        <article className="mx-auto max-w-3xl rounded-[32px] bg-white px-6 py-10 text-zinc-900 shadow-2xl md:px-10 md:py-14">
          <div
            className="prose prose-zinc max-w-none prose-headings:mt-10 prose-headings:text-zinc-900 prose-p:leading-8 prose-p:text-zinc-700 prose-li:text-zinc-700"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-amber-300/20 bg-white/5 p-8 text-center text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">
            Jamyeong School
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            이 글이 도움이 되었다면 관련 강의도 함께 살펴보세요
          </h2>
          <p className="mt-3 text-white/70">
            자명스쿨은 AI를 배우는 곳이 아니라 마음의 흐름을 현실의 구조로
            바꾸는 학교입니다.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-flex rounded-full border border-amber-300/40 px-6 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-300/10"
          >
            강의 보러가기
          </Link>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mx-auto mt-14 max-w-5xl">
            <h3 className="mb-6 text-2xl font-semibold text-white">관련 글</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 text-white transition hover:border-amber-300/30 hover:bg-white/10"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={item.coverImage || "/images/blog/default-cover.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                      {item.category}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
