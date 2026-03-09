'use client';

import React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delayMs?: number;
}

export default function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
    const [ref, isInView] = useInViewOnce();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delayMs}ms` }}
            className={`transition-all duration-700 ease-out transform-gpu 
        ${isInView
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-4 blur-[1px]'} 
        ${className}`}
        >
            {children}
        </div>
    );
}
