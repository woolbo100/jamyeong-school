'use client';

import React from "react";
import { ArrowRight, ArrowDown, Check, Sparkles } from "lucide-react";

export default function KdmcaSignatureSection() {
  const professionalPoints = [
    "자기변화 + 코칭 원리",
    "무의식 · 신념 · NLP",
    "풍요 · 머니마인드",
    "AI 기반 미래자아 시각화",
    "개인 실습 · 변화 챌린지",
    "실전 코칭 역량",
  ];

  const masterPoints = [
    "타인 코칭 + 심화 상담·코칭기법",
    "나만의 코칭 프로그램 개발",
    "AI 상담 · 코칭 시스템 구축",
    "디지털 코칭 서비스 제작",
    "강의 · 교육 프로그램 설계",
    "나만의 코칭 브랜드 구축",
  ];

  return (
    <section
      id="signature-path"
      className="w-full bg-[#0B1523] text-[#FAF9F6] border-b border-[#1E324A] py-24 sm:py-32 relative overflow-hidden scroll-mt-18"
    >
      {/* 은은한 앰비언트 골드 & 딥네이비 라이트 효과 (과하지 않은 품격 유지) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(181,154,104,0.12)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,58,95,0.3)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        {/* =========================================================================
            1. 공식 엠블럼 (KDMCA Official Vector Seal)
        ========================================================================= */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="relative group p-1 mb-4">
            {/* 엠블럼 외곽 은은한 골드 글로우 */}
            <div className="absolute inset-0 rounded-full bg-[#B59A68]/15 blur-md group-hover:bg-[#B59A68]/25 transition-all duration-500" />

            {/* 정교한 SVG 메달형 인증마크 엠블럼 */}
            <svg
              className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 transition-transform duration-500 group-hover:scale-105"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="KDMCA 공식 엠블럼"
            >
              {/* 외부 얇은 골드 링 */}
              <circle
                cx="60"
                cy="60"
                r="57"
                stroke="#B59A68"
                strokeWidth="1.2"
                strokeOpacity="0.85"
              />
              {/* 내부 보조 링 */}
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="#B59A68"
                strokeWidth="0.6"
                strokeDasharray="2 3"
                strokeOpacity="0.6"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="#0F1E33"
                stroke="#B59A68"
                strokeWidth="0.8"
              />

              {/* 엠블럼 중앙 KDMCA 각인 */}
              <text
                x="60"
                y="36"
                textAnchor="middle"
                fill="#B59A68"
                fontSize="6.5"
                fontFamily="sans-serif"
                fontWeight="700"
                letterSpacing="0.28em"
              >
                KDMCA
              </text>

              {/* 중앙 심볼: 지혜와 코칭을 상징하는 기하학적 나침반/스타 모티프 */}
              <path
                d="M60 42L62.5 54L74.5 56.5L62.5 59L60 71L57.5 59L45.5 56.5L57.5 54L60 42Z"
                fill="#B59A68"
                fillOpacity="0.9"
              />
              <circle cx="60" cy="56.5" r="1.5" fill="#0F1E33" />

              {/* 엠블럼 하단 텍스트 */}
              <text
                x="60"
                y="81"
                textAnchor="middle"
                fill="#FAF9F6"
                fontSize="5"
                fontFamily="sans-serif"
                fontWeight="600"
                letterSpacing="0.18em"
              >
                DIGITAL MIND COACHING
              </text>
              <text
                x="60"
                y="89"
                textAnchor="middle"
                fill="#B59A68"
                fontSize="4"
                fontFamily="sans-serif"
                fontWeight="500"
                letterSpacing="0.14em"
              >
                PROFESSIONAL · MASTER
              </text>

              {/* 양옆 장식 점 */}
              <circle cx="28" cy="56.5" r="1" fill="#B59A68" />
              <circle cx="92" cy="56.5" r="1" fill="#B59A68" />
            </svg>
          </div>

          {/* 영문 골드 라벨 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14253D]/90 border border-[#B59A68]/30 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B59A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#CDB88B] uppercase font-semibold">
              KDMCA — SIGNATURE CERTIFICATION
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.25]">
            디지털마인드코칭 대표 자격체계
          </h2>

          {/* 영문 서브 타이틀 */}
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#B59A68] uppercase font-semibold mt-2.5 block">
            DIGITAL MIND COACHING PATH
          </span>

          {/* 소개 문구 (PC 최적화 폭) */}
          <div className="mt-5 max-w-[720px] text-xs sm:text-sm text-[#C4CDD5] leading-relaxed space-y-1.5 font-normal">
            <p>
              인간의 마음과 변화에 대한 이해를 바탕으로 AI와 디지털 기술을 연결합니다.
            </p>
            <p>
              한국디지털마인드코칭협회의 핵심 교육체계는
              ‘전문가 → 마스터’ 단계로 성장하며,
              자기변화와 코칭 역량을 넘어 자신만의 프로그램과 디지털 서비스를 구축하는 것을 목표로 합니다.
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. PROFESSIONAL → MASTER 2대 대형 카드
        ========================================================================= */}
        <div className="mt-14 lg:mt-18 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* -------------------------------------------------------------
                [CARD 1] 01 · PROFESSIONAL (전문가)
            ------------------------------------------------------------- */}
            <div className="bg-[#101F33]/85 backdrop-blur-xs border border-[#B59A68]/30 rounded-xs p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#B59A68]/70 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)] group">
              <div>
                {/* 상단 라벨 & 상태 뱃지 */}
                <div className="flex items-center justify-between gap-2 pb-5 border-b border-[#1E344F]">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#B59A68]">
                    01 · PROFESSIONAL
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold text-[#B59A68] bg-[#0A131F] border border-[#B59A68]/40 rounded-xs">
                    KDMCA SIGNATURE PROGRAM
                  </span>
                </div>

                {/* 메인 명칭 & 카피 */}
                <div className="pt-6 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAF9F6] tracking-tight group-hover:text-[#E8DCC4] transition-colors">
                    디지털마인드코칭전문가
                  </h3>
                  <p className="text-sm text-[#D1D5DB] leading-snug font-medium whitespace-pre-line">
                    마음을 이해하고,{"\n"}변화를 코칭하는 전문가
                  </p>
                  <div className="pt-1">
                    <span className="text-[11px] font-mono tracking-[0.18em] text-[#A68253] font-semibold uppercase">
                      MIND · COACHING · CHANGE
                    </span>
                  </div>
                </div>

                {/* 핵심 커리큘럼 불릿 리스트 */}
                <div className="pt-7 pb-6">
                  <span className="text-[11px] font-mono text-[#8FA0B2] uppercase tracking-wider block mb-3 font-medium">
                    CORE CURRICULUM
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                    {professionalPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-4 h-4 rounded-xs bg-[#14253D] border border-[#B59A68]/50 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#B59A68]" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 카드 하단 강조 영역 */}
              <div className="pt-5 border-t border-[#1E344F]">
                <div className="p-4 bg-[#0B1523]/90 border border-[#B59A68]/25 rounded-xs space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#B59A68] uppercase font-bold block">
                    COACHING PROFESSIONAL
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#FAF9F6] flex items-center gap-1.5">
                    <span>→ 코칭 역량 완성</span>
                  </p>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed pt-0.5 break-keep">
                    사람의 마음과 변화 원리를 이해하고
                    <br className="hidden sm:inline" />{" "}
                    실제 마인드코칭을 수행할 수 있는 전문 역량을 완성합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                [CARD 2] 02 · MASTER (마스터)
            ------------------------------------------------------------- */}
            <div className="bg-[#101F33]/85 backdrop-blur-xs border border-[#B59A68]/45 rounded-xs p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#D6C6A8] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(181,154,104,0.18)] group relative overflow-hidden">
              {/* 상단 미세 골드 하이라이트 라인 */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B59A68] to-transparent opacity-80" />

              <div>
                {/* 상단 라벨 & 상태 뱃지 */}
                <div className="flex items-center justify-between gap-2 pb-5 border-b border-[#1E344F]">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#CDB88B] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#CDB88B]" />
                    <span>02 · MASTER</span>
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold text-[#FAF9F6] bg-[#B59A68]/20 border border-[#B59A68]/60 rounded-xs">
                    KDMCA ADVANCED MASTER
                  </span>
                </div>

                {/* 메인 명칭 & 카피 */}
                <div className="pt-6 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAF9F6] tracking-tight group-hover:text-[#FAF9F6] transition-colors">
                    디지털마인드코칭마스터
                  </h3>
                  <p className="text-sm text-[#D1D5DB] leading-snug font-medium whitespace-pre-line">
                    코칭을 넘어,{"\n"}나만의 방법론과 서비스를 만드는 마스터
                  </p>
                  <div className="pt-1">
                    <span className="text-[11px] font-mono tracking-[0.18em] text-[#CDB88B] font-semibold uppercase">
                      COACHING · AI · SERVICE · EDUCATION
                    </span>
                  </div>
                </div>

                {/* 핵심 커리큘럼 불릿 리스트 */}
                <div className="pt-7 pb-6">
                  <span className="text-[11px] font-mono text-[#8FA0B2] uppercase tracking-wider block mb-3 font-medium">
                    ADVANCED CURRICULUM
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                    {masterPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-4 h-4 rounded-xs bg-[#1A3150] border border-[#B59A68]/70 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#E8DCC4]" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 카드 하단 강조 영역 */}
              <div className="pt-5 border-t border-[#1E344F]">
                <div className="p-4 bg-[#0B1523]/90 border border-[#B59A68]/40 rounded-xs space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#CDB88B] uppercase font-bold block">
                    DIGITAL MIND COACHING MASTER
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#FAF9F6] flex items-center gap-1.5">
                    <span>→ 교육 · 서비스 · 브랜드까지 완성</span>
                  </p>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed pt-0.5 break-keep">
                    확보한 코칭 역량을 기반으로 AI와 디지털 기술을 결합하여 독자적 서비스와 교육 브랜드를 설계 및 운영합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              PC / 모바일 성장 연결 인디케이터 (PROFESSIONAL → MASTER)
          ------------------------------------------------------------- */}
          {/* PC 중앙 브릿지 뱃지 */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
            <div className="bg-[#0B1523] border border-[#B59A68] px-3.5 py-2 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.6)] flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#B59A68] uppercase font-bold">
                GROWTH PATH
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B59A68]" />
            </div>
          </div>

          {/* 모바일 세로 연결 인디케이터 (두 카드 사이가 아닌 모바일 표시용) */}
          <div className="lg:hidden flex items-center justify-center my-4 py-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#101F33] border border-[#B59A68]/40 rounded-full text-xs text-[#B59A68]">
              <span className="text-[11px] font-mono tracking-wider font-bold">
                STEP UP: PROFESSIONAL
              </span>
              <ArrowDown className="w-3.5 h-3.5 text-[#B59A68]" />
              <span className="text-[11px] font-mono tracking-wider font-bold">
                MASTER
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. 두 자격의 핵심 차이 강조 (협회 교육철학 공식 선언문)
        ========================================================================= */}
        <div className="mt-14 sm:mt-16 max-w-[920px] mx-auto">
          <div className="relative bg-[#0F1E33]/90 border border-[#B59A68]/40 p-7 sm:p-10 text-center rounded-xs shadow-lg">
            {/* 좌우 상단 미세 십자 모서리 포인트 */}
            <div className="absolute top-2 left-2 text-[#B59A68]/40 text-xs font-mono">+</div>
            <div className="absolute top-2 right-2 text-[#B59A68]/40 text-xs font-mono">+</div>
            <div className="absolute bottom-2 left-2 text-[#B59A68]/40 text-xs font-mono">+</div>
            <div className="absolute bottom-2 right-2 text-[#B59A68]/40 text-xs font-mono">+</div>

            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#B59A68] uppercase font-semibold block mb-3">
              KDMCA CORE PHILOSOPHY
            </span>

            <blockquote className="text-base sm:text-xl lg:text-[22px] font-bold text-[#FAF9F6] leading-relaxed tracking-tight break-keep">
              “전문가는 사람의 변화를 코칭하고,<br className="hidden sm:inline" />
              마스터는 변화의 방법을 시스템으로 만들어 세상에 전합니다.”
            </blockquote>

            <div className="mt-4 pt-4 border-t border-[#1E344F] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#CDB88B] uppercase font-semibold">
                COACH → CREATE → SYSTEMIZE → TEACH
              </span>
            </div>
          </div>

          {/* 자격 등록 안내 투명성 고지 (요청서 지침 9번 준수) */}
          <p className="mt-4 text-center text-[11px] font-mono text-[#7D8B9B] tracking-wide">
            * 본 대표 자격체계(전문가·마스터)는 KDMCA의 핵심 시그니처 커리큘럼이며, 현재 민간자격 등록 절차를 준비 중에 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
