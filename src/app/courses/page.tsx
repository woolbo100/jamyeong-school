import Link from "next/link";
import Image from "next/image";
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
                            자명스쿨 <br />
                            <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                                5원소 커리큘럼
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delayMs={400}>
                        <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                            마음공부부터 수익화, 그리고 리더십까지 <br />
                            단계별로 성장하는 통합 교육 시스템
                        </p>
                    </Reveal>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-antiqueGold/40 to-transparent"></div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-32 lg:space-y-64">
                {/* Growth Flow Summary */}
                <section className="text-center mb-20 lg:mb-40">
                    <Reveal>
                        <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12">
                                자명스쿨은 단순히 AI를 배우는 곳이 아니라 <br className="hidden md:block" />
                                마음을 이해하고 → 표현하고 → 나누고 → 수익으로 연결하고 → 리더로 확장하는 구조입니다.
                            </p>
                            <div className="flex justify-center items-center gap-4 md:gap-8 text-3xl md:text-5xl">
                                <span className="hover:scale-125 transition-transform duration-500 cursor-default" title="토">🌱</span>
                                <span className="text-white/20 text-xl">→</span>
                                <span className="hover:scale-125 transition-transform duration-500 cursor-default" title="화">🔥</span>
                                <span className="text-white/20 text-xl">→</span>
                                <span className="hover:scale-125 transition-transform duration-500 cursor-default" title="금">🌬️</span>
                                <span className="text-white/20 text-xl">→</span>
                                <span className="hover:scale-125 transition-transform duration-500 cursor-default" title="수">💧</span>
                                <span className="text-white/20 text-xl">→</span>
                                <span className="hover:scale-125 transition-transform duration-500 cursor-default" title="에테르">✨</span>
                            </div>
                        </div>
                    </Reveal>
                </section>
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-earth mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Foundation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">🌱 토 — 마음을 심다</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    모든 변화의 시작은 나를 아는 것에서 시작됩니다. <br />
                                    의식을 지면에 단단히 고정하고 내면의 뿌리를 내리는 단계입니다.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-earth text-xs font-bold tracking-widest uppercase mb-3">마음공부</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">자기 인식 • 무의식 정화 • 정체성 확립</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-earth text-xs font-bold tracking-widest uppercase mb-3">AI 활용</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">자기 탐색 질문 생성 • 에세이 및 브랜드 문장 정리 • 출판 기획 보조</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-earth/5 border border-earth/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-earth text-xs font-bold tracking-widest uppercase mb-2">연결 강의 & 자격증</h4>
                                            <p className="text-white/80 text-sm">그림책/에세이 출판 강의 • 브랜딩 기초 과정</p>
                                            <p className="text-earth/80 text-xs mt-1 font-medium">자격증: 감성출판지도사</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-earth/20 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-earth text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">나를 명확히 이해하고 <br />브랜드 방향을 확립합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/earth"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-earth/30 text-earth hover:text-white transition-all duration-500"
                                >
                                    <span className="relative z-10">강의 커리큘럼 보러가기</span>
                                    <span className="absolute inset-0 bg-earth/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/elements/earth.png"
                                        alt="Earth Element"
                                        fill
                                        className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-earth/20 to-transparent flex items-center justify-center border border-earth/20 relative backdrop-blur-md">
                                        <div className="text-earth text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">🌱</div>
                                        <div className="absolute inset-0 border border-dashed border-earth/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
                                    </div>
                                    <p className="mt-10 font-display text-earth tracking-[0.3em] text-sm font-bold uppercase drop-shadow-lg">Rooting Program</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/elements/fire.png"
                                        alt="Fire Element"
                                        fill
                                        className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-fire/20 to-transparent flex items-center justify-center border border-fire/20 relative backdrop-blur-md">
                                        <div className="text-fire text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">🔥</div>
                                        <div className="absolute inset-3 border border-fire/30 rounded-full"></div>
                                    </div>
                                    <p className="mt-10 font-display text-fire tracking-[0.3em] text-sm font-bold uppercase drop-shadow-lg">Heart Art Program</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal>
                            <div className="flex items-center space-x-3 text-fire mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Passion & Transformation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">🔥 화 — 마음을 그리다</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    억눌린 감정은 표현될 때 치유되고 창작으로 확장됩니다. <br />
                                    내면의 불꽃을 깨워 창조적 창작물로 시각화하는 단계입니다.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-fire text-xs font-bold tracking-widest uppercase mb-3">마음공부</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">감정 표현 • 내면 치유 • 세계관 형성</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-fire text-xs font-bold tracking-widest uppercase mb-3">AI 활용</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">AI 이미지 생성 • 감정 기반 아트 제작 • 세계관 시각화</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-fire/5 border border-fire/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-fire text-xs font-bold tracking-widest uppercase mb-2">연결 강의 & 자격증</h4>
                                            <p className="text-white/80 text-sm">AI 아티스트 올인원 클래스</p>
                                            <p className="text-fire/80 text-xs mt-1 font-medium">자격증: AI 아트테라피 지도사</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-fire/20 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-fire text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">감정을 창의적으로 표현하고 <br />AI 창작 역량을 확보합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/fire"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-fire/30 text-fire hover:text-white transition-all duration-500"
                                >
                                    <span className="relative z-10">강의 커리큘럼 보러가기</span>
                                    <span className="absolute inset-0 bg-fire/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-[#fde68a] mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Connection</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">
                                <span className="mr-3 bg-gradient-to-br from-[#f5d0fe] to-[#fde68a] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(253,230,138,0.3)]">🌬️</span>
                                금 — 마음을 나누다
                            </h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    나의 경험과 통찰은 전달될 때 비로소 진정한 가치가 됩니다. <br />
                                    지혜를 구조화하여 세상과 소통하고 나만의 브랜드를 구축하는 단계입니다.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-[#fde68a] text-xs font-bold tracking-widest uppercase mb-3">마음공부</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">메시지 구조화 • 지혜 정리 • 자기 표현 확장</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-[#fde68a] text-xs font-bold tracking-widest uppercase mb-3">AI 활용</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">강의 커리큘럼 생성 • 전자책 구조화 • 콘텐츠 제작 자동화</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-[#fde68a]/5 border border-[#fde68a]/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-[#fde68a] text-xs font-bold tracking-widest uppercase mb-2">연결 강의 & 자격증</h4>
                                            <p className="text-white/80 text-sm">지식창업 마스터 클래스 • 1인 비즈니스 과정</p>
                                            <p className="text-[#fde68a]/80 text-xs mt-1 font-medium">자격증: 캔바/AI브랜딩 마스터 강사</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-[#fde68a]/20 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-[#fde68a] text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">실행 가능한 강의를 제작하고 <br />강력한 콘텐츠 영향력을 형성합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/metal"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-[#fde68a]/30 text-[#fde68a] hover:text-white transition-all duration-500"
                                >
                                    <span className="relative z-10">강의 커리큘럼 보러가기</span>
                                    <span className="absolute inset-0 bg-[#fde68a]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/elements/metal.png"
                                        alt="Metal Element"
                                        fill
                                        className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-[#fde68a]/20 to-transparent flex items-center justify-center border border-[#fde68a]/20 relative backdrop-blur-md">
                                        <div className="text-7xl group-hover:scale-110 transition-transform duration-700 bg-gradient-to-br from-[#f5d0fe] to-[#fde68a] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(253,230,138,0.4)]">🌬️</div>
                                        <div className="absolute inset-0 rounded-full border-t border-[#fde68a]/50 animate-[spin_6s_linear_infinite]"></div>
                                    </div>
                                    <p className="mt-10 font-display text-[#fde68a] tracking-[0.3em] text-sm font-bold uppercase opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg">Flow Program</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Water Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/elements/water.png"
                                        alt="Water Element"
                                        fill
                                        className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-water/20 to-transparent flex items-center justify-center border border-water/20 relative overflow-hidden backdrop-blur-md">
                                        <div className="text-water text-7xl font-light opacity-80 group-hover:scale-110 transition-transform duration-700">💧</div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-water/20 blur-xl"></div>
                                    </div>
                                    <p className="mt-10 font-display text-water tracking-[0.3em] text-sm font-bold uppercase drop-shadow-lg">Wisdom Stream</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal>
                            <div className="flex items-center space-x-3 text-water mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Intuition</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">💧 수 — 마음을 채우다</h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    가치는 반드시 수익으로 연결되어야 지속됩니다. <br />
                                    풍요로운 마음을 현실의 결실로 변환하여 시스템을 구축하는 단계입니다.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-water text-xs font-bold tracking-widest uppercase mb-3">마음공부</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">결핍 → 풍요 전환 • 가치와 수익 연결</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-water text-xs font-bold tracking-widest uppercase mb-3">AI 활용</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">상품 구조 설계 • 랜딩페이지 제작 • 자동화 시스템 구축</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-water/5 border border-water/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-water text-xs font-bold tracking-widest uppercase mb-2">연결 강의</h4>
                                            <p className="text-white/80 text-sm">수익화 마스터 클래스 • 서비스 런칭 과정</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-water/20 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-water text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">실제 수익을 창출하고 <br />디지털 자산 시스템을 완성합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/water"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-water/30 text-water hover:text-white transition-all duration-500"
                                >
                                    <span className="relative z-10">강의 커리큘럼 보러가기</span>
                                    <span className="absolute inset-0 bg-water/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Ether Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-[#a855f7] mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Enlightenment</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">
                                <span className="mr-3 bg-gradient-to-br from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">✨</span>
                                제5원소 — 풍요마인드
                            </h2>
                            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                                <p>
                                    이제는 나를 넘어 타인을 성장시키는 리더의 단계입니다. <br />
                                    모든 원소를 통합하여 빛을 나누고 지속 가능한 선순환 구조를 형성합니다.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-[#a855f7] text-xs font-bold tracking-widest uppercase mb-3">마음공부</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">리더십 • 영향력 확장 • 순환 구조 형성</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-[#a855f7] text-xs font-bold tracking-widest uppercase mb-3">AI 활용</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">교육 시스템 확장 • 멘토링 구조화 • 커뮤니티 운영</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-[#a855f7]/5 border border-[#a855f7]/20">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-[#ec4899] text-xs font-bold tracking-widest uppercase mb-2">연결 강의</h4>
                                            <p className="text-white/80 text-sm">멘토링 과정 • 리더십 교육 • 협회 강사 양성</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-[#a855f7]/30 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-[#ec4899] text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">강사/멘토로서 성장하며 <br />사회적 영향력을 확장합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/abundance"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-[#a855f7]/30 text-[#a855f7] hover:text-white transition-all duration-500"
                                >
                                    <span className="relative z-10">강의 커리큘럼 보러가기</span>
                                    <span className="absolute inset-0 bg-[#a855f7]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Reveal>
                            <div className="element-card relative group overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center aspect-square transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 shadow-[0_60px_55px_rgba(0,0,0,0.55)]">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/elements/ether.png"
                                        alt="Ether Element"
                                        fill
                                        className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-white/5 flex items-center justify-center border border-white/10 relative backdrop-blur-md">
                                        <div className="text-7xl group-hover:scale-110 transition-transform duration-700 bg-gradient-to-br from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">✨</div>
                                        <div className="absolute -inset-6 border border-[#a855f7]/20 rounded-full animate-pulse"></div>
                                    </div>
                                    <p className="mt-10 font-display text-white tracking-[0.4em] text-sm font-bold uppercase opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-lg">Infinite Light</p>
                                </div>
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
                            자명스쿨은 AI를 배우는 곳이 아니라 <br />
                            마음의 흐름을 현실의 구조로 바꾸는 학교입니다.
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button className="group relative overflow-visible h-16 w-full sm:w-64 px-8 text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]">
                                <span className="relative z-10">프로그램 안내 받기</span>
                                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
                                <span className="absolute -inset-[1px] ring-1 ring-[#8A6A3F]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            </button>

                            <button className="h-16 w-full sm:w-64 px-8 text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300 uppercase tracking-[0.2em]">
                                무료 특강 신청
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
