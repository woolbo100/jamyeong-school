'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function KdmcaHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "협회소개", href: "#about" },
    { name: "자격과정", href: "#qualifications" },
    { name: "자격취득절차", href: "#process" },
    { name: "자격관리", href: "#management" },
    { name: "협회정보", href: "#info" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/90 backdrop-blur-xs border-b border-[#E7E5DF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18">
          {/* 로고 영역 */}
          <Link href="/kdmca" className="flex items-center gap-3.5 group">
            <div className="w-8 h-8 rounded-xs bg-[#14253D] flex items-center justify-center text-[#B59A68] font-serif text-sm font-bold tracking-tight">
              KD
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-[15px] sm:text-[17px] font-bold text-[#20242A] tracking-tight">
                  한국디지털마인드코칭협회
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#B59A68] font-semibold">
                  KDMCA
                </span>
              </div>
              <span className="text-[10px] text-[#6B7280] font-normal tracking-wide hidden sm:inline">
                Korea Digital Mind Coaching Association
              </span>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#4B5563]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#14253D] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[1.5px] hover:after:bg-[#B59A68]"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#14253D] px-3 py-1.5 border border-[#D5D3CC] rounded-xs hover:border-[#14253D] hover:bg-[#14253D] hover:text-[#FAF9F6] transition-all"
              title="자명스쿨 메인페이지로 이동"
            >
              <span>자명스쿨</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-[#20242A] hover:text-[#14253D] focus:outline-hidden"
              aria-label="메뉴 열기/닫기"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E7E5DF] bg-[#FAF9F6] px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1.5 text-sm font-medium text-[#20242A] border-b border-[#EFECE6]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-xs font-semibold text-[#14253D]"
              >
                <span>자명스쿨 교육과정 허브</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
