import React from "react";
import Link from "next/link";
import Image from "next/image";
import { KDMCA_INFO } from "@/data/kdmcaData";
import { Award, ShieldCheck } from "lucide-react";

export default function KdmcaFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* 기관명 및 영문명 */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {KDMCA_INFO.name}
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                {KDMCA_INFO.shortName}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-normal">
              {KDMCA_INFO.englishName}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              급변하는 디지털 환경 속에서 AI 활용 능력, 디지털 콘텐츠 제작 역량, 코칭 전문성을 융합하여 실무 교육인과 강사를 양성하는 전문 교육·자격 운영기관입니다.
            </p>
          </div>

          {/* 공식 정보 요약 */}
          <div className="lg:col-span-6 flex flex-col justify-between text-xs space-y-2.5 text-slate-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <span className="text-slate-400">대표자: </span>
                <span className="text-slate-200 font-medium">{KDMCA_INFO.representative}</span>
              </div>
              <div>
                <span className="text-slate-400">연락처: </span>
                <a href={`tel:${KDMCA_INFO.tel}`} className="text-slate-200 hover:text-white transition-colors font-medium">
                  {KDMCA_INFO.tel}
                </a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400">소재지: </span>
                <span className="text-slate-200">{KDMCA_INFO.address}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400">이메일: </span>
                <a href={`mailto:${KDMCA_INFO.email}`} className="text-slate-200 hover:text-white transition-colors underline underline-offset-2 font-medium">
                  {KDMCA_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                개인정보처리방침
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/terms"
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                서비스 이용약관
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/"
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                자명스쿨 메인
              </Link>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 및 가장 밑단 공식 인장 / 엠블럼 영역 */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-1 bg-white rounded-md shadow-md shrink-0 border border-slate-200">
              <Image
                src="/images/kdmca/kdmca-seal.png"
                alt="한국디지털마인드코칭협회 공식 직인"
                width={48}
                height={48}
                className="rounded-xs"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-slate-200 font-bold text-sm tracking-tight">한국디지털마인드코칭협회</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">공식 직인 확인</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Copyright © {KDMCA_INFO.name}. All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-200 font-medium">정식 등록 민간자격 관리기관</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
