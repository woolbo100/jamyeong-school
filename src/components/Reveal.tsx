'use client';

import React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delayMs?: number;
    slideFrom?: 'bottom' | 'right' | 'top' | 'left';
}

export default function Reveal({ children, className = '', delayMs = 0, slideFrom = 'bottom' }: RevealProps) {
    const [ref, isInView] = useInViewOnce();

    const getInitialTransform = () => {
        switch (slideFrom) {
            case 'right': return 'translate-x-6';
            case 'left': return '-translate-x-6';
            case 'top': return '-translate-y-6';
            case 'bottom':
            default: return 'translate-y-6';
        }
    };

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delayMs}ms` }}
            className={`transition-all duration-[900ms] ease-premium transform-gpu 
        ${isInView
                    ? 'opacity-100 translate-y-0 translate-x-0 blur-0'
                    : `opacity-0 ${getInitialTransform()} blur-[6px]`} 
        ${className}`}
        >
            {children}
        </div>
    );
}
