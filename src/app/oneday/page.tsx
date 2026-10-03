import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ONEDAY_CLASSES, OnedayClassItem } from "@/data/onedayClasses";

export const metadata: Metadata = {
  title: "원데이클래스 | 자명스쿨",
  description: "배우는 것에서 끝나지 않고, AI와 디지털 도구를 활용해 직접 하나의 결과물을 완성하는 자명스쿨 원데이 클래스",
};

export default function OnedayPage() {
  return (
    <main className="relative min-h-screen bg-[#F9F6F0] text-[#2E2723] z-10 selection:bg-[#C6A66B]/20 selection:text-[#2E2723]">
      {/* ────────────────────────
          1. HERO SECTION
         ──────────────────────── */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-14 px-6 border-b border-[#E8DFD3]/80 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6]">
        <div className="max-w-4xl mx-auto text-center">
          {/* 작은 라벨 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A66B]/10 border border-[#C6A66B]/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8E6D38] uppercase">
              JAMYUNG SCHOOL · ONE DAY CLASS
            </span>
          </div>

          {/* 메인 제목 */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2E2723] mb-5 leading-tight break-keep">
            하루 만에 하나를 완성하는 <br className="hidden sm:inline" />
            원데이 클래스
          </h1>

          {/* 서브카피 */}
          <p className="text-base md:text-xl font-medium text-[#4A3F35] max-w-2xl mx-auto mb-3 leading-relaxed break-keep">
            배우는 것에서 끝나지 않고, AI와 디지털 도구를 활용해 <br className="hidden sm:inline" />
            직접 하나의 결과물을 완성하는 실전 클래스입니다.
          </p>

          {/* 보조 설명 */}
          <p className="text-sm md:text-base text-[#7C6656] max-w-xl mx-auto leading-relaxed break-keep">
            전자책, 홈페이지, AI 도구, 콘텐츠, 미니앱 등 <br className="hidden sm:inline" />
            지금 필요한 디지털 결과물을 직접 만들어보세요.
          </p>
        </div>
      </section>

      {/* ────────────────────────
          2. ONEDAY CLASS CARDS GRID
         ──────────────────────── */}
      <section className="py-14 md:py-20 px-6 max-w-7xl mx-auto">
        {/* 과정 개수 및 안내 라벨 */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8DFD3]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#2E2723]">개설 원데이 클래스</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#C6A66B]/15 text-[#8E6D38] font-bold">
              총 {ONEDAY_CLASSES.length}개
            </span>
          </div>
          <span className="text-xs text-[#7C6656]">
            * 수시 모집 형태로 일정 확정 시 순차 접수 시작됩니다.
          </span>
        </div>

        {/* 8개 원데이 클래스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ONEDAY_CLASSES.map((item: OnedayClassItem) => {
            const isOpen = item.status === "open";
            const isScheduled = item.status === "scheduled";
            const isClosed = item.status === "closed";

            // 상태 배지 텍스트 및 스타일
            let statusBadgeText = "모집예정";
            let statusBadgeStyle = "bg-[#FAF2E6] text-[#8A6A3F] border-[#E8DFD3]";

            if (isOpen) {
              statusBadgeText = "모집중";
              statusBadgeStyle = "bg-[#C6A66B]/15 text-[#8E6D38] border-[#C6A66B]/30";
            } else if (isClosed) {
              statusBadgeText = "마감";
              statusBadgeStyle = "bg-zinc-100 text-zinc-500 border-zinc-200";
            }

            return (
              <div
                key={item.id}
                className="group relative rounded-[28px] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 ease-out bg-white border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.04)] hover:shadow-[0_12px_32px_rgba(46,39,35,0.08)] hover:border-[#D6C6A8] hover:-translate-y-1"
              >
                <div>
                  {/* 상단: 카테고리 + 모집 상태 배지 */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] md:text-xs font-bold tracking-wider text-[#7C6656] uppercase">
                      {item.category}
                    </span>

                    {/* 모집 상태 배지 */}
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold border ${statusBadgeStyle}`}
                    >
                      {statusBadgeText}
                    </span>
                  </div>

                  {/* 클래스명 */}
                  <h2 className="text-xl font-bold text-[#2E2723] leading-snug group-hover:text-[#8E6D38] transition-colors break-keep mb-3">
                    {item.title}
                  </h2>

                  {/* 설명 */}
                  <p className="text-sm text-[#5C4C40] leading-relaxed mb-6 font-normal break-keep min-h-[64px]">
                    {item.description}
                  </p>

                  {/* 날짜/시간/수강료 메타데이터 (등록 시 조건부 렌더링) */}
                  {(item.date || item.duration || item.price) && (
                    <div className="mb-5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EBE3D7] text-xs text-[#6E5A4D] space-y-1">
                      {item.date && (
                        <div className="flex items-center justify-between">
                          <span className="text-[#8E6D38] font-semibold">일정</span>
                          <span>{item.date}</span>
                        </div>
                      )}
                      {item.duration && (
                        <div className="flex items-center justify-between">
                          <span className="text-[#8E6D38] font-semibold">시간</span>
                          <span>{item.duration}</span>
                        </div>
                      )}
                      {item.price && (
                        <div className="flex items-center justify-between">
                          <span className="text-[#8E6D38] font-semibold">수강료</span>
                          <span className="font-bold text-[#2E2723]">{item.price}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 핵심 키워드 태그 */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#F7F2EB] text-[#6E5A4D] font-medium border border-[#EBE3D7]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 하단: 신청 버튼 영역 */}
                <div className="pt-4 border-t border-[#F2EAE0]">
                  {isOpen && item.applicationUrl ? (
                    <a
                      href={item.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[46px] px-5 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 group/btn"
                    >
                      <span>신청하기</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  ) : isOpen && !item.applicationUrl ? (
                    <button
                      type="button"
                      disabled
                      className="w-full min-h-[46px] px-5 rounded-xl bg-[#EDE6DC] text-[#8C7B6E] text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#A8988B]" />
                      <span>신청 오픈 준비중</span>
                    </button>
                  ) : isClosed ? (
                    <button
                      type="button"
                      disabled
                      className="w-full min-h-[46px] px-5 rounded-xl bg-zinc-100 text-zinc-400 text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <span>이번 클래스 마감</span>
                    </button>
                  ) : (
                    /* scheduled 상태 */
                    <button
                      type="button"
                      disabled
                      className="w-full min-h-[46px] px-5 rounded-xl bg-[#EDE6DC] text-[#8C7B6E] text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                      title="클래스 일정이 확정되면 신청이 오픈됩니다."
                    >
                      <span className="w-2 h-2 rounded-full bg-[#A8988B]" />
                      <span>다음 클래스 준비중</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ────────────────────────
          3. BRAND PHILOSOPHY SECTION (DARK CONTRAST)
         ──────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-[#1D1714] text-white relative overflow-hidden">
        {/* 미세한 골드 빛 오라 배경 */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(800px circle at 50% 50%, rgba(198,166,107,0.25), transparent 70%)"
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block text-[#C6A66B] font-semibold text-xs tracking-[0.3em] uppercase">
            JAMYUNG WORKSHOP
          </span>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug tracking-tight text-[#FAF7F2] break-keep">
            배우는 것에서 끝나지 않고, <br />
            직접 만들어 내 것으로 만듭니다.
          </h2>

          <div className="py-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-[#C6A66B]/30 text-[#D6C6A8] font-bold text-xs md:text-sm tracking-widest">
              LEARN → PRACTICE → ONE RESULT
            </span>
          </div>

          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto break-keep">
            원데이 클래스는 복잡한 이론 대신 실행에 집중합니다. <br className="hidden sm:inline" />
            단 몇 시간 만에 실제로 작동하고 손에 잡히는 디지털 결과물을 완성해보세요.
          </p>
        </div>
      </section>

      {/* ────────────────────────
          4. BOTTOM GUIDANCE / FAQ SECTION
         ──────────────────────── */}
      <section className="py-20 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-[32px] bg-white border border-[#E8DFD3] shadow-[0_8px_30px_rgba(46,39,35,0.04)]">
          <span className="text-xs font-bold tracking-widest text-[#8E6D38] uppercase mb-3 block">
            CLASS GUIDE
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2E2723] mb-4 break-keep">
            어떤 클래스를 먼저 들어야 할지 고민되시나요?
          </h3>
          <p className="text-base text-[#6E5A4D] max-w-xl mx-auto mb-8 leading-relaxed break-keep">
            각 원데이 클래스는 초보자도 쉽게 따라올 수 있도록 단계별 실습으로 진행됩니다. <br />
            더 깊이 있는 자격·전문 과정을 원하신다면 정규과정도 함께 살펴보세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* 정규과정 링크 */}
            <Link
              href="/apply"
              className="w-full sm:w-auto min-h-[50px] px-8 rounded-full bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-sm font-bold flex items-center justify-center gap-2 shadow transition-all duration-200"
            >
              <span>자명스쿨 정규과정 보기</span>
              <span className="text-xs">→</span>
            </Link>

            {/* 1:1 상담 카카오톡 */}
            <a
              href="https://pf.kakao.com/_IxguMn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[50px] px-8 rounded-full bg-white hover:bg-[#FAF7F2] text-[#4A3F35] text-sm font-semibold border border-[#D6C6A8] flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>1:1 클래스 문의 및 추천</span>
            </a>
          </div>

          <p className="text-xs text-[#9E8E81] mt-6">
            * 원데이 클래스 신청 일정 알림은 자명스쿨 채널을 통해 우선 공지됩니다.
          </p>
        </div>
      </section>
    </main>
  );
}
