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
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black pb-32">
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Blog Header Info */}
        <div className="mb-12 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80 mb-4">
            {post.category}
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl mb-6">
            {post.title}
          </h1>
          <p className="text-sm text-white/50">{post.date}</p>
        </div>

        {/* Thumbnail Image - Unified Width */}
        {post.coverImage && (
          <div className="mb-10 overflow-hidden rounded-[28px] border border-white/10 w-full shadow-2xl">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Body - Unified Width */}
        <article className="rounded-[32px] bg-white px-8 py-12 md:px-16 md:py-20 text-zinc-900 shadow-2xl w-full">
          <div
            className="prose prose-zinc max-w-none prose-headings:mt-12 prose-headings:text-zinc-900 prose-p:leading-8 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-headings:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        {/* CTA Section - Unified Width */}
        <div className="mt-10 rounded-[28px] border border-amber-300/20 bg-white/5 p-10 md:p-14 text-center text-white w-full">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">
            Jamyeong School
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            이 글이 도움이 되었다면 관련 강의도 함께 살펴보세요
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed">
            자명스쿨은 AI를 배우는 곳이 아니라 마음의 흐름을 현실의 구조로
            바꾸는 학교입니다.
          </p>
          <Link
            href="/courses"
            className="mt-8 inline-flex rounded-full bg-amber-300 px-8 py-4 text-sm font-bold text-black transition hover:bg-amber-400 hover:scale-105 duration-300 shadow-lg"
          >
            강의 보러가기
          </Link>
        </div>

        {/* Related Posts - Unified Width */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 w-full">
            <h3 className="mb-8 text-2xl font-semibold text-white">관련 글</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-amber-300/30 hover:bg-white/10"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.coverImage || "/images/blog/default-cover.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
                      {item.category}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold leading-snug group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to list */}
        <div className="mt-16 text-center">
          <Link href="/blog" className="text-white/40 hover:text-amber-300 text-sm transition-colors">
            ← 목록으로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
}
