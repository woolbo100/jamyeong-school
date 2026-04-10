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
        let mouse = { x: -2000, y: -2000, radius: 150 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseSize: number;
            alpha: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                // Extremely slow drift speed for premium feel
                this.vx = (Math.random() - 0.5) * 0.15;
                this.vy = (Math.random() - 0.5) * 0.15;
                this.baseSize = Math.random() * 1.5 + 0.8;
                this.size = this.baseSize;
                this.alpha = Math.random() * 0.5 + 0.3; // Increased visibility
            }

            update(w: number, h: number) {
                this.x += this.vx;
                this.y += this.vy;

                // Screen wrapping
                if (this.x < -20) this.x = w + 20;
                if (this.x > w + 20) this.x = -20;
                if (this.y < -20) this.y = h + 20;
                if (this.y > h + 20) this.y = -20;

                // Mouse interaction: Subtle repulsion/scaling
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 1.2;
                    this.y -= Math.sin(angle) * force * 1.2;
                    this.size = this.baseSize * 1.3;
                } else {
                    this.size = this.baseSize;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(214, 198, 168, ${this.alpha})`;
                ctx.fill();
            }
        }

        const drawLines = () => {
            if (!ctx) return;
            const maxDistance = 150;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.25;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(214, 198, 168, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const init = () => {
            const container = canvas.parentElement;
            if (!container) return;

            const w = container.clientWidth;
            const h = container.clientHeight;
            
            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.scale(dpr, dpr);
            
            // Adjusted density for constellation effect
            const count = Math.floor((w * h) / 15000);
            const clampedCount = w < 768 ? Math.min(count, 20) : Math.min(count, 45);
            
            particles = [];
            for (let i = 0; i < clampedCount; i++) {
                particles.push(new Particle(w, h));
            }
        };

        const animate = () => {
            if (!ctx) return;
            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);
            
            ctx.clearRect(0, 0, w, h);
            
            particles.forEach(p => {
                p.update(w, h);
                p.draw();
            });
            drawLines();
            
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
            className="absolute inset-0 z-0 pointer-events-none opacity-70 select-none" 
            aria-hidden="true"
        />
    );
};

export default HeroParticles;
