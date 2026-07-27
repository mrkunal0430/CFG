'use client';

import { useEffect, useRef } from 'react';

export default function MouseGridBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.parentElement.addEventListener('mousemove', handleMouse);

    const spacing = 30;
    const baseRadius = 1.2;
    const influenceRadius = 180;

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.floor(w / spacing);
      const rows = Math.floor(h / spacing);
      const { x: mx, y: my } = mouseRef.current;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + spacing / 2;
          const y = row * spacing + spacing / 2;
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const influence = Math.max(0, 1 - dist / influenceRadius);
          const radius = baseRadius + influence * 3.5;
          const alpha = 0.08 + influence * 0.6;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 230, 74, ${alpha})`;
          ctx.fill();

          if (influence > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, radius + 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 230, 74, ${influence * 0.08})`;
            ctx.fill();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouse);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
