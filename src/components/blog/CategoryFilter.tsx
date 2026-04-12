"use client";

import { blogCategories } from "@/constants/blog";

type Props = {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {/* "전체" 필터 */}
      <button
        onClick={() => onChange("전체")}
        className={`rounded-full px-5 py-2 text-sm transition-all duration-300 border ${
          selected === "전체"
            ? "border-antique-gold bg-antique-gold/10 text-champagne-gold shadow-[0_0_15px_rgba(184,155,106,0.2)]"
            : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
        }`}
      >
        전체
      </button>

      {blogCategories.map((cat) => {
        const active = selected === cat.slug;

        return (
          <button
            key={cat.slug}
            onClick={() => onChange(cat.slug)}
            className={`rounded-full px-5 py-2 text-sm transition-all duration-300 border ${
              active
                ? `border-[var(--color-${cat.slug})] bg-[var(--color-${cat.slug})]/10 text-[var(--color-${cat.slug})] shadow-[0_0_15px_rgba(0,0,0,0.3)]`
                : `border-white/10 bg-white/5 text-white/50 hover:text-white hover-glow-${cat.slug}`
            }`}
            style={active ? { borderColor: cat.color, color: cat.color } : {}}
            title={cat.description}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
