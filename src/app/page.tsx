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
                    <div className="mt-4 text-white text-2xl font-bold">{c.price}</div>
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
                <div className="mt-4 text-white text-2xl font-bold">마음을 빛내다 : 풍요마인드& 강사, 리더 인증 과정</div>
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
  const testimonials = [
    {
      title: "전문 지식을 담은 전자책 정식 출판",
      story: "10년 넘게 직장 생활을 하며 쌓아온 경력은 많았지만, 정작 이를 어떻게 상품화해야 할지 몰라 성과 없는 포스팅만 반복하고 있었습니다. 자명스쿨에서 내 경험을 큐레이션하고 타겟 고객이 원하는 핵심 가치를 정의하는 법을 배운 끝에, 50페이지 분량의 전자책을 완성하여 크몽 등에서 실제 판매까지 성공했습니다.",
      result: "전자책 출판 및 1차 판매 완료",
      user: "40대 / 1인 창업 준비생"
    },
    {
      title: "AI 기술을 활용한 나만의 굿즈 브랜드 런칭",
      story: "디자인 비전공자로서 독창적인 콘텐츠를 만드는 데 높은 벽을 느껴 정체되어 있었습니다. 하지만 AI 도구와 심리 치유 기법을 결합한 자명스쿨만의 프로세스를 접하며 나만의 고유한 아트워크를 생성할 수 있게 되었습니다. 현재는 이를 활용한 엽서와 포스터 등 10여 종의 굿즈를 제작해 네이버 스마트스토어에 정식 입점까지 마쳤습니다.",
      result: "굿즈 브랜드 런칭 및 입점 완료",
      user: "30대 / 경력 단절 여성"
    },
    {
      title: "오프라인 강의를 온라인 자동화 시스템으로 전환",
      story: "직접 발로 뛰며 강의를 나가야만 수익이 생기는 구조 때문에 시간과 수익 모두 한계에 부딪힌 상황이었습니다. 자명스쿨을 통해 나의 지식을 단계별 커리큘럼으로 구조화하고 온라인 자동화 시스템을 구축하는 전략을 배웠습니다. 덕분에 12차시 온라인 강의를 완성했고, 이제는 자동 결제 시스템을 통해 안정적인 패시브 인컴을 만들고 있습니다.",
      result: "VOD 강의 자동화 수익 구조 구축",
      user: "20대 / 프리랜서 강사"
    },
    {
      title: "리더십 인증 강사 수료 및 기업 출강 확정",
      story: "퇴직을 앞두고 사회적 역할이 사라질지 모른다는 불안감과 내 전문성을 어떻게 재정의할지 고민이 깊었습니다. 자명스쿨에서 풍요 마인드셋을 내면화하고 현대 실무에 꼭 필요한 리더십 코칭 기법을 체득한 결과, 리더십 인증 과정을 당당히 수료했습니다. 현재는 지역 커뮤니티와 기업체 3곳에서 출강 계약을 체결하며 제2의 커리어를 시작했습니다.",
      result: "기업 출강 계약 체결 및 강사 활동",
      user: "50대 / 퇴직 예정자"
    },
    {
      title: "수익화 전략 적용 후 첫 유료 서비스 런칭",
      story: "그동안 수많은 이론 공부를 해왔지만, 정작 시장에 내놓을 나만의 유료 상품은 하나도 없었습니다. 자명스쿨의 실행 중심 프로세스를 따라 최소 기능 제품(MVP)을 설계하며 실전 감각을 익혔습니다. 런칭 한 달 만에 실제 유료 수강생 5명을 확보하며, 책 속의 이론이 아닌 나만의 실질적인 수익 구조를 직접 증명해낼 수 있었습니다.",
      result: "첫 유료 서비스 런칭 및 수익 고도화",
      user: "30대 / 직장인 부업가"
    },
    {
      title: "사내 소통 개선 및 전담 교육 프로그램 개발",
      story: "조직 내에서 일방적인 지시와 소통 부재로 인해 팀 성과가 눈에 띄게 하락하며 관리자로서 고민이 많았습니다. 자명스쿨에서 배운 공감 기반의 브랜드 커뮤니케이션 기술을 사내 조직 관리에 대입해 보았습니다. 그 결과 팀 만족도가 40% 이상 향상되었고, 이제는 제가 직접 신입 사원을 위한 온보딩 매뉴얼과 교육 프로그램을 제작해 사내에서 운영 중입니다.",
      result: "사내 전담 교육 프로그램 개발 및 성과",
      user: "40대 / 중소기업 관리자"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D6C6A8]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8A6A3F]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="px-4 md:px-8 mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              실제 <span className="text-[#D4AF37]">수강생</span> 변화
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#D4AF37]/50 rounded-full" />
          </div>
        </Reveal>

        {/* Testimonials Grid (3x2) */}
        <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <Reveal key={i} delayMs={i * 100}>
              <div className="group relative bg-zinc-900 p-8 rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-[#D4AF37]/40 flex flex-col h-full min-h-[350px]">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white leading-tight">
                  {item.title}
                </h3>

                <blockquote className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed font-light italic">
                  "{item.story}"
                </blockquote>

                <div className="mt-auto">
                  <p className="text-[#D4AF37] font-semibold text-base md:text-lg mb-2">
                    {item.result}
                  </p>

                  <p className="text-xs text-zinc-500 font-medium tracking-wide">
                    {item.user}
                  </p>
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

