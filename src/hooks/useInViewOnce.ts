'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

export function useInViewOnce(
    options: IntersectionObserverInit = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
    }
): [RefObject<HTMLDivElement | null>, boolean] {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Disconnect after first intersection to trigger animation only once
                if (ref.current) observer.unobserve(ref.current);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isInView];
}
