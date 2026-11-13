import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  PAPERBOOK_CLASS_CONFIG,
  PUBLISHER_DIRECT_SECTION,
  FIRST_HOOK_SECTION,
  LIFE_STORY_SECTION,
  WHY_PAPER_BOOK_ITEMS,
  ZERO_COST_SECTION,
  BOOK_STYLE_ITEMS,
  BOOK_STYLE_FOOTER,
  BOOK_STYLE_LIFE_STORY_NOTE,
  PUBLISHING_CHECK_SECTION,
  ONE_DAY_RESULTS,
  TRANSFORMATION_ITEMS,
  CURRICULUM_STEPS,
  TIME_SCHEDULE_ITEMS,
  TIME_SCHEDULE_NOTICE,
  CLASS_KITS,
  SELF_PUBLISHING_SECTION,
  AUTHOR_BRANDING_SECTION,
  RECOMMENDED_FOR_LIST,
  PAPERBOOK_FAQS,
  FINAL_CTA_SECTION,
  PREPARATION_ITEMS,
  PRE_CLASS_NOTICES,
} from "@/data/paperbookClassData";
import {
  PaperbookFaqAccordion,
  PaperbookCtaButton,
  PaperbookFloatingBar,
  PaperbookHeroVisual,
} from "@/components/paperbook/PaperbookInteractive";

export const metadata: Metadata = {
  title: "AI 감성 종이책 출판 원데이 | 단 하루 만에 완성하는 내 첫 종이책 · 자명스쿨",
  description:
    "에세이, 인생 에세이, 자서전, 필사책, 디카시, 시화집, 컬러링북, 감성 워크북 등 부담 없는 콘텐츠로 시작하는 첫 종이책. Canva 내지·표지 편집부터 재고 없는 POD 출판, 반려 방지 체크까지 출판사 대표 직강으로 배웁니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/paperbook",
  },
  openGraph: {
    title: "AI 감성 종이책 출판 원데이 | 단 하루 만에 완성하는 내 첫 종이책 · 자명스쿨",
    description:
      "에세이, 인생 에세이, 자서전, 필사책, 디카시, 시화집, 컬러링북, 감성 워크북 등 부담 없는 콘텐츠로 시작하는 첫 종이책. Canva 내지·표지 편집부터 재고 없는 POD 출판, 반려 방지 체크까지 출판사 대표 직강으로 배웁니다.",
    url: "https://www.jmschool.kr/paperbook",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

export default function PaperbookPage() {
  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 서브 헤더 네비게이션
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] py-3.5 transition-all">
        <div className="site-container flex items-center justify-between gap-2">
          <Link
            href={PAPERBOOK_CLASS_CONFIG.onedayListUrl}
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
          <PaperbookCtaButton
            courseId={PAPERBOOK_CLASS_CONFIG.id}
            courseTitle={PAPERBOOK_CLASS_CONFIG.courseTitle}
            status={PAPERBOOK_CLASS_CONFIG.status}
            applicationUrl={PAPERBOOK_CLASS_CONFIG.applicationUrl}
            notificationUrl={PAPERBOOK_CLASS_CONFIG.notificationUrl}
            ctaOpenText={PAPERBOOK_CLASS_CONFIG.ctaOpenText}
            ctaScheduledText={PAPERBOOK_CLASS_CONFIG.ctaScheduledText}
            variant="nav"
          />
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          [01. 메인 히어로] (자명스쿨 시그니처 베이지 배경)
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측: 배지, 제목(H1), 부제, 설명, 강조 박스, 수업 정보, CTA, 태그 */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 상단 작은 배지: PUBLISHER DIRECT CLASS · 출판사 대표 직강 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {PAPERBOOK_CLASS_CONFIG.categoryLabel}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-semibold">
                  {PAPERBOOK_CLASS_CONFIG.subBadge}
                </span>
              </div>

              {/* 그 아래 시리즈 배지 */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF2E6] border border-[#E8DFD3] text-xs text-[#6E5A4D]">
                <strong className="font-bold text-[#2E2723]">
                  AI PAPER BOOK · ONE DAY CLASS
                </strong>
                <span className="text-[#C6A66B]">|</span>
                <span>자명스쿨 원데이 실전 마스터</span>
              </div>

              {/* 과정명 (메인 H1) & 메인 부제 */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                  {PAPERBOOK_CLASS_CONFIG.heroMainTitleLine1}
                </h1>
                <p className="text-lg sm:text-2xl font-bold text-[#8E6D38] leading-snug break-keep">
                  # {PAPERBOOK_CLASS_CONFIG.heroMainTitleLine2}
                </p>
              </div>

              {/* 메인 설명 */}
              <div className="space-y-2 text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                <p>
                  책을 내고 싶지만 긴 원고를 쓰는 것부터 막막했다면, <br />
                  에세이, 필사책, 디카시, 시화집, 컬러링 에세이처럼 <br className="hidden sm:inline" />
                  부담 없이 시작할 수 있는 작은 책부터 시작해보세요.
                </p>
                <p>
                  AI를 활용해 콘텐츠를 정리하고, Canva로 내지와 표지를 편집한 뒤 <br className="hidden sm:inline" />
                  POD 방식으로 실제 종이책 출판까지 이어가는 첫 출판 실습 클래스입니다.
                </p>
                {PAPERBOOK_CLASS_CONFIG.heroSubDescription && (
                  <p className="text-xs sm:text-sm text-[#7C6656] pt-1.5 border-t border-[#E8DFD3] font-medium leading-relaxed">
                    {PAPERBOOK_CLASS_CONFIG.heroSubDescription}
                  </p>
                )}
              </div>

              {/* 강조 카피 박스 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep shadow-xs">
                {PAPERBOOK_CLASS_CONFIG.heroHookText}
              </div>

              {/* 핵심 혜택 라벨 5개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {PAPERBOOK_CLASS_CONFIG.heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* 수업 정보 4칸 카드 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    진행 방식
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {PAPERBOOK_CLASS_CONFIG.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수업 시간
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {PAPERBOOK_CLASS_CONFIG.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수강료
                  </span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold break-keep">
                    {PAPERBOOK_CLASS_CONFIG.price}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    개강 일정
                  </span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold break-keep">
                    {PAPERBOOK_CLASS_CONFIG.schedule}
                  </strong>
                </div>
              </div>

              {/* 상단 CTA 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <PaperbookCtaButton
                  courseId={PAPERBOOK_CLASS_CONFIG.id}
                  courseTitle={PAPERBOOK_CLASS_CONFIG.courseTitle}
                  status={PAPERBOOK_CLASS_CONFIG.status}
                  applicationUrl={PAPERBOOK_CLASS_CONFIG.applicationUrl}
                  notificationUrl={PAPERBOOK_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={PAPERBOOK_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={PAPERBOOK_CLASS_CONFIG.ctaScheduledText}
                  variant="hero"
                />
                <a
                  href="#class-info"
                  className="min-h-[48px] px-5 rounded-xl bg-white hover:bg-[#FAF2E6] text-[#4A3F35] border border-[#D6C6A8] text-xs sm:text-sm font-semibold inline-flex items-center justify-center transition-colors"
                >
                  클래스 커리큘럼 먼저 보기 ↓
                </a>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {PAPERBOOK_CLASS_CONFIG.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF2E6] text-[#7C6656] font-medium border border-[#E8DFD3]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 종이책 표지 전개도 & 펼친 내지 목업 그래픽 */}
            <div className="lg:col-span-5 flex justify-center">
              <PaperbookHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          본문 상세 섹션 컨테이너
         ═══════════════════════════════════════════════ */}
      <div className="w-full bg-[#0D0B0A]">
        {/* ───────────────────────────────────────────
            [02. 출판사 대표 직강 신뢰 섹션]
           ─────────────────────────────────────────── */}
        <section className="w-full pt-14 pb-16 md:py-20 border-b border-[#26201B]">
          <div className="site-container">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#15110E] border border-[#2E241D] shadow-lg space-y-6">
              <div className="space-y-3">
                <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase block">
                  {PUBLISHER_DIRECT_SECTION.label}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2] leading-tight break-keep whitespace-pre-line">
                  {PUBLISHER_DIRECT_SECTION.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#C8BCB0] leading-relaxed break-keep whitespace-pre-line">
                {PUBLISHER_DIRECT_SECTION.description}
              </p>

              {/* 직강 3대 신뢰 포인트 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {PUBLISHER_DIRECT_SECTION.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#1C1612] border border-[#362A20] space-y-1.5"
                  >
                    <span className="text-xs font-bold text-[#C6A66B] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                      {pt.title}
                    </span>
                    <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [03. 첫 후킹 섹션 (YOUR FIRST PAPER BOOK)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                {FIRST_HOOK_SECTION.english}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep whitespace-pre-line">
                {FIRST_HOOK_SECTION.title}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep">
                {FIRST_HOOK_SECTION.descriptionParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* 하단 강조 박스 */}
            <div className="p-7 md:p-9 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center shadow-lg max-w-2xl mx-auto">
              <p className="text-base sm:text-lg font-bold text-[#D6C6A8] leading-relaxed break-keep">
                {FIRST_HOOK_SECTION.highlightQuote}
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [03-1. 신규 감성 섹션 (THE STORY OF MY LIFE & 3가지 방법 카드)]
            자서전·인생 에세이·자기 성찰을 통한 출판 방향성 제시
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#2B2119] bg-gradient-to-b from-[#17120F] via-[#130E0C] to-[#0F0B09] relative overflow-hidden">
          {/* 감성적인 소프트 앰버 조명 효과 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-[#C6A66B]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="site-container relative z-10 space-y-16">
            {/* 상단: 감성 메시지 & 성찰 인용 */}
            <div className="max-w-3xl mx-auto text-center space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241B15] border border-[#453424] text-xs font-semibold text-[#D6C6A8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                <span className="tracking-widest uppercase text-[#C6A66B] font-bold">
                  {LIFE_STORY_SECTION.label}
                </span>
                <span className="text-[#8F7D6E]">·</span>
                <span>{LIFE_STORY_SECTION.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-[38px] font-bold text-[#FAF7F2] leading-tight break-keep">
                “{LIFE_STORY_SECTION.title}”
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[#C2B4A6] leading-relaxed break-keep pt-1 font-light">
                {LIFE_STORY_SECTION.paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* 감성 강조 인용구 카드 */}
              <div className="pt-2">
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#211A14] via-[#1B140F] to-[#211A14] border border-[#48372A] shadow-md max-w-2xl mx-auto text-center">
                  <span className="text-xl sm:text-2xl block mb-2 opacity-80">📖</span>
                  <p className="text-base sm:text-lg font-bold text-[#D6C6A8] leading-relaxed break-keep font-serif">
                    “{LIFE_STORY_SECTION.quote}”
                  </p>
                </div>
              </div>
            </div>

            {/* 하단: 나의 이야기가 책이 되는 3가지 방법 카드 */}
            <div className="space-y-8 pt-4">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-[0.2em] block">
                  3 WAYS TO PUBLISH YOUR STORY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#FAF7F2] break-keep">
                  {LIFE_STORY_SECTION.subTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {LIFE_STORY_SECTION.cards.map((card) => (
                  <div
                    key={card.cardNumber}
                    className="p-6 sm:p-7 rounded-2xl bg-[#17120F] border border-[#2F231B] hover:border-[#C6A66B]/50 transition-all duration-300 flex flex-col justify-between space-y-5 group shadow-md"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-[#241A14] border border-[#3D2C21] text-[11px] font-extrabold text-[#C6A66B]">
                          {card.cardNumber}
                        </span>
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {card.icon}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#FAF7F2] leading-snug break-keep">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D6C6A8] font-semibold leading-relaxed break-keep">
                        “{card.quote}”
                      </p>
                      <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep pt-1">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#261D17]">
                      <span className="text-[11px] text-[#C6A66B] font-medium">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [04. WHY PAPER BOOK? (01~04)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                WHY PAPER BOOK?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                왜 지금, <br />
                내 이름의 종이책 한 권일까요?
              </h2>
            </div>

            {/* 4개 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {WHY_PAPER_BOOK_ITEMS.map((item) => (
                <div
                  key={item.number}
                  className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#C6A66B]">
                        {item.number}
                      </span>
                      <span className="text-[11px] text-[#8F7D6E] font-medium">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-2.5 break-keep">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [05. '0원 출판' 후킹 영역]
           ─────────────────────────────────────────── */}
        <section className="w-full py-16 md:py-24 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#16120F] border border-[#2E241D] shadow-lg text-center space-y-5">
              <span className="text-xs font-bold text-[#C6A66B] tracking-[0.2em] uppercase block">
                AFFORDABLE PUBLISHING
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2] leading-tight break-keep">
                {ZERO_COST_SECTION.title}
              </h2>

              <div className="inline-block px-4 py-2 rounded-xl bg-[#241B15] border border-[#C6A66B]/40 text-[#D6C6A8] text-base sm:text-lg font-extrabold shadow-sm">
                “{ZERO_COST_SECTION.highlightBadge}”
              </div>

              <p className="text-sm sm:text-base text-[#C8BCB0] max-w-2xl mx-auto leading-relaxed break-keep">
                {ZERO_COST_SECTION.description}
              </p>

              <div className="pt-3 border-t border-[#261E19]">
                <p className="text-[11px] sm:text-xs text-[#8F7D6E] max-w-xl mx-auto leading-relaxed break-keep">
                  {ZERO_COST_SECTION.caution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [06. 어떤 책을 만들 수 있나요? (YOUR BOOK STYLE 6개 카드)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                YOUR BOOK STYLE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                첫 책은 <br className="sm:hidden" />
                가볍고 작은 책이어도 좋습니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                처음부터 200페이지를 쓰지 않아도 됩니다. <br className="hidden sm:inline" />
                부담 없이 시작할 수 있는 6가지 감성 종이책 유형을 만나보세요.
              </p>
            </div>

            {/* 6개 카드 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {BOOK_STYLE_ITEMS.map((item) => (
                <div
                  key={item.number}
                  className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#C6A66B]">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center text-xl shadow-inner">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-2 break-keep">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#221B16] text-[11px] text-[#C6A66B] font-medium">
                    {item.exampleTag}
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 강조 문구 및 인생 에세이/자서전 확장 안내 */}
            <div className="space-y-3">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#16120F] border border-[#2E241D] text-center">
                <p className="text-xs sm:text-sm text-[#D6C6A8] font-bold leading-relaxed break-keep">
                  ✨ {BOOK_STYLE_FOOTER}
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-[#1C1612] border border-[#3A2D23] text-center">
                <p className="text-xs sm:text-sm text-[#BFAFA2] leading-relaxed break-keep">
                  💡 <strong className="text-[#FAF7F2] font-semibold">{BOOK_STYLE_LIFE_STORY_NOTE}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [07. 출판 반려 방지 영역 (PUBLISHING CHECK 10개)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                {PUBLISHING_CHECK_SECTION.english}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                {PUBLISHING_CHECK_SECTION.title}
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto leading-relaxed break-keep">
                {PUBLISHING_CHECK_SECTION.description}
              </p>
            </div>

            {/* 체크 카드 10개 (2열 그리드) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {PUBLISHING_CHECK_SECTION.checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-md bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#FAF7F2] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#8F7D6E] leading-relaxed break-keep">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 강조 배너 */}
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#181310] via-[#241B16] to-[#181310] border border-[#3E3024] text-center shadow-md">
              <p className="text-sm sm:text-base font-bold text-[#D6C6A8] break-keep">
                “{PUBLISHING_CHECK_SECTION.highlight}”
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [08. ONE DAY RESULT (하루 3~4시간 5가지 결과)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                ONE DAY RESULT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                하루 3~4시간, <br />
                첫 종이책의 전체 구조를 완성합니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                기획부터 콘텐츠, Canva 내지·표지 편집, POD 출판 등록 준비까지. <br />
                책 한 권을 만드는 전 과정을 직접 경험합니다.
              </p>
            </div>

            {/* 결과 카드 5개 (반응형 그리드) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {ONE_DAY_RESULTS.map((card) => (
                <div
                  key={card.code}
                  className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#C6A66B]">
                        {card.code}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#241B16] text-[#D6C6A8] font-bold">
                        {card.stepName}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#FAF7F2] mb-2 break-keep">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#221B16] flex flex-wrap gap-1 text-[10px] text-[#C6A66B]">
                    {card.tags.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 안내 */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2E241D] text-center space-y-1">
              <p className="text-xs sm:text-sm text-[#D6C6A8] leading-relaxed break-keep">
                수업자의 실습 속도와 선택한 책의 분량에 따라 수업 후 추가 편집이 필요할 수 있습니다.
              </p>
              <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                출판 등록 전 셀프 체크리스트와 반려 방지 가이드로 꼼꼼하게 점검할 수 있도록 안내합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [09. BEFORE / AFTER (TRANSFORMATION 5개)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                TRANSFORMATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                “책 한번 내보고 싶다”에서 <br />
                “내 이름의 첫 책”으로
              </h2>
            </div>

            {/* 5개 비교 항목 */}
            <div className="space-y-4">
              {TRANSFORMATION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#17120F] border border-[#2B221B] p-5 sm:p-6"
                >
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-[#120E0C] border border-[#261E18] space-y-1">
                      <span className="text-xs text-red-400 font-bold block">
                        ✕ BEFORE
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#A8988B] break-keep">
                        {item.before}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#1E1712] border border-[#3E3024] space-y-1">
                      <span className="text-xs text-[#C6A66B] font-bold block">
                        ✓ AFTER
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [10. HOW IT WORKS (8단계 제작·출판 과정)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                아이디어에서 <br className="sm:hidden" />
                종이책 등록 준비까지 8단계
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                막연했던 출판 과정을 단계별 순서로 쪼개어 누구나 쉽게 따라갈 수 있습니다.
              </p>
            </div>

            {/* 8단계 리스트 */}
            <div className="space-y-3.5">
              {CURRICULUM_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#C6A66B]/30 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                        {item.step}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-[#FAF7F2] break-keep">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep pl-0.5">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                    <span className="text-[11px] text-[#8F7D6E] font-medium">
                      결과물
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#241B15] border border-[#3E2E22] text-xs font-bold text-[#D6C6A8]">
                      {item.output}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [11. TIME SCHEDULE (총 3~4시간 실습)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                TIME SCHEDULE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-3 break-keep">
                총 3~4시간 집중 실습 타임테이블
              </h2>
              <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                {TIME_SCHEDULE_NOTICE}
              </p>
            </div>

            {/* 타임라인 카드 */}
            <div className="rounded-3xl bg-[#16120F] border border-[#2E241D] p-5 sm:p-7 md:p-8 space-y-3">
              {TIME_SCHEDULE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm ${item.isBreak
                      ? "bg-[#1E1713] border border-dashed border-[#443528] text-[#8F7D6E]"
                      : "bg-[#1C1612] border border-[#362A20] text-[#FAF7F2]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-14 sm:w-16 py-1 rounded-md text-center text-xs font-bold shrink-0 ${item.isBreak
                          ? "bg-[#2A2018] text-[#A8988B]"
                          : "bg-[#C6A66B]/20 text-[#D6C6A8]"
                        }`}
                    >
                      {item.time}
                    </span>
                    <strong className="font-semibold">{item.title}</strong>
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#9E8B7C] hidden sm:block text-right">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [12. CLASS KIT (수강생 실전 자료 7종)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                CLASS KIT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                첫 책 이후에도 사용할 수 있는 <br />
                출판 실전 자료를 함께 제공합니다.
              </h2>
            </div>

            {/* 7종 자료 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
              {CLASS_KITS.map((kit) => (
                <div
                  key={kit.code}
                  className="p-5 sm:p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
                >
                  <div>
                    <span className="text-xs text-[#C6A66B] font-bold block mb-1.5">
                      {kit.code}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-2 break-keep">
                      {kit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      {kit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 활용 안내 배너 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#17120F] border border-[#3E3024] text-center">
              <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed break-keep">
                제공되는 스킬과 템플릿은 단발성 수업에 그치지 않고, 향후 두 번째, 세 번째 종이책을 만들 때도 계속해서 재사용할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [13. 1인출판사 영역 (BEYOND THE FIRST BOOK)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#16120F] border border-[#2E241D] shadow-lg space-y-6">
              <div className="space-y-3">
                <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase block">
                  {SELF_PUBLISHING_SECTION.english}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2] leading-tight break-keep whitespace-pre-line">
                  {SELF_PUBLISHING_SECTION.title}
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-[#C8BCB0] leading-relaxed break-keep">
                {SELF_PUBLISHING_SECTION.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* 다룰 내용 6개 */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-3">
                  다룰 내용
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SELF_PUBLISHING_SECTION.topics.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#1D1713] border border-[#362920] flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C6A66B] shrink-0" />
                      <span className="text-xs sm:text-sm text-[#FAF7F2] font-medium">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 최신 기준 확인 주의 문구 */}
              <div className="pt-3 border-t border-[#261E19]">
                <p className="text-[11px] sm:text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  {SELF_PUBLISHING_SECTION.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [14. AUTHOR BRANDING (종이책과 퍼스널 브랜딩)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                AUTHOR BRANDING
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep whitespace-pre-line">
                {AUTHOR_BRANDING_SECTION.title}
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto leading-relaxed break-keep">
                {AUTHOR_BRANDING_SECTION.description}
              </p>
            </div>

            {/* 8가지 활용 영역 그리드 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {AUTHOR_BRANDING_SECTION.usages.map((u, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#15110E] border border-[#2C221B] text-center"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#D6C6A8]">
                    {u}
                  </span>
                </div>
              ))}
            </div>

            {/* 감성 강조 인용구 */}
            <div className="p-7 md:p-9 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#140F0D] border border-[#3E3024] text-center shadow-lg">
              <blockquote className="text-base sm:text-xl font-bold text-[#FAF7F2] leading-relaxed break-keep">
                “{AUTHOR_BRANDING_SECTION.quote}”
              </blockquote>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [15. 이런 분이라면 함께하세요 (RECOMMENDED FOR 10개)]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                RECOMMENDED FOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                이런 분이라면 함께하세요.
              </h2>
            </div>

            {/* 10개 체크리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {RECOMMENDED_FOR_LIST.map((text, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3"
                >
                  <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">
                    ✔
                  </span>
                  <p className="text-xs sm:text-sm text-[#E5D7C5] leading-relaxed break-keep">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [16. 클래스 안내와 사전 준비]
           ─────────────────────────────────────────── */}
        <section
          id="class-info"
          className="w-full py-20 md:py-28 border-b border-[#26201B]"
        >
          <div className="site-container">
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-2.5 block">
                CLASS INFO
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-3 break-keep">
                클래스 안내 &amp; 사전 준비
              </h2>
            </div>

            <div className="rounded-3xl bg-[#16120F] border border-[#2C221B] p-6 md:p-8 space-y-6">
              {/* 강의명 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">강의명</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#FAF7F2]">
                  {PAPERBOOK_CLASS_CONFIG.courseTitle}
                </div>
              </div>

              {/* 부제 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">부제</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-medium text-[#D6C6A8]">
                  {PAPERBOOK_CLASS_CONFIG.courseSubtitle}
                </div>
              </div>

              {/* 진행 방식 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">진행 방식</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-semibold text-[#FAF7F2]">
                  {PAPERBOOK_CLASS_CONFIG.format}
                </div>
              </div>

              {/* 수업 시간 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">수업 시간</div>
                <div className="sm:col-span-2 space-y-1">
                  <div className="text-sm sm:text-base font-bold text-[#FAF7F2]">
                    {PAPERBOOK_CLASS_CONFIG.duration}
                  </div>
                  <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                    수업에서는 첫 종이책 기획부터 편집, 표지, POD 등록 준비까지 전 과정을 실습합니다.
                  </p>
                </div>
              </div>

              {/* 개강 일정 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">개강 일정</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#C6A66B]">
                  {PAPERBOOK_CLASS_CONFIG.schedule}
                </div>
              </div>

              {/* 수강료 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">수강료</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#D6C6A8]">
                  {PAPERBOOK_CLASS_CONFIG.price}
                </div>
              </div>

              {/* 난이도 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">수강 난이도</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-semibold text-[#FAF7F2] break-keep">
                  {PAPERBOOK_CLASS_CONFIG.difficulty}
                </div>
              </div>

              {/* 준비물 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">준비물</div>
                <div className="sm:col-span-2">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#D6C6A8]">
                    {PREPARATION_ITEMS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C6A66B]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 사전 안내 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">사전 안내</div>
                <div className="sm:col-span-2">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {PRE_CLASS_NOTICES.map((notice, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8E6D38]">•</span>
                        <span>{notice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 취소·환불 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="text-xs text-[#8F7D6E]">취소·환불</div>
                <div className="sm:col-span-2 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  자명스쿨 공통 서비스 이용약관의 취소·환불 규정에 따릅니다.{" "}
                  <Link
                    href={PAPERBOOK_CLASS_CONFIG.termsUrl}
                    className="text-[#C6A66B] underline underline-offset-4 hover:text-[#FAF7F2] font-semibold transition-colors"
                  >
                    취소·환불 규정 확인하기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [17. FAQ] - 자명스쿨 시그니처 웜베이지 배경 아코디언
           ─────────────────────────────────────────── */}
        <section className="w-full bg-[#F9F6F0] text-[#2E2723] py-20 md:py-28 border-b border-[#E8DFD3]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#8E6D38] uppercase mb-3 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E2723] mb-4 break-keep">
                자주 묻는 질문
              </h2>
              <p className="text-sm sm:text-base text-[#6E5A4D] max-w-xl mx-auto break-keep">
                수강 전 가장 많이 궁금해하시는 질문과 답변을 정리했습니다.
              </p>
            </div>

            <PaperbookFaqAccordion
              items={PAPERBOOK_FAQS}
              termsUrl={PAPERBOOK_CLASS_CONFIG.termsUrl}
            />
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [18. 최종 신청 영역 (#apply)]
           ─────────────────────────────────────────── */}
        <section
          id="apply"
          className="w-full py-20 md:py-28 bg-gradient-to-b from-[#14100E] to-[#0A0807] relative overflow-hidden"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-15 blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(198,166,107,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="site-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C6A66B] uppercase mb-4 block">
                {FINAL_CTA_SECTION.headerBadge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] mb-6 leading-tight break-keep whitespace-pre-line">
                {FINAL_CTA_SECTION.mainTitle}
              </h2>

              {/* 서브 설명 카드 */}
              <div className="my-8 p-6 md:p-8 rounded-2xl bg-[#1C1510] border border-[#4A3728] max-w-2xl mx-auto text-center space-y-3 shadow-lg">
                <p className="text-base sm:text-lg text-[#F5EFE6] font-bold leading-relaxed break-keep whitespace-pre-line">
                  {FINAL_CTA_SECTION.subText}
                </p>
                <p className="text-sm sm:text-base text-[#D6C6A8] leading-relaxed break-keep font-medium">
                  {FINAL_CTA_SECTION.highlightText}
                </p>
                {FINAL_CTA_SECTION.lifeStoryNote && (
                  <p className="text-xs sm:text-sm text-[#C6A66B] pt-2 border-t border-[#3E2D20] font-semibold break-keep">
                    ✨ {FINAL_CTA_SECTION.lifeStoryNote}
                  </p>
                )}
              </div>

              {/* 최종 신청 카드 */}
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#181310] border border-[#3E3127] shadow-2xl max-w-xl mx-auto mb-6 text-left">
                <div className="text-center mb-6 pb-6 border-b border-[#2B221B]">
                  <span className="text-[11px] font-bold text-[#C6A66B] uppercase tracking-widest block mb-1">
                    {PAPERBOOK_CLASS_CONFIG.courseTitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FAF7F2] break-keep">
                    수업을 통해 준비하는 4가지 결과물
                  </h3>
                </div>

                {/* 결과물 요약 4종 */}
                <div className="space-y-3 mb-6">
                  {FINAL_CTA_SECTION.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#221A15] border border-[#33261C]"
                    >
                      <span className="w-6 h-6 rounded-md bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#FAF7F2] break-keep">
                        {res}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 혜택 강조 */}
                <div className="p-4 rounded-2xl bg-[#140F0C] border border-[#2E231B] mb-6">
                  <span className="text-[11px] font-bold text-[#C6A66B] block mb-1.5">
                    포함 혜택 7종
                  </span>
                  <p className="text-xs sm:text-sm text-[#D6C6A8] leading-relaxed break-keep font-medium">
                    기획 스킬 · Canva 내지 템플릿 · POD 표지 가이드 <br />
                    출판 등록 체크리스트 · 출판 반려 방지 가이드 <br />
                    1인출판사 창업 안내서 · 출판 등록 전 점검 자료
                  </p>
                </div>

                {/* 강의 정보 메타 */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-[#2B221B] text-xs">
                  <div className="flex items-center justify-between text-[#8F7D6E]">
                    <span>진행 방식</span>
                    <span className="text-[#FAF7F2] font-semibold">
                      {PAPERBOOK_CLASS_CONFIG.format}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#8F7D6E]">
                    <span>수업 시간</span>
                    <span className="text-[#FAF7F2] font-semibold">
                      {PAPERBOOK_CLASS_CONFIG.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#8F7D6E]">
                    <span>수강료</span>
                    <span className="text-[#D6C6A8] font-bold">
                      {PAPERBOOK_CLASS_CONFIG.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#8F7D6E]">
                    <span>개강 일정</span>
                    <span className="text-[#C6A66B] font-bold">
                      {PAPERBOOK_CLASS_CONFIG.schedule}
                    </span>
                  </div>
                </div>

                {/* 최종 CTA 버튼 */}
                <PaperbookCtaButton
                  courseId={PAPERBOOK_CLASS_CONFIG.id}
                  courseTitle={PAPERBOOK_CLASS_CONFIG.courseTitle}
                  status={PAPERBOOK_CLASS_CONFIG.status}
                  applicationUrl={PAPERBOOK_CLASS_CONFIG.applicationUrl}
                  notificationUrl={PAPERBOOK_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={PAPERBOOK_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={PAPERBOOK_CLASS_CONFIG.ctaScheduledText}
                  variant="final"
                />

                <div className="mt-4 text-center">
                  <p className="text-xs text-[#8F7D6E]">
                    {FINAL_CTA_SECTION.footerMeta}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 모바일 화면 하단 플로팅 바 */}
      <PaperbookFloatingBar
        courseId={PAPERBOOK_CLASS_CONFIG.id}
        courseTitle={PAPERBOOK_CLASS_CONFIG.courseTitle}
        status={PAPERBOOK_CLASS_CONFIG.status}
        applicationUrl={PAPERBOOK_CLASS_CONFIG.applicationUrl}
        notificationUrl={PAPERBOOK_CLASS_CONFIG.notificationUrl}
        ctaOpenText={PAPERBOOK_CLASS_CONFIG.ctaOpenText}
        ctaScheduledText={PAPERBOOK_CLASS_CONFIG.ctaScheduledText}
      />
    </main>
  );
}

