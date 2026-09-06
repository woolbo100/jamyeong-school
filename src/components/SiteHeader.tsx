'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 페이지 이동 시 모바일 메뉴 자동 닫힘
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md transition-all duration-300
        ${isScrolled ? 'bg-trueBlack/85 border-b border-white/5 shadow-lg' : 'bg-transparent border-b border-white/10'}`}
    >
      {/* Golden Line Effect */}
      <div
        className={`absolute left-0 right-0 bottom-0 h-[1px] transition-opacity duration-500 pointer-events-none
          ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(214,198,168,0.75), transparent)'
        }}
      />

      {/* Golden Glow Blur Effect */}
      <div
        className={`absolute left-0 right-0 -bottom-10 h-20 blur-2xl transition-opacity duration-500 pointer-events-none
          ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(1200px 80px at 50% 0%, rgba(184,155,106,0.65), transparent 70%)'
        }}
      />

      <Link href="/" className="flex items-center gap-2 group transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(184,155,106,0.5)]">
        <span className="text-[#B89B6A] text-2xl font-black tracking-tighter transition-all duration-300 group-hover:scale-105 group-hover:blur-[0.4px]">JM</span>
        <span className="text-white text-xl font-bold tracking-tight transition-all duration-300 group-hover:blur-[0.4px]">자명스쿨</span>
      </Link>

      <nav className="hidden md:flex items-center gap-7 text-sm">
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/about">
          자명스쿨소개
        </Link>
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/courses">
          강의소개
        </Link>
        <Link 
          className="text-[#D6C6A8] font-semibold hover:text-[#FFFBD1] transition-colors duration-200 flex items-center gap-1.5 group" 
          href="/apply"
        >
          <span>강의신청</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B6A] group-hover:bg-[#FFFBD1] animate-pulse" />
        </Link>
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/reviews">
          강의후기
        </Link>
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/blog">
          자명노트
        </Link>
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/contact">
          문의하기
        </Link>
      </nav>

      <div className="flex items-center space-x-4 md:space-x-6">
        <a
          href="https://pf.kakao.com/_IxguMn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://pf.kakao.com/_IxguMn', '_blank', 'noopener,noreferrer');
          }}
          className="hidden sm:flex items-center justify-center h-[34px] px-4 text-[13px] font-bold rounded-lg bg-[#222222] border border-[#333333] text-[#ffffff] transition-colors hover:bg-[#333333]"
        >
          상담하기
        </a>
        <Link href="/login" className="group relative overflow-visible flex items-center h-9 px-5 text-sm font-bold rounded-lg bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]">
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
          <span className="relative z-10">로그인</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/90 p-2 focus:outline-none" 
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B10]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-base shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <Link 
            className="text-white/90 hover:text-[#D6C6A8] py-2 border-b border-white/5" 
            href="/about"
          >
            자명스쿨소개
          </Link>
          <Link 
            className="text-white/90 hover:text-[#D6C6A8] py-2 border-b border-white/5" 
            href="/courses"
          >
            강의소개
          </Link>
          <Link 
            className="text-[#D6C6A8] font-bold py-2 border-b border-white/5 flex items-center justify-between" 
            href="/apply"
          >
            <span>강의신청</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#B89B6A]/20 text-[#D6C6A8] border border-[#B89B6A]/30">신규 OPEN</span>
          </Link>
          <Link 
            className="text-white/90 hover:text-[#D6C6A8] py-2 border-b border-white/5" 
            href="/reviews"
          >
            강의후기
          </Link>
          <Link 
            className="text-white/90 hover:text-[#D6C6A8] py-2 border-b border-white/5" 
            href="/blog"
          >
            자명노트
          </Link>
          <Link 
            className="text-white/90 hover:text-[#D6C6A8] py-2 border-b border-white/5" 
            href="/contact"
          >
            문의하기
          </Link>
          <div className="pt-2 flex gap-3">
            <a
              href="https://pf.kakao.com/_IxguMn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-10 text-sm font-bold rounded-lg bg-[#222222] text-white border border-[#333333]"
            >
              카카오 상담
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
