import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getBlogPostBySlug, getBlogPosts, getRelatedPosts } from "@/lib/blog";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(slug, post.category);

    return (
        <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30 pb-32">
            {/* Header / Background Pattern */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-trueBlack z-10" />
                <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center" />
                
                <div className="relative z-20 h-full max-w-4xl mx-auto px-6 flex flex-col justify-end pb-24 text-center">
                    <Reveal>
                        <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] bg-antiqueGold text-black mb-8">
                            {post.category}
                        </span>
                    </Reveal>
                    <Reveal delayMs={200}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-white mb-8 leading-tight italic">
                            {post.title}
                        </h1>
                    </Reveal>
                    <Reveal delayMs={400}>
                        <div className="flex items-center justify-center space-x-6 text-white/50 text-xs font-medium uppercase tracking-widest">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-antiqueGold rounded-full" />
                            <span>{post.readingTime}</span>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Content Body - White Card Layout */}
            <main className="relative z-30 max-w-4xl mx-auto px-6 -mt-12">
                <Reveal delayMs={600}>
                    <article className="bg-[#FAF7F2] rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden">
                        <div 
                            className="blog-content prose prose-stone lg:prose-xl max-w-none text-gray-800 leading-[1.8] font-light"
                            dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                        />

                        {/* Article Footer CTA */}
                        <div className="mt-20 pt-12 border-t border-gray-200 text-center">
                            <p className="text-gray-500 italic mb-8 font-light">
                                "자명스쿨은 마음의 흐름을 현실의 구조로 바꾸는 학교입니다."
                            </p>
                            <Link href="/courses">
                                <button className="inline-flex items-center px-10 h-14 bg-trueBlack text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-antiqueGold hover:text-black transition-all duration-500 shadow-xl">
                                    프로그램 둘러보기
                                    <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </article>
                </Reveal>
            </main>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32 lg:mt-48">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-16 text-center uppercase italic">
                            함께 읽으면 <span className="text-antiqueGold">좋은 글</span>
                        </h2>
                    </Reveal>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedPosts.map((rPost, idx) => (
                            <Reveal key={rPost.slug} delayMs={100 * idx}>
                                <Link href={`/blog/${rPost.slug}`} className="group block h-full">
                                    <div className="h-full rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-antiqueGold/20">
                                        <span className="text-[10px] font-bold text-antiqueGold uppercase tracking-widest mb-4 block">{rPost.category}</span>
                                        <h3 className="text-xl font-display text-white mb-4 line-clamp-2 leading-snug group-hover:text-antiqueGold transition-colors">{rPost.title}</h3>
                                        <p className="text-white/40 text-xs font-light line-clamp-2">{rPost.excerpt}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* Back to Blog Button */}
            <div className="mt-24 text-center">
                <Link href="/blog" className="text-white/30 hover:text-antiqueGold text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-300">
                    ← Back to Blog list
                </Link>
            </div>

            {/* Custom Style for Post Content */}
            <style dangerouslySetInnerHTML={{ __html: `
                .blog-content h1, .blog-content h2, .blog-content h3 { 
                    font-family: 'Cinzel', serif; 
                    color: #111;
                    margin-top: 2em;
                    margin-bottom: 0.8em;
                    font-weight: 600;
                    font-style: italic;
                    text-transform: uppercase;
                }
                .blog-content p { margin-bottom: 1.8em; }
                .blog-content blockquote {
                    border-left: 3px solid #b89b6a;
                    padding-left: 1.5em;
                    color: #666;
                    font-style: italic;
                    margin: 2.5em 0;
                }
                .blog-content ul {
                    list-style: none;
                    padding-left: 1em;
                }
                .blog-content ul li {
                    position: relative;
                    margin-bottom: 0.8em;
                }
                .blog-content ul li::before {
                    content: "•";
                    color: #b89b6a;
                    position: absolute;
                    left: -1em;
                }
            `}} />
        </div>
    );
}
