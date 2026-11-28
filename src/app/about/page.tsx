import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import { Brain, Palette, Rocket, ArrowRight, ShieldCheck, ArrowDown, RefreshCw, Compass, Sparkles, PenTool, Share2, TrendingUp, BookOpen, Users, Heart, Music, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30 text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
        <HeroParticles />
        <div className="site-container relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="group relative inline-block border border-[#B89B6A]/40 bg-antiqueGold/5 rounded-full px-6 py-2 text-antiqueGold font-display mx-auto text-sm md:text-base tracking-[0.2em] mb-8 uppercase shadow-sm cursor-default transition-all duration-300 hover:border-[#B89B6A]/60">
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
          </div>

          {/* 신규 Hero 먹물 아트 이미지 */}
          <Reveal delayMs={500}>
            <div className="mt-8 md:mt-10 max-w-[1280px] mx-auto">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/jamyeong-digital-ink-art.webp"
                  alt="자명스쿨 디지털 먹물 아트"
                  width={1672}
                  height={941}
                  priority
                  className="w-full h-auto object-contain rounded-2xl"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </div>
          </Reveal>

          {/* CTA 버튼 영역 */}
          <Reveal delayMs={600}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              {/* 버튼 1: 자격과정 둘러보기 (골드 배경) */}
              <Link
                href="/apply"
                className="group relative overflow-visible h-14 w-full sm:w-64 flex items-center justify-center gap-2 text-sm font-bold tracking-wider rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">자격과정 둘러보기</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full pointer-events-none" />
              </Link>

              {/* 버튼 2: 원데이 클래스 둘러보기 (투명 배경 + 골드 테두리 + 골드 텍스트) */}
              <Link
                href="/oneday"
                className="group relative overflow-visible h-14 w-full sm:w-64 flex items-center justify-center gap-2 text-sm font-bold tracking-wider rounded-full border border-[#B89B6A] bg-transparent text-[#E2D4BE] hover:text-white hover:bg-[#B89B6A]/15 hover:border-[#D6C6A8] shadow-lg transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">원데이 클래스 둘러보기</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute -inset-1 bg-[#B89B6A] opacity-0 blur-md group-hover:opacity-25 transition-opacity duration-300 rounded-full pointer-events-none" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* New Section 01: AI 시대의 자기이해 (The Question of Our Time) */}
      <section className="relative py-20 lg:py-24 border-b border-white/5 overflow-hidden">
        {/* Warm Ambient Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-antiqueGold/5 blur-3xl pointer-events-none rounded-full" />

        <div className="site-container relative z-10">
          <div className="max-w-[1280px] mx-auto text-center">
            {/* 1. 영문 소제목 */}
            <Reveal>
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  THE QUESTION OF OUR TIME
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
            </Reveal>

            {/* 2. 메인 제목 */}
            <Reveal delayMs={150}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                AI 시대, 당신은 자신을 얼마나 알고 있나요?
              </h2>
            </Reveal>

            {/* 3. 설명 및 강조 질문 (메인 제목과 설명 문구 사이 24~32px) */}
            <Reveal delayMs={250}>
              <div className="mt-6 sm:mt-8 space-y-4 max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-white/70 font-light leading-[1.75] tracking-wide break-keep">
                  AI가 무엇이든 만들어 줄 수 있는 시대,
                </p>
                <p className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] leading-[1.4] break-keep">
                  당신은 무엇을 만들고 싶은 사람인가요?
                </p>
                <p className="text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep pt-1">
                  무엇을 좋아하고, 무엇을 잘하며,
                  <br className="hidden sm:inline" />
                  어떤 삶을 살아가고 싶은지 알고 있나요?
                </p>
              </div>
            </Reveal>

            {/* 4. 통찰 및 핵심 강조 메시지 박스 (설명 문구와 강조 카드 사이 32~40px) */}
            <Reveal delayMs={400}>
              <div className="mt-8 sm:mt-10 w-full max-w-[1280px] mx-auto py-10 sm:py-12 px-6 sm:px-10 rounded-3xl bg-[#141211]/80 backdrop-blur-sm border border-[#B89B6A]/25 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                {/* 카드 내부 일반 설명 문구 18px */}
                <p className="text-base md:text-lg text-white/75 font-light leading-[1.75] break-keep">
                  AI 시대의 진정한 경쟁력은 기술을 익히는 속도에만 있지 않습니다.
                </p>

                {/* 신규 추가 문구: 18px, 골드, 상하 간격 12~16px */}
                <p className="text-lg text-antiqueGold font-medium break-keep mt-3 sm:mt-4">
                  남의 답이 아니라, 내가 가야 할 방향을 찾는 것.
                </p>

                {/* 마지막 강조 문구: 서체/크기 유지, PC 한 줄(nowrap), 간격 24px */}
                <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight break-keep mt-6 leading-[1.4] whitespace-normal md:whitespace-nowrap">
                  <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자신을 이해하고, 자신만의 방향을 선택하는 힘입니다.
                  </span>
                </p>
              </div>
            </Reveal>

            {/* 5. 카드 외부 하단 마무리 문구 (강조 카드와 하단 마무리 문구 사이 32px) */}
            <Reveal delayMs={550}>
              <p className="mt-8 text-base sm:text-lg md:text-xl text-antiqueGold font-medium font-serif italic tracking-wide break-keep leading-[1.75]">
                마음에서 시작하는 AI, 나로부터 시작하는 미래.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Story Section: STEP 03 자기발견과 성찰 */}
      <section className="py-20 lg:py-24 border-b border-white/5">
        <div className="site-container">
          <div className="max-w-[1280px] mx-auto space-y-12 sm:space-y-16">
            {/* 1. 섹션 헤더 */}
            <Reveal>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    THE JOURNEY WITHIN
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  모든 가능성의 시작은
                  <br />
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    나를 이해하는 것에서부터
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* 2. 좌우 2단 레이아웃 (좌: 45%, 우: 55%, 간격: 40~48px, 수직 중앙 정렬) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* 왼쪽: 이미지 영역 (45% -> lg:col-span-5) - 모바일 위쪽 */}
              <div className="lg:col-span-5 w-full order-1">
                <Reveal delayMs={150}>
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about/self-reflection.webp"
                      alt="자기발견과 성찰 - 자명스쿨"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </Reveal>
              </div>

              {/* 오른쪽: 본문 영역 (55% -> lg:col-span-7) - 모바일 아래쪽 */}
              <div className="lg:col-span-7 w-full text-left order-2">
                <Reveal delayMs={250}>
                  <div className="space-y-6">
                    {/* 상단 설명: 18px, 줄간격 1.75 */}
                    <p className="text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep">
                      우리는 세상을 이해하기 위해 많은 것을 배우지만, 정작 자기 자신을 깊이 들여다보는 시간은 충분히 갖지 못합니다.
                    </p>

                    {/* 자기성찰 질문 카드: 질문 20px, 볼드, 간격 12~16px, 내부패딩 28~32px */}
                    <div className="p-7 sm:p-8 rounded-2xl bg-[#141211]/90 backdrop-blur-sm border-l-4 border-[#B89B6A] border border-[#B89B6A]/25 space-y-3 sm:space-y-4">
                      <p className="text-lg sm:text-xl font-bold text-white/95 tracking-wide leading-snug">
                        나는 어떤 사람인가.
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-white/95 tracking-wide leading-snug">
                        무엇을 좋아하고, 무엇을 두려워하는가.
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-white/95 tracking-wide leading-snug">
                        어떤 경험이 지금의 나를 만들었는가.
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-white/95 tracking-wide leading-snug">
                        나는 진정으로 어떤 삶을 원하는가.
                      </p>
                    </div>

                    {/* 하단 설명: 문단 사이 12~16px, 18px, 줄간격 1.75 */}
                    <div className="space-y-3 sm:space-y-4 text-white/80 text-base md:text-lg leading-[1.75] font-light break-keep">
                      <p>
                        마음속에 남아 있는 상처, 익숙하게 반복되는 생각과 행동, 자신도 모르게 믿어 온 오래된 신념들.
                      </p>
                      <p>
                        그것들을 알아차리고 이해하는 순간, 우리는 자신을 새로운 시선으로 바라보기 시작합니다.
                      </p>
                    </div>

                    {/* 은은한 골드 계열 구분선 */}
                    <div className="w-16 h-px bg-antiqueGold/30 pt-1" />

                    {/* 신규 추가 강조 문구 2개 (20px, font-weight: 500~600, 줄간격 1.7, 간격 16px) */}
                    <div className="space-y-4 break-keep">
                      <p className="text-lg sm:text-xl font-medium text-antiqueGold leading-[1.7]">
                        기술이 모든 것을 대신해 주는 시대일수록, 결국 삶의 방향을 결정하는 힘은 '나를 아는 깊이'에서 나옵니다.
                      </p>
                      <p className="text-lg sm:text-xl font-medium text-white/95 leading-[1.7]">
                        자명스쿨은 당신의 내면과 새로운 도구가 만나, 온전한 나만의 언어로 피어나는 시간입니다.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 04: 자명의 의미와 브랜드 철학 (THE ORIGIN OF JAMYEONG) */}
      <section className="py-20 lg:py-24 border-b border-white/5">
        <div className="site-container">
          <div className="max-w-[1280px] mx-auto space-y-12 sm:space-y-16">
            {/* 1. 섹션 헤더 */}
            <Reveal>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    THE ORIGIN OF JAMYEONG
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  자명(自明),{" "}
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    스스로 밝아지는 배움
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* 2. 좌우 2단 레이아웃 (좌 본문: 55%, 우 이미지: 45%, 간격: 40~48px, 수직 중앙 정렬) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* 오른쪽 이미지: 모바일에서는 위쪽(order-1), PC에서는 오른쪽(lg:order-2, lg:col-span-5) */}
              <div className="lg:col-span-5 w-full order-1 lg:order-2">
                <Reveal delayMs={150}>
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about/jamyeong-origin.webp"
                      alt="자명의 의미와 브랜드 철학 - 자명스쿨"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </Reveal>
              </div>

              {/* 왼쪽 본문: 모바일에서는 아래쪽(order-2), PC에서는 왼쪽(lg:order-1, lg:col-span-7) */}
              <div className="lg:col-span-7 w-full text-left order-2 lg:order-1">
                <Reveal delayMs={250}>
                  <div className="space-y-6">
                    {/* 중간 제목: 24px, 화이트 컬러, 왼쪽 정렬 */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-[1.4] break-keep">
                      스스로를 밝히는 배움, 자명(自明)의 철학
                    </h3>

                    {/* 브랜드 탄생 이야기 (중간 제목과 첫 문단 사이 24px, 문단 사이 16~20px) */}
                    <div className="space-y-4 sm:space-y-5 text-white/80 text-base md:text-lg leading-[1.75] font-light break-keep">
                      <p>
                        한때는 세상이 정해놓은 성공의 기준과 타인의 시선에 맞추어 숨 가쁘게 달려왔습니다. 하지만 남의 기준을 쫓던 길의 끝에서 깊은 시련과 마주했고, 모든 소음이 멈춘 고독한 시간 속에서야 비로소 멈춰 서서 내 안을 깊이 들여다보게 되었습니다.
                      </p>
                      <p>
                        화려한 외부의 빛이 아니라, 내 안의 고요 속에서 스스로 빛나는 나만의 가치를 발견했을 때 비로소 흔들리지 않는 삶의 중심이 세워졌습니다. 그 치열한 성찰의 끝에서{" "}
                        <strong className="text-antiqueGold font-bold">
                          '스스로 밝아진다'는 뜻의 자명(自明)스쿨
                        </strong>
                        이 탄생했습니다.
                      </p>
                    </div>

                    {/* 하단 슬로건 하이라이트 박스 (두 번째 문단과 간격 24~32px) */}
                    <div className="mt-6 sm:mt-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-antiqueGold/10 via-[#141211]/80 to-transparent border border-[#B89B6A]/25 break-keep">
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 leading-[1.4]">
                        <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                          나를 아는 것이 모든 성장의 출발점입니다.
                        </span>
                      </h4>
                      <p className="text-white/80 text-base md:text-lg leading-[1.75]">
                        세상이 요구하는 기준에 맞추는 배움이 아니라, 내가 누구인지 알고 나다운 방식으로 세상과 소통하는 배움.
                      </p>
                      <p className="text-white/80 text-base md:text-lg leading-[1.75] mt-2">
                        그것이 자명스쿨이 지향하는 교육의 본질입니다.
                      </p>
                      <p className="text-white/85 text-base md:text-lg leading-[1.75] font-light mt-4 pt-3 border-t border-[#B89B6A]/15">
                        자명스쿨은 자신을 이해하는 일에서 시작해, 마음을 밝히고, 창작하고, 세상과 가치를 나누는 배움을 추구합니다.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jamyeong School & Brand Identity Section */}
      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="site-container">
          <div className="max-w-[1280px] mx-auto space-y-12 sm:space-y-14">
            {/* 1. Why Jamyeong School (Question Section) */}
            <Reveal>
              <div className="text-center">
                {/* Label */}
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    WHY JAMYEONG SCHOOL?
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                </div>

                {/* 메인 제목 (첫 줄: 화이트, 둘째 줄: 골드 그라데이션, 줄간격 1.4) */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  당신 안의 가능성을
                  <br />
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    어떻게 세상에 펼칠 것인가?
                  </span>
                </h2>

                {/* 제목 하단 설명 문구 (18px, 중앙 정렬, 메인 제목과 간격 20~24px) */}
                <div className="mt-5 sm:mt-6 space-y-1.5 text-base md:text-lg text-white/80 font-light leading-[1.75] max-w-2xl mx-auto break-keep">
                  <p>AI가 발전할수록 우리가 만들 수 있는 것은 많아집니다.</p>
                  <p>이제 중요한 것은 그 가능성을 어디에 사용할 것인가입니다.</p>
                </div>

                {/* 3 Questions (최대 너비 1280px 전폭 카드, 설명 문구와 간격 32~40px) */}
                <div className="mt-8 sm:mt-10 w-full max-w-[1280px] mx-auto py-10 sm:py-12 px-6 sm:px-10 rounded-2xl bg-[#141211]/80 backdrop-blur-sm border border-[#B89B6A]/25 shadow-lg space-y-5 sm:space-y-6">
                  <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight break-keep leading-[1.4]">
                    나는 무엇을 만들고 싶은가?
                  </p>
                  <div className="w-16 h-px bg-antiqueGold/25 mx-auto" />
                  <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight break-keep leading-[1.4]">
                    나는 어떤 사람이며, 무엇을 원하는가?
                  </p>
                  <div className="w-16 h-px bg-antiqueGold/25 mx-auto" />
                  <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight break-keep leading-[1.4] whitespace-normal md:whitespace-nowrap">
                    내가 가진 경험과 지식을 어떻게 세상에 의미 있게 전달할 것인가?
                  </p>
                </div>

                {/* 카드 하단 마무리 문구 (질문 카드와 간격 32~40px) */}
                <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 max-w-3xl mx-auto break-keep">
                  {/* 일반 설명 문구: 18px */}
                  <p className="text-base md:text-lg text-white/80 font-light leading-[1.75]">
                    AI는 수많은 답과 가능성을 제시할 수 있지만,
                  </p>

                  {/* 핵심 강조 문구: 24px, 제목 서체, 골드 그라데이션, 일반 설명과 간격 12~16px */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold leading-[1.4] tracking-tight">
                    <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                      그중 무엇이 나에게 의미 있는지 선택하는 일은
                      <br className="hidden sm:inline" />{" "}
                      결국 나 자신에게 달려 있습니다.
                    </span>
                  </h3>
                </div>
              </div>
            </Reveal>

          {/* Connecting Arrow */}
          <div className="flex justify-center text-antiqueGold/60 pt-4">
            <ArrowDown className="w-6 h-6 animate-pulse" />
          </div>

          {/* 2. Brand Identity Card */}
          <Reveal delayMs={200}>
            <div className="w-full max-w-[1280px] mx-auto p-8 sm:p-10 md:p-14 rounded-[2.5rem] border border-[#B89B6A]/25 bg-gradient-to-b from-white/[0.04] to-transparent text-center space-y-6 sm:space-y-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              {/* Ambient Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-antiqueGold/10 blur-3xl pointer-events-none rounded-full" />

              {/* Label */}
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-antiqueGold/15 border border-[#B89B6A]/25 text-antiqueGold tracking-[0.25em] text-xs font-bold uppercase">
                  JAMYEONG SCHOOL · BRAND IDENTITY
                </span>
              </div>

              {/* Main Headline: 32px (자기발견에서 창조로 슬로건과 동일 크기), 붓글씨 계열 서체, 골드 그라데이션 */}
              <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    나만의 세계관에 AI를 입히다
                  </span>
                </h3>
              </div>

              {/* Description Body: 18px, 줄간격 1.75, 문단 간격 16~20px, max-w-4xl 확장 */}
              <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-5 text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep">
                <p>
                  자신을 이해하면 나만의 가치관과 삶의 방향이 선명해지고,
                  <br className="hidden sm:inline" />{" "}
                  그 안에서 누구도 대신할 수 없는 나만의 세계관이 만들어집니다.
                </p>
                <p>
                  AI는 그 세계관을 글과 그림, 음악과 영상으로 표현하고,
                  <br className="hidden sm:inline" />{" "}
                  내면의 가능성을 세상 속의 새로운 가치로 실현하도록 돕는 도구입니다.
                </p>
              </div>

              {/* 하단 강조 문단: 20px, 골드 그라데이션 및 볼드 */}
              <div className="relative z-10 max-w-4xl mx-auto pt-1 break-keep">
                <p className="text-lg sm:text-xl font-display font-bold leading-[1.6]">
                  <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자명스쿨은 당신만의 세계관이 창작이 되고,
                    <br className="hidden sm:inline" />{" "}
                    그 창작이 삶의 성장과 풍요로 이어지는 배움을 추구합니다.
                  </span>
                </p>
              </div>

              {/* Bottom Tagline: 16px 캡슐형 슬로건 */}
              <div className="relative z-10 pt-2">
                <div className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-antiqueGold/10 border border-[#B89B6A]/25 text-antiqueGold font-medium text-sm sm:text-base tracking-wide shadow-sm break-keep">
                  자기발견 · 세계관 형성 · AI 창작 · 가치 실현
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </section>

      {/* STEP 06: 마음공부와 AI 감성 창작의 융합 (FROM MIND TO CREATION) */}
      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="site-container">
          <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-12">
            {/* 1. 섹션 헤더 */}
            <Reveal>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    FROM MIND TO CREATION
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  마음에서 시작된 창작,
                  <br />
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    삶의 가치로 이어지다
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* 2. 가로형 16:9 이미지 영역 (메인 제목과 간격 32~40px) */}
            <Reveal delayMs={150}>
              <div className="mt-8 sm:mt-10 w-full max-w-[1280px] mx-auto">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/mind-to-creation.webp"
                    alt="마음에서 시작된 창작, 삶의 가치로 이어지다 - 자명스쿨"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-2xl"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
              </div>
            </Reveal>

            {/* 3. 이미지 하단 본문 (이미지와 간격 32~40px, 내부 폭 1080~1120px, 문단 간격 8~12px) */}
            <Reveal delayMs={250}>
              <div className="max-w-[1100px] mx-auto mt-8 sm:mt-10 space-y-2.5 sm:space-y-3 text-center text-white/80 text-base md:text-lg leading-[1.7] font-light break-keep">
                <p>
                  나의 경험을 <strong className="text-antiqueGold font-semibold">한 권의 책</strong>으로 쓰고, 말로 표현하기 어려웠던 감정을 <strong className="text-antiqueGold font-semibold">그림</strong>으로 그리며, 원하는 미래를 <strong className="text-antiqueGold font-semibold">영상</strong>으로 시각화합니다.
                </p>
                <p>
                  AI는 이 과정에서 단순한 기술을 넘어, <strong className="text-white font-semibold">내면의 이야기를 발견하고 표현하도록 돕는 창작의 도구</strong>가 됩니다.
                </p>
                <p>
                  우리는 창작하면서 자신을 이해하고, 기술을 배우면서 <strong className="text-white font-semibold">새로운 가능성</strong>을 발견합니다.
                </p>
                <p>
                  그리고 그렇게 쌓인 경험과 통찰은 다른 사람과 나누는 지식이 되고, 누군가를 이끄는 교육이 되며, <strong className="text-antiqueGold font-semibold">새로운 일과 경제적 가치</strong>로 확장될 수 있습니다.
                </p>
              </div>
            </Reveal>

            {/* 4. 하단 브랜드 슬로건 (마지막 본문과 간격 24~32px, 32px 한 줄 배치) */}
            <Reveal delayMs={350}>
              <div className="mt-6 sm:mt-8 max-w-[1100px] mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-display font-bold leading-[1.4] tracking-tight break-keep">
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자기발견에서 창조로, 창조에서 성장과 풍요로.
                  </span>
                </h3>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Core Section */}
      <section className="py-20 lg:py-24">
        <div className="site-container">
          <Reveal>
            {/* Main Outer Rounded Container */}
            <div className="p-8 sm:p-10 md:p-14 rounded-[2.5rem] border border-[#B89B6A]/20 bg-[#141211]/85 backdrop-blur-md shadow-2xl relative">
            {/* Top Label & Title */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  BRAND CORE
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight break-keep leading-[1.4]">
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
                <span className="inline-block px-3.5 py-1 rounded-full bg-antiqueGold/10 border border-[#B89B6A]/25 text-antiqueGold text-xs font-medium tracking-wide">
                  변하지 않는 철학
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#B89B6A] tracking-tight break-keep pt-1 leading-[1.4]">
                  나를 아는 것이 모든 성장의 출발점
                </h3>
              </div>

              {/* Arrow 1 */}
              <div className="text-antiqueGold/70 py-1">
                <ArrowDown className="w-5 h-5" />
              </div>

              {/* 2. Customer Promise Area (Wide Rounded Card) */}
              <div className="w-full max-w-2xl p-6 sm:p-7 rounded-2xl border border-[#B89B6A]/25 bg-[#141211]/75 backdrop-blur-sm text-center space-y-2.5 shadow-sm">
                <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/10 text-antiqueGold text-xs font-medium tracking-wide">
                  고객에게 전하는 약속
                </span>
                <p className="text-base sm:text-lg text-white/95 font-medium leading-[1.75] break-keep">
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
                <div className="p-6 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/75 backdrop-blur-sm text-center space-y-2 hover:border-[#B89B6A]/40 hover:bg-[#181513]/90 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-bold text-[#B89B6A] font-display">자기이해</h4>
                  <p className="text-sm md:text-base text-antiqueGold/90 font-medium leading-[1.7]">마음공부·코칭</p>
                </div>

                {/* Pillar 2 */}
                <div className="p-6 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/75 backdrop-blur-sm text-center space-y-2 hover:border-[#B89B6A]/40 hover:bg-[#181513]/90 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-bold text-[#B89B6A] font-display">창작과 표현</h4>
                  <p className="text-sm md:text-base text-antiqueGold/90 font-medium leading-[1.7]">책·아트·영상</p>
                </div>

                {/* Pillar 3 */}
                <div className="p-6 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/75 backdrop-blur-sm text-center space-y-2 hover:border-[#B89B6A]/40 hover:bg-[#181513]/90 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-bold text-[#B89B6A] font-display">가치확장</h4>
                  <p className="text-sm md:text-base text-antiqueGold/90 font-medium leading-[1.7]">브랜딩·지식창업</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        </div>
      </section>

      {/* Self-Discovery Cycle Section */}
      <section className="py-20 lg:py-24">
        <div className="site-container max-w-[1280px] mx-auto space-y-10 sm:space-y-12">
          {/* Section Header */}
          <Reveal>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  SELF-DISCOVERY CYCLE
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                자명스쿨의{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  자기발견 순환 구조
                </span>
              </h2>

              {/* 상단 설명 문구: 18px, 줄간격 1.7, 문단 간격 8~12px, 중앙 정렬 */}
              <div className="mt-5 sm:mt-6 max-w-3xl mx-auto space-y-2.5 sm:space-y-3 text-base md:text-lg text-white/80 font-light leading-[1.7] break-keep">
                <p className="text-white/90">
                  성찰에서 창작으로, 창작에서 더 깊은 자기이해로
                </p>
                <p>
                  자명스쿨은 마음공부와 AI 기술을 별개의 영역으로 바라보지 않습니다.
                </p>
                <p>
                  <strong className="text-antiqueGold font-bold">창작을 통해 내면을 표현하고</strong>, 표현된 결과물을 통해{" "}
                  <strong className="text-antiqueGold font-bold">다시 자신을 이해하는 선순환</strong>을 추구합니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Diagram Container */}
          <Reveal delayMs={150}>
            <div>
              {/* Desktop / Tablet: Circular Diagram (중앙 원과 좌우 카드 간격 40px 확보 및 궤도 확장) */}
              <div className="hidden md:block relative w-full max-w-[800px] h-[680px] mx-auto">
                {/* Background Orbit Ring & Curved Arrows */}
                <svg viewBox="0 0 800 680" className="absolute inset-0 w-full h-full pointer-events-none z-0">
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

                  {/* Faint Orbit Ellipse */}
                  <ellipse
                    cx="400"
                    cy="340"
                    rx="240"
                    ry="220"
                    fill="none"
                    stroke="rgba(184,155,106,0.18)"
                    strokeDasharray="5 5"
                  />

                  {/* 1 -> 2 Arrow (Top to Right) */}
                  <path
                    d="M 485 140 A 240 220 0 0 1 565 290"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                  {/* 2 -> 3 Arrow (Right to Bottom) */}
                  <path
                    d="M 565 390 A 240 220 0 0 1 485 540"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                  {/* 3 -> 4 Arrow (Bottom to Left) */}
                  <path
                    d="M 315 540 A 240 220 0 0 1 235 390"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                  {/* 4 -> 1 Arrow (Left to Top) */}
                  <path
                    d="M 235 290 A 240 220 0 0 1 315 140"
                    fill="none"
                    stroke="#B89B6A"
                    strokeWidth="2"
                    markerEnd="url(#gold-arrow)"
                    className="opacity-80"
                  />
                </svg>

                {/* Central Core: 자기이해의 심화 (온전하게 드러나는 중앙 원) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-[#B89B6A]/40 bg-[#0E0E14] shadow-[0_0_35px_rgba(184,155,106,0.25)] flex flex-col items-center justify-center p-4 text-center z-20 transition-transform duration-300 hover:scale-105">
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
                <div className="absolute top-8 sm:top-10 md:top-12 left-1/2 -translate-x-1/2 w-64 p-5 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-[#B89B6A]/40 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ① 탐구
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">나에게 질문하기</h4>
                </div>

                {/* Step 2: 표현 (Right - 중앙 원과 40px 여백 확보하여 대칭 배치) */}
                <div className="absolute top-1/2 right-6 lg:right-8 -translate-y-1/2 w-64 p-5 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-[#B89B6A]/40 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ② 표현
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">글·그림·영상으로 만들기</h4>
                </div>

                {/* Step 3: 발견 (Bottom) */}
                <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 w-64 p-5 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-[#B89B6A]/40 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ③ 발견
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">감정·취향·신념 알아차리기</h4>
                </div>

                {/* Step 4: 재해석 (Left - 중앙 원과 40px 여백 확보하여 대칭 배치) */}
                <div className="absolute top-1/2 left-6 lg:left-8 -translate-y-1/2 w-64 p-5 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/95 backdrop-blur-md shadow-xl text-center z-10 hover:border-[#B89B6A]/40 transition-all duration-300">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs tracking-wider mb-2">
                    ④ 재해석
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">나를 새롭게 이해하기</h4>
                </div>
              </div>

              {/* Mobile: Vertical Responsive Flow */}
              <div className="block md:hidden max-w-sm mx-auto space-y-3">
                {/* Step 1 */}
                <div className="p-4 rounded-xl border border-[#B89B6A]/20 bg-[#141211]/90 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ① 탐구
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">나에게 질문하기</h4>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl border border-[#B89B6A]/20 bg-[#141211]/90 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ② 표현
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">글·그림·영상으로 만들기</h4>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Core Badge on Mobile */}
                <div className="py-2.5 px-5 rounded-full border-2 border-[#B89B6A]/40 bg-[#0E0E14] text-center mx-auto w-fit shadow-[0_0_20px_rgba(184,155,106,0.2)]">
                  <span className="text-xs font-bold text-antiqueGold uppercase tracking-wider mr-2">Core</span>
                  <span className="text-sm font-display font-bold text-white">자기이해의 심화</span>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl border border-[#B89B6A]/20 bg-[#141211]/90 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ③ 발견
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">감정·취향·신념 알아차리기</h4>
                </div>

                <div className="flex justify-center text-antiqueGold/80">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl border border-[#B89B6A]/20 bg-[#141211]/90 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 text-antiqueGold font-bold text-xs mb-1.5">
                    ④ 재해석
                  </span>
                  <h4 className="text-[#B89B6A] font-medium text-base">나를 새롭게 이해하기</h4>
                </div>

                {/* Loop Back Indicator */}
                <div className="pt-2 flex justify-center">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-antiqueGold/10 border border-[#B89B6A]/25 text-xs text-antiqueGold">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>다시 탐구로 순환하는 성장</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Description Below Diagram: 골드 강조 문구 32px 한 줄 배치 (다이어그램과 간격 32~40px) */}
          <Reveal delayMs={250}>
            <div className="mt-8 sm:mt-10 max-w-[1280px] mx-auto text-center break-keep">
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-display font-bold leading-[1.4] tracking-tight">
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  나를 알아가기 위해 창작하고, 창작하면서 다시 나를 발견합니다.
                </span>
              </h3>
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

      {/* 2. Philosophy & Digital Mind Coaching Integrated Section */}
      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="site-container">
          <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-12">
            {/* 섹션 헤더 및 상단 설명 */}
            <Reveal>
              <div className="text-center px-4">
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    OUR PHILOSOPHY
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep mb-6">
                  자명스쿨의 교육 철학
                </h2>
                <div className="w-20 h-1 bg-antiqueGold mx-auto rounded-full mb-8" />
                <div className="text-base md:text-lg text-white/80 font-light leading-[1.75] max-w-3xl mx-auto break-keep space-y-1.5">
                  <p>자명스쿨은 단순한 AI 기술 교육을 넘어,</p>
                  <p>마음을 이해하고 그것을 콘텐츠로 표현하며</p>
                  <p>삶의 성장과 경제적 가치로 연결하는 교육을 합니다.</p>
                </div>
              </div>
            </Reveal>

            {/* 세 가지 교육 철학 카드 (최대 1280px, 균등 배열) */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                <Reveal key={idx} delayMs={idx * 150}>
                  <div className="h-full p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-antiqueGold/40 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(184,155,106,0.1)] transition-all duration-500 text-center group flex flex-col justify-between break-keep">
                    <div>
                      <div className="mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(184,155,106,0.6)] transition-all duration-500">
                        {item.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#B89B6A] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 leading-[1.7]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* 세 카드와 가로형 카드 사이 연결 하향 화살표 */}
            <div className="flex justify-center text-antiqueGold/60 py-1">
              <ArrowDown className="w-6 h-6 animate-pulse" />
            </div>

            {/* 디지털마인드코칭 가로형 강조 카드 */}
            <Reveal delayMs={300}>
              <div className="w-full max-w-[1280px] mx-auto py-10 sm:py-12 px-6 sm:px-12 rounded-[2rem] bg-[#141211]/90 backdrop-blur-sm border border-[#B89B6A]/30 shadow-[0_15px_40px_rgba(0,0,0,0.4)] text-center break-keep">
                {/* 영문 라벨 */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-5 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    DIGITAL MIND COACHING
                  </span>
                  <span className="w-5 h-px bg-antiqueGold/40" />
                </div>

                {/* 카드 메인 제목: 32px */}
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-display font-bold leading-[1.3] text-white tracking-tight mb-4">
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    디지털마인드코칭
                  </span>
                </h3>

                {/* 핵심 강조 문구: 24px */}
                <p className="text-xl sm:text-2xl font-display font-bold text-white/95 leading-[1.4] mb-6">
                  마음을 이해하고, AI로 표현하며,
                  <br className="hidden sm:inline" />{" "}
                  삶을 창작하는 배움의 방식
                </p>

                {/* 은은한 골드 구분선 */}
                <div className="w-16 h-px bg-antiqueGold/30 mx-auto mb-6 sm:mb-8" />

                {/* 설명 문구: 18px, 줄간격 1.75, 최대 너비 1100px */}
                <p className="max-w-[1100px] mx-auto text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep">
                  디지털마인드코칭은 자기이해와 마음공부를 바탕으로 AI 및 디지털 창작 도구를 활용하여 자신의 감정, 생각, 재능과 가능성을
                  <br className="hidden sm:inline" />{" "}
                  구체적인 결과물로 표현하고, 이를 자기성장과 삶의 실천으로 연결하는 교육 및 코칭 방법입니다.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* New Section 02: 자명스쿨만의 독자적인 교육 영역 (Our Unique Approach) */}
      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="site-container max-w-[1280px] mx-auto space-y-10 sm:space-y-12">
          {/* Section Header */}
          <Reveal>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  OUR UNIQUE APPROACH
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                자명스쿨만의{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  독자적인 교육 영역
                </span>
              </h2>

              {/* 상단 통합 설명 문구: 18px, 줄간격 1.75, 문단 간격 8~12px, 여백 최적화 */}
              <div className="mt-5 sm:mt-6 max-w-3xl mx-auto space-y-2.5 sm:space-y-3 text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep">
                <p>
                  마음공부와 감성 창작, AI 기술이 유기적으로 만나는 곳.
                </p>
                <p>
                  자명스쿨은 이 세 영역의 융합을 통해{" "}
                  <strong className="text-antiqueGold font-bold">
                    스스로를 밝히고 새로운 가치를 창출
                  </strong>
                  하도록 돕습니다.
                </p>
              </div>
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
        </div>
      </section>

      {/* New Section 03: 마음공부가 창작이 되는 순간 (FROM MIND TO CREATION) */}
      <section className="py-20 lg:py-24 bg-white/[0.01] border-t border-white/5">
        <div className="site-container space-y-16 sm:space-y-20">
          {/* Section Header */}
          <Reveal>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  FROM MIND TO CREATION
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                마음공부가{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  창작이 되는 순간
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/80 font-light leading-[1.75] max-w-3xl mx-auto break-keep mt-5 sm:mt-6">
                내면의 발견이 눈에 보이는 창작물이 되고,
                <br className="hidden sm:inline" />
                그 창작물이 새로운 삶의 가능성으로 이어집니다.
              </p>
            </div>
          </Reveal>

          {/* 6 Creative Showcase Cards (PC: 3열 2행 / Tablet: 2열 / Mobile: 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                cardNum: "CARD 01",
                image: "/images/about/creative-publishing.webp",
                alt: "감성적인 삽화가 담긴 그림책과 출판 작품 예시",
                title: "나의 이야기를 발견하다",
                question: "내가 살아온 시간 속에서 가장 의미 있었던 순간은 무엇인가요?",
                mind: "삶의 경험과 감정, 가치관을 돌아보며 자신만의 이야기를 발견합니다.",
                creation: "감성 에세이, 자전적 그림책, 나만의 종이책과 전자책",
              },
              {
                cardNum: "CARD 02",
                image: "/images/about/creative-emotional-art.webp",
                alt: "내면의 감정을 표현한 AI 감성아트 작품 예시",
                title: "마음을 그림으로 표현하다",
                question: "지금 나의 마음을 색과 이미지로 표현한다면 어떤 모습일까요?",
                mind: "자신의 감정과 내면세계를 관찰하고 표현하는 시간을 갖습니다.",
                creation: "AI 감성 아트, 감정 아트, 오라클 카드, 디지털 전시",
              },
              {
                cardNum: "CARD 03",
                image: "/images/about/creative-vision-board.webp",
                alt: "원하는 미래와 삶의 모습을 시각화한 비전보드 예시",
                title: "원하는 미래를 시각화하다",
                question: "나는 어떤 모습으로, 어떤 삶을 살아가고 싶은가요?",
                mind: "자신의 가치관과 목표, 원하는 삶의 모습을 탐색합니다.",
                creation: "AI 비전보드, 마인드무비, 미래 자아 시각화 영상",
              },
              {
                cardNum: "CARD 04",
                image: "/images/about/creative-healing-music.webp",
                alt: "마음의 평온을 표현한 힐링음악 영상 예시",
                title: "나에게 쉼을 선물하다",
                question: "지금 내 마음에 가장 필요한 것은 무엇인가요?",
                mind: "명상과 자기관찰을 통해 자신의 마음을 살피고 휴식의 시간을 마련합니다.",
                creation: "명상 음악, 힐링 플레이리스트, 수면 음악, 감성 영상",
              },
              {
                cardNum: "CARD 05",
                image: "/images/about/creative-branding.webp",
                alt: "브랜드 아이덴티티와 패키지 디자인 창작 예시",
                title: "나만의 브랜드를 발견하다",
                question: "나의 경험과 재능은 다른 사람에게 어떤 가치를 줄 수 있을까요?",
                mind: "자신의 강점과 관심사, 삶의 경험과 전문성을 탐색합니다.",
                creation: "퍼스널 브랜딩, 브랜드 스토리, SNS 콘텐츠, 브랜드 디자인",
              },
              {
                cardNum: "CARD 06",
                image: "/images/about/creative-ebook.webp",
                alt: "전자책 및 디지털 출판 상품 제작 예시",
                title: "나의 지식을 가치로 만들다",
                question: "내가 알고 있는 것과 경험한 것을 어떻게 세상과 나눌 수 있을까요?",
                mind: "자신이 가진 지식과 경험의 가치를 발견하고 앞으로의 방향을 설계합니다.",
                creation: "전자책, 디지털 상품, 교육 콘텐츠, 1인 디지털 서비스",
              },
            ].map((card, idx) => (
              <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
                <div className="h-full rounded-[2rem] bg-[#141211]/75 backdrop-blur-sm border border-[#B89B6A]/20 hover:border-[#B89B6A]/40 hover:bg-[#181513]/90 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-[0_20px_40px_rgba(184,155,106,0.12)]">
                  {/* 16:9 Aspect Ratio Image */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-xs font-display font-bold tracking-widest text-antiqueGold uppercase block mb-2">
                        {card.cardNum}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#B89B6A] group-hover:text-champagneGold transition-colors break-keep leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    {/* 3 Step Breakdown */}
                    <div className="space-y-4 pt-1">
                      {/* 1. 자기성찰 질문 */}
                      <div className="p-3.5 rounded-xl bg-antiqueGold/[0.06] border border-[#B89B6A]/25 space-y-1">
                        <span className="text-[11px] font-bold tracking-wider text-antiqueGold uppercase block">
                          ✦ 자기성찰 질문
                        </span>
                        <p className="text-sm md:text-base font-medium text-white/95 leading-[1.7] break-keep">
                          "{card.question}"
                        </p>
                      </div>

                      {/* 2. 마음공부 */}
                      <div className="space-y-1 pl-1">
                        <span className="text-xs font-bold text-white/50 block">
                          마음공부
                        </span>
                        <p className="text-sm md:text-base text-white/80 font-light leading-[1.7] break-keep">
                          {card.mind}
                        </p>
                      </div>

                      {/* 3. 디지털 창작 */}
                      <div className="space-y-1 pl-1 border-t border-[#B89B6A]/15 pt-3">
                        <span className="text-xs font-bold text-antiqueGold/90 block">
                          디지털 창작
                        </span>
                        <p className="text-sm md:text-base text-white/90 font-medium leading-[1.7] break-keep">
                          {card.creation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Message (상단 창작 카드 배열과 간격: 32px, 최대 너비: 1280px) */}
          <Reveal delayMs={350}>
            <div className="mt-8 w-full max-w-[1280px] mx-auto py-8 sm:py-10 px-6 sm:px-10 rounded-3xl bg-[#141211]/80 backdrop-blur-sm border border-[#B89B6A]/25 shadow-lg text-center space-y-4">
              <p className="text-base sm:text-lg text-white/75 font-light leading-[1.75] break-keep">
                창작은 단순히 결과물을 만드는 일이 아닙니다.
              </p>
              <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight break-keep leading-[1.4]">
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  나를 이해하고, 내 안의 가능성을 발견하며, 내가 원하는 삶을 구체적으로 만들어 가는 과정입니다.
                </span>
              </p>
              <p className="text-xs sm:text-sm text-white/40 font-light pt-1">
                ※ 위 내용은 자명스쿨이 지향하는 교육 및 창작 활동의 예시입니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. 5 Elements System Section */}
      <section className="py-20 lg:py-24 bg-white/[0.02]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 sm:mb-20">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  CORE CURRICULUM
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep mb-6">
                자명스쿨 5원소 시스템
              </h2>
              <p className="text-base md:text-lg text-white/70 font-light max-w-3xl mx-auto leading-[1.75] break-keep">
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
                  <div className={`text-xl sm:text-2xl font-display mb-4 ${element.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{element.label}</div>
                  
                  <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                    <Image src={element.image} alt={element.label} fill className="object-contain" />
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors">{element.name}</h4>
                  <p className="text-sm md:text-base text-white/60 leading-[1.7] group-hover:text-white/80 transition-colors">{element.desc}</p>
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
          <p className="text-xl sm:text-2xl font-display font-bold text-white/90 tracking-wide italic mb-4 leading-[1.4]">
            "자명스쿨 5원소 시스템으로 이렇게 변화, 성장합니다."
          </p>
          <p className="text-base md:text-lg text-white/50 font-light tracking-wide leading-[1.75]">
            이 흐름을 따라가면 실제 강의, 콘텐츠, 수익 구조까지 연결됩니다.
          </p>
          <div className="mt-8 w-12 h-[1px] bg-white/20 mx-auto" />
        </Reveal>
      </div>

      {/* 3.5. Growth Flow Section */}
      <section className="pb-24 pt-12 relative overflow-hidden bg-white/[0.02]">
        <div className="site-container">
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
                    <div className="space-y-2">
                      <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${item.color}`}>{item.name}</h4>
                      <h3 className="text-lg sm:text-xl font-bold text-white break-keep">{item.title}</h3>
                      <p className="text-sm md:text-base text-white/60 leading-[1.7] whitespace-pre-line break-keep">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.6. 5-Stage Growth Journey Section */}
      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="site-container space-y-16">
          {/* Header */}
          <Reveal>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  JAMYEONG GROWTH JOURNEY
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                나를 아는 것에서 시작되는{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  성장
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/70 font-light leading-[1.75] tracking-wide break-keep max-w-2xl mx-auto mt-5 sm:mt-6">
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
                    <div className="p-6 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/90 backdrop-blur-sm hover:border-[#B89B6A]/40 hover:bg-[#181513]/90 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(184,155,106,0.12)] transition-all duration-500 flex flex-col items-center text-center h-full group">
                      <span className="text-xs font-mono font-bold text-antiqueGold tracking-widest px-2.5 py-0.5 rounded-full bg-antiqueGold/10 mb-4 border border-[#B89B6A]/25">
                        {step.num}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-antiqueGold/[0.06] border border-[#B89B6A]/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#B89B6A]/40 group-hover:bg-antiqueGold/10 transition-all duration-300">
                        {step.icon}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#B89B6A] mb-2 font-display group-hover:text-champagneGold transition-colors duration-300">{step.title}</h4>
                      <p className="text-sm md:text-base text-white/70 leading-[1.7] break-keep font-light">{step.desc}</p>
                    </div>

                    {/* Connecting Arrow for Desktop */}
                    {idx < 4 && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#141211] border border-[#B89B6A]/30 flex items-center justify-center shadow-md pointer-events-none">
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
                    <div className="p-5 rounded-2xl border border-[#B89B6A]/20 bg-[#141211]/90 flex items-center gap-4 shadow-md hover:border-[#B89B6A]/35 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-antiqueGold/[0.06] border border-[#B89B6A]/25 flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-antiqueGold tracking-wider">
                            {step.num}
                          </span>
                          <h4 className="text-lg sm:text-xl font-bold text-[#B89B6A] font-display">{step.title}</h4>
                        </div>
                        <p className="text-sm md:text-base text-white/70 leading-[1.7] break-keep font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  {idx < 4 && (
                    <div className="flex justify-center text-antiqueGold/70 py-0.5">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 은은한 하향 화살표 (상단 5단계 카드와 통합 카드 사이 40~48px 간격 유지) */}
          <div className="flex justify-center text-antiqueGold/60 pt-4">
            <ArrowDown className="w-6 h-6 animate-pulse" />
          </div>

          {/* 통합 카드: 성장 방향 A·B 및 브랜드 철학 (최대 1280px 전폭 카드, 3단 선 작업 구조화) */}
          <Reveal delayMs={300}>
            <div className="w-full max-w-[1280px] mx-auto pt-10 sm:pt-14 pb-12 sm:pb-16 px-6 sm:px-12 md:px-16 rounded-3xl bg-[#141211]/90 backdrop-blur-sm border border-[#B89B6A]/30 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              {/* 1. 상단: 라벨 + 메인 제목 */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="w-5 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    TWO PATHS OF GROWTH
                  </span>
                  <span className="w-5 h-px bg-antiqueGold/40" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-display font-bold text-antiqueGold tracking-tight leading-[1.3] break-keep">
                  성장의 방향은 하나가 아닙니다.
                </h3>
              </div>

              {/* 1-1. 메인 제목 아래 가로선 (중앙 기준 약 74% 너비, 여백: 상 28~32px / 하 36~40px) */}
              <div className="w-[74%] max-w-[840px] mx-auto h-px bg-gradient-to-r from-transparent via-[#B89B6A]/35 to-transparent mt-7 sm:mt-8 mb-9 sm:mb-10" />

              {/* 2. 중단: 성장 방향 A / 성장 방향 B (좌우 컬럼 간격 56~72px) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-16 relative text-left items-center">
                {/* 성장 방향 A (왼쪽) */}
                <div className="space-y-3.5 pr-0 md:pr-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antiqueGold/10 border border-[#B89B6A]/25 text-antiqueGold text-xs font-medium">
                    <span>성장 방향 A</span>
                    <span>·</span>
                    <span>자기실현</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-antiqueGold leading-snug break-keep">
                    내면의 성장과 창작의 기쁨
                  </h4>
                  <p className="text-base md:text-lg text-white/80 font-light leading-[1.7] break-keep">
                    내면의 성장, 자유로운 자기표현, 창작의 순수한 즐거움을 통해 나다운 삶의 방향을 주체적으로 설계합니다.
                  </p>
                </div>

                {/* PC 환경 세로 구분선 (높이 160px, 은은한 샴페인 골드) */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-px h-[160px] bg-gradient-to-b from-transparent via-[#B89B6A]/35 to-transparent pointer-events-none" />

                {/* 모바일 환경 가로 구분선 (세로로 쌓일 때 A와 B 사이) */}
                <div className="block md:hidden w-full h-px bg-gradient-to-r from-transparent via-[#B89B6A]/30 to-transparent my-2" />

                {/* 성장 방향 B (오른쪽) */}
                <div className="space-y-3.5 pl-0 md:pl-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antiqueGold/10 border border-[#B89B6A]/25 text-antiqueGold text-xs font-medium">
                    <span>성장 방향 B</span>
                    <span>·</span>
                    <span>가치 창출</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-antiqueGold leading-snug break-keep">
                    전문성과 지식 자산화
                  </h4>
                  <p className="text-base md:text-lg text-white/80 font-light leading-[1.7] break-keep">
                    축적된 경험과 재능을 책·콘텐츠·퍼스널 브랜드로 발전시키고, 교육 및 코칭 전문가로서 새로운 기회와 가치를 만듭니다.
                  </p>
                </div>
              </div>

              {/* 3-1. 통합 메시지 위 가로선 (상단 제목 아래 선과 동일한 74% 길이, A/B 아래 여백 44px, 선 아래 여백 32px) */}
              <div className="w-[74%] max-w-[840px] mx-auto h-px bg-gradient-to-r from-transparent via-[#B89B6A]/35 to-transparent mt-11 sm:mt-12 mb-8 sm:mb-9" />

              {/* 3. 하단: 통합 메시지 + 보조 설명 문장 */}
              <div className="text-center space-y-4 max-w-4xl mx-auto break-keep">
                <p className="text-xl sm:text-2xl font-display font-bold leading-[1.4]">
                  <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자기이해에서 시작하여, 창작을 통해 가능성을 발견하고,
                    <br className="hidden sm:inline" />{" "}
                    자신만의 삶과 가치로 확장합니다.
                  </span>
                </p>
                <div className="space-y-2 text-base md:text-lg text-white/80 font-light leading-[1.7]">
                  <p>
                    자명스쿨은 모든 사람에게 획일적인 창업이나 수익을 요구하지 않습니다.
                  </p>
                  <p>
                    자신의 목적에 따라 창작과 자기성장에 집중하거나, 이를 사회적·경제적 가치로 확장해 나가는 모든 여정을 존중하고 함께합니다.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Instructor Section */}
      <section className="py-20 lg:py-24">
        <div className="site-container">
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
                <div className="flex items-center space-x-3 text-antiqueGold mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="font-display tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    FOUNDER & INSTRUCTOR
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 text-white italic lowercase tracking-tight leading-[1.4]">
                  자명쌤 <span className="bg-gradient-to-r from-antiqueGold to-champagneGold bg-clip-text text-transparent font-sans not-italic text-2xl sm:text-3xl font-bold ml-2">백진선</span>
                </h2>
                <p className="text-base md:text-lg text-white/50 font-light mb-8 italic leading-[1.75]">AI × 심리 × 인문학을 결합한 교육 전문가</p>
                
                <div className="space-y-6 sm:space-y-8 mb-12">
                  <p className="text-white/80 font-light leading-[1.75] text-base md:text-lg break-keep">
                    심리학 전공을 기반으로 NLP, 최면, 명상, 브레인 트레이닝 등 사람의 무의식과 변화 구조를 연구해왔으며, AI 관련 자격증 30개 이상과 강의·콘텐츠 제작·수익화 경험을 통해 검증된 실전 교육을 제공합니다.
                  </p>

                  {/* 3. 핵심 정체성 문장 (독립적 강조 영역) */}
                  <div className="py-4.5 px-5 sm:px-6 rounded-xl border border-antiqueGold/25 border-l-[3px] border-l-antiqueGold bg-antiqueGold/[0.03] backdrop-blur-xs">
                    <p className="text-base sm:text-lg text-white/95 font-medium leading-[1.75] break-keep tracking-tight">
                      “저는 <span className="text-antiqueGold font-semibold">사람의 내면 변화</span>와{" "}
                      <br className="sm:hidden" />
                      <span className="text-antiqueGold font-semibold">디지털 기술</span>을 연결하는{" "}
                      <br className="sm:hidden" />
                      <span className="text-antiqueGold font-semibold">교육과 코칭</span>을 합니다.”
                    </p>
                  </div>

                  <p className="text-white/80 font-light leading-[1.75] text-base md:text-lg break-keep">
                    자명심리문화연구소 대표, 한국디지털마인드코칭협회 협회장, 그리고 이끌림출판사 대표로서 단순한 정보 전달을 넘어 사람들의 내면에 잠든 창의성을 깨우는 일을 하고 있습니다.
                  </p>

                  <ul className="space-y-3 text-white/70 text-sm md:text-base font-light pt-2 leading-[1.7]">
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
                  <p className="text-xl sm:text-2xl text-antiqueGold font-display leading-[1.4] italic">
                    “AI는 단순한 도구가 아니라 <br />
                    마음을 표현하는 가장 현대적인 언어입니다.”
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Professional Certification Courses Section */}
      <section className="py-20 lg:py-24 relative">
        <div className="site-container">
          <div className="text-center mb-16 px-4">
            <Reveal>
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  PROFESSIONAL CERTIFICATIONS
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.4] tracking-tight break-keep">
                마음속 가능성을 <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent font-bold inline-block px-1">
                  전문성으로 발전시키는 배움
                </span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-white/70 text-base md:text-lg font-light leading-[1.75] break-keep">
                <p>
                  자명스쿨의 AI 및 디지털 창작 교육은 단순한 도구 활용에 머무르지 않습니다.
                  자신의 생각과 감정을 표현하고, 경험과 지식을 콘텐츠로 만들며, 나만의 브랜드와 전문성을 구축하기 위한
                  <br className="hidden sm:inline" />{" "}
                  실질적인 창작 역량을 기르는 과정입니다.
                </p>
                <p className="text-white/85 font-normal">
                  자기이해와 창작에서 출발하여 자신의 관심과 목적에 따라 전문 강사, 창작자, 지식창업가, 디지털마인드코치로 성장할 수 있는 교육 방향을 추구합니다.
                </p>
                <p className="text-antiqueGold text-sm md:text-base pt-2 font-medium">
                  한국디지털마인드코칭협회 공식 인증 커리큘럼 기반 5개 전문 자격과정
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
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
                desc: "감정과 내면 세계관을 가능성을 표현하는 AI 창작 기술로 시각화하고 실제 작품과 굿즈로 확장하는 과정",
                image: "/images/icon/fire.png",
                link: "/courses/fire",
                color: "text-fire",
                borderColor: "border-fire/30",
                badgeBg: "bg-fire/10 text-fire",
                glowColor: "rgba(239, 68, 68, 0.15)",
              },
              {
                title: "캔바콘텐츠마스터강사",
                badge: "제3원소 공기",
                category: "콘텐츠 & 강의",
                desc: "캔바와 AI를 활용하여 시선을 사로잡는 고품격 비주얼 콘텐츠와 체계적으로 설계된 교육 자료를 제작하는 과정",
                image: "/images/icon/air.png",
                link: "/courses/air",
                color: "text-air",
                borderColor: "border-air/30",
                badgeBg: "bg-air/10 text-[#F1E5AC]",
                glowColor: "rgba(226, 212, 190, 0.15)",
              },
              {
                title: "AI브랜딩마스터강사",
                badge: "제4원소 물",
                category: "비즈니스 & 가치확장",
                desc: "고유한 가치와 AI 디지털 시스템을 결합하여 지속 가능한 지식 자산을 구축하는 과정",
                image: "/images/icon/water.png",
                link: "/courses/water",
                color: "text-water",
                borderColor: "border-water/30",
                badgeBg: "bg-water/10 text-water",
                glowColor: "rgba(56, 189, 248, 0.15)",
              },
              {
                title: "디지털마인드코칭전문가",
                badge: "제5원소 에테르",
                category: "마인드 & 리더십",
                desc: "무의식과 잠재력을 깨우고 디지털 시대 풍요로운 삶의 좌표를 이끄는 전문 코칭 심화 과정",
                image: "/images/icon/ether.png",
                link: "/courses/abundance",
                color: "text-[#A855F7]",
                borderColor: "border-[#A855F7]/30",
                badgeBg: "bg-[#A855F7]/10 text-[#C084FC]",
                glowColor: "rgba(168, 85, 247, 0.15)",
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
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-antiqueGold transition-colors break-keep leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/60 font-light leading-[1.7] mb-6 break-keep">
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
          <div className="w-full max-w-[1280px] mx-auto mt-8 sm:mt-10">
            <Reveal delayMs={200} slideFrom="bottom">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-antiqueGold/30 hover:border-antiqueGold/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>공식 자격증 발급·인증 기관</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-[1.4]">
                    한국디지털마인드코칭협회 <span className="text-antiqueGold text-base font-normal">(KDMCA)</span>
                  </h3>
                  <p className="text-white/60 text-sm md:text-base font-light leading-[1.7] break-keep">
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
        </div>
      </section>

      {/* 5. Who We Are For (핵심 수강생 페르소나) Section */}
      <section className="py-20 lg:py-24 bg-white/[0.02] border-t border-white/5">
        <div className="site-container">
          {/* Top Label & Headline */}
          <Reveal>
            <div className="text-center mb-16 sm:mb-20">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  WHO WE ARE FOR
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight break-keep leading-[1.4]">
                혹시,{" "}
                <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                  당신도 이런 마음인가요?
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/70 font-light leading-[1.75] max-w-2xl mx-auto break-keep mt-5 sm:mt-6">
                기술을 배우는 것보다 먼저,
                <br className="hidden sm:inline" />
                나만의 방향을 발견하고 싶은 당신에게.
              </p>
            </div>
          </Reveal>

          {/* 6 Persona Cards (PC: 3열 2행 / Tablet: 2열 / Mobile: 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                icon: <Compass className="w-6 h-6 text-antiqueGold" strokeWidth={1.8} />,
                title: "AI 시대, 어디서부터 시작해야 할지 막막한 분",
                desc: "AI 기술이 차갑고 낯설게 느껴지거나, 빠르게 변하는 기술 앞에서 조급함을 느끼지만 자신만의 속도로 배우고 싶은 분.",
              },
              {
                num: "02",
                icon: <Sparkles className="w-6 h-6 text-antiqueGold" strokeWidth={1.8} />,
                title: "AI는 배웠지만 나만의 이야기를 찾지 못한 분",
                desc: "다양한 AI 도구와 사용법을 익혔지만 정작 무엇을 만들고, 어떤 방향으로 나아가야 할지 고민하는 분.",
              },
              {
                num: "03",
                icon: <Palette className="w-6 h-6 text-antiqueGold" strokeWidth={1.8} />,
                title: "마음속 이야기를 아름다운 작품으로 표현하고 싶은 분",
                desc: "글, 그림, 음악, 영상을 통해 자신의 감정과 생각, 내면세계를 표현하고 싶은 분.",
              },
              {
                num: "04",
                icon: <Heart className="w-6 h-6 text-antiqueGold" strokeWidth={1.8} />,
                title: "나를 이해하고 새로운 삶을 설계하고 싶은 분",
                desc: "오래된 신념과 반복되는 삶의 패턴을 돌아보고, 자신이 진정으로 원하는 삶과 새로운 가능성을 발견하고 싶은 분.",
              },
              {
                num: "05",
                icon: <BookOpen className="w-6 h-6 text-antiqueGold" strokeWidth={1.8} />,
                title: "나의 경험과 지식을 가치 있는 자산으로 만들고 싶은 분",
                desc: "살아온 경험과 전문성, 재능과 관심사를 책, 콘텐츠, 퍼스널 브랜드, 디지털 서비스로 발전시키고 싶은 분.",
              },
              {
                num: "06",
                icon: <Users className="w-6 h-6 text-antiqueGold" strokeWidth={1.8} />,
                title: "다른 사람의 성장과 창작을 돕는 전문가가 되고 싶은 분",
                desc: "상담사, 코치, 강사, 작가 또는 새로운 진로를 준비하는 사람으로서 마음공부와 AI를 접목한 자신만의 교육 및 코칭 영역을 만들어 가고 싶은 분.",
              },
            ].map((card, idx) => (
              <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
                <div className="h-full p-8 sm:p-9 rounded-[2rem] bg-[#141211]/75 backdrop-blur-sm border border-[#B89B6A]/20 hover:border-[#B89B6A]/40 hover:bg-[#181513]/90 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(184,155,106,0.12)] transition-all duration-500 flex flex-col justify-between group">
                  <div>
                    {/* Top: Icon & Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-antiqueGold/[0.06] border border-[#B89B6A]/25 flex items-center justify-center group-hover:scale-110 group-hover:border-[#B89B6A]/40 transition-transform duration-300 shadow-sm text-antiqueGold">
                        {card.icon}
                      </div>
                      <span className="font-display text-xs font-bold tracking-widest text-antiqueGold border border-[#B89B6A]/25 px-3 py-1 rounded-full bg-antiqueGold/10">
                        {card.num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#B89B6A] mb-3 group-hover:text-champagneGold transition-colors break-keep leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Description (16px) */}
                  <p className="text-sm md:text-base text-white/75 font-light leading-[1.7] break-keep pt-2">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Core Message Box */}
          <Reveal delayMs={300} slideFrom="bottom">
            <div className="w-full max-w-[1280px] mx-auto mt-8 p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-b from-[#141211]/90 via-[#141211]/60 to-transparent backdrop-blur-sm border border-[#B89B6A]/25 text-center space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-antiqueGold/10 blur-3xl pointer-events-none rounded-full" />

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight break-keep leading-[1.4] relative z-10">
                당신에게 필요한 것은 더 많은 기술이 아니라,
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent ml-1 sm:ml-2">
                  자신만의 방향일지도 모릅니다.
                </span>
              </h3>

              <p className="text-base sm:text-lg text-white/80 font-light leading-[1.75] break-keep max-w-2xl mx-auto relative z-10">
                자명스쿨은 자신을 이해하고,
                <br className="hidden sm:inline" />
                마음속 가능성을 발견하며,
                <br className="hidden sm:inline" />
                그 가능성을 디지털 창작으로 현실화하는 여정에 함께합니다.
              </p>

              <div className="pt-2 relative z-10">
                <p className="text-base sm:text-lg md:text-xl text-antiqueGold font-medium font-serif italic tracking-wide break-keep leading-[1.75]">
                  마음에서 시작하는 AI, 나로부터 시작하는 미래.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Results/Transformation Section */}
      <section className="py-20 lg:py-24">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 px-4">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                  TRANSFORMATION
                </span>
                <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep mb-8">
                자명스쿨에서 얻을 수 있는 변화
              </h2>
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
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-[#B89B6A] group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-sm md:text-base text-white/60 leading-[1.7] group-hover:text-white/70 transition-colors">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delayMs={800}>
            <p className="mt-16 text-center text-xl sm:text-2xl font-display text-white italic tracking-wide leading-[1.4]">
               단순한 배움을 넘어, <br className="md:hidden" />
               삶의 <span className="text-antiqueGold">전환</span>을 경험하게 됩니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. Final CTA Section: STEP 12 마지막 CTA 영역 */}
      <section className="py-20 lg:py-24 bg-white/[0.02] border-t border-white/5">
        <div className="site-container">
          <div className="max-w-[1280px] mx-auto text-center space-y-10 sm:space-y-12">
            {/* 1. 이미지 상단 헤더 및 설명 문구 */}
            <Reveal>
              <div className="space-y-6 sm:space-y-8">
                {/* 영문 라벨 */}
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                  <span className="text-antiqueGold tracking-[0.3em] text-xs sm:text-sm font-bold uppercase">
                    START FROM WITHIN
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-antiqueGold/40" />
                </div>

                {/* 메인 제목 */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  나를 알고, 방향을 세우고,
                  <br />
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    디지털로 현실화하는 시작
                  </span>
                </h2>

                {/* 설명 문구 (18px, 줄간격 1.75, 메인 제목과 간격 24~32px) */}
                <div className="max-w-3xl mx-auto space-y-2 text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep">
                  <p>AI 시대에 필요한 것은 더 빠른 기술만이 아닙니다.</p>
                  <p>
                    나를 이해하고, 방향을 잃지 않으며, 내면의 생각과 가능성을 표현하고
                    <br className="hidden sm:inline" />{" "}
                    그것을 삶의 변화와 새로운 가치로 연결하는 힘이 필요합니다.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 2. 가로형 신규 이미지 (상단 설명 문구와 간격 32~40px) */}
            <Reveal delayMs={200}>
              <div className="w-full max-w-[1280px] mx-auto">
                <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/cta-new-possibility.webp"
                    alt="나를 알고, 방향을 세우고, 디지털로 현실화하는 시작 - 자명스쿨"
                    width={1920}
                    height={823}
                    className="w-full h-full object-cover rounded-2xl"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
              </div>
            </Reveal>

            {/* 3. 이미지 하단 CTA 메시지 (이미지와 간격 40~48px) */}
            <Reveal delayMs={350}>
              <div className="pt-2 sm:pt-4 space-y-5 sm:space-y-6">
                {/* CTA 제목 */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.4] tracking-tight text-white break-keep">
                  나로부터 시작하는 미래,
                  <br />
                  <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                    자명스쿨에서 열어보세요.
                  </span>
                </h3>

                {/* 설명 문구 (CTA 제목과 간격 24px) */}
                <div className="max-w-3xl mx-auto space-y-1.5 text-base md:text-lg text-white/80 font-light leading-[1.75] break-keep">
                  <p>자기이해에서 시작해 표현과 창작, 그리고 현실화로 이어지는 배움.</p>
                  <p>
                    당신만의 가능성을 발견하고, 원하는 삶을 만들어가는 여정을 자명스쿨과 함께 시작해 보세요.
                  </p>
                </div>

                {/* 4. CTA 버튼 2개 (설명 문구와 간격 32px) */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
                  {/* 첫 번째 버튼: 자격과정 둘러보기 (골드 채움 스타일) */}
                  <Link
                    href="/apply"
                    className="group relative overflow-visible h-14 w-full sm:w-64 flex items-center justify-center gap-2 text-sm font-bold tracking-wider rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
                  >
                    <span className="relative z-10">자격과정 둘러보기</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full pointer-events-none" />
                  </Link>

                  {/* 두 번째 버튼: 원데이 클래스 둘러보기 (골드 아웃라인 스타일) */}
                  <Link
                    href="/oneday"
                    className="group relative overflow-visible h-14 w-full sm:w-64 flex items-center justify-center gap-2 text-sm font-bold tracking-wider rounded-full border border-[#B89B6A] bg-transparent text-[#E2D4BE] hover:text-white hover:bg-[#B89B6A]/15 hover:border-[#D6C6A8] shadow-lg transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
                  >
                    <span className="relative z-10">원데이 클래스 둘러보기</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute -inset-1 bg-[#B89B6A] opacity-0 blur-md group-hover:opacity-25 transition-opacity duration-300 rounded-full pointer-events-none" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
