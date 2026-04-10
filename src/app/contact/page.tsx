import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "문의하기 | 자명스쿨",
  description: "자명스쿨 교육, 협업, 콘텐츠 제작 및 강연 문의를 하실 수 있는 공간입니다.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-trueBlack text-white selection:bg-antiqueGold/30 overflow-x-hidden">
      {/* 1. Hero Section & Main Contact */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* Subtle Background Aurora Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-antiqueGold/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-antiqueGold font-display text-xs tracking-[0.4em] mb-6 uppercase opacity-80">
              Contact Us
            </span>
          </Reveal>
          
          <Reveal delayMs={200}>
            <h1 className="text-5xl md:text-7xl font-display mb-12 leading-tight tracking-tight uppercase italic bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block">
              문의하기
            </h1>
          </Reveal>
          
          <Reveal delayMs={400}>
            <div className="space-y-6 max-w-2xl mx-auto mb-16">
              <p className="text-xl md:text-2xl text-antiqueGold font-medium">
                지금, 당신의 시작을 도와드립니다
              </p>
              <div className="text-lg text-white/70 font-light leading-relaxed space-y-4">
                <p>
                  자명스쿨은 단순한 교육이 아니라 <br />
                  삶의 방향을 함께 만드는 공간입니다.
                </p>
                <p>
                  강의, 협업, 콘텐츠 제작, 강연 문의까지 <br />
                  편하게 남겨주세요.
                </p>
                <p className="text-white/40">
                  하나하나 정성껏 답변드립니다. <br className="md:hidden" />
                  궁금한 점이 있다면 언제든 편하게 문의해주세요.
                </p>
              </div>
            </div>
          </Reveal>
          
          {/* Main Kakao CTA */}
          <Reveal delayMs={600} slideFrom="bottom">
            <div className="flex justify-center mb-16">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-20 w-full max-w-md px-10 flex items-center justify-center text-sm font-bold uppercase tracking-[0.2em] rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[3px] hover:shadow-antiqueGold/20 active:scale-95"
              >
                <span className="relative z-10 text-base md:text-lg">카카오톡 채널로 문의하기</span>
                {/* Glow effect on hover */}
                <span className="absolute -inset-1 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </a>
            </div>
          </Reveal>
          
          {/* Email Section */}
          <Reveal delayMs={800}>
            <div className="pt-12 border-t border-white/5 space-y-6">
              <div className="space-y-2">
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email Inquiry</p>
                <p className="text-2xl md:text-3xl font-display text-white transition-colors hover:text-antiqueGold">
                  buzasun@naver.com
                </p>
              </div>
              <p className="text-sm text-white/30 leading-relaxed font-light">
                ※ 이메일 문의는 답변까지 시간이 소요될 수 있습니다. <br />
                빠른 상담은 <span className="text-antiqueGold/60">카카오 채널</span>을 이용해주세요.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* Decorative vertical line */}
      <div className="flex justify-center pb-20">
        <div className="w-px h-32 bg-gradient-to-b from-antiqueGold/40 to-transparent"></div>
      </div>
    </div>
  );
}
