"use client";

import React, { useEffect, useRef } from 'react';

/**
 * HeroParticles Component
 * 
 * Provides a high-end, subtle canvas-based particle background.
 * Optimized for performance with requestAnimationFrame and cleanup.
 */
const HeroParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -2000, y: -2000 };

        class Particle {
            x: number;
            y: number;
            originX: number;
            originY: number;
            vx: number;
            vy: number;
            size: number;
            alpha: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.originX = this.x;
                this.originY = this.y;
                // Very slow natural float
                this.vx = (Math.random() - 0.5) * 0.15;
                this.vy = (Math.random() - 0.5) * 0.15;
                // Small size for "premium" feel
                this.size = Math.random() * 1.2 + 0.6;
                this.alpha = Math.random() * 0.4 + 0.15;
            }

            update(w: number, h: number) {
                // 1. Natural floating movement
                this.originX += this.vx;
                this.originY += this.vy;

                // Screen wrapping
                if (this.originX < -20) this.originX = w + 20;
                if (this.originX > w + 20) this.originX = -20;
                if (this.originY < -20) this.originY = h + 20;
                if (this.originY > h + 20) this.originY = -20;

                // 2. Mouse Interaction (Subtle follow/avoid)
                const dx = mouse.x - this.originX;
                const dy = mouse.y - this.originY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                let targetX = this.originX;
                let targetY = this.originY;

                // Particles react within 200px
                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    // Move slightly towards/away (strength: 0.05)
                    // Restricting peak displacement to ~8px as requested
                    targetX -= dx * force * 0.05;
                    targetY -= dy * force * 0.05;
                }

                // 3. Smooth Easing (Lerp) to target position
                // This ensures natural return when mouse moves away
                this.x += (targetX - this.x) * 0.08;
                this.y += (targetY - this.y) * 0.08;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                // Champagne Gold: D6C6A8
                ctx.fillStyle = `rgba(214, 198, 168, ${this.alpha})`;
                ctx.fill();
            }
        }

        const init = () => {
            const container = canvas.parentElement;
            if (!container) return;

            const w = container.clientWidth;
            const h = container.clientHeight;
            
            // Set canvas size with dpr check for sharpness
            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.scale(dpr, dpr);
            
            // Desktop: 35 particles, Mobile: 15 particles
            const count = w < 768 ? 15 : 35;
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(w, h));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.update(canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
                p.draw();
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            init();
        };

        init();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-0 pointer-events-none opacity-50 select-none grayscale-[0.2]" 
            aria-hidden="true"
        />
    );
};

export default HeroParticles;
