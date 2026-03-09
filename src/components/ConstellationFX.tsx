"use client"

import React, { useEffect, useRef } from 'react';

const ConstellationFX = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: 0, y: 0, radius: 180 }; // Increased mouse interaction radius

        const resize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseSize: number;

            constructor() {
                // Non-null assertion for canvas as it's captured in closure and checked at top
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                // Extremely slow drift speed
                this.vx = (Math.random() - 0.5) * 0.18;
                this.vy = (Math.random() - 0.5) * 0.18;
                this.baseSize = Math.random() * 2 + 0.8; // Increased base size (0.8 ~ 2.8)
                this.size = this.baseSize;
            }

            update() {
                if (!canvas) return;
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction: Repulsion
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    // Move away from mouse
                    this.x -= Math.cos(angle) * force * 1.5;
                    this.y -= Math.sin(angle) * force * 1.5;
                    this.size = this.baseSize * 1.4;
                } else {
                    this.size = this.baseSize;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(214, 198, 168, 0.6)'; // Increased node opacity
                ctx.fill();
            }
        }

        const init = () => {
            if (!canvas) return;
            // Increased density (reduced area per particle)
            const particleCount = Math.floor((canvas.width * canvas.height) / 9000);
            particles = [];
            for (let i = 0; i < Math.min(particleCount, 200); i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            if (!ctx) return;
            const maxDistance = 170; // Increased connection distance

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        // Lines near mouse are slightly more opaque
                        const mouseDist1 = Math.sqrt(Math.pow(mouse.x - particles[i].x, 2) + Math.pow(mouse.y - particles[i].y, 2));
                        const mouseDist2 = Math.sqrt(Math.pow(mouse.x - particles[j].x, 2) + Math.pow(mouse.y - particles[j].y, 2));
                        const isNearMouse = mouseDist1 < mouse.radius || mouseDist2 < mouse.radius;

                        // Increased overall line opacity
                        const opacity = (1 - distance / maxDistance) * (isNearMouse ? 0.45 : 0.22);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(214, 198, 168, ${opacity})`;
                        ctx.lineWidth = 0.6; // Slightly thicker lines
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 opacity-85" // Increased overall container opacity
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default ConstellationFX;
