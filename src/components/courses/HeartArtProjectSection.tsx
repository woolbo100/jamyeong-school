"use client";

import React from "react";
import Reveal from "@/components/Reveal";

// ─────────────────────────────────────────────────────────────
// 상수 정의 (기존 /courses/fire 테마와 100% 동일한 톤앤매너)
// ─────────────────────────────────────────────────────────────
const GOLD = "#A68253";
const ORANGE = "#FF6A3D";
const CARD_BG = "#14161A";
const SUB_TEXT = "#BFBFBF";

// ─────────────────────────────────────────────────────────────
// 10종 브랜드 아트 콘텐츠 데이터
// ─────────────────────────────────────────────────────────────
interface BrandArtContentItem {
  id: string;
  number: string;
  badge: "BRAND" | "SNS" | "STORY" | "ART" | "GOODS" | "PUBLISHING" | "VIDEO" | "GALLERY" | "MARKETING" | "BRAND KIT";
  title: string;
  description: string;
  mockupType:
    | "laptop"
    | "instagram"
    | "essay"
    | "frame"
    | "calendar"
    | "ebook"
    | "reels"
    | "gallery"
    | "poster"
    | "brandkit";
}

const BRAND_ART_CONTENTS: BrandArtContentItem[] = [
  {
    id: "content-01",
    number: "01",
    badge: "BRAND",
    title: "브랜드 메인 아트",
    description: "홈페이지, 프로필, 소개페이지의 첫인상을 만드는 나만의 대표 비주얼",
    mockupType: "laptop",
  },
  {
    id: "content-02",
    number: "02",
    badge: "SNS",
    title: "감성 카드뉴스",
    description: "브랜드 메시지와 AI 아트를 결합한 SNS용 감성 콘텐츠",
    mockupType: "instagram",
  },
  {
    id: "content-03",
    number: "03",
    badge: "STORY",
    title: "그림에세이 콘텐츠",
    description: "짧은 글과 이미지를 함께 구성해 나의 생각과 브랜드 이야기를 전달하는 콘텐츠",
    mockupType: "essay",
  },
  {
    id: "content-04",
    number: "04",
    badge: "ART",
    title: "시화 콘텐츠",
    description: "시, 문장, 명언과 AI 이미지를 결합해 하나의 작품처럼 완성하는 감성 콘텐츠",
    mockupType: "frame",
  },
  {
    id: "content-05",
    number: "05",
    badge: "GOODS",
    title: "브랜드 캘린더",
    description: "월별 아트워크를 활용해 만드는 탁상달력 또는 디지털 캘린더 콘텐츠",
    mockupType: "calendar",
  },
  {
    id: "content-06",
    number: "06",
    badge: "PUBLISHING",
    title: "아트 전자책 PDF",
    description: "그림과 글을 하나의 흐름으로 엮어 디지털 소형 출판물로 완성",
    mockupType: "ebook",
  },
  {
    id: "content-07",
    number: "07",
    badge: "VIDEO",
    title: "숏폼 아트 영상",
    description: "정적인 AI 이미지에 움직임과 음악을 더해 릴스·쇼츠용 짧은 영상 콘텐츠로 제작",
    mockupType: "reels",
  },
  {
    id: "content-08",
    number: "08",
    badge: "GALLERY",
    title: "온라인 아트 갤러리",
    description: "내 작품을 온라인에서 감상할 수 있는 모바일 개인전·작품 소개 페이지",
    mockupType: "gallery",
  },
  {
    id: "content-09",
    number: "09",
    badge: "MARKETING",
    title: "강의·상품 홍보 포스터",
    description: "클래스, 프로그램, 상품, 서비스 모집에 실제로 사용할 수 있는 프로모션 비주얼",
    mockupType: "poster",
  },
  {
    id: "content-10",
    number: "10",
    badge: "BRAND KIT",
    title: "브랜드 소개 아트 세트",
    description: "About, 프로필, 홈페이지, SNS 등에서 반복 활용할 수 있는 시그니처 비주얼 세트",
    mockupType: "brandkit",
  },
];

// ─────────────────────────────────────────────────────────────
// 목업 시각화 렌더러 (실제 사용 상황을 연상시키는 다크 갤러리 디바이스 프레임)
// ─────────────────────────────────────────────────────────────
function MockupGraphic({ type }: { type: BrandArtContentItem["mockupType"] }) {
  if (type === "laptop") {
    // 01. 노트북 / 홈페이지 Hero 화면
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[9px] text-white/40">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[8px] font-mono tracking-wider text-[#A68253]">jmschool.kr/my-brand</span>
          <span className="text-[8px]">HERO WEB</span>
        </div>
        <div className="my-auto rounded-lg bg-gradient-to-br from-[#1C1712] via-[#2A1F16] to-[#120E0B] border border-[#A68253]/30 p-3 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A68253_0%,transparent_60%)] opacity-20" />
          <span className="text-[9px] font-semibold text-[#A68253] uppercase tracking-widest block mb-1">
            BRAND SIGNATURE
          </span>
          <p className="text-xs sm:text-sm font-bold text-white tracking-tight">
            내 감성이 깃든 브랜드 메인 비주얼
          </p>
          <p className="text-[9px] text-[#BFBFBF] mt-0.5">
            홈페이지 첫 화면을 압도하는 고유한 아트워크
          </p>
        </div>
        <div className="h-2 rounded bg-white/5 border border-white/5 flex items-center justify-center">
          <div className="w-8 h-0.5 rounded bg-white/20" />
        </div>
      </div>
    );
  }

  if (type === "instagram") {
    // 02. 인스타그램 / 스레드 피드
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[9px]">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#A68253] to-[#FF6A3D] p-[1px]">
              <div className="w-full h-full rounded-full bg-black" />
            </div>
            <span className="text-white/80 font-bold text-[9px]">heart.art.creator</span>
          </div>
          <span className="text-white/30">•••</span>
        </div>
        <div className="my-auto rounded-lg bg-gradient-to-br from-[#1E1610] to-[#100D0A] border border-[#A68253]/30 p-3 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-lg mb-1">✨</span>
          <p className="text-[11px] font-bold text-white leading-snug">
            “마음속 가장 깊은 감정을 <br />
            하나의 빛으로 그립니다”
          </p>
          <span className="text-[8px] text-[#A68253] mt-1">#감성카드뉴스 #브랜드메시지</span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-white/50">
          <div className="flex items-center gap-2">
            <span>♥ 1.2k</span>
            <span>💬 84</span>
          </div>
          <span>🔖</span>
        </div>
      </div>
    );
  }

  if (type === "essay") {
    // 03. 그림에세이 콘텐츠
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between pb-1 border-b border-white/5 text-[8px] text-white/40">
          <span className="text-[#A68253] font-bold">ESSAY &amp; ART</span>
          <span>STORY CUT 03</span>
        </div>
        <div className="grid grid-cols-5 gap-2 my-auto items-center">
          <div className="col-span-2 aspect-square rounded-lg bg-gradient-to-br from-[#2D2117] to-[#15100B] border border-[#A68253]/40 flex flex-col items-center justify-center text-center p-1">
            <span className="text-base mb-0.5">🎨</span>
            <span className="text-[7px] text-[#A68253]">AI PAINTING</span>
          </div>
          <div className="col-span-3 space-y-1 text-left">
            <span className="text-[8px] text-[#FF6A3D] font-bold">가을의 끝자락에서</span>
            <p className="text-[8px] text-white/80 leading-tight">
              차분하게 내려앉은 온기를 <br />
              나만의 화풍으로 기록하다.
            </p>
            <div className="h-0.5 w-12 rounded bg-[#A68253]/40" />
          </div>
        </div>
        <div className="text-[8px] text-white/30 text-right pt-1 border-t border-white/5">
          모바일 피드 &amp; 브런치 연재 포맷
        </div>
      </div>
    );
  }

  if (type === "frame") {
    // 04. 시화 갤러리 액자 / 포스터
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="w-6 h-1 rounded-full bg-[#A68253]/40 mx-auto" />
        <div className="my-auto mx-auto w-3/4 rounded-lg bg-gradient-to-br from-[#241A12] via-[#1A140E] to-[#0E0B08] border-2 border-[#A68253]/60 p-2.5 text-center shadow-lg relative">
          <div className="absolute top-0.5 right-1 text-[7px] text-[#A68253]">NO. 04</div>
          <span className="text-[7px] text-white/40 tracking-widest block uppercase">POETRY ART</span>
          <p className="text-[10px] font-bold text-white mt-1 leading-snug">
            바람이 지나간 자리, <br />
            꽃으로 머문 기억
          </p>
          <div className="w-8 h-[1px] bg-[#A68253]/40 mx-auto my-1" />
          <span className="text-[7px] text-[#A68253]">감성 시화 에디션</span>
        </div>
        <div className="text-[8px] text-white/40 text-center pb-0.5">
          실제 액자 인쇄 및 디지털 아트 포스터 규격
        </div>
      </div>
    );
  }

  if (type === "calendar") {
    // 05. 브랜드 캘린더 / 굿즈
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        {/* 상단 링 스프링 */}
        <div className="flex items-center justify-center gap-2 pt-0.5">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="w-1.5 h-2 rounded-full border border-[#A68253] bg-black" />
          ))}
        </div>
        <div className="my-auto rounded-lg bg-[#181410] border border-[#A68253]/30 p-2 space-y-1.5">
          <div className="flex items-center justify-between text-[8px] text-[#A68253]">
            <span className="font-bold">2026 CALENDAR</span>
            <span>OCTOBER</span>
          </div>
          <div className="h-10 rounded bg-gradient-to-r from-[#2B1F16] to-[#1C140E] border border-white/5 flex items-center justify-center text-[8px] text-white/80 font-bold">
            10월의 감성 아트워크
          </div>
          <div className="grid grid-cols-7 gap-1 text-[7px] text-white/40 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className={i === 0 ? "text-red-400" : ""}>{d}</span>
            ))}
          </div>
        </div>
        <div className="text-[8px] text-white/40 text-center pt-1 border-t border-white/5">
          탁상달력 굿즈 &amp; 스마트폰 배경화면
        </div>
      </div>
    );
  }

  if (type === "ebook") {
    // 06. 아트 전자책 PDF
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between text-[8px] text-white/40 pb-1 border-b border-white/5">
          <span className="text-[#A68253] font-bold">DIGITAL E-BOOK</span>
          <span>PDF / EPUB</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto items-center p-1.5 rounded-lg bg-[#16120E] border border-[#A68253]/30">
          <div className="rounded bg-gradient-to-br from-[#2D2016] to-[#15100B] border border-[#A68253]/40 p-2 text-center flex flex-col justify-between h-20 shadow-sm">
            <span className="text-[7px] text-[#A68253]">COVER</span>
            <div className="my-auto">
              <span className="text-sm block">📖</span>
              <span className="text-[8px] font-bold text-white block mt-0.5">아트 전자책</span>
            </div>
            <span className="text-[6px] text-white/40">저자 | 내 이름</span>
          </div>
          <div className="space-y-1 text-left">
            <span className="text-[8px] font-bold text-white block">그림과 글의 조화</span>
            <div className="h-0.5 w-full rounded bg-white/20" />
            <div className="h-0.5 w-4/5 rounded bg-white/15" />
            <div className="h-0.5 w-3/5 rounded bg-white/10" />
            <span className="text-[7px] text-[#A68253] block pt-1">소형 출판물 완성</span>
          </div>
        </div>
        <div className="text-[8px] text-white/40 text-right pt-1 border-t border-white/5">
          유페이퍼·교보문고 전자책 등록 규격
        </div>
      </div>
    );
  }

  if (type === "reels") {
    // 07. 숏폼 세로 릴스·쇼츠
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between text-[8px] text-white/40 pb-1 border-b border-white/5">
          <span className="text-[#FF6A3D] font-bold">REELS / SHORTS</span>
          <span>9:16 VERTICAL</span>
        </div>
        <div className="my-auto mx-auto w-32 h-24 rounded-lg bg-gradient-to-b from-[#221710] to-[#100C09] border border-[#FF6A3D]/40 p-2 flex items-center justify-between relative overflow-hidden">
          <div className="space-y-1 text-left">
            <span className="text-[7px] px-1 py-0.5 rounded bg-[#FF6A3D]/20 text-[#FF6A3D] font-bold inline-block">
              AI MOTION
            </span>
            <p className="text-[9px] font-bold text-white leading-tight">
              움직이는 <br />
              감성 아트워크
            </p>
            <span className="text-[6px] text-white/50">♫ BGM · SUNO 4.5</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-[8px] text-white/70">
            <span>❤️</span>
            <span>💬</span>
            <span className="w-3 h-3 rounded-full border border-white/40 flex items-center justify-center text-[6px]">💿</span>
          </div>
        </div>
        <div className="text-[8px] text-white/40 text-center pt-1 border-t border-white/5">
          정적 이미지에 생명을 불어넣는 모션 비디오
        </div>
      </div>
    );
  }

  if (type === "gallery") {
    // 08. 온라인 아트 갤러리
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between text-[8px] text-white/40 pb-1 border-b border-white/5">
          <span className="text-[#A68253] font-bold">ONLINE EXHIBITION</span>
          <span>SOLO GALLERY</span>
        </div>
        <div className="my-auto rounded-lg bg-gradient-to-b from-[#1E1712] via-[#14100D] to-[#0A0807] border border-[#A68253]/30 p-2.5 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="w-10 h-10 rounded border border-[#A68253]/40 bg-[#2A1E16] flex items-center justify-center text-[10px]">
              🖼️
            </div>
            <div className="w-10 h-10 rounded border border-[#A68253]/40 bg-[#2A1E16] flex items-center justify-center text-[10px]">
              🎨
            </div>
          </div>
          <p className="text-[9px] font-bold text-white">모바일 온라인 개인전</p>
          <span className="text-[7px] text-[#A68253]">링크 하나로 감상하는 나만의 갤러리</span>
        </div>
        <div className="text-[8px] text-white/40 text-center pt-1 border-t border-white/5">
          웹 링크 &amp; 메타버스 전시 공간 연계
        </div>
      </div>
    );
  }

  if (type === "poster") {
    // 09. 강의·상품 홍보 포스터
    return (
      <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
        <div className="flex items-center justify-between text-[8px] text-white/40 pb-1 border-b border-white/5">
          <span className="text-[#A68253] font-bold">PROMOTION POSTER</span>
          <span>MARKETING</span>
        </div>
        <div className="my-auto mx-auto w-3/4 rounded-lg bg-gradient-to-br from-[#291D15] via-[#1D150F] to-[#120E0A] border border-[#A68253]/50 p-2 text-center shadow-md">
          <span className="text-[7px] font-bold text-[#FF6A3D] uppercase tracking-wider block">
            SPECIAL CLASS
          </span>
          <p className="text-[10px] font-extrabold text-white my-1 leading-tight">
            내 브랜드 아트 클래스 <br />
            수강생 모집
          </p>
          <span className="text-[7px] px-2 py-0.5 rounded-full bg-[#A68253] text-black font-bold inline-block">
            모집 안내 포스터
          </span>
        </div>
        <div className="text-[8px] text-white/40 text-center pt-1 border-t border-white/5">
          강의·모임·상담·이벤트 홍보용 비주얼
        </div>
      </div>
    );
  }

  // 10. 브랜드 소개 아트 세트 (BRAND KIT)
  return (
    <div className="w-full h-44 rounded-xl bg-[#0D0F12] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#A68253]/50 transition-colors">
      <div className="flex items-center justify-between text-[8px] text-white/40 pb-1 border-b border-white/5">
        <span className="text-[#A68253] font-bold">SIGNATURE BRAND KIT</span>
        <span>ALL-IN-ONE</span>
      </div>
      <div className="my-auto p-2 rounded-lg bg-[#17120E] border border-[#A68253]/30 grid grid-cols-3 gap-1.5 items-center text-center">
        <div className="rounded bg-[#251A13] border border-white/5 p-1.5 flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#A68253] to-[#FF6A3D] mx-auto mb-1" />
          <span className="text-[6px] text-white/70">프로필</span>
        </div>
        <div className="rounded bg-[#251A13] border border-[#A68253]/40 p-1.5 flex flex-col items-center">
          <span className="text-xs mb-0.5">💎</span>
          <span className="text-[6px] text-[#A68253] font-bold">시그니처</span>
        </div>
        <div className="rounded bg-[#251A13] border border-white/5 p-1.5 flex flex-col items-center">
          <span className="text-xs mb-0.5">🌐</span>
          <span className="text-[6px] text-white/70">웹 배너</span>
        </div>
      </div>
      <div className="text-[8px] text-white/40 text-center pt-1 border-t border-white/5">
        About·프로필·SNS에 일관되게 쓰는 아트 킷
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 메인 HEART ART PROJECT 섹션 컴포넌트
// ─────────────────────────────────────────────────────────────
export default function HeartArtProjectSection() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#08090B] border-t border-white/5 relative overflow-hidden text-white">
      {/* 앰비언트 백드롭 글로우 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] blur-[160px] opacity-[0.06] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, ${ORANGE} 50%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-32 md:space-y-44">
        {/* ═══════════════════════════════════════════════
            [Part 1. 상단 신뢰 라벨 & 경험 실적 & 메인 타이틀]
           ═══════════════════════════════════════════════ */}
        <div>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              {/* Eyebrow 배지 */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1510] border border-[#A68253]/40 text-xs md:text-sm font-bold tracking-[0.2em] text-[#A68253] uppercase mb-6 shadow-sm">
                <span>HEART ART · SIGNATURE PROJECT</span>
              </div>

              {/* 과정명 & 부제 */}
              <h3 className="text-sm md:text-base font-semibold text-[#BFBFBF] tracking-widest uppercase mb-4">
                AI 감성아트지도사 – HEART ART PROJECT
              </h3>
              <p className="text-lg md:text-xl font-medium text-[#A68253] mb-8">
                내 감성을 브랜드 콘텐츠로 만드는 AI 아트 실전
              </p>

              {/* 메인 제목 */}
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-tight italic text-white tracking-tight mb-8">
                나만의 감성을 <br />
                <span style={{ color: GOLD }}>브랜드 콘텐츠</span>로 완성합니다
              </h2>

              {/* 보조 설명 */}
              <p className="text-base md:text-xl text-[#BFBFBF] font-light leading-relaxed max-w-3xl mx-auto break-keep">
                예쁜 이미지를 만드는 데서 끝나지 않습니다. <br />
                내가 좋아하는 색, 나만의 감정, 브랜드가 전하고 싶은 메시지를 <br className="hidden sm:inline" />
                SNS, 블로그, 강의, 상품 홍보에 실제로 사용할 수 있는 나만의 아트 콘텐츠로 확장합니다.
              </p>
            </div>
          </Reveal>

          {/* 절제된 신뢰 실적 3열 카드 */}
          <Reveal delayMs={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
              <div className="p-6 rounded-2xl bg-[#121418] border border-white/10 text-center space-y-1.5 hover:border-[#A68253]/40 transition-colors">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#A68253] font-display">
                  100+
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  동화책·에세이 작가 배출
                </p>
                <p className="text-xs text-[#BFBFBF]">
                  AI 기반 출판·스토리텔링 창작자 양성
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#121418] border border-white/10 text-center space-y-1.5 hover:border-[#A68253]/40 transition-colors">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#A68253] font-display">
                  50+
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  AI 감성책 출판
                </p>
                <p className="text-xs text-[#BFBFBF]">
                  전자책 &amp; POD 종이책 실제 등록 실적
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#121418] border border-white/10 text-center space-y-1.5 hover:border-[#A68253]/40 transition-colors">
                <span className="text-xl sm:text-2xl font-extrabold text-[#A68253] font-display pt-1 block">
                  ART &amp; EXHIBITION
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  전시·디지털 아트 활동
                </p>
                <p className="text-xs text-[#BFBFBF]">
                  명화·디지털 아트전 다수 참여 및 협회 활동
                </p>
              </div>
            </div>

            {/* 작은 활동 태그 라인 */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto text-xs text-white/50">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
                #AI출판콘텐츠작가
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
                #AI영상콘텐츠작가
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
                #AI디지털아트작가
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
                #디지털콘텐츠협회지국장
              </span>
            </div>
          </Reveal>

          {/* 핵심 후킹 강조 배너 */}
          <Reveal delayMs={300}>
            <div className="mt-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#17130F] via-[#241B15] to-[#17130F] border border-[#A68253]/30 text-center max-w-3xl mx-auto shadow-xl">
              <p className="text-base sm:text-xl font-bold text-[#E5D7C5] leading-relaxed break-keep">
                ✨ AI 아트는 단순한 그림이 아니라, <br className="sm:hidden" />
                <span style={{ color: GOLD }}>나를 알리고 브랜드를 기억하게 만드는 가장 감각적인 언어</span>입니다.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════════════════
            [Part 2. HEART ART 제작 흐름 (FROM HEART TO BRAND)]
           ═══════════════════════════════════════════════ */}
        <div>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#A68253] uppercase block mb-3">
                FROM HEART TO BRAND
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 italic">
                감정에서 시작해 <br />
                하나의 브랜드 언어로 완성합니다
              </h2>
              <p className="text-sm md:text-base text-[#BFBFBF] font-light break-keep">
                내면의 고유한 결을 발견하고, 그것을 시각화하여 대중과 소통하는 5단계 창작 여정
              </p>
            </div>
          </Reveal>

          {/* 5단계 아티스틱 플로우 */}
          <Reveal delayMs={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: "STEP 01", keyword: "HEART", desc: "나의 감정과 메시지 찾기", note: "내면의 고유한 이야기 발견" },
                { step: "STEP 02", keyword: "MOOD", desc: "컬러·분위기·키워드 구축", note: "나만의 감성 톤앤매너 확립" },
                { step: "STEP 03", keyword: "STYLE", desc: "나만의 이미지 스타일 정립", note: "일관성 있는 프롬프트 구조화" },
                { step: "STEP 04", keyword: "CONTENT", desc: "SNS·블로그·홍보 콘텐츠 제작", note: "실제 마케팅 플랫폼 맞춤화" },
                { step: "STEP 05", keyword: "BRAND", desc: "10종 브랜드 콘텐츠 완성", note: "평생 쓰는 비주얼 라이브러리" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#121418] border border-white/10 hover:border-[#A68253]/50 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#A68253] tracking-wider block">
                      {item.step}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                      {item.keyword}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#E5D7C5] break-keep">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 text-[11px] text-[#BFBFBF]">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════════════════
            [Part 3. 단순 AI 이미지 강의와의 차별화]
           ═══════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-3xl bg-[#121418] border border-white/10 p-8 sm:p-12 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#A68253] tracking-[0.2em] uppercase">
                  WHY HEART ART?
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white italic">
                  이미지를 만드는 법보다, <br />
                  <span style={{ color: GOLD }}>나만의 이미지를 만드는 법</span>을 배웁니다
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* 일반적인 AI 이미지 수업 */}
                <div className="p-6 rounded-2xl bg-[#0B0C0E] border border-white/5 space-y-4">
                  <span className="text-xs font-bold text-white/40 tracking-wider uppercase block">
                    ✕ 일반적인 AI 이미지 수업
                  </span>
                  <div className="space-y-2 text-sm text-[#BFBFBF]">
                    <div className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                      <span>01. 프롬프트 단순 복사 입력</span>
                      <span className="text-white/30">→</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                      <span>02. 일회성 이미지 무작위 생성</span>
                      <span className="text-white/30">→</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                      <span>03. 컴퓨터 폴더에 결과물 방치</span>
                      <span className="text-white/30">끝</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">
                    강의가 끝나면 어디에 어떻게 써야 할지 막막해집니다.
                  </p>
                </div>

                {/* HEART ART PROJECT */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1610] to-[#100D0A] border border-[#A68253]/50 space-y-4 shadow-lg">
                  <span className="text-xs font-bold text-[#A68253] tracking-wider uppercase block">
                    ✓ HEART ART PROJECT
                  </span>
                  <div className="space-y-2 text-sm text-white font-medium">
                    <div className="p-2.5 rounded-lg bg-[#251D16] border border-[#A68253]/30 flex items-center justify-between">
                      <span>01. 감정과 브랜드 메시지 발견</span>
                      <span className="text-[#A68253]">→</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#251D16] border border-[#A68253]/30 flex items-center justify-between">
                      <span>02. 나만의 시그니처 스타일 구축</span>
                      <span className="text-[#A68253]">→</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#251D16] border border-[#A68253]/30 flex items-center justify-between">
                      <span>03. 10종 실전 마케팅 콘텐츠 완성</span>
                      <span className="text-[#A68253]">자산화</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#A68253] leading-relaxed font-semibold">
                    내 브랜드의 SNS, 블로그, 강의에 즉시 사용하는 평생 자산이 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════════════════
            [Part 4. BRAND ART CONTENT 10 & FINAL PROJECT]
           ═══════════════════════════════════════════════ */}
        <div>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#A68253] uppercase block mb-3">
                BRAND ART CONTENT 10
              </span>
              <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 italic leading-tight">
                예쁜 그림에서 끝내지 않습니다 <br />
                <span style={{ color: GOLD }}>내 브랜드에 실제로 쓰는</span> 아트 콘텐츠 10종
              </h2>
              <p className="text-base md:text-xl text-[#BFBFBF] font-light leading-relaxed max-w-3xl mx-auto break-keep">
                6주 동안 만든 AI 아트를 SNS, 블로그, 강의, 상품, 출판, 영상까지 연결해 <br className="hidden sm:inline" />
                나만의 브랜드에서 반복해서 사용할 수 있는 10개의 아트 콘텐츠 자산으로 완성합니다.
              </p>
              <div className="mt-6 inline-block px-5 py-2 rounded-full bg-[#181410] border border-[#A68253]/30 text-xs sm:text-sm text-[#A68253] font-semibold">
                “한 번 만든 작품이 콘텐츠가 되고, 콘텐츠가 쌓여 나만의 브랜드 비주얼이 됩니다.”
              </div>
            </div>
          </Reveal>

          {/* 10종 카드 그리드 (PC 3열/2열, 태블릿 2열, 모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND_ART_CONTENTS.map((item, idx) => (
              <Reveal key={item.id} delayMs={(idx % 3) * 150}>
                <div className="group rounded-3xl bg-[#121418] border border-white/10 hover:border-[#A68253]/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-lg">
                  {/* 상단 목업 영역 */}
                  <div>
                    <MockupGraphic type={item.mockupType} />
                  </div>

                  {/* 하단 설명 영역 */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#A68253]">
                        NO. {item.number}
                      </span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#201912] border border-[#A68253]/40 text-[#A68253] font-bold tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#A68253] transition-colors break-keep">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#BFBFBF] font-light leading-relaxed break-keep min-h-[40px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* FINAL PROJECT 메시지 배너 */}
          <Reveal delayMs={300}>
            <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#1A1410] via-[#120F0D] to-[#0A0807] border border-[#A68253]/40 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#261D16] border border-[#A68253]/50 text-xs font-bold text-[#A68253] tracking-widest uppercase">
                FINAL PROJECT
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white italic leading-tight">
                내 브랜드용 아트 콘텐츠 10종 세트 완성
              </h3>
              <p className="text-sm sm:text-base text-[#BFBFBF] font-light leading-relaxed max-w-2xl mx-auto break-keep">
                6주 동안 배운 AI 이미지, 감성 글쓰기, 디자인, 영상, 브랜딩을 연결해 <br className="hidden sm:inline" />
                <strong className="text-white font-semibold">SNS · 블로그 · 홈페이지 · 강의 · 상품 · 출판 · 영상</strong> 등에서 <br className="hidden sm:inline" />
                계속 사용할 수 있는 나만의 브랜드 비주얼 자산으로 완성합니다.
              </p>
              <div className="pt-2 border-t border-white/10 text-xs sm:text-sm text-[#A68253] font-medium italic">
                “작품을 만드는 법에서 끝나지 않습니다. 작품이 나를 알리고, 브랜드를 기억하게 만드는 콘텐츠가 되도록 만듭니다.”
              </div>
            </div>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════════════════
            [Part 5. 실제 활용 영역 (MARKETING ASSETS 6종)]
           ═══════════════════════════════════════════════ */}
        <div>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#A68253] uppercase block mb-3">
                MARKETING APPLICATION
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 italic">
                완성한 콘텐츠는 <br />
                바로 나의 마케팅 자산이 됩니다
              </h2>
              <p className="text-sm md:text-base text-[#BFBFBF] font-light break-keep">
                수업이 끝난 뒤에도 계속 사용할 수 있는 '나만의 브랜드 비주얼 라이브러리'를 구축합니다.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {[
                { tag: "SNS", title: "인스타그램·스레드", desc: "시선을 사로잡는 감성 피드" },
                { tag: "BLOG", title: "블로그 대표 이미지", desc: "포스팅 첫인상 & 썸네일" },
                { tag: "CLASS", title: "강의·모임 홍보", desc: "수강생 모집 프로모션" },
                { tag: "BRAND", title: "브랜드 소개·프로필", desc: "About & 시그니처 비주얼" },
                { tag: "PRODUCT", title: "전자책·굿즈 상품", desc: "실제 판매 가능한 제품군" },
                { tag: "VIDEO", title: "릴스·쇼츠 썸네일", desc: "조회수를 부르는 영상 표지" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#121418] border border-white/10 text-center space-y-2 hover:border-[#A68253]/40 transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#A68253] tracking-widest block">
                    {item.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white break-keep">{item.title}</h4>
                  <p className="text-[11px] text-[#BFBFBF] leading-snug break-keep">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════════════════
            [Part 6. 수료 성과 6종 & 수강생 전용 자료 BENEFIT]
           ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 좌측: 수료 후 갖게 되는 6가지 */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#121418] border border-white/10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#A68253] tracking-[0.2em] uppercase block mb-2">
                    WHAT YOU GET
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white italic mb-6">
                    수료 후 갖게 되는 것
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "나만의 AI 아트 스타일",
                      "브랜드 컬러와 무드",
                      "감성 콘텐츠 제작법",
                      "실전 마케팅용 아트 콘텐츠 10종",
                      "반복 제작 가능한 프롬프트 구조",
                      "나만의 브랜드 비주얼 라이브러리",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white"
                      >
                        <span className="text-[#A68253] font-bold">✔</span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#BFBFBF] pt-4 border-t border-white/5">
                  단순 기술 습득을 넘어, 브랜드의 시각적 자산을 손에 쥐고 수료합니다.
                </p>
              </div>
            </Reveal>
          </div>

          {/* 우측: 수강생 전용 자료 (BENEFIT) */}
          <div className="lg:col-span-5">
            <Reveal delayMs={200}>
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C1610] via-[#14100D] to-[#0A0807] border border-[#A68253]/40 flex flex-col justify-between space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-bold text-[#A68253] tracking-[0.2em] uppercase block mb-2">
                    CLASS BENEFIT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white italic mb-4">
                    수강생 전용 자료 5종
                  </h3>
                  <p className="text-xs text-[#BFBFBF] mb-6">
                    수업 이후에도 나만의 창작을 계속할 수 있도록 실전 자료집을 제공합니다.
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { code: "01", name: "HEART ART 스타일북" },
                      { code: "02", name: "브랜드 비주얼 레시피북" },
                      { code: "03", name: "AI 감성 콘텐츠 프롬프트북" },
                      { code: "04", name: "10종 콘텐츠 제작 체크리스트" },
                      { code: "05", name: "브랜드 컬러·무드 워크시트" },
                    ].map((mat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#231A14] border border-[#A68253]/20 flex items-center justify-between text-xs font-medium text-[#E5D7C5]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#A68253] font-mono font-bold text-[11px]">{mat.code}</span>
                          <span>{mat.name}</span>
                        </div>
                        <span className="text-[10px] text-[#A68253] font-bold">수강생 제공</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#A68253] font-semibold text-center">
                  수업 실습과 과제 완성을 위한 맞춤형 가이드북
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            [Part 7. 중간 CTA 연결]
           ═══════════════════════════════════════════════ */}
        <Reveal>
          <div className="text-center pt-8 border-t border-white/5 space-y-8 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-display italic text-[#E5D7C5]">
              내 감성을 브랜드 콘텐츠로 완성해보세요.
            </p>
            <div className="flex justify-center">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-16 px-10 flex items-center justify-center text-base sm:text-lg font-bold tracking-wider rounded-full bg-gradient-to-br from-[#A68253] to-[#FF6A3D] text-black shadow-[0_10px_40px_rgba(255,106,61,0.25)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold italic">강의 안내 받기 →</span>
                <span className="absolute -inset-1 bg-gradient-to-br from-[#A68253] to-[#FF6A3D] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              </a>
            </div>
            <p className="text-xs text-white/30 tracking-widest uppercase">
              HEART ART PROJECT · JAMYEONG SCHOOL
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

