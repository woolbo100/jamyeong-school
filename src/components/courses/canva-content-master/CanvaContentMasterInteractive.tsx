'use client';

import React, { useState } from "react";
import { FAQS } from "@/data/canvaContentMasterCourseData";

export function CanvaContentMasterFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-[#141210] overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors gap-4"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#B89B6A]">
                  Q{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                  {faq.question}
                </span>
              </div>
              <span
                className={`text-[#B89B6A] text-lg font-light shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-white/5 break-keep">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

