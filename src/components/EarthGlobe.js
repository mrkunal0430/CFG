'use client';

import { useRef, useEffect } from 'react';

export default function EarthGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    // Parallax effect: Earth moves slightly on scroll for depth
    const handleScroll = () => {
      if (!globeRef.current) return;
      const scrollY = window.scrollY;
      const shift = scrollY * 0.08;
      globeRef.current.style.transform = `translateY(${shift}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="absolute -bottom-[100%] right-[-40%] w-[130%] max-w-[1600px] aspect-square pointer-events-none z-[1] max-[1024px]:-bottom-[40%] max-[1024px]:right-[-15%] max-[1024px]:w-[150%] max-[768px]:-bottom-[25%] max-[768px]:right-[-20%] max-[768px]:w-[170%] max-[480px]:-bottom-[35%] max-[480px]:right-[-40%] max-[480px]:w-[140%] max-[380px]:-bottom-[42%] max-[380px]:right-[-45%] max-[380px]:w-[130%]"
      ref={globeRef}
    >
      {/* Sunrise/horizon glow — positioned to match the sunrise at upper-left of the globe curve */}
      <div
        className="absolute -top-[14%] left-[30%] -translate-x-1/2 w-[80%] h-[35%] blur-[40px] pointer-events-none animate-[glowPulse_8s_ease-in-out_infinite] bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(255,200,100,0.3)_0%,rgba(212,168,67,0.15)_25%,rgba(200,180,80,0.05)_50%,transparent_80%)]"
        aria-hidden="true"
      />
      {/* Bright sunrise hotspot */}
      <div
        className="absolute -top-[5%] left-[38%] -translate-x-1/2 w-[25%] h-[14%] blur-[12px] pointer-events-none animate-[glowPulse_5s_ease-in-out_infinite_1.5s] bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(255,240,180,0.55)_0%,rgba(255,200,100,0.3)_30%,rgba(212,168,67,0.1)_60%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* The rotating Earth sphere — edges feathered to blend with bg */}
      <div className="relative w-full h-full rounded-full [mask-image:radial-gradient(circle_at_center,white_55%,transparent_72%)] [-webkit-mask-image:radial-gradient(circle_at_center,white_55%,transparent_72%)]">
        <div className="absolute -inset-[5%] w-[110%] h-[110%] rounded-full bg-[url('/images/earth.png')] bg-cover [background-position:center_30%] animate-[earthRotate_120s_linear_infinite] will-change-transform" />
      </div>
    </div>
  );
}
