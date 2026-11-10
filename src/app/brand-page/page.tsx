import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BRAND_PAGE_CLASS_CONFIG,
  BRAND_PAGE_IMAGES,
  BRAND_PAGE_PROBLEM_CARDS,
  BRAND_PAGE_BEFORE_AFTER,
  BRAND_PAGE_ONE_DAY_RESULTS,
  BRAND_PAGE_PACKAGE_SUMMARY,
  BRAND_PAGE_CONCEPT_EXAMPLES,
  BRAND_PAGE_CORE_PILLARS,
  BRAND_PAGE_CURRICULUM_STEPS,
  BRAND_PAGE_TIME_SCHEDULE,
  BRAND_PAGE_CLASS_KITS,
  BRAND_PAGE_REAL_CASES,
  BRAND_PAGE_EXPANSION_POINTS,
  BRAND_PAGE_RECOMMENDED_FOR,
  BRAND_PAGE_EXPANSION_IDEAS,
  BRAND_PAGE_FAQS,
  BRAND_PAGE_FINAL_COMPLETION_ITEMS,
} from "@/data/brandPageClassData";
import {
  BrandPageReplaceableImage,
  BrandPageFaqAccordion,
  BrandPageCtaButton,
} from "@/components/brand-page/BrandPageInteractive";

export const metadata: Metadata = {
  title: "AI로 브랜드 소개 페이지 제작 | 비개발자를 위한 바이브코딩 첫 실습 · 자명스쿨",
  description:
    "코딩을 몰라도 만들 수 있는 나만의 브랜드 소개 페이지. AI와 대화하며 소개, 경력, 서비스, 활동, SNS 링크까지 담은 나만의 브랜드 웹페이지를 직접 완성합니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/brand-page",
  },
  openGraph: {
    title: "AI로 브랜드 소개 페이지 제작 | 비개발자를 위한 바이브코딩 첫 실습 · 자명스쿨",
    description:
      "링크 하나로 나와 내 일을 소개하는 나만의 브랜드 페이지를 직접 만들어보세요. 비개발자를 위한 바이브코딩 첫 실습 클래스입니다.",
    url: "https://www.jmschool.kr/brand-page",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

export default function BrandPageClassPage() {
  const heroMockupSlot = BRAND_PAGE_IMAGES.heroMobileMockup;

  const conceptFallbackMap = {
    conceptWarmCoach: "concept-warm-coach",
    conceptCreator: "concept-creator",
    conceptModernBrand: "concept-modern-brand",
    conceptMindful: "concept-mindful",
  } as const;

  const realCaseFallbackMap = {
    realCaseHero: "case-hero",
    realCaseAbout: "case-about",
    realCaseCareer: "case-career",
    realCaseService: "case-service",
    realCaseMobile: "case-mobile",
  } as const;

  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 상단 서브 내비게이션 (/saju 기준 디자인 체계 동일 유지)
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] px-4 sm:px-6 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <Link
            href={BRAND_PAGE_CLASS_CONFIG.onedayListUrl}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>원데이 클래스 목록</span>
          </Link>
          <div className="text-[11px] md:text-xs tracking-wider text-[#C6A66B] font-medium hidden sm:block">
            작은 배움, 하나의 완성.
          </div>
          <a
            href="#apply"
            className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors whitespace-nowrap"
          >
            {BRAND_PAGE_CLASS_CONFIG.status === "open"
              ? BRAND_PAGE_CLASS_CONFIG.ctaOpenText
              : BRAND_PAGE_CLASS_CONFIG.ctaScheduledText}
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          [2. 상단 히어로]
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측: 상단 영문, 메인 제목(H1), 서브 제목, 본문, 강조 문구, 핵심 배지, 수업 정보, 신청 버튼 */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 상단 영문 라벨 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {BRAND_PAGE_CLASS_CONFIG.categoryLabel}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {BRAND_PAGE_CLASS_CONFIG.subBadge}
                </span>
              </div>

              {/* 강의명 & 부제 식별 배지 */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF2E6] border border-[#E8DFD3] text-xs text-[#6E5A4D]">
                <strong className="font-bold text-[#2E2723]">
                  {BRAND_PAGE_CLASS_CONFIG.courseTitle}
                </strong>
                <span className="text-[#C6A66B]">|</span>
                <span>{BRAND_PAGE_CLASS_CONFIG.courseSubtitle}</span>
              </div>

              {/* 메인 제목 (H1) & 서브 제목 */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                  # {BRAND_PAGE_CLASS_CONFIG.heroTitleLine1} <br />
                  <span className="text-[#8E6D38]">
                    {BRAND_PAGE_CLASS_CONFIG.heroTitleLine2}
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#6E5A4D] break-keep">
                  {BRAND_PAGE_CLASS_CONFIG.heroSubTitle}
                </p>
              </div>

              {/* 설명 본문 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                강사, 작가, 상담가, 프리랜서, 1인사업자라면 <br className="hidden sm:inline" />
                나를 설명해주는 온라인 공간 하나쯤은 필요합니다. <br className="hidden sm:inline" />
                AI와 대화하며 소개, 경력, 서비스, 활동, SNS 링크까지 담은 <br className="hidden sm:inline" />
                나만의 브랜드 웹페이지를 직접 완성합니다.
              </p>

              {/* 강조 문구 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ {BRAND_PAGE_CLASS_CONFIG.heroHighlight}
              </div>

              {/* 핵심 배지 4개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {BRAND_PAGE_CLASS_CONFIG.heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* 수업 정보 4칸 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    진행 방식
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {BRAND_PAGE_CLASS_CONFIG.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수업 시간
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {BRAND_PAGE_CLASS_CONFIG.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    개강 일정
                  </span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold break-keep">
                    {BRAND_PAGE_CLASS_CONFIG.schedule}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수강료
                  </span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold break-keep">
                    {BRAND_PAGE_CLASS_CONFIG.price}
                  </strong>
                </div>
              </div>

              {/* 신청 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <BrandPageCtaButton
                  courseId={BRAND_PAGE_CLASS_CONFIG.id}
                  courseTitle={BRAND_PAGE_CLASS_CONFIG.courseTitle}
                  status={BRAND_PAGE_CLASS_CONFIG.status}
                  applicationUrl={BRAND_PAGE_CLASS_CONFIG.applicationUrl}
                  notificationUrl={BRAND_PAGE_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={BRAND_PAGE_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={BRAND_PAGE_CLASS_CONFIG.ctaScheduledText}
                  variant="hero"
                />
                <span className="text-xs text-[#7C6656] break-keep">
                  * 현재 개강 준비 단계로 일정 확정 시 가장 먼저 안내해 드립니다.
                </span>
              </div>

              {/* 해시태그 */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#E8DFD3]">
                {BRAND_PAGE_CLASS_CONFIG.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#8E6D38] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 상단 시각 자료 (모바일 목업: 첫 화면 → 자기소개 → 활동 → 서비스 → 문의) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[330px] sm:max-w-[350px] mx-auto">
                <div className="rounded-[2.25rem] bg-[#1E1815] p-3 sm:p-3.5 shadow-2xl border-4 border-[#3E322C]">
                  {/* 상단 상태바 */}
                  <div className="flex items-center justify-between px-3 py-1.5 text-[10px] text-[#A8988B]">
                    <span className="font-semibold text-[#D6C6A8]">
                      MY BRAND PAGE
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#C6A66B]/20 text-[#C6A66B] border border-[#C6A66B]/40 font-bold">
                      {heroMockupSlot.badgeText || "수업 결과물 예시"}
                    </span>
                  </div>

                  {/* 모바일 화면 내부 */}
                  <div className="rounded-[1.75rem] bg-gradient-to-b from-[#17120E] via-[#120E0B] to-[#0D0A08] p-4 text-[#FAF7F2] border border-[#2E241D]">
                    {heroMockupSlot.src ? (
                      <div className="relative w-full aspect-[9/15] rounded-xl overflow-hidden bg-[#0E0B09]">
                        <Image
                          src={heroMockupSlot.src}
                          alt={heroMockupSlot.alt}
                          fill
                          sizes="350px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {/* 헤더 타이틀 */}
                        <div className="text-center pb-2 border-b border-[#261E18]">
                          <span className="text-[9px] tracking-widest text-[#C6A66B] font-bold uppercase block">
                            PERSONAL BRAND SITE
                          </span>
                          <p className="text-xs font-extrabold text-[#FAF7F2] mt-0.5">
                            한 페이지 안에 나와 내 브랜드를 담아봅니다
                          </p>
                        </div>

                        {/* 01. HERO */}
                        <div className="p-2.5 rounded-xl bg-[#231A14] border border-[#3E3024] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-[#C6A66B]">
                              01. HERO
                            </span>
                            <span className="text-[8px] px-1.5 py-0.2 rounded bg-[#C6A66B]/20 text-[#D6C6A8]">
                              첫인상
                            </span>
                          </div>
                          <p className="text-[10px] font-bold text-[#FAF7F2] break-keep">
                            “AI와 콘텐츠로 나만의 일을 만들어가는 사람”
                          </p>
                        </div>

                        {/* 02. ABOUT */}
                        <div className="p-2.5 rounded-xl bg-[#1A1410] border border-[#2D231C] space-y-1 text-[9px]">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-[#C6A66B]">
                              02. ABOUT
                            </span>
                            <span className="text-[8px] text-[#8F7D6E]">
                              나의 소개와 이야기
                            </span>
                          </div>
                          <p className="text-[8px] text-[#A8988B] leading-snug">
                            나는 누구인가 · 어떤 일을 하는가 · 어떤 경험을 가지고 있는가
                          </p>
                        </div>

                        {/* 03. CAREER & WORK */}
                        <div className="p-2.5 rounded-xl bg-[#1A1410] border border-[#2D231C] space-y-1 text-[9px]">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-[#C6A66B]">
                              03. CAREER & WORK
                            </span>
                            <span className="text-[8px] text-[#8F7D6E]">
                              경력과 활동
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 text-[7px] text-[#D6C6A8]">
                            <span className="px-1.5 py-0.5 rounded bg-[#251E18] border border-[#362B22]">강의</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#251E18] border border-[#362B22]">출판</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#251E18] border border-[#362B22]">프로젝트</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#251E18] border border-[#362B22]">포트폴리오</span>
                          </div>
                        </div>

                        {/* 04. SERVICE */}
                        <div className="p-2.5 rounded-xl bg-[#1A1410] border border-[#2D231C] space-y-1 text-[9px]">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-[#C6A66B]">
                              04. SERVICE
                            </span>
                            <span className="text-[8px] text-emerald-400 font-semibold">
                              제공 서비스
                            </span>
                          </div>
                          <p className="text-[8px] text-[#A8988B] leading-snug">
                            강의 · 상담 · 제작 · 프로그램 · 콘텐츠
                          </p>
                        </div>

                        {/* 05. CONTACT */}
                        <div className="p-2 rounded-xl bg-[#281F18] border border-[#C6A66B]/50 flex items-center justify-between text-[8px]">
                          <span className="font-bold text-[#C6A66B]">
                            05. CONTACT
                          </span>
                          <span className="text-[#FAF7F2] font-semibold">
                            SNS · 블로그 · 문의 링크 연결 →
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 하단 캡션 */}
                <p className="mt-3 text-center text-xs text-[#6E5A4D] font-medium">
                  ▲ 수업 결과물 예시 (첫 화면 → 자기소개 → 활동 → 서비스 → 문의)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [3. ABOUT BRAND PAGE — 기존 서비스 소개 대응]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            ABOUT BRAND PAGE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            링크 하나로 <br />
            <span className="text-[#D6C6A8]">
              나와 내 일을 설명할 수 있는 페이지
            </span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#B8A89A] leading-relaxed break-keep">
            <p>
              SNS 프로필 한 줄만으로는 <br className="hidden sm:inline" />
              내가 누구이고 어떤 일을 하는 사람인지 충분히 보여주기 어렵습니다.
            </p>
            <p className="text-[#FAF7F2] font-semibold">
              이 수업에서는 나의 소개, 경력, 활동, 서비스, 콘텐츠, SNS 링크를 <br className="hidden sm:inline" />
              한 페이지 안에 정리하여, 누군가에게 링크 하나만 보내도 <br className="hidden sm:inline" />
              나와 내 브랜드를 이해할 수 있는 개인 브랜드 소개 페이지를 직접 제작합니다.
            </p>
          </div>

          {/* 하단 강조: CORE PIPELINE 6단계 */}
          <div className="pt-4 max-w-3xl mx-auto">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#322720] text-center space-y-2">
              <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                CORE PIPELINE
              </span>
              <p className="text-xs sm:text-sm md:text-base font-extrabold text-[#FAF7F2] break-keep">
                나의 이야기 → 브랜드 메시지 → 페이지 구성 → AI 바이브코딩 → 디자인 수정 → 온라인 공개
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [4. 고민 공감 — WHY BRAND PAGE?]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              WHY BRAND PAGE?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              나를 소개할 곳은 필요한데, <br />
              <span className="text-[#D6C6A8]">
                어디서부터 만들어야 할지 막막했나요?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] max-w-2xl mx-auto pt-2 leading-relaxed break-keep">
              복잡한 코딩과 디자인이 두려워 미루고 있었다면, <br className="hidden sm:inline" />
              나를 보여주는 데 꼭 필요한 핵심 요소부터 하나씩 정리해봅니다.
            </p>
          </div>

          {/* 4개 고민 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BRAND_PAGE_PROBLEM_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2B221D] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="inline-block text-xs font-bold text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#221B16] border border-[#362B23]">
                    {card.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* 마무리 문장 */}
          <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#1D1612] via-[#241B16] to-[#1D1612] border border-[#3E3024] text-center space-y-1.5">
            <p className="text-sm sm:text-base text-[#D6C6A8] font-medium break-keep">
              페이지를 작은 섹션으로 나누고 AI에게 하나씩 요청하면,
            </p>
            <p className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
              처음 시작하는 사람도 자신의 브랜드 페이지를 직접 만들 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [5. 수강 전후 변화 — TRANSFORMATION]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              TRANSFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              막연했던 나의 브랜드가 <br />
              <span className="text-[#D6C6A8]">
                눈에 보이는 한 페이지가 됩니다
              </span>
            </h2>
          </div>

          <div className="space-y-3.5">
            {BRAND_PAGE_BEFORE_AFTER.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-11 gap-3 md:gap-4 items-center p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2B221D]"
              >
                <div className="md:col-span-5 flex items-center gap-3 p-3.5 rounded-xl bg-[#120E0C] border border-[#251E19]">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase shrink-0">
                    BEFORE
                  </span>
                  <span className="text-xs sm:text-sm text-[#A8988B] break-keep">
                    {item.before}
                  </span>
                </div>

                <div className="md:col-span-1 flex items-center justify-center text-[#C6A66B] font-bold text-sm">
                  <span className="hidden md:inline">→</span>
                  <span className="md:hidden">↓</span>
                </div>

                <div className="md:col-span-5 flex items-center gap-3 p-3.5 rounded-xl bg-[#211A14] border border-[#C6A66B]/40">
                  <span className="px-2 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] text-[10px] font-extrabold uppercase shrink-0">
                    AFTER
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2] font-bold break-keep">
                    {item.after}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [6. 하루 완성 결과물 — ONE DAY RESULT]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              ONE DAY RESULT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              하루 3~4시간, <br />
              <span className="text-[#D6C6A8]">
                나를 소개하는 브랜드 페이지 첫 버전을 완성합니다
              </span>
            </h2>
          </div>

          {/* 5개 결과물 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRAND_PAGE_ONE_DAY_RESULTS.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2E241E] hover:border-[#C6A66B]/45 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold tracking-wider text-[#C6A66B] uppercase block">
                    {card.step}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {card.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#241C17] flex flex-wrap gap-1.5">
                  {card.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs text-[#D6C6A8] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 하단 안내 */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#17120F] border border-[#2E241D] text-center">
            <p className="text-xs sm:text-sm text-[#C4B5A6] leading-relaxed break-keep">
              ※ 제공 템플릿과 AI 바이브코딩 프롬프트를 바탕으로 실제 열리는 웹페이지를 만듭니다.{" "}
              <br className="hidden sm:inline" />
              이후 강의, 상품, 뉴스레터, 예약 시스템 등 필요한 기능은 계속 확장할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [7. 수업 구성 요약 — PACKAGE INCLUDED]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              PACKAGE INCLUDED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              기획부터 공개까지, <br />
              <span className="text-[#D6C6A8]">
                첫 브랜드 페이지에 필요한 흐름을 함께 배웁니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRAND_PAGE_PACKAGE_SUMMARY.map((item) => (
              <div
                key={item.number}
                className="p-5 rounded-2xl bg-[#181310] border border-[#2F251E] space-y-2.5"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-extrabold">
                  {item.number}
                </span>
                <h3 className="text-base font-extrabold text-[#FAF7F2] break-keep">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [8. 디자인 예시 — DESIGN EXAMPLES]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              DESIGN EXAMPLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              같은 소개페이지도 <br />
              <span className="text-[#D6C6A8]">
                나의 일과 분위기에 맞게 달라질 수 있습니다
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              내 브랜드와 활동 분야에 맞는 색감과 타이포그래피, 레이아웃을 선택하여 완성합니다. (디자인 예시)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BRAND_PAGE_CONCEPT_EXAMPLES.map((concept) => {
              const slot = BRAND_PAGE_IMAGES[concept.imageSlotKey];
              const fallbackType = conceptFallbackMap[concept.imageSlotKey];
              return (
                <div
                  key={concept.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#161210] border border-[#2E241E] flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{concept.icon}</span>
                        <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                          {concept.title}
                        </h3>
                      </div>
                      <span className="text-[11px] text-[#C6A66B] font-semibold block">
                        {concept.subtitle} · {concept.palette}
                      </span>
                      <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
                        {concept.description}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#221A14] border border-[#3A2D23] text-[10px] font-bold text-[#C6A66B] shrink-0">
                      디자인 예시
                    </span>
                  </div>

                  <BrandPageReplaceableImage
                    slot={slot}
                    fallbackType={fallbackType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [9. 핵심 차별점 — CORE DIFFERENTIATOR]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#14100D]">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1713] to-[#15100D] border-2 border-[#C6A66B]/45 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
                CORE DIFFERENTIATOR · PERSONAL BRAND & VIBE CODING
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                코딩보다 먼저, <br />
                <span className="text-[#D6C6A8]">
                  &apos;나를 어떻게 보여줄지&apos;부터 만듭니다
                </span>
              </h2>
            </div>

            {/* 3가지 핵심 기둥 설명 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {BRAND_PAGE_CORE_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#161210] border border-[#342820] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="inline-block text-xs font-extrabold text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#241B15] border border-[#3E3024]">
                      {pillar.pillar}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8A89A] leading-relaxed break-keep">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 시각 자료: 3개 기둥 프리뷰 화면 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] block">
                  화면 01
                </span>
                <h4 className="text-sm font-extrabold text-[#EDE6DC]">
                  브랜드 구조화
                </h4>
                <BrandPageReplaceableImage
                  slot={BRAND_PAGE_IMAGES.diffStepStructure}
                  fallbackType="diff-step-structure"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] block">
                  화면 02
                </span>
                <h4 className="text-sm font-extrabold text-[#EDE6DC]">
                  AI 바이브코딩
                </h4>
                <BrandPageReplaceableImage
                  slot={BRAND_PAGE_IMAGES.diffStepVibe}
                  fallbackType="diff-step-vibe"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] block">
                  화면 03
                </span>
                <h4 className="text-sm font-extrabold text-[#EDE6DC]">
                  직접 수정 & 확장
                </h4>
                <BrandPageReplaceableImage
                  slot={BRAND_PAGE_IMAGES.diffStepCustom}
                  fallbackType="diff-step-custom"
                />
              </div>
            </div>

            {/* 안내 문구 */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#130F0C] border border-[#2E241D] text-xs text-[#9E8B7C] leading-relaxed break-keep text-center">
              수업 이후 문구, 사진, 서비스 내용이 바뀌어도 외주를 다시 맡길 필요 없이 AI와 대화하며 내 손으로 직접 수정할 수 있는 기초 역량을 완성합니다.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [10. 제작 과정 — HOW IT WORKS]
          8단계 커리큘럼 + 4시간 기준 시간 구성안 표
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              아이디어부터 공개까지 <br />
              <span className="text-[#D6C6A8]">8단계로 완성합니다</span>
            </h2>
          </div>

          {/* 8단계 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BRAND_PAGE_CURRICULUM_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#161210] border border-[#2D231C] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#231B15] border border-[#3B2E24] text-[11px] font-extrabold text-[#C6A66B]">
                    {item.step}
                  </span>
                  <h3 className="text-base font-extrabold text-[#FAF7F2] leading-snug break-keep">
                    {item.title}
                  </h3>
                </div>
                <div className="pt-3 border-t border-[#241C17]">
                  <span className="text-[11px] text-[#8F7D6E] block mb-0.5">
                    결과물
                  </span>
                  <strong className="text-xs text-[#D6C6A8] font-semibold break-keep">
                    {item.output}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          {/* 시간 구성안 (4시간 기준) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#15110E] border border-[#2E241E] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#261E18] pb-4">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                  TIME SCHEDULE
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#FAF7F2]">
                  운영용 시간 구성안 (4시간 기준)
                </h3>
              </div>
              <span className="text-xs text-[#A8988B]">
                총 240분 (실습 중심 진행)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2B221C] text-xs text-[#9E8B7C]">
                    <th className="py-3 px-4 font-bold">구간</th>
                    <th className="py-3 px-4 font-bold text-right">시간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#221A15] text-xs sm:text-sm">
                  {BRAND_PAGE_TIME_SCHEDULE.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#1B1511] transition-colors"
                    >
                      <td className="py-3.5 px-4 font-semibold text-[#FAF7F2]">
                        {row.phase}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#C6A66B]">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#9E8B7C] pt-1 break-keep">
              * 3시간 과정으로 진행할 경우 기본 템플릿을 제공하고 브랜드 메시지와 디자인 수정, 콘텐츠 교체에 집중하도록 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [11. 혜택 자료 — CLASS KIT]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CLASS KIT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              처음부터 헤매지 않도록 <br />
              <span className="text-[#D6C6A8]">
                제작에 필요한 자료를 함께 드립니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRAND_PAGE_CLASS_KITS.map((kit) => (
              <div
                key={kit.code}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2F251E] space-y-2.5"
              >
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-xs font-extrabold text-[#C6A66B]">
                  {kit.code}
                </span>
                <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                  {kit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {kit.description}
                </p>
              </div>
            ))}
          </div>

          {/* 활용 흐름 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#342921] text-center space-y-2">
            <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
              HOW TO USE CLASS KIT
            </span>
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#FAF7F2] break-keep">
              템플릿 실행 → 나의 콘텐츠 입력 → AI로 디자인 수정 → 모바일 확인 → 온라인 공개
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [12. 실제 제작 사례 — REAL EXPERIENCE]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              REAL EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              나의 이야기가 <br />
              <span className="text-[#D6C6A8]">
                실제 브랜드 페이지로 완성됩니다
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              첫 화면부터 소개, 경력, 서비스, 모바일 화면까지 체계적인 구성으로 구현됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRAND_PAGE_REAL_CASES.map((item) => {
              const slot = BRAND_PAGE_IMAGES[item.imageSlotKey];
              const fallbackType = realCaseFallbackMap[item.imageSlotKey];
              return (
                <div
                  key={item.number}
                  className="p-5 rounded-2xl bg-[#161210] border border-[#2E241E] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-[#C6A66B]">
                      CASE {item.number}
                    </span>
                    <h3 className="text-base font-extrabold text-[#FAF7F2] break-keep">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                      {item.description}
                    </p>
                  </div>

                  <BrandPageReplaceableImage
                    slot={slot}
                    fallbackType={fallbackType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [13. 후속 확장 — FIRST RELEASE & EXPANSION]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            FIRST RELEASE & EXPANSION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            첫 브랜드 페이지를 만들면, <br />
            <span className="text-[#D6C6A8]">
              필요할 때 계속 확장할 수 있습니다
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
            처음부터 거대한 홈페이지를 만들 필요는 없습니다. <br className="hidden sm:inline" />
            먼저 나를 설명하는 한 페이지를 완성한 뒤, 활동이 늘어나면 필요한 내용을 하나씩 추가할 수 있습니다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {BRAND_PAGE_EXPANSION_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#161210] border border-[#2D231C] text-xs sm:text-sm font-bold text-[#FAF7F2]"
              >
                + {pt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [14. 추천 대상 — RECOMMENDED FOR]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              이런 분이라면 함께하세요
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {BRAND_PAGE_RECOMMENDED_FOR.map((text, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2D231C] flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-[#C6A66B]/20 border border-[#C6A66B]/50 text-[#C6A66B] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-[#FAF7F2] font-semibold leading-relaxed break-keep">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [15. 활용 방향 — BUSINESS EXPANSION]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              BUSINESS EXPANSION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              브랜드 소개 페이지가 <br />
              <span className="text-[#D6C6A8]">
                온라인 활동의 중심이 됩니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRAND_PAGE_EXPANSION_IDEAS.map((idea) => (
              <div
                key={idea.number}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2E241E] space-y-2.5"
              >
                <span className="text-xs font-extrabold text-[#C6A66B] block">
                  USE CASE {idea.number}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
                  {idea.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {idea.description}
                </p>
              </div>
            ))}
          </div>

          {/* 하단 문구 */}
          <div className="mt-8 text-center text-xs sm:text-sm text-[#A8988B]">
            완성한 브랜드 페이지를 SNS와 커뮤니티의 대표 링크로 등록하고, 나만의 비즈니스 성장의 발판으로 삼아보세요.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [16. 클래스 안내 — CLASS INFO]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CLASS INFO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              수강 안내
            </h2>
          </div>

          <div className="rounded-2xl bg-[#161210] border border-[#2F251E] overflow-hidden">
            <dl className="divide-y divide-[#251D17] text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">강의명</dt>
                <dd className="sm:col-span-3 font-bold text-[#FAF7F2]">
                  {BRAND_PAGE_CLASS_CONFIG.courseTitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">부제</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.courseSubtitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">진행 방식</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.format}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">수업 시간</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.duration}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">개강 일정</dt>
                <dd className="sm:col-span-3 font-semibold text-[#D6C6A8]">
                  {BRAND_PAGE_CLASS_CONFIG.schedule}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">난이도</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.difficulty}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">완성 목표</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.goalSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">제공 자료</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.materialsSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">준비물</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BRAND_PAGE_CLASS_CONFIG.preparationSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">사전 준비 안내</dt>
                <dd className="sm:col-span-3 text-[#A8988B] leading-relaxed break-keep">
                  {BRAND_PAGE_CLASS_CONFIG.preClassNotice}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">환불 기준</dt>
                <dd className="sm:col-span-3 text-[#A8988B]">
                  자명스쿨{" "}
                  <Link
                    href={BRAND_PAGE_CLASS_CONFIG.termsUrl}
                    className="text-[#D6C6A8] underline underline-offset-4 hover:text-[#C6A66B]"
                  >
                    공통 취소·환불 규정
                  </Link>{" "}
                  적용
                </dd>
              </div>
            </dl>
          </div>

          {/* 수강 후 안내: 자명스쿨 커뮤니티 초대 */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C1612] via-[#231B15] to-[#1C1612] border border-[#3E3024] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#C6A66B] block">
                수강 후 안내 · 자명스쿨 커뮤니티 초대
              </span>
              <p className="text-xs sm:text-sm text-[#FAF7F2] leading-relaxed break-keep">
                {BRAND_PAGE_CLASS_CONFIG.communityInviteText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [17. 자주 묻는 질문 — FAQ 6문항]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8E6D38] uppercase block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E2723] leading-tight break-keep">
              자주 묻는 질문
            </h2>
          </div>

          <BrandPageFaqAccordion items={BRAND_PAGE_FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [18. 마지막 신청 영역 — 최종 CTA]
         ═══════════════════════════════════════════════ */}
      <section
        id="apply"
        className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#120E0C] to-[#0D0B0A]"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              AI BRAND PAGE · ONE DAY CLASS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              나를 설명하는 페이지가 없다면, <br />
              <span className="text-[#D6C6A8]">
                이번에는 직접 만들어보세요.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep max-w-xl mx-auto">
              코딩을 몰라도 괜찮습니다. <br className="hidden sm:inline" />
              AI와 함께 나의 이야기와 경험, 서비스를 한 페이지에 담아 <br className="hidden sm:inline" />
              나만의 브랜드 공간을 완성합니다.
            </p>
          </div>

          {/* 수업을 마치면 남는 4가지 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#17120F] border border-[#352A21] text-left space-y-5">
            <span className="text-xs font-extrabold text-[#C6A66B] block">
              수업을 마치면 남는 4가지
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BRAND_PAGE_FINAL_COMPLETION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#120E0C] border border-[#2B221C] flex items-center gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#C6A66B]/20 text-[#C6A66B] flex items-center justify-center text-xs font-extrabold shrink-0">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#FAF7F2] break-keep">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <BrandPageCtaButton
                courseId={BRAND_PAGE_CLASS_CONFIG.id}
                courseTitle={BRAND_PAGE_CLASS_CONFIG.courseTitle}
                status={BRAND_PAGE_CLASS_CONFIG.status}
                applicationUrl={BRAND_PAGE_CLASS_CONFIG.applicationUrl}
                notificationUrl={BRAND_PAGE_CLASS_CONFIG.notificationUrl}
                ctaOpenText={BRAND_PAGE_CLASS_CONFIG.ctaOpenText}
                ctaScheduledText={BRAND_PAGE_CLASS_CONFIG.ctaScheduledText}
                variant="final"
              />
            </div>
          </div>

          {/* 마무리 문구 & 보조 문구 */}
          <div className="space-y-1.5 pt-2">
            <p className="text-sm sm:text-base font-bold text-[#C6A66B]">
              하루 3~4시간 · Zoom 실시간 실습 · 비개발자 참여 가능
            </p>
            <p className="text-xs sm:text-sm text-[#A8988B]">
              작은 배움, 하나의 완성. 이번에는 당신의 이름으로 된 브랜드 페이지가 열립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 모바일 하단 고정 신청 바 */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#14100D]/95 backdrop-blur-md border-t border-[#322720] px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] text-[#C6A66B] font-bold block truncate">
            {BRAND_PAGE_CLASS_CONFIG.schedule}
          </span>
          <strong className="text-xs text-[#FAF7F2] font-extrabold block truncate">
            {BRAND_PAGE_CLASS_CONFIG.courseTitle}
          </strong>
        </div>
        <BrandPageCtaButton
          courseId={BRAND_PAGE_CLASS_CONFIG.id}
          courseTitle={BRAND_PAGE_CLASS_CONFIG.courseTitle}
          status={BRAND_PAGE_CLASS_CONFIG.status}
          applicationUrl={BRAND_PAGE_CLASS_CONFIG.applicationUrl}
          notificationUrl={BRAND_PAGE_CLASS_CONFIG.notificationUrl}
          ctaOpenText={BRAND_PAGE_CLASS_CONFIG.ctaOpenText}
          ctaScheduledText={BRAND_PAGE_CLASS_CONFIG.ctaScheduledText}
          variant="mobile-bar"
        />
      </div>
    </main>
  );
}

