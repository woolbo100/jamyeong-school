import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  SAJU_CLASS_CONFIG,
  SAJU_IMAGES,
  SAJU_PROBLEM_CARDS,
  SAJU_BEFORE_AFTER,
  SAJU_ONE_DAY_RESULTS,
  SAJU_PACKAGE_SUMMARY,
  SAJU_CONCEPT_EXAMPLES,
  SAJU_CURRICULUM_STEPS,
  SAJU_TIME_SCHEDULE,
  SAJU_CLASS_KITS,
  SAJU_REAL_CASES,
  SAJU_EXPANSION_POINTS,
  SAJU_RECOMMENDED_FOR,
  SAJU_EXPANSION_IDEAS,
  SAJU_FAQS,
  SAJU_FINAL_COMPLETION_ITEMS,
} from "@/data/sajuClassData";
import {
  SajuReplaceableImage,
  SajuFaqAccordion,
  SajuCtaButton,
} from "@/components/saju/SajuInteractive";

export const metadata: Metadata = {
  title: "AI 사주 서비스 제작 원데이 | 나만의 사주사이트 만들기 · 자명스쿨",
  description:
    "사주를 몰라도, 코딩을 몰라도. 생년월일 입력부터 만세력 오픈소스 연결, 기본 해석 자동 표시까지 하루 3~4시간에 완성하는 실전 사주사이트 제작 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/saju",
  },
  openGraph: {
    title: "AI 사주 서비스 제작 원데이 | 나만의 사주사이트 만들기 · 자명스쿨",
    description:
      "사주를 몰라도, 코딩을 몰라도. 생년월일 입력부터 풀이 결과까지 이어지는 나만의 사주사이트를 하루 3~4시간에 만들어봅니다.",
    url: "https://www.jmschool.kr/saju",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

export default function SajuClassPage() {
  const heroMockupSlot = SAJU_IMAGES.heroMobileMockup;

  const conceptFallbackMap = {
    conceptTraditional: "concept-traditional",
    conceptMindful: "concept-mindful",
    conceptModern: "concept-modern",
    conceptFantasy: "concept-fantasy",
  } as const;

  const realCaseFallbackMap = {
    realCaseInput: "case-input",
    realCaseCompare: "case-compare",
    realCaseResult: "case-result",
    realCaseMobile: "case-mobile",
  } as const;

  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 상단 서브 내비게이션 (/miniapp 기준 디자인 체계 유지)
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] py-3.5 transition-all">
        <div className="site-container flex items-center justify-between gap-2">
          <Link
            href={SAJU_CLASS_CONFIG.onedayListUrl}
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
            {SAJU_CLASS_CONFIG.status === "open"
              ? SAJU_CLASS_CONFIG.ctaOpenText
              : SAJU_CLASS_CONFIG.ctaScheduledText}
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          [2. 상단 히어로]
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측: 상단 영문, 메인 제목(H1), 서브 제목, 본문, 강조 문구, 핵심 배지, 수업 정보, 신청 버튼 */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 상단 영문 라벨 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {SAJU_CLASS_CONFIG.categoryLabel}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {SAJU_CLASS_CONFIG.subBadge}
                </span>
              </div>

              {/* 강의명 & 부제 식별 배지 */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF2E6] border border-[#E8DFD3] text-xs text-[#6E5A4D]">
                <strong className="font-bold text-[#2E2723]">
                  {SAJU_CLASS_CONFIG.courseTitle}
                </strong>
                <span className="text-[#C6A66B]">|</span>
                <span>{SAJU_CLASS_CONFIG.courseSubtitle}</span>
              </div>

              {/* 메인 제목 (H1) & 서브 제목 */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                  {SAJU_CLASS_CONFIG.heroTitleLine1} <br />
                  <span className="text-[#8E6D38]">
                    {SAJU_CLASS_CONFIG.heroTitleLine2}
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#6E5A4D] break-keep">
                  {SAJU_CLASS_CONFIG.heroSubTitle}
                </p>
              </div>

              {/* 설명 본문 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                생년월일과 태어난 시간을 입력하면{" "}
                <br className="hidden sm:inline" />
                사주 정보와 풀이 결과가 펼쳐지는 나만의 사이트.{" "}
                <br className="hidden sm:inline" />
                AI와 기본 템플릿을 활용해 만세력 계산 연결부터{" "}
                <br className="hidden sm:inline" />
                해석 결과 자동 표시, 사주에 어울리는 디자인까지 함께 완성합니다.
              </p>

              {/* 강조 문구 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ {SAJU_CLASS_CONFIG.heroHighlight}
              </div>

              {/* 핵심 배지 4개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {SAJU_CLASS_CONFIG.heroBadges.map((badge, idx) => (
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
                    {SAJU_CLASS_CONFIG.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수업 시간
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {SAJU_CLASS_CONFIG.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    개강 일정
                  </span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold break-keep">
                    {SAJU_CLASS_CONFIG.schedule}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수강료
                  </span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold break-keep">
                    {SAJU_CLASS_CONFIG.price}
                  </strong>
                </div>
              </div>

              {/* 신청 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <SajuCtaButton
                  courseId={SAJU_CLASS_CONFIG.id}
                  courseTitle={SAJU_CLASS_CONFIG.courseTitle}
                  status={SAJU_CLASS_CONFIG.status}
                  applicationUrl={SAJU_CLASS_CONFIG.applicationUrl}
                  notificationUrl={SAJU_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={SAJU_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={SAJU_CLASS_CONFIG.ctaScheduledText}
                  variant="hero"
                />
                <span className="text-xs text-[#7C6656] break-keep">
                  * 현재 초안 단계로 개강 일정 확정 시 가장 먼저 안내해 드립니다.
                </span>
              </div>

              {/* 해시태그 */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#E8DFD3]">
                {SAJU_CLASS_CONFIG.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#8E6D38] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 상단 시각 자료 (모바일 목업: 입력 화면 → 사주 명식/오행 정보 → 결과 화면, '수업 결과물 예시' 배지, 가상 정보 사용) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[330px] sm:max-w-[350px] mx-auto">
                <div className="rounded-[2.25rem] bg-[#1E1815] p-3 sm:p-3.5 shadow-2xl border-4 border-[#3E322C]">
                  {/* 상단 상태바 */}
                  <div className="flex items-center justify-between px-3 py-1.5 text-[10px] text-[#A8988B]">
                    <span className="font-semibold text-[#D6C6A8]">
                      MY SAJU SERVICE
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
                            SAJU MANSE-RYEOK SERVICE
                          </span>
                          <p className="text-xs font-extrabold text-[#FAF7F2] mt-0.5">
                            나만의 사주사이트 실행 흐름
                          </p>
                        </div>

                        {/* 화면 1: 생년월일·출생시간 입력 화면 (가상 정보 사용) */}
                        <div className="p-2.5 rounded-xl bg-[#1D1612] border border-[#342820] space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-[#C6A66B]">
                              01. 생년월일·출생시간 입력
                            </span>
                            <span className="text-[8px] text-[#8F7D6E]">
                              가상 예제 입력
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                            <div className="p-1.5 rounded bg-[#241B16] border border-[#382C22]">
                              <span className="text-[#8F7D6E] block text-[8px]">
                                생년월일
                              </span>
                              <span className="font-semibold text-[#FAF7F2]">
                                1995. 08. 15 (양력)
                              </span>
                            </div>
                            <div className="p-1.5 rounded bg-[#241B16] border border-[#382C22]">
                              <span className="text-[#8F7D6E] block text-[8px]">
                                출생시간
                              </span>
                              <span className="font-semibold text-[#FAF7F2]">
                                07:30 (진시 / 辰時)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 화살표 */}
                        <div className="flex items-center justify-center text-[10px] text-[#C6A66B] font-bold gap-1">
                          <span>↓</span>
                          <span>만세력 오픈소스 사주 정보 계산</span>
                          <span>↓</span>
                        </div>

                        {/* 화면 2: 사주 명식과 오행 정보 화면 */}
                        <div className="p-2.5 rounded-xl bg-[#1D1612] border border-[#C6A66B]/50 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-[#C6A66B]">
                              02. 사주 명식 & 오행 정보
                            </span>
                            <span className="text-[8px] text-emerald-400 font-semibold">
                              계산 연동 완료
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-1 text-center">
                            {[
                              { label: "시주", top: "丙 (화)", btm: "辰 (토)" },
                              { label: "일주", top: "甲 (목)", btm: "子 (수)" },
                              { label: "월주", top: "甲 (목)", btm: "申 (금)" },
                              { label: "년주", top: "乙 (목)", btm: "亥 (수)" },
                            ].map((col) => (
                              <div
                                key={col.label}
                                className="p-1 rounded bg-[#271E18] border border-[#3A2D23]"
                              >
                                <span className="text-[8px] text-[#8F7D6E] block">
                                  {col.label}
                                </span>
                                <strong className="text-[9px] text-[#FAF7F2] block font-bold">
                                  {col.top}
                                </strong>
                                <span className="text-[8px] text-[#C6A66B] block">
                                  {col.btm}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 화면 3: 기본 성향과 메시지가 표시되는 결과 화면 */}
                        <div className="p-3 rounded-xl bg-[#241B15] border border-[#46362A] space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-[#C6A66B]">
                              03. 풀이 결과 자동 표시
                            </span>
                            <span className="text-[8px] text-[#A8988B]">
                              API 호출 0원
                            </span>
                          </div>
                          <p className="text-[11px] font-bold text-[#FAF7F2] break-keep">
                            “큰 숲을 이루는 갑목(甲木)처럼 곧고 단단한 기운”
                          </p>
                          <p className="text-[10px] text-[#C4B5A6] leading-relaxed break-keep">
                            계산된 사주 항목에 따라 미리 준비한 성향과 운세 메시지가
                            결과페이지에 자동으로 연결되어 펼쳐집니다.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 하단 캡션 (수업 결과물 예시 명시) */}
                <p className="mt-3 text-center text-xs text-[#6E5A4D] font-medium">
                  ▲ 수업 결과물 예시 (입력 화면 → 만세력 계산 → 결과페이지 표시)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [3. 서비스 소개 — 기존 ‘앱인토스란?’ 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-20 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            ABOUT SAJU SERVICE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            입력 한 번으로 <br />
            <span className="text-[#D6C6A8]">
              사주 정보와 풀이가 펼쳐지는 서비스
            </span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#B8A89A] leading-relaxed break-keep">
            <p>
              사용자가 생년월일과 태어난 시간을 입력하면 <br className="hidden sm:inline" />
              만세력 계산 기능으로 사주 정보를 구하고, <br className="hidden sm:inline" />
              계산된 항목에 맞는 해석을 결과페이지에 표시합니다.
            </p>
            <p className="text-[#FAF7F2] font-semibold">
              이 수업에서는 입력 화면과 계산 기능, 해석 데이터를 연결하여 <br className="hidden sm:inline" />
              사용자가 직접 이용할 수 있는 작은 사주서비스를 만듭니다.
            </p>
          </div>

          {/* 하단 강조: 4단계 흐름 박스 */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#322720] text-center space-y-2">
              <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                CORE PIPELINE
              </span>
              <p className="text-sm sm:text-base font-extrabold text-[#FAF7F2] break-keep">
                입력 화면 → 만세력 계산 → 해석 연결 → 결과페이지 표시
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [4. 고민 공감 — WHY SAJU SERVICE?]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              WHY SAJU SERVICE?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              사주사이트를 만들고 싶지만, <br />
              <span className="text-[#D6C6A8]">
                어디서부터 시작해야 할지 막막했나요?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] max-w-2xl mx-auto pt-2 leading-relaxed break-keep">
              사주부터 공부해야 할 것 같고, 생년월일을 어떻게 계산하는지도 어렵고, <br className="hidden sm:inline" />
              결과를 자동으로 보여주는 기능은 더 복잡하게 느껴집니다.
            </p>
          </div>

          {/* 3개 고민 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SAJU_PROBLEM_CARDS.map((card, idx) => (
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
              계산에 필요한 기능과 결과를 보여주는 구조를 나누면,
            </p>
            <p className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
              처음 시작하는 분도 템플릿을 활용해 차근차근 제작할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [5. 수강 전후 변화 — TRANSFORMATION]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              TRANSFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              막연했던 사주서비스 아이디어가 <br />
              <span className="text-[#D6C6A8]">
                직접 실행하는 사이트로 바뀝니다
              </span>
            </h2>
          </div>

          <div className="space-y-3.5">
            {SAJU_BEFORE_AFTER.map((item, idx) => (
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

          <p className="mt-5 text-center text-xs text-[#8F7D6E] break-keep">
            * 계산은 검증된 만세력 오픈소스를 연결하고 동일 계산 기준의 참고 결과와 비교·점검하며 안전하게 실습합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [6. 하루 완성 결과물 — ONE DAY RESULT]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              ONE DAY RESULT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              하루 3~4시간, <br />
              <span className="text-[#D6C6A8]">
                나만의 사주서비스 첫 버전을 완성합니다
              </span>
            </h2>
          </div>

          {/* 4개 결과물 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SAJU_ONE_DAY_RESULTS.map((card, idx) => (
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

          {/* 하단 안내 */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#17120F] border border-[#2E241D] text-center">
            <p className="text-xs sm:text-sm text-[#C4B5A6] leading-relaxed break-keep">
              ※ 제공 템플릿을 바탕으로 기본 기능이 작동하는 첫 버전을 만듭니다.{" "}
              <br className="hidden sm:inline" />
              복잡한 종합 감정이나 고급 기능은 이후 확장할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [7. 수업 구성 요약 — PACKAGE INCLUDED]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              PACKAGE INCLUDED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              계산부터 디자인까지, <br />
              <span className="text-[#D6C6A8]">
                처음 만드는 데 필요한 흐름을 함께 배웁니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAJU_PACKAGE_SUMMARY.map((item) => (
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
          [8. 디자인 예시 — 기존 APP EXAMPLES 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              DESIGN EXAMPLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              사주사이트도 <br />
              <span className="text-[#D6C6A8]">
                내 취향과 브랜드에 맞게 만들 수 있습니다
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              같은 기능이라도 색감과 문장, 화면 배치에 따라 전혀 다른 분위기의 서비스가 됩니다. (디자인 콘셉트 예시)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SAJU_CONCEPT_EXAMPLES.map((concept) => {
              const slot = SAJU_IMAGES[concept.imageSlotKey];
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

                  <SajuReplaceableImage
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
          [9. 핵심 차별점 — 만세력 계산과 결과 자동화]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#14100D]">
        <div className="site-container">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1713] to-[#15100D] border-2 border-[#C6A66B]/45 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
                CORE DIFFERENTIATOR · CALCULATION & AUTOMATION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                사주 계산과 풀이 연결, <br />
                <span className="text-[#D6C6A8]">
                  두 가지를 나누면 구조가 보입니다
                </span>
              </h2>
            </div>

            {/* 2가지 핵심 기둥 설명 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[#161210] border border-[#342820] space-y-3">
                <span className="inline-block text-xs font-extrabold text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#241B15] border border-[#3E3024]">
                  첫 번째 기둥
                </span>
                <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                  계산은 만세력 오픈소스로
                </h3>
                <p className="text-xs sm:text-sm text-[#B8A89A] leading-relaxed break-keep">
                  생년월일을 AI가 임의로 해석하게 두는 대신, 만세력 계산 기능을 연결해 사주 정보를 구합니다. 어떤 입력 조건과 계산 기준을 사용하는지 확인하고, 참고 결과와 비교하며 점검하는 방법을 배웁니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161210] border border-[#342820] space-y-3">
                <span className="inline-block text-xs font-extrabold text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#241B15] border border-[#3E3024]">
                  두 번째 기둥
                </span>
                <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                  풀이는 준비된 해석 데이터로
                </h3>
                <p className="text-xs sm:text-sm text-[#B8A89A] leading-relaxed break-keep">
                  계산된 항목에 해당하는 설명을 찾아 결과페이지에 자동으로 표시합니다. 결과를 매번 수작업으로 작성하지 않아도 되는 구조를 만듭니다.
                </p>
              </div>
            </div>

            {/* 시각 자료: 입력 화면 / 계산된 사주 정보 / 연결된 풀이 결과 3개 화면 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] block">
                  화면 01
                </span>
                <h4 className="text-sm font-extrabold text-[#EDE6DC]">
                  입력 화면
                </h4>
                <SajuReplaceableImage
                  slot={SAJU_IMAGES.diffStepInput}
                  fallbackType="diff-step-input"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] block">
                  화면 02
                </span>
                <h4 className="text-sm font-extrabold text-[#EDE6DC]">
                  계산된 사주 정보
                </h4>
                <SajuReplaceableImage
                  slot={SAJU_IMAGES.diffStepCalc}
                  fallbackType="diff-step-calc"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#130F0C] border border-[#2E241E] space-y-2">
                <span className="text-xs font-bold text-[#C6A66B] block">
                  화면 03
                </span>
                <h4 className="text-sm font-extrabold text-[#EDE6DC]">
                  연결된 풀이 결과
                </h4>
                <SajuReplaceableImage
                  slot={SAJU_IMAGES.diffStepResult}
                  fallbackType="diff-step-result"
                />
              </div>
            </div>

            {/* 주의사항 투명 안내 */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#130F0C] border border-[#2E241D] text-xs text-[#9E8B7C] leading-relaxed break-keep space-y-1">
              <p className="font-semibold text-[#D6C6A8]">
                ※ 오픈소스 계산 기준 안내:
              </p>
              <p>
                오픈소스의 실제 지원 범위에 따라 입력 조건(양력·음력 등)을 명시하며, 출생시간을 모를 경우 임의의 시간을 넣어 완전한 결과처럼 보여주지 않는 안전한 데이터 처리 방식을 적용합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [10. 제작 과정 — HOW IT WORKS]
          8단계 커리큘럼 + 4시간 기준 시간 구성안 표
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18]">
        <div className="site-container space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              생년월일 입력부터 결과페이지까지 <br />
              <span className="text-[#D6C6A8]">8단계로 연결합니다</span>
            </h2>
          </div>

          {/* 8단계 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAJU_CURRICULUM_STEPS.map((item) => (
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
                  {SAJU_TIME_SCHEDULE.map((row, idx) => (
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
              * 3시간 운영 시에는 계산 연동이 준비된 템플릿을 활용하고, 핵심 연결 구조를 확인한 뒤 디자인과 결과 수정에 집중합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [11. API 비용 설명 — 기존 핵심 철학 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#181310] border border-[#382C23] space-y-6">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#241B15] border border-[#3E3024] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
                NO AI CALL COST FOR RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                결과를 확인할 때마다 <br />
                <span className="text-[#D6C6A8]">
                  AI 해석 API를 호출하지 않아도 됩니다
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
                만세력 계산으로 필요한 정보를 구하고, 해당 항목에 맞는 해석을 미리 준비해 연결합니다.{" "}
                <br className="hidden sm:inline" />
                제작 과정에서는 AI의 도움을 받되, 완성된 기본 서비스는 계산 기능과 해석 데이터로 작동합니다.
              </p>
            </div>

            {/* 강조 박스 */}
            <div className="p-4 rounded-xl bg-[#221A14] border border-[#C6A66B]/50 text-center">
              <p className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
                ✨ AI로 제작하고, 준비된 구조로 자동 실행합니다.
              </p>
            </div>

            {/* 하단 안내 */}
            <div className="p-4 rounded-xl bg-[#130F0C] border border-[#281F19] text-center text-xs text-[#9E8B7C] leading-relaxed break-keep">
              기본 실습은 계산 결과에 준비된 해석을 연결하는 방식입니다. 자유로운 질문에 답하는 실시간 AI 상담과는 구분됩니다. 제작 도구 구독료와 호스팅·도메인 비용은 선택한 환경에 따라 별도로 발생할 수 있습니다.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [12. 혜택 자료 — CLASS KIT]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18]">
        <div className="site-container space-y-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SAJU_CLASS_KITS.map((kit) => (
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
              템플릿 복사 → 서비스 이름·디자인 수정 → 계산·해석 확인 → 실행 점검
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [13. 실제 제작 사례 — REAL EXPERIENCE]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              REAL EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              입력한 정보가 <br />
              <span className="text-[#D6C6A8]">
                나만의 사주 결과페이지로 펼쳐집니다
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              강사 제작 화면을 기준으로 수업에서 실습할 결과페이지 흐름을 미리 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SAJU_REAL_CASES.map((item) => {
              const slot = SAJU_IMAGES[item.imageSlotKey];
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

                  <SajuReplaceableImage
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
          [14. 후속 확장 — FIRST RELEASE]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-20 border-b border-[#221C18]">
        <div className="site-container text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            FIRST RELEASE & EXPANSION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            첫 번째 사이트를 만들면, <br />
            <span className="text-[#D6C6A8]">
              내 콘텐츠를 더해 발전시킬 수 있습니다
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
            서비스 이름과 디자인을 바꾸고, 결과 설명을 다듬고, 새로운 해석 항목을 추가하며 나만의 콘텐츠를 담아갈 수 있습니다. 먼저 작은 서비스를 완성한 뒤 사용자 반응을 보며 필요한 기능을 더해보세요.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {SAJU_EXPANSION_POINTS.map((pt, idx) => (
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
          [15. 추천 대상 — RECOMMENDED FOR]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              이런 분이라면 함께하세요
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {SAJU_RECOMMENDED_FOR.map((text, idx) => (
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
      <section className="w-full py-16 md:py-24 border-b border-[#221C18]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              BUSINESS EXPANSION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              나만의 사주사이트가 <br />
              <span className="text-[#D6C6A8]">
                브랜드를 경험하는 입구가 됩니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SAJU_EXPANSION_IDEAS.map((idea) => (
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
            완성한 사이트를 내 활동에 연결하고, 방문자가 직접 경험할 수 있는 콘텐츠로 활용해보세요.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [17. 클래스 안내 — CLASS INFO]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-b border-[#221C18] bg-[#120E0C]">
        <div className="site-container space-y-8">
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
                  {SAJU_CLASS_CONFIG.courseTitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">부제</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.courseSubtitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">진행 방식</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.format}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">수업 시간</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.duration}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">개강 일정</dt>
                <dd className="sm:col-span-3 font-semibold text-[#D6C6A8]">
                  {SAJU_CLASS_CONFIG.schedule}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">난이도</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.difficulty}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">완성 목표</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.goalSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">제공 자료</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.materialsSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">준비물</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {SAJU_CLASS_CONFIG.preparationSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">사전 준비 안내</dt>
                <dd className="sm:col-span-3 text-[#A8988B] leading-relaxed break-keep">
                  {SAJU_CLASS_CONFIG.preClassNotice}
                </dd>
              </div>
              {SAJU_CLASS_CONFIG.replayPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                  <dt className="font-bold text-[#C6A66B]">다시보기</dt>
                  <dd className="sm:col-span-3 text-[#EDE6DC]">
                    {SAJU_CLASS_CONFIG.replayPolicy}
                  </dd>
                </div>
              )}
              {SAJU_CLASS_CONFIG.questionSupportPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                  <dt className="font-bold text-[#C6A66B]">질문 지원</dt>
                  <dd className="sm:col-span-3 text-[#EDE6DC]">
                    {SAJU_CLASS_CONFIG.questionSupportPolicy}
                  </dd>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">환불 기준</dt>
                <dd className="sm:col-span-3 text-[#A8988B]">
                  자명스쿨{" "}
                  <Link
                    href={SAJU_CLASS_CONFIG.termsUrl}
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
                {SAJU_CLASS_CONFIG.communityInviteText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [18. 자주 묻는 질문 — FAQ 9문항]
         ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3]">
        <div className="site-container">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8E6D38] uppercase block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E2723] leading-tight break-keep">
              자주 묻는 질문
            </h2>
          </div>

          <SajuFaqAccordion items={SAJU_FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [19. 마지막 신청 영역]
         ═══════════════════════════════════════════════ */}
      <section
        id="apply"
        className="w-full py-20 md:py-28 bg-gradient-to-b from-[#120E0C] to-[#0D0B0A]"
      >
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              FROM YOUR IDEA TO YOUR SAJU SERVICE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              만들고 싶었던 나만의 사주사이트, <br />
              <span className="text-[#D6C6A8]">
                이제 직접 완성해보세요.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep max-w-xl mx-auto">
              사주를 몰라서, 코딩을 몰라서 미뤄두었던 아이디어. <br className="hidden sm:inline" />
              기본 템플릿과 AI를 활용해 생년월일 입력부터 결과 확인까지 이어지는 서비스로 만들어봅니다.
            </p>
          </div>

          {/* 수업을 마치면 남는 4가지 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#17120F] border border-[#352A21] text-left space-y-5">
            <span className="text-xs font-extrabold text-[#C6A66B] block">
              수업을 마치면 남는 4가지
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SAJU_FINAL_COMPLETION_ITEMS.map((item, idx) => (
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
              <SajuCtaButton
                courseId={SAJU_CLASS_CONFIG.id}
                courseTitle={SAJU_CLASS_CONFIG.courseTitle}
                status={SAJU_CLASS_CONFIG.status}
                applicationUrl={SAJU_CLASS_CONFIG.applicationUrl}
                notificationUrl={SAJU_CLASS_CONFIG.notificationUrl}
                ctaOpenText={SAJU_CLASS_CONFIG.ctaOpenText}
                ctaScheduledText={SAJU_CLASS_CONFIG.ctaScheduledText}
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
              이번에는 당신의 아이디어가 사주서비스가 됩니다.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* 모바일 하단 고정 신청 바 */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#14100D]/95 backdrop-blur-md border-t border-[#322720] px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] text-[#C6A66B] font-bold block truncate">
            {SAJU_CLASS_CONFIG.schedule}
          </span>
          <strong className="text-xs text-[#FAF7F2] font-extrabold block truncate">
            {SAJU_CLASS_CONFIG.courseTitle}
          </strong>
        </div>
        <SajuCtaButton
          courseId={SAJU_CLASS_CONFIG.id}
          courseTitle={SAJU_CLASS_CONFIG.courseTitle}
          status={SAJU_CLASS_CONFIG.status}
          applicationUrl={SAJU_CLASS_CONFIG.applicationUrl}
          notificationUrl={SAJU_CLASS_CONFIG.notificationUrl}
          ctaOpenText={SAJU_CLASS_CONFIG.ctaOpenText}
          ctaScheduledText={SAJU_CLASS_CONFIG.ctaScheduledText}
          variant="mobile-bar"
        />
      </div>
    </main>
  );
}

