'use client';

import { useEffect, useRef, useState } from 'react';

export default function SVGPathReveal({ paths, viewBox = '0 0 80 80', className = '' }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={`svg-path-reveal ${revealed ? 'svg-path-revealed' : ''} ${className}`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="2"
          className="svg-draw-path"
          style={{ animationDelay: revealed ? `${i * 0.3}s` : '0s' }}
        />
      ))}
    </svg>
  );
}
