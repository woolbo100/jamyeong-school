'use client';

import React, { useState } from "react";
import { FAQS } from "@/data/emotionalPublishingCourseData";

// FAQ 아코디언 컴포넌트
export function EmotionalPublishingFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-[#161413] border-[#B89B6A]/40 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                : "bg-[#12100E] border-white/10 hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#B89B6A] uppercase tracking-wider shrink-0">
                  Q{idx + 1}.
                </span>
                <span className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                  {faq.question}
                </span>
              </div>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs border transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 border-[#B89B6A] text-[#B89B6A]"
                    : "border-white/20 text-white/50"
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light break-keep border-t border-white/5 pt-4">
                <p className="pl-6 border-l-2 border-[#B89B6A]/50">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

