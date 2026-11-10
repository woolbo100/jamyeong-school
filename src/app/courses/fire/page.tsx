"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeartArtProjectSection from "@/components/courses/HeartArtProjectSection";

export default function FireCoursePage() {
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

      {/* 7. 결과 섹션 */}
      <section className="py-24 md:py-28 bg-black">
        <div className="site-container shadow-[0_0_100px_rgba(166,130,83,0.05)] rounded-[3rem] p-8 md:p-16 border border-white/5">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="course-section-title font-display mb-6 text-white italic">이 과정을 끝내면</h2>
              <div className="w-16 h-[1px] bg-[#A68253]/30 mx-auto" />
            </div>
          </Reveal>

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
          
          <Reveal delayMs={600}>
            <div className="text-center">
              <p className="course-quote font-display italic text-white leading-tight">
                당신의 감정이<br />
                <span style={{ color: GOLD }} className="font-bold underline underline-offset-8">하나의 작품으로 완성</span>됩니다
              </p>
            </div>
          </Reveal>
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
