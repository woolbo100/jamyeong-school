'use client';

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer 
      className="relative pt-20 pb-12 overflow-hidden border-t border-[#B89B6A]/30"
      style={{
        background: `
          radial-gradient(
            ellipse at top,
            rgba(212,175,55,0.05),
            transparent 70%
          ),
          linear-gradient(
            180deg,
            #0A0A0A 0%,
            #0C0C0F 100%
          )
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Brand Identity Section */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-medium text-zinc-100 leading-relaxed tracking-tight">
                마음을 이해하고 표현하고<br />
                세상의 빛이 되는 교육
              </p>
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl font-black text-white tracking-tighter">자명스쿨</h2>
                <span className="text-zinc-500 font-light text-xl">|</span>
                <span className="text-xl font-bold text-zinc-400 tracking-tight">Jamyeong School</span>
              </div>
              <p className="text-zinc-500 text-sm md:text-base font-light">
                AI와 마음공부를 연결하는 미래형 교육 플랫폼
              </p>
            </div>
          </div>

          {/* Navigation and Contact Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {/* Main Menu */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-xs font-bold text-[#B89B6A] uppercase tracking-[0.2em]">Menu</h3>
              <ul className="flex flex-col space-y-4">
                <li><Link href="/about" className="text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">자명스쿨 소개</Link></li>
                <li><Link href="/courses" className="text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">강의 소개</Link></li>
                <li><Link href="/blog" className="text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">블로그</Link></li>
                <li><Link href="/contact" className="text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">문의하기</Link></li>
              </ul>
            </div>

            {/* Policy */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.2em]">Policy</h3>
              <ul className="flex flex-col space-y-4">
                <li><Link href="/terms" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">서비스 약관</Link></li>
                <li><Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">개인정보처리방침</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-6 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-[#B89B6A] uppercase tracking-[0.2em]">Contact</h3>
              <div className="flex flex-col space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Email Inquiry</p>
                  <a href="mailto:buzasun@naver.com" className="text-sm text-zinc-300 hover:text-[#B89B6A] transition-colors font-medium">
                    buzasun@naver.com
                  </a>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  문의는 영업일 기준<br />
                  순차적으로 답변 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-zinc-600 tracking-[0.15em] font-medium uppercase">
            © 2026 Jamyeong School. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 opacity-30">
             <span className="text-[#B89B6A] text-[10px]">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
