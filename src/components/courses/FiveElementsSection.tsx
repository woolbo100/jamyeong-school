import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FiveElementsSection() {
  const elements = [
    {
      icon: "/images/icons/earth.png",
      title: "마음을 심다",
      subtitle: "나를 이해하고 콘텐츠 방향을 찾는 과정",
      desc: "콘텐츠 주제, 브랜드 방향 확립",
      gradient: "from-earth/50 to-transparent",
      link: "/courses/earth"
    },
    {
      icon: "/images/icons/fire.png",
      title: "마음을 그리다",
      subtitle: "감정을 작품으로 만들고 브랜드를 시작하는 과정",
      desc: "아트 이미지, 영상, 굿즈 제작",
      gradient: "from-fire/50 to-transparent",
      link: "/courses/fire"
    },
    {
      icon: "/images/icons/air.png",
      title: "마음을 나누다",
      subtitle: "내 경험을 강의와 콘텐츠로 바꾸는 과정",
      desc: "SNS 콘텐츠, 미니 강의 제작",
      gradient: "from-air/50 to-transparent",
      link: "/courses/air"
    },
    {
      icon: "/images/icons/water.png",
      title: "마음을 채우다",
      subtitle: "콘텐츠를 수익 구조로 만드는 과정",
      desc: "디지털 상품, 자동화 수익",
      gradient: "from-water/50 to-transparent",
      link: "/courses/water"
    },
    {
      icon: "/images/icons/ether.png",
      title: "마음을 빛내다",
      subtitle: "강사·브랜드로 확장하는 리더 과정",
      desc: "강사 활동, 브랜드 확장",
      gradient: "from-ether/50 to-transparent",
      link: "/courses/abundance"
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
      {/* 타이틀 */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display mb-6 tracking-tight uppercase italic">
            자명스쿨은 <span className="bg-gradient-to-r from-[#D4AF37] to-[#B89B6A] bg-clip-text text-transparent">5단계 성장 시스템</span>입니다
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            나를 이해하고, 표현하고, 수익으로 연결하는 흐름
          </p>
        </Reveal>
      </div>

      {/* 카드 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {elements.map((el, idx) => (
          <Reveal key={idx} delayMs={idx * 150}>
            <Link href={el.link} className="block h-full">
              <div
                className="group relative bg-[#14161A] border border-white/5 rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Gradient Left Border Emphasis */}
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b ${el.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Step Number Background */}
                <div className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-display italic select-none group-hover:text-white/[0.05] transition-colors duration-500">
                  {idx + 1}
                </div>

                {/* 아이콘 */}
                <div className="relative w-14 h-14 mb-8 group-hover:scale-110 transition-transform duration-700 ease-premium">
                  <Image src={el.icon} alt={el.title} fill className="object-contain" />
                </div>

                {/* 타이틀 */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {el.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light">
                  {el.subtitle}
                </p>

                {/* 결과 (Gold Emphasis) */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {el.desc}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* 하단 메시지 */}
      <Reveal delayMs={1000}>
        <div className="text-center mt-20">
          <p className="text-gray-500 font-light italic tracking-widest text-sm">
            당신은 지금 어느 단계에 있나요?
          </p>
          <div className="mt-4 w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto"></div>
        </div>
      </Reveal>
    </section>
  );
}
