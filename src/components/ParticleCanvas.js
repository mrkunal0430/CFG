'use client';

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulseSpeed = Math.random() * 0.015 + 0.003;
        this.pulseOffset = Math.random() * Math.PI * 2;
        // Lime accent particles have ~15% chance
        this.isAccent = Math.random() < 0.15;
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulse opacity
        this.currentOpacity =
          this.opacity * (0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulseOffset));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        if (this.isAccent) {
          ctx.fillStyle = `rgba(200, 230, 74, ${this.currentOpacity})`;
        } else {
          ctx.fillStyle = `rgba(180, 200, 170, ${this.currentOpacity * 0.4})`;
        }

        ctx.fill();

        // Glow for accent particles
        if (this.isAccent && this.size > 1) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 230, 74, ${this.currentOpacity * 0.06})`;
          ctx.fill();
        }
      }
    }

    // Create particles — fewer for subtle star-field effect
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Update and draw particles
      particles.forEach((p) => {
        p.update(time);
        p.draw();
      });

      // Draw subtle connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.06;
            const isAccentLine = particles[i].isAccent || particles[j].isAccent;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isAccentLine
              ? `rgba(200, 230, 74, ${opacity})`
              : `rgba(180, 200, 170, ${opacity * 0.4})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
