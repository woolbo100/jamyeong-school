'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
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
      desc: "직장 경력을 상품화하여 50페이지 분량의 전자책을 완성했습니다. 현재 크몽에서 실제 수익을 창출하며 전문가로서의 입지를 다지고 있습니다.",
      user: "40대 · 1인 창업 준비"
    },
    {
      title: "AI 기술 활용 나만의 굿즈 브랜드 런칭",
      desc: "비전공자임에도 AI와 심리 치유 기법을 결합해 독자적 아트워크를 생성했습니다. 10여 종의 굿즈를 제작해 네이버 스마트스토어 입점에 성공했습니다.",
      user: "30대 · 경력 단절 여성"
    },
    {
      title: "오프라인 강의를 온라인 자동화로 전환",
      desc: "지식을 커리큘럼으로 구조화하여 12차시 VOD 강의를 제작했습니다. 자동 결제와 연동된 패시브 인컴 수익 구조를 안정적으로 구축했습니다.",
      user: "20대 · 프리랜서 강사"
    },
    {
      title: "리더십 인증 강사 수료 및 기업 출강 계약",
      desc: "마인드셋 내면화와 코칭 기법을 체득해 리더십 인증 과정을 수료했습니다. 퇴직 후 지역 커뮤니티와 기업체 3곳에서 제2의 커리어를 시작했습니다.",
      user: "50대 · 퇴직 예정자"
    },
    {
      title: "수익화 전략 적용 후 첫 유료 서비스 런칭",
      desc: "실행 중심 프로세스를 통해 최소 기능 제품(MVP)을 설계하고 런칭했습니다. 한 달 만에 유료 수강생 5명을 확보하며 실질적인 수익 구조를 증명했습니다.",
      user: "30대 · 직장인 부업가"
    },
    {
      title: "사내 소통 개선 및 전담 교육 프로그램 개발",
      desc: "브랜드 커뮤니케이션 기술을 조직 관리에 대입해 팀 만족도를 40% 향상시켰습니다. 신입 사원 전담 온보딩 프로그램 제작 및 사내 운영 성과를 냈습니다.",
      user: "40대 · 중소기업 관리자"
    }
  ];

  return (
    <section className="pt-24 pb-32 lg:pb-48 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B89B6A]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8A6A3F]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="px-4 md:px-8 mb-16 lg:mb-20 text-center flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              실질적인 <span className="text-[#B89B6A]">성과</span> 사례
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#B89B6A]/50 rounded-full mx-auto" />
          </div>
        </Reveal>

        {/* Performance Case Cards Grid (3x2) */}
        <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <Reveal key={i} delayMs={i * 100}>
              <div className="group relative rounded-[28px] border border-[rgba(184,155,106,0.14)] bg-[rgba(14,14,15,0.98)] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.02)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-[4px] hover:scale-[1.015] hover:border-[rgba(184,155,106,0.30)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(184,155,106,0.12)] flex flex-col h-full min-h-[340px]">
                {/* Stars with subtle shimmer */}
                <div className="flex items-center gap-1.5 light-sweep-container w-fit rounded-full px-2 py-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} fill="#B89B6A" className="text-[#B89B6A] transition-all duration-300 group-hover:brightness-125" strokeWidth={0} />
                  ))}
                  <div className="light-sweep-overlay" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[1.45rem] leading-[1.35] font-bold tracking-[-0.02em] text-white line-clamp-2 transition-colors group-hover:text-white/95">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[1rem] leading-[1.75] text-zinc-300">
                  {item.desc}
                </p>

                {/* Unified Bottom Section */}
                <div className="mt-auto pt-8">
                  {/* Decorative Gold Divider */}
                  <div className="flex items-center gap-4 opacity-40">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B89B6A] to-transparent" />
                    <span className="text-[#B89B6A] text-[10px] tracking-widest scale-150">✦</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B89B6A] to-transparent" />
                  </div>

                  {/* Footer Info */}
                  <div className="mt-6">
                    <p className="text-[0.92rem] text-zinc-400 font-medium tracking-wide">
                      {item.user}
                    </p>
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    type: '강의 문의',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after a few seconds or stay at success state as requested
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-[#050505] py-20 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <Reveal>
          <div className="h-full flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block uppercase italic">자주 묻는 질문</h2>
            <p className="mt-4 text-zinc-400">자명스쿨 강의 신청부터 진행 방식까지, 자주 묻는 질문을 먼저 확인해보세요.</p>

            <div className="mt-10 space-y-4 flex-grow">
              {[
                {
                  q: "강의는 어떻게 신청하나요?",
                  a: "사이트에서 원하는 강의 내용을 확인한 뒤 문의 또는 신청을 남기면, 자명스쿨 운영 방식에 따라 무료특강 또는 안내 절차를 먼저 도와드립니다."
                },
                {
                  q: "무료특강은 누구나 참여할 수 있나요?",
                  a: "무료특강은 자명스쿨의 강의 방향과 커리큘럼을 이해할 수 있도록 마련된 입문 과정입니다. 신청자에게 일정과 참여 방법을 별도로 안내드립니다."
                },
                {
                  q: "무료특강을 들어야만 유료 강의를 신청할 수 있나요?",
                  a: "기본적으로는 무료특강을 통해 강의 방향과 적합성을 먼저 확인한 뒤 유료 과정으로 안내드리고 있습니다. 과정에 따라 운영 방식은 달라질 수 있습니다."
                },
                {
                  q: "유료 강의는 어떤 방식으로 진행되나요?",
                  a: "초기 과정은 실시간 강의 중심으로 진행됩니다. 커리큘럼에 따라 강의, 실습, 질의응답이 함께 포함될 수 있습니다."
                },
                {
                  q: "초보자도 수강할 수 있나요?",
                  a: "네. 자명스쿨은 처음 시작하는 분도 흐름을 이해할 수 있도록 설계되어 있습니다. 다만 과정별로 권장 대상은 조금씩 다를 수 있습니다."
                },
                {
                  q: "어떤 사람이 자명스쿨 강의에 잘 맞나요?",
                  a: "자기이해를 바탕으로 콘텐츠, 강의, 브랜드, 수익화까지 연결하고 싶은 분께 적합합니다. 단순 툴 기능보다 방향과 구조를 함께 배우고 싶은 분께 특히 잘 맞습니다."
                }
              ].map((item) => (
                <div key={item.q} className="transition-all duration-300">
                  <details className="group rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/[0.08] transition-colors">
                    <summary className="cursor-pointer text-zinc-200 font-medium list-none flex justify-between items-center group-open:text-[#B89B6A]">
                      {item.q}
                      <span className="text-xl transition-transform duration-300 group-open:rotate-180">↓</span>
                    </summary>
                    <p className="mt-4 text-zinc-400 text-sm leading-relaxed whitespace-pre-wrap border-t border-white/5 pt-4">
                      {item.a}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="relative">
            {isSubmitted ? (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center bg-white/5 border border-[#B89B6A]/30 rounded-[32px] p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-[#B89B6A]/20 rounded-full flex items-center justify-center mb-6">
                  <Star fill="#B89B6A" className="text-[#B89B6A]" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">문의가 접수되었습니다.</h2>
                <p className="text-zinc-400 leading-relaxed">
                  남겨주신 소중한 내용을 확인한 후<br />
                  순차적으로 답변드리겠습니다. 감사합니다.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm text-[#B89B6A] hover:underline"
                >
                  새로운 문의 남기기
                </button>
              </div>
            ) : (
              <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-md">
                <h2 className="text-3xl font-bold bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block italic">문의하기</h2>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  자명스쿨 강의, 커리큘럼, 협업, 강연 관련 문의를 남겨주세요.<br />
                  확인 후 순차적으로 답변드립니다.
                </p>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">이름 *</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="성함을 입력해주세요"
                        className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B6A]/50 focus:border-[#B89B6A]/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">연락처 *</label>
                      <input 
                        required
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B6A]/50 focus:border-[#B89B6A]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">이메일 *</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B6A]/50 focus:border-[#B89B6A]/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">문의 유형 *</label>
                      <select 
                        required
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B6A]/50 focus:border-[#B89B6A]/50 transition-all appearance-none"
                      >
                        <option className="bg-zinc-900" value="강의 문의">강의 문의</option>
                        <option className="bg-zinc-900" value="무료특강 문의">무료특강 문의</option>
                        <option className="bg-zinc-900" value="수강 신청 문의">수강 신청 문의</option>
                        <option className="bg-zinc-900" value="협업 / 제휴 문의">협업 / 제휴 문의</option>
                        <option className="bg-zinc-900" value="강연 문의">강연 문의</option>
                        <option className="bg-zinc-900" value="기타 문의">기타 문의</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">관심 과정 (선택)</label>
                    <input 
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="관심 있는 과정을 입력해주세요"
                      className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B6A]/50 focus:border-[#B89B6A]/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">문의 내용 *</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="문의하실 내용을 상세히 남겨주세요"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B6A]/50 focus:border-[#B89B6A]/50 transition-all resize-none"
                    />
                  </div>


                  <button
                    type="submit"
                    className="group relative overflow-visible w-full rounded-xl h-14 flex items-center justify-center font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px] active:scale-[0.98]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                      style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
                    />
                    <span className="relative z-10">문의 남기기</span>
                  </button>
                </form>

              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
