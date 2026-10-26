import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 브랜드 숏드라마 제작 실전 원데이 클래스 | 자명스쿨",
  description:
    "도파민 터지는 스토리부터 영상 완성까지, 1Day 만에 웹소설 작가의 서사 공식과 AI 전용 프롬프트 엔진으로 나만의 첫 숏드라마 1편을 직접 완성합니다.",
};

// ─────────────────────────────────────────────────────────────
// [원데이 클래스 기본 설정 데이터]
// 다른 원데이 강의를 제작할 때 이 객체와 아래 설정만 변경하여 쉽게 재사용할 수 있습니다.
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "AI CREATIVE 〉 영상 스토리텔링",
  badge: "자명스쿨 원데이 실전 마스터",
  titleMain: "내 취향대로 도파민 풀충전!",
  titleSub: "AI로 만드는 나만의 브랜드 숏드라마",
  titleAccent: ": 스토리 / 캐릭터 / 영상 입문 올인원",
  description:
    "배우 섭외도, 직접 촬영도 없이. AI가 처음이어도, 영상 제작이 처음이어도 괜찮습니다. 제공되는 대본 템플릿과 전용 프롬프트 스킬을 활용해, 이야기 기획부터 이미지·영상 제작, 편집과 유튜브 업로드까지 함께 따라갑니다.",
  meta: {
    format: "Zoom 실시간",
    duration: "3~4시간",
    difficulty: "누구나 (입문)",
    schedule: "[확정 필요]",
  },
  price: {
    badge: "원데이 런칭 특가",
    regular: "정규 VOD 200,000원 상당",
    current: "29,000",
    unit: "원",
    note: "* 커피 몇 잔 값으로 평생 소장 프롬프트 엔진과 1편 완성본 획득",
  },
  tags: ["AI영상", "숏드라마", "도파민서사", "캐릭터고정", "1Day완성"],
};

// ─────────────────────────────────────────────────────────────
// [선택적 / 교체 가능 콘텐츠 슬롯 설정]
// 실제 콘텐츠가 준비되면 배열에 추가하거나, 비워두면 화면에 불필요한 빈 공간 없이 깔끔하게 숨겨집니다.
// 가상의 후기나 작품은 임의로 생성하지 않습니다.
// ─────────────────────────────────────────────────────────────
interface ReviewItem {
  id: string;
  name: string;
  role: string;
  text: string;
}

interface WorkItem {
  id: string;
  title: string;
  author: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
}

// 1. 완성 결과물 섹션 아래에 선택적으로 노출할 짧은 대표 후기 (2~3개)
//    - 후기가 쌓이기 전에는 빈 배열([])로 두면 완전히 숨겨집니다.
const FEATURED_SHORT_REVIEWS: ReviewItem[] = [];

// 2. 수강생 작품 목록 (실제 작품 등록 시 채워짐)
const STUDENT_WORKS: WorkItem[] = [];

// 3. 수강생 상세 후기 목록 (실제 후기 등록 시 채워짐)
const STUDENT_REVIEWS: ReviewItem[] = [];

// 4. 초안 단계에서 미디어/자료의 자리 표시(Placeholder) 노출 여부
//    - false로 바꾸면 미등록 자리 표시 영역을 깔끔하게 숨깁니다.
const SHOW_DRAFT_PLACEHOLDERS = true;

export default function AidramaPage() {
  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans">
      {/* ───────────────────────────────────────────────
          공통 서브 헤더 네비게이션
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] px-4 sm:px-6 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/oneday"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>원데이 클래스 목록</span>
          </Link>
          <div className="text-[11px] md:text-xs tracking-wider text-[#C6A66B] font-medium hidden sm:block">
            작은 배움, 하나의 완성.
          </div>
          <a
            href="#apply"
            className="px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors"
          >
            수강 신청
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          섹션 1. 강의 제목 · 핵심 정보 · 대표 영상 (Hero)
          - 최상단에 강의 제목이 가장 먼저 나오도록 배치
          - 데스크톱: 좌측(제목/정보/가격/신청) + 우측(대표 영상) 2열 구성
          - 모바일: 제목 → 핵심정보/가격/신청 버튼 → 대표 영상 순서로 노출
          - 대표 영상이 첫 화면 전체를 가리지 않도록 적정 크기로 균형 조절
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* 좌측: 분류, 강의명, 소개, 메타정보, 가격 & 신청 버튼 */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1) 분류 또는 짧은 브랜드 문구 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {CLASS_CONFIG.category}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {CLASS_CONFIG.badge}
                </span>
              </div>

              {/* 2) 강의 제목 — 페이지에서 가장 눈에 띄게 */}
              <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                {CLASS_CONFIG.titleMain} <br />
                {CLASS_CONFIG.titleSub}
                <span className="block text-lg sm:text-2xl font-bold text-[#8E6D38] mt-2">
                  {CLASS_CONFIG.titleAccent}
                </span>
              </h1>

              {/* 3) 강의 설명 (초보자 진입장벽 완화) */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-bold text-[#8E6D38] leading-snug break-keep">
                  배우 섭외도, 직접 촬영도 없이.
                </p>
                <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                  AI가 처음이어도, 영상 제작이 처음이어도 괜찮습니다. <br className="hidden sm:inline" />
                  제공되는 대본 템플릿과 전용 프롬프트 스킬을 활용해, 이야기 기획부터 이미지·영상 제작, 편집과 유튜브 업로드까지 함께 따라갑니다.
                </p>
              </div>

              {/* 초보자 진입장벽 완화 핵심 배지 3개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                  촬영 장비 없이
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                  얼굴 출연 없이
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                  전용 템플릿으로 시작
                </span>
              </div>

              {/* 4) 진행 방식 / 수업 시간 / 난이도 / 일정 (핵심 정보 카드) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">진행 방식</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">
                    {CLASS_CONFIG.meta.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수업 시간</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">
                    {CLASS_CONFIG.meta.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수강 난이도</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">
                    {CLASS_CONFIG.meta.difficulty}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수업 일정</span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold">
                    {CLASS_CONFIG.meta.schedule}
                  </strong>
                </div>
              </div>

              {/* 5) 참가비와 상단 신청 버튼 (모바일에서도 쉽게 보이도록 구성) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[11px] font-bold">
                        {CLASS_CONFIG.price.badge}
                      </span>
                      <span className="text-xs text-[#7C6656] line-through">
                        {CLASS_CONFIG.price.regular}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#2E2723]">
                        {CLASS_CONFIG.price.current}
                        <span className="text-xl font-bold">{CLASS_CONFIG.price.unit}</span>
                      </span>
                      <span className="text-xs text-[#7C6656]">/ 실시간 라이브 코칭</span>
                    </div>
                  </div>

                  {/* 수강 신청 바로가기 버튼 */}
                  <a
                    href="#apply"
                    className="w-full sm:w-auto min-h-[46px] px-6 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group shrink-0"
                  >
                    <span>지금 수강 신청하기</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                <div className="text-[11px] sm:text-xs text-[#8E6D38] border-t border-[#F0E8DD] pt-2.5 flex items-center justify-between">
                  <span>{CLASS_CONFIG.price.note}</span>
                  <span className="hidden sm:inline text-[#7C6656]">• 원데이 끝장 1편 직접 완성</span>
                </div>
              </div>

              {/* 핵심 키워드 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CLASS_CONFIG.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF2E6] text-[#7C6656] font-medium border border-[#E8DFD3]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

            {/* 우측: 6) 대표 영상 또는 이미지 (세로 9:16 숏츠 최적화 비율) */}
            {/* 데스크톱에서는 우측 열, 모바일에서는 좌측 정보·신청 버튼 바로 아래에 단정하게 배치 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] relative rounded-[28px] overflow-hidden border border-[#3E3228] bg-gradient-to-b from-[#181310] to-[#120E0C] shadow-2xl group">
                <div className="aspect-[9/16] w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  {/* 은은한 배경 오라 */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(198,166,107,0.35) 0%, rgba(46,39,35,0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* 스마트폰 상단 노치/스피커 바 느낌 디테일 */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-[#2E241E]" />

                  <div className="relative z-10 flex flex-col items-center max-w-[240px]">
                    <div className="w-14 h-14 rounded-full bg-[#C6A66B]/20 border border-[#C6A66B]/50 flex items-center justify-center text-[#D6C6A8] text-xl mb-3 shadow-lg group-hover:scale-105 transition-transform">
                      ▶
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#241C17]/90 border border-[#4D3A2B] text-[11px] font-bold text-[#D6C6A8] mb-2">
                      [9:16 쇼츠 대표 영상]
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-1.5 break-keep">
                      AI 1분 숏드라마 대표 완성작
                    </h2>
                    <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                      스마트폰 숏폼(쇼츠·릴스) 9:16 최적화 <br />
                      웹소설 도파민 서사 1분 완성 영상 (mp4)
                    </p>
                  </div>

                  {/* 하단 쇼츠 타임라인 진행바 디테일 */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-1.5 opacity-60">
                    <span className="text-[10px] text-[#A8988B]">00:00</span>
                    <div className="flex-1 h-0.5 rounded-full bg-[#3E3228] overflow-hidden">
                      <div className="w-1/3 h-full bg-[#C6A66B]" />
                    </div>
                    <span className="text-[10px] text-[#A8988B]">01:00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          본문 상세 영역 (Dark & Deep Brown Theme)
         ═══════════════════════════════════════════════ */}
      <div className="w-full bg-[#0D0B0A]">

        {/* ───────────────────────────────────────────
            섹션 1.5. 제작 흐름 요약 & 수강 패키지 요약
            - 상세 커리큘럼을 읽기 전 전체 제작 과정(3단계)과 포함된 핵심 패키지를 한눈에 파악
           ─────────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#26201B]">
          
          {/* 1. 제작 흐름 5단계 (PROCESS OVERVIEW) */}
          <div className="mb-14 md:mb-16">
            <div className="text-center mb-10 md:mb-12">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-2.5 block">
                PROCESS OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-3 break-keep">
                첫 숏드라마, 이 순서로 만듭니다
              </h2>
              <p className="text-xs sm:text-sm text-[#9E8B7C] max-w-lg mx-auto break-keep">
                무엇부터 시작할지 고민하지 않도록, 단계별 도구와 전용 템플릿을 연결했습니다.
              </p>
            </div>

            {/* 카드 5개 (PC: 3개 + 2개 배치, 모바일: 01~05 세로 1열) */}
            <div className="space-y-4">
              {/* 상단 3개 카드 (01, 02, 03) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 단계 01 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between hover:border-[#C6A66B]/30 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-extrabold tracking-wider text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#C6A66B]/10 border border-[#C6A66B]/20">
                        STEP 01
                      </span>
                      {/* 대본·스토리보드 선형 아이콘 */}
                      <div className="w-9 h-9 rounded-xl bg-[#1C1613] border border-[#332720] flex items-center justify-center text-[#C6A66B]">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-1.5 break-keep">
                      이야기·대본 만들기
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      템플릿에 소재와 인물 정보를 넣어 이야기의 뼈대를 잡습니다.
                    </p>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-[#261E19] flex items-center justify-between">
                    <span className="text-[11px] text-[#8F7D6E]">결과물</span>
                    <span className="text-xs font-semibold text-[#D6C6A8] bg-[#1C1613] px-2.5 py-1 rounded-md border border-[#33261D]">
                      숏드라마 대본
                    </span>
                  </div>
                </div>

                {/* 단계 02 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between hover:border-[#C6A66B]/30 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-extrabold tracking-wider text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#C6A66B]/10 border border-[#C6A66B]/20">
                        STEP 02
                      </span>
                      {/* 캐릭터·장면 프레임 선형 아이콘 */}
                      <div className="w-9 h-9 rounded-xl bg-[#1C1613] border border-[#332720] flex items-center justify-center text-[#C6A66B]">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-1.5 break-keep">
                      캐릭터·장면 설계
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      인물과 배경의 분위기를 정하고 장면별 이미지를 준비합니다.
                    </p>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-[#261E19] flex items-center justify-between">
                    <span className="text-[11px] text-[#8F7D6E]">결과물</span>
                    <span className="text-xs font-semibold text-[#D6C6A8] bg-[#1C1613] px-2.5 py-1 rounded-md border border-[#33261D]">
                      캐릭터 이미지·장면 구성표
                    </span>
                  </div>
                </div>

                {/* 단계 03 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between hover:border-[#C6A66B]/30 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-extrabold tracking-wider text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#C6A66B]/10 border border-[#C6A66B]/20">
                        STEP 03
                      </span>
                      {/* 영상·음성 제작 선형 아이콘 */}
                      <div className="w-9 h-9 rounded-xl bg-[#1C1613] border border-[#332720] flex items-center justify-center text-[#C6A66B]">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-1.5 break-keep">
                      영상·음성 제작
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      장면 이미지를 영상으로 만들고 대사와 소리를 준비합니다.
                    </p>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-[#261E19] flex items-center justify-between">
                    <span className="text-[11px] text-[#8F7D6E]">결과물</span>
                    <span className="text-xs font-semibold text-[#D6C6A8] bg-[#1C1613] px-2.5 py-1 rounded-md border border-[#33261D]">
                      장면별 영상·음성
                    </span>
                  </div>
                </div>
              </div>

              {/* 하단 2개 카드 (04, 05 - PC에서는 2열로 정렬되어 자연스럽게 완성) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl md:max-w-3xl mx-auto">
                {/* 단계 04 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between hover:border-[#C6A66B]/30 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-extrabold tracking-wider text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#C6A66B]/10 border border-[#C6A66B]/20">
                        STEP 04
                      </span>
                      {/* 편집·완성 타임라인 선형 아이콘 */}
                      <div className="w-9 h-9 rounded-xl bg-[#1C1613] border border-[#332720] flex items-center justify-center text-[#C6A66B]">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-1.5 break-keep">
                      편집·완성
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      클립을 연결하고 자막·음악을 더해 완성합니다.
                    </p>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-[#261E19] flex items-center justify-between">
                    <span className="text-[11px] text-[#8F7D6E]">결과물</span>
                    <span className="text-xs font-semibold text-[#D6C6A8] bg-[#1C1613] px-2.5 py-1 rounded-md border border-[#33261D]">
                      최종 영상 파일
                    </span>
                  </div>
                </div>

                {/* 단계 05 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between hover:border-[#C6A66B]/30 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-extrabold tracking-wider text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#C6A66B]/10 border border-[#C6A66B]/20">
                        STEP 05
                      </span>
                      {/* 유튜브 업로드 선형 아이콘 */}
                      <div className="w-9 h-9 rounded-xl bg-[#1C1613] border border-[#332720] flex items-center justify-center text-[#C6A66B]">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-1.5 break-keep">
                      유튜브 업로드
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      세로 화면과 제목·설명을 확인하고 채널에 업로드합니다.
                    </p>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-[#261E19] flex items-center justify-between">
                    <span className="text-[11px] text-[#8F7D6E]">결과물</span>
                    <span className="text-xs font-semibold text-[#D6C6A8] bg-[#1C1613] px-2.5 py-1 rounded-md border border-[#33261D]">
                      첫 숏드라마 게시물
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 수강 패키지 요약 카드 (하나의 큰 카드) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#18120F] to-[#130E0C] border border-[#3A2E24] p-6 sm:p-8 md:p-10 shadow-xl">
            {/* 상단 헤더 */}
            <div className="text-center md:text-left mb-8 pb-6 border-b border-[#2C211A] flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-bold tracking-[0.15em] text-[#C6A66B] uppercase mb-1.5 block">
                  PACKAGE INCLUDED
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#FAF7F2] break-keep">
                  이번 원데이에 함께 담았습니다
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9E8B7C] break-keep">
                함께 만드는 수업부터, 다음 작품에 활용할 제작 자료까지.
              </p>
            </div>

            {/* 카드 내부 4개 항목 (PC: 2x2 그리드, 모바일: 1열) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* 항목 01 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1D1612]/90 border border-[#2E241D] flex items-start gap-3.5 hover:border-[#C6A66B]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A1F18] border border-[#3E2E23] flex items-center justify-center text-[#C6A66B] shrink-0 mt-0.5">
                  {/* 모니터 / 실시간 라이브 화상 회의 아이콘 */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#C6A66B]">01</span>
                    <h4 className="text-sm sm:text-base font-bold text-[#FAF7F2] truncate">
                      Zoom 실시간 제작 수업
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    강사의 화면을 보며 단계별로 함께 실습합니다.
                  </p>
                </div>
              </div>

              {/* 항목 02 (전용 프롬프트 스킬 쓰임 명확화) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1D1612]/90 border border-[#2E241D] flex items-start gap-3.5 hover:border-[#C6A66B]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A1F18] border border-[#3E2E23] flex items-center justify-center text-[#C6A66B] shrink-0 mt-0.5">
                  {/* AI 스파크/프롬프트 아이콘 */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#C6A66B]">02</span>
                    <h4 className="text-sm sm:text-base font-bold text-[#FAF7F2] truncate">
                      빈칸부터 시작하지 않는 전용 프롬프트 스킬
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    소재와 인물 정보를 입력해 대본·장면별 프롬프트 초안을 만들고, 내 작품에 맞게 수정하며 활용하는 원본 파일을 제공합니다.
                  </p>
                </div>
              </div>

              {/* 항목 03 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1D1612]/90 border border-[#2E241D] flex items-start gap-3.5 hover:border-[#C6A66B]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A1F18] border border-[#3E2E23] flex items-center justify-center text-[#C6A66B] shrink-0 mt-0.5">
                  {/* 대본/문서 가이드 아이콘 */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#C6A66B]">03</span>
                    <h4 className="text-sm sm:text-base font-bold text-[#FAF7F2] truncate">
                      대본 템플릿과 연출 가이드
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    클리셰 대본 3종과 타임코드·카메라 무빙 자료
                  </p>
                </div>
              </div>

              {/* 항목 04 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1D1612]/90 border border-[#2E241D] flex items-start gap-3.5 hover:border-[#C6A66B]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A1F18] border border-[#3E2E23] flex items-center justify-center text-[#C6A66B] shrink-0 mt-0.5">
                  {/* 오픈채팅/말풍선 아이콘 */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#C6A66B]">04</span>
                    <h4 className="text-sm sm:text-base font-bold text-[#FAF7F2] truncate">
                      수강 후 질문 공간
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    다음 작품을 만들며 궁금한 점을 나누는 수강생 오픈채팅방
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 2. 추천 대상 (Who it's for)
            - 짧게 배치하여 고민 공감 섹션과 중복되지 않도록 핵심 대상만 깔끔하게 구성
           ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-2.5 block">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-3 break-keep">
              이런 분들께 가장 필요한 실전 수업입니다
            </h2>
            <p className="text-xs sm:text-sm text-[#9E8B7C] max-w-lg mx-auto break-keep">
              복잡한 이론이나 툴 공부 없이, 곧바로 내 사업과 채널에 쓰일 결과물이 필요한 분을 위해 기획되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/40 transition-colors">
              <span className="text-2xl mb-3 block">🏢</span>
              <h3 className="text-sm font-bold text-[#FAF7F2] mb-1.5">1인 기업 & 브랜드 대표님</h3>
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                내 브랜드나 상품을 바이럴할 숏폼 영상 콘텐츠가 절실한 대표님
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/40 transition-colors">
              <span className="text-2xl mb-3 block">🎬</span>
              <h3 className="text-sm font-bold text-[#FAF7F2] mb-1.5">AI 영상 입문 희망자</h3>
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                숏드라마를 만들고 싶지만 비싼 툴과 복잡한 프롬프트로 망설였던 분
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/40 transition-colors">
              <span className="text-2xl mb-3 block">💡</span>
              <h3 className="text-sm font-bold text-[#FAF7F2] mb-1.5">스토리·아이디어 창작자</h3>
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                영상 편집 기술은 몰라도 번뜩이는 이야기 아이디어를 영상화하고 싶은 분
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/40 transition-colors">
              <span className="text-2xl mb-3 block">🚀</span>
              <h3 className="text-sm font-bold text-[#FAF7F2] mb-1.5">새로운 수익 파이프라인 탐색자</h3>
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                AI 영상 창작 프로세스를 습득해 SNS 수익화 기회를 찾고 계신 분
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 3. 수강생이 겪는 어려움과 고민 (Real Struggles)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              REAL STRUGGLES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              "인스타, 유튜브 쇼츠에 하루에도 수십 개씩 뜨는 AI 숏드라마… <br />
              보면서 '나도 저런 거 하나 만들어보고 싶다' 생각해보셨죠?"
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              하지만 막상 혼자 시작해보면 마주하는 현실의 3대 장벽, 여러분만의 문제가 아닙니다.
            </p>
          </div>

          {/* 3대 고통 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 01</span>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">비용 폭탄 & 툴 피로</h3>
                <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  영상 툴, 음성 툴, 이미지 툴… 사이트마다 가입하고 결제하느라 정작 영상은 손도 못 대고 지치셨나요?
                </p>
              </div>
            </div>

            <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 02</span>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">일관성 붕괴</h3>
                <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  컷마다 주인공 얼굴과 옷이 제각각 바뀌고, 로봇처럼 어색한 움직임에 소중한 크레딧만 날리셨나요?
                </p>
              </div>
            </div>

            <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 03</span>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">지루한 서사</h3>
                <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  화질은 그럴듯한데 시청자가 3초 만에 넘겨버려 조회수가 0에 머무는 허탈함을 겪으셨나요?
                </p>
              </div>
            </div>
          </div>

          {/* 제작 전 고민 예시 화면 (독립적 교체/숨김 가능 영역) */}
          {SHOW_DRAFT_PLACEHOLDERS && (
            <div className="rounded-2xl border border-dashed border-[#3D3026] bg-[#120E0C] p-8 text-center mb-10">
              <span className="inline-block px-3 py-1 rounded bg-[#1D1713] text-xs font-medium text-[#C6A66B] mb-2">
                [제작 과정 화면: 제작 전 흔히 겪는 시행착오 예시 자리]
              </span>
              <p className="text-xs text-[#8F7D6E]">
                얼굴이 제각각 바뀌어 실패한 불량 컷들과 복잡한 사이트 결제 화면 비교 이미지
              </p>
            </div>
          )}

          {/* 설득 전환 메시지 */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center">
            <p className="text-base sm:text-xl font-bold text-[#D6C6A8] leading-relaxed break-keep">
              “기술은 거들 뿐, 대중을 미치게 만드는 것은 결국 ‘이야기’와 ‘연출’입니다.”
            </p>
            <p className="text-xs sm:text-sm text-[#8F7D6E] mt-2">
              불필요한 시행착오는 줄이고, 사람의 마음을 쥐락펴락하는 스토리텔링에 집중하도록 돕습니다.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 4. 수업에서 완성할 결과물 · 대표 장면 (Your Result)
            + 선택적 짧은 대표 후기 2~3개 슬롯 지원
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                YOUR RESULT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                수업 종료 후 내 손에 쥐어질 단 하나의 결과물
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                이론으로 끝나지 않습니다. 수업이 끝나는 순간 내 스마트폰에 저장되는 완성된 1분 숏드라마 파일(mp4)을 확인하세요.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* 세로 영상 자리 (독립적 교체 가능) */}
              <div className="lg:col-span-5 rounded-3xl border border-[#3E3228] bg-[#181310] p-6 text-center shadow-xl">
                <div className="aspect-[9/16] max-w-[280px] mx-auto rounded-2xl border border-dashed border-[#4A3C30] bg-[#0E0B09] flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-full bg-[#C6A66B]/20 flex items-center justify-center text-[#D6C6A8] mb-3">
                    📱
                  </div>
                  <span className="text-xs font-bold text-[#C6A66B] mb-1">
                    [완성 영상 자리: 대표 완성작]
                  </span>
                  <p className="text-[11px] text-[#7A6A5E] leading-relaxed">
                    9:16 모바일 숏폼 최적화 <br />
                    완성 영상 (mp4) 재생 영역
                  </p>
                </div>
              </div>

              {/* 주요 장면 3개 자리 */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2] mb-2">
                  시청자를 끝까지 붙잡는 3대 핵심 컷 설계
                </h3>
                
                <div className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] flex gap-4 items-center">
                  <div className="w-20 h-16 rounded-lg bg-[#241D17] border border-dashed border-[#4D3D30] shrink-0 flex items-center justify-center text-[10px] text-[#C6A66B]">
                    [컷 1 자리]
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#E5D7C5] block">01. 첫 3초 후킹 컷</strong>
                    <p className="text-xs text-[#8F7D6E]">스크롤을 멈추게 만드는 강렬한 클로즈업과 호기심 유발 대사</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] flex gap-4 items-center">
                  <div className="w-20 h-16 rounded-lg bg-[#241D17] border border-dashed border-[#4D3D30] shrink-0 flex items-center justify-center text-[10px] text-[#C6A66B]">
                    [컷 2 자리]
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#E5D7C5] block">02. 긴장감 폭발 갈등 컷</strong>
                    <p className="text-xs text-[#8F7D6E]">빌런의 도발과 인물의 결핍이 극대화되는 오버숄더 및 인서트 컷</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] flex gap-4 items-center">
                  <div className="w-20 h-16 rounded-lg bg-[#241D17] border border-dashed border-[#4D3D30] shrink-0 flex items-center justify-center text-[10px] text-[#C6A66B]">
                    [컷 3 자리]
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#E5D7C5] block">03. 통쾌한 사이다 반전 컷</strong>
                    <p className="text-xs text-[#8F7D6E]">도파민이 터지는 역전극으로 다음 화 시청과 공유를 유도하는 마무리</p>
                  </div>
                </div>
              </div>
            </div>

            {/* [지침 반영] 후기가 쌓이면 짧은 대표 후기 2~3개를 완성 결과물 아래에 선택적으로 노출 */}
            {FEATURED_SHORT_REVIEWS.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#26201B]">
                <div className="text-center mb-6">
                  <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider">
                    REAL VOICES
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#FAF7F2] mt-1">
                    수강생이 직접 남긴 한 줄 후기
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {FEATURED_SHORT_REVIEWS.map((review) => (
                    <div
                      key={review.id}
                      className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] text-xs text-[#C8BCB0] leading-relaxed"
                    >
                      <p className="mb-2 italic font-medium">"{review.text}"</p>
                      <span className="text-[11px] text-[#8F7D6E] block font-semibold">
                        — {review.name} ({review.role})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 5. 자명스쿨 수업의 차별점 (Difference)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              DIFFERENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              혼자 헤매던 방식 vs 자명스쿨 원데이의 해결법
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              막막했던 제작 과정을 가장 단순하고 직관적인 4가지 솔루션으로 해결합니다.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">막막한 백지에서 소설 쓰기</h4>
                <p className="text-xs text-[#8F7D6E]">어디서 본 듯 뻔하거나 도입부에서 늘어지는 이야기</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">웹소설 도파민 클리셰 템플릿 대입</h4>
                <p className="text-xs text-[#A8988B]">키워드만 바꾸면 3초 후킹과 사이다 결말이 자동 도출</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">컷마다 얼굴·의상이 바뀌는 참사</h4>
                <p className="text-xs text-[#8F7D6E]">프롬프트만 무한 반복하며 아까운 유료 크레딧 낭비</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">캐릭터·비주얼 고정 프롬프트 기술</h4>
                <p className="text-xs text-[#A8988B]">주인공의 외모와 한국 실사 톤앤매너를 유지하는 규칙 전수</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">어색한 카메라 앵글과 컷 길이</h4>
                <p className="text-xs text-[#8F7D6E]">감에 의존해 이어붙이다가 뚝뚝 끊기는 부자연스러운 편집</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">초 단위(타임코드) 프로 컷 연출 공식표</h4>
                <p className="text-xs text-[#A8988B]">몇 초에 클로즈업, 몇 초에 오버숄더를 둘지 수학 공식처럼 제공</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">5~6개 사이트를 전전하는 파편화</h4>
                <p className="text-xs text-[#8F7D6E]">툴마다 결제하고 파일 옮기다 지쳐 포기하는 악순환</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">전용 스킬로 연결하는 단계별 제작 흐름</h4>
                <p className="text-xs text-[#A8988B]">단계마다 필요한 템플릿과 도구를 정리해, 다음에 무엇을 해야 할지 쉽게 따라갑니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 6. 단계별 커리큘럼 (Curriculum)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                1DAY CURRICULUM
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                5단계로 끝내는 1Day 실시간 완성 로드맵
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                단순 시청 강의가 아닌, 강사와 함께 화면을 띄워놓고 1단계부터 5단계까지 직접 만들어갑니다.
              </p>
            </div>

            <div className="space-y-6">
              {/* 1단계 */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">1단계</span>
                    <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">욕망과 갈등 설계 (이야기 기획)</h3>
                  </div>
                  <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                    <li>• 인물의 결핍, 빌런의 도발, 통쾌한 사이다 반전 구조 잡기</li>
                    <li>• 1분 안에 기-승-전-결을 끝내는 한 줄 로그라인 도출</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                  <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                  <strong className="text-xs md:text-sm text-[#D6C6A8]">1분 기승전결 기획안</strong>
                </div>
              </div>

              {/* 2단계 */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">2단계</span>
                    <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">웹소설 후킹의 영상화 (대본 완성)</h3>
                  </div>
                  <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                    <li>• 시청자를 멈춰 세우는 첫 3초 후킹 대사 작성법</li>
                    <li>• 심의에 걸리지 않고 긴장감을 올리는 시각적 연출 팁</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                  <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                  <strong className="text-xs md:text-sm text-[#D6C6A8]">3초 후킹 대본 1편</strong>
                </div>
              </div>

              {/* 3단계 */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">3단계</span>
                    <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">타임코드 레퍼런스 분해 (컷 문법)</h3>
                  </div>
                  <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                    <li>• 10초 단위 6장면 컷 설계 (초·구도·행동·전환 정밀 해부)</li>
                    <li>• 감정에 따라 카메라 앵글(클로즈업, 오버숄더, 패닝) 배치하기</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                  <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                  <strong className="text-xs md:text-sm text-[#D6C6A8]">6장면 스토리보드 시트</strong>
                </div>
              </div>

              {/* 4단계 */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">4단계</span>
                    <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">캐릭터 & 비주얼 고정 (아이덴티티)</h3>
                  </div>
                  <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                    <li>• 컷이 바뀌어도 주인공 얼굴, 헤어, 의상이 유지되는 프롬프트 테크닉</li>
                    <li>• 한국 실사 드라마 질감을 살리는 비주얼 톤앤매너 세팅</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                  <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                  <strong className="text-xs md:text-sm text-[#D6C6A8]">고정 캐릭터 이미지 세트</strong>
                </div>
              </div>

              {/* 5단계 */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">5단계</span>
                    <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">영상 제작·편집 & 첫 업로드</h3>
                  </div>
                  <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                    <li>• 장면별 영상 생성 및 필요한 컷 수정</li>
                    <li>• 영상·대사·음악·자막을 연결하는 기본 편집</li>
                    <li>• 완성본 내보내기와 유튜브 업로드 절차</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                  <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                  <strong className="text-xs md:text-sm text-[#D6C6A8]">완성 숏드라마 파일 ＋ 유튜브 업로드 실습</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 7. 제공 자료 · 템플릿 · 혜택 (Core Assets)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              CORE LEARNING ASSETS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              수업 후에도 다음 작품을 무한 제작하는 핵심 실전 무기 4종
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              단순 보너스가 아닌, 본 수업의 완성도를 지탱하는 핵심 기획 스킬과 실전 패키지 원본을 평생 소장용으로 100% 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
                    01
                  </span>
                  <div>
                    <span className="text-xs text-[#C6A66B] font-bold">[핵심 실전 스킬 · 평생 소장]</span>
                    <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                      자명스쿨 '1분 숏드라마 올인원 AI 프롬프트 스킬' 원본
                    </h3>
                    <p className="text-xs text-[#8F7D6E] leading-relaxed">
                      키워드만 넣으면 기획부터 대본, 프롬프트까지 자동 완성해 주는 전용 엔진 파일
                    </p>
                  </div>
                </div>

                {/* 전용 스킬 활용 방법 안내 박스 */}
                <div className="rounded-xl bg-[#1D1612] border border-[#33261D] p-3.5 sm:p-4 mt-2">
                  <span className="text-[11px] font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                    전용 스킬은 이렇게 활용합니다
                  </span>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 py-2 px-2.5 rounded-lg bg-[#140F0D] border border-[#2A1E17] mb-2.5 text-xs text-[#D6C6A8] font-medium text-center">
                    <span className="bg-[#241A14] py-1 px-2 rounded border border-[#3A2A1E]">소재·인물 입력</span>
                    <span className="text-[#8E6D38] hidden sm:inline">→</span>
                    <span className="text-[#8E6D38] sm:hidden">↓</span>
                    <span className="bg-[#241A14] py-1 px-2 rounded border border-[#3A2A1E]">대본·장면 프롬프트 초안 생성</span>
                    <span className="text-[#8E6D38] hidden sm:inline">→</span>
                    <span className="text-[#8E6D38] sm:hidden">↓</span>
                    <span className="bg-[#241A14] py-1 px-2 rounded border border-[#3A2A1E]">수정 후 제작 도구에 활용</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#8F7D6E] leading-relaxed break-keep">
                    프롬프트를 처음부터 작성하는 부담을 줄이고, 이야기와 장면을 다듬는 데 집중합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
                02
              </span>
              <div>
                <span className="text-xs text-[#C6A66B] font-bold">[실전 템플릿]</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                  단어만 바꾸면 완성되는 '도파민 클리셰 대본 3대 템플릿'
                </h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed">
                  회귀/복수, 신분위장 사이다, 감동 반전 등 검증된 숏폼 서사 골격 문서
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
                03
              </span>
              <div>
                <span className="text-xs text-[#C6A66B] font-bold">[연출 가이드]</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                  타임코드 컷 연출 & 카메라 무빙 분석표
                </h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed">
                  초 단위 앵글 설계와 프롬프트에 넣을 카메라 무빙 영문 지시어 일람표
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
                04
              </span>
              <div>
                <span className="text-xs text-[#C6A66B] font-bold">[애프터 케어]</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                  수업 종료 후 전용 질의응답 오픈채팅방 케어
                </h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed">
                  혼자 다음 작품을 만들다 막히는 지점을 묻고 피드백을 받을 수 있는 소통방 [기간 확정 필요]
                </p>
              </div>
            </div>
          </div>

          {/* 제공 자료 미리보기 자리 (독립적으로 교체 및 숨김 가능) */}
          {SHOW_DRAFT_PLACEHOLDERS && (
            <div className="rounded-2xl border border-dashed border-[#3D3025] bg-[#120E0C] p-8 text-center">
              <span className="inline-block px-3 py-1 rounded bg-[#1F1813] text-xs font-semibold text-[#C6A66B] mb-2">
                [제공 자료 미리보기 자리: 실전 무기 4종 목업 번들]
              </span>
              <p className="text-xs text-[#8F7D6E]">
                템플릿 문서 표지, 프롬프트 시트 목업, 모바일 가이드 화면이 포함된 그래픽
              </p>
            </div>
          )}
        </section>

        {/* ───────────────────────────────────────────
            섹션 8. 수강생 작품 · 후기 (Showcase & Reviews)
            - 가상의 후기나 작품은 만들지 않음
            - 등록된 작품이나 후기가 있을 때 깔끔하게 노출되며,
              미등록 상태에서는 군더더기 없는 사전 안내 메시지 1장으로 표현
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                STUDENT SHOWCASE & REVIEWS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                수강생 작품 & 생생한 후기
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                원데이 클래스를 통해 수강생 분들이 직접 완성한 1분 숏드라마와 생생한 수강 경험입니다.
              </p>
            </div>

            {/* 실제 등록된 작품 목록 (있을 때만 렌더링) */}
            {STUDENT_WORKS.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {STUDENT_WORKS.map((work) => (
                  <div
                    key={work.id}
                    className="rounded-2xl bg-[#181310] border border-[#2E241E] p-4 text-center"
                  >
                    <div className="aspect-[9/16] rounded-xl bg-[#0E0B09] border border-[#3E3024] mb-3 flex items-center justify-center">
                      <span className="text-xs text-[#C6A66B]">{work.title}</span>
                    </div>
                    <strong className="text-sm text-[#FAF7F2] block">{work.title}</strong>
                    <span className="text-xs text-[#8F7D6E]">{work.author} 수강생</span>
                  </div>
                ))}
              </div>
            )}

            {/* 실제 등록된 후기 목록 (있을 때만 렌더링) */}
            {STUDENT_REVIEWS.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {STUDENT_REVIEWS.map((review) => (
                  <div
                    key={review.id}
                    className="p-6 rounded-2xl bg-[#181310] border border-[#2E241E]"
                  >
                    <p className="text-sm text-[#FAF7F2] leading-relaxed mb-4">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#8F7D6E]">
                      <span className="font-bold text-[#D6C6A8]">{review.name}</span>
                      <span>{review.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 미등록 시 자리 표시 안내 (공개 시 빈 공간 없이 신뢰감 있게 정돈) */}
            {STUDENT_WORKS.length === 0 && STUDENT_REVIEWS.length === 0 && SHOW_DRAFT_PLACEHOLDERS && (
              <div className="rounded-2xl border border-dashed border-[#3D3025] bg-[#181310] p-8 sm:p-10 text-center max-w-2xl mx-auto">
                <span className="inline-block px-3 py-1 rounded bg-[#241C16] text-xs font-semibold text-[#C6A66B] mb-2">
                  [수강생 작품 · 후기 등록 예정]
                </span>
                <p className="text-sm text-[#D6C6A8] font-medium mb-1">
                  1기 클래스 종료 후 수강생 분들의 1분 숏드라마 완성작과 생생한 후기가 공개됩니다.
                </p>
                <p className="text-xs text-[#8F7D6E]">
                  * 실제 수강생의 동의를 받은 실제 결과물과 검증된 후기만 투명하게 게시합니다.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 9. 강사 소개 (Instructor)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="rounded-3xl bg-gradient-to-b from-[#181310] to-[#120E0C] border border-[#3E3127] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* 강사 프로필 이미지 자리 (교체 가능) */}
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-[#201814] border border-dashed border-[#5C4838] shrink-0 flex flex-col items-center justify-center p-3 text-center">
                <span className="text-2xl mb-1">✍️</span>
                <span className="text-xs font-bold text-[#C6A66B]">[강사 프로필 자리]</span>
                <span className="text-[10px] text-[#7A6A5E] mt-1">자명스쿨 대표 & 기획자</span>
              </div>

              {/* 강사 소개 텍스트 */}
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block mb-1">
                    INSTRUCTOR
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FAF7F2]">
                    “이야기를 짓고, 시스템으로 완성하는 AI 크리에이터”
                  </h3>
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-[#A8988B] text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✔</span>
                    <span><strong>공인 웹소설 전문 자격 보유</strong> (스토리 구조, 인물 갈등, 클리셰 연출 전문)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✔</span>
                    <span><strong>자명스쿨 대표 & 지식 콘텐츠/전자책 다수 출간 기획자</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✔</span>
                    <span><strong>복잡한 기술을 왕초보도 바로 쓰는 시스템으로 압축해 주는 AI 실전 교육가</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 강사의 한마디 */}
            <div className="mt-8 pt-8 border-t border-[#2E241E] bg-[#120E0C]/60 p-6 rounded-2xl">
              <p className="text-sm md:text-base text-[#D6C6A8] italic leading-relaxed break-keep">
                “AI 툴은 누구나 며칠이면 배웁니다. 하지만 사람의 마음을 쥐락펴락하고 끝까지 영상을 보게 만드는 '서사 설계 능력'은 아무나 가르칠 수 없습니다. 비싼 프로그램 설치 없이도 내 머릿속 상상이 생생한 드라마가 되는 쾌감을 선물해 드릴게요.”
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 10. 준비사항 · 추가 비용 안내 (Preparation & Costs)
            - 추천 대상과 분리하여 수강 전 체크포인트로 명확하게 구성
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-12">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-2.5 block">
              PREPARATION & NOTICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-3 break-keep">
              수업 전 꼭 확인해주세요
            </h2>
            <p className="text-xs sm:text-sm text-[#9E8B7C] max-w-lg mx-auto break-keep">
              수강 전 필요한 준비물과 비용 안내입니다. 비싼 유료 결제 없이도 참여하실 수 있도록 설계되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2C221B]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💻</span>
                <strong className="text-sm font-bold text-[#EDE6DC]">기기 환경</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                크롬 브라우저 구동이 가능한 노트북 또는 데스크톱 PC (복잡한 유료 프로그램 설치는 전혀 필요 없습니다).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2C221B]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🔑</span>
                <strong className="text-sm font-bold text-[#EDE6DC]">사전 계정</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                구글 계정 및 수업에서 안내드리는 도구의 기본 무료 회원가입 [확정 필요].
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2C221B]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💳</span>
                <strong className="text-sm font-bold text-[#EDE6DC]">추가 비용 (툴 구독료)</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                수업 실습은 무료 제공 크레딧 범위 내에서 충분히 1편을 완성할 수 있도록 효율적으로 진행됩니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2C221B]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🌱</span>
                <strong className="text-sm font-bold text-[#EDE6DC]">수강 난이도</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                코딩이나 영상 편집 경험이 전무한 초보자분들도 그대로 따라 하실 수 있는 왕초보 눈높이 수업입니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 11. 자주 묻는 질문 (FAQ) - 자명스쿨 시그니처 베이지 배경
           ─────────────────────────────────────────── */}
        <section className="w-full bg-[#F9F6F0] text-[#2E2723] py-20 md:py-28 px-4 sm:px-6 border-b border-[#E8DFD3]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#8E6D38] uppercase mb-3 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E2723] mb-4 break-keep">
                자주 묻는 질문
              </h2>
              <p className="text-sm sm:text-base text-[#6E5A4D] max-w-xl mx-auto break-keep">
                수강 전 가장 많이 궁금해하시는 질문과 답변을 모았습니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>영상 편집이나 컴퓨터를 잘 모르는 왕초보도 정말 가능한가요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네, 가능합니다. 복잡한 전문 영상 편집 프로그램을 쓰지 않으며, 검증된 프롬프트 엔진에 키워드를 넣고 완성된 클립을 이어붙이는 직관적인 워크플로우로 진행됩니다.
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>1Day(3~4시간) 수업 안에 진짜로 1편이 완성되나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네. 수강생이 기획 단계에서 길을 잃지 않도록 대본 템플릿과 컷 연출 공식표를 사전에 제공하며, 1Day(3~4시간) 안에 스마트폰에 1편의 영상 파일(mp4)을 다운로드하는 것을 목표로 커리큘럼이 정밀하게 짜여 있습니다.
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>도구 결제 비용(구독료)이 별도로 필요한가요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  아닙니다. 수업 시작 전부터 비싼 유료 프로그램을 강제 결제하지 않습니다. 무료 크레딧을 지혜롭게 활용하는 방법과 크레딧 낭비를 막는 프롬프트 팁을 알려드립니다. [세부 도구 무료 크레딧 기준 확정 필요]
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>수업 녹화본(다시보기)을 제공하나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  [다시보기 제공 여부 및 열람 기간 정책 확정 필요]
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>취소 및 환불 기준은 어떻게 되나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  자명스쿨의 공통 수강 취소 및 환불 규정을 따릅니다. [환불 정책 세부 기준 확정 필요]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            섹션 12. 최종 수강 신청 (Final CTA)
            - 모든 신청 버튼의 이동 목적지 (#apply)
           ─────────────────────────────────────────── */}
        <section id="apply" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#14100E] to-[#0A0807] relative overflow-hidden">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-15 blur-[140px]"
            style={{
              background: "radial-gradient(circle, rgba(198,166,107,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C6A66B] uppercase mb-4 block">
              ONE DAY, ONE RESULT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] mb-6 leading-tight break-keep">
              머릿속에만 맴돌던 상상, <br />
              오늘 당신의 첫 숏드라마로 현실이 됩니다.
            </h2>

            {/* 설득 후킹 문구 박스 */}
            <div className="my-8 p-6 md:p-8 rounded-2xl bg-[#1C1510] border border-[#4A3728] max-w-2xl mx-auto text-center space-y-3 shadow-lg">
              <p className="text-base sm:text-lg text-[#F5EFE6] font-bold leading-relaxed break-keep">
                "20만 원 넘는 인강 끊어놓고 1강 듣다 포기하셨나요?"
              </p>
              <p className="text-sm sm:text-base text-[#D6C6A8] leading-relaxed break-keep font-medium">
                커피 몇 잔 값(29,000원)으로, 오늘 단 1Day 만에 내 손으로 1분 완성작을 뽑아내는 원데이 끝장 실전으로 오세요.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#A8988B] mb-10 max-w-xl mx-auto break-keep">
              웹소설 작가의 서사 설계와 AI 제작 시스템을 손에 쥐고 <br className="hidden sm:inline" />
              단 1Day 만에 손에 잡히는 내 작품을 만들어보세요.
            </p>

            {/* 최종 신청 요약 카드 */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#181310] border border-[#3E3127] shadow-2xl max-w-xl mx-auto mb-6 text-left">
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">과정 형태</span>
                  <span className="text-xs md:text-sm text-[#FAF7F2] font-semibold">
                    {CLASS_CONFIG.meta.format}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">일정 및 시간</span>
                  <span className="text-xs md:text-sm text-[#C6A66B] font-bold">
                    {CLASS_CONFIG.meta.schedule} · {CLASS_CONFIG.meta.duration} 진행
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">참가비</span>
                  <div className="text-right">
                    <span className="text-base md:text-xl text-[#FAF7F2] font-extrabold">
                      {CLASS_CONFIG.price.current}{CLASS_CONFIG.price.unit}
                    </span>
                    <span className="text-[11px] text-[#A8988B] block">
                      * 20만 원대 VOD 대비 80% 이상 가벼운 파격 실시간 특가
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">핵심 제공 자료</span>
                  <span className="text-xs md:text-sm text-[#D6C6A8] font-semibold">
                    전용 프롬프트 엔진 원본 + 실전 템플릿 4종
                  </span>
                </div>
              </div>

              {/* 신청 버튼 */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-[#C6A66B]/50 text-[#1A1410] font-extrabold text-base md:text-lg cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                title="클래스 일정 확정 후 신청이 오픈됩니다."
              >
                <span>[지금 바로 내 첫 숏드라마 완성하러 가기] (확정 필요)</span>
              </button>
              <p className="text-[11px] text-center text-[#7A6A5E] mt-3">
                * 정식 접수 페이지 오픈 시 카카오톡 또는 안내 문자로 가장 먼저 알려드립니다.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/oneday"
                className="text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] underline underline-offset-4 transition-colors"
              >
                ← 다른 원데이 클래스도 함께 둘러보기
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
