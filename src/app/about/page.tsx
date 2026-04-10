import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Brain, Palette, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30 text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-antiqueGold font-display text-sm tracking-[0.4em] mb-6 uppercase opacity-80">
              About Jamyeong School
            </span>
          </Reveal>
          <Reveal delayMs={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-10 leading-tight tracking-tight uppercase italic">
              자명스쿨 <br />
              <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block px-8 py-2">
                소개
              </span>
            </h1>
          </Reveal>
          <Reveal delayMs={400}>
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-tight">
                AI로 마음을 그리고 <br />
                삶을 변화시키는 교육
              </p>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                마음을 이해하고, 콘텐츠로 표현하고, <br className="hidden md:block" />
                수익으로 연결하는 곳
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={600}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/courses"
                className="group relative overflow-visible h-14 px-10 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 보러가기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-antiqueGold/40 to-transparent"></div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-display mb-6">자명스쿨 철학</h2>
            <div className="w-20 h-1 bg-antiqueGold mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              자명스쿨은 단순한 AI 기술 교육이 아닙니다. <br />
              우리는 <span className="text-antiqueGold font-medium">‘마음’</span>을 이해하고 그것을 콘텐츠로 표현하며 <br />
              삶과 수익으로 연결하는 교육을 합니다.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "마음을 구조화하는 힘",
              desc: "추상적인 감정과 무의식을 구체적인 이야기의 틀로 정제합니다.",
              icon: <Brain className="w-12 h-12 text-antiqueGold drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
            {
              title: "감정을 콘텐츠로 바꾸는 힘",
              desc: "내면의 에너지를 AI라는 도구를 통해 세상에 없는 작품으로 창조합니다.",
              icon: <Palette className="w-12 h-12 text-antiqueGold drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
            {
              title: "AI로 표현하고 확장하는 힘",
              desc: "기술을 넘어 나만의 브랜드를 구축하고 영향력을 확장해 나갑니다.",
              icon: <Rocket className="w-12 h-12 text-antiqueGold drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
          ].map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 200}>
              <div className="p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-antiqueGold/40 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(184,155,106,0.1)] transition-all duration-500 text-center group">
                <div className="mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(184,155,106,0.6)] transition-all duration-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-antiqueGold transition-colors duration-300">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={600}>
          <p className="mt-16 text-center text-lg text-antiqueGold/80 italic">
            이 3가지를 통해 누구나 자신의 이야기를 브랜드로 만들 수 있도록 돕습니다.
          </p>
        </Reveal>
      </section>

      {/* 3. 5 Elements System Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-antiqueGold tracking-[0.3em] text-xs font-bold uppercase mb-4 block">Core Curriculum</span>
              <h2 className="text-4xl md:text-6xl font-display mb-8">자명스쿨 5원소 시스템</h2>
              <p className="text-white/50 font-light max-w-2xl mx-auto">
                자기 이해부터 수익화까지, 단계별로 성장하는 자명스쿨만의 통합 변화 시스템입니다. <br />
                우리는 배움이 아닌 ‘변화’를 만듭니다.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                id: "earth",
                label: "흙",
                name: "마음을 심다",
                image: "/images/icons/icon-earth.png",
                desc: "자기 이해 / 무의식 정리",
                color: "text-earth",
                borderColor: "border-earth",
              },
              {
                id: "fire",
                label: "불",
                name: "마음을 그리다",
                image: "/images/icons/icon-fire.jpg",
                desc: "AI 아트 / 감성 표현",
                color: "text-fire",
                borderColor: "border-fire",
              },
              {
                id: "air",
                label: "공기",
                name: "마음을 나누다",
                image: "/images/icons/icon-air.jpg",
                desc: "브랜딩 / 콘텐츠 제작",
                color: "text-air",
                borderColor: "border-air",
              },
              {
                id: "water",
                label: "물",
                name: "마음을 채우다",
                image: "/images/icons/icon-water.jpg",
                desc: "수익화 / 자동화",
                color: "text-water",
                borderColor: "border-water",
              },
              {
                id: "ether",
                label: "에테르",
                name: "마음을 비추다",
                image: "/images/icons/icon-ether.jpg",
                desc: "풍요 마인드 / 리더쉽",
                color: "text-ether",
                borderColor: "border-ether",
              },
            ].map((element, idx) => (
              <Reveal key={idx} delayMs={idx * 150}>
                <div className={`p-8 rounded-[2rem] border ${element.borderColor}/20 bg-white/[0.02] hover:bg-white/[0.06] hover:-translate-y-1.5 hover:scale-[1.01] hover:border-${element.id === 'ether' ? 'ether/40' : 'antiqueGold/30'} hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-[400ms] group text-center h-full flex flex-col items-center relative overflow-hidden`}>
                  <div className={`text-2xl font-display mb-4 ${element.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{element.label}</div>
                  
                  <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                    <Image src={element.image} alt={element.label} fill className="object-contain" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{element.name}</h4>
                  <p className="text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{element.desc}</p>
                  {/* Subtle Glow Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent via-${element.id === 'ether' ? 'ether' : 'antiqueGold'} to-transparent`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Instructor Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-antiqueGold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 aspect-[4/5] md:aspect-[3/4] transition-all duration-700 group-hover:translate-y-[-8px] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/about/instructor.jpg"
                  alt="자명쌤 백진선 프로필"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-softBlack/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hidden md:flex flex-col justify-center transition-all duration-500 group-hover:translate-y-[-4px] group-hover:border-antiqueGold/30 group-hover:shadow-2xl">
                <span className="text-antiqueGold font-display text-4xl mb-2 italic">Vision</span>
                <p className="text-white/60 text-xs leading-relaxed">
                  마음을 콘텐츠로 바꾸는 <br />
                  가장 아름다운 기술
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal slideFrom="right">
              <div className="flex items-center space-x-3 text-antiqueGold mb-6">
                <span className="font-display tracking-[0.3em] text-xs uppercase">Founder & Instructor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-2 text-white italic lowercase tracking-tight">
                자명쌤 <span className="bg-gradient-to-r from-antiqueGold to-champagneGold bg-clip-text text-transparent font-sans not-italic text-3xl font-bold ml-2">백진선</span>
              </h2>
              <p className="text-white/40 font-light mb-8 italic">AI × 심리 × 인문학을 결합한 교육 전문가</p>
              
              <div className="space-y-6 mb-12">
                <p className="text-white/80 font-light leading-relaxed break-keep">
                  자명심리문화연구소 대표, 한국디지털마인드코칭협회 협회장, 그리고 이끌림출판사 대표로서 단순한 정보 전달을 넘어 사람들의 내면에 잠든 창의성을 깨우는 일을 하고 있습니다.
                </p>
                <ul className="space-y-3 text-white/60 text-sm font-light">
                  <li className="flex items-start gap-3 text-antiqueGold/90 font-medium">
                    <span className="text-antiqueGold">✔</span> 
                    <span>자명심리문화연구소 / 한국디지털마인드코칭협회 / 이끌림출판사 대표</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>구글 공인 교육자 (Google Certified Educator) 인증</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>국제디지털콘텐츠협회 지국장</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>40권 이상 저서 출간 작가 및 출판 지도사</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>AI 그림책 / 감성 콘텐츠 제작 전문가</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>1,000명 이상의 수강생과 3,000건 이상의 코칭 프로젝트 진행</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border border-antiqueGold/20 bg-antiqueGold/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-12 h-12 text-antiqueGold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3601 14 12.017 12.6569 12.017 11V7C12.017 5.34315 13.3601 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V16C22.017 18.7614 19.7784 21 17.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697V14H3.01697C1.36012 14 0.0169678 12.6569 0.0169678 11V7C0.0169678 5.34315 1.36012 4 3.01697 4H7.01697C8.67383 4 10.017 5.34315 10.017 7V16C10.017 18.7614 7.77839 21 5.01697 21H2.01697Z" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl text-antiqueGold font-display leading-tight italic">
                  “AI는 단순한 도구가 아니라 <br />
                  마음을 표현하는 가장 현대적인 언어입니다.”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Target Audience Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto py-16 px-8 rounded-[3rem] border border-white/5 bg-white/[0.01] text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display mb-12">이런 분들에게 추천합니다</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "나만의 콘텐츠를 만들고 싶은 분",
                "AI로 수익을 만들고 싶은 분",
                "감성과 이야기를 표현하고 싶은 분",
                "강의 / 전자책 / 브랜드를 만들고 싶은 분",
                "새로운 삶의 방향을 찾고 있는 분",
                "디지털 도구를 가치 있게 쓰고 싶은 분",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/15 hover:translate-x-1.5 transition-all duration-300 group cursor-default">
                  <span className="text-antiqueGold text-lg leading-none group-hover:scale-150 transition-transform">●</span>
                  <span className="text-white/80 font-light group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Results/Transformation Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 px-4">
             <h2 className="text-2xl md:text-3xl font-display text-antiqueGold tracking-[0.2em] mb-4 uppercase">Transformation</h2>
            <h3 className="text-4xl md:text-6xl font-display mb-8">자명스쿨에서 얻을 수 있는 변화</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "콘텐츠 제작 능력", desc: "나만의 고유한 메시지를 창작물로 변형" },
            { title: "AI 실전 스킬", desc: "이미지, 텍스트, 자동화 도구 숙달" },
            { title: "브랜드 구축", desc: "고유한 페르소나와 정체성 확립" },
            { title: "수익화 구조", desc: "지식 창업과 콘텐츠 기반 수익 시스템" },
            { title: "삶의 자신감", desc: "도구에 매몰되지 않는 주체적 변화" },
          ].map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 150} slideFrom="bottom">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/[0.06] hover:border-antiqueGold/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-500 h-full flex flex-col justify-center text-center group">
                <div className="text-3xl mb-4 font-display text-antiqueGold/40 group-hover:text-antiqueGold/70 transition-colors">{idx + 1}</div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delayMs={800}>
          <p className="mt-20 text-center text-xl md:text-2xl font-display text-white italic tracking-wide">
             단순한 배움을 넘어, <br className="md:hidden" />
             삶의 <span className="text-antiqueGold">전환</span>을 경험하게 됩니다.
          </p>
        </Reveal>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-softBlack border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h3 className="text-4xl md:text-6xl font-display mb-12 leading-tight tracking-tight italic uppercase">
              지금 당신의 <span className="text-antiqueGold">새로운 가능성</span>을 <br />
              자명스쿨에서 시작하세요
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/courses"
                className="group relative overflow-visible h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 보러가기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>

              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                무료특강 참여하기
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
