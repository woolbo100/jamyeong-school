"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

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
        "미드저니 이미지로 나만의 굿즈 만들기",
        "메타버스 온라인 전시 및 플레이리스트",
        "나의 작품 영상 SNS 홍보 마케팅",
        "완성 책 출판 등록 및 광고 소재 제작"
      ],
      result: "굿즈, 아트 온라인 전시"
    }
  ];

  const part1 = curriculumData.slice(0, 3);
  const part2 = curriculumData.slice(3, 6);

  const GOLD = "#D4AF37";
  const ORANGE = "#FF6A3D";
  const CARD_BG = "#14161A";
  const SUB_TEXT = "#BFBFBF";

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#FF6A3D]/30 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6">
        {/* Glow Effects */}
        <div 
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] opacity-[0.15] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ORANGE}, transparent 70%)` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                <span className="text-[#D4AF37] text-sm tracking-[0.4rem] uppercase font-display font-medium">
                  Fire Curriculum • 6 Weeks
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-display mb-10 leading-tight tracking-tight italic">
                AI 아트 &<br />
                <span style={{ color: GOLD }}>영상 창작 과정</span>
              </h1>
              <div className="space-y-6 mb-16">
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
                  당신의 감성이<br />
                  <span className="font-bold underline underline-offset-8" style={{ textDecorationColor: ORANGE }}>작품이 되는 순간</span>
                </h2>
                <p className="text-xl md:text-2xl text-[#BFBFBF] font-light leading-relaxed max-w-xl">
                  이미지, 영상, 브랜드까지<br />
                  <span className="text-white font-medium">AI로 표현하는 6주</span>
                </p>
                <div className="pt-4 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] inline-block">
                  <p className="text-lg text-[#BFBFBF] italic leading-relaxed">
                    단순한 기술 습득을 넘어 매력적인 콘텐츠를 설계하는<br />
                    <span className="text-white font-medium">프로페셔널 아트 크리에이터 양성 과정</span>입니다
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  className="group relative h-16 w-full sm:w-72 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FF6A3D] text-black shadow-2xl transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <span className="relative z-10 font-bold italic">강의 안내 받기</span>
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37] to-[#FF6A3D] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                </a>
                <a 
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  className="group flex items-center justify-center sm:justify-start gap-3 text-white/60 hover:text-white transition-all duration-300 text-base tracking-widest uppercase border-b border-white/10 pb-1"
                >
                  문의하기
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero Image Unit */}
          <div className="lg:w-1/2 w-full">
            <Reveal delayMs={300} slideFrom="right">
              <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-white/[0.1] shadow-[0_0_80px_rgba(255,106,61,0.15)] group">
                <Image 
                  src="/images/courses/fire/hero.png" 
                  alt="Fire Hero Art" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Float Card Overlay */}
                <div className="absolute bottom-10 left-10 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[240px]">
                  <p className="text-sm font-light text-white/80 italic">"도구를 넘어 당신의 감각을 깨울 시간"</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. 문제 제기 - 문제 공감 */}
      <section className="py-32 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-display mb-10 text-white italic">
                혹시 이런 생각을<br />
                <span style={{ color: GOLD }}>하고 있나요?</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "콘텐츠를 만들고 싶은데 감각이 부족합니다",
              "이미지와 영상이 중요한 건 알지만 시작이 어렵습니다",
              "나만의 스타일과 브랜드를 만들고 싶습니다",
              "평범한 콘텐츠에서 벗어나고 싶습니다"
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="flex items-center gap-6 p-10 rounded-3xl bg-[#14161A] border border-white/[0.05] group transition-all duration-500 hover:border-[#D4AF37]/30 hover:-translate-y-1">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <p className="text-[#BFBFBF] text-xl font-light group-hover:text-white transition-colors">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={500}>
            <div className="mt-20 text-center">
              <div className="inline-block p-10 rounded-[3rem] bg-gradient-to-br from-[#14161A] to-black border border-white/10 shadow-xl">
                <p className="text-2xl md:text-3xl italic leading-relaxed text-[#BFBFBF]">
                  지금 필요한 것은<br />
                  <span className="text-white font-bold italic underline underline-offset-8" style={{ textDecorationColor: GOLD }}>기술이 아니라 표현</span>입니다
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. 해결 제안 */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-display mb-8 text-white">이 강의는 당신을 이렇세 바꿉니다</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10">
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
                <div className="p-14 rounded-[3rem] bg-[#14161A] border border-white/[0.05] h-full flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-700 hover:border-[#D4AF37]/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-6xl mb-12 group-hover:scale-110 transition-transform duration-700">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 text-white leading-tight">{card.title}</h3>
                  <div className="w-12 h-[1px] mb-8 bg-white/10" />
                  <p className="text-[#BFBFBF] leading-relaxed text-lg font-light group-hover:text-white/90 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Reveal>
            <span style={{ color: GOLD }} className="text-sm tracking-[0.5em] uppercase mb-10 block font-semibold">The Core Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-display mb-16 italic text-white">지금은 <span style={{ color: GOLD }}>표현의 시대</span>입니다</h2>
            
            <div className="space-y-16 text-xl md:text-3xl font-light text-[#BFBFBF] leading-relaxed">
              <p>
                이미지 하나, 영상 하나가<br />
                <span className="text-white font-bold">사람의 감정을 움직입니다</span>
              </p>
              <div className="w-[1px] h-20 mx-auto bg-gradient-to-b from-white/20 to-transparent" />
              <p>
                AI는 도구일 뿐입니다<br />
                결국 중요한 것은 <span className="text-white font-medium">당신의 감각</span>입니다
              </p>
              <div className="p-12 rounded-[4rem] bg-gradient-to-br from-[#14161A] to-black border border-white/[0.08] mt-20 relative group">
                <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <p className="relative z-10 text-white text-3xl md:text-4xl leading-tight">
                  이 강의는<br />
                  그 <span style={{ color: GOLD }} className="font-bold underline underline-offset-8">감각을 깨우는 과정</span>입니다
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. 🎨 GALLERY SECTION (CORE) */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <div className="inline-block px-6 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs tracking-widest uppercase mb-6">Exhibition Space</div>
              <h2 className="text-5xl md:text-8xl font-display mb-8 text-white italic">The Gallery</h2>
              <p className="text-xl md:text-2xl text-[#BFBFBF] font-light max-w-2xl mx-auto italic leading-relaxed">
                당신의 <span style={{ color: GOLD }} className="font-medium">작품</span>이 전시됩니다
              </p>
              <div className="w-24 h-[1px] bg-white/20 mx-auto mt-12 mb-12" />
              <p className="text-lg text-[#BFBFBF] font-light">
                이 과정에서 만든 결과물은 단순한 연습이 아니라<br />
                실제 작품이 됩니다
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[1, 2, 3].map((num) => (
              <Reveal key={num} delayMs={num * 200}>
                <div className="group relative">
                  {/* Frame Design */}
                  <div className="relative aspect-[3/4] p-6 bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden transition-all duration-700 group-hover:border-[#D4AF37]/30">
                    <div className="absolute inset-0 border-[20px] border-[#14161A]/50 pointer-events-none z-10" />
                    <div className="relative w-full h-full overflow-hidden">
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
                  <div className="mt-8 text-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm tracking-[0.3em] font-light uppercase text-[#D4AF37]">Creative Project #0{num}</p>
                    <div className="h-[1px] w-8 bg-[#D4AF37]/40 mx-auto mt-2" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 상세 커리큘럼 */}
      <section className="py-32 px-6 lg:py-48 bg-[#050505]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="relative p-12 md:p-24 rounded-[4rem] border border-white/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0a0a0a]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 text-center mb-28">
                <h2 className="text-5xl md:text-8xl font-display mb-12 tracking-tight italic text-white">Curriculum</h2>
                <div className="w-32 h-[1px] mx-auto mb-12 bg-[#D4AF37]/30" />
                
                <p className="text-xl md:text-3xl text-white font-light max-w-3xl mx-auto leading-relaxed mb-16 italic">
                  이 6주 과정은<br />
                  <span className="text-white font-bold">이미지 → 영상 → 브랜드 → 수익화</span>까지<br />
                  <span style={{ color: GOLD }}>단계적으로 완성</span>하는 과정입니다
                </p>

                <div className="inline-flex items-center px-12 py-5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  <span className="text-[#BFBFBF] text-base md:text-xl tracking-widest font-light">
                     실시간 코칭 • 매주 과제 완성 • 디지털 전시 연계
                  </span>
                </div>
              </div>

              {/* Part 1 */}
              <div className="mb-32">
                <div className="flex items-center gap-8 mb-20">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/20" />
                  <h3 className="text-2xl md:text-4xl font-display tracking-[0.3em] px-8 italic text-[#D4AF37]">
                    Phase 1. <span className="text-white font-normal uppercase">Foundation</span>
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/20" />
                </div>

                <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
                  {part1.map((item, i) => (
                    <Reveal key={i} delayMs={i * 200} slideFrom="bottom">
                      <div className="group relative p-12 rounded-[3rem] border border-white/[0.06] transition-all duration-700 h-full bg-[#14161A] hover:bg-[#1a1c22] hover:border-[#D4AF37]/30 hover:-translate-y-3 shadow-2xl">
                        <div className="text-5xl font-display font-bold mb-8 tracking-tighter text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors uppercase italic">{item.week}</div>
                        <h4 className="text-2xl font-bold mb-10 text-white leading-tight">
                          {item.title}
                        </h4>
                        
                        <ul className="space-y-6 mb-16 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-5 text-[#BFBFBF] group-hover:text-white transition-colors text-[1.1rem]">
                              <span style={{ color: GOLD }} className="text-xs mt-2.5 opacity-60">■</span>
                              <span className="leading-[1.6] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                          <span className="font-bold text-xl italic tracking-wide" style={{ color: GOLD }}>
                             {item.result}
                          </span>
                          <span className="text-2xl group-hover:translate-x-2 transition-transform duration-500 opacity-20">→</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Part 2 */}
              <div>
                <div className="flex items-center gap-8 mb-20">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/20" />
                  <h3 className="text-2xl md:text-4xl font-display tracking-[0.3em] px-8 italic text-[#FF6A3D]">
                    Phase 2. <span className="text-white font-normal uppercase">Expansion</span>
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/20" />
                </div>

                <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
                  {part2.map((item, i) => (
                    <Reveal key={i} delayMs={i * 200} slideFrom="bottom">
                      <div className="group relative p-12 rounded-[3rem] border border-white/[0.06] transition-all duration-700 h-full bg-[#14161A] hover:bg-[#1a1c22] hover:border-[#FF6A3D]/30 hover:-translate-y-3 shadow-2xl">
                        <div className="text-5xl font-display font-bold mb-8 tracking-tighter text-[#FF6A3D]/20 group-hover:text-[#FF6A3D]/40 transition-colors uppercase italic">{item.week}</div>
                        <h4 className="text-2xl font-bold mb-10 text-white leading-tight">
                          {item.title}
                        </h4>
                        
                        <ul className="space-y-6 mb-16 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-5 text-[#BFBFBF] group-hover:text-white transition-colors text-[1.1rem]">
                              <span style={{ color: ORANGE }} className="text-xs mt-2.5 opacity-60">■</span>
                              <span className="leading-[1.6] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                          <span className="font-bold text-xl italic tracking-wide" style={{ color: ORANGE }}>
                             {item.result}
                          </span>
                          <span className="text-2xl group-hover:translate-x-2 transition-transform duration-500 opacity-20">→</span>
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
      <section className="py-40 px-6 bg-black">
        <div className="max-w-5xl mx-auto shadow-[0_0_100px_rgba(212,175,55,0.05)] rounded-[4rem] p-12 md:p-24 border border-white/5">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-display mb-10 text-white italic">이 과정을 끝내면</h2>
              <div className="w-20 h-[1px] bg-[#D4AF37]/30 mx-auto" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              "디지털 아트 크리에이터",
              "굿즈 브랜드 디렉터",
              "미디어 아트 크리에이터",
              "영상 콘텐츠 전문가",
              "AI 콘텐츠 강사"
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="p-8 rounded-2xl bg-[#14161A] border border-white/5 text-center group transition-all duration-300 hover:border-[#D4AF37]/40">
                  <p className="text-2xl text-[#BFBFBF] font-light group-hover:text-white transition-colors">
                    ✔ {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delayMs={600}>
            <div className="text-center">
              <p className="text-3xl md:text-6xl font-display italic text-white leading-tight">
                당신의 감정이<br />
                <span style={{ color: GOLD }} className="font-bold underline underline-offset-8">하나의 작품으로 완성</span>됩니다
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. 확장 섹션 */}
      <section className="py-40 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#FF6A3D]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display mb-12 leading-tight italic text-white uppercase tracking-tighter">
                Unlimited<br />
                <span style={{ color: GOLD }}>Expansion</span>
              </h2>
              <p className="text-2xl md:text-3xl font-light text-[#BFBFBF] mb-16 leading-relaxed">
                이 과정은 여기서 끝나지 않습니다
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-16">
                {["콘텐츠 제작", "전자책", "굿즈", "브랜드", "강의"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A3D]" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-[2.5rem] bg-[#14161A] border border-white/10">
                <p className="text-2xl md:text-3xl text-white font-light italic">
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
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/10 mt-12 group">
                <Image src="/images/courses/fire/gallery2.png" alt="Expansion 2" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-48 px-6 text-center bg-black relative overflow-hidden">
        {/* Cinematic Particles Backdrop (CSS Placeholder) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-16">
              <div className="w-20 h-20 relative">
                <Image src="/images/icon/fire.png" alt="Fire Icon" fill className="object-contain filter drop-shadow-[0_0_20px_rgba(255,106,61,0.5)] animate-pulse" />
              </div>
            </div>
            <h2 className="text-5xl md:text-8xl font-display mb-12 tracking-tight italic text-white">
              지금, 당신의 작품을<br />
              <span style={{ color: GOLD }}>시작하세요</span>
            </h2>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-20">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group relative h-20 w-full sm:w-96 px-8 flex items-center justify-center text-xl font-bold tracking-[0.2em] rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FF6A3D] text-black shadow-[0_20px_60px_rgba(255,106,61,0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <span className="relative z-10 font-bold italic">강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37] to-[#FF6A3D] opacity-0 blur-3xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              </a>
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group flex flex-col items-center"
              >
                <span className="text-white/40 group-hover:text-[#D4AF37] transition-all duration-300 text-xl tracking-[0.3em] uppercase border-b border-white/5 pb-1 mb-3">
                  문의하기
                </span>
                <span className="text-xs text-white/10 uppercase tracking-[0.6em]">Reach Out</span>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={800}>
            <Link
              href="/courses"
              className="inline-block mt-40 text-white/20 hover:text-[#D4AF37] transition-all duration-500 text-sm tracking-[0.5em] uppercase font-light"
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
