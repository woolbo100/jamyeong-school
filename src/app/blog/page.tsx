import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30">
            {/* Hero Header */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 text-center overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Reveal>
                        <span className="inline-block text-earth font-display text-sm tracking-[0.4em] mb-6 uppercase opacity-80">
                            Insights & Wisdom
                        </span>
                    </Reveal>
                    <Reveal delayMs={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-10 leading-tight tracking-tight text-white uppercase italic">
                            자명스쿨 <br />
                            <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                                공식 블로그
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delayMs={400}>
                        <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                            마음의 지혜와 기술의 조화를 통해 <br />
                            새로운 시각과 통찰을 공유하는 공간입니다.
                        </p>
                    </Reveal>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-antiqueGold/40 to-transparent"></div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {posts.map((post, index) => (
                        <Reveal key={post.slug} delayMs={100 * index}>
                            <Link href={`/blog/${post.slug}`} className="group">
                                <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-antiqueGold/30 hover:shadow-[0_20px_50px_-12px_rgba(184,155,106,0.2)]">
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        {/* Mock image behavior - in production use real thumbnails */}
                                        <div className="absolute inset-0 bg-trueBlack flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-700">
                                            {post.category === "School" ? "🏛️" : "✨"}
                                        </div>
                                        <div className="absolute bottom-6 left-6 z-20">
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-antiqueGold text-black">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-8">
                                        <div className="flex items-center space-x-4 text-white/40 text-xs mb-4">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readingTime}</span>
                                        </div>
                                        <h2 className="text-2xl font-display text-white mb-4 group-hover:text-antiqueGold transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-white/50 font-light leading-relaxed line-clamp-3 text-sm">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-8 flex items-center text-antiqueGold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Read More 
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </main>
        </div>
    );
}
