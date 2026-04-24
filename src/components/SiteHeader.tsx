'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // scrollY > 8 이면 효과 활성화
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md transition-all duration-300
        ${isScrolled ? 'bg-trueBlack/80 border-b border-white/5 shadow-lg' : 'bg-transparent border-b border-white/10'}`}
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

      <nav className="hidden md:flex items-center gap-8 text-sm">
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/about">
          자명스쿨소개
        </Link>
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/courses">
          강의소개
        </Link>
        <Link className="text-white/90 hover:text-[#D6C6A8] transition-colors duration-200" href="/blog">
          블로그
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
          className="flex items-center justify-center h-[34px] px-4 text-[13px] font-bold rounded-lg bg-[#222222] border border-[#333333] text-[#ffffff] transition-colors hover:bg-[#333333]"
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
      </div>

      <button className="md:hidden text-white/90" aria-label="메뉴 열기">
        ☰
      </button>
    </header>
  );
}
