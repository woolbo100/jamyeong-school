"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeartArtProjectSection from "@/components/courses/HeartArtProjectSection";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

// ─────────────────────────────────────────────────────────────
// 신규 확장 데이터: 「불(火) — 마음을 그리다」 감성 아트
// ─────────────────────────────────────────────────────────────

// 1. 신규 섹션 A: 마음에서 시작하는 AI 아트
const EMOTIONAL_START_DATA = {
  badge: "HEART & ART",
  title: "한 장의 그림은 내 마음에서 시작됩니다.",
  description: [
    "때로는 말보다 색이, 문장보다 풍경이 내 마음을 더 잘 표현해 주기도 합니다.",
    "불안한 마음을 고요한 호수로 그려보고, 오래된 기억을 따뜻한 햇살이 비치는 정원으로 표현해 보는 시간.",
    "AI는 단순한 이미지 생성 도구를 넘어 나의 감정과 이야기를 창작물로 표현할 수 있도록 돕는 따뜻한 도구가 됩니다.",
  ],
  steps: [
    {
      step: "STEP 01",
      title: "나를 바라보다",
      desc: "감정 기록, 자기 성찰, 내 마음의 색과 이미지 찾기",
      icon: "🪞",
    },
    {
      step: "STEP 02",
      title: "작품으로 표현하다",
      desc: "AI 이미지, 만다라, 오라클 카드, 그림책, 감성 영상 제작",
      icon: "🎨",
    },
    {
      step: "STEP 03",
      title: "세상과 나누다",
      desc: "작품 큐레이션, 온라인 전시, 창작 포트폴리오 완성",
      icon: "✨",
    },
  ],
  quote: "나를 위해 그린 한 장의 그림이 누군가에게는 따뜻한 위로가 될 수 있습니다.",
};

// 2. 신규 섹션 B: 6가지 감성 창작 경험
const SIX_CREATIVE_EXPERIENCES = [
  {
    num: "01",
    title: "감정 시각화 아트워크",
    desc: "나의 감정과 기억, 마음의 풍경을 색과 이미지로 표현한 AI 감성 작품",
    tag: "감정시각화",
    icon: "🖌️",
    mockup: "Fine Art",
  },
  {
    num: "02",
    title: "만다라 & 감성 아트 굿즈",
    desc: "만다라 컬러링 도안, 심리스 패턴, 엽서, 달력, 패브릭 포스터, 스카프 등 일상에 활용할 수 있는 감성 디자인",
    tag: "만다라·굿즈",
    icon: "🏵️",
    mockup: "Pattern & Goods",
  },
  {
    num: "03",
    title: "마음 메시지 오라클 카드",
    desc: "긍정 확언과 감성 이미지를 결합한 나만의 오라클 카드 12종",
    tag: "오라클카드 12종",
    icon: "🃏",
    mockup: "Oracle Cards",
  },
  {
    num: "04",
    title: "감성 그림책 & 명상 에세이",
    desc: "일관된 화풍과 짧은 이야기를 결합한 그림책 또는 명상 에세이 콘텐츠",
    tag: "그림책·에세이",
    icon: "📖",
    mockup: "Art Book",
  },
  {
    num: "05",
    title: "1분 감성 영상 & 명상 콘텐츠",
    desc: "AI 이미지 모션, 자막, 음악을 활용한 감성 영상 에세이와 시각 명상 콘텐츠",
    tag: "숏폼영상·명상",
    icon: "🎬",
    mockup: "Motion Video",
  },
  {
    num: "06",
    title: "나만의 온라인 아트 전시회",
    desc: "대표 작품을 선정하고 작가 노트를 작성하여 온라인 갤러리에서 소개하는 창작 경험",
    tag: "온라인갤러리",
    icon: "🏛️",
    mockup: "Web Gallery",
  },
];

// 3. 신규 섹션 C: 확장된 6주 AI 감성 아트 커리큘럼
const EXPANDED_6WEEKS_CURRICULUM = [
  {
    week: "WEEK 01",
    theme: "마음을 읽다",
    title: "감정 시각화 & 감성 무드보드",
    topics: [
      "나의 감정과 마음의 색 찾기",
      "감정 은유화와 이미지 표현",
      "AI 이미지 생성 기초",
      "나만의 화풍과 무드보드 설계",
    ],
    result: "감성 무드보드",
    icon: "🌿",
  },
  {
    week: "WEEK 02",
    theme: "마음을 정화하다",
    title: "만다라 & 명상적 패턴 아트",
    topics: [
      "만다라와 젠탱글 창작",
      "컬러링 아트 디자인",
      "AI 심리스 패턴 제작",
      "반복 패턴의 감성 굿즈 활용",
    ],
    result: "만다라 도안 및 패턴 아트",
    icon: "💮",
  },
  {
    week: "WEEK 03",
    theme: "마음을 소장하다",
    title: "오라클 카드 & 감성 아트 굿즈",
    topics: [
      "긍정 확언 문장 기획",
      "오라클 카드 12종 디자인",
      "Canva를 활용한 카드와 달력 편집",
      "POD 굿즈 제작 및 상품화 기초",
    ],
    result: "오라클 카드 및 굿즈 디자인 시안",
    icon: "🎴",
  },
  {
    week: "WEEK 04",
    theme: "마음을 쓰다",
    title: "그림책 & 명상 에세이",
    topics: [
      "감성 스토리보드 구성",
      "일관된 화풍과 장면 제작",
      "이미지와 명상 산문 결합",
      "전자책 및 POD 출판 기초",
    ],
    result: "감성 그림책 또는 명상 에세이 원고",
    icon: "📚",
  },
  {
    week: "WEEK 05",
    theme: "마음을 흐르게 하다",
    title: "AI 감성 영상 & 시각 명상 콘텐츠",
    topics: [
      "AI 이미지 모션 연출",
      "움직이는 만다라 영상 제작",
      "AI 명상 음악 및 배경음 활용",
      "릴스·쇼츠 감성 영상 편집",
    ],
    result: "1분 감성 영상",
    icon: "🎥",
  },
  {
    week: "WEEK 06",
    theme: "마음을 나누다",
    title: "온라인 아트 전시회 & 창작 포트폴리오",
    topics: [
      "대표 작품 선정 및 큐레이션",
      "작가 노트 작성",
      "온라인 웹 갤러리 구성",
      "나만의 창작 포트폴리오 정리",
      "감성 아트 수업 기획 기초",
    ],
    result: "온라인 작품 전시 및 포트폴리오",
    icon: "🕊️",
  },
];

// 4. 신규 섹션 D: 온라인 아트 전시회 5단계
const EXHIBITION_STEPS = [
  { step: "01", title: "전시 주제와 제목 정하기", desc: "나만의 감성 테마와 세계관 설정" },
  { step: "02", title: "대표 작품 선정", desc: "6주간 제작한 결과물 중 대표작 큐레이션" },
  { step: "03", title: "작품 해설과 작가 노트 작성", desc: "작품에 담긴 이야기와 감정의 기록" },
  { step: "04", title: "온라인 갤러리 구성", desc: "모바일·PC에서 감상하는 웹 전시관 구축" },
  { step: "05", title: "전시 링크 공유 및 작품 소개", desc: "소중한 사람들과 세상에 작품 선보이기" },
];

// 5. 추천 대상 보강 목록
const RECOMMENDED_AUDIENCE = [
  "AI를 조금 더 편안하고 즐겁게 배우고 싶은 분",
  "AI 그림에 자신의 감정과 이야기를 담고 싶은 분",
  "마음공부와 명상, 심리 분야에 관심 있는 분",
  "그림책, 오라클 카드, 아트 굿즈를 제작하고 싶은 분",
  "자신만의 감성 작품을 온라인 전시회에 소개하고 싶은 분",
  "AI 아트 창작을 향후 교육이나 콘텐츠 활동으로 확장하고 싶은 분",
];

export default function FireCoursePage() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(0);
  const curriculumData = [
    {
      week: "1주차",
      title: "미드저니 기본문법 정복",
      summary: "AI 아트의 기초와 이미지 제작 입문",
      details: [
        "미드저니 AI 아트 이미지 기초, UI정복",
        "미드저니 기본 파라미터 사용 및 실습",
        "무드보드, 옴니, 스타일 레퍼런스 일관성",
        "아트, 감성 이미지 만들기 정복"
      ],
      result: "아트 이미지 제작"
    },
    {
      week: "2주차",
      title: "미드저니 이미지 생성 심화",
      summary: "감성 아트 에세이 제작 및 심화 기법",
      details: [
        "미드저니 이미지 + 감성글로 표현",
        "감성 아트 에세이 제작 (감성작가 챗봇 제공)",
        "이미지 생성에 대한 심층 연습",
        "유명 화가 스타일 및 다양한 작품 기법"
      ],
      result: "감성 아트 에세이 제작"
    },
    {
      week: "3주차",
      title: "왕초보 영상 기초 정복",
      summary: "미드저니를 활용한 아트워크 및 영상 기초",
      details: [
        "미드저니 아트 영상 기초, 영상 문법",
        "시선을 사로잡는 감성 영상 기획",
        "미드저니 영상 모션 사용법, 핵심 키워드",
        "프롬프트 및 모션 전용 챗봇 활용"
      ],
      result: "아트워크, 비전보드 영상"
    },
    {
      week: "4주차",
      title: "영상 핵심 스킬 터득",
      summary: "고퀄리티 영상 효과와 트렌틱한 쇼츠 제작",
      details: [
        "미드저니 영상 레퍼런스 활용법",
        "고퀄리티 영상 효과 비법, 비밀 AI툴 공개",
        "SUNO 4.5 버전으로 감성 영상 구현",
        "트렌드 영상 분석 및 쇼츠 영상 제작"
      ],
      result: "SNS 유행 쇼츠 영상"
    },
    {
      week: "5주차",
      title: "고퀄 영상 편집 마스터",
      summary: "전문적인 영상 편집 및 광고 제작 실습",
      details: [
        "캔바, 캡컷을 활용한 영상 편집",
        "고급 영상 편집 및 고도화된 전환 기례",
        "그록(Grok), 소라(Sora) 등 최신 툴 활용",
        "소상공인 쇼츠 광고, 명품 스타일 광고"
      ],
      result: "쇼츠 광고, 명품 스타일 광고"
    },
    {
      week: "6주차",
      title: "브랜드 확장 및 전시",
      summary: "굿즈 제작, 출판 그리고 온라인 전시회",
      details: [
        "미드저니 이미지으로 나만의 굿즈 만들기",
        "메타버스 온라인 전시 및 플레이리스트",
        "나의 작품 영상 SNS 홍보 마케팅",
        "완성 책 출판 등록 및 광고 소재 제작"
      ],
      result: "굿즈, 아트 온라인 전시"
    }
  ];

  const part1 = curriculumData.slice(0, 3);
  const part2 = curriculumData.slice(3, 6);

  const GOLD = "#A68253";
  const ORANGE = "#FF6A3D";
  const CARD_BG = "#14161A";
  const SUB_TEXT = "#BFBFBF";

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#FF6A3D]/30 overflow-x-hidden">
      
      {/* 1. Hero Section (Super Hybrid: Earth Centered Top + Favored Fire Split) */}
      <section className="relative pt-24 pb-28 md:pt-28 md:pb-32">
        {/* Glow Effects */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[150px] opacity-[0.05] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${GOLD}, transparent 70%)` }}
        ></div>
        
        <div className="relative z-10 site-container">
          
          {/* A. Centered Top Section (Earth Structure Clone) */}
          <div className="text-center mb-24 md:mb-28">
            <Reveal>
              {/* Icon Area */}
              <div className="flex justify-center mb-10">
                <div className="relative w-24 h-24 md:w-32 md:h-32 group">
                  <Image 
                    src="/images/icon/fire.png" 
                    alt="Fire Icon" 
                    fill 
                    className="object-contain filter drop-shadow-[0_0_20px_rgba(166,130,83,0.3)] group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
              </div>
              
              <div className="course-caption tracking-[0.4rem] mb-4 uppercase font-display opacity-90 font-medium" style={{ color: GOLD }}>
                Fire Curriculum • 6 Weeks
              </div>
              
              <h1 className="course-hero-title font-display mb-8 leading-tight tracking-[0.02em] italic">
                마음을 <span style={{ color: GOLD }}>그리다</span>
              </h1>

              <p className="course-hero-sub text-[#BFBFBF] font-light leading-relaxed max-w-3xl mx-auto mb-14">
                이미지 제작부터 브랜드 완성까지, <span className="text-white font-medium">나만의 세계를 구축하는 첫 단계</span>
              </p>
            </Reveal>

            {/* Quote Box (Earth Style) */}
            <Reveal delayMs={200}>
              <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#1c1914] to-[#14161A] border border-[rgba(166,130,83,0.15)] mb-12 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundColor: `${GOLD}0D` }}></div>
                <p className="relative z-10 course-quote text-[#D9D9D9] leading-[1.6] italic font-light">
                  “단순한 도구의 학습을 넘어 <br />
                  나의 감각이 하나의 브랜드가 되고 <br />
                  <span className="text-white font-semibold">‘작품’</span>으로 탄생하는 과정, <br />
                  그것이 <span style={{ color: GOLD }} className="font-semibold">아트 크리에이터</span>의 시작입니다.”
                </p>
              </div>
            </Reveal>

            {/* Centered Buttons (Earth Style) */}
            <Reveal delayMs={400}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  className="group relative h-16 w-full sm:w-72 px-10 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#A68253] to-[#8B5E3C] text-white shadow-2xl transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <span className="relative z-10 font-bold italic">강의 안내 받기</span>
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#A68253] to-[#8B5E3C] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
                </a>
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-sm tracking-widest uppercase"
                >
                  <span className="w-5 h-[1px] bg-white/20"></span>
                  강의 안내 PDF 보기
                </a>
              </div>
            </Reveal>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-24 md:mb-28" />

          {/* B. Split Visual Section (Restored Favored Design) */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 text-left">
              <Reveal delayMs={600} slideFrom="left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }}></div>
                  <span className="course-caption tracking-[0.3rem] uppercase font-display font-medium" style={{ color: GOLD }}>
                    Creator Academy
                  </span>
                </div>
                <h2 className="course-section-title font-display mb-8 leading-tight tracking-tight italic">
                  AI 아트 &<br />
                  <span style={{ color: GOLD }}>영상 창작 과정</span>
                </h2>
                
                <div className="space-y-6 mb-10">
                  <h3 className="course-mid-title font-light text-white leading-tight">
                    당신의 감성이<br />
                    <span className="font-bold underline underline-offset-8" style={{ textDecorationColor: ORANGE }}>작품이 되는 순간</span>
                  </h3>
                  <p className="course-body text-[#BFBFBF] font-light leading-relaxed max-w-xl">
                    보이지 않는 감각을 시각적 실체로 만드는<br />
                    <span className="text-white font-medium italic">당신만의 전시가 시작됩니다.</span>
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] inline-block mb-8">
                   <p className="course-caption text-[#BFBFBF] italic leading-relaxed">
                    단순한 기술 습득을 넘어 매력적인 콘텐츠를 설계하는<br />
                    <span className="text-white font-medium">프로페셔널 아트 크리에이터 양성 과정</span>입니다
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Visual Masterpiece */}
            <div className="lg:w-1/2 w-full">
              <Reveal delayMs={800} slideFrom="right">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/[0.1] shadow-[0_0_120px_rgba(166,130,83,0.2)] group">
                  <Image 
                    src="/images/courses/fire/hero.png" 
                    alt="Fire Masterpiece" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70"></div>
                  
                  {/* Floating Narrative Box */}
                  <div className="absolute bottom-8 left-8 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[280px]">
                    <p className="course-caption font-light text-white/90 italic leading-relaxed">
                      "도구를 배우는 단계에서 <br />
                      전문가로 거듭나는 경험"
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* C. 강의 소개 보강: 마음을 표현하는 AI 아트 (지침 3번) */}
          <div className="mt-20 md:mt-24 pt-16 border-t border-white/5">
            <Reveal delayMs={300}>
              <div className="w-full mx-auto p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#1A1815] via-[#14161A] to-black border border-[#A68253]/25 shadow-2xl relative overflow-hidden text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A68253]/15 border border-[#A68253]/30">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.2em] text-[#A68253] uppercase">
                    Core Philosophy
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-sm md:text-base text-[#D9D9D9] font-light tracking-wide italic">
                    &ldquo;기술의 속도를 잠시 내려놓고, 내 안의 감정과 이야기를 한 장의 그림으로 만나보세요.&rdquo;
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    &ldquo;더 빨리, 더 많이 만드는 AI가 아니라, <br className="hidden sm:inline" />
                    <span style={{ color: GOLD }}>나의 마음을 표현하는 AI</span>.&rdquo;
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#BFBFBF] font-light leading-relaxed max-w-2xl mx-auto break-keep pt-2">
                  <p>
                    AI로 아름다운 그림을 만드는 방법은 많습니다. <br className="hidden sm:inline" />
                    하지만 그 그림에 나의 감정과 기억, 내면의 이야기를 담는 방법은 조금 다릅니다.
                  </p>
                  <p>
                    <span className="text-white font-medium">「불 — 마음을 그리다」</span>는 AI 이미지 창작 기술에 자기 성찰과 명상적 창작을 결합한 감성 아트 교육입니다.
                    감정을 색과 이미지로 표현하는 것에서 출발해 오라클 카드, 감성 아트 굿즈, 그림책, 영상 콘텐츠로 확장하고, 나만의 작품을 세상에 선보이는 경험까지 이어갑니다.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-sm sm:text-base font-bold text-white italic">
                    &ldquo;기술에 나를 맞추지 않고, 기술로 나다운 작품을 만드는 시간.&rdquo;
                  </p>
                  <p className="text-xs text-[#A68253] font-medium tracking-wide">
                    ✦ AI라는 붓으로 마음을 그리고, 나만의 작품으로 세상과 연결되는 시간.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. 문제 제기 - 문제 공감 */}
      <section className="py-24 md:py-28 bg-black relative">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="course-section-title font-display mb-6 text-white italic">
                혹시 이런 생각을<br />
                <span style={{ color: GOLD }}>하고 있나요?</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "콘텐츠를 만들고 싶은데 감각이 부족합니다",
              "이미지와 영상이 중요한 건 알지만 시작이 어렵습니다",
              "나만의 스타일과 브랜드를 만들고 싶습니다",
              "평범한 콘텐츠에서 벗어나고 싶습니다"
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="flex items-center gap-5 p-8 rounded-2xl bg-[#14161A] border border-white/[0.05] group transition-all duration-500 hover:border-[#A68253]/30 hover:-translate-y-1">
                  <div className="w-2 h-2 rounded-full bg-[#A68253]" />
                  <p className="text-[#BFBFBF] course-body font-light group-hover:text-white transition-colors">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={500}>
            <div className="mt-16 text-center">
              <div className="inline-block p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#14161A] to-black border border-white/10 shadow-xl">
                <p className="course-quote italic leading-relaxed text-[#BFBFBF]">
                  지금 필요한 것은<br />
                  <span className="text-white font-bold italic underline underline-offset-8" style={{ textDecorationColor: GOLD }}>기술이 아니라 표현</span>입니다
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. 해결 제안 */}
      <section className="py-24 md:py-28 bg-black">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="course-section-title font-display mb-6 text-white">이 강의는 당신을 이렇게 바꿉니다</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "감정을 시각화하는 능력", 
                desc: "보이지 않는 감각을 구체적인 예술로 완성",
                icon: "✨" 
              },
              { 
                title: "나만의 스타일을 만드는 힘", 
                desc: "수많은 콘텐츠 사이에서 독보적인 취향 발견",
                icon: "🎨" 
              },
              { 
                title: "콘텐츠를 작품으로 바꾸는 감각", 
                desc: "단순한 연습을 넘어 프리미엄 브랜드 가치 창출",
                icon: "🔥" 
              }
            ].map((card, i) => (
              <Reveal key={i} delayMs={i * 200}>
                <div className="p-10 md:p-12 rounded-[2.5rem] bg-[#14161A] border border-white/[0.05] h-full flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700 hover:border-[#A68253]/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A68253]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-700">{card.icon}</div>
                  <h3 className="course-card-title font-bold mb-4 text-white leading-tight">{card.title}</h3>
                  <div className="w-10 h-[1px] mb-6 bg-white/10" />
                  <p className="text-[#BFBFBF] leading-relaxed course-caption font-light group-hover:text-white/90 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY Section */}
      <section className="py-24 md:py-28 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(166,130,83,0.05),transparent_50%)]" />
        <div className="site-container relative z-10 text-center">
          <Reveal>
            <span style={{ color: GOLD }} className="course-caption tracking-[0.4em] uppercase mb-6 block font-semibold">The Core Philosophy</span>
            <h2 className="course-section-title font-display mb-12 italic text-white">지금은 <span style={{ color: GOLD }}>표현의 시대</span>입니다</h2>
            
            <div className="space-y-10 course-body font-light text-[#BFBFBF] max-w-3xl mx-auto">
              <p>
                이미지 하나, 영상 하나가<br />
                <span className="text-white font-bold course-mid-title">사람의 감정을 움직입니다</span>
              </p>
              <div className="w-[1px] h-12 mx-auto bg-gradient-to-b from-white/20 to-transparent" />
              <p>
                AI는 도구일 뿐입니다<br />
                결국 중요한 것은 <span className="text-white font-medium">당신의 감각</span>입니다
              </p>
              <div className="p-10 rounded-[3rem] bg-gradient-to-br from-[#14161A] to-black border border-white/[0.08] mt-14 relative group">
                <div className="absolute inset-0 bg-[#A68253]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <p className="relative z-10 text-white course-mid-title leading-tight">
                  이 강의는<br />
                  그 <span style={{ color: GOLD }} className="font-bold underline underline-offset-8">감각을 깨우는 과정</span>입니다
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 신규 SECTION A. 마음에서 시작하는 AI 아트 (지침 4번) */}
      <section className="py-24 md:py-28 bg-[#080808] border-t border-b border-white/5 relative overflow-hidden">
        {/* 온기 가득한 은은한 불빛 광원 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A3D]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="site-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#A68253]/30 text-[#A68253] text-[11px] tracking-widest uppercase">
                {EMOTIONAL_START_DATA.badge}
              </div>
              <h2 className="course-section-title font-display text-white italic">
                {EMOTIONAL_START_DATA.title}
              </h2>
              <div className="space-y-3 pt-2 text-[#BFBFBF] font-light leading-relaxed course-body">
                {EMOTIONAL_START_DATA.description.map((desc, dIdx) => (
                  <p key={dIdx} className="break-keep">{desc}</p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3단계 가로 흐름형 다이어그램 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mx-auto mb-14">
            {EMOTIONAL_START_DATA.steps.map((st, sIdx) => (
              <Reveal key={st.step} delayMs={sIdx * 200} slideFrom="bottom">
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#14161A] border border-white/[0.08] hover:border-[#A68253]/40 transition-all duration-500 h-full flex flex-col justify-between space-y-6 shadow-2xl group hover:-translate-y-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#A68253]/15 text-[#A68253] border border-[#A68253]/30">
                        {st.step}
                      </span>
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {st.icon}
                      </span>
                    </div>

                    <h3 className="course-card-title font-bold text-white leading-tight">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#BFBFBF] font-light leading-relaxed break-keep">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#A68253]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]" />
                    <span className="font-light tracking-wide">핵심 창작 단계 0{sIdx + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 하단 카피 */}
          <Reveal delayMs={600}>
            <div className="text-center max-w-2xl mx-auto">
              <p className="course-quote font-light italic text-[#D9D9D9] leading-relaxed">
                &ldquo;{EMOTIONAL_START_DATA.quote}&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. 🎨 GALLERY SECTION (CORE) */}
      <section className="py-24 md:py-28 bg-black">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block px-5 py-1.5 rounded-full border border-[#A68253]/30 text-[#A68253] text-[11px] tracking-widest uppercase mb-4">Exhibition Space</div>
              <h2 className="course-section-title font-display mb-6 text-white italic">The Gallery</h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto italic mb-8">
                당신의 <span style={{ color: GOLD }} className="font-medium">작품</span>이 전시됩니다
              </p>
              <div className="w-16 h-[1px] bg-white/20 mx-auto mb-8" />
              <p className="course-body text-[#BFBFBF] font-light">
                이 과정에서 만든 결과물은 단순한 연습이 아니라<br />
                실제 작품이 됩니다
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((num) => (
              <Reveal key={num} delayMs={num * 200}>
                <div className="group relative">
                  {/* Frame Design */}
                  <div className="relative aspect-[3/4] p-5 bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden transition-all duration-700 group-hover:border-[#A68253]/30 rounded-2xl">
                    <div className="absolute inset-0 border-[16px] border-[#14161A]/50 pointer-events-none z-10" />
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <Image 
                        src={`/images/courses/fire/gallery${num}.png`} 
                        alt={`Masterpiece ${num}`} 
                        fill 
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  {/* Caption */}
                  <div className="mt-6 text-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="course-caption tracking-[0.2em] font-light uppercase text-[#A68253]">Creative Project #0{num}</p>
                    <div className="h-[1px] w-6 bg-[#A68253]/40 mx-auto mt-2" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 신규 SECTION B. 6가지 감성 창작 경험 (지침 5번) */}
      <section className="py-24 md:py-28 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
        <div className="site-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#A68253]/30 text-[#A68253] text-[11px] tracking-widest uppercase">
                6 Creative Assets
              </div>
              <h2 className="course-section-title font-display text-white italic">
                마음에서 시작한 이미지가 <br className="hidden sm:inline" />
                <span style={{ color: GOLD }}>나만의 작품</span>이 됩니다.
              </h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light italic">
                &ldquo;감정을 표현하는 한 장의 그림부터, 세상에 선보이는 나만의 아트 컬렉션까지.&rdquo;
              </p>
              <div className="w-16 h-[1px] bg-white/20 mx-auto pt-2" />
            </div>
          </Reveal>

          {/* 6개 창작 경험 그리드 (데스크톱 3열 x 2행, 모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mx-auto mb-12">
            {SIX_CREATIVE_EXPERIENCES.map((item, idx) => (
              <Reveal key={item.num} delayMs={idx * 150} slideFrom="bottom">
                <div className="p-8 md:p-9 rounded-[2.5rem] bg-[#14161A] border border-white/[0.08] hover:border-[#A68253]/50 transition-all duration-500 flex flex-col justify-between space-y-6 h-full shadow-2xl group hover:-translate-y-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#A68253]">
                        PORTFOLIO {item.num}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider text-[#A68253] uppercase px-2.5 py-0.5 rounded-full bg-[#A68253]/15 border border-[#A68253]/25">
                        {item.mockup}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="course-card-title font-bold text-white group-hover:text-[#A68253] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#BFBFBF] font-light leading-relaxed break-keep">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-[#A68253] font-light">
                      #{item.tag}
                    </span>
                    <span className="text-xs text-white/30 group-hover:text-white/70 transition-colors">
                      창작 실습 분야 →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 투명성 안내 문구 */}
          <Reveal delayMs={400}>
            <div className="w-full mx-auto p-5 rounded-2xl bg-[#121417] border border-white/5 text-center">
              <p className="text-xs text-[#BFBFBF]/80 font-light leading-relaxed break-keep">
                ※ 위 6개 창작 영역은 강의에서 학습하고 실습하는 포트폴리오 범주이며, 개인의 학습 속도와 선택에 따라 중심 결과물이 다를 수 있습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. 상세 커리큘럼 */}
      <section className="py-24 md:py-28 bg-[#050505]">
        <div className="site-container">
          <Reveal>
            <div className="relative p-8 md:p-16 rounded-[3rem] border border-white/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0a0a0a]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A68253]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 text-center mb-16 md:mb-20">
                <h2 className="course-section-title font-display mb-6 tracking-tight italic text-white">Curriculum</h2>
                <div className="w-24 h-[1px] mx-auto mb-8 bg-[#A68253]/30" />
                
                <p className="course-hero-sub text-white font-light max-w-3xl mx-auto leading-relaxed mb-10 italic">
                  이 6주 과정은<br />
                  <span className="text-white font-bold">이미지 → 영상 → 브랜드 → 수익화</span>까지<br />
                  <span style={{ color: GOLD }}>단계적으로 완성</span>하는 과정입니다
                </p>

                <div className="inline-flex items-center px-8 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  <span className="text-[#BFBFBF] course-caption tracking-widest font-light">
                     실시간 코칭 • 매주 과제 완성 • 디지털 전시 연계
                  </span>
                </div>
              </div>

              {/* Part 1 */}
              <div className="mb-20 md:mb-24">
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#A68253]/20" />
                  <h3 className="course-mid-title font-display tracking-[0.2em] px-4 italic text-[#A68253] text-center">
                    Phase 1. <span className="text-white font-normal uppercase">Foundation</span>
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#A68253]/20" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {part1.map((item, i) => (
                    <Reveal key={i} delayMs={i * 200} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.06] transition-all duration-700 h-full bg-[#14161A] hover:bg-[#1a1c22] hover:border-[#A68253]/30 hover:-translate-y-2 shadow-2xl flex flex-col justify-between">
                        <div>
                          <div className="text-3xl font-display font-bold mb-4 tracking-tighter text-[#A68253]/30 group-hover:text-[#A68253]/60 transition-colors uppercase italic">{item.week}</div>
                          <h4 className="course-card-title font-bold mb-6 text-white leading-tight">
                            {item.title}
                          </h4>
                          
                          <ul className="space-y-4 mb-8">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-[#BFBFBF] group-hover:text-white transition-colors course-caption">
                                <span style={{ color: GOLD }} className="text-xs mt-1.5 opacity-60">■</span>
                                <span className="font-light">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="font-bold course-body italic tracking-wide" style={{ color: GOLD }}>
                             {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500 opacity-30">→</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Part 2 */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#A68253]/20" />
                  <h3 className="course-mid-title font-display tracking-[0.2em] px-4 italic text-[#FF6A3D] text-center">
                    Phase 2. <span className="text-white font-normal uppercase">Expansion</span>
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#A68253]/20" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {part2.map((item, i) => (
                    <Reveal key={i} delayMs={i * 200} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.06] transition-all duration-700 h-full bg-[#14161A] hover:bg-[#1a1c22] hover:border-[#FF6A3D]/30 hover:-translate-y-2 shadow-2xl flex flex-col justify-between">
                        <div>
                          <div className="text-3xl font-display font-bold mb-4 tracking-tighter text-[#FF6A3D]/30 group-hover:text-[#FF6A3D]/60 transition-colors uppercase italic">{item.week}</div>
                          <h4 className="course-card-title font-bold mb-6 text-white leading-tight">
                            {item.title}
                          </h4>
                          
                          <ul className="space-y-4 mb-8">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-[#BFBFBF] group-hover:text-white transition-colors course-caption">
                                <span style={{ color: ORANGE }} className="text-xs mt-1.5 opacity-60">■</span>
                                <span className="font-light">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="font-bold course-body italic tracking-wide" style={{ color: ORANGE }}>
                             {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500 opacity-30">→</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 신규 SECTION C. 확장된 6주 AI 감성 아트 커리큘럼 (지침 6번) */}
      <section className="py-24 md:py-28 bg-[#070707] border-b border-white/5 relative overflow-hidden">
        <div className="site-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#A68253]/30 text-[#A68253] text-[11px] tracking-widest uppercase">
                Expanded Roadmap
              </div>
              <h2 className="course-section-title font-display text-white italic">
                마음을 읽고, 표현하고, <br className="hidden sm:inline" />
                <span style={{ color: GOLD }}>소장하고, 나누는 6주</span>
              </h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light italic">
                기존 실무 테크닉을 넘어, 감성 예술과 창작 브랜드로 확장되는 6주 심화 로드맵입니다.
              </p>
              <div className="w-16 h-[1px] bg-white/20 mx-auto pt-2" />
            </div>
          </Reveal>

          {/* 6주차 아코디언 / 타임라인 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto mb-12">
            {EXPANDED_6WEEKS_CURRICULUM.map((wk, wIdx) => {
              const isOpen = expandedWeek === wIdx;
              return (
                <Reveal key={wk.week} delayMs={wIdx * 100} slideFrom="bottom">
                  <div
                    onClick={() => setExpandedWeek(isOpen ? null : wIdx)}
                    className={`p-7 sm:p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer flex flex-col justify-between h-full shadow-2xl ${
                      isOpen
                        ? "bg-[#16181D] border-[#A68253]/60 shadow-[0_0_50px_rgba(166,130,83,0.15)]"
                        : "bg-[#14161A] border-white/[0.08] hover:border-[#A68253]/40 hover:-translate-y-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#A68253]/15 text-[#A68253] border border-[#A68253]/30">
                          {wk.week}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-[#D9D9D9]">
                            {wk.theme}
                          </span>
                          <span className="text-lg">{wk.icon}</span>
                        </div>
                      </div>

                      <h3 className="course-card-title font-bold text-white leading-tight">
                        {wk.title}
                      </h3>

                      <ul className="space-y-2 pt-2 border-t border-white/5">
                        {wk.topics.map((tpc, tIdx) => (
                          <li key={tIdx} className="text-xs text-[#BFBFBF] font-light flex items-start gap-2">
                            <span style={{ color: GOLD }} className="shrink-0 mt-0.5">•</span>
                            <span className="break-keep">{tpc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs mt-4">
                      <span className="text-white/40 font-light">대표 결과물</span>
                      <span className="font-semibold text-[#A68253] bg-[#A68253]/10 px-2.5 py-1 rounded-md border border-[#A68253]/20">
                        {wk.result}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-xs text-[#BFBFBF]/60 font-light">
              ※ 본 6주 확장 로드맵은 AI 아트 테크닉을 감성 콘텐츠와 브랜드로 승화시키는 추천 심화 실습 구성입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 신규 SECTION D. 온라인 아트 전시회 (지침 7번) */}
      <section className="py-24 md:py-32 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        {/* 잔잔한 앰비언트 조명 */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A68253]/8 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container relative z-10 space-y-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#A68253]/30 text-[#A68253] text-[11px] tracking-widest uppercase">
                Online Exhibition
              </div>
              <h2 className="course-section-title font-display text-white italic">
                내 마음의 그림이 <br className="hidden sm:inline" />
                <span style={{ color: GOLD }}>처음으로 갤러리에 걸리는 순간</span>
              </h2>
              <div className="space-y-3 pt-2 text-[#BFBFBF] font-light leading-relaxed course-body max-w-2xl mx-auto">
                <p>
                  처음에는 작은 감정 하나에서 시작한 그림이었습니다. <br className="hidden sm:inline" />
                  하지만 작품이 하나씩 쌓이면서 나만의 색과 이야기가 생겨납니다.
                </p>
                <p>
                  6주 동안 제작한 작품 가운데 대표작을 선정하고, 작가 노트를 작성해 온라인 전시 공간에 소개합니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 대형 16:9 가상 갤러리 프리뷰 프레임 */}
          <Reveal delayMs={300}>
            <div className="w-full mx-auto rounded-[3rem] bg-gradient-to-b from-[#181614] to-[#0D0E10] border border-[#A68253]/30 p-6 sm:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A3D] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#A68253] uppercase">
                    VIRTUAL ART GALLERY • 온라인 전시 예시
                  </span>
                </div>
                <span className="text-xs text-white/40 font-light">
                  모바일 & PC 반응형 디지털 갤러리
                </span>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl bg-black/80 border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-4 overflow-hidden group">
                <div className="w-20 h-20 rounded-full bg-[#A68253]/15 border border-[#A68253]/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                  🏛️
                </div>
                <div className="space-y-2 max-w-lg">
                  <h3 className="course-card-title font-bold text-white leading-tight">
                    나만의 대표작과 작가 노트가 걸리는 전시 공간
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BFBFBF] font-light leading-relaxed break-keep">
                    링크 하나로 누구나 감상할 수 있는 나만의 웹 갤러리를 완성하고, 소중한 사람들과 세상에 따뜻한 감동을 공유합니다.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 5단계 전시 과정 카드 */}
          <div className="w-full mx-auto space-y-6">
            <h3 className="text-center text-xs font-bold tracking-[0.25em] text-[#A68253] uppercase">
              5 Steps To Virtual Exhibition
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {EXHIBITION_STEPS.map((st, idx) => (
                <Reveal key={st.step} delayMs={idx * 150} slideFrom="bottom">
                  <div className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.08] flex flex-col justify-between space-y-2 text-center h-full hover:border-[#A68253]/30 transition-colors">
                    <span className="text-[11px] font-mono font-bold text-[#A68253]">
                      STEP {st.step}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white break-keep">
                      {st.title}
                    </h4>
                    <p className="text-[11px] text-[#BFBFBF]/80 font-light leading-relaxed break-keep">
                      {st.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 강조 문구 배너 */}
          <Reveal delayMs={500}>
            <div className="w-full mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#171512] via-[#1F1B16] to-[#171512] border border-[#A68253]/30 text-center space-y-3">
              <p className="text-base sm:text-lg md:text-xl font-display italic text-white break-keep leading-relaxed">
                &ldquo;그림을 만드는 경험에서, <span style={{ color: GOLD }} className="font-bold">내 이름으로 작품을 선보이는 경험</span>까지.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. 결과 섹션 */}
      <section className="py-24 md:py-28 bg-black">
        <div className="site-container">
          <Reveal>
            <div className="shadow-[0_0_100px_rgba(166,130,83,0.05)] rounded-[3rem] p-8 md:p-16 border border-white/5 bg-[#0a0a0a]">
              <div className="text-center mb-16">
                <h2 className="course-section-title font-display mb-6 text-white italic">이 과정을 끝내면</h2>
                <div className="w-16 h-[1px] bg-[#A68253]/30 mx-auto" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {[
                  "디지털 아트 크리에이터",
                  "굿즈 브랜드 디렉터",
                  "미디어 아트 크리에이터",
                  "영상 콘텐츠 전문가",
                  "AI 콘텐츠 강사"
                ].map((text, i) => (
                  <Reveal key={i} delayMs={i * 100}>
                    <div className="p-6 rounded-2xl bg-[#14161A] border border-white/5 text-center group transition-all duration-300 hover:border-[#A68253]/40">
                      <p className="course-card-title text-[#BFBFBF] font-light group-hover:text-white transition-colors">
                        ✔ {text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              
              <div className="text-center">
                <p className="course-quote font-display italic text-white leading-tight">
                  당신의 감정이<br />
                  <span style={{ color: GOLD }} className="font-bold underline underline-offset-8">하나의 작품으로 완성</span>됩니다
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 신규: 이런 분께 추천합니다 (지침 8번 보강) */}
      <section className="py-24 md:py-28 bg-[#090909] border-t border-b border-white/5 relative overflow-hidden">
        <div className="site-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#A68253]/30 text-[#A68253] text-[11px] tracking-widest uppercase">
                Recommended For
              </div>
              <h2 className="course-section-title font-display text-white italic">
                이런 분들께 <span style={{ color: GOLD }}>이 강의를 추천합니다</span>
              </h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light italic">
                감각적인 예술 창작부터 나만의 브랜드 구축까지, 마음을 표현하고 싶은 모든 분을 환영합니다.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
            {RECOMMENDED_AUDIENCE.map((text, idx) => (
              <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
                <div className="p-7 rounded-[2rem] bg-[#14161A] border border-white/[0.08] hover:border-[#A68253]/40 transition-all duration-300 flex items-start gap-4 h-full shadow-lg group hover:-translate-y-1">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A3D] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="course-card-title text-[#BFBFBF] font-light leading-relaxed group-hover:text-white transition-colors break-keep">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 확장 섹션 */}
      <section className="py-24 md:py-28 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#FF6A3D]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="site-container flex flex-col lg:flex-row items-center gap-16 md:gap-20">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="course-section-title font-display mb-8 leading-tight italic text-white uppercase tracking-tight">
                Unlimited<br />
                <span style={{ color: GOLD }}>Expansion</span>
              </h2>
              <p className="course-hero-sub font-light text-[#BFBFBF] mb-10 leading-relaxed">
                이 과정은 여기서 끝나지 않습니다
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["콘텐츠 제작", "전자책", "굿즈", "브랜드", "강의"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 course-body">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A3D]" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-[2rem] bg-[#14161A] border border-white/10">
                <p className="course-mid-title text-white font-light italic">
                  👉 하나의 시작이<br />
                  <span className="font-bold" style={{ color: GOLD }}>여러 개의 수익 구조</span>로 확장됩니다
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-6">
            <Reveal delayMs={400} slideFrom="bottom">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/10 group">
                <Image src="/images/courses/fire/gallery1.png" alt="Expansion 1" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </Reveal>
            <Reveal delayMs={600} slideFrom="bottom">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/10 mt-8 group">
                <Image src="/images/courses/fire/gallery2.png" alt="Expansion 2" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8-2. HEART ART PROJECT (BRAND ART CONTENT 10) */}
      <HeartArtProjectSection />

      {/* 신규: 지도사 과정과의 연결 배너 (지침 9번) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0a0a0a] via-[#14161A] to-black border-t border-b border-white/5 relative overflow-hidden">
        <div className="site-container relative z-10 w-full">
          <Reveal>
            <div className="w-full p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#171512] via-[#1F1B16] to-[#171512] border border-[#A68253]/35 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A68253]/15 border border-[#A68253]/25">
                  <span className="text-[11px] font-bold tracking-wider text-[#A68253] uppercase">
                    Certification Pathway
                  </span>
                </div>
                <h3 className="course-card-title text-xl md:text-2xl font-bold text-white leading-tight">
                  나만의 창작 경험을 누군가와 나누고 싶다면?
                </h3>
                <p className="text-xs sm:text-sm text-[#BFBFBF] font-light leading-relaxed break-keep">
                  감성 아트 창작을 넘어 교육 프로그램을 기획하고 지도사 활동을 준비하고 싶다면, 자명스쿨의 AI 감성 아트 지도사 과정을 살펴보세요.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/courses/ai-emotional-art"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#A68253] to-[#8B5E3C] text-white font-bold text-xs sm:text-sm tracking-wider hover:brightness-110 transition-all shadow-xl group"
                >
                  <span>AI 감성 아트 지도사 과정 자세히 보기</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-28 md:py-36 text-center bg-black relative overflow-hidden">
        {/* Cinematic Particles Backdrop (CSS Placeholder) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#A68253 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="site-container relative z-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16 relative">
                <Image src="/images/icon/fire.png" alt="Fire Icon" fill className="object-contain filter drop-shadow-[0_0_20px_rgba(166,130,83,0.5)] animate-pulse" />
              </div>
            </div>
            <h2 className="course-section-title font-display mb-10 tracking-tight italic text-white">
              지금, 당신의 작품을<br />
              <span style={{ color: GOLD }}>시작하세요</span>
            </h2>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group relative h-16 w-full sm:w-80 px-8 flex items-center justify-center course-card-title font-bold tracking-[0.15em] rounded-full bg-gradient-to-br from-[#A68253] to-[#FF6A3D] text-black shadow-[0_20px_60px_rgba(255,106,61,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold italic">강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#A68253] to-[#FF6A3D] opacity-0 blur-3xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              </a>
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group flex flex-col items-center"
              >
                <span className="text-white/40 group-hover:text-[#A68253] transition-all duration-300 course-caption tracking-[0.3em] uppercase border-b border-white/5 pb-1 mb-2">
                  문의하기
                </span>
                <span className="text-[10px] text-white/20 uppercase tracking-[0.5em]">REACH OUT</span>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={800}>
            <Link
              href="/courses"
              className="inline-block mt-24 text-white/20 hover:text-[#A68253] transition-all duration-500 course-caption tracking-[0.5em] uppercase font-light"
            >
              ← Return To Collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 수강 취소 및 환불 안내 공통 섹션 */}
      <CourseRefundPolicySection />

      {/* Global CSS Overrides for this page */}
      <style jsx global>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
