import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";
import CourseDetailContainer from "@/components/courses/CourseDetailContainer";
import {
  AI_EMOTIONAL_ART_CONFIG,
  EMPATHY_POINTS,
  CORE_ACHIEVEMENTS,
  ART_WORK_TYPES,
  PROCESS_STEPS,
  CURRICULUM_MODULES,
  QUALIFICATION_SPEC,
  CAREER_EXPANSION_DATA,
  TARGET_AUDIENCE,
  COMPARISON_TABLE,
  EMOTIONAL_HOOK_SECTION,
  EMOTIONAL_EMPATHY_SECTION,
  EDUCATIONAL_PHILOSOPHY_SECTION,
  SIX_EMOTIONAL_PORTFOLIOS,
  SIX_WEEKS_EXPANDED_CURRICULUM,
  ONLINE_EXHIBITION_SECTION,
  INSTRUCTOR_EXPANSION_SECTION,
} from "@/data/aiEmotionalArtCourseData";
import { AiEmotionalArtFaqAccordion } from "@/components/courses/ai-emotional-art/AiEmotionalArtInteractive";

export const metadata: Metadata = {
  title: "AI 감성아트 지도사 1급 실전 VOD 자격과정 | 자명스쿨",
  description:
    "AI로 감성을 표현하고, 나만의 작품을 완성하는 시간. AI 이미지 생성과 디지털 디자인 도구로 아트 콘텐츠를 완성하고 AI감성아트지도사 자격을 취득하는 실습 중심 VOD 과정",
};

function CareerIcon({ type }: { type: "certificate" | "lecture" | "portfolio" | "expansion" }) {
  switch (type) {
    case "certificate":
      return (
        <svg className="w-6 h-6 text-[#E6C99B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "lecture":
      return (
        <svg className="w-6 h-6 text-[#E6C99B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    case "portfolio":
      return (
        <svg className="w-6 h-6 text-[#E6C99B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "expansion":
      return (
        <svg className="w-6 h-6 text-[#E6C99B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
  }
}

export default function AiEmotionalArtCoursePage() {
  return (
    <div className="min-h-screen bg-[#0C0B0A] text-white selection:bg-[#B89B6A]/30 selection:text-white overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01. 메인 히어로
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#B89B6A]/20 overflow-hidden">
        {/* 은은한 샴페인 골드 오로라 배경 */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89B6A]/10 blur-[140px] rounded-full pointer-events-none" />

        <CourseDetailContainer className="text-center relative z-10 space-y-6">
          {/* 상단 라벨 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B89B6A]/10 border border-[#B89B6A]/30">
            <span className="w-2 h-2 rounded-full bg-[#B89B6A] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#E6C99B] uppercase">
              {AI_EMOTIONAL_ART_CONFIG.category}
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#FAF7F2] break-keep">
            {AI_EMOTIONAL_ART_CONFIG.titleMain} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FAF7F2] via-[#E6C99B] to-[#B89B6A] bg-clip-text text-transparent">
              {AI_EMOTIONAL_ART_CONFIG.titleSub}
            </span>
          </h1>

          {/* 서브 타이틀 */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#D6C6A8] tracking-wide">
            {AI_EMOTIONAL_ART_CONFIG.titleAccent}
          </p>

          {/* 소개 문구 */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed break-keep">
            {AI_EMOTIONAL_ART_CONFIG.description}
          </p>

          {/* 핵심 배지 4개 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 pt-2 max-w-4xl mx-auto">
            {AI_EMOTIONAL_ART_CONFIG.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-[#B89B6A]/30 text-xs sm:text-sm font-medium text-[#FAF7F2] shadow-sm"
              >
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* 가격 표시 및 신청 상태 (KCP 카드사 심사용 규격) */}
          <div className="pt-8 max-w-md mx-auto">
            <div className="p-6 rounded-3xl bg-[#161412] border border-[#B89B6A]/40 shadow-2xl space-y-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xs text-[#B89B6A] font-bold uppercase tracking-wider">기획 판매가</span>
                <span className="text-3xl sm:text-4xl font-black text-[#FAF7F2]">
                  {AI_EMOTIONAL_ART_CONFIG.price.amount}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light break-keep">
                {AI_EMOTIONAL_ART_CONFIG.price.subNotice}
              </p>

              {/* 비활성 신청 버튼 (결제 미연동 안내) */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-zinc-800 text-zinc-400 font-bold text-sm sm:text-base cursor-not-allowed flex items-center justify-center gap-2 border border-white/10"
                title="과정 정식 오픈 준비 중입니다."
              >
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span>{AI_EMOTIONAL_ART_CONFIG.ctaText}</span>
              </button>

              <div className="pt-1">
                <a
                  href={AI_EMOTIONAL_ART_CONFIG.notificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D6C6A8] hover:text-white transition-colors"
                >
                  <span>오픈 일정 카카오톡 알림 받기</span>
                  <span>→</span>
                </a>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 mt-3 font-light">
              {AI_EMOTIONAL_ART_CONFIG.price.note}
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION A. 감성 후킹 영역 (에디토리얼 레이아웃)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-[#B89B6A]/20 bg-gradient-to-b from-[#0C0B0A] via-[#141210] to-[#0F0E0D] relative overflow-hidden">
        {/* 잔잔한 샴페인 빛 배경 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89B6A]/5 blur-[150px] rounded-full pointer-events-none" />

        <CourseDetailContainer className="relative z-10 max-w-4xl mx-auto space-y-10 text-center">
          {/* 상단 에디토리얼 태그 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B89B6A]/10 border border-[#B89B6A]/25">
            <span className="text-xs font-medium tracking-[0.2em] text-[#E6C99B] uppercase">
              EMOTIONAL REFLECTION
            </span>
          </div>

          {/* 메인 헤드라인 & 메시지 */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-[#D6C6A8] font-light tracking-wide break-keep">
              &ldquo;{EMOTIONAL_HOOK_SECTION.headline}&rdquo;
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              {EMOTIONAL_HOOK_SECTION.mainMessage}
            </h2>
          </div>

          {/* 에디토리얼 본문 단락 */}
          <div className="space-y-4 max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed break-keep">
            {EMOTIONAL_HOOK_SECTION.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 서정적 인용 박스 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#161412]/80 border border-[#B89B6A]/30 backdrop-blur-sm shadow-2xl space-y-3">
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#FAF7F2] break-keep leading-relaxed">
              &ldquo;{EMOTIONAL_HOOK_SECTION.quote}&rdquo;
            </p>
            <div className="pt-3 border-t border-[#B89B6A]/20">
              <span className="inline-block text-xs sm:text-sm font-semibold text-[#E6C99B] tracking-wide">
                ✦ {EMOTIONAL_HOOK_SECTION.coreConcept}
              </span>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION B. 공감과 문제 인식 (감성 공감 카드 4종)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {EMOTIONAL_EMPATHY_SECTION.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              {EMOTIONAL_EMPATHY_SECTION.title}
            </h2>
          </div>

          {/* 4개 감성 공감 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {EMOTIONAL_EMPATHY_SECTION.cards.map((card) => (
              <div
                key={card.number}
                className="p-6 sm:p-7 rounded-2xl bg-[#141210] border border-[#B89B6A]/20 hover:border-[#B89B6A]/50 transition-all duration-300 space-y-3 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      {card.number}
                    </span>
                    <span className="text-xl">{card.icon}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep italic">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 핵심 전환 메시지 배너 */}
          <div className="max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#1C1815] via-[#221C16] to-[#1C1815] border border-[#B89B6A]/40 text-center">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#E6C99B] leading-relaxed break-keep">
              ✨ {EMOTIONAL_EMPATHY_SECTION.highlight}
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION C. 자명스쿨의 교육 철학 (3단계 시각화)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0C0B0A]">
        <CourseDetailContainer className="space-y-14">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {EDUCATIONAL_PHILOSOPHY_SECTION.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              {EDUCATIONAL_PHILOSOPHY_SECTION.title}
            </h2>
            <div className="space-y-2 pt-2">
              {EDUCATIONAL_PHILOSOPHY_SECTION.description.map((desc, dIdx) => (
                <p key={dIdx} className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* 3단계 시각화 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {EDUCATIONAL_PHILOSOPHY_SECTION.steps.map((st, sIdx) => (
              <div
                key={st.step}
                className="relative p-7 rounded-3xl bg-[#141210] border border-[#B89B6A]/30 flex flex-col justify-between space-y-5 hover:border-[#B89B6A]/60 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {st.step}
                    </span>
                    <span className="text-2xl">{st.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FAF7F2]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light break-keep">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#B89B6A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89B6A]" />
                  <span className="font-medium">핵심 창작 단계 {sIdx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 서정적 클로징 문구 */}
          <div className="text-center max-w-2xl mx-auto pt-4">
            <p className="text-sm sm:text-base font-serif italic text-[#D6C6A8] break-keep leading-relaxed">
              &ldquo;{EDUCATIONAL_PHILOSOPHY_SECTION.quote}&rdquo;
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02. 공감 및 문제 제기
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Empathy & Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              AI 그림을 만들어봤지만, <br className="hidden sm:inline" />
              그다음은 막막하셨나요?
            </h2>
          </div>

          {/* 공감 리스트 4가지 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {EMPATHY_POINTS.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-[#141211] border border-white/5 space-y-3"
              >
                <span className="text-xs font-bold text-[#B89B6A] font-mono block">
                  CHECK {item.number}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                  &ldquo;{item.question}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-keep">
                  → {item.solution}
                </p>
              </div>
            ))}
          </div>

          {/* 전환 메시지 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1C1815] to-[#120F0D] border border-[#B89B6A]/30 text-center space-y-3">
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#FAF7F2] leading-relaxed break-keep">
              &ldquo;이미지를 생성하는 기술에서, 작품을 완성하고 활용하는 역량으로.&rdquo;
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed break-keep max-w-2xl mx-auto">
              단순히 AI 명령어를 몇 개 입력해보는 것을 넘어, 나만의 화풍과 테마를 설계하고 
              사람의 마음에 울림을 주는 실질적인 아트 콘텐츠를 완성하는 방법을 배웁니다.
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03. 이 과정에서 얻는 세 가지 결과
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-14">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Core Achievements
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              배움에서 끝나지 않는 세 가지 성취
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              단순히 강의 영상만 시청하고 끝나는 교육이 아닌, 손에 잡히는 아트 결과물과 공인된 자격증으로 연결됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_ACHIEVEMENTS.map((card) => (
              <div
                key={card.number}
                className="p-7 rounded-3xl bg-[#141210] border border-[#B89B6A]/20 flex flex-col justify-between space-y-6 hover:border-[#B89B6A]/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#B89B6A]">
                      {card.number}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/10">
                      {card.sub}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#FAF7F2]">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light break-keep">
                    {card.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {card.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#E6C99B]">
                      <span>✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                  {card.badge && (
                    <p className="text-[11px] text-amber-400/90 pt-2 font-medium break-keep">
                      ※ {card.badge}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04. 무엇을 만들 수 있나요? (6가지 작품 유형)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              6 Creative Assets
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              한 장의 AI 이미지가 다양한 작품이 됩니다.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-keep">
              단순한 파일 하나로 끝나지 않고, 일상과 브랜딩, 전시와 굿즈에 직접 활용할 수 있는 6가지 형태로 확장합니다.
            </p>
          </div>

          {/* 6종 카드 그리드 (PC 3열 x 2행, 모바일 1열) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ART_WORK_TYPES.map((art) => (
              <div
                key={art.id}
                className="p-6 rounded-2xl bg-[#141210] border border-white/10 hover:border-[#B89B6A]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      TYPE {art.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      {art.mockupTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#FAF7F2] group-hover:text-[#E6C99B] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#B89B6A] font-medium">
                      {art.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                    {art.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {art.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05. 작품 완성 5단계 프로세스
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Creation Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              아이디어에서 작품까지, 5단계 실전 과정
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              체계적인 실습 단계를 거쳐 비전공자도 완성도 높은 아트 포트폴리오를 스스로 완성합니다.
            </p>
          </div>

          {/* 5단계 흐름형 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((ps) => (
              <div
                key={ps.step}
                className="p-5 rounded-2xl bg-[#141210] border border-white/10 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#B89B6A] block">
                    STEP {ps.step}
                  </span>
                  <h3 className="text-base font-bold text-[#FAF7F2]">{ps.title}</h3>
                  <p className="text-xs font-medium text-[#E6C99B] break-keep">{ps.desc}</p>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-2 break-keep">
                  {ps.detail}
                </p>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION D. 6가지 감성 포트폴리오
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#B89B6A]/20 bg-gradient-to-b from-[#0C0B0A] via-[#141210] to-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {SIX_EMOTIONAL_PORTFOLIOS.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              {SIX_EMOTIONAL_PORTFOLIOS.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep">
              {SIX_EMOTIONAL_PORTFOLIOS.subTitle}
            </p>
          </div>

          {/* 6대 포트폴리오 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIX_EMOTIONAL_PORTFOLIOS.items.map((item) => (
              <div
                key={item.number}
                className="p-6 sm:p-7 rounded-2xl bg-[#141210] border border-[#B89B6A]/25 hover:border-[#B89B6A]/60 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      PORTFOLIO {item.number}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] group-hover:text-[#E6C99B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#D6C6A8]">
                  <span>✦</span>
                  <span className="font-light">실전 창작 포트폴리오 영역</span>
                </div>
              </div>
            ))}
          </div>

          {/* 비보장형/선택형 투명성 안내문구 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#161412] border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
              {SIX_EMOTIONAL_PORTFOLIOS.notice}
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06. 교육 커리큘럼 (6개 모듈)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-14">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Curriculum Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              기초부터 포트폴리오, 교육 활용까지
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              총 6개 실전 모듈을 통해 AI 기술을 예술적 표현과 교육 실무로 완성합니다.
            </p>
          </div>

          <div className="space-y-5">
            {CURRICULUM_MODULES.map((module) => (
              <div
                key={module.moduleNumber}
                className="p-6 sm:p-7 rounded-2xl bg-[#141210] border border-white/10 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {module.moduleNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2]">
                      {module.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#E6C99B] font-medium shrink-0">
                    결과물: {module.result}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light break-keep">
                  {module.summary}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {module.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="text-[#B89B6A] shrink-0">•</span>
                      <span className="break-keep">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-zinc-500 font-light">
            ※ 위 커리큘럼은 심사용 교육과정 초안이며, 상세 회차와 러닝타임은 정식 오픈 시 공지됩니다.
          </p>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION E. 감성 아트 6주 확장 커리큘럼 (타임라인 로드맵)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#B89B6A]/20 bg-[#0C0B0A]">
        <CourseDetailContainer className="space-y-14">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {SIX_WEEKS_EXPANDED_CURRICULUM.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              {SIX_WEEKS_EXPANDED_CURRICULUM.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep">
              {SIX_WEEKS_EXPANDED_CURRICULUM.subTitle}
            </p>
          </div>

          {/* 6주차 로드맵 카드 그리드 (PC 2열, 모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SIX_WEEKS_EXPANDED_CURRICULUM.weeks.map((wk) => (
              <div
                key={wk.week}
                className="p-6 sm:p-7 rounded-3xl bg-[#141210] border border-[#B89B6A]/25 hover:border-[#B89B6A]/50 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {wk.week}
                    </span>
                    <span className="text-xs font-medium text-[#D6C6A8]">
                      테마: {wk.theme}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] break-keep">
                    {wk.title}
                  </h3>

                  <ul className="space-y-1.5 pt-2 border-t border-white/5">
                    {wk.topics.map((tpc, tIdx) => (
                      <li key={tIdx} className="text-xs sm:text-sm text-zinc-400 font-light flex items-start gap-2">
                        <span className="text-[#B89B6A] shrink-0 mt-0.5">•</span>
                        <span className="break-keep">{tpc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-light">주차별 결과물</span>
                  <span className="font-semibold text-[#E6C99B] bg-[#B89B6A]/10 px-2.5 py-1 rounded-md border border-[#B89B6A]/20">
                    {wk.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs text-zinc-500 font-light">
              ※ 본 6주 확장 로드맵은 단계별 포트폴리오를 체계적으로 완성할 수 있도록 돕는 실습 추천 가이드라인입니다.
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07. 수강 방식
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              내 속도에 맞춰 배우는 온라인 실습 과정
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              정해진 수업 시간에 쫓기지 않고, 언제든 원하는 시간에 반복 시청하며 단계별로 실습합니다.
            </p>
          </div>

          {/* 5단계 수강 흐름 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-left">
            {[
              { step: "01", title: "온라인 VOD 학습", desc: "원하는 시간에 무제한 반복 시청" },
              { step: "02", title: "단계별 작품 제작", desc: "도구별 실습 과제 직접 구현" },
              { step: "03", title: "실습 자료 활용", desc: "프롬프트 키트 및 템플릿 제공" },
              { step: "04", title: "작품 과제 제출", desc: "완성 포트폴리오 비공개 접수" },
              { step: "05", title: "자격 검정 진행", desc: "평가 기준 충족 시 민간자격 발급" },
            ].map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-2xl bg-[#141210] border border-white/10 space-y-2"
              >
                <span className="text-xs font-mono font-bold text-[#B89B6A]">
                  STEP {st.step}
                </span>
                <h4 className="text-sm font-bold text-[#FAF7F2]">{st.title}</h4>
                <p className="text-xs text-zinc-400 font-light">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#12100E] border border-white/5 text-xs text-zinc-400 leading-relaxed font-light space-y-1">
            <p className="text-[#E6C99B] font-medium">안내 사항</p>
            <p>• 과제 제출은 향후 전용 접수 양식 및 학습관리 시스템(LMS)을 통해 진행됩니다.</p>
            <p>• 본 과정은 자기주도형 온라인 교육으로, 무제한 1:1 대면 첨삭이나 개인 코칭은 포함되지 않습니다 (공지 및 질의응답 중심 운영).</p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 08. 자격 취득 및 작품 평가 (KDMCA 등록정보)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Official Certification
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              실전 역량과 함께 준비하는 민간자격
            </h2>
          </div>

          <div className="p-8 rounded-3xl bg-[#141210] border border-[#B89B6A]/30 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs text-[#B89B6A] font-bold uppercase tracking-wider block">자격 명칭</span>
                <h3 className="text-2xl font-black text-[#FAF7F2]">
                  {QUALIFICATION_SPEC.name} ({QUALIFICATION_SPEC.level})
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-zinc-400 block">발급기관</span>
                <span className="text-sm font-semibold text-zinc-200">{QUALIFICATION_SPEC.issuer}</span>
              </div>
            </div>

            {/* 자격 상세 정보 표 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 block mb-1">민간자격 등록번호</span>
                <span className="text-[#E6C99B] font-bold font-mono">{QUALIFICATION_SPEC.registrationNumber}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 block mb-1">자격 구분</span>
                <span className="text-zinc-200 font-medium">{QUALIFICATION_SPEC.type}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 block mb-1">검정 방식</span>
                <span className="text-zinc-200 font-medium">{QUALIFICATION_SPEC.examMethod}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 block mb-1">합격 기준</span>
                <span className="text-zinc-200 font-medium">{QUALIFICATION_SPEC.passingCriteria}</span>
              </div>
            </div>

            {/* 법적 고지 안내 */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] text-zinc-400 leading-relaxed font-light">
              <p className="text-zinc-300 font-semibold mb-1">※ 자격기본법 제17조에 따른 법적 고지</p>
              <p>{QUALIFICATION_SPEC.notice}</p>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09. 커리어 확장
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
        {/* 은은한 배경 광원 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B89B6A]/5 blur-[120px] rounded-full pointer-events-none" />

        <CourseDetailContainer className="space-y-12 relative z-10">
          {/* 섹션 헤더 */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {CAREER_EXPANSION_DATA.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep leading-tight">
              {CAREER_EXPANSION_DATA.titleMain} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FAF7F2] via-[#E6C99B] to-[#B89B6A] bg-clip-text text-transparent">
                {CAREER_EXPANSION_DATA.titleSub}
              </span>
            </h2>
            <div className="space-y-2 max-w-2xl mx-auto pt-2">
              {CAREER_EXPANSION_DATA.description.map((desc, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* 4개 핵심 카드 (2열 x 2행 그리드) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {CAREER_EXPANSION_DATA.cards.map((card) => (
              <div
                key={card.id}
                className="group p-6 rounded-2xl bg-[#141210] border border-white/10 hover:border-[#B89B6A]/40 transition-all duration-300 space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B89B6A] tracking-wider">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#B89B6A]/30 transition-colors">
                    <CareerIcon type={card.iconType} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] group-hover:text-[#E6C99B] transition-colors break-keep">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-keep">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* 하단 강조 메시지 및 법적 고지 박스 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161412] to-[#12100E] border border-[#B89B6A]/30 text-center space-y-4">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#E6C99B] break-keep">
              &ldquo;{CAREER_EXPANSION_DATA.highlight}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto break-keep">
              {CAREER_EXPANSION_DATA.subHighlight}
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed break-keep">
                {CAREER_EXPANSION_DATA.disclaimer}
              </p>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION G. 창작에서 지도사 활동으로 (4대 활동 분야)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#B89B6A]/20 bg-gradient-to-b from-[#0F0E0D] to-[#0C0B0A]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {INSTRUCTOR_EXPANSION_SECTION.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              {INSTRUCTOR_EXPANSION_SECTION.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep">
              {INSTRUCTOR_EXPANSION_SECTION.description}
            </p>
          </div>

          {/* 4대 활동 분야 카드 그리드 (PC 2열, 모바일 1열) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {INSTRUCTOR_EXPANSION_SECTION.areas.map((area, aIdx) => (
              <div
                key={aIdx}
                className="p-6 sm:p-7 rounded-2xl bg-[#141210] border border-[#B89B6A]/25 hover:border-[#B89B6A]/50 transition-all duration-300 space-y-3 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      FIELD 0{aIdx + 1}
                    </span>
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] break-keep">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-keep">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#D6C6A8]">
                  <span>✓</span>
                  <span className="font-light">지도사 맞춤형 진로 확장</span>
                </div>
              </div>
            ))}
          </div>

          {/* 인용구 및 투명성 고지 박스 */}
          <div className="max-w-3xl mx-auto p-6 sm:p-7 rounded-2xl bg-[#161412] border border-white/10 text-center space-y-3">
            <p className="text-sm sm:text-base font-serif italic text-[#E6C99B] break-keep">
              &ldquo;{INSTRUCTOR_EXPANSION_SECTION.quote}&rdquo;
            </p>
            <div className="pt-2 border-t border-white/5">
              <p className="text-[11px] sm:text-xs text-zinc-500 font-light leading-relaxed break-keep">
                {INSTRUCTOR_EXPANSION_SECTION.disclaimer}
              </p>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10. 실제 작품 및 수강생 후기 (정직한 슬롯 준비)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Artwork Showcase & Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              교육생 작품 갤러리 및 수강 후기
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              ※ 실제 정규 수강생 분들의 과제 포트폴리오와 진솔한 후기가 정식 개강 후 순차적으로 공개됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "감성 일러스트 시리즈 포트폴리오",
                type: "디지털 아트북 수록작",
                status: "개강 후 공개 예정",
                desc: "일러스트레이션 프롬프트와 색감 보정을 거친 수강생 완성 작품 슬롯입니다.",
              },
              {
                title: "브랜드 공간 연출 아트 포스터",
                type: "실물 인쇄 규격(A2) 포스터",
                status: "개강 후 공개 예정",
                desc: "타이포그래피와 아트워크가 결합된 인테리어 포스터 디자인 포트폴리오 슬롯입니다.",
              },
              {
                title: "열두 달 계절 감성 캘린더",
                type: "시리즈 아트 캘린더",
                status: "개강 후 공개 예정",
                desc: "12가지 테마 이미지를 연작으로 완성한 캘린더 굿즈 디자인 슬롯입니다.",
              },
            ].map((slot, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-3xl bg-[#141210] border border-white/10 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {slot.type}
                    </span>
                    <span className="text-xs text-[#B89B6A] font-medium">
                      {slot.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#FAF7F2] break-keep">
                    {slot.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                    {slot.desc}
                  </p>
                </div>

                <div className="h-32 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-600 text-xs">
                  작품 갤러리 컷 준비 중
                </div>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          신규 SECTION F. 온라인 전시회 특별 경험 (대형 갤러리 컷 & 5단계)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-[#B89B6A]/20 bg-gradient-to-b from-[#0C0B0A] via-[#141210] to-[#0F0E0D] relative overflow-hidden">
        {/* 잔잔한 갤러리 앰비언트 조명 */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B89B6A]/8 blur-[160px] rounded-full pointer-events-none" />

        <CourseDetailContainer className="relative z-10 space-y-14">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              {ONLINE_EXHIBITION_SECTION.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FAF7F2] break-keep leading-tight">
              {ONLINE_EXHIBITION_SECTION.mainHeadline}
            </h2>
            <p className="text-sm sm:text-base text-[#D6C6A8] font-light leading-relaxed break-keep">
              {ONLINE_EXHIBITION_SECTION.subHeadline}
            </p>
            <div className="space-y-2 pt-2 max-w-2xl mx-auto">
              {ONLINE_EXHIBITION_SECTION.description.map((desc, dIdx) => (
                <p key={dIdx} className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed break-keep">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* 대형 가상 갤러리 프리뷰 프레임 */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#181512] to-[#0E0C0B] border border-[#B89B6A]/40 p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6A] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-[#E6C99B] uppercase">
                  JAMYEONG SCHOOL VIRTUAL GALLERY
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-light">
                온라인 웹 갤러리 큐레이션 실습
              </span>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-3 overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-[#B89B6A]/10 border border-[#B89B6A]/30 flex items-center justify-center text-2xl text-[#E6C99B]">
                🖼️
              </div>
              <p className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                나만의 대표작 큐레이션과 작가 노트가 걸리는 온라인 전시 공간
              </p>
              <p className="text-xs text-zinc-400 font-light max-w-md break-keep">
                스마트폰과 PC로 누구나 접속할 수 있는 나만의 웹 갤러리 링크를 완성하고, 소중한 사람들과 세상에 작품을 공유합니다.
              </p>
            </div>
          </div>

          {/* 5단계 전시 구성 흐름 */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-center text-sm font-bold tracking-wider text-[#B89B6A] uppercase">
              온라인 전시회 준비 5단계 프로세스
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {ONLINE_EXHIBITION_SECTION.steps.map((stp, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-[#141210] border border-[#B89B6A]/20 flex flex-col justify-between space-y-2 text-center"
                >
                  <span className="text-[11px] font-mono font-bold text-[#B89B6A]">
                    STEP 0{sIdx + 1}
                  </span>
                  <p className="text-xs font-medium text-[#FAF7F2] break-keep">
                    {stp.replace(/^\d+\.\s*/, "")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 인용구 및 전시 연계 CTA */}
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-[#161412] border border-[#B89B6A]/30 text-center space-y-5">
            <p className="text-base sm:text-lg font-serif italic text-[#FAF7F2] break-keep">
              &ldquo;{ONLINE_EXHIBITION_SECTION.quote}&rdquo;
            </p>
            <div className="space-y-1">
              <p className="text-sm font-bold text-[#E6C99B]">
                {ONLINE_EXHIBITION_SECTION.ctaText}
              </p>
              <p className="text-xs text-zinc-400 font-light">
                {ONLINE_EXHIBITION_SECTION.ctaSubText}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={AI_EMOTIONAL_ART_CONFIG.notificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-[#B89B6A]/40 text-xs sm:text-sm font-semibold text-[#FAF7F2] transition-colors"
              >
                <span>오픈 일정 알림 신청하고 전시 혜택 안내받기</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11. 이런 분께 추천합니다
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Recommended For
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              이런 분께 추천합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TARGET_AUDIENCE.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#141210] border border-white/5 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89B6A]" />
                  <h3 className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 font-light pl-3.5 leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12. 원데이와 자격과정의 차이
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Course Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              원데이 클래스와 VOD 자격과정의 차이
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              학습 목적과 원하는 완성도에 따라 최적의 과정을 선택할 수 있습니다.
            </p>
          </div>

          {/* 비교 테이블 */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#141210]">
            <div className="grid grid-cols-3 bg-[#1A1816] border-b border-white/10 p-4 text-xs font-bold">
              <div className="text-zinc-400">구분</div>
              <div className="text-[#D6C6A8]">체험형 원데이 클래스</div>
              <div className="text-[#E6C99B]">AI 감성아트 지도사 VOD 과정</div>
            </div>

            {COMPARISON_TABLE.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-3 p-4 text-xs border-b border-white/5 last:border-b-0 hover:bg-white/[0.02]"
              >
                <div className="font-semibold text-zinc-400">{row.feature}</div>
                <div className="text-zinc-300 pr-2 break-keep">{row.oneday}</div>
                <div className="text-[#E6C99B] font-medium pr-2 break-keep">{row.vod}</div>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 13. 수강료 및 신청 안내
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
                Enrollment & Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
                나만의 감성 작품, 그리고 새로운 배움의 증명
              </h2>
            </div>

            <div className="p-8 rounded-3xl bg-[#161412] border border-[#B89B6A]/30 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-zinc-400">상품명</span>
                <h3 className="text-xl font-bold text-[#FAF7F2]">
                  AI 감성아트 지도사 VOD 자격과정
                </h3>
                <p className="text-3xl sm:text-4xl font-black text-[#E6C99B] pt-2">
                  99,000원
                </p>
              </div>

              <div className="text-left text-xs text-zinc-300 space-y-2 p-5 rounded-2xl bg-black/40 border border-white/5">
                <p className="font-bold text-[#B89B6A]">포함 항목</p>
                <p>• VOD 정규 교육 과정 전체 시청 권한</p>
                <p>• 아트 유형별 프롬프트 키트 및 디자인 템플릿 일체</p>
                <p>• 포트폴리오 작품 제출 및 1회차 자격 검정 심사</p>
                <p>• 최종 합격 시 AI감성아트지도사 1급 민간자격증 발급</p>
                
                <div className="pt-3 border-t border-white/10 space-y-1 text-zinc-500 text-[11px]">
                  <p>※ 별도 비용 안내: 실물 굿즈 인쇄·배송비 및 외부 생성 AI 유료 요금제는 본인 부담입니다.</p>
                </div>
              </div>

              {/* 비활성 버튼 */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-zinc-800 text-zinc-400 font-bold text-base cursor-not-allowed border border-white/10"
                title="과정 정식 오픈 준비 중입니다."
              >
                과정 신청 준비중
              </button>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 14. FAQ 및 취소/환불 안내
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              자주 묻는 질문
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <AiEmotionalArtFaqAccordion />
          </div>
        </CourseDetailContainer>
      </section>

      {/* 취소 및 환불 안내 (공통 1280px 컴포넌트) */}
      <CourseRefundPolicySection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 15. 최종 CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-b from-[#0C0B0A] via-[#141210] to-[#0A0908] relative overflow-hidden">
        {/* 잔잔한 광원 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89B6A]/10 blur-[150px] rounded-full pointer-events-none" />

        <CourseDetailContainer className="relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B89B6A]/10 border border-[#B89B6A]/25">
              <span className="text-xs font-semibold text-[#E6C99B] tracking-wide">
                ✦ {EMOTIONAL_HOOK_SECTION.coreConcept}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FAF7F2] leading-snug break-keep">
              당신의 감성이 작품이 되고, <br className="hidden sm:inline" />
              그 작품이 세상과 만나는 첫 걸음
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-light break-keep max-w-2xl mx-auto">
              기술을 넘어 마음을 표현하는 AI 감성 아트 실습부터, 6가지 포트폴리오와 온라인 전시회, 그리고 정식 민간자격 취득까지. <br className="hidden sm:inline" />
              자명스쿨과 함께 나다운 예술적 여정을 시작해보세요.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={AI_EMOTIONAL_ART_CONFIG.notificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-[#B89B6A] to-[#9E7C47] text-[#0C0B0A] font-bold text-sm tracking-wider hover:brightness-110 transition-all shadow-xl"
              >
                <span>AI 감성아트 지도사 과정 알림 신청하기</span>
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

    </div>
  );
}

