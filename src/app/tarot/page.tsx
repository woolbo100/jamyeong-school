import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  TAROT_CLASS_CONFIG,
  TAROT_IMAGES,
  TAROT_PROBLEM_CARDS,
  TAROT_BEFORE_AFTER,
  TAROT_ONE_DAY_RESULTS,
  TAROT_PACKAGE_SUMMARY,
  TAROT_CONCEPT_EXAMPLES,
  CONSISTENCY_POINTS,
  TAROT_CURRICULUM_STEPS,
  TAROT_TIME_SCHEDULE,
  TAROT_CLASS_KITS,
  TAROT_REAL_CASES,
  TAROT_RECOMMENDED_FOR,
  TAROT_EXPANSION_IDEAS,
  TAROT_FAQS,
  TAROT_FINAL_COMPLETION_ITEMS,
} from "@/data/tarotClassData";
import {
  TarotReplaceableImage,
  TarotFaqAccordion,
  TarotCtaButton,
} from "@/components/tarot/TarotInteractive";

export const metadata: Metadata = {
  title: "AI 타로서비스·타로카드 제작 원데이 | 나만의 타로사이트 만들기 · 자명스쿨",
  description:
    "AI로 내 취향의 타로카드를 만들고, 카드를 선택하면 해석이 펼쳐지는 나만의 타로사이트를 하루 3~4시간 동안 함께 완성하는 실전 원데이 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/tarot",
  },
  openGraph: {
    title: "AI 타로서비스·타로카드 제작 원데이 | 나만의 타로사이트 만들기 · 자명스쿨",
    description:
      "나만의 타로카드를 만들고, 직접 뽑고 해석하는 타로사이트까지. 하루 3~4시간, 내 취향을 담은 서비스를 완성합니다.",
    url: "https://www.jmschool.kr/tarot",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

export default function TarotClassPage() {
  const heroMockupSlot = TAROT_IMAGES.heroMobileMockup;

  const conceptFallbackMap = {
    conceptKorean: "concept-korean",
    conceptRomance: "concept-romance",
    conceptFantasy: "concept-fantasy",
    conceptOracle: "concept-oracle",
  } as const;

  const realCaseFallbackMap = {
    realCaseCardGen: "case-card-gen",
    realCaseFrame: "case-frame",
    realCaseWebsite: "case-website",
    realCaseMobileResult: "case-mobile-result",
  } as const;

  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 상단 서브 내비게이션 (/miniapp 기준 디자인 체계 유지)
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] px-4 sm:px-6 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <Link
            href={TAROT_CLASS_CONFIG.onedayListUrl}
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
            {TAROT_CLASS_CONFIG.status === "open"
              ? TAROT_CLASS_CONFIG.ctaOpenText
              : TAROT_CLASS_CONFIG.ctaScheduledText}
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          [2. 상단 히어로]
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측: 상단 영문, 메인 제목(H1), 설명, 강조 문구, 핵심 배지, 안내 항목, 신청 버튼 */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 상단 영문 라벨 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {TAROT_CLASS_CONFIG.categoryLabel}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {TAROT_CLASS_CONFIG.subBadge}
                </span>
              </div>

              {/* 강의명 & 부제 식별 배지 */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF2E6] border border-[#E8DFD3] text-xs text-[#6E5A4D]">
                <strong className="font-bold text-[#2E2723]">
                  {TAROT_CLASS_CONFIG.courseTitle}
                </strong>
                <span className="text-[#C6A66B]">|</span>
                <span>{TAROT_CLASS_CONFIG.courseSubtitle}</span>
              </div>

              {/* 메인 제목 (H1) */}
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                {TAROT_CLASS_CONFIG.heroTitleLine1} <br />
                <span className="text-[#8E6D38]">
                  {TAROT_CLASS_CONFIG.heroTitleLine2}
                </span>
              </h1>

              {/* 설명 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                AI로 내 취향의 타로카드를 만들고,{" "}
                <br className="hidden sm:inline" />
                카드를 선택하면 해석이 펼쳐지는 나만의 사이트에 적용합니다.{" "}
                <br className="hidden sm:inline" />
                이미지 제작부터 스타일 통일, 사이트 디자인과 실행까지{" "}
                <br className="hidden sm:inline" />
                하루 3~4시간 동안 함께 완성하는 실전 클래스입니다.
              </p>

              {/* 강조 문구 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ {TAROT_CLASS_CONFIG.heroHighlight}
              </div>

              {/* 핵심 배지 4개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {TAROT_CLASS_CONFIG.heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* 안내 항목 4칸 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    진행 방식
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {TAROT_CLASS_CONFIG.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수업 시간
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {TAROT_CLASS_CONFIG.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    개강 일정
                  </span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold break-keep">
                    {TAROT_CLASS_CONFIG.schedule}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수강료
                  </span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold break-keep">
                    {TAROT_CLASS_CONFIG.price}
                  </strong>
                </div>
              </div>

              {/* 신청 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <TarotCtaButton
                  courseId={TAROT_CLASS_CONFIG.id}
                  courseTitle={TAROT_CLASS_CONFIG.courseTitle}
                  status={TAROT_CLASS_CONFIG.status}
                  applicationUrl={TAROT_CLASS_CONFIG.applicationUrl}
                  notificationUrl={TAROT_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={TAROT_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={TAROT_CLASS_CONFIG.ctaScheduledText}
                  variant="hero"
                />
                <span className="text-xs text-[#7C6656] break-keep">
                  * 현재 초안 단계로 개강 일정 확정 시 가장 먼저 안내해 드립니다.
                </span>
              </div>

              {/* 해시태그 */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#E8DFD3]">
                {TAROT_CLASS_CONFIG.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#8E6D38] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 모바일 목업 구성 (직접 만든 카드 → 카드 선택 → 해석 결과 한눈에 표시, '수업 결과물 예시' 라벨, 승인·성과 배지 미사용) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[330px] sm:max-w-[350px] mx-auto">
                <div className="rounded-[2.25rem] bg-[#1E1815] p-3 sm:p-3.5 shadow-2xl border-4 border-[#3E322C]">
                  {/* 상단 상태바 */}
                  <div className="flex items-center justify-between px-3 py-1.5 text-[10px] text-[#A8988B]">
                    <span className="font-semibold text-[#D6C6A8]">
                      MY TAROT SERVICE
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
                      <div className="space-y-3">
                        {/* 헤더 타이틀 */}
                        <div className="text-center pb-2 border-b border-[#261E18]">
                          <span className="text-[9px] tracking-widest text-[#C6A66B] font-bold uppercase block">
                            CUSTOM TAROT READING
                          </span>
                          <p className="text-xs font-extrabold text-[#FAF7F2] mt-0.5">
                            나만의 타로카드 · 사이트 실행 흐름
                          </p>
                        </div>

                        {/* 단계 1: 직접 만든 카드 */}
                        <div className="p-2.5 rounded-xl bg-[#1D1612] border border-[#342820]">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold text-[#C6A66B]">
                              01. 직접 만든 카드
                            </span>
                            <span className="text-[9px] text-[#9E8B7C]">
                              공통 스타일·프레임 통일
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5">
                            {[
                              { no: "I", name: "달빛의 정원", icon: "🌕" },
                              { no: "II", name: "새벽의 별", icon: "✨" },
                              { no: "III", name: "마음의 등불", icon: "🕯️" },
                            ].map((card) => (
                              <div
                                key={card.no}
                                className="rounded-lg bg-[#261D17] border border-[#C6A66B]/60 p-1.5 text-center flex flex-col justify-between aspect-[3/4]"
                              >
                                <span className="text-[8px] text-[#C6A66B] font-bold">
                                  {card.no}
                                </span>
                                <span className="text-sm my-auto">
                                  {card.icon}
                                </span>
                                <span className="text-[8px] text-[#FAF7F2] font-semibold border-t border-[#3A2D23] pt-0.5 truncate">
                                  {card.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 화살표 연결 */}
                        <div className="flex items-center justify-center text-[10px] text-[#C6A66B] font-bold gap-1">
                          <span>↓</span>
                          <span>사용자가 카드를 터치해 선택</span>
                          <span>↓</span>
                        </div>

                        {/* 단계 2: 카드 선택 */}
                        <div className="p-2.5 rounded-xl bg-[#1D1612] border border-[#C6A66B]/50 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-9 rounded bg-[#2A2019] border border-[#C6A66B] flex items-center justify-center text-xs shrink-0">
                              ✨
                            </span>
                            <div className="text-left">
                              <span className="text-[10px] font-bold text-[#C6A66B] block">
                                02. 카드 선택 완료
                              </span>
                              <p className="text-[11px] font-bold text-[#FAF7F2]">
                                II · 새벽의 별 (THE DAWN STAR)
                              </p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] text-[9px] font-extrabold shrink-0">
                            선택됨
                          </span>
                        </div>

                        {/* 단계 3: 해석 결과 */}
                        <div className="p-3 rounded-xl bg-[#241B15] border border-[#46362A] space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-[#C6A66B]">
                              03. 해석 결과 펼쳐보기
                            </span>
                            <span className="text-[9px] text-[#A8988B]">
                              해석 API 호출 없음
                            </span>
                          </div>
                          <p className="text-[11px] font-bold text-[#FAF7F2] break-keep">
                            “고민하던 일에 차분한 실마리가 보이는 날입니다.”
                          </p>
                          <p className="text-[10px] text-[#C4B5A6] leading-relaxed break-keep">
                            미리 준비한 카드별 키워드와 해석 데이터가 즉시 연결되어
                            사용자에게 메시지가 표시됩니다.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 하단 캡션 (수업 결과물 예시 명시) */}
                <p className="mt-3 text-center text-xs text-[#6E5A4D] font-medium">
                  ▲ 수업 결과물 예시 (직접 만든 카드 → 카드 선택 → 해석 결과)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [3. 서비스 소개 — 기존 ‘앱인토스란?’ 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            ABOUT THIS CLASS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            내가 만든 타로카드가 <br />
            <span className="text-[#D6C6A8]">
              실제로 작동하는 서비스가 됩니다
            </span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#B8A89A] leading-relaxed break-keep">
            <p>
              타로카드 이미지를 만드는 데서 끝나지 않습니다. <br className="hidden sm:inline" />
              내가 만든 카드를 사이트에 넣고, 사용자가 카드를 선택하면{" "}
              <br className="hidden sm:inline" />
              해당 카드의 의미와 메시지를 확인하도록 연결합니다.
            </p>
            <p className="text-[#FAF7F2] font-semibold">
              오늘의 한 장, 연애 메시지, 마음을 돌아보는 질문 카드까지. <br className="hidden sm:inline" />
              내 콘텐츠와 취향을 담아 나만의 작은 서비스를 만들어봅니다.
            </p>
          </div>

          {/* 핵심 메시지 3줄 요약 박스 */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#322720] text-center space-y-1.5">
              <p className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                나만의 타로카드를 만들고, 직접 뽑고 해석하는 타로사이트까지.
              </p>
              <p className="text-xs sm:text-sm text-[#C6A66B] font-semibold break-keep">
                하루 3~4시간, 내 취향을 담은 서비스를 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [4. 고민 공감 — WHY TAROT CREATIVE?]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              WHY TAROT CREATIVE?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              AI로 카드는 만들었는데, <br />
              <span className="text-[#D6C6A8]">
                왜 하나의 카드 덱처럼 보이지 않을까요?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] max-w-2xl mx-auto pt-2 leading-relaxed break-keep">
              한 장은 마음에 드는데, 다음 장은 그림체가 달라지고. <br className="hidden sm:inline" />
              테두리와 색감까지 바뀌어 결국 이미지 몇 장으로 끝난 경험이 있나요?
            </p>
          </div>

          {/* 문제 카드 3개 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TAROT_PROBLEM_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2B221D] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="inline-block text-xs font-bold text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#221B16] border border-[#362B23]">
                    {card.number}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
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
              이 수업은 이미지 한 장을 만드는 수업이 아닙니다.
            </p>
            <p className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
              카드의 통일감을 잡고, 실제 작동하는 사이트까지 연결하는 수업입니다.
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
              수강 전과 수강 후, 무엇이 달라질까요?
            </h2>
          </div>

          <div className="space-y-3.5">
            {TAROT_BEFORE_AFTER.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-11 gap-3 md:gap-4 items-center p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2B221D]"
              >
                <div className="md:col-span-5 flex items-center gap-3 p-3.5 rounded-xl bg-[#120E0C] border border-[#251E19]">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase shrink-0">
                    수강 전
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
                    수강 후
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2] font-bold break-keep">
                    {item.after}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-[#8F7D6E] break-keep">
            * AI 이미지 특성상 생성 결과에는 미세한 차이가 있을 수 있어, 본 수업에서는 기준 설정·프레임 분리·보정으로 통일감을 맞추는 실전 기준을 배웁니다.
          </p>
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
              하루 수업이 끝나면 남는 4가지 결과물
            </h2>
          </div>

          {/* 4개 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TAROT_ONE_DAY_RESULTS.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2E241E] hover:border-[#C6A66B]/45 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold tracking-wider text-[#C6A66B] uppercase block">
                    {card.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#FAF7F2] break-keep">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {card.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#241C17]">
                  <span className="text-xs text-[#D6C6A8] font-medium">
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 범위 안내 */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#17120F] border border-[#2E241D] text-center">
            <p className="text-xs sm:text-sm text-[#C4B5A6] leading-relaxed break-keep">
              ※ 수업 시간에는 대표 카드 세트와 작동하는 사이트 첫 버전 완성에 집중합니다.{" "}
              <br className="hidden sm:inline" />
              78장 전체 덱은 수업에서 배운 기준으로 이후 확장할 수 있습니다.
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
              카드 이미지 제작부터 사이트 완성까지, <br />
              <span className="text-[#D6C6A8]">
                한 번에 배우는 올인원 실습
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TAROT_PACKAGE_SUMMARY.map((item) => (
              <div
                key={item.number}
                className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#2F251E] space-y-2.5"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-extrabold">
                  {item.number}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [8. 제작 예시 — 기존 ‘4가지 미니앱’ 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CONCEPT EXAMPLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              이런 타로카드와 타로사이트를 만들 수 있어요
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              내 취향과 주제에 맞춰 카드 이미지와 사이트 분위기를 설계합니다. (디자인 콘셉트 예시)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TAROT_CONCEPT_EXAMPLES.map((concept) => {
              const slot = TAROT_IMAGES[concept.imageSlotKey];
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
                      <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
                        {concept.description}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#221A14] border border-[#3A2D23] text-[10px] font-bold text-[#C6A66B] shrink-0">
                      디자인 콘셉트 예시
                    </span>
                  </div>

                  <TarotReplaceableImage
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
          [9. 핵심 차별점 — 카드 스타일 일관성]
          제작 예시 바로 아래 강조 섹션
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#14100D]">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1713] to-[#15100D] border-2 border-[#C6A66B]/45 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
                CORE DIFFERENTIATOR · CARD CONSISTENCY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                여러 장을 만들어도 <br />
                <span className="text-[#D6C6A8]">
                  하나의 카드 덱처럼 보이게 만드는 기준
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
                AI로 이미지를 만들 때 가장 어려운 부분은 ‘일관성’입니다.{" "}
                <br className="hidden sm:inline" />
                한 장씩 따로 요청하면 그림체, 색감, 테두리, 글자 위치가 쉽게 달라집니다.{" "}
                <br className="hidden sm:inline" />
                이 수업에서는 카드를 만들기 전에 먼저 공통 기준을 세웁니다.
              </p>
            </div>

            {/* 강조 항목 5가지 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {CONSISTENCY_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#14100D] border border-[#342820] flex flex-col justify-between gap-2"
                >
                  <span className="text-[11px] font-extrabold text-[#C6A66B]">
                    POINT 0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#FAF7F2] leading-snug break-keep">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* 시각 비교 슬롯 (왼쪽 vs 오른쪽) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* 왼쪽: 스타일과 프레임이 서로 다른 카드 */}
              <div className="p-5 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-400">
                    왼쪽 · 기준 적용 전
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-semibold">
                    개별 생성 시
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#EDE6DC] break-keep">
                  스타일과 프레임이 서로 다른 카드
                </h3>
                <TarotReplaceableImage
                  slot={TAROT_IMAGES.consistencyBefore}
                  fallbackType="consistency-before"
                />
              </div>

              {/* 오른쪽: 공통 기준을 적용한 카드들 */}
              <div className="p-5 rounded-2xl bg-[#1B1510] border border-[#C6A66B]/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C6A66B]">
                    오른쪽 · 수업 기준 적용 후
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] text-[11px] font-extrabold">
                    덱 통일감 완성
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#FAF7F2] break-keep">
                  공통 기준을 적용한 카드들
                </h3>
                <TarotReplaceableImage
                  slot={TAROT_IMAGES.consistencyAfter}
                  fallbackType="consistency-after"
                />
              </div>
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
              하루 3~4시간, 이렇게 만듭니다
            </h2>
          </div>

          {/* 8단계 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TAROT_CURRICULUM_STEPS.map((item) => (
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
                    단계 결과물
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
                  시간 구성안 (4시간 기준)
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
                  {TAROT_TIME_SCHEDULE.map((row, idx) => (
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
              * 3시간으로 운영할 경우 제작할 대표 카드 수를 줄이고 핵심 흐름 중심으로 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [11. API 호출 없는 기본 구조 설명]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#181310] border border-[#382C23] space-y-6">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#241B15] border border-[#3E3024] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
                NO INTERPRETATION API CALL NEEDED
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                카드를 뽑을 때마다 <br />
                <span className="text-[#D6C6A8]">
                  AI 해석 API를 호출하지 않아도 됩니다
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
                타로사이트를 만들 때 가장 많이 걱정하는 부분이{" "}
                <br className="hidden sm:inline" />
                “사용자가 카드를 뽑을 때마다 AI 요금이 나가면 어떡하지?”입니다.{" "}
                <br className="hidden sm:inline" />
                이 수업의 기본 템플릿은 카드별 해석을 미리 정리해 연결하는 방식입니다.{" "}
                <br className="hidden sm:inline" />
                카드를 선택할 때마다 외부 AI 해석 API를 호출하지 않아도 기본 타로서비스가 작동합니다.
              </p>
            </div>

            {/* 작동 흐름도 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2C221B] text-center space-y-1">
                <span className="text-[11px] font-bold text-[#C6A66B] block">
                  STEP 01
                </span>
                <strong className="text-sm sm:text-base text-[#FAF7F2] font-extrabold block">
                  카드 선택
                </strong>
                <span className="text-xs text-[#9E8B7C] block">
                  사용자가 원하는 카드를 클릭
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2C221B] text-center space-y-1">
                <span className="text-[11px] font-bold text-[#C6A66B] block">
                  STEP 02
                </span>
                <strong className="text-sm sm:text-base text-[#FAF7F2] font-extrabold block">
                  카드 이미지 확인
                </strong>
                <span className="text-xs text-[#9E8B7C] block">
                  직접 제작한 대표 카드 표시
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#211A14] border border-[#C6A66B]/50 text-center space-y-1">
                <span className="text-[11px] font-bold text-[#C6A66B] block">
                  STEP 03
                </span>
                <strong className="text-sm sm:text-base text-[#FAF7F2] font-extrabold block">
                  연결된 해석 표시
                </strong>
                <span className="text-xs text-[#D6C6A8] block">
                  미리 준비한 카드별 해석 즉시 출력
                </span>
              </div>
            </div>

            {/* 보조 설명 */}
            <div className="p-4 rounded-xl bg-[#130F0C] border border-[#281F19] text-center">
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                ※ 카드 이미지 제작에 사용하는 AI 도구, 개인 도메인, 유료 호스팅 등은 사용하는 환경에 따라 별도일 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [12. 혜택 자료 — CLASS KIT]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CLASS KIT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              수업이 끝난 뒤에도 계속 만들 수 있도록 <br />
              <span className="text-[#D6C6A8]">
                4가지 실습 자료를 제공합니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TAROT_CLASS_KITS.map((kit) => (
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
              레퍼런스로 분위기 선택 → 프롬프트로 카드 이미지 제작 → 템플릿에 적용 → 사이트 디자인 수정
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [13. 실제 제작 사례 — REAL EXPERIENCE]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              REAL EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              직접 만든 타로카드와 사이트 예시를 확인해보세요
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              강사 제작 자료를 기준으로 수업에서 실습할 화면 흐름을 미리 확인하실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TAROT_REAL_CASES.map((item) => {
              const slot = TAROT_IMAGES[item.imageSlotKey];
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

                  <TarotReplaceableImage
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
          [14. 확장 가능성 — FIRST RELEASE]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            FIRST RELEASE & EXPANSION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            첫 번째 카드와 사이트가 완성되면, <br />
            <span className="text-[#D6C6A8]">다음 덱은 더 수월해집니다</span>
          </h2>
          <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
            한 번 제작 흐름을 익히면 카드의 주제와 분위기만 바꿔{" "}
            <br className="hidden sm:inline" />
            오늘의 운세, 연애 타로, 감정 질문 카드, 브랜드 메시지 카드 등{" "}
            <br className="hidden sm:inline" />
            새로운 카드 시리즈로 확장할 수 있습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [15. 추천 대상 — RECOMMENDED FOR]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              이런 분께 추천합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {TAROT_RECOMMENDED_FOR.map((text, idx) => (
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
          [16. 활용 방향 — BUSINESS EXPANSION]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              BUSINESS EXPANSION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              나만의 타로서비스, 이렇게 활용할 수 있습니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TAROT_EXPANSION_IDEAS.map((idea) => (
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [17. 수강 안내 — CLASS INFO]
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
                  {TAROT_CLASS_CONFIG.courseTitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">부제</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.courseSubtitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">진행 방식</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.format}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">시간</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.duration}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">일정</dt>
                <dd className="sm:col-span-3 font-semibold text-[#D6C6A8]">
                  {TAROT_CLASS_CONFIG.schedule}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">난이도</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.difficulty}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">완성 목표</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.goalSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">제공 자료</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.materialsSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">준비물</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {TAROT_CLASS_CONFIG.preparationSummary}
                </dd>
              </div>
              {TAROT_CLASS_CONFIG.replayPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                  <dt className="font-bold text-[#C6A66B]">다시보기</dt>
                  <dd className="sm:col-span-3 text-[#EDE6DC]">
                    {TAROT_CLASS_CONFIG.replayPolicy}
                  </dd>
                </div>
              )}
              {TAROT_CLASS_CONFIG.questionSupportPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                  <dt className="font-bold text-[#C6A66B]">질문 지원</dt>
                  <dd className="sm:col-span-3 text-[#EDE6DC]">
                    {TAROT_CLASS_CONFIG.questionSupportPolicy}
                  </dd>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">환불 기준</dt>
                <dd className="sm:col-span-3 text-[#A8988B]">
                  자명스쿨{" "}
                  <Link
                    href={TAROT_CLASS_CONFIG.termsUrl}
                    className="text-[#D6C6A8] underline underline-offset-4 hover:text-[#C6A66B]"
                  >
                    이용약관 및 환불 규정
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
                {TAROT_CLASS_CONFIG.communityInviteText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [18. 자주 묻는 질문 — FAQ]
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

          <TarotFaqAccordion items={TAROT_FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [19. 마지막 신청 영역]
         ═══════════════════════════════════════════════ */}
      <section
        id="apply"
        className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#120E0C] to-[#0D0B0A]"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              FROM YOUR CARDS TO YOUR SERVICE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              상상 속에만 있던 나만의 타로, <br />
              <span className="text-[#D6C6A8]">
                이제 직접 사용하는 서비스로 만들어보세요.
              </span>
            </h2>
          </div>

          {/* 완성 항목 요약 4가지 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#17120F] border border-[#352A21] text-left space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TAROT_FINAL_COMPLETION_ITEMS.map((item, idx) => (
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
              <TarotCtaButton
                courseId={TAROT_CLASS_CONFIG.id}
                courseTitle={TAROT_CLASS_CONFIG.courseTitle}
                status={TAROT_CLASS_CONFIG.status}
                applicationUrl={TAROT_CLASS_CONFIG.applicationUrl}
                notificationUrl={TAROT_CLASS_CONFIG.notificationUrl}
                ctaOpenText={TAROT_CLASS_CONFIG.ctaOpenText}
                ctaScheduledText={TAROT_CLASS_CONFIG.ctaScheduledText}
                variant="final"
              />
            </div>
          </div>

          {/* 마무리 문구 */}
          <div className="space-y-1 pt-2">
            <p className="text-sm sm:text-base font-bold text-[#C6A66B]">
              작은 배움, 하나의 완성.
            </p>
            <p className="text-xs sm:text-sm text-[#A8988B]">
              이번에는 당신의 취향이 타로서비스가 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 모바일 하단 고정 신청 바 */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#14100D]/95 backdrop-blur-md border-t border-[#322720] px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] text-[#C6A66B] font-bold block truncate">
            {TAROT_CLASS_CONFIG.schedule}
          </span>
          <strong className="text-xs text-[#FAF7F2] font-extrabold block truncate">
            {TAROT_CLASS_CONFIG.courseTitle}
          </strong>
        </div>
        <TarotCtaButton
          courseId={TAROT_CLASS_CONFIG.id}
          courseTitle={TAROT_CLASS_CONFIG.courseTitle}
          status={TAROT_CLASS_CONFIG.status}
          applicationUrl={TAROT_CLASS_CONFIG.applicationUrl}
          notificationUrl={TAROT_CLASS_CONFIG.notificationUrl}
          ctaOpenText={TAROT_CLASS_CONFIG.ctaOpenText}
          ctaScheduledText={TAROT_CLASS_CONFIG.ctaScheduledText}
          variant="mobile-bar"
        />
      </div>
    </main>
  );
}

