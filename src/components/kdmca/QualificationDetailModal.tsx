'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { Qualification } from "@/data/kdmcaData";
import { X, Award, ShieldAlert, CheckCircle2 } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-300 tracking-wider">
                등록 민간자격 상세정보
              </span>
              <h3 id="modal-title" className="text-lg font-bold text-white tracking-tight">
                {qualification.name}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 바디 (스크롤 영역) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
          {/* 기본 자격 명세 테이블 */}
          <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50/50">
            <table className="w-full text-sm text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-700 bg-slate-100/80 w-1/3 text-xs sm:text-sm">
                    자격명
                  </th>
                  <td className="px-4 py-3 font-bold text-slate-900 text-xs sm:text-sm">
                    {qualification.name}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-700 bg-slate-100/80 text-xs sm:text-sm">
                    등록번호
                  </th>
                  <td className="px-4 py-3 font-mono font-semibold text-slate-900 text-xs sm:text-sm">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {qualification.registrationNumber}
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-700 bg-slate-100/80 text-xs sm:text-sm">
                    자격의 종류
                  </th>
                  <td className="px-4 py-3 text-slate-800 text-xs sm:text-sm">
                    {qualification.type}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-700 bg-slate-100/80 text-xs sm:text-sm">
                    자격발급기관
                  </th>
                  <td className="px-4 py-3 font-medium text-slate-800 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <span>{qualification.issuer}</span>
                      <Image
                        src="/images/kdmca/kdmca-seal.png"
                        alt="한국디지털마인드코칭협회 직인"
                        width={28}
                        height={28}
                        className="inline-block rounded-xs shadow-2xs border border-red-600/30"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-700 bg-slate-100/80 text-xs sm:text-sm align-top">
                    자격검정 및 수료기준
                  </th>
                  <td className="px-4 py-3 text-slate-800 text-xs sm:text-sm leading-relaxed">
                    {qualification.completionCriteria}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 자격 상세 정보 (역할 및 교육 목표) */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-700" />
              자격 상세 정보 및 역할
            </h4>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed">
              {qualification.description}
            </div>
          </div>

          {/* 자격 관리 안내 (취소 및 제한 기준) */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              자격 관리 안내 (취소 및 사용 제한 기준)
            </h4>
            <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
              <p className="font-medium text-slate-800">
                한국디지털마인드코칭협회는 자격의 신뢰성과 전문성을 위해 다음 사항에 해당하는 경우 자격을 취소하거나 자격증 사용을 제한할 수 있습니다.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                {qualification.managementPolicy.map((policy, idx) => (
                  <li key={idx}>{policy}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 발급기관 공식 직인 인증란 */}
          <div className="pt-3 flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">자격 관리·발급기관</span>
              <span className="text-sm font-bold text-slate-900">한국디지털마인드코칭협회</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">[협회직인]</span>
              <Image
                src="/images/kdmca/kdmca-seal.png"
                alt="한국디지털마인드코칭협회 직인"
                width={48}
                height={48}
                className="rounded-xs shadow-xs border border-red-600/40"
              />
            </div>
          </div>
        </div>

        {/* 푸터 버튼 */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
