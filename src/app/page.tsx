'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white">
      <main>
        <Hero />
        <Elements />
        <CommunityBanner />
        <FeaturedLectures />
        <Testimonials />
        <FaqAndContact />
      </main>
    </div>
  );
}

function Elements() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = [
    { title: "흙 (Earth)", desc: "마음을 정화하고 풍요를 위한 기반 다지기", bg: "/images/elements/earth.png", color: "border-earth" },
    { title: "불 (Fire)", desc: "열정과 창조의 불꽃으로 마음을 표현하기", bg: "/images/elements/fire.png", color: "border-fire" },
    { title: "공기 (Air)", desc: "나의 경험과 지식을 세상과 나누고 소통하기", bg: "/images/elements/air.png", color: "border-air" },
    { title: "물 (Water)", desc: "내 안에 흐르는 풍요의 물결로 마음을 채우기", bg: "/images/elements/water.png", color: "border-water" },
    { title: "에테르 (Aether)", desc: "풍요마인드와 리더쉽 확장으로 스스로 빛나기", bg: "/images/elements/ether.png", color: "border-ether" },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-10 pb-20 lg:pt-14 lg:pb-28 px-4 lg:px-8">
      <Reveal>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
          당신의 여정을 안내할 5가지 원소 에너지
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
        {items.map((it, i) => {
          const isActive = activeIndex === i;
          return (
            <Reveal key={it.title} delayMs={i * 100}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-full group relative rounded-2xl bg-white/5 backdrop-blur-md border aspect-[3/4] p-4 flex flex-col justify-end text-left overflow-hidden transition-all duration-300 ease-out transform-gpu text-white 
                  ${isActive ? `${it.color}/70 -translate-y-1 scale-[1.01]` : `border-white/10 hover:${it.color}/50 hover:-translate-y-1 hover:scale-[1.01]`}`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={it.bg} 
                    alt={it.title}
                    fill 
                    className="object-cover transition-transform duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110" 
                  />
                  <div className={`absolute inset-0 bg-black/60 transition-colors duration-500 ${isActive ? 'bg-black/40' : 'group-hover:bg-black/40'}`} />
                </div>

                {/* Top Highlight Line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6C6A8]/40 to-transparent transition-opacity duration-500 z-20 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                <div
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-10 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    background: 'radial-gradient(600px circle at 50% 40%, rgba(214,198,168,0.18), transparent 55%)',
                  }}
                />
                <div className="relative z-20">
                  <div className={`font-bold transition-colors duration-300 ${isActive ? 'text-[#D6C6A8]' : 'text-white'} drop-shadow-lg`}>{it.title}</div>
                  <div className="text-white/70 text-sm mt-1 drop-shadow-md">{it.desc}</div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Reveal delayMs={400}>
        <div className="mt-14 flex justify-center">
          <Link href="/courses">
            <button className="group relative overflow-visible rounded-xl h-12 px-6 text-base font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]">
              {/* External Aura Glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
              />
              {/* Sharp Ring Highlight */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
              />
              <span className="relative z-10">모든 강의 살펴보기</span>
            </button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function CommunityBanner() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#8A6A3F]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#D6C6A8]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8A6A3F]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D6C6A8]/20" />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <Reveal>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B0B10]">
              자명스쿨 성장 커뮤니티
            </h3>
            <p className="mt-2 text-[#0B0B10]/90">
              지금 바로 커뮤니티에 참여해 같은 분야의 사람들과 함께 고민을 나누고 성장해요
            </p>
          </div>
        </Reveal>
        <Reveal delayMs={200}>
          <button className="group relative overflow-visible rounded-xl h-12 px-6 bg-black/20 text-white font-bold transition-all duration-300 ease-out transform-gpu hover:bg-black/30 hover:-translate-y-[1px]">
            {/* External Aura Glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
              style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
            />
            {/* Sharp Ring Highlight */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
            />
            <span className="relative z-10">지금 참여하기</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedLectures() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cards = [
    { title: "흙(Earth) - 마음을 정화하고 풍요를 위한 기반 다지기", price: "마음을 심다: 내 경험을 한권의 '감성북'으로 출판", image: "/images/main/earth.png" },
    { title: "불(Fire) - 열정과 창조의 불꽃으로 마음을 표현하기", price: "마음을 그리다 : AI로 나만의 아트테라피 작품 제작", image: "/images/main/fire.png" },
    { title: "공기(Air) - 나의 경험과 지식을 세상과 나누고 소통하기", price: "마음을 나누다 : 브랜드 지식창업 마스터 클래스", image: "/images/main/air.png" },
    { title: "물(Water) - 내 안에 흐르는 풍요의 물결로 마음을 채우기", price: "마음을 채우다: 1인 비지니스 수익화 올인원 클래스", image: "/images/main/water.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto py-32 lg:py-48 px-4 lg:px-8">
      <Reveal>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
          자명스쿨의 대표 강의 카테고리
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {cards.map((c, i) => {
          const isActive = activeIndex === i;
          return (
            <Reveal key={c.title} delayMs={i * 120}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-full group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border text-left transition-all duration-300 ease-out transform-gpu text-white 
                  ${isActive ? 'border-[#8A6A3F]/70 -translate-y-1 scale-[1.01]' : 'border-white/10 hover:border-[#8A6A3F]/50 hover:-translate-y-1 hover:scale-[1.01]'}`}
              >
                {/* Top Highlight Line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6C6A8]/40 to-transparent transition-opacity duration-500 z-20 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                <div
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    background: 'radial-gradient(600px circle at 50% 40%, rgba(214,198,168,0.18), transparent 55%)',
                  }}
                />
                <div className="relative z-10 w-full">
                  <div className="relative w-full aspect-video bg-black/30 overflow-hidden">
                    <Image src={c.image} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-lg text-[#D6C6A8]">{c.title}</h3>
                    <div className="mt-4 text-[#D6C6A8] text-2xl font-bold">{c.price}</div>
                    <div className="mt-6">
                      <div className="group relative overflow-visible w-full rounded-xl h-11 flex items-center justify-center text-sm font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]">
                        {/* External Aura Glow */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                          style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
                        />
                        {/* Sharp Ring Highlight */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
                        />
                        <span className="relative z-10">강의 구매하기</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* 가로형 에테르(Aether) 배너 */}
      <div className="mt-10">
        <Reveal delayMs={480}>
          <button
            type="button"
            onClick={() => setActiveIndex(4)}
            className={`w-full group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border text-left transition-all duration-300 ease-out transform-gpu text-white 
              ${activeIndex === 4 ? 'border-[#8A6A3F]/70 -translate-y-1 scale-[1.01]' : 'border-white/10 hover:border-[#8A6A3F]/50 hover:-translate-y-1 hover:scale-[1.01]'}`}
          >
            {/* Top Highlight Line */}
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6C6A8]/40 to-transparent transition-opacity duration-500 z-20 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

            <div
              className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              style={{
                background: 'radial-gradient(800px circle at 50% 50%, rgba(214,198,168,0.18), transparent 60%)',
              }}
            />
            
            <div className="relative z-10 w-full flex flex-col md:flex-row md:min-h-[340px] lg:min-h-[380px]">
              {/* 이미지 영역 */}
              <div className="relative h-64 sm:h-72 md:h-auto md:w-5/12 lg:w-1/2 bg-black/30 w-full overflow-hidden">
                <Image src="/images/main/ether.png" alt="에테르(Aether)" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              </div>
              
              {/* 콘텐츠 영역 */}
              <div className="p-8 lg:p-12 md:w-7/12 lg:w-1/2 flex flex-col justify-center">
                <h3 className="font-bold text-lg text-[#D6C6A8]">에테르(Aether) - 풍요마인드와 리더쉽 확장으로 스스로 빛나기</h3>
                <div className="mt-4 text-[#D6C6A8] text-2xl font-bold">마음을 빛내다 : 풍요마인드& 강사, 리더 인증 과정</div>
                <div className="mt-8 w-full">
                  <div className="group relative overflow-visible w-full rounded-xl h-11 flex items-center justify-center text-sm font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]">
                    {/* External Aura Glow */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                      style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
                    />
                    {/* Sharp Ring Highlight */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
                    />
                    <span className="relative z-10">강의 구매하기</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
function Testimonials() {
  const testimonialsData = [
    {
      type: "40대, 1인 창업 준비생",
      summary: "전문 지식을 담은 전자책 정식 출판",
      problem: "10년 직장 생활 경력이 있으나 상품화 방법을 몰라 성과 없는 포스팅만 반복함.",
      change: "내 경험을 큐레이션하고 타겟 고객이 원하는 핵심 가치를 정의하는 법을 배움.",
      result: "총 50페이지 분량의 PDF 전자책 완성 및 크몽 등 채널에서 1차 판매 완료."
    },
    {
      type: "30대, 경력 단절 여성",
      summary: "AI 아트테라피 기술 활용 굿즈 브랜드 런칭",
      problem: "디자인 비전공자로서 독창적인 콘텐츠를 만드는 데 한계를 느끼고 정체됨.",
      change: "AI 도구와 심리 치유 기법을 결합하여 고유한 아트워크 생성 프로세스를 구축함.",
      result: "엽서, 포스터 등 굿즈 10종 제작 완료 및 네이버 스마트스토어 공식 입점."
    },
    {
      type: "20대, 프리랜서 강사",
      summary: "오프라인 강의를 온라인 자동화 시스템으로 전환",
      problem: "직접 출강해야만 수익이 발생하는 구조로 인해 시간적/수익적 임계점에 도달함.",
      change: "지식을 단계별 커리큘럼으로 구조화하고 VOD 강의 시스템 구축 전략을 적용함.",
      result: "12차시 온라인 강의 완성 및 자동 결제 시스템을 통한 고정 패시브 인컴 창출."
    },
    {
      type: "50대, 퇴직 예정자",
      summary: "리더십 인증 강사 수료 및 외부 출강 확정",
      problem: "퇴직 후의 사회적 역할에 대한 불안감과 전문성 재정의의 돌파구가 필요했음.",
      change: "풍요 마인드셋을 내면화하고 현대 실무에 적합한 리더십 코칭 기법을 체득함.",
      result: "자명스쿨 리더십 인증 수료 후 지역 커뮤니티 및 기업체 3곳 출강 계약 체결."
    },
    {
      type: "30대, 직장인 부업가",
      summary: "수익화 전략 적용 후 첫 유료 서비스 런칭",
      problem: "이론 공부에만 치중하여 실제 시장에 내놓을 나만의 유료 상품이 부재했음.",
      change: "올인원 클래스의 실행 중심 프로세스에 따라 최소 기능 제품(MVP)을 설계함.",
      result: "첫 유료 코칭 서비스 런칭 한 달 만에 실제 유료 수강생 5명 확보 및 수익 증명."
    },
    {
      type: "40대, 중소기업 관리자",
      summary: "사내 소통 개선 및 전담 교육 프로그램 개발",
      problem: "팀원 간의 일방적인 지시와 소통 부재로 인해 조직의 성과가 하락하던 상황.",
      change: "공감 기반의 브랜드 커뮤니케이션 기술을 사내 인사 및 조직 관리에 대입함.",
      result: "팀 만족도 40% 향상 및 신입 사원 전담 온보딩 매뉴얼 제작 및 사내 교육 시행."
    }
  ];

  return (
    <section className="bg-softBlack py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              실제 <span className="text-[#D6C6A8]">성과</span>로 증명하는 변화
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-[#8A6A3F]/50 rounded-full" />
            </div>
            <p className="mt-6 text-white/50 text-lg lg:text-xl font-light">
              단순한 만족을 넘어 실질적인 결과로 증명된 자명스쿨의 성공 사례들입니다.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, i) => (
            <Reveal key={i} delayMs={i * 100}>
              <div className="group relative flex flex-col h-full rounded-2xl bg-white/5 backdrop-blur-sm p-6 lg:p-8 border border-white/10 transition-all duration-500 hover:border-[#8A6A3F]/50 hover:bg-white/[0.07] hover:-translate-y-2">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6C6A8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Result Summary (Top Highlight) */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8A6A3F]/20 border border-[#8A6A3F]/30 text-[#D6C6A8] text-xs font-bold mb-4">
                    FINAL RESULT
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#D6C6A8] transition-colors duration-300">
                    "{t.summary}"
                  </h3>
                </div>

                {/* Content Sections */}
                <div className="space-y-5 flex-grow mb-8 font-light leading-relaxed">
                  <div>
                    <span className="text-[10px] text-[#D6C6A8]/60 font-bold tracking-widest uppercase block mb-1">PROB</span>
                    <p className="text-white/60 text-sm">{t.problem}</p>
                  </div>
                  <div className="pl-4 border-l border-[#8A6A3F]/30">
                    <span className="text-[10px] text-[#D6C6A8]/60 font-bold tracking-widest uppercase block mb-1">CHANGE</span>
                    <p className="text-white/80 text-sm italic">{t.change}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D6C6A8]/60 font-bold tracking-widest uppercase block mb-1">RESULT</span>
                    <p className="text-white font-medium text-sm">{t.result}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 mb-1">수강생 정보</span>
                    <span className="text-sm font-bold text-white/90">{t.type}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B89B6A]/20 to-transparent border border-[#8A6A3F]/20 flex items-center justify-center">
                    <span className="text-[10px] text-[#D6C6A8] font-bold">JM</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function FaqAndContact() {
  return (
    <section className="bg-trueBlack py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block uppercase italic">자주 묻는 질문</h2>
            <p className="mt-4 text-white/70">궁금한 점이 있으신가요? 먼저 확인해보세요.</p>

            <div className="mt-8 space-y-4">
              {[
                "멤버십 가입시 월별로 결제가 되나요?",
                "시청한 강의를 모두 확인하고 싶은데 어디서 확인할 수 있나요?",
                "멤버십을 취소하고싶어요, 어떻게 하나요?",
              ].map((q) => (
                <div key={q} className="transition-all duration-300">
                  <details className="rounded-lg bg-white/5 border border-white/10 p-4">
                    <summary className="cursor-pointer text-white font-medium">{q}</summary>
                    <p className="mt-3 text-white/70 text-sm">
                      답변 영역(초기 더미). 추후 실제 정책/FAQ로 교체.
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block uppercase italic">문의하기</h2>
            <p className="mt-4 text-white/70">
              더 궁금한 점이 있거나 제안할 내용이 있다면 언제든지 연락주세요.
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="text-white font-semibold">전화 문의</div>
                <div className="mt-1 text-white/70">02-543-7052</div>
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="text-white font-semibold">파트너십 / 강의 제안</div>
                <a
                  className="mt-1 block text-white/70 hover:text-[#8A6A3F] transition-colors"
                  href="mailto:nobaseclass@gmail.com"
                >
                  nobaseclass@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                className="group relative overflow-visible rounded-xl h-12 flex items-center justify-center bg-white/10 text-white font-bold transition-all duration-300 ease-out transform-gpu hover:bg-white/15 hover:-translate-y-[1px]"
                href="#"
              >
                {/* External Aura Glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                  style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
                />
                {/* Sharp Ring Highlight */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
                />
                <span className="relative z-10">유튜브 채널 바로가기</span>
              </a>
              <a
                className="group relative overflow-visible rounded-xl h-12 flex items-center justify-center font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]"
                href="#"
              >
                {/* External Aura Glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                  style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
                />
                {/* Sharp Ring Highlight */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
                />
                <span className="relative z-10">오픈채팅방 참여하기</span>
              </a>
              <div className="sm:col-span-2 text-center text-white/50 text-sm">참여코드: nobase000</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

