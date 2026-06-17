"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import { Star, Quote, Users, Award, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "김*영",
    role: "1인 창업가 / 주부",
    course: "불 & 흙 (AI 아트 & 책 출판)",
    courseSlug: "earth-fire",
    rating: 5,
    title: "AI로 나만의 동화책을 출판하고 진짜 작가가 되었습니다",
    content: "평생 나만의 책을 쓰는 게 소원이었는데, 글쓰기 재주도 없고 그림도 그릴 줄 몰라 늘 포기했었습니다. 자명스쿨에서 AI 이미지 생성 기술과 스토리 구성법을 배우면서 단 4주 만에 제 이름으로 된 그림 동화책을 출판할 수 있었습니다. 교보문고에 제 책이 등록되던 날의 감격은 잊지 못합니다. 무의식에 잠겨있던 제 이야기를 AI라는 현대적 도구로 세상에 꺼내놓을 수 있게 도와주셔서 감사합니다.",
    date: "2026.05.12"
  },
  {
    id: 2,
    name: "박*우",
    role: "직장인 / 작가",
    course: "흙 (자기 이해 & 책 출판)",
    courseSlug: "earth",
    rating: 5,
    title: "마음공부를 통해 내면을 치유하고 글로 표현하는 힘을 얻었습니다",
    content: "단순한 글쓰기 기술을 가르쳐주는 곳은 많지만, 자명스쿨은 내면의 상처와 감정을 깊이 마주하고 이를 글로 녹여내는 특별한 치유의 경험을 줍니다. 자명쌤의 심리 코칭과 흙 코스를 함께 하면서 마음속에 쌓여 있던 묵은 감정들을 한 권의 책으로 고백해 낼 수 있었습니다. 책이 발간된 후 마음이 한결 가벼워졌고 주변 사람들로부터 큰 공감과 위로를 얻었습니다. 삶의 방향성을 찾아준 인생 강의입니다.",
    date: "2026.04.28"
  },
  {
    id: 3,
    name: "이*은",
    role: "프리랜서 / 콘텐츠 크리에이터",
    course: "물 (수익화 & 자동화)",
    courseSlug: "water",
    rating: 5,
    title: "지식 창업 자동화 시스템 구축으로 월 500만원 이상 자동 수익 달성",
    content: "그동안 콘텐츠는 열심히 만들었지만 어떻게 수익으로 연결해야 할지 막막했습니다. 자명스쿨의 물 코스에서 무자본 지식 창업과 마케팅 자동화 깔때기(Funnel) 설계를 배운 후, 제가 잠든 시간에도 전자책과 강의가 자동으로 판매되는 시스템을 갖추게 되었습니다. 기술적인 막힘 없이 하나씩 구현할 수 있도록 상세히 이끌어주신 덕분입니다. 프리랜서로서 경제적 독립과 시간적 자유를 동시에 얻었습니다.",
    date: "2026.05.20"
  },
  {
    id: 4,
    name: "정*민",
    role: "브랜드 디자이너",
    course: "공기 (브랜딩 & 콘텐츠 제작)",
    courseSlug: "air",
    rating: 5,
    title: "나만의 독창적인 정체성과 브랜딩 메시지를 확립했습니다",
    content: "수많은 디자이너들 사이에서 나만의 차별점이 무엇인지 몰라 슬럼프를 겪던 시기에 자명스쿨의 공기 코스를 수강했습니다. 타인을 모방하는 브랜딩이 아니라, 제 안의 고유한 메시지와 스토리를 찾아 이를 콘텐츠로 시각화하는 방법을 깨달았습니다. 덕분에 개인 브랜드를 런칭했고, 저만의 철학에 공감하는 충성 팬과 클라이언트들을 모을 수 있게 되었습니다. 저처럼 길을 잃은 창작자들에게 강력 추천합니다.",
    date: "2026.03.15"
  },
  {
    id: 5,
    name: "최*윤",
    role: "명상 지도사 / 강사",
    course: "에테르 (풍요 마인드 & 리더쉽)",
    courseSlug: "ether",
    rating: 5,
    title: "돈과 풍요에 대한 부정적 무의식을 깨부수고 리더로 성장했습니다",
    content: "항상 돈에 대한 막연한 불안감과 부족 결핍감이 있었습니다. 자명스쿨 에테르 코스에서 풍요 마인드셋 훈련과 무의식 정화 명상을 거치며, 제가 스스로 가두고 있던 한계를 깨뜨려버렸습니다. 마음이 풍요로워지니 신기하게도 대기업 출강 제안과 협업 요청이 쏟아지기 시작했습니다. 나를 넘어 세상을 이롭게 하는 진정한 영향력을 전하는 리더로 성장한 기분입니다. 고맙습니다.",
    date: "2026.06.02"
  },
  {
    id: 6,
    name: "한*정",
    role: "캘리그라피 작가",
    course: "불 (AI 아트 & 감성 표현)",
    courseSlug: "fire",
    rating: 5,
    title: "내 손글씨와 AI 아트의 만남, 전시회까지 개최했습니다",
    content: "아날로그 손글씨 작업을 해오던 저에게 AI 아트는 외계 기술 같았습니다. 하지만 불 코스에서 프롬프트 작성법과 이미지 도구 활용법을 배우면서, 제 손글씨 감성을 디지털 예술 작품으로 승화시킬 수 있었습니다. 이렇게 만들어진 AI 콜라보 작품들로 메타버스 전시회와 소규모 개인전을 개최하는 성과를 이뤘습니다. 전통 예술가들에게도 AI는 강력한 날개가 되어줄 수 있음을 확신합니다.",
    date: "2026.04.10"
  }
];

const FILTER_CATEGORIES = [
  { label: "전체 후기", slug: "all" },
  { label: "흙 (책 출판)", slug: "earth" },
  { label: "불 (AI 아트)", slug: "fire" },
  { label: "공기 (브랜딩)", slug: "air" },
  { label: "물 (수익화)", slug: "water" },
  { label: "에테르 (마인드)", slug: "ether" },
];

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredReviews = REVIEWS_DATA.filter((review) => {
    if (selectedFilter === "all") return true;
    return review.courseSlug.includes(selectedFilter);
  });

  return (
    <div className="bg-true-black min-h-screen font-sans selection:bg-antique-gold/30 text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <HeroParticles />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="group relative inline-block border border-antique-gold/40 bg-antique-gold/5 rounded-full px-6 py-2 text-antique-gold font-display mx-auto text-sm md:text-base tracking-[0.2em] mb-8 uppercase shadow-sm cursor-default transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                성장의 생생한 현장
              </span>
            </span>
          </Reveal>
          
          <Reveal delayMs={200}>
            <h1 className="text-5xl md:text-7xl font-display mb-8 leading-tight tracking-tight uppercase italic">
              <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block py-2 pr-4">
                강의후기
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={400}>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed break-keep">
                자명스쿨의 5원소 성장 시스템을 거쳐간 수강생들의 실제 기록입니다.<br />
                단순히 기술을 배우는 것을 넘어, 삶의 변화를 만들어가고 있습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Key Stats Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <div className="text-center p-4">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-antique-gold" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">1,000명+</p>
              <p className="text-xs text-white/50">누적 졸업생 수</p>
            </div>
            <div className="text-center p-4 border-y sm:border-y-0 sm:border-x border-white/10">
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-antique-gold fill-antique-gold" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">98.7%</p>
              <p className="text-xs text-white/50">강의 만족도</p>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-antique-gold" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">40권+</p>
              <p className="text-xs text-white/50">수강생 실제 도서 출판</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Hero to Content Divider */}
      <Reveal>
        <div className="w-full flex items-center justify-center relative z-20 py-12 opacity-80">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#B89B6A]/80 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-[#B89B6A] bg-[#0b0b10] shadow-[0_0_15px_rgba(184,155,106,0.5)]"></div>
        </div>
      </Reveal>

      {/* 3. Review List Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        {/* Category Filter Pills */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {FILTER_CATEGORIES.map((category) => {
              const active = selectedFilter === category.slug;
              return (
                <button
                  key={category.slug}
                  onClick={() => setSelectedFilter(category.slug)}
                  className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 border cursor-pointer ${
                    active
                      ? "border-antique-gold bg-antique-gold/15 text-white shadow-[0_0_15px_rgba(184,155,106,0.2)]"
                      : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review, idx) => (
            <Reveal key={review.id} delayMs={idx * 100}>
              <div className="h-full flex flex-col justify-between p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-antique-gold/40 hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden">
                {/* Quote Icon Background */}
                <div className="absolute right-6 top-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                  <Quote className="w-24 h-24 text-white" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-antique-gold fill-antique-gold" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-[#B89B6A] group-hover:text-white transition-colors duration-300 leading-snug break-keep">
                    "{review.title}"
                  </h3>

                  {/* Content */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-light break-keep whitespace-pre-line line-clamp-6 group-hover:line-clamp-none transition-all duration-500">
                    {review.content}
                  </p>
                </div>

                {/* Writer Info */}
                <div className="pt-6 border-t border-white/5 flex flex-col gap-2 mt-auto">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">{review.course}</span>
                    <span className="text-white/40">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{review.name}</span>
                    <span className="text-xs text-white/40">|</span>
                    <span className="text-xs text-white/50">{review.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* If no reviews found */}
        {filteredReviews.length === 0 && (
          <Reveal>
            <div className="text-center py-20 border border-white/10 rounded-[2rem] bg-white/[0.02]">
              <MessageSquare className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/50 text-lg">선택한 카테고리에 등록된 후기가 아직 없습니다.</p>
            </div>
          </Reveal>
        )}
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-24 px-6 bg-white/[0.02] border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h3 className="text-3xl md:text-5xl font-display mb-10 leading-tight tracking-tight italic uppercase">
              배움을 넘어 <span className="text-antique-gold">나의 가치</span>를 증명하는 삶<br />
              지금 자명스쿨과 함께 하세요
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/courses"
                className="group relative overflow-visible h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 상세 보기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>

              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                상담 및 문의하기
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
