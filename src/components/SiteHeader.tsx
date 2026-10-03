'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 라이트/베이지 배경 페이지 판별 (/apply, /oneday, /resources 등)
  const isLightPage =
    pathname.startsWith('/apply') ||
    pathname.startsWith('/oneday') ||
    pathname.startsWith('/resources');

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

  // 메뉴별 링크 클래스 헬퍼
  const getMenuClass = (href: string, isSpecial: boolean = false) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

    if (isLightPage) {
      if (isActive) {
        return 'text-[#B58B4A] font-bold transition-colors duration-200';
      }
      if (isSpecial) {
        return 'text-[#5C4838] font-semibold hover:text-[#B58B4A] transition-colors duration-200';
      }
      return 'text-[#3F342B] font-medium hover:text-[#9B7440] transition-colors duration-200';
    } else {
      if (isActive) {
        return 'text-[#FFFBD1] font-semibold transition-colors duration-200';
      }
      if (isSpecial) {
        return 'text-[#D6C6A8] font-semibold hover:text-[#FFFBD1] transition-colors duration-200';
      }
      return 'text-white/90 hover:text-[#D6C6A8] transition-colors duration-200';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ease-out
        ${
          isLightPage
            ? isScrolled
              ? 'bg-[#F8F3EA]/92 backdrop-blur-[12px] border-b border-[#785F41]/12 shadow-[0_4px_20px_rgba(46,39,35,0.06)]'
              : 'bg-transparent border-b border-[#785F41]/10'
            : isScrolled
              ? 'bg-trueBlack/85 backdrop-blur-md border-b border-white/5 shadow-lg'
              : 'bg-transparent border-b border-white/10'
        }`}
    >
      {/* Golden Line Effect */}
      <div
        className={`absolute left-0 right-0 bottom-0 h-[1px] transition-opacity duration-500 pointer-events-none
          ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: isLightPage
            ? 'linear-gradient(to right, transparent, rgba(181,139,74,0.4), transparent)'
            : 'linear-gradient(to right, transparent, rgba(214,198,168,0.75), transparent)',
        }}
      />

      {/* Golden Glow Blur Effect (다크 페이지 전용) */}
      {!isLightPage && (
        <div
          className={`absolute left-0 right-0 -bottom-10 h-20 blur-2xl transition-opacity duration-500 pointer-events-none
            ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(1200px 80px at 50% 0%, rgba(184,155,106,0.65), transparent 70%)',
          }}
        />
      )}

      {/* 로고 */}
      <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
        <span className="text-[#B89B6A] text-2xl font-black tracking-tighter transition-all duration-300 group-hover:scale-105">
          JM
        </span>
        <span
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isLightPage ? 'text-[#3F342B]' : 'text-white'
          }`}
        >
          자명스쿨
        </span>
      </Link>

      {/* 데스크톱 메뉴 */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
        <Link className={getMenuClass('/about')} href="/about">
          자명스쿨소개
        </Link>
        <Link className={getMenuClass('/courses')} href="/courses">
          강의소개
        </Link>
        <Link
          className={`${getMenuClass('/apply', true)} flex items-center gap-1.5 group`}
          href="/apply"
        >
          <span>정규과정</span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isLightPage ? 'bg-[#B58B4A]' : 'bg-[#B89B6A]'
            } group-hover:scale-125 transition-transform animate-pulse`}
          />
        </Link>
        <Link
          className={`${getMenuClass('/oneday', true)} flex items-center gap-1.5 group`}
          href="/oneday"
        >
          <span>원데이클래스</span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isLightPage ? 'bg-[#B58B4A]' : 'bg-[#B89B6A]'
            } group-hover:scale-125 transition-transform animate-pulse`}
          />
        </Link>
        <Link className={getMenuClass('/resources')} href="/resources">
          자명자료실
        </Link>
        <Link className={getMenuClass('/reviews')} href="/reviews">
          강의후기
        </Link>
        <Link className={getMenuClass('/blog')} href="/blog">
          자명노트
        </Link>
        <Link className={getMenuClass('/contact')} href="/contact">
          문의하기
        </Link>
      </nav>

      {/* 우측 버튼 영역 */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <a
          href="https://pf.kakao.com/_IxguMn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://pf.kakao.com/_IxguMn', '_blank', 'noopener,noreferrer');
          }}
          className={`hidden sm:flex items-center justify-center h-[34px] px-4 text-[13px] font-bold rounded-lg transition-colors ${
            isLightPage
              ? 'bg-[#2E2723] text-white border border-[#2E2723] hover:bg-[#433830]'
              : 'bg-[#222222] border border-[#333333] text-[#ffffff] hover:bg-[#333333]'
          }`}
        >
          상담하기
        </a>
        <Link
          href="/login"
          className="group relative overflow-visible flex items-center h-9 px-5 text-sm font-bold rounded-lg bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]"
        >
          {/* External Aura Glow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
            style={{
              background:
                'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)',
            }}
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
          className={`md:hidden p-2 focus:outline-none transition-colors ${
            isLightPage ? 'text-[#3F342B]' : 'text-white/90'
          }`}
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 px-6 py-6 flex flex-col gap-4 text-base shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 ${
            isLightPage
              ? 'bg-[#F9F6F0]/98 backdrop-blur-2xl border-b border-[#E8DFD3] text-[#3F342B]'
              : 'bg-[#0B0B10]/95 backdrop-blur-2xl border-b border-white/10 text-white/90'
          }`}
        >
          <Link
            className={`py-2 border-b ${
              isLightPage
                ? 'text-[#3F342B] hover:text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-white/90 hover:text-[#D6C6A8] border-white/5'
            }`}
            href="/about"
          >
            자명스쿨소개
          </Link>
          <Link
            className={`py-2 border-b ${
              isLightPage
                ? 'text-[#3F342B] hover:text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-white/90 hover:text-[#D6C6A8] border-white/5'
            }`}
            href="/courses"
          >
            강의소개
          </Link>
          <Link
            className={`py-2 border-b flex items-center justify-between font-bold ${
              isLightPage
                ? 'text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-[#D6C6A8] border-white/5'
            }`}
            href="/apply"
          >
            <span>정규과정</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full border ${
                isLightPage
                  ? 'bg-[#C6A66B]/15 text-[#8E6D38] border-[#C6A66B]/30'
                  : 'bg-[#B89B6A]/20 text-[#D6C6A8] border-[#B89B6A]/30'
              }`}
            >
              전문과정
            </span>
          </Link>
          <Link
            className={`py-2 border-b flex items-center justify-between font-bold ${
              isLightPage
                ? 'text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-[#D6C6A8] border-white/5'
            }`}
            href="/oneday"
          >
            <span>원데이클래스</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full border ${
                isLightPage
                  ? 'bg-[#C6A66B]/15 text-[#8E6D38] border-[#C6A66B]/30'
                  : 'bg-[#B89B6A]/20 text-[#D6C6A8] border-[#B89B6A]/30'
              }`}
            >
              신규 OPEN
            </span>
          </Link>
          <Link
            className={`py-2 border-b ${
              isLightPage
                ? 'text-[#3F342B] hover:text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-white/90 hover:text-[#D6C6A8] border-white/5'
            }`}
            href="/resources"
          >
            자명자료실
          </Link>
          <Link
            className={`py-2 border-b ${
              isLightPage
                ? 'text-[#3F342B] hover:text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-white/90 hover:text-[#D6C6A8] border-white/5'
            }`}
            href="/reviews"
          >
            강의후기
          </Link>
          <Link
            className={`py-2 border-b ${
              isLightPage
                ? 'text-[#3F342B] hover:text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-white/90 hover:text-[#D6C6A8] border-white/5'
            }`}
            href="/blog"
          >
            자명노트
          </Link>
          <Link
            className={`py-2 border-b ${
              isLightPage
                ? 'text-[#3F342B] hover:text-[#B58B4A] border-[#E8DFD3]/80'
                : 'text-white/90 hover:text-[#D6C6A8] border-white/5'
            }`}
            href="/contact"
          >
            문의하기
          </Link>
          <div className="pt-2 flex gap-3">
            <a
              href="https://pf.kakao.com/_IxguMn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-10 text-sm font-bold rounded-lg bg-[#2E2723] text-white border border-[#433830]"
            >
              카카오 상담
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

