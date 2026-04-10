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
    { title: "흙 (Earth)", desc: "안정과 풍요를 위한 기반 다지기", bg: "/images/elements/earth.png", color: "border-earth" },
    { title: "불 (Fire)", desc: "열정과 창조의 불꽃 피우기", bg: "/images/elements/fire.png", color: "border-fire" },
    { title: "공기 (Air)", desc: "자유로운 사고와 소통의 길 열기", bg: "/images/elements/air.png", color: "border-air" },
    { title: "물 (Water)", desc: "감성의 흐름을 이해하고 정화하기", bg: "/images/elements/water.png", color: "border-water" },
    { title: "에테르 (Aether)", desc: "영적 성장과 우주적 연결 탐구하기", bg: "/images/elements/ether.png", color: "border-ether" },
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
    { title: "흙(Earth) - 안정과 풍요를 위한 기반 다지기", price: "₩ 120,000", image: "/images/main/earth.png" },
    { title: "불(Fire) - 열정과 창조의 불꽃 피우기", price: "₩ 120,000", image: "/images/main/fire.png" },
    { title: "공기(Air) - 세상과 지혜를 나누기", price: "₩ 120,000", image: "/images/main/air.png" },
    { title: "물(Water) - 감성의 흐름을 이해하고 정화하기", price: "₩ 120,000", image: "/images/main/water.png" },
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
                    <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-[#D6C6A8]' : 'text-white'}`}>{c.title}</h3>
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
                <h3 className={`font-bold text-xl lg:text-2xl transition-colors duration-300 ${activeIndex === 4 ? 'text-[#D6C6A8]' : 'text-white'}`}>에테르(Aether) - 영적 성장과 우주적 연결</h3>
                <div className="mt-4 text-white text-2xl lg:text-3xl font-bold">₩ 180,000</div>
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
  return (
    <section className="bg-softBlack py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
            수강생들이 증명하는 변화
          </h2>
          <p className="text-center mt-4 text-white/70">
            자명스쿨과 함께한 분들의 진솔한 이야기를 만나보세요.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Reveal key={i} delayMs={i * 100}>
              <div className="group relative rounded-xl bg-white/5 backdrop-blur-md p-6 text-white/90 border border-white/10 transition-all duration-300 hover:border-[#8A6A3F]/50 hover:-translate-y-1">
                {/* Top Highlight Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6C6A8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-[#B89B6A]">★★★★★</div>
                <p className="mt-4 text-white/80 leading-relaxed font-light">
                  “강의를 통해 삶의 흐름이 바뀌었습니다. 나를 더 깊이 이해하게 되었어요.”
                </p>
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white group-hover:text-[#D6C6A8] transition-colors">수강생 {i}</div>
                    <div className="text-sm text-white/50">카테고리명</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] text-[#B89B6A] font-bold">JM</span>
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

