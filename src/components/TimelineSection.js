'use client';

import { useEffect, useRef, useState } from 'react';

export default function TimelineSection({ timeline }) {
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!track || !progress) return;

    const handleScroll = () => {
      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const trackTop = rect.top;
      const trackHeight = rect.height;

      // Calculate how far through the timeline we've scrolled
      const start = windowHeight * 0.5;
      const scrolled = start - trackTop;
      const percent = Math.max(0, Math.min(100, (scrolled / trackHeight) * 100));

      progress.style.height = `${percent}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative max-w-[1000px] mx-auto z-[1] pl-10 max-[480px]:pl-[30px]"
      ref={trackRef}
    >
      <div
        className="absolute left-10 top-0 bottom-0 w-0.5 z-0 bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.15)_10%,rgba(201,168,76,0.3)_50%,rgba(201,168,76,0.15)_90%,transparent)] max-[768px]:left-0 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute left-10 top-0 bottom-0 w-1.5 z-0 blur-[4px] bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.05)_20%,rgba(201,168,76,0.1)_50%,rgba(201,168,76,0.05)_80%,transparent)] max-[768px]:left-0 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <div
        ref={progressRef}
        className="absolute left-10 top-0 w-0.5 h-0 z-[1] rounded-b-full [transition:height_0.1s_linear] bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] shadow-[0_0_10px_rgba(201,168,76,0.3)] max-[768px]:left-0 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />

      {timeline.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <TimelineItem
            key={item.year}
            item={item}
            isLeft={isLeft}
            delay={index * 120}
          />
        );
      })}
    </div>
  );
}

function TimelineItem({ item, isLeft, delay }) {
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
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group grid gap-0 items-center mb-3xl last:mb-0 relative max-[768px]:grid-cols-1 max-[768px]:mb-2xl md:grid-cols-[1fr_80px_1fr] max-[1024px]:md:grid-cols-[1fr_60px_1fr]`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : `translateY(40px)`,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <div
        className={`bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-xl px-2xl transition-all duration-350 ease-out relative overflow-hidden group-hover:border-warm-gold/30 group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.1)] group-hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] before:scale-x-0 before:transition-transform before:duration-400 before:ease-out group-hover:before:scale-x-100 max-[768px]:col-start-1 max-[768px]:row-start-1 max-[768px]:text-left ${
          isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-3 md:text-left'
        }`}
      >
        <span className="text-3xl font-extrabold bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent inline-block mb-xs">{item.year}</span>
        <h3 className="text-lg font-semibold text-text-primary mb-sm">{item.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
      </div>

      <div
        className={`flex justify-center items-center relative z-[3] max-[768px]:absolute max-[768px]:left-[-40px] max-[480px]:left-[-30px] max-[768px]:col-start-1 max-[768px]:row-start-1 ${
          isLeft ? 'md:col-start-2' : 'md:col-start-2'
        }`}
      >
        <div className="w-5 h-5 max-[480px]:w-3.5 max-[480px]:h-3.5 rounded-full bg-bg-primary border-[3px] border-warm-gold/40 relative transition-all duration-350 ease-out z-[3] group-hover:border-warm-gold group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-warm-gold before:opacity-60 before:transition-all before:duration-350 before:ease-out group-hover:before:opacity-100 after:content-[''] after:absolute after:-inset-1.5 after:rounded-full after:border after:border-warm-gold/15 after:transition-all after:duration-350 after:ease-out group-hover:after:-inset-2.5 group-hover:after:border-warm-gold/25" />
      </div>

      <div className={`max-[768px]:hidden ${isLeft ? 'md:col-start-3' : 'md:col-start-1'}`} />
    </div>
  );
}
