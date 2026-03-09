'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import HeroCosmicFX from './HeroCosmicFX';
import OrbitMark from './OrbitMark';
import ConstellationFX from './ConstellationFX';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS variables for high-performance positioning
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);

      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // 배경 오버레이 및 텍스쳐 (이미지 제거)
  const bg = 'linear-gradient(rgba(5,5,7,0.85) 0%, rgba(5,5,7,0.95) 100%)';

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 md:px-6 pt-0 pb-20 lg:pb-32 overflow-hidden bg-trueBlack min-h-[90vh] flex items-center"
    >
      {/* Background Layer */}
      {/* Background Layer: Transparent to show global CosmicBackground */}
      <div
        className="absolute inset-0 opacity-100 transition-opacity duration-1000"
        style={{ background: 'transparent' }}
      />

      {/* Dynamic Cosmic FX */}
      <HeroCosmicFX mousePos={mousePos} isHovered={isHovered} />
      <ConstellationFX />

      {/* Layer B: Golden Core Glow - Standardized on Pure Black (#000000) */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{ background: 'radial-gradient(900px circle at 50% 40%, rgba(184,155,106,0.12), transparent 60%)' }}
      />

      {/* Golden Light Follow Effect - Slightly subtler */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 z-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(650px circle at var(--mouse-x) var(--mouse-y), rgba(184, 155, 106, 0.08), transparent 80%)`
        } as React.CSSProperties}
      />

      {/* Intense Golden Orb - Softened */}
      <div
        className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 z-0`}
        style={{
          left: 'var(--mouse-x)',
          top: 'var(--mouse-y)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(184, 155, 106, 0.12) 0%, rgba(138, 106, 63, 0.03) 50%, transparent 100%)',
          opacity: isHovered ? 1 : 0,
        } as React.CSSProperties}
      />

      {/* Hero Content Grid - 2 Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-40 pb-24">

        {/* Left: Text Content */}
        <div className="text-left space-y-10 py-12 lg:py-0">
          <div className="space-y-6">
            <h1 className="font-semibold tracking-tight text-white leading-[1.3]">
              <span className="block text-4xl md:text-5xl lg:text-[3.2rem] mb-8 text-white opacity-100 whitespace-nowrap">스스로 빛나는 나만의 가치</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-[#FFFBD1] via-[#E7C07E] via-[#D4AF37] to-[#8A6A3F] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                자명스쿨
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl">
              AI와 마음공부를 융합하여 나만의 세계를 정렬하고<br />
              삶의 좌표를 다시 설계합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-2">
            <button className="group relative overflow-visible rounded-xl h-14 px-8 text-base font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px] active:scale-95">
              {/* External Aura Glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl"
                style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.5), transparent 60%)' }}
              />
              {/* Sharp Ring Highlight */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-2 ring-[#D6C6A8]/40"
              />
              <span className="relative z-10 text-[#0B0B10]">나에게 맞는 강의 찾기</span>
            </button>

            <button className="group relative overflow-visible rounded-xl h-14 px-8 text-base font-bold bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-xl transition-all duration-300 ease-out transform-gpu hover:bg-white/10 hover:-translate-y-[2px] active:scale-95">
              <span className="relative z-10 text-white/90 group-hover:text-white transition-colors">커리큘럼 보기</span>
            </button>
          </div>
        </div>

        {/* Right: Golden Symbol Visual */}
        <div className="hidden lg:flex items-center justify-center relative scale-110 xl:scale-125 translate-x-12">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Background Glow - Offset slightly further right than symbol (Radius Reduced) */}
            <div
              className="absolute inset-0 translate-x-16 rounded-full opacity-45 blur-[110px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, rgba(184, 155, 106, 0.04) 45%, transparent 70%)'
              }}
            />
            <OrbitMark className="w-full h-full relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
