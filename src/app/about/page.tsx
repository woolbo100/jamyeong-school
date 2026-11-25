import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import { Brain, Palette, Rocket, ArrowRight, ShieldCheck, ArrowDown, RefreshCw, Compass, Sparkles, PenTool, Share2, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30 text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <HeroParticles />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="group relative inline-block border border-antiqueGold/40 bg-antiqueGold/5 rounded-full px-6 py-2 text-antiqueGold font-display mx-auto text-sm md:text-base tracking-[0.2em] mb-8 uppercase shadow-sm cursor-default transition-all duration-300 hover:border-antiqueGold/60">
              <span className="relative z-10">한국디지털마인드코칭협회 승인</span>
              {/* Golden Aura Glow */}
              <span className="absolute -inset-1 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-lg group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
            </span>
          </Reveal>
          <Reveal delayMs={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-10 leading-tight tracking-tight uppercase italic">
              <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block py-2 pr-4">
                자명스쿨
              </span>
              <span className="text-white inline-block py-2 pr-4 ml-2">
                소개
              </span>
            </h1>
          </Reveal>
          <Reveal delayMs={400}>
            <div className="max-w-4xl mx-auto space-y-2">
              <p className="text-xl md:text-2xl text-[#E2D4BE] font-medium leading-relaxed">
                나를 이해하고, 방향을 설계하고, 디지털로 현실화하는 학교
              </p>
              <p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed">
                AI로 마음을 이해하고 콘텐츠로 표현하며 삶을 변화시키는 교육을 합니다.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={600}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/courses"
                className="group relative overflow-visible h-14 px-10 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 보러가기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* New Section 01: AI 시대의 자기이해 (The Question of Our Time) */}
      <section className="relative py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Warm Ambient Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-antiqueGold/5 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12 sm:space-y-14">
          {/* 1. 영문 소제목 */}
          <Reveal>
            <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase block">
              THE QUESTION OF OUR TIME
            </span>
          </Reveal>

          {/* 2. 핵심 질문 1 & 2 */}
          <Reveal delayMs={150}>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                AI 시대, 당신은 자신을 얼마나 알고 있나요?
              </h2>

              <div className="w-12 h-px bg-antiqueGold/35 mx-auto" />

              <div className="space-y-3">
                <p className="text-base sm:text-lg md:text-xl text-white/70 font-light tracking-wide break-keep">
                  AI가 무엇이든 만들어 줄 수 있는 시대,
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] break-keep">
                  당신은 무엇을 만들고 싶은 사람인가요?
                </p>
              </div>
            </div>
          </Reveal>

          {/* 3. 보충 질문 */}
          <Reveal delayMs={300}>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed sm:leading-loose max-w-2xl mx-auto break-keep">
              무엇을 좋아하고, 무엇을 잘하며,
              <br className="hidden sm:inline" />
              어떤 삶을 살아가고 싶은지 알고 있나요?
            </p>
          </Reveal>

          {/* 4. 통찰 및 핵심 강조 메시지 박스 */}
          <Reveal delayMs={450}>
            <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-white/[0.02] border border-antiqueGold/25 shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-w-3xl mx-auto space-y-5">
              <p className="text-base sm:text-lg md:text-xl text-white/75 font-light leading-relaxed break-keep">
                AI 시대의 진정한 경쟁력은
                <br className="hidden sm:inline" />
                기술을 익히는 속도에만 있지 않습니다.
              </p>

              <div className="w-10 h-px bg-antiqueGold/20 mx-auto" />

              <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight break-keep pt-1">
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  자신을 이해하고, 자신만의 방향을 선택하는 힘입니다.
                </span>
              </p>
            </div>
          </Reveal>

          {/* 5. 마무리 핵심 메시지 */}
          <Reveal delayMs={600}>
            <p className="text-lg sm:text-xl md:text-2xl text-antiqueGold font-medium font-serif italic tracking-wide break-keep">
              마음에서 시작하는 AI, 나로부터 시작하는 미래.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Title & Subtitle */}
          <Reveal>
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                AI 시대, 가장 먼저 알아야 할 것은{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  나 자신입니다.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-antiqueGold/90 font-serif italic tracking-wide">
                자명(自明), 스스로 밝아지는 배움.
              </p>
            </div>
          </Reveal>

          {/* Intro Story */}
          <Reveal delayMs={100}>
            <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed sm:leading-loose font-light break-keep text-center md:text-left">
              <p>
                우리는 누구나 글을 쓰고, 그림을 그리고, 영상을 만들 수 있는 시대에 살고 있습니다.
                AI는 우리의 상상을 현실로 만드는 놀라운 가능성을 열어 주고 있습니다.
              </p>
              <p className="text-white/90 font-normal">
                하지만 기술이 발전할수록 더욱 중요해지는 질문이 있습니다.
              </p>
            </div>
          </Reveal>

          {/* 4 Self-Inquiry Questions (Quote Style) */}
          <Reveal delayMs={200}>
            <blockquote className="my-8 md:my-10 p-6 md:p-8 rounded-2xl bg-white/[0.02] border-l-4 border-antiqueGold border border-white/5 space-y-3 md:space-y-4">
              <p className="text-lg md:text-xl font-medium text-white/95 tracking-wide">
                나는 어떤 사람인가.
              </p>
              <p className="text-lg md:text-xl font-medium text-white/95 tracking-wide">
                무엇을 좋아하고, 무엇을 두려워하는가.
              </p>
              <p className="text-lg md:text-xl font-medium text-white/95 tracking-wide">
                어떤 경험이 지금의 나를 만들었는가.
              </p>
              <p className="text-lg md:text-xl font-medium text-white/95 tracking-wide">
                나는 진정으로 어떤 삶을 원하는가.
              </p>
            </blockquote>
          </Reveal>

          {/* Mid Story */}
          <Reveal delayMs={250}>
            <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed sm:leading-loose font-light break-keep">
              <p>
                우리는 세상을 이해하기 위해 많은 것을 배우지만, 정작 자기 자신을 깊이 들여다보는 시간은 충분히 갖지 못합니다.
              </p>
              <p>
                마음속에 남아 있는 상처, 익숙하게 반복되는 생각과 행동, 자신도 모르게 믿어 온 오래된 신념들.
              </p>
              <p>
                그것들을 알아차리고 이해하는 순간, 우리는 자신을 새로운 시선으로 바라보기 시작합니다.
              </p>
            </div>
          </Reveal>

          {/* Key Pivot & Creation Story */}
          <Reveal delayMs={300}>
            <div className="space-y-6 break-keep">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-antiqueGold pt-2">
                자명스쿨은 바로 그 지점에서 배움을 시작합니다.
              </h3>
              <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed sm:leading-loose font-light">
                <p>
                  나의 경험을 한 권의 책으로 쓰고, 말로 표현하기 어려웠던 감정을 그림으로 그리며, 원하는 미래를 영상으로 시각화합니다.
                </p>
                <p>
                  AI는 이 과정에서 단순한 기술을 넘어, 내면의 이야기를 발견하고 표현하도록 돕는 창작의 도구가 됩니다.
                </p>
                <p>
                  우리는 창작하면서 자신을 이해하고, 기술을 배우면서 새로운 가능성을 발견합니다.
                </p>
                <p>
                  그리고 그렇게 쌓인 경험과 통찰은 다른 사람과 나누는 지식이 되고, 누군가를 이끄는 교육이 되며, 새로운 일과 경제적 가치로 확장될 수 있습니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Conclusion Highlight */}
          <Reveal delayMs={350}>
            <div className="pt-6 break-keep">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-antiqueGold/10 via-white/[0.02] to-transparent border border-antiqueGold/30">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    나를 아는 것이 모든 성장의 출발점입니다.
                  </span>
                </h3>
                <p className="text-white/85 text-base md:text-lg leading-relaxed font-light">
                  자명스쿨은 자신을 이해하는 일에서 시작해, 마음을 밝히고, 창작하고, 세상과 가치를 나누는 배움을 추구합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Jamyeong School & Brand Identity Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-14">
            {/* 1. Why Jamyeong School (Question Section) */}
            <Reveal>
              <div className="text-center space-y-8">
                {/* Label & Title */}
                <div className="space-y-3">
                  <span className="text-antiqueGold tracking-[0.3em] text-xs font-bold uppercase block">
                    WHY JAMYEONG SCHOOL?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                  AI 시대에{" "}
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자명스쿨이 필요한 이유
                  </span>
                </h2>
              </div>

              {/* Intro Text */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                AI가 발전할수록 우리가 만들 수 있는 것은 많아집니다.
                <br className="hidden sm:inline" /> 하지만 그만큼 중요한 질문도 생깁니다.
              </p>

              {/* 3 Questions (Centered Subtle Box) */}
              <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-antiqueGold/25 shadow-lg space-y-5">
                <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight break-keep">
                  나는 무엇을 만들고 싶은가?
                </p>
                <div className="w-12 h-px bg-antiqueGold/30 mx-auto" />
                <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight break-keep">
                  나는 어떤 사람이며, 무엇을 원하는가?
                </p>
                <div className="w-12 h-px bg-antiqueGold/30 mx-auto" />
                <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight break-keep">
                  내가 가진 경험과 지식을 어떻게 세상에 의미 있게 전달할 것인가?
                </p>
              </div>

              {/* Closing Sentence */}
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto break-keep pt-2">
                AI는 수많은 답과 가능성을 제시할 수 있지만,{" "}
                <strong className="text-antiqueGold font-semibold">
                  그중 무엇이 나에게 의미 있는지 선택하는 일은 결국 나 자신에게 달려 있습니다.
                </strong>
              </p>
            </div>
          </Reveal>

          {/* Connecting Arrow */}
          <div className="flex justify-center text-antiqueGold/60">
            <ArrowDown className="w-6 h-6 animate-pulse" />
          </div>

          {/* 2. Brand Identity Card */}
          <Reveal delayMs={200}>
            <div className="p-8 sm:p-10 md:p-14 rounded-[2.5rem] border border-antiqueGold/40 bg-gradient-to-b from-white/[0.04] to-transparent text-center space-y-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              {/* Ambient Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-antiqueGold/10 blur-3xl pointer-events-none rounded-full" />

              {/* Label */}
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-antiqueGold/15 border border-antiqueGold/30 text-antiqueGold tracking-[0.25em] text-xs font-bold uppercase">
                  JAMYEONG SCHOOL · BRAND IDENTITY
                </span>
              </div>

              {/* Main Headline */}
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    AI 시대, 가장 먼저 알아야 할 것은 나 자신입니다.
                  </span>
                </h3>
              </div>

              {/* Description */}
              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed sm:leading-loose break-keep">
                  자명스쿨은 자기탐구와 AI 창작을 연결하여 자신의 가능성을 발견하고, 그것을 삶과 세상 속에서 실현하도록 돕는 성장형 교육 플랫폼입니다.
                </p>
              </div>

              {/* Bottom Tagline */}
              <div className="relative z-10 pt-4">
                <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-antiqueGold font-medium text-sm sm:text-base tracking-wide shadow-sm break-keep">
                  나를 이해하고 · 나를 표현하고 · 세상과 나누다
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </section>

      {/* Brand Core Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            {/* Main Outer Rounded Container */}
            <div className="p-8 sm:p-10 md:p-14 rounded-[2.5rem] border border-white/10 bg-[#121118]/80 backdrop-blur-md shadow-2xl relative">
            {/* Top Label & Title */}
            <div className="text-center space-y-2 mb-10">
              <span className="text-antiqueGold tracking-[0.3em] text-xs font-bold uppercase block">
                BRAND CORE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight break-keep">
                자명스쿨의{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  브랜드 구조
                </span>
              </h2>
            </div>

            {/* Structure Flow */}
            <div className="flex flex-col items-center space-y-4">
              {/* 1. Philosophy Area */}
              <div className="text-center space-y-2 max-w-xl">
                <span className="inline-block px-3.5 py-1 rounded-full bg-antiqueGold/10 border border-antiqueGold/20 text-antiqueGold text-xs font-medium tracking-wide">
                  변하지 않는 철학
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight break-keep pt-1">
                  나를 아는 것이 모든 성장의 출발점
                </h3>
              </div>

              {/* Arrow 1 */}
              <div className="text-antiqueGold/70 py-1">
                <ArrowDown className="w-5 h-5" />
              </div>

              {/* 2. Customer Promise Area (Wide Rounded Card) */}
              <div className="w-full max-w-2xl p-6 sm:p-7 rounded-2xl border border-antiqueGold/30 bg-white/[0.02] text-center space-y-2.5 shadow-sm">
                <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/10 text-antiqueGold text-xs font-medium tracking-wide">
                  고객에게 전하는 약속
                </span>
                <p className="text-base sm:text-lg md:text-xl font-medium text-white/95 leading-relaxed break-keep">
                  나의 이야기를 발견하고, AI로 표현하며, 새로운 가능성을 만들다
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="text-antiqueGold/70 py-1">
                <ArrowDown className="w-5 h-5" />
              </div>

              {/* 3. 3 Pillars Area (3 Equal Columns) */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                {/* Pillar 1 */}
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-2 hover:border-antiqueGold/40 transition-colors">
                  <h4 className="text-lg font-bold text-white font-display">자기이해</h4>
                  <p className="text-sm text-antiqueGold/90 font-medium">마음공부·코칭</p>
                </div>

                {/* Pillar 2 */}
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-2 hover:border-antiqueGold/40 transition-colors">
                  <h4 className="text-lg font-bold text-white font-display">창작과 표현</h4>
                  <p className="text-sm text-antiqueGold/90 font-medium">책·아트·영상</p>
                </div>

                {/* Pillar 3 */}
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-2 hover:border-antiqueGold/40 transition-colors">
                  <h4 className="text-lg font-bold text-white font-display">가치확장</h4>
                  <p className="text-sm text-antiqueGold/90 font-medium">브랜딩·지식창업</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        </div>
      </section>

      {/* Self-Discovery Cycle Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <Reveal>
            <div className="text-center space-y-4">
              <span className="text-antiqueGold tracking-[0.25em] text-xs font-bold uppercase block">
                Self-Discovery Cycle
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                자명스쿨의{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  자기발견 순환 구조
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light tracking-wide break-keep">
                성찰에서 창작으로, 창작에서 더 깊은 자기이해로
              </p>
            </div>
          </Reveal>

          {/* Diagram Container */}
          <Reveal delayMs={150}>
            <div>
              {/* Desktop / Tablet: Circular Diagram */}
              <div className="hidden md:block relative w-[600px] h-[600px] mx-auto">
                {/* Background Orbit Ring & Curved Arrows */}
                <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                    <marker
                      id="gold-arrow"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#B89B6A" />
                    </marker>
                  </defs>

                  {/* Faint Orbit Circle */}
                  <circle
                    cx="300"
                    cy="300"
                    r="210"
                    fill="none"
                    stroke="rgba(184,155,106,0.18)"
                    strokeDasharray="5 5"
                  />

                  {/* 1 -> 2 Arrow (Top to Right) */}
                  <path
                    d="M 375 118 A 210 210 0 0 1 482 225"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                  {/* 2 -> 3 Arrow (Right to Bottom) */}
                  <path
                    d="M 482 375 A 210 210 0 0 1 375 482"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                  {/* 3 -> 4 Arrow (Bottom to Left) */}
                  <path
                    d="M 225 482 A 210 210 0 0 1 118 375"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                  {/* 4 -> 1 Arrow (Left to Top) */}
                  <path
                    d="M 118 225 A 210 210 0 0 1 225 118"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                </svg>

                {/* Central Core: 자기이해의 심화 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-antiqueGold/50 bg-[#0E0E14] shadow-[0_0_35px_rgba(184,155,106,0.25)] flex flex-col items-center justify-center p-4 text-center z-10 transition-transform duration-300 hover:scale-105">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-antiqueGold/80 mb-1">
                    Core
                  </span>
                  <p className="text-base font-display font-bold text-white leading-tight">
                    자기이해의
                    <br />
                    <span className="bg-gradient-to-r from-[#E2D4BE] to-[#B89B6A] bg-clip-text text-transparent">
                      심화
                    </span>
                  </p>
                </div>

                {/* Step 1: 탐구 (Top) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 p-5 rounded-2xl border border-white/10 bg-[#121118]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-antiqueGold/50 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ① 탐구
                  </span>
                  <h4 className="text-white font-medium text-base">나에게 질문하기</h4>
                </div>

                {/* Step 2: 표현 (Right) */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 p-5 rounded-2xl border border-white/10 bg-[#121118]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-antiqueGold/50 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ② 표현
                  </span>
                  <h4 className="text-white font-medium text-base">글·그림·영상으로 만들기</h4>
                </div>

                {/* Step 3: 발견 (Bottom) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 p-5 rounded-2xl border border-white/10 bg-[#121118]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-antiqueGold/50 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ③ 발견
                  </span>
                  <h4 className="text-white font-medium text-base">감정·취향·신념 알아차리기</h4>
                </div>

                {/* Step 4: 재해석 (Left) */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 p-5 rounded-2xl border border-white/10 bg-[#121118]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-antiqueGold/50 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ④ 재해석
                  </span>
                  <h4 className="text-white font-medium text-base">나를 새롭게 이해하기</h4>
                </div>
              </div>

              {/* Mobile: Vertical Responsive Flow */}
              <div className="block md:hidden max-w-sm mx-auto space-y-3">
                {/* Step 1 */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ① 탐구
                  </span>
                  <h4 className="text-white font-medium text-base">나에게 질문하기</h4>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ② 표현
                  </span>
                  <h4 className="text-white font-medium text-base">글·그림·영상으로 만들기</h4>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Core Badge on Mobile */}
                <div className="py-2.5 px-5 rounded-full border-2 border-antiqueGold/50 bg-[#0E0E14] text-center mx-auto w-fit shadow-[0_0_20px_rgba(184,155,106,0.2)]">
                  <span className="text-xs font-bold text-antiqueGold uppercase tracking-wider mr-2">Core</span>
                  <span className="text-sm font-display font-bold text-white">자기이해의 심화</span>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ③ 발견
                  </span>
                  <h4 className="text-white font-medium text-base">감정·취향·신념 알아차리기</h4>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ④ 재해석
                  </span>
                  <h4 className="text-white font-medium text-base">나를 새롭게 이해하기</h4>
                </div>

                {/* Loop Back Indicator */}
                <div className="pt-2 flex justify-center">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-antiqueGold/10 border border-antiqueGold/30 text-xs text-antiqueGold">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>다시 탐구로 순환하는 성장</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Description Below Diagram */}
          <Reveal delayMs={250}>
            <div className="max-w-3xl mx-auto space-y-6 text-center md:text-left break-keep">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white text-center">
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  나를 알아가기 위해 창작하고, 창작하면서 다시 나를 발견합니다.
                </span>
              </h3>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed sm:leading-loose font-light">
                <p>
                  자명스쿨에서는 자기탐구와 AI 창작이 분리되지 않습니다.
                </p>
                <p>
                  자신의 이야기를 글로 쓰고, 감정을 그림으로 표현하고, 원하는 미래를 영상으로 만들어 보는 과정에서 새로운 자신을 발견합니다.
                </p>
                <p>
                  이러한 경험이 반복되면서 자신의 생각과 가치관은 더욱 선명해지고, 자신만의 표현과 삶의 방향을 찾아갈 수 있습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero to Philosophy Divider */}
      <Reveal>
        <div className="w-full flex items-center justify-center relative z-20 py-16 opacity-80">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#B89B6A]/80 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-[#B89B6A] bg-[#0b0b10] shadow-[0_0_15px_rgba(184,155,106,0.5)]"></div>
        </div>
      </Reveal>

      {/* 2. Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-display mb-6">자명스쿨 철학</h2>
            <div className="w-20 h-1 bg-antiqueGold mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              자명스쿨은 단순한 AI 기술 교육이 아닙니다. <br />
              우리는 <span className="text-antiqueGold font-medium">‘마음’</span>을 이해하고 그것을 콘텐츠로 표현하며 <br />
              삶과 수익으로 연결하는 교육을 합니다.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "마음을 구조화하는 힘",
              desc: "추상적인 감정과 무의식을 구체적인 이야기의 틀로 정제합니다.",
              icon: <Brain className="w-12 h-12 text-[#B89B6A] drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
            {
              title: "감정을 콘텐츠로 바꾸는 힘",
              desc: "내면의 에너지를 AI라는 도구를 통해 세상에 없는 작품으로 창조합니다.",
              icon: <Palette className="w-12 h-12 text-[#B89B6A] drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
            {
              title: "AI로 표현하고 확장하는 힘",
              desc: "기술을 넘어 나만의 브랜드를 구축하고 영향력을 확장해 나갑니다.",
              icon: <Rocket className="w-12 h-12 text-[#B89B6A] drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
          ].map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 200}>
              <div className="p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-antiqueGold/40 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(184,155,106,0.1)] transition-all duration-500 text-center group">
                <div className="mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(184,155,106,0.6)] transition-all duration-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#B89B6A] transition-colors duration-300">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={600}>
          <p className="mt-16 text-center text-lg text-antiqueGold/80 italic">
            이 3가지를 통해 누구나 자신의 이야기를 브랜드로 만들 수 있도록 돕습니다.
          </p>
        </Reveal>
      </section>

      {/* New Section 02: 자명스쿨만의 독자적인 교육 영역 (Our Unique Approach) */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {/* Section Header */}
          <Reveal>
            <div className="text-center space-y-4">
              <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase block">
                OUR UNIQUE APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                자명스쿨만의{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  독자적인 교육 영역
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/70 font-light tracking-wide break-keep">
                마음공부와 감성 창작, AI 기술이 만나는 곳
              </p>
            </div>
          </Reveal>

          {/* 3-Circle Venn Diagram */}
          <Reveal delayMs={200}>
            <div className="relative w-full max-w-[620px] mx-auto px-2">
              <svg
                viewBox="0 0 680 620"
                className="w-full h-auto select-none overflow-visible"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
              >
                <defs>
                  {/* 세이지 그린 그라디언트 (마음공부) */}
                  <radialGradient id="sageGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#8BA892" stopOpacity="0.30" />
                    <stop offset="70%" stopColor="#6B8F71" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#4D6B52" stopOpacity="0.06" />
                  </radialGradient>

                  {/* 샴페인 골드 그라디언트 (감성 창작) */}
                  <radialGradient id="goldGrad" cx="65%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#E2D4BE" stopOpacity="0.32" />
                    <stop offset="70%" stopColor="#B89B6A" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#8C6E3D" stopOpacity="0.06" />
                  </radialGradient>

                  {/* 차분한 라벤더 그라디언트 (AI 기술) */}
                  <radialGradient id="lavenderGrad" cx="50%" cy="65%" r="65%">
                    <stop offset="0%" stopColor="#B8A7D9" stopOpacity="0.30" />
                    <stop offset="70%" stopColor="#9685B8" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#6E5E8E" stopOpacity="0.06" />
                  </radialGradient>

                  {/* 중앙 코어 엠블럼 백드롭 */}
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B89B6A" stopOpacity="0.35" />
                    <stop offset="65%" stopColor="#0E0E14" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0B0B10" stopOpacity="0.96" />
                  </radialGradient>
                </defs>

                {/* 1. 세 개의 동일한 크기 원 (반지름 180) */}
                {/* 왼쪽 상단 원: 마음공부 (세이지 그린) */}
                <circle
                  cx="255"
                  cy="245"
                  r="180"
                  fill="url(#sageGrad)"
                  stroke="#7FA888"
                  strokeWidth="1.75"
                  strokeOpacity="0.8"
                  style={{ mixBlendMode: "screen" }}
                />

                {/* 오른쪽 상단 원: 감성 창작 (샴페인 골드) */}
                <circle
                  cx="425"
                  cy="245"
                  r="180"
                  fill="url(#goldGrad)"
                  stroke="#C9B37E"
                  strokeWidth="1.75"
                  strokeOpacity="0.8"
                  style={{ mixBlendMode: "screen" }}
                />

                {/* 하단 원: AI 기술 (차분한 라벤더) */}
                <circle
                  cx="340"
                  cy="395"
                  r="180"
                  fill="url(#lavenderGrad)"
                  stroke="#A293C2"
                  strokeWidth="1.75"
                  strokeOpacity="0.8"
                  style={{ mixBlendMode: "screen" }}
                />

                {/* 은은한 내부 점선 보조 링 */}
                <circle cx="255" cy="245" r="172" fill="none" stroke="#7FA888" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.25" />
                <circle cx="425" cy="245" r="172" fill="none" stroke="#C9B37E" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.25" />
                <circle cx="340" cy="395" r="172" fill="none" stroke="#A293C2" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.25" />

                {/* 2. 세 원의 텍스트 (경계선과 겹치지 않는 안락한 안전지대에 배치) */}
                {/* 원 1 텍스트: 마음공부 (세이지 그린 영역) */}
                <g transform="translate(185, 162)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fill="#D8E8DB"
                    fontSize="21"
                    fontWeight="700"
                    letterSpacing="0.02em"
                    className="font-display"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
                  >
                    마음공부
                  </text>
                  <text
                    x="0"
                    y="26"
                    textAnchor="middle"
                    fill="#98B8A0"
                    fontSize="13.5"
                    fontWeight="500"
                    letterSpacing="0.05em"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
                  >
                    자기이해 · 성찰
                  </text>
                </g>

                {/* 원 2 텍스트: 감성 창작 (샴페인 골드 영역) */}
                <g transform="translate(495, 162)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fill="#F7EEDC"
                    fontSize="21"
                    fontWeight="700"
                    letterSpacing="0.02em"
                    className="font-display"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
                  >
                    감성 창작
                  </text>
                  <text
                    x="0"
                    y="26"
                    textAnchor="middle"
                    fill="#D6C6A8"
                    fontSize="13.5"
                    fontWeight="500"
                    letterSpacing="0.05em"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
                  >
                    글 · 그림 · 음악 · 영상
                  </text>
                </g>

                {/* 원 3 텍스트: AI 기술 (차분한 라벤더 영역) */}
                <g transform="translate(340, 472)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fill="#EFE9F7"
                    fontSize="21"
                    fontWeight="700"
                    letterSpacing="0.02em"
                    className="font-display"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
                  >
                    AI 기술
                  </text>
                  <text
                    x="0"
                    y="26"
                    textAnchor="middle"
                    fill="#BDB0D4"
                    fontSize="13.5"
                    fontWeight="500"
                    letterSpacing="0.05em"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
                  >
                    표현 · 구현 · 실천
                  </text>
                </g>

                {/* 3. 중앙 공통 교집합 엠블럼 (가장 중요한 시각 요소) */}
                <g transform="translate(340, 292)">
                  {/* 중앙 원형 하이라이트 뱃지 */}
                  <circle cx="0" cy="0" r="56" fill="url(#coreGlow)" stroke="#B89B6A" strokeWidth="1.5" strokeOpacity="0.75" />
                  <circle cx="0" cy="0" r="50" fill="none" stroke="#D6C6A8" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

                  {/* 중앙 텍스트 */}
                  <text
                    x="0"
                    y="-4"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="19"
                    fontWeight="700"
                    letterSpacing="0.06em"
                    className="font-display"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.95))" }}
                  >
                    자명스쿨
                  </text>
                  <text
                    x="0"
                    y="19"
                    textAnchor="middle"
                    fill="#E2D4BE"
                    fontSize="11.5"
                    fontWeight="600"
                    letterSpacing="0.12em"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.9))" }}
                  >
                    디지털마인드코칭
                  </text>
                </g>
              </svg>
            </div>
          </Reveal>

          {/* Diagram Bottom Core Copy */}
          <Reveal delayMs={350}>
            <div className="max-w-3xl mx-auto space-y-6 text-center break-keep">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  마음을 이해하고, AI로 표현하며, 삶을 창작하다.
                </span>
              </h3>

              <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed sm:leading-loose font-light">
                <p className="font-normal text-white/90">
                  자명스쿨은 마음공부와 기술 교육을 분리하지 않습니다.
                </p>
                <p>
                  자신을 이해하는 과정에서 출발하여 감성 창작으로 내면을 표현하고, AI 기술로 자신의 가능성을 구체화하는 디지털마인드코칭 교육을 지향합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. 5 Elements System Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-antiqueGold tracking-[0.3em] text-xs font-bold uppercase mb-4 block">Core Curriculum</span>
              <h2 className="text-4xl md:text-6xl font-display mb-8">자명스쿨 5원소 시스템</h2>
              <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
                자기 이해부터 수익화까지, 단계별로 성장하는 자명스쿨만의 통합 변화 시스템입니다. <br />
                우리는 배움이 아닌 ‘변화’를 만듭니다.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                id: "earth",
                label: "흙",
                name: "마음을 심다",
                image: "/images/icon/earth.png",
                desc: "자기 이해 / 책 출판",
                color: "text-earth",
                borderClass: "border-earth/30",
                hoverBorderClass: "hover:border-earth/50",
                glowClass: "via-earth",
              },
              {
                id: "fire",
                label: "불",
                name: "마음을 그리다",
                image: "/images/icon/fire.png",
                desc: "AI 아트 / 감성 표현",
                color: "text-fire",
                borderClass: "border-fire/30",
                hoverBorderClass: "hover:border-fire/50",
                glowClass: "via-fire",
              },
              {
                id: "air",
                label: "공기",
                name: "마음을 나누다",
                image: "/images/icon/air.png",
                desc: "브랜딩 / 콘텐츠 제작",
                color: "text-air",
                borderClass: "border-air/30",
                hoverBorderClass: "hover:border-air/50",
                glowClass: "via-air",
              },
              {
                id: "water",
                label: "물",
                name: "마음을 채우다",
                image: "/images/icon/water.png",
                desc: "수익화 / 자동화",
                color: "text-water",
                borderClass: "border-water/30",
                hoverBorderClass: "hover:border-water/50",
                glowClass: "via-water",
              },
              {
                id: "ether",
                label: "에테르",
                name: "마음을 비추다",
                image: "/images/icon/ether.png",
                desc: "풍요 마인드 / 리더쉽",
                color: "text-ether",
                borderClass: "border-ether/30",
                hoverBorderClass: "hover:border-ether/50",
                glowClass: "via-ether",
              },
            ].map((element, idx) => (
              <Reveal key={idx} delayMs={idx * 150}>
                <div className={`p-8 rounded-[2rem] border ${element.borderClass} bg-white/[0.02] hover:bg-white/[0.06] hover:-translate-y-1.5 hover:scale-[1.01] ${element.hoverBorderClass} hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-[400ms] group text-center h-full flex flex-col items-center relative overflow-hidden`}>
                  <div className={`text-2xl font-display mb-4 ${element.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{element.label}</div>
                  
                  <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                    <Image src={element.image} alt={element.label} fill className="object-contain" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{element.name}</h4>
                  <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{element.desc}</p>
                  {/* Subtle Glow Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent ${element.glowClass} to-transparent`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider/Transition Text */}
      <div className="py-12 text-center bg-white/[0.02]">
        <Reveal delayMs={200}>
          <p className="text-3xl md:text-4xl font-display text-white/90 tracking-widest italic mb-6">
            "자명스쿨 5원소 시스템으로 이렇게 변화, 성장합니다."
          </p>
          <p className="text-base md:text-lg text-white/40 font-light tracking-wide">
            이 흐름을 따라가면 실제 강의, 콘텐츠, 수익 구조까지 연결됩니다.
          </p>
          <div className="mt-8 w-12 h-[1px] bg-white/20 mx-auto" />
        </Reveal>
      </div>

      {/* 3.5. Growth Flow Section */}
      <section className="pb-24 pt-12 px-6 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {[
              {
                num: "01",
                name: "Earth",
                title: "나를 이해한다",
                desc: "나를 이해하고\n글, 그림으로 표현합니다.",
                color: "text-[#B89B6A]",
                bgColor: "bg-[#B89B6A]/10",
                borderColor: "border-[#B89B6A]/30",
                image: "/images/icon/earth.png"
              },
              {
                num: "02",
                name: "Fire",
                title: "나를 표현한다",
                desc: "감정과 내면에너지를\n아트로 만들어냅니다.",
                color: "text-[#EF4444]",
                bgColor: "bg-[#EF4444]/10",
                borderColor: "border-[#EF4444]/30",
                image: "/images/icon/fire.png"
              },
              {
                num: "03",
                name: "Air",
                title: "나를 전달한다",
                desc: "메시지와 콘텐츠로\n사람들과 연결합니다.",
                color: "text-[#E5E7EB]",
                bgColor: "bg-[#E5E7EB]/10",
                borderColor: "border-[#E5E7EB]/30",
                image: "/images/icon/air.png"
              },
              {
                num: "04",
                name: "Water",
                title: "돈을 흐르게 한다",
                desc: "가치를 돈으로 바꾸는\n구조를 만듭니다.",
                color: "text-[#3B82F6]",
                bgColor: "bg-[#3B82F6]/10",
                borderColor: "border-[#3B82F6]/30",
                image: "/images/icon/water.png"
              },
              {
                num: "05",
                name: "Ether",
                title: "확장된다",
                desc: "에너지를 확장하고\n세상에 영향을 미칩니다.",
                color: "text-[#A855F7]",
                bgColor: "bg-[#A855F7]/10",
                borderColor: "border-[#A855F7]/30",
                image: "/images/icon/ether.png",
              }
            ].map((item, idx) => {
              const flowGlowColors = [
                "from-[#B89B6A] via-[#D6C6A8] to-transparent", // Earth -> Fire (Gold)
                "from-[#EF4444] via-[#F87171] to-transparent", // Fire -> Air (Red)
                "from-[#E5E7EB] via-white to-transparent",     // Air -> Water (Silver/White)
                "from-[#3B82F6] via-[#A855F7] to-transparent", // Water -> Ether (Blue/Purple)
              ];

              return (
                <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
                  <div className="relative flex flex-col items-center text-center group">
                    {/* Number */}
                    <span className={`text-sm font-bold mb-4 opacity-60 ${item.color}`}>{item.num}</span>
                    
                    {/* Circle Icon Container */}
                    <div className={`w-24 h-24 rounded-full border-2 ${item.borderColor} ${item.bgColor} flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.3)] p-5`}>
                      <div className="relative w-full h-full">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>
                      
                      {/* Connecting Arrow (Desktop Only Animation) */}
                      {idx < 4 && (
                        <div className="hidden md:block absolute top-1/2 -right-full w-full h-[1px] bg-white/5 z-0">
                          {/* Base Static Line */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                          
                          {/* Animated Flow Glow */}
                          <div className={`absolute top-0 h-full w-1/2 bg-gradient-to-r ${flowGlowColors[idx]} animate-flow-line opacity-50 blur-[2px]`} />
                          
                          {/* Arrow Head */}
                          <div className="absolute right-0 -top-[3px] border-t-[1px] border-r-[1px] border-white/20 w-[7px] h-[7px] rotate-45" />
                        </div>
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h4 className={`text-lg font-bold uppercase tracking-wider ${item.color}`}>{item.name}</h4>
                      <h3 className="text-xl font-bold text-white break-keep">{item.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed whitespace-pre-line break-keep">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.6. 5-Stage Growth Journey Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <Reveal>
            <div className="text-center space-y-4">
              <span className="text-antiqueGold tracking-[0.3em] text-xs font-bold uppercase block">
                JAMYEONG GROWTH JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white break-keep">
                나를 아는 것에서 시작되는{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  성장
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light tracking-wide break-keep max-w-2xl mx-auto">
                내면의 발견이 창작과 나눔, 풍요로운 삶으로 이어집니다.
              </p>
            </div>
          </Reveal>

          {/* 5 Stages Flow */}
          <div className="relative">
            {/* Desktop: Horizontal 5-Step Flow */}
            <div className="hidden lg:grid grid-cols-5 gap-4 relative">
              {[
                {
                  num: "01",
                  title: "자기탐구",
                  desc: "나의 감정·경험·무의식적 신념 이해",
                  icon: <Compass className="w-6 h-6 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "02",
                  title: "내면성장",
                  desc: "자기수용·재해석·새로운 관점 형성",
                  icon: <Sparkles className="w-6 h-6 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "03",
                  title: "창작표현",
                  desc: "AI 글쓰기·그림책·감성아트·영상",
                  icon: <PenTool className="w-6 h-6 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "04",
                  title: "가치나눔",
                  desc: "지식공유·교육·코칭·콘텐츠",
                  icon: <Share2 className="w-6 h-6 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "05",
                  title: "풍요확장",
                  desc: "브랜딩·리더십·지식창업·수익화",
                  icon: <TrendingUp className="w-6 h-6 text-antiqueGold" strokeWidth={1.75} />,
                },
              ].map((step, idx) => (
                <Reveal key={idx} delayMs={idx * 100}>
                  <div className="relative h-full">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#121118]/90 hover:border-antiqueGold/50 transition-all duration-300 flex flex-col items-center text-center h-full group shadow-lg">
                      <span className="text-xs font-mono font-bold text-antiqueGold/90 tracking-widest px-2.5 py-0.5 rounded-full bg-antiqueGold/10 mb-4 border border-antiqueGold/20">
                        {step.num}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-antiqueGold/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-antiqueGold/50 transition-all duration-300">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 font-display">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed break-keep font-light">{step.desc}</p>
                    </div>

                    {/* Connecting Arrow for Desktop */}
                    {idx < 4 && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#0b0b10] border border-antiqueGold/40 flex items-center justify-center shadow-md pointer-events-none">
                        <ArrowRight className="w-3.5 h-3.5 text-antiqueGold" />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile / Tablet: Vertical Connected Flow */}
            <div className="lg:hidden max-w-md mx-auto space-y-3">
              {[
                {
                  num: "01",
                  title: "자기탐구",
                  desc: "나의 감정·경험·무의식적 신념 이해",
                  icon: <Compass className="w-5 h-5 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "02",
                  title: "내면성장",
                  desc: "자기수용·재해석·새로운 관점 형성",
                  icon: <Sparkles className="w-5 h-5 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "03",
                  title: "창작표현",
                  desc: "AI 글쓰기·그림책·감성아트·영상",
                  icon: <PenTool className="w-5 h-5 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "04",
                  title: "가치나눔",
                  desc: "지식공유·교육·코칭·콘텐츠",
                  icon: <Share2 className="w-5 h-5 text-antiqueGold" strokeWidth={1.75} />,
                },
                {
                  num: "05",
                  title: "풍요확장",
                  desc: "브랜딩·리더십·지식창업·수익화",
                  icon: <TrendingUp className="w-5 h-5 text-antiqueGold" strokeWidth={1.75} />,
                },
              ].map((step, idx) => (
                <div key={idx} className="space-y-3">
                  <Reveal delayMs={idx * 100}>
                    <div className="p-5 rounded-2xl border border-white/10 bg-[#121118]/90 flex items-center gap-4 shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-antiqueGold/25 flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-antiqueGold/80 tracking-wider">
                            {step.num}
                          </span>
                          <h4 className="text-base font-bold text-white font-display">{step.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-white/60 leading-relaxed break-keep font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  {idx < 4 && (
                    <div className="flex justify-center text-antiqueGold/60 py-0.5">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlight & Educational Philosophy */}
          <Reveal delayMs={300}>
            <div className="max-w-3xl mx-auto text-center space-y-4 pt-6 break-keep">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-antiqueGold/10 via-white/[0.02] to-antiqueGold/10 border border-antiqueGold/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <p className="text-lg md:text-xl font-display font-bold text-white leading-relaxed">
                  <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자기탐구와 창작은 반복하며 깊어지고, 그 경험은 새로운 가치로 확장됩니다.
                  </span>
                </p>
                <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                  5단계는 고정된 일방통행의 경로가 아니라 서로 순환하며 깊어지는 성장 과정입니다. 풍요확장은 수익의 보장이 아닌, 자신의 고유한 경험과 지식이 세상과 만나 사회적·경제적 가치로 확장되는 열린 가능성을 의미합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Instructor Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-antiqueGold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 aspect-[4/5] md:aspect-[3/4] transition-all duration-700 group-hover:translate-y-[-8px] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/about/instructor.jpg"
                  alt="자명쌤 백진선 프로필"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-softBlack/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hidden md:flex flex-col justify-center transition-all duration-500 group-hover:translate-y-[-4px] group-hover:border-antiqueGold/30 group-hover:shadow-2xl">
                <span className="text-antiqueGold font-display text-4xl mb-2 italic">Vision</span>
                <p className="text-white/60 text-xs leading-relaxed">
                  마음을 콘텐츠로 바꾸는 <br />
                  가장 아름다운 기술
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal slideFrom="right">
              <div className="flex items-center space-x-3 text-antiqueGold mb-6">
                <span className="font-display tracking-[0.3em] text-xs uppercase">Founder & Instructor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-2 text-white italic lowercase tracking-tight">
                자명쌤 <span className="bg-gradient-to-r from-antiqueGold to-champagneGold bg-clip-text text-transparent font-sans not-italic text-3xl font-bold ml-2">백진선</span>
              </h2>
              <p className="text-white/40 font-light mb-8 italic">AI × 심리 × 인문학을 결합한 교육 전문가</p>
              
              <div className="space-y-8 mb-12">
                <p className="text-white/80 font-light leading-relaxed break-keep">
                  심리학 전공을 기반으로 NLP, 최면, 명상, 브레인 트레이닝 등 사람의 무의식과 변화 구조를 연구해왔으며, AI 관련 자격증 30개 이상과 강의·콘텐츠 제작·수익화 경험을 통해 검증된 실전 교육을 제공합니다.
                </p>

                {/* 3. 핵심 정체성 문장 (독립적 강조 영역) */}
                <div className="py-4.5 px-5 sm:px-6 rounded-xl border border-antiqueGold/25 border-l-[3px] border-l-antiqueGold bg-antiqueGold/[0.03] backdrop-blur-xs">
                  <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed break-keep tracking-tight">
                    “저는 <span className="text-antiqueGold font-semibold">사람의 내면 변화</span>와{" "}
                    <br className="sm:hidden" />
                    <span className="text-antiqueGold font-semibold">디지털 기술</span>을 연결하는{" "}
                    <br className="sm:hidden" />
                    <span className="text-antiqueGold font-semibold">교육과 코칭</span>을 합니다.”
                  </p>
                </div>

                <p className="text-white/80 font-light leading-relaxed break-keep">
                  자명심리문화연구소 대표, 한국디지털마인드코칭협회 협회장, 그리고 이끌림출판사 대표로서 단순한 정보 전달을 넘어 사람들의 내면에 잠든 창의성을 깨우는 일을 하고 있습니다.
                </p>

                <ul className="space-y-3 text-white/60 text-sm font-light pt-2">
                  <li className="flex items-start gap-3 text-antiqueGold/90 font-medium">
                    <span className="text-antiqueGold">✔</span> 
                    <span>자명심리문화연구소 / 한국디지털마인드코칭협회 / 이끌림출판사 대표</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>구글 공인 교육자 (Google Certified Educator) 인증</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>국제디지털콘텐츠협회 지국장</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>50권 이상 저서 출간 작가 및 출판 지도사</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>AI 그림책 / 감성 콘텐츠 제작 전문가</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>1,000명 이상의 수강생과 3,000건 이상의 코칭 프로젝트 진행</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border border-antiqueGold/20 bg-antiqueGold/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-12 h-12 text-antiqueGold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3601 14 12.017 12.6569 12.017 11V7C12.017 5.34315 13.3601 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V16C22.017 18.7614 19.7784 21 17.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697V14H3.01697C1.36012 14 0.0169678 12.6569 0.0169678 11V7C0.0169678 5.34315 1.36012 4 3.01697 4H7.01697C8.67383 4 10.017 5.34315 10.017 7V16C10.017 18.7614 7.77839 21 5.01697 21H2.01697Z" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl text-antiqueGold font-display leading-tight italic">
                  “AI는 단순한 도구가 아니라 <br />
                  마음을 표현하는 가장 현대적인 언어입니다.”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4.5 Professional Certification Courses Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16 px-4">
          <Reveal>
            <div className="flex items-center justify-center space-x-3 text-antiqueGold mb-4">
              <span className="font-display tracking-[0.3em] text-xs uppercase">Professional Certifications</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6 leading-tight break-keep">
              자명스쿨은 마음과 디지털 역량을 연결하는 <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent font-bold inline-block px-1">
                5개의 전문 자격과정
              </span>
              을 운영합니다.
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed break-keep">
              한국디지털마인드코칭협회 공식 인증 커리큘럼을 통해 내면의 본질을 세우고,
              디지털과 AI 기술로 세상에 가치를 전하는 전문 강사·지도사로 성장하세요.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            {
              title: "디지털마인드코칭전문가",
              badge: "제5원소 에테르",
              category: "마인드 & 리더십",
              desc: "무의식과 잠재력을 깨우고 디지털 시대 풍요로운 삶의 좌표를 이끄는 최고위 코칭 과정",
              image: "/images/icon/ether.png",
              link: "/courses/abundance",
              color: "text-[#A855F7]",
              borderColor: "border-[#A855F7]/30",
              badgeBg: "bg-[#A855F7]/10 text-[#C084FC]",
              glowColor: "rgba(168, 85, 247, 0.15)",
            },
            {
              title: "AI브랜딩마스터강사",
              badge: "제4원소 물",
              category: "비즈니스 & 수익화",
              desc: "고유한 가치와 AI 자동화 시스템을 결합하여 지속 가능한 디지털 수익 자산을 구축하는 과정",
              image: "/images/icon/water.png",
              link: "/courses/water",
              color: "text-water",
              borderColor: "border-water/30",
              badgeBg: "bg-water/10 text-water",
              glowColor: "rgba(56, 189, 248, 0.15)",
            },
            {
              title: "캔바콘텐츠마스터강사",
              badge: "제3원소 공기",
              category: "콘텐츠 & 강의",
              desc: "캔바와 AI를 활용하여 시선을 사로잡는 고품격 비주얼 콘텐츠와 명품 강의 교안을 제작하는 과정",
              image: "/images/icon/air.png",
              link: "/courses/air",
              color: "text-air",
              borderColor: "border-air/30",
              badgeBg: "bg-air/10 text-[#F1E5AC]",
              glowColor: "rgba(226, 212, 190, 0.15)",
            },
            {
              title: "감성출판지도사",
              badge: "제1원소 흙",
              category: "자기인식 & 출판",
              desc: "내면의 경험과 통찰을 정돈하여 세상에 단 하나뿐인 브랜딩 그림책과 에세이를 기획·출판하는 과정",
              image: "/images/icon/earth.png",
              link: "/courses/earth",
              color: "text-earth",
              borderColor: "border-earth/30",
              badgeBg: "bg-earth/10 text-earth",
              glowColor: "rgba(184, 155, 106, 0.15)",
            },
            {
              title: "AI감성아트지도사",
              badge: "제2원소 불",
              category: "감정표현 & 아트",
              desc: "감정과 내면 세계관을 최첨단 생성형 AI 아트로 시각화하고 실제 작품과 굿즈로 확장하는 과정",
              image: "/images/icon/fire.png",
              link: "/courses/fire",
              color: "text-fire",
              borderColor: "border-fire/30",
              badgeBg: "bg-fire/10 text-fire",
              glowColor: "rgba(239, 68, 68, 0.15)",
            },
          ].map((course, idx) => (
            <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
              <div className="h-full p-7 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-antiqueGold/40 hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                {/* Glow backdrop on hover */}
                <div 
                  className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none -z-10" 
                  style={{
                    background: `radial-gradient(400px circle at 50% 0%, ${course.glowColor}, transparent 70%)`
                  }}
                />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border border-white/10 ${course.badgeBg}`}>
                      {course.badge}
                    </span>
                    <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-500">
                      <Image src={course.image} alt={course.title} fill className="object-contain" />
                    </div>
                  </div>

                  <p className="text-xs text-white/40 tracking-wider mb-2 font-light">{course.category}</p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-antiqueGold transition-colors break-keep leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6 break-keep">
                    {course.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={course.link}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white/90 text-sm font-semibold flex items-center justify-center gap-2 group/btn hover:bg-gradient-to-r hover:from-antiqueGold hover:to-champagneGold hover:text-[#0B0B10] hover:border-transparent transition-all duration-300"
                  >
                    <span>과정 자세히 보기</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300 text-xs">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* KDMCA Association Link Banner */}
        <div className="mt-14 max-w-4xl mx-auto">
          <Reveal delayMs={200} slideFrom="bottom">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-antiqueGold/30 hover:border-antiqueGold/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>공식 자격증 발급·인증 기관</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  한국디지털마인드코칭협회 <span className="text-antiqueGold text-base font-normal">(KDMCA)</span>
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed break-keep">
                  자명스쿨의 5대 민간자격과정 공식 인증 기준 및 협회 설립 목적과 비전을 확인하실 수 있습니다.
                </p>
              </div>

              <Link
                href="/kdmca"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] font-bold text-sm tracking-tight flex items-center gap-2 shadow hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>협회 소개 바로가기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Target Audience Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto py-16 px-8 rounded-[3rem] border border-white/5 bg-white/[0.01] text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display mb-12">이런 분들에게 추천합니다</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "나만의 콘텐츠를 만들고 싶은 분",
                "AI로 수익을 만들고 싶은 분",
                "감성과 이야기를 표현하고 싶은 분",
                "강의 / 전자책 / 브랜드를 만들고 싶은 분",
                "새로운 삶의 방향을 찾고 있는 분",
                "디지털 도구를 가치 있게 쓰고 싶은 분",
                "나를 표현하고 가치를 전달하고 싶으신 분",
                "AI시대 마음과 기술을 융합하고 싶으신 분",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/15 hover:translate-x-1.5 transition-all duration-300 group cursor-default">
                  <span className="text-antiqueGold text-lg leading-none group-hover:scale-150 transition-transform">●</span>
                  <span className="text-white/80 font-light group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Results/Transformation Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 px-4">
             <h2 className="text-2xl md:text-3xl font-display text-antiqueGold tracking-[0.2em] mb-4 uppercase">Transformation</h2>
            <h3 className="text-4xl md:text-6xl font-display mb-8">자명스쿨에서 얻을 수 있는 변화</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "콘텐츠 제작 능력", desc: "나만의 고유한 메시지를 창작물로 변형" },
            { title: "AI 실전 스킬", desc: "이미지, 텍스트, 자동화 도구 숙달" },
            { title: "브랜드 구축", desc: "고유한 페르소나와 정체성 확립" },
            { title: "수익화 구조", desc: "지식 창업과 콘텐츠 기반 수익 시스템" },
            { title: "삶의 자신감", desc: "도구에 매몰되지 않는 주체적 변화" },
          ].map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 150} slideFrom="bottom">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/[0.06] hover:border-antiqueGold/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-500 h-full flex flex-col justify-center text-center group">
                <div className="text-3xl mb-4 font-display text-[#B89B6A]/50 group-hover:text-[#B89B6A]/80 transition-colors">{idx + 1}</div>
                <h4 className="text-lg font-bold mb-3 text-[#B89B6A] group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delayMs={800}>
          <p className="mt-20 text-center text-xl md:text-2xl font-display text-white italic tracking-wide">
             단순한 배움을 넘어, <br className="md:hidden" />
             삶의 <span className="text-antiqueGold">전환</span>을 경험하게 됩니다.
          </p>
        </Reveal>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h3 className="text-4xl md:text-6xl font-display mb-12 leading-tight tracking-tight italic uppercase">
              지금 당신의 <span className="text-antiqueGold">새로운 가능성</span>을 <br />
              자명스쿨에서 시작하세요
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/courses"
                className="group relative overflow-visible h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 보러가기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>

              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                무료특강 참여하기
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
