import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "강의신청 | 자명스쿨",
  description: "나를 이해하고, 가능성을 설계하고, 디지털로 현실화하는 자명스쿨의 전문 교육과정 신청 허브",
};

// 5개 과정 카드 데이터 구조화
interface CourseApplyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: "recruiting" | "coming-soon" | "closed" | "special" | "always";
  statusLabel: string;
  href: string | null; // 실제 랜딩페이지 생성 시 URL만 입력하면 즉시 활성화
  featured?: boolean;
  icon: string;
  elementLabel?: string;
}

const COURSES: CourseApplyItem[] = [
  {
    id: "digital-mind-coaching",
    title: "디지털마인드코칭전문가",
    category: "MIND COACHING",
    elementLabel: "제5원소 에테르",
    description: "자기이해, 마인드 패턴, 강점과 기질을 바탕으로 삶과 일의 방향을 설계하는 자명스쿨의 핵심 코칭 과정",
    tags: ["자기이해", "마인드", "진로", "코칭"],
    status: "coming-soon",
    statusLabel: "모집예정",
    href: null, // 추후 '/apply/digital-mind-coaching' 등으로 연결
    featured: true,
    icon: "/images/icon/ether.png",
  },
  {
    id: "ai-branding",
    title: "AI브랜딩마스터강사",
    category: "AI BRANDING",
    elementLabel: "제4원소 물",
    description: "AI를 활용해 나만의 브랜드 방향을 찾고 콘텐츠와 강의로 연결하는 실전 브랜딩 과정",
    tags: ["AI", "브랜딩", "1인브랜드", "강의"],
    status: "coming-soon",
    statusLabel: "모집예정",
    href: null, // 추후 '/apply/ai-branding' 연결
    featured: false,
    icon: "/images/icon/water.png",
  },
  {
    id: "canva-content",
    title: "캔바콘텐츠마스터강사",
    category: "CONTENT DESIGN",
    elementLabel: "제3원소 공기",
    description: "캔바를 활용해 교육, SNS, 강의자료 등 실전 콘텐츠 제작 역량을 키우는 과정",
    tags: ["캔바", "디자인", "콘텐츠", "실무"],
    status: "coming-soon",
    statusLabel: "모집예정",
    href: null, // 추후 '/apply/canva-content' 연결
    featured: false,
    icon: "/images/icon/air.png",
  },
  {
    id: "emotional-publishing",
    title: "감성출판지도사",
    category: "PUBLISHING",
    elementLabel: "제1원소 흙",
    description: "글과 콘텐츠를 전자책과 출판물로 완성하고 지식자산으로 확장하는 실전 출판 과정",
    tags: ["전자책", "출판", "글쓰기", "콘텐츠"],
    status: "coming-soon",
    statusLabel: "모집예정",
    href: null, // 추후 '/apply/emotional-publishing' 연결
    featured: false,
    icon: "/images/icon/earth.png",
  },
  {
    id: "ai-emotional-art",
    title: "AI감성아트지도사",
    category: "AI ART",
    elementLabel: "제2원소 불",
    description: "AI 이미지 도구를 활용해 감성 콘텐츠와 아트 결과물을 제작하는 과정",
    tags: ["AI아트", "이미지", "감성콘텐츠", "창작"],
    status: "coming-soon",
    statusLabel: "모집예정",
    href: null, // 추후 '/apply/ai-emotional-art' 연결
    featured: false,
    icon: "/images/icon/fire.png",
  },
];

export default function ApplyPage() {
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
              JAMYUNG SCHOOL · CLASS
            </span>
          </div>

          {/* 메인 제목 */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2E2723] mb-5 leading-tight break-keep">
            현재 모집 중인 강의
          </h1>

          {/* 서브카피 */}
          <p className="text-base md:text-xl font-medium text-[#4A3F35] max-w-2xl mx-auto mb-3 leading-relaxed break-keep">
            나를 이해하고, 가능성을 설계하고, 디지털로 현실화하는 <br className="hidden sm:inline" />
            자명스쿨의 교육과정을 만나보세요.
          </p>

          {/* 보조 설명 */}
          <p className="text-sm md:text-base text-[#7C6656] max-w-xl mx-auto leading-relaxed break-keep">
            자명스쿨의 자격과정과 실무 교육 중 현재 신청 가능한 과정을 확인하세요.
          </p>
        </div>
      </section>

      {/* ────────────────────────
          2. COURSE CARDS GRID
         ──────────────────────── */}
      <section className="py-14 md:py-20 px-6 max-w-7xl mx-auto">
        {/* 과정 개수 및 안내 라벨 */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8DFD3]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#2E2723]">개설 교육과정</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#C6A66B]/15 text-[#8E6D38] font-bold">
              총 {COURSES.length}개
            </span>
          </div>
          <span className="text-xs text-[#7C6656]">
            * 각 과정별 신청 랜딩페이지가 순차 오픈됩니다.
          </span>
        </div>

        {/* 5개 과정 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {COURSES.map((course) => {
            const isFeatured = course.featured;

            return (
              <div
                key={course.id}
                className={`group relative rounded-[28px] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 ease-out
                  ${
                    isFeatured
                      ? "bg-white border-2 border-[#C6A66B] shadow-[0_12px_36px_rgba(198,166,107,0.14)] hover:shadow-[0_16px_44px_rgba(198,166,107,0.22)] hover:-translate-y-1"
                      : "bg-white border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.04)] hover:shadow-[0_12px_32px_rgba(46,39,35,0.08)] hover:border-[#D6C6A8] hover:-translate-y-1"
                  }`}
              >
                {/* Featured 배지 (FLAGSHIP) */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-7 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#C6A66B] to-[#B89455] text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <span>★</span>
                    <span>FLAGSHIP COURSE</span>
                  </div>
                )}

                <div>
                  {/* 상단: 카테고리 + 모집 상태 배지 */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] md:text-xs font-bold tracking-wider text-[#7C6656] uppercase">
                        {course.category}
                      </span>
                      {course.elementLabel && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#F4EDE2] text-[#8E6D38] font-medium">
                          {course.elementLabel}
                        </span>
                      )}
                    </div>

                    {/* 모집 상태 배지 */}
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                        course.status === "recruiting"
                          ? "bg-[#C6A66B]/15 text-[#8E6D38] border-[#C6A66B]/30"
                          : course.status === "coming-soon"
                          ? "bg-[#FAF2E6] text-[#8A6A3F] border-[#E8DFD3]"
                          : "bg-zinc-100 text-zinc-500 border-zinc-200"
                      }`}
                    >
                      {course.statusLabel}
                    </span>
                  </div>

                  {/* 아이콘 및 과정명 */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-2xl bg-[#F7F2EB] p-2 border border-[#E8DFD3]">
                      <Image
                        src={course.icon}
                        alt={course.title}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#2E2723] leading-snug group-hover:text-[#8E6D38] transition-colors break-keep">
                        {course.title}
                      </h2>
                    </div>
                  </div>

                  {/* 한 줄 설명 */}
                  <p className="text-sm text-[#5C4C40] leading-relaxed mb-6 font-normal break-keep min-h-[42px]">
                    {course.description}
                  </p>

                  {/* 핵심 키워드 태그 */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {course.tags.map((tag, idx) => (
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
                  {course.href ? (
                    <Link
                      href={course.href}
                      className="w-full min-h-[46px] px-5 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 group/btn"
                    >
                      <span>신청페이지 보기</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full min-h-[46px] px-5 rounded-xl bg-[#EDE6DC] text-[#8C7B6E] text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                      title="상세 신청페이지 오픈 준비 중입니다."
                    >
                      <span className="w-2 h-2 rounded-full bg-[#A8988B]" />
                      <span>과정 신청 준비중</span>
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
            JAMYUNG PHILOSOPHY
          </span>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug tracking-tight text-[#FAF7F2] break-keep">
            나를 이해하는 것에서 시작해 <br />
            현실의 결과물까지.
          </h2>

          <div className="py-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-[#C6A66B]/30 text-[#D6C6A8] font-bold text-xs md:text-sm tracking-widest">
              MIND → DIRECTION → DIGITAL ACTION
            </span>
          </div>

          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto break-keep">
            자명스쿨은 마음과 디지털을 연결하여 <br className="hidden sm:inline" />
            자신의 가능성을 삶과 일 속에서 실제로 구현할 수 있도록 돕습니다.
          </p>
        </div>
      </section>

      {/* ────────────────────────
          4. BOTTOM GUIDANCE / FAQ SECTION
         ──────────────────────── */}
      <section className="py-20 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-[32px] bg-white border border-[#E8DFD3] shadow-[0_8px_30px_rgba(46,39,35,0.04)]">
          <span className="text-xs font-bold tracking-widest text-[#8E6D38] uppercase mb-3 block">
            COURSE GUIDE
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2E2723] mb-4 break-keep">
            어떤 과정이 나에게 맞을지 고민되시나요?
          </h3>
          <p className="text-base text-[#6E5A4D] max-w-xl mx-auto mb-8 leading-relaxed break-keep">
            각 과정은 교육 목적과 활용 분야가 다릅니다. <br />
            과정별 커리큘럼 상세 정보와 학습 목표를 먼저 확인해 보세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* 기본 강의소개 페이지 연결 */}
            <Link
              href="/courses"
              className="w-full sm:w-auto min-h-[50px] px-8 rounded-full bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-sm font-bold flex items-center justify-center gap-2 shadow transition-all duration-200"
            >
              <span>자명스쿨 강의소개 보기</span>
              <span className="text-xs">→</span>
            </Link>

            {/* 추후 무료특강 신청 버튼 자리 (확장 가능하도록 구조 마련) */}
            <a
              href="https://pf.kakao.com/_IxguMn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[50px] px-8 rounded-full bg-white hover:bg-[#FAF7F2] text-[#4A3F35] text-sm font-semibold border border-[#D6C6A8] flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>1:1 과정 추천 상담</span>
            </a>
          </div>

          <p className="text-xs text-[#9E8E81] mt-6">
            * 각 과정별 상세 랜딩페이지 및 접수 폼은 순차적으로 오픈됩니다.
          </p>
        </div>
      </section>
    </main>
  );
}
