'use client';

import { useEffect, useRef, useState } from 'react';

export default function TextReveal({ children, className = '', tag = 'p', delay = 0, staggerMs = 60 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');
  const Tag = tag;

  return (
    <Tag ref={ref} className={`text-reveal ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="text-reveal-word"
          style={{
            transitionDelay: visible ? `${i * staggerMs}ms` : '0ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(18px)',
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  );
}
