'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { Qualification } from "@/data/kdmcaData";
import { X } from "lucide-react";

interface QualificationDetailModalProps {
  qualification: Qualification | null;
  onClose: () => void;
}

export default function QualificationDetailModal({
  qualification,
  onClose,
}: QualificationDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (qualification) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [qualification, onClose]);

  if (!qualification) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#14253D]/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-[#FAF9F6] w-full max-w-2xl border border-[#D5D3CC] shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 상단 헤더: 학술/규정집 스타일 */}
        <div className="px-7 py-6 bg-white border-b border-[#E7E5DF] flex items-start justify-between">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#B59A68] uppercase font-medium">
              REGISTRATION DETAILS — {qualification.registrationNumber}
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#14253D] tracking-tight mt-1">
              {qualification.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#14253D] p-1.5 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 본문 (스크롤) */}
        <div className="p-7 sm:p-9 overflow-y-auto space-y-7 text-[#20242A]">
          {/* 규정 표 (Table) */}
          <div className="border-t-2 border-[#14253D] border-b border-[#D5D3CC]">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <tbody>
                <tr className="border-b border-[#E7E5DF]">
                  <th scope="row" className="py-3.5 pr-4 font-semibold text-[#4B5563] w-1/3 bg-[#F4F3EE]/50 pl-3">
                    자격명
                  </th>
                  <td className="py-3.5 pl-4 font-bold text-[#14253D]">
                    {qualification.name}
                  </td>
                </tr>
                <tr className="border-b border-[#E7E5DF]">
                  <th scope="row" className="py-3.5 pr-4 font-semibold text-[#4B5563] bg-[#F4F3EE]/50 pl-3">
                    등록번호
                  </th>
                  <td className="py-3.5 pl-4 font-mono font-medium text-[#14253D]">
                    {qualification.registrationNumber}
                  </td>
                </tr>
                <tr className="border-b border-[#E7E5DF]">
                  <th scope="row" className="py-3.5 pr-4 font-semibold text-[#4B5563] bg-[#F4F3EE]/50 pl-3">
                    자격의 종류
                  </th>
                  <td className="py-3.5 pl-4 text-[#20242A]">
                    {qualification.type}
                  </td>
                </tr>
                <tr className="border-b border-[#E7E5DF]">
                  <th scope="row" className="py-3.5 pr-4 font-semibold text-[#4B5563] bg-[#F4F3EE]/50 pl-3">
                    자격발급기관
                  </th>
                  <td className="py-3.5 pl-4 text-[#20242A]">
                    {qualification.issuer}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-3.5 pr-4 font-semibold text-[#4B5563] bg-[#F4F3EE]/50 pl-3 align-top">
                    자격검정 및 수료기준
                  </th>
                  <td className="py-3.5 pl-4 text-[#20242A] leading-relaxed">
                    {qualification.completionCriteria}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 자격 상세 정보 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-wider text-[#B59A68] uppercase font-bold">
              01 — QUALIFICATION PROFILE
            </h4>
            <div className="text-xs sm:text-sm text-[#374151] leading-relaxed bg-white p-5 border border-[#E7E5DF]">
              {qualification.description}
            </div>
          </div>

          {/* 자격 관리 안내 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-wider text-[#B59A68] uppercase font-bold">
              02 — COMPLIANCE & MANAGEMENT
            </h4>
            <div className="text-xs sm:text-sm text-[#4B5563] leading-relaxed bg-white p-5 border border-[#E7E5DF] space-y-2.5">
              <p className="font-semibold text-[#14253D]">
                한국디지털마인드코칭협회는 자격의 공신력 유지를 위하여 다음 사항에 해당하는 경우 자격을 취소하거나 자격증 사용을 제한할 수 있습니다.
              </p>
              <ul className="space-y-1.5 pl-4 list-decimal text-xs text-[#6B7280]">
                {qualification.managementPolicy.map((policy, idx) => (
                  <li key={idx} className="pl-1 leading-normal">{policy}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 공식 직인 날인 확인 블록 */}
          <div className="pt-2 flex items-center justify-between p-4 bg-white border border-[#D5D3CC]">
            <div>
              <span className="text-[11px] text-[#6B7280] font-mono block">OFFICIAL ISSUING AUTHORITY</span>
              <span className="text-sm font-bold text-[#14253D]">한국디지털마인드코칭협회</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#6B7280] font-mono">[ OFFICIAL SEAL ]</span>
              <Image
                src="/images/kdmca/kdmca-seal.png"
                alt="한국디지털마인드코칭협회 직인"
                width={44}
                height={44}
                className="border border-[#D5D3CC]"
              />
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="px-7 py-4 bg-white border-t border-[#E7E5DF] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#14253D] hover:bg-[#1E3A5F] text-[#FAF9F6] text-xs font-medium tracking-wide transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
