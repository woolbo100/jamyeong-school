import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";
import {
  EMOTIONAL_PUBLISHING_CONFIG,
  EMPATHY_POINTS,
  CORE_ACHIEVEMENTS,
  BOOK_TYPES,
  STUDENT_WORKS,
  CURRICULUM_MODULES,
  QUALIFICATION_SPEC,
  COURSE_BENEFITS,
  TARGET_AUDIENCE,
  COMPARISON_TABLE,
} from "@/data/emotionalPublishingCourseData";
import { EmotionalPublishingFaqAccordion } from "@/components/courses/emotional-publishing/EmotionalPublishingInteractive";

export const metadata: Metadata = {
  title: "감성출판지도사 1급 실전 VOD 자격과정 | 자명스쿨",
  description:
    "내 이야기가 한 권의 책이 되고, 배움은 하나의 자격이 됩니다. AI와 캔바로 나만의 책을 완성하고 감성출판지도사 자격을 취득하는 자기주도형 VOD 민간자격과정",
};

export default function EmotionalPublishingPage() {
  return (
    <div className="min-h-screen bg-[#0C0B0A] text-white selection:bg-[#B89B6A]/30 selection:text-white overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01. 메인 히어로
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 border-b border-[#B89B6A]/20 overflow-hidden">
        {/* 은은한 샴페인 골드 오로라 배경 */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89B6A]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          {/* 상단 라벨 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B89B6A]/10 border border-[#B89B6A]/30">
            <span className="w-2 h-2 rounded-full bg-[#B89B6A] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#E6C99B] uppercase">
              {EMOTIONAL_PUBLISHING_CONFIG.category}
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#FAF7F2] break-keep">
            {EMOTIONAL_PUBLISHING_CONFIG.titleMain} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FAF7F2] via-[#E6C99B] to-[#B89B6A] bg-clip-text text-transparent">
              {EMOTIONAL_PUBLISHING_CONFIG.titleSub}
            </span>
          </h1>

          {/* 서브 타이틀 */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#D6C6A8] tracking-wide">
            {EMOTIONAL_PUBLISHING_CONFIG.titleAccent}
          </p>

          {/* 소개 문구 */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed break-keep">
            {EMOTIONAL_PUBLISHING_CONFIG.description}
          </p>

          {/* 핵심 배지 5개 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 pt-2 max-w-4xl mx-auto">
            {EMOTIONAL_PUBLISHING_CONFIG.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-[#B89B6A]/30 text-xs sm:text-sm font-medium text-[#FAF7F2] shadow-sm"
              >
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* 가격 표시 및 신청 상태 */}
          <div className="pt-8 max-w-md mx-auto">
            <div className="p-6 rounded-3xl bg-[#161412] border border-[#B89B6A]/40 shadow-2xl space-y-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xs text-[#B89B6A] font-bold uppercase tracking-wider">기획 판매가</span>
                <span className="text-3xl sm:text-4xl font-black text-[#FAF7F2]">
                  {EMOTIONAL_PUBLISHING_CONFIG.price.amount}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light break-keep">
                {EMOTIONAL_PUBLISHING_CONFIG.price.subNotice}
              </p>

              {/* 비활성 신청 버튼 (결제 미연동 안내) */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-zinc-800 text-zinc-400 font-bold text-sm sm:text-base cursor-not-allowed flex items-center justify-center gap-2 border border-white/10"
                title="과정 정식 오픈 준비 중입니다."
              >
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span>{EMOTIONAL_PUBLISHING_CONFIG.ctaText}</span>
              </button>

              <div className="pt-1">
                <a
                  href={EMOTIONAL_PUBLISHING_CONFIG.notificationUrl}
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
              {EMOTIONAL_PUBLISHING_CONFIG.price.note}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02. 공감과 문제 제기
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#0F0E0D]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Empathy & Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              언젠가 내 이름으로 책 한 권 내고 싶었다면
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
              처음부터 긴 소설이나 전문서를 쓸 필요는 없습니다.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed break-keep max-w-2xl mx-auto">
              내가 살아온 이야기, 오래 간직한 사진, 마음에 남은 시 한 편도 한 권의 책을 시작하는 훌륭한 재료가 됩니다.
              AI와 함께라면 누구나 자신의 감성을 온전히 담은 첫 종이책을 완성할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03. 이 과정의 세 가지 결과
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Core Achievements
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              배움에서 끝나지 않는 세 가지 성취
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              단순히 강의 영상만 시청하고 끝나는 교육이 아닌, 손에 잡히는 출판 결과물과 공인된 자격증으로 연결됩니다.
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04. 내가 만들 수 있는 책 8종 (선택형)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#0F0E0D]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              8 Book Formats
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              당신의 이야기는 어떤 책이 되고 싶나요?
            </h2>
            <div className="p-3.5 rounded-2xl bg-[#B89B6A]/10 border border-[#B89B6A]/30 text-xs sm:text-sm text-[#E6C99B] font-medium break-keep">
              ★ 8가지 도서 형식을 모두 제작할 필요 없이, <strong>내가 가장 만들고 싶은 1가지 책 유형을 선택</strong>하여 완성합니다.
            </div>
          </div>

          {/* 8종 카드 그리드 (PC 4열, 모바일 1~2열) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BOOK_TYPES.map((book) => (
              <div
                key={book.id}
                className="p-6 rounded-2xl bg-[#141210] border border-white/10 hover:border-[#B89B6A]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B89B6A]">
                      TYPE {book.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      {book.mockupTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#FAF7F2] group-hover:text-[#E6C99B] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#B89B6A] font-medium">
                      {book.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                    {book.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {book.tags.map((tag, tIdx) => (
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05. 실제 출판 결과물 소개
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Student Publications
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              수강생의 아이디어가 실제 책이 되었습니다
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              ※ 자명스쿨 기존 출판 실습 교육 수강생들의 실제 출판 결과물 및 후기입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_WORKS.map((work) => (
              <div
                key={work.id}
                className="p-6 rounded-3xl bg-[#141210] border border-white/10 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#B89B6A]/15 text-[#E6C99B] border border-[#B89B6A]/30">
                      {work.tag}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      ✓ {work.resultStatus}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#FAF7F2] break-keep">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#B89B6A] font-medium">
                    {work.bookType}
                  </p>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                    &ldquo;{work.review}&rdquo;
                  </p>
                </div>

                <p className="text-[11px] text-zinc-500 pt-3 border-t border-white/5">
                  {work.authorNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06. 핵심 커리큘럼 6개 모듈
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#0F0E0D]">
        <div className="max-w-4xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Curriculum Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              아이디어부터 종이책 출판까지, 단계별로 완성합니다
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              총 6개 실전 모듈을 따라가면, 어느새 내 손으로 한 권의 책 원고와 표지가 완성됩니다.
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
            ※ 상세 영상 편수와 러닝타임은 정식 오픈 시 공지됩니다.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07. VOD 학습 방식
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              내 속도에 맞춰 배우고, 내 작품으로 완성합니다
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto break-keep">
              정해진 수업 시간에 쫓기지 않고, 언제든 원하는 시간에 반복 시청하며 단계별로 실습합니다.
            </p>
          </div>

          {/* 7단계 학습 흐름 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { step: "01", title: "과정 신청", desc: "온라인 VOD 수강 등록" },
              { step: "02", title: "VOD 강의 시청", desc: "원하는 시간에 무제한 반복" },
              { step: "03", title: "출판 템플릿 실습", desc: "캔바·프롬프트 도구 활용" },
              { step: "04", title: "책 1권 파일 완성", desc: "내지 PDF & 표지 제작" },
              { step: "05", title: "비공개 과제 제출", desc: "전용 포트폴리오 양식 업로드" },
              { step: "06", title: "기준 평가", desc: "출판 규격 및 완성도 심사" },
              { step: "07", title: "자격증 취득", desc: "합격 시 공인 민간자격 발급" },
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 08. 자격 취득 및 작품 평가 (KDMCA 등록정보)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#0F0E0D]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Official Certification
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              책 한 권의 완성이, 배운 역량을 보여주는 출발점이 됩니다
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09. 수강 혜택 6종
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Practical Materials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              첫 책을 완성하는 데 필요한 실전 자료
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSE_BENEFITS.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B89B6A]">
                    KIT {b.number}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    제공 예정
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#FAF7F2] break-keep">
                  {b.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed break-keep">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10. 이런 분께 추천합니다
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#0F0E0D]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Recommended For
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              이런 분께 추천합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11. 원데이와 자격과정 비교
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
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
              <div className="text-[#D6C6A8]">AI 종이책 출판 원데이</div>
              <div className="text-[#E6C99B]">감성출판지도사 VOD 과정</div>
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

          <div className="text-center">
            <Link
              href="/paperbook"
              className="text-xs sm:text-sm text-[#D6C6A8] hover:text-white underline underline-offset-4 transition-colors"
            >
              → 실시간으로 빠르게 경험하는 &lsquo;AI 감성 종이책 출판 원데이 클래스&rsquo; 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12. 가격 및 신청 안내
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#0F0E0D]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Enrollment & Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              내 이름의 책 한 권, 그리고 새로운 배움의 증명
            </h2>
          </div>

          <div className="p-8 rounded-3xl bg-[#161412] border border-[#B89B6A]/30 space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-zinc-400">상품명</span>
              <h3 className="text-xl font-bold text-[#FAF7F2]">
                감성출판지도사 1급 실전 VOD 자격과정
              </h3>
              <p className="text-3xl sm:text-4xl font-black text-[#E6C99B] pt-2">
                99,000원
              </p>
            </div>

            <div className="text-left text-xs text-zinc-300 space-y-2 p-5 rounded-2xl bg-black/40 border border-white/5">
              <p className="font-bold text-[#B89B6A]">포함 항목</p>
              <p>• VOD 정규 교육 과정 전체 시청 권한</p>
              <p>• 책 유형별 실습 템플릿 및 프롬프트 자료 일체</p>
              <p>• 포트폴리오 작품 제출 및 1회차 자격 검정 심사</p>
              <p>• 최종 합격 시 감성출판지도사 1급 민간자격증 발급</p>
              
              <div className="pt-3 border-t border-white/10 space-y-1 text-zinc-500 text-[11px]">
                <p>※ 별도 비용 안내: 실물 책 POD 인쇄·배송비 및 외부 유료 도구 이용료는 본인 부담입니다.</p>
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
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 13. FAQ
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase block">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] break-keep">
              자주 묻는 질문
            </h2>
          </div>

          <EmotionalPublishingFaqAccordion />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 14. 취소 및 환불 안내 (공통 컴포넌트)
         ───────────────────────────────────────────────────────────── */}
      <CourseRefundPolicySection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 15. 마지막 CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 text-center bg-gradient-to-b from-[#0C0B0A] to-[#141210]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-snug break-keep">
            당신이 살아온 시간이 <br className="hidden sm:inline" />
            한 권의 책이 될 수 있습니다.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-light break-keep">
            누군가에게는 작은 에세이, 누군가에게는 인생의 기록, 또 누군가에게는 새로운 작가 활동의 시작. <br className="hidden sm:inline" />
            자명스쿨에서 나만의 책을 완성하고 배움의 다음 단계를 준비해보세요.
          </p>
          <div className="pt-4">
            <a
              href={EMOTIONAL_PUBLISHING_CONFIG.notificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-[#B89B6A] to-[#9E7C47] text-[#0C0B0A] font-bold text-sm tracking-wider hover:brightness-110 transition-all shadow-xl"
            >
              <span>과정 오픈 알림 받기</span>
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
