'use client';

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer 
      className="relative pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-[#B89B6A]/30"
      style={{
        background: `
          radial-gradient(
            ellipse at top,
            rgba(212,175,55,0.04),
            transparent 65%
          ),
          linear-gradient(
            180deg,
            #0A0A0A 0%,
            #0C0C0F 100%
          )
        `
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 
          [PC 화면 (lg 이상)]
          5개 영역을 1개의 가로 행으로 나란히 배치 (CSS Grid)
          너비 비율: 브랜드 소개 27% / MENU 13% / POLICY 15% / CONTACT 15% / BUSINESS INFO 30%
          (합계 100% 비율을 가로 스크롤 없이 유연하게 맞추기 위해 fr 단위 적용)
          
          [모바일/태블릿 화면 (< lg)]
          1. 브랜드 소개: 상단 전체 너비
          2. MENU & 3. POLICY: 2열로 나란히 배치하여 공간 절약
          4. CONTACT: 모바일에서 보기 편하게 배치
          5. BUSINESS INFO: 하단 전체 너비로 시원하게 배치
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[minmax(0,2.7fr)_minmax(0,1.3fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,3.0fr)] gap-8 sm:gap-10 lg:gap-8 xl:gap-10 items-start mb-16">
          
          {/* 1. 브랜드 소개 + 협회 링크 (PC 권장 너비: 27%) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col space-y-6">
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-medium text-zinc-100 leading-snug tracking-tight">
                마음을 이해하고 표현하고<br />
                세상의 빛이 되는 교육
              </p>
              <div className="flex items-baseline gap-2.5">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tighter bg-gradient-to-b from-[#E6C99B] via-[#B89B6A] to-[#8A6D3B] bg-clip-text text-transparent">
                  자명스쿨
                </h2>
                <span className="text-zinc-600 font-light text-lg">|</span>
                <span className="text-lg sm:text-xl font-bold text-zinc-400 tracking-tight">
                  Jamyeong School
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                AI와 마음공부를 연결하는 미래형 교육 플랫폼
              </p>
            </div>

            {/* KDMCA 협회 링크 버튼 */}
            <div className="pt-1">
              <Link
                href="/kdmca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#B89B6A]/30 hover:border-[#B89B6A] transition-all duration-300 group max-w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-[#B89B6A] group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(184,155,106,0.6)] shrink-0" />
                <span className="text-xs text-zinc-300 group-hover:text-white font-medium break-keep">
                  한국디지털마인드코칭협회 (KDMCA)
                </span>
                <span className="text-xs text-[#B89B6A] group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* 2. MENU (PC 권장 너비: 13%) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-[#B89B6A] uppercase tracking-[0.2em] h-5 flex items-center">
              Menu
            </h3>
            <ul className="flex flex-col space-y-2.5">
              <li><Link href="/about" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">자명스쿨 소개</Link></li>
              <li><Link href="/courses" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">강의 소개</Link></li>
              <li><Link href="/apply" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">자격과정</Link></li>
              <li><Link href="/oneday" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">원데이클래스</Link></li>
              <li><Link href="/resources" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">자명자료실</Link></li>
              <li><Link href="/reviews" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">강의 후기</Link></li>
              <li><Link href="/blog" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">자명노트</Link></li>
              <li><Link href="/contact" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">문의하기</Link></li>
            </ul>
          </div>

          {/* 3. POLICY (PC 권장 너비: 15%) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-[#B89B6A] uppercase tracking-[0.2em] h-5 flex items-center">
              Policy
            </h3>
            <ul className="flex flex-col space-y-2.5">
              <li><Link href="/terms" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">서비스 이용약관</Link></li>
              <li><Link href="/privacy" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/refund" className="text-xs sm:text-sm text-zinc-400 hover:text-[#B89B6A] transition-colors">환불 및 취소 정책</Link></li>
            </ul>
          </div>

          {/* 4. CONTACT (PC 권장 너비: 15%) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col space-y-4 pt-4 md:pt-0 border-t border-white/5 md:border-t-0">
            <h3 className="text-xs font-bold text-[#B89B6A] uppercase tracking-[0.2em] h-5 flex items-center">
              Contact
            </h3>
            <div className="flex flex-col space-y-3.5">
              {/* 카카오톡 상담 채널 */}
              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">카카오톡 상담</p>
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-[#B89B6A] transition-colors group"
                >
                  <span>카카오톡 1:1 상담</span>
                  <span className="text-[#B89B6A] text-xs group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </div>

              {/* 제안 / 문의 이메일 */}
              <div className="space-y-0.5">
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider">제안 / 문의</p>
                <a 
                  href="mailto:buzasun@naver.com" 
                  className="text-xs sm:text-sm text-zinc-300 hover:text-[#B89B6A] transition-colors font-medium break-all"
                >
                  buzasun@naver.com
                </a>
              </div>

              {/* 답변 안내 문구 */}
              <p className="text-[11px] text-zinc-500 leading-relaxed break-keep pt-1">
                문의는 영업일 기준 순차적으로 신속하게 답변 드립니다.
              </p>
            </div>
          </div>

          {/* 5. BUSINESS INFO (PC 권장 너비: 30%) - PC에서 가장 우측에 배치 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col space-y-4 pt-6 md:pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0">
            <h3 className="text-xs font-bold text-[#B89B6A] uppercase tracking-[0.2em] h-5 flex items-center">
              Business Info
            </h3>
            <div className="flex flex-col space-y-2 text-xs text-zinc-400 break-keep leading-relaxed font-light">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span><strong className="text-zinc-300 font-medium">상호명:</strong> 자명스쿨</span>
                <span className="text-zinc-700">|</span>
                <span><strong className="text-zinc-300 font-medium">대표자:</strong> 백진선</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span><strong className="text-zinc-300 font-medium">소속기관:</strong> 한국디지털마인드코칭협회</span>
                <span className="text-zinc-700">|</span>
                <span><strong className="text-zinc-300 font-medium">개인정보보호책임자:</strong> 백진선</span>
              </div>

              <div>
                <p className="break-keep">
                  <strong className="text-zinc-300 font-medium">사업장 소재지:</strong> 부산광역시 해운대구 반송로 621(석대동), 203호
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span><strong className="text-zinc-300 font-medium">고객센터:</strong> 010-2339-1033</span>
                <span className="text-zinc-700">|</span>
                <span><strong className="text-zinc-300 font-medium">이메일:</strong> buzasun@naver.com</span>
              </div>

              <p className="text-[11px] text-zinc-500 pt-1 leading-normal">
                자명스쿨의 모든 콘텐츠 및 교육 과정은 저작권법의 보호를 받습니다.
              </p>
            </div>
          </div>

        </div>

        {/* 최하단 저작권 표시 (All Rights Reserved) */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-500 tracking-[0.15em] font-medium uppercase text-center sm:text-left">
            © 2026 Jamyeong School. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <span className="text-[#B89B6A] text-[10px]">✦</span>
            <span>Mind & AI Education</span>
            <span className="text-[#B89B6A] text-[10px]">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
