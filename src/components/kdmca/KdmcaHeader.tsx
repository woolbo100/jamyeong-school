'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 로고 영역 */}
          <Link href="/kdmca" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 font-bold text-base shadow-xs group-hover:bg-slate-800 transition-colors">
              KD
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                  한국디지털마인드코칭협회
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  KDMCA
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal tracking-tight hidden sm:inline">
                Korea Digital Mind Coaching Association
              </span>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200/80"
              title="자명스쿨 메인페이지로 이동"
            >
              <span>자명스쿨</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </Link>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-slate-400"
              aria-label="메뉴 열기/닫기"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold bg-slate-50 text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <span>자명스쿨 바로가기</span>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
