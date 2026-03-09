"use client"

import React, { useMemo } from 'react';

type Props = {
    mousePos?: { x: number; y: number };
    isHovered?: boolean;
};

const HeroCosmicFX = ({ mousePos = { x: 0, y: 0 }, isHovered = false }: Props) => {
    // Calculate parallax offsets
    const parallaxX = isHovered ? (mousePos.x - 500) * 0.012 : 0;
    const parallaxY = isHovered ? (mousePos.y - 500) * 0.012 : 0;

    // Generate Milky Way Stars (Layer C - High Density)
    // useMemo to prevent re-generating on every cursor move
    const milkyWayStars = useMemo(() => {
        return [...Array(220)].map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.1,
            delay: `${Math.random() * 8}s`,
            duration: `${4 + Math.random() * 5}s`,
            color: Math.random() > 0.4 ? '#D6C6A8' : '#B89B6A',
            parallaxFactor: 0.8 + Math.random() * 1.5, // Different depth for each star
        }));
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
            {/* Layer 0: Deep Texture Layer */}
            <div
                className="absolute inset-[-10%] w-[120%] h-[120%] opacity-[0.08] transition-transform duration-700 ease-out"
                style={{
                    backgroundImage: 'url("/images/nebula-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
                }}
            />

            {/* Layer D: Galactic Glow (Soft blurry clusters along a diagonal) */}
            <div
                className="absolute inset-0 opacity-[0.15] transition-transform duration-1000 ease-out"
                style={{
                    background: `
            radial-gradient(circle at 40% 40%, rgba(214, 198, 168, 0.2), transparent 40%),
            radial-gradient(circle at 60% 60%, rgba(184, 155, 106, 0.15), transparent 45%),
            radial-gradient(circle at 30% 70%, rgba(138, 106, 63, 0.1), transparent 50%)
          `,
                    transform: `translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)`,
                    filter: 'blur(60px)',
                }}
            />

            {/* Layer A: Nebula Blobs (Drifting) */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] animate-nebula opacity-[0.12] transition-transform duration-1000 ease-out"
                style={{
                    background: 'radial-gradient(circle at 35% 25%, rgba(184, 155, 106, 0.1), transparent 40%), radial-gradient(circle at 65% 75%, rgba(138, 106, 63, 0.08), transparent 45%)',
                    transform: `translate(${parallaxX}px, ${parallaxY}px)`,
                }}
            />

            {/* Layer C: Milky Way Cluster (Dense Golden Stars) */}
            <div className="absolute inset-[-5%] w-[110%] h-[110%] transition-transform duration-300 ease-out">
                {milkyWayStars.map((star) => (
                    <div
                        key={`mw-star-${star.id}`}
                        className="absolute rounded-full animate-twinkle transform-gpu"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            backgroundColor: star.color,
                            opacity: star.opacity,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                            transform: `translate(${parallaxX * star.parallaxFactor}px, ${parallaxY * star.parallaxFactor}px)`,
                            boxShadow: star.size > 1.8 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
                        }}
                    />
                ))}
            </div>

            {/* Layer B: Foreground Bright Stars (Few & Sharp) */}
            <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                    transform: `translate(${parallaxX * 2.2}px, ${parallaxY * 2.2}px)`,
                }}
            >
                {[...Array(25)].map((_, i) => (
                    <div
                        key={`bright-${i}`}
                        className="absolute w-[2px] h-[2px] rounded-full bg-white animate-twinkle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.3,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCosmicFX;
