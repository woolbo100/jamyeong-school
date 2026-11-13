import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";
import CourseDetailContainer from "@/components/courses/CourseDetailContainer";
import {
  AI_BRANDING_MASTER_CONFIG,
  EMPATHY_POINTS,
  CORE_ACHIEVEMENTS,
  SERVICE_TYPES,
  PROCESS_STEPS,
  CURRICULUM_MODULES,
  CASE_STUDIES,
  OUTCOME_ASSETS,
  QUALIFICATION_SPEC,
  CAREER_EXPANSION_DATA,
  TARGET_AUDIENCE,
  COMPARISON_TABLE,
} from "@/data/aiBrandingMasterCourseData";
import { AiBrandingMasterFaqAccordion } from "@/components/courses/ai-branding-master/AiBrandingMasterInteractive";

export const metadata: Metadata = {
  title: "AI 브랜딩 마스터 강사 1급 실전 VOD 자격과정 | 자명스쿨",
  description:
    "나만의 브랜드를 만들고, 실제 작동하는 AI 서비스로 완성하다. 1인 브랜드를 위한 AI 디지털 서비스 기획·제작부터 강의안 완성, AI브랜딩마스터 강사 1급 자격 취득까지 연결하는 실전형 VOD 자격과정",
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

export default function AiBrandingMasterCoursePage() {
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
              {AI_BRANDING_MASTER_CONFIG.category}
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#FAF7F2] break-keep">
            {AI_BRANDING_MASTER_CONFIG.titleMain} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FAF7F2] via-[#E6C99B] to-[#B89B6A] bg-clip-text text-transparent">
              {AI_BRANDING_MASTER_CONFIG.titleSub}
            </span>
          </h1>

          {/* 과정명 */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#D6C6A8] tracking-wide">
            {AI_BRANDING_MASTER_CONFIG.titleAccent}
          </p>

          {/* 소개 문구 */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed break-keep">
            {AI_BRANDING_MASTER_CONFIG.description}
          </p>

          {/* 핵심 키워드 5개 배지 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 pt-2 max-w-4xl mx-auto">
            {AI_BRANDING_MASTER_CONFIG.badges.map((badge, idx) => (
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
                  {AI_BRANDING_MASTER_CONFIG.price.amount}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light break-keep">
                {AI_BRANDING_MASTER_CONFIG.price.subNotice}
              </p>

              {/* 비활성 신청 버튼 */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-zinc-800 text-zinc-400 font-bold text-sm sm:text-base cursor-not-allowed flex items-center justify-center gap-2 border border-white/10"
                title="과정 정식 오픈 준비 중입니다."
              >
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span>{AI_BRANDING_MASTER_CONFIG.ctaText}</span>
              </button>

              <div className="pt-1">
                <a
                  href={AI_BRANDING_MASTER_CONFIG.notificationUrl}
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
              {AI_BRANDING_MASTER_CONFIG.price.note}
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02. 공감 영역
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Empathy & Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep leading-snug">
              AI는 배웠는데, <br className="hidden sm:inline" />
              내 사업에 활용할 서비스는 아직 없으신가요?
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
              &ldquo;AI를 아는 것에서 끝나지 않고, AI로 나만의 서비스를 만드는 단계로.&rdquo;
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed break-keep max-w-2xl mx-auto">
              기술을 소비하는 수동적인 사용자에 머무르지 않고, 고객이 직접 이용하고 감동을 느끼는 
              1인 브랜드 전용 디지털 서비스를 내 손으로 직접 완성하는 실전의 길을 엽니다.
            </p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03. 이 과정의 세 가지 핵심 결과
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-14">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Core Achievements
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              배우고, 만들고, 새로운 가능성으로 연결합니다.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              이론 공부에 그치지 않고, 실제로 인터넷에 라이브 작동하는 서비스와 강사 역량으로 도약합니다.
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
          SECTION 04. 무엇을 만들 수 있나요? (핵심 판매 섹션)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              6 Practical Digital Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep leading-tight">
              아이디어를 서비스로. <br className="hidden sm:inline" />
              나만의 AI 비즈니스를 시작하는 다양한 방법
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-keep">
              나의 관심 분야와 전문성을 디지털 서비스로 연결해보세요. 
              다양한 제작 사례를 살펴보고, 자신의 브랜드에 맞는 프로젝트를 선택할 수 있습니다.
            </p>
          </div>

          {/* 6종 서비스 카드 그리드 (PC 3열 x 2행, 모바일 1열) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_TYPES.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-[#141210] border border-white/10 hover:border-[#B89B6A]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      {service.mockupTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#FAF7F2] group-hover:text-[#E6C99B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#B89B6A] font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {service.tags.map((tag, tIdx) => (
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

          <div className="p-4 rounded-2xl bg-[#12100E] border border-white/5 text-[11px] text-zinc-400 leading-relaxed font-light space-y-1">
            <p className="text-[#E6C99B] font-medium">※ 서비스 유형 및 유의사항 안내</p>
            <p>• 위 6개 유형은 제작 가능한 서비스의 대표 예시 및 응용 방향이며, 모든 수강생이 6개 전체를 의무 제작하는 것은 아닙니다 (핵심 집중 프로젝트 1종 완성 권장).</p>
            <p>• 사주·타로·심리 테스트 서비스는 오락 및 자기이해 증진 목적의 콘텐츠이며, 의료적·전문적 심리 진단을 대체하거나 보장하지 않습니다.</p>
            <p>• 앱인토스 미니앱 연동은 외부 플랫폼의 공식 정책 및 심사 기준에 따르며, 제작만으로 플랫폼 등록 승인이 보장되는 것은 아닙니다.</p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05. 하나의 서비스가 완성되는 과정 (6단계 제작 로드맵)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              6-Step Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              아이디어에서 실제 서비스까지, 6단계 제작 로드맵
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              기획부터 AI 코딩, 디자인, 배포, 포트폴리오 패키징까지 체계적으로 이어집니다.
            </p>
          </div>

          {/* 6단계 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((ps) => (
              <div
                key={ps.step}
                className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      STEP {ps.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#FAF7F2]">{ps.title}</h3>
                  <p className="text-xs font-medium text-[#E6C99B] break-keep">{ps.desc}</p>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-3 break-keep">
                  {ps.detail}
                </p>
              </div>
            ))}
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
              1인 브랜드 기획부터 실제 배포 및 강의 설계까지
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              총 6개 실전 모듈을 통해 나만의 디지털 서비스 론칭과 강사 활동 역량을 체득합니다.
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
            ※ 위 커리큘럼은 심사용 상세페이지 초안이며, 상세 회차 및 실습 분량은 정식 개강 공지 시 확정됩니다.
          </p>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07. 실제 서비스 제작 사례 (자명스쿨 실전 프로젝트)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Proven Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep leading-tight">
              설명만 하는 교육이 아닙니다. <br className="hidden sm:inline" />
              직접 만들어본 경험을 바탕으로 가르칩니다.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl mx-auto break-keep">
              자명스쿨은 AI를 활용한 실제 디지털 서비스 제작과 운영 경험을 교육 콘텐츠로 연결합니다. 
              서비스를 기획하고 구현하며 겪은 문제와 해결 과정을 생생한 실습 사례로 배웁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="p-6 rounded-3xl bg-[#141210] border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {cs.category}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium">
                      ✓ 실전 검증
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#FAF7F2] break-keep">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-[#D6C6A8] block">
                    {cs.techStack}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light block">
                    {cs.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 08. 수강 후 남는 4대 결과물
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Tangible Assets
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep leading-tight">
              강의를 듣고 끝나는 것이 아니라, <br className="hidden sm:inline" />
              나만의 디지털 자산을 준비합니다.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              과정 수료 시 손에 쥐게 되는 4가지 실물 디지털 자산입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OUTCOME_ASSETS.map((asset) => (
              <div
                key={asset.id}
                className="p-6 rounded-3xl bg-[#141210] border border-[#B89B6A]/20 space-y-3"
              >
                <span className="text-2xl font-black font-mono text-[#B89B6A]">
                  {asset.number}
                </span>
                <h3 className="text-base font-bold text-[#FAF7F2]">{asset.title}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                  {asset.desc}
                </p>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09. 수강 방식
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              내 속도에 맞춰 완성하는 프로젝트형 VOD 교육
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              일방적인 이론 주입이 아닌, 직접 단계별 프로젝트를 만들며 체화하는 실습 중심 학습입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-left">
            {[
              { step: "01", title: "온라인 강의 수강", desc: "원하는 시간에 무제한 반복" },
              { step: "02", title: "프로젝트 기획", desc: "1인 브랜드 맞춤 서비스 선정" },
              { step: "03", title: "단계별 서비스 제작", desc: "AI 도구로 실제 웹 화면 구현" },
              { step: "04", title: "테스트 & 결과물 정리", desc: "라이브 배포 및 링크 확보" },
              { step: "05", title: "자격 검정 응시", desc: "포트폴리오 심사 후 자격 발급" },
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
            <p>• 과제 제출은 전용 접수 양식 및 LMS 시스템을 통해 진행됩니다.</p>
            <p>• 본 과정은 자기주도형 온라인 교육으로, 무제한 1:1 대면 코칭은 포함되지 않습니다 (공지 및 Q&A 중심 운영).</p>
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10. 자격 취득 및 검정 안내 (KDMCA 등록정보)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Official Certification
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              실전 프로젝트 경험과 함께 준비하는 강사 자격
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
          SECTION 11. 강사 활동과 커리어 확장 (핵심 차별화 섹션)
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
          SECTION 12. 실제 수강생 작품과 후기
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Student Projects & Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              직접 만들고 성장해온 자명스쿨의 교육 경험
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              ※ 정규 수강생 분들의 실제 서비스 제작 프로젝트와 후기가 정식 개강 후 순차적으로 공개됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "1인 코칭 상담 예약 웹서비스",
                type: "인터랙티브 웹",
                status: "개강 후 공개 예정",
                desc: "자가진단 설문과 1:1 상담 예약 흐름이 결합된 수강생 제작 웹서비스 슬롯입니다.",
              },
              {
                title: "감성 힐링 타로 리딩 사이트",
                type: "콘텐츠 서비스",
                status: "개강 후 공개 예정",
                desc: "AI 이미지 생성과 인터랙티브 스크립트를 연결하여 완성한 웹서비스 슬롯입니다.",
              },
              {
                title: "지자체 출강용 AI 웹 제작 강의안",
                type: "실습형 커리큘럼",
                status: "개강 후 공개 예정",
                desc: "비전공 성인을 대상으로 한 4주 완성 AI 웹서비스 실습 교안 슬롯입니다.",
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
                  수강생 프로젝트 슬롯
                </div>
              </div>
            ))}
          </div>
        </CourseDetailContainer>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 13. 이런 분께 추천합니다
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
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
          SECTION 14. 원데이와 마스터 강사 과정 비교
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
        <CourseDetailContainer className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Course Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep leading-tight">
              하나의 서비스를 만드는 원데이, <br className="hidden sm:inline" />
              제작 역량을 체계적으로 확장하는 마스터 과정
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              단순 도구 체험을 넘어 1인 브랜드 비즈니스 거점 구축과 출강 역량을 함께 완성합니다.
            </p>
          </div>

          {/* 비교 테이블 */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#141210]">
            <div className="grid grid-cols-3 bg-[#1A1816] border-b border-white/10 p-4 text-xs font-bold">
              <div className="text-zinc-400">구분</div>
              <div className="text-[#D6C6A8]">체험형 원데이 클래스</div>
              <div className="text-[#E6C99B]">AI 브랜딩 마스터 강사 과정</div>
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
          SECTION 15. 수강료 및 신청
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <CourseDetailContainer>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
                Enrollment & Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
                아이디어를 서비스로, 경험을 새로운 커리어로
              </h2>
            </div>

            <div className="p-8 rounded-3xl bg-[#161412] border border-[#B89B6A]/30 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-zinc-400">상품명</span>
                <h3 className="text-xl font-bold text-[#FAF7F2]">
                  AI 브랜딩 마스터 강사 VOD 자격과정
                </h3>
                <p className="text-3xl sm:text-4xl font-black text-[#E6C99B] pt-2">
                  199,000원
                </p>
              </div>

              <div className="text-left text-xs text-zinc-300 space-y-2 p-5 rounded-2xl bg-black/40 border border-white/5">
                <p className="font-bold text-[#B89B6A]">포함 항목</p>
                <p>• VOD 정규 교육 과정 전체 시청 권한</p>
                <p>• AI 서비스 기획 및 제작 템플릿 코드/서식 일체</p>
                <p>• 출강 제안용 강의계획서 및 실습 교안 템플릿</p>
                <p>• 서비스 프로젝트 과제 제출 및 1회차 자격 검정 심사</p>
                <p>• 최종 합격 시 AI브랜딩마스터 강사 1급 민간자격증 발급</p>
                
                <div className="pt-3 border-t border-white/10 space-y-1 text-zinc-500 text-[11px]">
                  <p>※ 별도 비용 안내: 유료 AI API 및 유료 클라우드 호스팅/커스텀 도메인 구입 비용은 본인 부담입니다.</p>
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
          SECTION 16. FAQ 및 환불 안내
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-[#0F0E0D]">
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
            <AiBrandingMasterFaqAccordion />
          </div>
        </CourseDetailContainer>
      </section>

      {/* 취소 및 환불 안내 (공통 1280px 컴포넌트) */}
      <CourseRefundPolicySection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 17. 최종 CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-b from-[#0C0B0A] to-[#141210]">
        <CourseDetailContainer>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-snug break-keep">
              아이디어를 서비스로, <br className="hidden sm:inline" />
              경험을 새로운 커리어로.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-light break-keep">
              AI를 배우는 것에서 멈추지 마세요. 나만의 브랜드를 위한 서비스를 만들고, 그 경험을 다음 기회로 연결해보세요. <br className="hidden sm:inline" />
              자명스쿨에서 AI 브랜딩 마스터 강사로서의 새로운 도전을 시작합니다.
            </p>
            <div className="pt-4">
              <a
                href={AI_BRANDING_MASTER_CONFIG.notificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-[#B89B6A] to-[#9E7C47] text-[#0C0B0A] font-bold text-sm tracking-wider hover:brightness-110 transition-all shadow-xl"
              >
                <span>AI 브랜딩 마스터 강사 과정 신청하기</span>
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </CourseDetailContainer>
      </section>

    </div>
  );
}
