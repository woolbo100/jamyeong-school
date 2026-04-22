import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FiveElementsSection() {
  const elements = [
    {
      icon: "/images/icon/earth.png",
      title: "마음을 심다",
      subtitle: "나를 이해하고 콘텐츠 방향을 찾는 과정",
      desc: "콘텐츠 주제, 브랜드 방향 확립",
      gradient: "from-earth/50 to-transparent",
      hoverColor: "group-hover:text-[#4ADE80]",
      link: "/courses/earth"
    },
    {
      icon: "/images/icon/fire.png",
      title: "마음을 그리다",
      subtitle: "감정을 작품으로 만들고 브랜드를 시작하는 과정",
      desc: "아트 이미지, 영상, 굿즈 제작",
      gradient: "from-fire/50 to-transparent",
      hoverColor: "group-hover:text-[#F87171]",
      link: "/courses/fire"
    },
    {
      icon: "/images/icon/air.png",
      title: "마음을 나누다",
      subtitle: "내 경험을 강의와 콘텐츠로 바꾸는 과정",
      desc: "SNS 콘텐츠, 미니 강의 제작",
      gradient: "from-air/50 to-transparent",
      hoverColor: "group-hover:text-[#60A5FA]",
      link: "/courses/air"
    },
    {
      icon: "/images/icon/water.png",
      title: "마음을 채우다",
      subtitle: "콘텐츠를 수익 구조로 만드는 과정",
      desc: "디지털 상품, 자동화 수익",
      gradient: "from-water/50 to-transparent",
      hoverColor: "group-hover:text-[#38BDF8]",
      link: "/courses/water"
    },
    {
      icon: "/images/icon/ether.png",
      title: "마음을 빛내다",
      subtitle: "강사·브랜드로 확장하는 리더 과정",
      desc: "강사활동, 리더쉽, 풍요마인드",
      gradient: "from-ether/50 to-transparent",
      hoverColor: "group-hover:text-[#C084FC]",
      link: "/courses/abundance"
    },
  ];

  return (
    <section className="pt-24 pb-12 px-6 text-white relative overflow-hidden">
      {/* 타이틀 (글자 크기 추가 확대 및 깨짐 방지) */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-display mb-4 tracking-tighter uppercase italic leading-tight">
            자명스쿨은 <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#B89B6A] to-[#9E7C47] bg-clip-text text-transparent px-1">5단계 성장 시스템</span>입니다
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            나를 이해하고, 표현하고, 수익으로 연결하는 흐름
          </p>
        </Reveal>
      </div>


      {/* 가로 폭을 하단 섹션과 맞추기 위해 내부 max-w 및 px 제거 */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {elements.map((el, idx) => (
            <Reveal key={idx} delayMs={idx * 100}>
              <Link
                href={el.link}
                className="group relative flex flex-col p-8 rounded-3xl bg-[#151513] border border-white/5 hover:border-[#B89B6A]/30 transition-all duration-500 hover:-translate-y-2 h-[380px] overflow-hidden"
              >
                {/* 배경 그라데이션 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${el.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* 숫자 배경 */}
                <div className="absolute top-4 right-6 text-6xl font-display text-white/[0.03] italic pointer-events-none group-hover:text-white/[0.06] transition-colors">
                  {idx + 1}
                </div>

                {/* 아이콘 (중앙 정렬 및 크기 확대) */}
                <div className="mb-10 flex justify-center">
                  <div className="relative w-14 h-14 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    <Image
                      src={el.icon}
                      alt={el.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* 텍스트 */}
                <div className="relative z-10 mb-4">
                  <h3 className={`text-xl font-bold mb-3 text-white transition-colors ${el.hoverColor}`}>{el.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{el.subtitle}</p>
                </div>

                {/* 결과 (Gold Emphasis - 크기 확대 및 2줄 유도) */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-[15px] font-bold tracking-tight text-[#B89B6A] leading-snug opacity-95 group-hover:opacity-100 transition-opacity max-w-[150px]">
                    {el.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
