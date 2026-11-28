import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "전자책 | 자명스쿨",
  description: "마음공부와 AI 감성 창작의 깊이를 담은 자명스쿨 전자책 시리즈. 곧 선보입니다.",
};

export default function EbooksPage() {
  return (
    <div className="bg-true-black min-h-screen font-sans selection:bg-antique-gold/30 text-white relative">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 px-6 overflow-hidden">
        <HeroParticles />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-antiqueGold/10 border border-[#B89B6A]/30 mb-8">
              <Sparkles className="w-4 h-4 text-antiqueGold" />
              <span className="text-xs font-bold tracking-[0.25em] text-antiqueGold uppercase">
                JAMYEONG SCHOOL · E-BOOK COLLECTION
              </span>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.3] break-keep">
              한 권의 책에 담아내는 <br />
              <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent">
                내면의 통찰과 AI 지식 자산
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={350}>
            <p className="text-base sm:text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-2xl mx-auto mb-10 break-keep">
              자기이해와 마음공부의 지혜, 그리고 AI를 활용한 실전 지식 창작 노하우를 담은 자명스쿨 공식 전자책 시리즈가 곧 오픈됩니다.
            </p>
          </Reveal>

          {/* Coming Soon Notice Card */}
          <Reveal delayMs={450}>
            <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-[#B89B6A]/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-antiqueGold/10 blur-3xl pointer-events-none rounded-full" />

              <div className="w-14 h-14 rounded-2xl bg-antiqueGold/10 border border-antiqueGold/25 flex items-center justify-center mx-auto mb-5 text-antiqueGold">
                <BookOpen className="w-7 h-7" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF2E6]/10 text-[#D6C6A8] text-xs font-semibold mb-3 border border-white/10">
                오픈 준비 중
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 break-keep">
                전자책 컬렉션을 정성껏 준비하고 있습니다.
              </h2>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8 break-keep">
                출판 작가 및 강사 양성 과정의 핵심 교재와 노하우가 담긴 전자책 목록 및 상세 페이지가 순차적으로 공개될 예정입니다.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/oneday"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] font-bold text-sm flex items-center justify-center gap-2 shadow hover:brightness-110 transition-all duration-300"
                >
                  <span>원데이클래스 둘러보기</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/courses"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-antiqueGold/40 text-white font-medium text-sm transition-all duration-300"
                >
                  교육과정 살펴보기
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
