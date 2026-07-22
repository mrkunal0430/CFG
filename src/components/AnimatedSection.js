'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.15,
  className = '',
  tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('animate-visible');
            element.classList.remove('animate-hidden');
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const directionMap = {
    up: undefined,
    left: 'left',
    right: 'right',
    scale: 'scale',
  };

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`animate-hidden ${className}`}
      data-direction={directionMap[direction]}
    >
      {children}
    </Tag>
  );
}
