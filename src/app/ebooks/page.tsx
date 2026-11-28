import React from "react";
import type { Metadata } from "next";
import { BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "전자책 | 자명스쿨",
  description: "AI를 활용한 창작과 지식창업, 새로운 수익화의 가능성을 담은 자명스쿨의 실전 전자책을 만나보세요.",
};

export interface EbookItem {
  id: string;
  englishLabel: string;
  category: string;
  title: string;
  description: string;
  price: string;
  status: "scheduled" | "available";
  statusText: string;
  detailUrl?: string | null;
}

const EBOOKS_DATA: EbookItem[] = [
  {
    id: "ai-saju-business",
    englishLabel: "AI KNOWLEDGE BUSINESS",
    category: "AI 지식창업",
    title: "AI 사주 부업 실전",
    description: "AI를 활용한 사주 콘텐츠 제작부터 디지털 상품 기획, 서비스 구축과 수익화까지 배우는 실전 가이드.",
    price: "19,000원",
    status: "scheduled",
    statusText: "출간 예정",
    detailUrl: null,
  },
  {
    id: "ebook-sales-automation",
    englishLabel: "EBOOK SALES AUTOMATION",
    category: "AI 판매 자동화",
    title: "전자책 자동화 퍼널",
    description: "전자책 상품 기획부터 판매 페이지, 고객 유입, SNS 콘텐츠 활용 및 판매 자동화까지 연결하는 실전 가이드.",
    price: "19,000원",
    status: "scheduled",
    statusText: "출간 예정",
    detailUrl: null,
  },
];

export default function EbooksPage() {
  return (
    <main className="relative min-h-screen bg-[#F9F6F0] text-[#2E2723] z-10 selection:bg-[#C6A66B]/20 selection:text-[#2E2723]">
      {/* ────────────────────────
          1. HERO / TITLE SECTION
         ──────────────────────── */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-14 px-6 border-b border-[#E8DFD3]/80 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6]">
        <div className="site-container max-w-[1280px] mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* 영문 라벨 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A66B]/10 border border-[#C6A66B]/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8E6D38] uppercase">
                JAMYEONG EBOOKS
              </span>
            </div>

            {/* 메인 제목 */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2E2723] mb-4 leading-tight break-keep">
              전자책
            </h1>

            {/* 서브 카피 */}
            <p className="text-base md:text-xl font-medium text-[#4A3F35] max-w-2xl mx-auto mb-3 leading-relaxed break-keep">
              나의 가능성을 새로운 지식과 가치로.
            </p>

            {/* 설명 문구 */}
            <p className="text-sm md:text-base text-[#7C6656] max-w-2xl mx-auto leading-relaxed break-keep">
              AI를 활용한 창작과 지식창업, 새로운 수익화의 가능성을 담은 자명스쿨의 실전 전자책을 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────
          2. EBOOK CARDS SECTION
         ──────────────────────── */}
      <section className="py-14 md:py-20 px-6">
        <div className="site-container max-w-[1280px] mx-auto">
          {/* 상단 도서 개수 안내 라벨 */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8DFD3]">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#2E2723]">출간 도서</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#C6A66B]/15 text-[#8E6D38] font-bold">
                총 {EBOOKS_DATA.length}권
              </span>
            </div>
            <span className="text-xs text-[#7C6656]">
              * 출간 예정 도서는 순차적으로 상세페이지 및 구매가 오픈됩니다.
            </span>
          </div>

          {/* 전자책 상품 카드 2열 그리드 (PC: 가로 2열, 모바일: 세로 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {EBOOKS_DATA.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-[28px] p-7 md:p-8 h-full flex flex-col justify-between transition-all duration-300 ease-out bg-white border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.04)] hover:shadow-[0_12px_32px_rgba(46,39,35,0.08)] hover:border-[#D6C6A8] hover:-translate-y-1"
              >
                <div className="flex-1 flex flex-col">
                  {/* 상단: 영문 라벨 & 카테고리 + 상태 배지 */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#A8988B] uppercase">
                        {item.englishLabel}
                      </span>
                      <span className="text-xs md:text-sm font-bold text-[#8E6D38]">
                        {item.category}
                      </span>
                    </div>

                    {/* 상태 배지: 출간 예정 */}
                    <span className="text-xs px-3 py-1 rounded-full font-semibold border bg-[#FAF2E6] text-[#8A6A3F] border-[#E8DFD3]">
                      {item.statusText}
                    </span>
                  </div>

                  {/* 전자책 표지 이미지 영역 (세로 3:4 비율 모던 플레이스홀더) */}
                  <div className="relative aspect-[3/4] w-full max-w-[240px] sm:max-w-[260px] mx-auto mb-7 rounded-2xl bg-gradient-to-b from-[#FAF7F2] via-[#F4ECE1] to-[#EAE0D2] border border-[#E8DFD3] flex flex-col items-center justify-between p-6 text-center shadow-md group-hover:shadow-lg group-hover:border-[#D6C6A8] transition-all duration-300 overflow-hidden">
                    {/* 은은한 책 표지 광택 및 장식선 */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A66B]/10 blur-2xl pointer-events-none rounded-full" />
                    <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C6A66B]/30 to-transparent pointer-events-none" />

                    {/* 표지 상단 로고/배지 */}
                    <div className="pt-2 z-10">
                      <span className="text-[9px] font-bold tracking-[0.25em] text-[#8E6D38] uppercase block">
                        JAMYEONG EBOOK
                      </span>
                    </div>

                    {/* 표지 중앙 아이콘 및 도서명 */}
                    <div className="my-auto z-10 space-y-3 px-2">
                      <div className="w-12 h-12 rounded-xl bg-white/80 border border-[#C6A66B]/30 flex items-center justify-center mx-auto text-[#8E6D38] shadow-sm">
                        <BookOpen className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2E2723] leading-snug break-keep">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#7C6656] font-medium tracking-tight">
                        실전 완벽 가이드
                      </p>
                    </div>

                    {/* 표지 하단 저자/출판사 배지 */}
                    <div className="pb-1 z-10">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#8E6D38] px-2.5 py-0.5 rounded-full bg-white/70 border border-[#E8DFD3]">
                        <Sparkles className="w-3 h-3" />
                        <span>자명스쿨 기획</span>
                      </span>
                    </div>
                  </div>

                  {/* 상품명 */}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2E2723] mb-3 leading-snug break-keep group-hover:text-[#8E6D38] transition-colors">
                    {item.title}
                  </h2>

                  {/* 상품 설명 */}
                  <p className="text-sm text-[#5C4C40] leading-relaxed mb-6 font-normal break-keep min-h-[44px]">
                    {item.description}
                  </p>

                  {/* 판매 예정 가격 */}
                  <div className="mt-auto mb-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE3D7] flex items-center justify-between">
                    <span className="text-xs text-[#7C6656] font-medium">판매 예정 가격</span>
                    <span className="text-lg font-bold text-[#2E2723]">{item.price}</span>
                  </div>
                </div>

                {/* 하단: 상세 보기 버튼 (상세페이지 제작 전까지 비활성화) */}
                <div className="pt-4 border-t border-[#F2EAE0] mt-auto">
                  <button
                    type="button"
                    disabled
                    className="w-full min-h-[46px] px-5 rounded-xl bg-[#EDE6DC] text-[#8C7B6E] text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                    title="상세페이지 제작 준비 중입니다."
                  >
                    <span>상세 보기 (출간 준비중)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
