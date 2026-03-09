"use client"

import React from "react";

type Props = {
    className?: string;
};

export default function OrbitMark({ className }: Props) {
    return (
        <div className={`${className} perspective-1000 relative flex items-center justify-center`}>
            {/* Background Layer: Multi-layered Golden Aura (Dimensional & Breathing Glow) */}
            <div className="absolute inset-0 translate-x-8 pointer-events-none animate-float-slow">
                {/* Outer soft aura - Radius Reduced */}
                <div
                    className="absolute inset-[-30%] rounded-full opacity-30 blur-[100px] animate-pulse-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(184, 155, 106, 0.18) 0%, rgba(138, 106, 63, 0.04) 55%, transparent 80%)',
                    }}
                />
                {/* Inner bright core aura - Radius Reduced */}
                <div
                    className="absolute inset-[-5%] rounded-full opacity-45 blur-[70px] animate-pulse-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(255, 245, 209, 0.2) 0%, rgba(212, 175, 55, 0.06) 45%, transparent 75%)',
                        animationDelay: '1s'
                    }}
                />
            </div>

            <div className="relative w-full h-full transform-style-3d">
                <svg
                    viewBox="0 0 256 256"
                    className="absolute inset-0 h-full w-full animate-orbit-3d-1"
                    role="img"
                    aria-label="Jamyeong orbital mark"
                >
                    <defs>
                        {/* Soft Metallic Gold Glow Filter */}
                        <filter id="goldGlowSubtle" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="2.2" result="blur" />
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 0.86 0 0 0 0 0 0.60 0 0 0 0 0 0.35 0" />
                            <feMerge>
                                <feMergeNode in="gold" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Subtler Metallic Gold Gradient */}
                        <linearGradient id="goldStrokeSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#B89B6A" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#D6C6A8" stopOpacity="0.75" />
                            <stop offset="100%" stopColor="#8A6A3F" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>

                    {/* Subtle Outer Decorative Ring */}
                    <circle
                        cx="128"
                        cy="128"
                        r="112"
                        fill="none"
                        stroke="url(#goldStrokeSubtle)"
                        strokeWidth="0.8"
                        strokeDasharray="4 16"
                        className="opacity-10"
                    />

                    <ellipse
                        cx="128"
                        cy="128"
                        rx="124"
                        ry="46"
                        fill="none"
                        stroke="url(#goldStrokeSubtle)"
                        strokeWidth="1.2"
                        filter="url(#goldGlowSubtle)"
                    />
                </svg>

                <svg
                    viewBox="0 0 256 256"
                    className="absolute inset-0 h-full w-full animate-orbit-3d-2"
                    role="img"
                >
                    <ellipse
                        cx="128"
                        cy="128"
                        rx="124"
                        ry="46"
                        fill="none"
                        stroke="url(#goldStrokeSubtle)"
                        strokeWidth="1.2"
                        filter="url(#goldGlowSubtle)"
                    />
                </svg>

                <svg
                    viewBox="0 0 256 256"
                    className="absolute inset-0 h-full w-full animate-orbit-3d-3"
                    role="img"
                >
                    <ellipse
                        cx="128"
                        cy="128"
                        rx="124"
                        ry="46"
                        fill="none"
                        stroke="url(#goldStrokeSubtle)"
                        strokeWidth="1.2"
                        filter="url(#goldGlowSubtle)"
                    />
                </svg>

                {/* Central Core Glow - Muted */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D6C6A8] shadow-[0_0_12px_rgba(214,198,168,0.6)] z-20 opacity-80" />
                </div>
            </div>
        </div>
    );
}
