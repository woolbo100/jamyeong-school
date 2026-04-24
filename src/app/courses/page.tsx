import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import FiveElementsSection from "@/components/courses/FiveElementsSection";

export default function CoursesPage() {
    return (
        <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30">
            {/* Hero Header */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 text-center overflow-hidden">
                <HeroParticles />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Reveal>
                        <span className="inline-block text-earth font-display text-sm tracking-[0.4em] mb-6 uppercase opacity-80">
                            The Journey of Becoming
                        </span>
                    </Reveal>
                    <Reveal delayMs={200}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-10 leading-tight text-white uppercase italic">
                            자명스쿨 <br />
                            <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block px-8 py-2">
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

            <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 space-y-20 lg:space-y-32">
                {/* Growth Flow Section */}
                <FiveElementsSection />

                <section className="grid lg:grid-cols-2 gap-16 items-center pt-8">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <div className="flex items-center space-x-3 text-earth mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Foundation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white flex items-center gap-3">
                                <Image src="/images/icon/earth.png" alt="Earth" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                <span>흙 — 마음을 심다</span>
                            </h2>
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
                                        <p className="text-white/70 text-sm leading-relaxed">자기 탐색 질문 • 에세이 및 그림책 기획 • 컨텐츠 생성 • 편집, 출판</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-earth/5 border border-earth/10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-1.5">
                                            <p className="text-white/90 text-base font-semibold">강의: 브랜딩 그림책/에세이 출판 과정</p>
                                            <p className="text-earth text-base font-semibold">자격증: 감성출판지도사</p>
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
                                    className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-earth/30 text-earth hover:text-white transition-all duration-500"
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
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-700 brightness-110">
                                            <Image src="/images/icon/earth.png" alt="Earth Icon" fill className="object-contain" />
                                        </div>
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
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-700 brightness-110">
                                            <Image src="/images/icon/fire.png" alt="Fire Icon" fill className="object-contain" />
                                        </div>
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
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white flex items-center gap-3">
                                <Image src="/images/icon/fire.png" alt="Fire" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                <span>불 — 마음을 그리다</span>
                            </h2>
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
                                        <div className="space-y-1.5">
                                            <p className="text-white/90 text-base font-semibold">강의: AI 아티스트 올인원 클래스</p>
                                            <p className="text-fire text-base font-semibold">자격증: AI감성아트전문가</p>
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
                                    className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-fire/30 text-fire hover:text-white transition-all duration-500"
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
                            <div className="flex items-center space-x-3 text-[#D6C6A8] mb-6">
                                <span className="font-display tracking-[0.3em] text-xs uppercase">Connection</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white flex items-center gap-3">
                                <Image src="/images/icon/air.png" alt="Air" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                <span>공기 — 마음을 나누다</span>
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
                                        <h4 className="text-[#D6C6A8] text-xs font-bold tracking-widest uppercase mb-3">마음공부</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">메시지 구조화 • 지혜 정리 • 자기 표현 확장</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-[#D6C6A8] text-xs font-bold tracking-widest uppercase mb-3">AI 활용</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">강의 커리큘럼 생성 • 전자책 구조화 • 콘텐츠 제작 자동화</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-[#D6C6A8]/5 border border-[#D6C6A8]/20">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-1.5">
                                            <p className="text-white/90 text-base font-semibold">강의: 브랜드 지식창업 마스터 클래스</p>
                                            <p className="text-[#D6C6A8] text-base font-semibold">자격증: 캔바/AI브랜딩 마스터 강사</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-[#D6C6A8]/30 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-[#D6C6A8] text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">실행 가능한 강의를 제작하고 <br />강력한 콘텐츠 영향력을 형성합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/air"
                                    className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-[#D6C6A8]/30 text-slate-200 hover:text-white transition-all duration-500"
                                >
                                    <span className="relative z-10">강의 커리큘럼 보러가기</span>
                                    <span className="absolute inset-0 bg-[#D6C6A8]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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
                                        src="/images/elements/air.png"
                                        alt="Air Element"
                                        fill
                                        className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-[#D6C6A8]/20 to-transparent flex items-center justify-center border border-[#D6C6A8]/20 relative backdrop-blur-md">
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-700 brightness-110">
                                            <Image src="/images/icon/air.png" alt="Air Icon" fill className="object-contain" />
                                        </div>
                                        <div className="absolute inset-0 rounded-full border-t border-[#D6C6A8]/50 animate-[spin_6s_linear_infinite]"></div>
                                    </div>
                                    <p className="mt-10 font-display text-[#D6C6A8] tracking-[0.3em] text-sm font-bold uppercase opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg">Flow Program</p>
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
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-700 brightness-110">
                                            <Image src="/images/icon/water.png" alt="Water Icon" fill className="object-contain" />
                                        </div>
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
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white flex items-center gap-3">
                                <Image src="/images/icon/water.png" alt="Water" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                <span>물 — 마음을 채우다</span>
                            </h2>
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
                                        <div className="space-y-1.5">
                                            <p className="text-white/90 text-base font-semibold">강의: 수익화 마스터 클래스 • 서비스 런칭 과정</p>
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
                                    className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-water/30 text-water hover:text-white transition-all duration-500"
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
                            <h2 className="text-4xl md:text-5xl font-display mb-8 text-white flex items-center gap-3">
                                <Image src="/images/icon/ether.png" alt="Ether" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                <span>제5원소 — 풍요마인드</span>
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
                                        <div className="space-y-1.5">
                                            <p className="text-white/90 text-base font-semibold">강의: 멘토링 과정 • 리더십 교육 • 협회 강사 양성</p>
                                        </div>
                                        <div className="md:text-right border-t md:border-t-0 md:border-l border-[#a855f7]/30 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-[#a855f7] text-xs font-bold tracking-widest uppercase mb-2">결과</h4>
                                            <p className="text-white/90 text-sm font-medium">강사/멘토로서 성장하며 <br />사회적 영향력을 확장합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/courses/abundance"
                                    className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-[#a855f7]/30 text-[#a855f7] hover:text-white transition-all duration-500"
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
                                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-ether/20 to-transparent flex items-center justify-center border border-ether/20 relative backdrop-blur-md">
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-700 brightness-110">
                                            <Image src="/images/icon/ether.png" alt="Ether Icon" fill className="object-contain" />
                                        </div>
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
            <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-antiqueGold/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Growth Structure Card (New) */}
                    <Reveal delayMs={100}>
                        <div className="max-w-5xl mx-auto mb-24 p-10 md:p-16 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            {/* 텍스트 (위로 이동) */}
                            <div className="relative z-10 text-center mb-12">
                                <p className="text-lg md:text-xl text-white/90 font-light italic leading-relaxed break-keep mb-3">
                                    자명스쿨은 단순히 <span className="font-bold text-white">AI</span>를 배우는 곳이 아니라
                                </p>
                                <p className="text-sm md:text-base text-white/60 font-light italic mb-3 tracking-wide">
                                    마음을 이해하고 → 표현하고 → 나누고 → 수익으로 연결하고 → 리더로 확장하고
                                </p>
                                <p className="text-lg md:text-xl text-antiqueGold font-medium italic">
                                    함께 성장하는 구조입니다.
                                </p>
                            </div>

                            {/* 아이콘 (아래로 이동) */}
                            <div className="relative z-10 flex flex-nowrap md:flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide">
                                {[
                                    { src: "earth", alt: "Rooting" },
                                    { src: "fire", alt: "Creation" },
                                    { src: "air", alt: "Flow" },
                                    { src: "water", alt: "Wealth" },
                                    { src: "ether", alt: "Infinite" }
                                ].map((icon, i) => (
                                    <div key={i} className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 shrink-0">
                                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group/icon">
                                            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-0 group-hover/icon:scale-150 transition-transform duration-700" />
                                            <Image 
                                                src={`/images/icon/${icon.src}.png`} 
                                                alt={icon.alt} 
                                                fill 
                                                className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover/icon:scale-110 transition-transform duration-500" 
                                            />
                                        </div>
                                        {i < 4 && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/20 shrink-0">
                                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delayMs={300}>
                        <h1 className="text-xl md:text-3xl font-display text-white mb-12 leading-tight italic break-keep px-4 tracking-tighter">
                            자명스쿨은 단순히 AI를 배우는 곳이 아니라 <br />
                            마음의 흐름을 현실의 구조로 바꾸는 학교입니다.
                        </h1>
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
