"use client";

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
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active
                ? "border border-amber-300/40 bg-amber-300/10 text-amber-200"
                : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
