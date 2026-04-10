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
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Blog Header Info */}
        <div className="mb-12 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B89B6A]/80 mb-4">
            {post.category}
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl mb-6 max-w-4xl mx-auto">
            {post.title}
          </h1>
          <p className="text-sm text-white/50">{post.date}</p>
        </div>

        {/* Thumbnail Image - Unified Width */}
        {post.coverImage && (
          <div className="mb-10 overflow-hidden rounded-[40px] border border-white/10 w-full shadow-2xl">
            <div className="relative aspect-[21/9] w-full">
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
        <article className="rounded-[40px] bg-white px-8 py-12 md:px-16 md:py-24 text-zinc-900 shadow-2xl w-full">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-zinc lg:prose-xl max-w-none prose-headings:mt-12 prose-headings:text-zinc-900 prose-p:leading-8 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-headings:font-bold prose-headings:italic"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>

        {/* CTA Section - Unified Width */}
        <div className="mt-10 rounded-[28px] border border-[#B89B6A]/20 bg-white/5 p-10 md:p-14 text-center text-white w-full">
          <p className="text-sm uppercase tracking-[0.25em] text-[#B89B6A]/80">
            Jamyeong School
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            이 글이 도움이 되었다면 관련 강의도 함께 살펴보세요
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            자명스쿨은 단순히 AI를 배우는 곳이 아니라 <br />
            마음의 흐름을 현실의 구조로 바꾸는 학교입니다.
          </p>
          <Link
            href="/courses"
            className="group relative overflow-visible mt-8 inline-flex items-center justify-center h-14 px-10 text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
              style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
            />
            <span className="relative z-10">강의 보러가기</span>
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
                  className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#B89B6A]/30 hover:bg-white/10"
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
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B89B6A]/80">
                      {item.category}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold leading-snug group-hover:text-[#D6C6A8] transition-colors">
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
          <Link href="/blog" className="text-white/40 hover:text-[#B89B6A] text-sm transition-colors">
            ← 목록으로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
}
