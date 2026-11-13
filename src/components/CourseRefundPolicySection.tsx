'use client';

import React from "react";
import Link from "next/link";

interface CourseRefundPolicySectionProps {
  className?: string;
}

export default function CourseRefundPolicySection({
  className = "",
}: CourseRefundPolicySectionProps) {
  return (
    <section 
      aria-label="수강 취소 및 환불 안내"
      className={`w-full py-16 md:py-24 border-t border-[#B89B6A]/20 bg-[#0C0C0F] text-white selection:bg-[#B89B6A]/30 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* 상단 섹션 타이틀 */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase px-3.5 py-1 rounded-full bg-[#B89B6A]/10 border border-[#B89B6A]/25">
            Cancellation & Refund Policy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] tracking-tight">
            수강 취소 및 환불 안내
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed break-keep">
            자명스쿨은 「전자상거래 등에서의 소비자보호에 관한 법률」 및 「평생교육법 시행령」을 준수하며, 
            모든 수강생의 권익 보호를 위해 공정하고 투명한 환불 규정을 기본 펼침 상태로 명확히 안내합니다.
          </p>
        </div>

        {/* 핵심 환불 기준 카드 (KCP 심사용: 아코디언 없이 기본 모두 펼쳐진 상태) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* 카드 1. 실시간 라이브 & 원데이클래스 환불 기준 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#141418] border border-[#B89B6A]/25 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B89B6A] shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] tracking-tight">
                  실시간 라이브 코칭 & 원데이클래스
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-5 break-keep leading-relaxed font-light">
                실시간 줌(Zoom) 또는 일정 지정형 소그룹 클래스 기준입니다.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-zinc-300 font-medium">수업 시작 3일 전까지</span>
                  <strong className="text-[#E6C99B] font-bold shrink-0">100% 전액 환불</strong>
                </li>
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-zinc-300 font-medium">수업 시작 2일 전 ~ 1일 전까지</span>
                  <strong className="text-[#FAF7F2] font-semibold shrink-0">80% 환불</strong>
                </li>
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-zinc-300 font-medium">수업 당일 시작 전까지</span>
                  <strong className="text-[#FAF7F2] font-semibold shrink-0">50% 환불</strong>
                </li>
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                  <span className="text-zinc-400 font-medium">수업 시작 이후</span>
                  <span className="text-red-400 font-bold shrink-0">환불 불가 (자료 제공)</span>
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-zinc-500 leading-relaxed break-keep pt-1">
              ※ 수업 시작 이후 불참 시 녹화본 또는 보충 학습자료 제공으로 갈음할 수 있습니다.
            </p>
          </div>

          {/* 카드 2. 온라인 정규 과정 & VOD 강의 환불 기준 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#141418] border border-[#B89B6A]/25 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B89B6A] shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] tracking-tight">
                  온라인 정규 과정 & VOD 콘텐츠
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-5 break-keep leading-relaxed font-light">
                온라인 동영상 강의 및 정규 커리큘럼 과정 기준입니다.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-zinc-300 font-medium">결제 후 7일 이내 & 미수강</span>
                  <strong className="text-[#E6C99B] font-bold shrink-0">100% 전액 환불</strong>
                </li>
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-zinc-300 font-medium">결제 후 7일 이내 일부 시청</span>
                  <strong className="text-[#FAF7F2] font-semibold shrink-0">수강 회차 공제 후 부분 환불</strong>
                </li>
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-zinc-300 font-medium">디지털 강의자료 다운로드 시</span>
                  <span className="text-zinc-400 font-medium shrink-0">해당 자료 상당액 공제</span>
                </li>
                <li className="flex items-start justify-between gap-3 p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                  <span className="text-zinc-400 font-medium">결제 후 7일 초과 또는 기간 1/2 경과</span>
                  <span className="text-red-400 font-bold shrink-0">환불 불가</span>
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-zinc-500 leading-relaxed break-keep pt-1">
              ※ 평생교육법 학습비 반환 기준에 따라 잔여 강의 분량에 대한 정산이 이루어집니다.
            </p>
          </div>

        </div>

        {/* 카드 3. 환불 신청 방법 및 처리 절차 (KCP 심사 필수 표기) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#121216] border border-white/10 space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#B89B6A]">✦</span>
            <h3 className="text-sm sm:text-base font-bold text-[#FAF7F2]">
              환불 신청 방법 및 처리 안내
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-[#B89B6A] uppercase block">STEP 1. 접수</span>
              <p className="text-white font-medium">고객센터 접수</p>
              <p className="text-zinc-400 font-light leading-relaxed">
                카카오톡 채널 &apos;자명스쿨&apos; 1:1 상담 또는 이메일(buzasun@naver.com) 접수
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-[#B89B6A] uppercase block">STEP 2. 확인</span>
              <p className="text-white font-medium">기재 정보 확인</p>
              <p className="text-zinc-400 font-light leading-relaxed">
                주문자 성명, 연락처, 강의명, 결제수단 확인 후 환불 승인
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-[#B89B6A] uppercase block">STEP 3. 처리</span>
              <p className="text-white font-medium">결제 취소 처리</p>
              <p className="text-zinc-400 font-light leading-relaxed">
                신용카드 3~5영업일(승인 취소), 계좌이체 2~3영업일 소요
              </p>
            </div>
          </div>
        </div>

        {/* 전체 환불 정책 전문 링크 */}
        <div className="text-center pt-2">
          <Link
            href="/refund"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-[#B89B6A]/30 hover:border-[#B89B6A] text-xs sm:text-sm font-medium text-[#D6C6A8] hover:text-white transition-all duration-300 group"
          >
            <span>전체 취소·환불 정책 전문 보기</span>
            <span className="text-[#B89B6A] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
