'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParallaxDepth({ children, speed = 0.15, className = '' }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (windowH + rect.height);
      setOffset((progress - 0.5) * speed * 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`parallax-depth ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
