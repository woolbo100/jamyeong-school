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
import {
  Award,
  BookOpen,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export default function KdmcaClientView() {
  const [selectedQualification, setSelectedQualification] = useState<Qualification | null>(null);

  const introCards = [
    {
      icon: GraduationCap,
      title: "전문가 및 강사 양성",
      description: "AI·디지털 콘텐츠·교육 분야의 전문 강사와 지도자를 양성합니다.",
    },
    {
      icon: ShieldCheck,
      title: "민간자격 운영 및 관리",
      description: "협회가 운영하는 민간자격 교육, 검정 및 자격관리 업무를 수행합니다.",
    },
    {
      icon: Sparkles,
      title: "디지털 교육 콘텐츠 연구",
      description: "AI와 디지털 도구를 활용한 실무 중심 교육 프로그램을 연구합니다.",
    },
    {
      icon: Layers,
      title: "교육 프로그램 개발",
      description: "개인과 교육기관에서 활용할 수 있는 전문 교육과정을 개발합니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-amber-200">
      {/* 4. 협회 전용 공식 헤더 */}
      <KdmcaHeader />

      {/* 5. HERO 영역 */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <Building2 className="w-4 h-4" />
            <span>등록 민간자격 공식 관리기관</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            한국디지털마인드코칭협회
          </h1>

          <p className="text-base sm:text-xl font-medium text-amber-200/90 tracking-tight max-w-3xl mx-auto mb-6">
            AI · 디지털 콘텐츠 · 코칭 역량을 연결하는 미래형 교육 전문기관
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            한국디지털마인드코칭협회는 급변하는 디지털 환경에 필요한 AI 활용 능력, 콘텐츠 제작 능력, 교육 및 코칭 역량을 융합하여 전문 교육인과 강사를 양성하는 교육·자격 운영기관입니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#qualifications"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-tight transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>자격과정 보기</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              href="/courses"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>자명스쿨 교육과정 보기</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 협회 소개 영역 */}
      <section id="about" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200/60 inline-block mb-3">
            About Association
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            한국디지털마인드코칭협회 소개
          </h2>
          <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug mb-6">
            디지털 기술을 배우는 것을 넘어 사람에게 전달하고 가르칠 수 있는 전문가를 양성합니다.
          </p>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-center">
            <p>
              한국디지털마인드코칭협회는 생성형 AI, 디지털 콘텐츠, 출판, 디자인, 감성예술 및 코칭 분야의 교육 프로그램을 연구·개발하고 관련 전문 인력을 양성합니다.
            </p>
            <p>
              AI 시대에 필요한 실무 활용 능력과 교육 역량을 함께 갖춘 강사와 지도자를 양성하고, 체계적인 교육과 자격과정을 통해 지속 가능한 개인의 성장과 전문 활동을 지원합니다.
            </p>
          </div>
        </div>

        {/* 4대 주요 역할 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {introCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. 자격과정 영역 */}
      <section id="qualifications" className="py-20 md:py-28 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest bg-white px-3 py-1 rounded-md border border-slate-200 inline-block mb-3">
              Official Certifications
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              등록 민간자격 과정
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              한국디지털마인드코칭협회에서는 AI, 디지털 콘텐츠, 출판, 디자인 및 감성예술 분야의 전문 역량을 갖춘 인재 양성을 위한 등록 민간자격과정을 운영하고 있습니다.
            </p>
          </div>

          {/* 4대 자격증 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {QUALIFICATIONS_DATA.map((qual) => (
              <div
                key={qual.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-7 flex flex-col justify-between"
              >
                <div>
                  {/* 상단 뱃지 */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                      {qual.type} · {qual.level}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/60">
                      등록번호: {qual.registrationNumber}
                    </span>
                  </div>

                  {/* 자격명 */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                    {qual.name}
                  </h3>

                  {/* 한 줄 설명 */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {qual.shortDescription}
                  </p>
                </div>

                {/* 하단 공통 규정 및 상세보기 버튼 */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span>발급기관: </span>
                    <strong className="text-slate-700 font-semibold">{qual.issuer}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedQualification(qual)}
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-tight transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <span>상세보기</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 공통 안내 박스 (비용 미노출 원칙 준수) */}
          <div className="mt-10 p-5 rounded-xl bg-white/80 border border-slate-200 text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-slate-800 font-medium">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                <strong>공통 검정기준:</strong> 4대 민간자격의 자격검정은 필기시험과 과제심사 방식으로 실시합니다.
              </span>
            </div>
            <span className="text-slate-500 text-xs shrink-0">
              * 세부 심사기준은 각 자격 상세정보에서 확인 가능합니다.
            </span>
          </div>
        </div>
      </section>

      {/* 14. 자격취득 절차 */}
      <section id="process" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200/60 inline-block mb-3">
            Certification Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            자격 취득 절차
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            한국디지털마인드코칭협회의 등록 민간자격은 다음 5단계의 공정하고 체계적인 절차를 거쳐 발급됩니다.
          </p>
        </div>

        {/* 5단계 프로세스 (PC 가로형, 모바일 세로형) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {CERT_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs relative"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-amber-700 font-mono block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end text-slate-300">
                <span className="text-lg font-bold font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 15. 자격 관리 안내 */}
      <section id="management" className="py-16 md:py-20 bg-slate-100/60 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Management Standards
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  자격 관리 안내
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
              한국디지털마인드코칭협회는 민간자격의 신뢰성과 전문성을 유지하기 위하여 자격 취득 및 자격증 사용에 관한 관리기준을 운영합니다.
            </p>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-3">
              <p className="font-semibold text-slate-900">
                다음과 같은 경우 자격을 취소하거나 자격증 사용을 제한할 수 있습니다.
              </p>
              <ul className="space-y-2 text-slate-600 list-disc list-inside pl-1 text-xs sm:text-sm leading-relaxed">
                <li>시험 및 자격검정 과정에서 부정행위를 한 경우</li>
                <li>자격 취득을 위하여 허위 서류를 제출한 경우</li>
                <li>발급된 자격증을 부정한 목적으로 사용한 경우</li>
                <li>자격관리기관의 명예와 신뢰를 훼손하는 행위를 한 경우</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 16. 교육과정 안내 (자명스쿨 연계) */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 md:p-16 border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-slate-800 px-3 py-1 rounded-md border border-slate-700 inline-block">
              Educational Partnership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              교육과정 안내
            </h2>
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                한국디지털마인드코칭협회의 교육과정은 협회 지정 교육 프로그램을 통해 운영됩니다.
              </p>
              <p>
                자명스쿨은 AI, 디지털 콘텐츠, 출판, 브랜딩 및 교육 분야의 실무형 교육과정을 운영합니다.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-colors shadow-md"
              >
                <span>자명스쿨 교육과정 보기</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 17. 협회 공식 정보 */}
      <section id="info" className="py-20 md:py-24 bg-white border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md border border-slate-200 inline-block mb-3">
              Official Information
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              협회 정보
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              한국디지털마인드코칭협회의 공식 법인 및 기관 정보입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700 w-1/3 sm:w-1/4">기관명</th>
                  <td className="px-5 py-4 font-bold text-slate-900">{KDMCA_INFO.name}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700">영문명 / 약칭</th>
                  <td className="px-5 py-4 text-slate-800">{KDMCA_INFO.englishName} ({KDMCA_INFO.shortName})</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700">대표자</th>
                  <td className="px-5 py-4 font-medium text-slate-900">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{KDMCA_INFO.representative}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-500 font-medium">[대표자 직인]</span>
                        <Image
                          src="/images/kdmca/kdmca-seal.png"
                          alt="한국디지털마인드코칭협회 대표 직인"
                          width={32}
                          height={32}
                          className="rounded-xs shadow-2xs border border-red-600/30"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700">소재지</th>
                  <td className="px-5 py-4 text-slate-800">{KDMCA_INFO.address}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700">연락처</th>
                  <td className="px-5 py-4 text-slate-800">
                    <a href={`tel:${KDMCA_INFO.tel}`} className="hover:underline font-medium text-slate-900">
                      {KDMCA_INFO.tel}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700">이메일</th>
                  <td className="px-5 py-4 text-slate-800">
                    <a href={`mailto:${KDMCA_INFO.email}`} className="hover:underline text-slate-900 font-medium">
                      {KDMCA_INFO.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="px-5 py-4 bg-slate-50 font-semibold text-slate-700">공식 홈페이지</th>
                  <td className="px-5 py-4 text-slate-800">
                    <a href={KDMCA_INFO.homepage} className="text-slate-900 hover:underline font-mono text-xs sm:text-sm">
                      {KDMCA_INFO.homepage}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 공식 직인 및 엠블럼 인증 보증 카드 */}
          <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-2 border-amber-500/30 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              {/* 좌측: 골드 엠블럼과 보증 문구 */}
              <div className="flex items-center gap-5 text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 p-[2px] shadow-lg shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-center p-1 border border-amber-400/40">
                    <span className="text-[9px] font-black tracking-widest text-amber-300 uppercase">KDMCA</span>
                    <Award className="w-6 h-6 text-amber-400 my-0.5" />
                    <span className="text-[7px] font-bold text-amber-200/90 tracking-tighter">OFFICIAL SEAL</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
                    <span>대한민국 등록 민간자격 관리기관</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    한국디지털마인드코칭협회 공식 직인 및 엠블럼
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                    본 협회는 민간자격 관리 법령에 따라 등록된 정식 자격과정을 총괄 운영하며, 우측의 인장은 한국디지털마인드코칭협회의 등록 공식 직인임을 확인합니다.
                  </p>
                </div>
              </div>

              {/* 우측: 공식 직인 날인 박스 */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 shrink-0 shadow-inner">
                <div className="text-right">
                  <span className="text-[11px] text-amber-300 font-bold block">공식 등록 직인</span>
                  <span className="text-sm font-bold text-white block mt-0.5">대표자 {KDMCA_INFO.representative}</span>
                  <span className="text-[10px] text-slate-400 block">[ 정식 날인 ]</span>
                </div>
                <div className="p-1 bg-white rounded-lg shadow-md border border-slate-200">
                  <Image
                    src="/images/kdmca/kdmca-seal.png"
                    alt="한국디지털마인드코칭협회 공식 직인"
                    width={72}
                    height={72}
                    className="rounded-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. 민간자격 안내 */}
      <section className="py-12 bg-slate-100/80 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2.5">
          <h3 className="font-bold text-slate-800 text-sm sm:text-base">
            민간자격 안내
          </h3>
          <p className="leading-relaxed">
            한국디지털마인드코칭협회는 관련 법령에 따라 등록된 민간자격과정을 운영하고 있습니다.
          </p>
          <p className="leading-relaxed text-slate-500">
            각 자격의 등록번호, 자격의 종류, 자격관리기관, 검정 및 수료기준 등 세부 정보는 각 자격과정 안내에서 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 19. 푸터 */}
      <KdmcaFooter />

      {/* 13. 자격 상세보기 모달 */}
      <QualificationDetailModal
        qualification={selectedQualification}
        onClose={() => setSelectedQualification(null)}
      />
    </div>
  );
}
