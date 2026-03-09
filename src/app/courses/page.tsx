import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CoursesPage() {
    return (
        <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30">
            {/* Hero Header */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 text-center overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Reveal>
                        <span className="inline-block text-earth font-display text-sm tracking-[0.4em] mb-6 uppercase opacity-80">
                            The Journey of Becoming
                        </span>
                    </Reveal>
                    <Reveal delayMs={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-10 leading-tight tracking-tight text-white uppercase italic">
                            5원소 <br />
                            <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                                커리큘럼 개요
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delayMs={400}>
                        <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                            흙, 불, 바람, 물, 에테르의 고대 지혜를 통해 <br />
                            내면의 우주를 조화롭게 가꾸는 혁신적인 교육 시스템입니다.
                        </p>
                    </Reveal>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-antiqueGold/40 to-transparent"></div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-32 lg:space-y-64">
                {/* Earth Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-earth mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Foundation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">흙: 마음 심기 (Mind Planting)</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    &quot;뿌리 내리기 프로그램&quot;은 의식을 지면에 단단히 고정하는 데 집중합니다.
                                    하늘에 닿기 전, 우리는 먼저 육체적, 정신적 현재에 깊이 뿌리를 내려야 합니다.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-4">
                                {["안정감", "마음챙김", "가치관 정립"].map((tag) => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-earth/20 bg-earth/5 text-earth text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(900px_240px_at_50%_0%,rgba(214,198,168,0.18),transparent_60%)] after:opacity-100 after:pointer-events-none hover:border-[#D6C6A8]/30 hover:shadow-[0_0_50px_-12px_rgba(168,148,122,0.35),0_18px_55px_rgba(0,0,0,0.55)]">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-earth/20 to-transparent flex items-center justify-center border border-earth/20 relative">
                                    <div className="text-earth text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">🌱</div>
                                    <div className="absolute inset-0 border border-dashed border-earth/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
                                </div>
                                <p className="mt-10 font-display text-earth tracking-[0.3em] text-sm font-bold">ROOTING PROGRAM</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Fire Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(900px_240px_at_50%_0%,rgba(214,198,168,0.18),transparent_60%)] after:opacity-100 after:pointer-events-none hover:border-[#D6C6A8]/30 hover:shadow-[0_0_50px_-12px_rgba(255,95,95,0.35),0_18px_55px_rgba(0,0,0,0.55)]">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-fire/20 to-transparent flex items-center justify-center border border-fire/20 relative">
                                    <div className="text-fire text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">🔥</div>
                                    <div className="absolute inset-3 border border-fire/30 rounded-full"></div>
                                </div>
                                <p className="mt-10 font-display text-fire tracking-[0.3em] text-sm font-bold">HEART ART PROGRAM</p>
                            </div>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal>
                            <div className="flex items-center space-x-3 text-fire mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Passion & Transformation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">불: 마음 그리기 (Mind Drawing)</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    &quot;하트 아트 프로그램&quot;은 내면의 창조적 불꽃을 깨웁니다.
                                    의식적인 창조를 통해 감정의 뜨거움을 표현하고, 낡은 자아를 태워 보냄으로써 변화를 이끌어냅니다.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-4">
                                {["자기표현", "창의성", "실행력"].map((tag) => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-fire/20 bg-fire/5 text-fire text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Air Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-air mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Connection</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">바람: 마음 나누기 (Mind Sharing)</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    &quot;흐름 프로그램&quot;은 보이지 않는 연결의 기술을 가르칩니다.
                                    소통과 공감, 그리고 만물에 닿는 부드러운 산들바람처럼 유연한 사고의 움직임을 탐구합니다.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-4">
                                {["자비심", "통합", "지성"].map((tag) => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-air/20 bg-air/5 text-air text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(900px_240px_at_50%_0%,rgba(214,198,168,0.18),transparent_60%)] after:opacity-100 after:pointer-events-none hover:border-[#D6C6A8]/30 hover:shadow-[0_0_50px_-12px_rgba(168,200,235,0.35),0_18px_55px_rgba(0,0,0,0.55)]">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-air/20 to-transparent flex items-center justify-center border border-air/20 relative">
                                    <div className="text-air text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">🌪️</div>
                                    <div className="absolute inset-0 rounded-full border-t border-air/50 animate-[spin_4s_linear_infinite]"></div>
                                </div>
                                <p className="mt-10 font-display text-air tracking-[0.3em] text-sm font-bold">FLOW PROGRAM</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Water Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(900px_240px_at_50%_0%,rgba(214,198,168,0.18),transparent_60%)] after:opacity-100 after:pointer-events-none hover:border-[#D6C6A8]/30 hover:shadow-[0_0_50px_-12px_rgba(137,207,240,0.35),0_18px_55px_rgba(0,0,0,0.55)]">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-water/20 to-transparent flex items-center justify-center border border-water/20 relative overflow-hidden">
                                    <div className="text-water text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">💧</div>
                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-water/20 blur-xl"></div>
                                </div>
                                <p className="mt-10 font-display text-water tracking-[0.3em] text-sm font-bold">WISDOM STREAM</p>
                            </div>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal>
                            <div className="flex items-center space-x-3 text-water mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Intuition</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">물: 마음 채우기 (Mind Filling)</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    &quot;지혜의 샘&quot; 과정은 스스로를 비워내는 그릇이 되는 법을 배웁니다.
                                    감정의 몸을 정화하고, 에고가 비워진 자리에 직관의 깊은 물이 차오르게 합니다.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-4">
                                {["성찰", "명료함", "수용성"].map((tag) => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-water/20 bg-water/5 text-water text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Ether Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-ether mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Enlightenment</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">에테르: 마음 밝히기 (Mind Shining)</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    &quot;무한한 빛 프로그램&quot;은 모든 원소의 최종적인 통합을 의미합니다.
                                    모든 원소가 탄생하는 공(空)의 공간이자, 다시 돌아가게 될 근원의 빛을 상징합니다.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-4">
                                {["초월", "영성", "본질"].map((tag) => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-ether/30 bg-ether/10 text-ether text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(900px_240px_at_50%_0%,rgba(214,198,168,0.18),transparent_60%)] after:opacity-100 after:pointer-events-none hover:border-[#D6C6A8]/30 hover:shadow-[0_0_60px_-12px_rgba(157,80,187,0.45),0_18px_55px_rgba(0,0,0,0.55)]">
                                <div className="w-56 h-56 rounded-full bg-white/5 flex items-center justify-center border border-white/20 relative">
                                    <div className="text-white text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">✨</div>
                                    <div className="absolute -inset-6 border border-white/5 rounded-full"></div>
                                </div>
                                <p className="mt-10 font-display text-white tracking-[0.4em] text-sm font-bold uppercase">Infinite Light</p>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h3 className="text-3xl md:text-5xl font-display mb-12 leading-tight text-white uppercase italic">
                            당신의 원소 여정을 <br /> 시작할 준비가 되셨나요?
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button className="group relative overflow-visible h-16 w-full sm:w-64 px-8 text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]">
                                <span className="relative z-10">수강 신청하기</span>
                                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
                                <span className="absolute -inset-[1px] ring-1 ring-[#8A6A3F]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            </button>

                            <button className="h-16 w-full sm:w-64 px-8 text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300">
                                강의 계획서 다운로드
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
