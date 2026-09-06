'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  QUALIFICATIONS_DATA,
  CERT_PROCESS_STEPS,
  KDMCA_INFO,
  Qualification,
} from "@/data/kdmcaData";
import KdmcaHeader from "@/components/kdmca/KdmcaHeader";
import KdmcaFooter from "@/components/kdmca/KdmcaFooter";
import QualificationDetailModal from "@/components/kdmca/QualificationDetailModal";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function KdmcaClientView() {
  const [selectedQualification, setSelectedQualification] = useState<Qualification | null>(null);

  const activities = [
    {
      num: "01",
      title: "전문가 및 강사 양성",
      desc: "AI·디지털 콘텐츠·교육 분야의 전문 강사와 지도자를 양성합니다.",
    },
    {
      num: "02",
      title: "민간자격 운영 및 관리",
      desc: "협회가 운영하는 민간자격 교육, 검정 및 자격관리 업무를 수행합니다.",
    },
    {
      num: "03",
      title: "디지털 교육 콘텐츠 연구",
      desc: "AI와 디지털 도구를 활용한 실무 중심 교육 프로그램을 연구합니다.",
    },
    {
      num: "04",
      title: "교육 프로그램 개발",
      desc: "개인과 교육기관에서 활용할 수 있는 전문 교육과정을 개발합니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#20242A] selection:bg-[#14253D] selection:text-[#FAF9F6]">
      {/* 공식 헤더 */}
      <KdmcaHeader />

      <main className="w-full">
        {/* =========================================================================
            1. HERO 영역 (따뜻한 Ivory / Off White: #FAF9F6)
        ========================================================================= */}
        <section className="w-full bg-[#FAF9F6] border-b border-[#E7E5DF] pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* 좌측 약 65% 타이포그래피 영역 */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#B59A68] uppercase font-semibold block">
                    KOREA DIGITAL MIND COACHING ASSOCIATION
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14253D] tracking-tight leading-[1.18]">
                    한국디지털마인드코칭협회
                  </h1>
                  <p className="text-base sm:text-lg font-medium text-[#4B5563] pt-1 tracking-tight">
                    AI · 디지털 콘텐츠 · 코칭 역량을 연결하는 미래형 교육 전문기관
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#6B7280] max-w-[680px] leading-relaxed font-normal pt-1">
                  한국디지털마인드코칭협회는 급변하는 디지털 환경에 필요한 AI 활용 능력, 콘텐츠 제작 능력, 교육 및 코칭 역량을 융합하여 전문 교육인과 강사를 양성하는 교육·자격 운영기관입니다.
                </p>

                {/* 버튼 2개: Deep Navy Solid + Subtle Outline */}
                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#qualifications"
                    className="px-6 py-3 bg-[#14253D] hover:bg-[#1E3A5F] text-[#FAF9F6] text-xs font-semibold tracking-wide transition-colors inline-flex items-center gap-2 rounded-xs"
                  >
                    <span>자격과정 보기</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                  <Link
                    href="/courses"
                    className="px-6 py-3 bg-transparent hover:bg-[#F0EFEA] text-[#14253D] text-xs font-semibold tracking-wide border border-[#D5D3CC] hover:border-[#14253D] transition-colors inline-flex items-center gap-2 rounded-xs"
                  >
                    <span>자명스쿨 교육과정 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                </div>
              </div>

              {/* 우측 약 35% 절제된 공식 기관 엠블럼 & 직인 프레임 */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="w-full max-w-[320px] bg-white border border-[#D5D3CC] p-6 space-y-5 shadow-2xs">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E5DF]">
                    <span className="text-[10px] font-mono tracking-widest text-[#B59A68] uppercase font-semibold">
                      OFFICIAL ACCREDITATION
                    </span>
                    <span className="text-[10px] font-mono text-[#9CA3AF]">EST. 2026</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#14253D] block">
                      대한민국 등록 민간자격 관리기관
                    </span>
                    <p className="text-[11px] text-[#6B7280] leading-relaxed">
                      본 협회는 자격기본법에 의거하여 정식 등록된 4대 교육·코칭 민간자격을 공식 운영합니다.
                    </p>
                  </div>

                  {/* 공식 직인 날인 영역 */}
                  <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-[#B59A68] uppercase block">OFFICIAL SEAL</span>
                      <span className="text-xs font-bold text-[#14253D]">대표자 백진선</span>
                    </div>
                    <div className="p-0.5 bg-white border border-[#D5D3CC]">
                      <Image
                        src="/images/kdmca/kdmca-seal.png"
                        alt="한국디지털마인드코칭협회 공식 직인"
                        width={48}
                        height={48}
                        className="block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. 협회소개 (화이트 / 맑은 Off White: #FFFFFF)
        ========================================================================= */}
        <section id="about" className="w-full bg-[#FFFFFF] border-b border-[#E7E5DF] py-24 sm:py-32 scroll-mt-18">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            {/* 섹션 번호 및 국문 타이틀 */}
            <div className="mb-12">
              <span className="text-xs font-mono tracking-[0.2em] text-[#B59A68] uppercase font-semibold block mb-2">
                01 — ASSOCIATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14253D] tracking-tight">
                한국디지털마인드코칭협회 소개
              </h2>
            </div>

            {/* 좌우 2단 에디토리얼 레이아웃 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-[#E7E5DF]">
              {/* 좌측 40% 대형 문장 */}
              <div className="lg:col-span-5">
                <p className="text-xl sm:text-2xl font-bold text-[#14253D] leading-snug tracking-tight">
                  디지털 기술을 배우는 것을 넘어 사람에게 전달하고 가르칠 수 있는 전문가를 양성합니다.
                </p>
              </div>

              {/* 우측 60% 본문 */}
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                <p>
                  한국디지털마인드코칭협회는 생성형 AI, 디지털 콘텐츠, 출판, 디자인, 감성예술 및 코칭 분야의 교육 프로그램을 연구·개발하고 관련 전문 인력을 양성합니다.
                </p>
                <p>
                  AI 시대에 필요한 실무 활용 능력과 교육 역량을 함께 갖춘 강사와 지도자를 양성하고, 체계적인 교육과 자격과정을 통해 지속 가능한 개인의 성장과 전문 활동을 지원합니다.
                </p>
              </div>
            </div>

            {/* 4대 주요 활동: 4열 에디토리얼 리스트 */}
            <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {activities.map((act) => (
                <div key={act.num} className="space-y-2.5 pt-4 border-t-2 border-[#14253D]/20">
                  <span className="text-xs font-mono font-bold text-[#B59A68] block">
                    {act.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#14253D] tracking-tight">
                    {act.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. 등록 민간자격 (아주 연한 Blue Gray: #F2F5F7)
        ========================================================================= */}
        <section id="qualifications" className="w-full bg-[#F2F5F7] border-b border-[#E2E6EA] py-24 sm:py-32 scroll-mt-18">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-mono tracking-[0.2em] text-[#B59A68] uppercase font-semibold block mb-2">
                  02 — CERTIFICATIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14253D] tracking-tight">
                  등록 민간자격 과정
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] max-w-md sm:text-right leading-relaxed">
                한국디지털마인드코칭협회에서는 AI, 디지털 콘텐츠, 출판, 디자인 및 감성예술 분야의 전문 역량을 갖춘 인재 양성을 위한 등록 민간자격과정을 운영하고 있습니다.
              </p>
            </div>

            {/* 4개 자격증: 2x2 에디토리얼 그리드 (Blue Gray 배경 위에서 White 카드와 Muted Gold 포인트) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#DCE2E6] border border-[#DCE2E6]">
              {QUALIFICATIONS_DATA.map((qual, idx) => (
                <div
                  key={qual.id}
                  className="bg-white p-7 sm:p-9 hover:bg-[#FAFCFD] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#B59A68]">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-[#B59A68] font-semibold tracking-wide">
                        REG. NO. {qual.registrationNumber}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#14253D] tracking-tight group-hover:text-[#1E3A5F] transition-colors">
                      {qual.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed pt-1">
                      {qual.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#EDF1F4] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#8C98A4]">
                      {qual.type} · {qual.level}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedQualification(qual)}
                      className="inline-flex items-center gap-1.5 font-semibold text-[#14253D] group-hover:text-[#B59A68] transition-colors text-xs"
                    >
                      <span>상세보기</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 공통 기준 한 줄 공지 */}
            <div className="mt-8 py-4 px-5 bg-white border border-[#DCE2E6] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6B7280] gap-2">
              <span>
                <strong className="text-[#14253D] font-semibold">공통 검정기준:</strong> 4개 자격의 자격검정은 필기시험과 과제심사 방식으로 실시합니다.
              </span>
              <span className="text-[11px] font-mono text-[#8C98A4]">
                * 세부 내용은 각 자격 상세보기에서 확인 가능합니다.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. 자격 취득 절차 (다시 화이트로 명확한 시각적 전환: #FFFFFF)
        ========================================================================= */}
        <section id="process" className="w-full bg-[#FFFFFF] border-b border-[#E7E5DF] py-24 sm:py-32 scroll-mt-18">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="mb-14">
              <span className="text-xs font-mono tracking-[0.2em] text-[#B59A68] uppercase font-semibold block mb-2">
                03 — PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14253D] tracking-tight">
                자격 취득 절차
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-2">
                체계적이고 공정한 평가 기준에 따라 총 5단계의 검정 절차를 거쳐 자격증이 발급됩니다.
              </p>
            </div>

            {/* PC: 가로 타임라인 (대형 번호와 Muted Gold 포인트) / 모바일: 세로 타임라인 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5 relative">
              {CERT_PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="relative pt-6 border-t-2 border-[#14253D]/15 hover:border-[#B59A68] transition-colors space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl sm:text-3xl font-mono font-light text-[#14253D]/25">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#B59A68]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#14253D]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. 자격 관리 안내 (아주 연한 Navy Tint: #F1F3F6)
        ========================================================================= */}
        <section id="management" className="w-full bg-[#F1F3F6] border-b border-[#E2E6EA] py-20 sm:py-24 scroll-mt-18">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* 좌측: 타이틀 및 개요 */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono tracking-[0.2em] text-[#B59A68] uppercase font-semibold block">
                  COMPLIANCE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#14253D] tracking-tight">
                  자격 관리 안내
                </h2>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  한국디지털마인드코칭협회는 민간자격의 신뢰성과 전문성을 유지하기 위하여 자격 취득 및 자격증 사용에 관한 관리기준을 운영합니다.
                </p>
              </div>

              {/* 우측: 4가지 관리 기준 번호 리스트 */}
              <div className="lg:col-span-8 bg-white border border-[#DCE2E6] p-6 sm:p-8 space-y-4 shadow-2xs">
                <span className="text-xs font-bold text-[#14253D] block">
                  다음과 같은 경우 자격을 취소하거나 자격증 사용을 제한할 수 있습니다.
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4B5563] pt-2">
                  <div className="p-3.5 bg-[#F8F9FB] border-l-2 border-[#14253D] space-y-1">
                    <span className="text-[10px] font-mono text-[#B59A68] font-bold">CRITERIA 01</span>
                    <p>시험 및 자격검정 과정에서 부정행위를 한 경우</p>
                  </div>
                  <div className="p-3.5 bg-[#F8F9FB] border-l-2 border-[#14253D] space-y-1">
                    <span className="text-[10px] font-mono text-[#B59A68] font-bold">CRITERIA 02</span>
                    <p>자격 취득을 위하여 허위 서류를 제출한 경우</p>
                  </div>
                  <div className="p-3.5 bg-[#F8F9FB] border-l-2 border-[#14253D] space-y-1">
                    <span className="text-[10px] font-mono text-[#B59A68] font-bold">CRITERIA 03</span>
                    <p>발급된 자격증을 부정한 목적으로 사용한 경우</p>
                  </div>
                  <div className="p-3.5 bg-[#F8F9FB] border-l-2 border-[#14253D] space-y-1">
                    <span className="text-[10px] font-mono text-[#B59A68] font-bold">CRITERIA 04</span>
                    <p>자격관리기관의 명예와 신뢰를 훼손하는 행위를 한 경우</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. 교육과정 안내 (화이트: #FFFFFF)
        ========================================================================= */}
        <section className="w-full bg-[#FFFFFF] border-b border-[#E7E5DF] py-16 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#FAF9F6] border border-[#D5D3CC] p-7 sm:p-10">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[11px] font-mono tracking-widest text-[#B59A68] uppercase font-semibold block">
                  CURRICULUM PARTNERSHIP
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#14253D] tracking-tight">
                  교육과정 안내
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  한국디지털마인드코칭협회의 교육과정은 협회 지정 교육 프로그램을 통해 운영됩니다.
                  자명스쿨은 AI, 디지털 콘텐츠, 출판, 브랜딩 및 교육 분야의 실무형 교육과정을 운영합니다.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/courses"
                  className="px-6 py-3 bg-[#14253D] hover:bg-[#1E3A5F] text-[#FAF9F6] text-xs font-semibold tracking-wide transition-colors inline-flex items-center gap-2 rounded-xs"
                >
                  <span>자명스쿨 교육과정 보기</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. 협회 정보 / 공식 직인 (따뜻한 Cream / Ivory: #F7F3EB)
        ========================================================================= */}
        <section id="info" className="w-full bg-[#F7F3EB] border-b border-[#E8E2D5] py-24 sm:py-32 scroll-mt-18">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-xs font-mono tracking-[0.2em] text-[#B59A68] uppercase font-semibold block mb-2">
                04 — OFFICIAL INFORMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14253D] tracking-tight">
                협회 정보
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* 좌측 약 65% 기관 정보 명세 (단정한 행 divider 테이블) */}
              <div className="lg:col-span-8 border-t-2 border-[#14253D]">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280] w-1/3 sm:w-1/4">기관명</th>
                      <td className="py-4 font-bold text-[#14253D]">{KDMCA_INFO.name}</td>
                    </tr>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280]">영문명 / 약칭</th>
                      <td className="py-4 text-[#20242A]">{KDMCA_INFO.englishName} ({KDMCA_INFO.shortName})</td>
                    </tr>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280]">대표자</th>
                      <td className="py-4 font-medium text-[#14253D]">{KDMCA_INFO.representative}</td>
                    </tr>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280]">소재지</th>
                      <td className="py-4 text-[#20242A]">{KDMCA_INFO.address}</td>
                    </tr>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280]">연락처</th>
                      <td className="py-4 text-[#20242A]">
                        <a href={`tel:${KDMCA_INFO.tel}`} className="hover:underline font-medium text-[#14253D]">
                          {KDMCA_INFO.tel}
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280]">이메일</th>
                      <td className="py-4 text-[#20242A]">
                        <a href={`mailto:${KDMCA_INFO.email}`} className="hover:underline text-[#14253D] font-medium">
                          {KDMCA_INFO.email}
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[#E8E2D5]">
                      <th className="py-4 pr-4 font-semibold text-[#6B7280]">공식 홈페이지</th>
                      <td className="py-4 text-[#20242A]">
                        <a href={KDMCA_INFO.homepage} className="text-[#14253D] hover:underline font-mono text-xs">
                          {KDMCA_INFO.homepage}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 우측 약 35% 공식 직인 프레임 (Champagne Gold 얇은 라인과 충분한 여백) */}
              <div className="lg:col-span-4 bg-white border border-[#B59A68]/40 p-7 space-y-5 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5]">
                  <span className="text-[10px] font-mono tracking-widest text-[#B59A68] uppercase font-semibold">
                    KDMCA OFFICIAL SEAL
                  </span>
                  <span className="text-[10px] font-mono text-[#9CA3AF]">공식 직인</span>
                </div>

                <div className="flex flex-col items-center justify-center py-5 space-y-4">
                  <div className="p-1.5 bg-white border border-[#B59A68]/30">
                    <Image
                      src="/images/kdmca/kdmca-seal.png"
                      alt="한국디지털마인드코칭협회 공식 직인"
                      width={84}
                      height={84}
                      className="block"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-xs font-bold text-[#14253D] block">
                      한국디지털마인드코칭협회 직인
                    </span>
                    <span className="text-[11px] text-[#6B7280] block">
                      대표자 {KDMCA_INFO.representative} 날인
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#6B7280] leading-relaxed pt-3 border-t border-[#E8E2D5] text-center">
                  본 인장은 대한민국 등록 민간자격 관리기관인 한국디지털마인드코칭협회의 등록 공식 직인임을 확인합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. 민간자격 안내 (단정한 공식 법령 고지)
        ========================================================================= */}
        <section className="w-full bg-[#FAF9F6] py-12 border-b border-[#E7E5DF]">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center text-xs text-[#6B7280] space-y-1.5">
            <h4 className="font-bold text-[#14253D] text-xs uppercase tracking-wider">
              민간자격 안내
            </h4>
            <p>
              한국디지털마인드코칭협회는 관련 법령에 따라 등록된 민간자격과정을 운영하고 있습니다.
            </p>
            <p className="text-[11px] text-[#9CA3AF]">
              각 자격의 등록번호, 자격의 종류, 자격관리기관, 검정 및 수료기준 등 세부 정보는 각 자격과정 안내에서 확인할 수 있습니다.
            </p>
          </div>
        </section>
      </main>

      {/* 공식 푸터 */}
      <KdmcaFooter />

      {/* 자격 상세 모달 */}
      <QualificationDetailModal
        qualification={selectedQualification}
        onClose={() => setSelectedQualification(null)}
      />
    </div>
  );
}
