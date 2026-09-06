import React from "react";
import Link from "next/link";
import Image from "next/image";
import { KDMCA_INFO } from "@/data/kdmcaData";

export default function KdmcaFooter() {
  return (
    <footer className="bg-[#14253D] text-[#D1D5DB] border-t border-[#1E3A5F] pt-16 pb-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* 상단 기관 정체성 및 직인 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-[#233B5D] gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-bold text-[#FAF9F6] tracking-tight">
                {KDMCA_INFO.name}
              </span>
              <span className="text-xs font-mono font-semibold tracking-widest text-[#B59A68]">
                {KDMCA_INFO.shortName}
              </span>
            </div>
            <p className="text-xs text-[#9CA3AF] font-mono tracking-wide">
              {KDMCA_INFO.englishName}
            </p>
            <p className="text-xs text-[#9CA3AF] max-w-xl leading-relaxed pt-2">
              AI 활용 능력, 디지털 콘텐츠 제작, 교육 및 코칭 역량을 융합하여 미래형 전문 인력을 양성하는 공인 등록 민간자격 관리기관입니다.
            </p>
          </div>

          {/* 공식 인장 표시 (절제된 한지/서식지 프레임) */}
          <div className="flex items-center gap-4 shrink-0 bg-[#0E1B2E] border border-[#233B5D] px-4 py-3">
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#B59A68] uppercase tracking-wider block">OFFICIAL SEAL</span>
              <span className="text-xs font-medium text-[#FAF9F6]">한국디지털마인드코칭협회</span>
            </div>
            <Image
              src="/images/kdmca/kdmca-seal.png"
              alt="한국디지털마인드코칭협회 공식 직인"
              width={40}
              height={40}
              className="bg-white p-0.5"
            />
          </div>
        </div>

        {/* 중단 공식 정보 명세 */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#9CA3AF] border-b border-[#233B5D]">
          <div>
            <span className="text-[11px] font-mono text-[#B59A68] uppercase block mb-1">REPRESENTATIVE</span>
            <span className="text-[#FAF9F6] font-medium">{KDMCA_INFO.representative}</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#B59A68] uppercase block mb-1">CONTACT / TEL</span>
            <a href={`tel:${KDMCA_INFO.tel}`} className="text-[#FAF9F6] hover:text-white transition-colors">
              {KDMCA_INFO.tel}
            </a>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#B59A68] uppercase block mb-1">EMAIL INQUIRY</span>
            <a href={`mailto:${KDMCA_INFO.email}`} className="text-[#FAF9F6] hover:text-white transition-colors underline underline-offset-4">
              {KDMCA_INFO.email}
            </a>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#B59A68] uppercase block mb-1">LOCATION</span>
            <span className="text-[#FAF9F6] leading-relaxed block">{KDMCA_INFO.address}</span>
          </div>
        </div>

        {/* 하단 카피라이트 및 정책 링크 */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p className="font-mono text-[11px]">
            Copyright © {KDMCA_INFO.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-xs">
            <Link
              href="/privacy"
              className="text-[#FAF9F6] hover:text-[#B59A68] transition-colors underline underline-offset-4"
            >
              개인정보처리방침
            </Link>
            <span className="text-[#233B5D]">|</span>
            <Link
              href="/terms"
              className="hover:text-[#FAF9F6] transition-colors"
            >
              서비스 이용약관
            </Link>
            <span className="text-[#233B5D]">|</span>
            <Link
              href="/"
              className="hover:text-[#FAF9F6] transition-colors"
            >
              자명스쿨 메인
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
