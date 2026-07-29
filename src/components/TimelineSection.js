'use client';

import { useEffect, useRef, useState } from 'react';

export default function TimelineSection({ timeline }) {
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const dotRefs = useRef([]);
  const [crossedIndex, setCrossedIndex] = useState(-1);

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

      // The tip of the progress line, in viewport coordinates
      const lineTipY = trackTop + (percent / 100) * trackHeight;

      // Find how many dots the line has already reached (dot center <= line tip)
      let count = 0;
      for (let i = 0; i < dotRefs.current.length; i++) {
        const dotEl = dotRefs.current[i];
        if (!dotEl) continue;
        const dotRect = dotEl.getBoundingClientRect();
        const dotCenterY = dotRect.top + dotRect.height / 2;
        if (dotCenterY <= lineTipY) count = i + 1;
      }
      setCrossedIndex(count - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative max-w-[1000px] mx-auto z-[1] md:pl-0"
      ref={trackRef}
    >
      <div
        className="absolute left-10 top-0 bottom-0 w-0.5 z-0 bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.15)_10%,rgba(201,168,76,0.3)_50%,rgba(201,168,76,0.15)_90%,transparent)] max-[480px]:left-0 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute left-10 top-0 bottom-0 w-1.5 z-0 blur-[4px] bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.05)_20%,rgba(201,168,76,0.1)_50%,rgba(201,168,76,0.05)_80%,transparent)] max-[480px]:left-0 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <div
        ref={progressRef}
        className="absolute left-10 top-0 w-0.5 h-0 z-[1] rounded-b-full [transition:height_0.1s_linear] bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] shadow-[0_0_10px_rgba(201,168,76,0.3)] max-[480px]:left-0 md:left-1/2 md:-translate-x-1/2"
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
            crossed={index <= crossedIndex}
            dotRef={(el) => (dotRefs.current[index] = el)}
          />
        );
      })}
    </div>
  );
}

function TimelineItem({ item, isLeft, delay, crossed, dotRef }) {
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
      className="group grid grid-cols-1 gap-0 items-stretch mb-3xl last:mb-0 relative md:grid-cols-[1fr_80px_1fr] max-[1024px]:md:grid-cols-[1fr_60px_1fr]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : `translateY(40px)`,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <div
        className={`bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-xl px-2xl transition-all duration-350 ease-out relative overflow-hidden group-hover:border-warm-gold/30 group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.1)] group-hover:-translate-y-1 self-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] before:scale-x-0 before:transition-transform before:duration-400 before:ease-out group-hover:before:scale-x-100 max-[768px]:text-left max-[768px]:col-start-1 max-[768px]:row-start-1 max-[768px]:ml-[52px] max-[480px]:ml-9 ${
          isLeft ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-3 md:row-start-1 md:text-left'
        }`}
      >
        <span className="text-3xl font-extrabold bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent inline-block mb-xs">{item.year}</span>
        <h3 className="text-lg font-semibold text-text-primary mb-sm">{item.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
      </div>

      {/* Dot column — sits in the dedicated middle gutter, always centered on the card row */}
      <div className="hidden md:flex md:col-start-2 md:row-start-1 items-center justify-center relative z-[3]" ref={dotRef}>
        <div
          className="w-5 h-5 rounded-full bg-bg-primary border-[3px] border-warm-gold/40 relative before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-warm-gold before:opacity-60 after:content-[''] after:absolute after:rounded-full after:border after:border-warm-gold/20"
          style={{
            transform: visible ? 'scale(1)' : 'scale(0)',
            opacity: visible ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out, border-color 0.4s ease-out, box-shadow 0.4s ease-out',
            transitionDelay: visible ? '0.3s' : '0s',
            boxShadow: crossed ? '0 0 22px 4px rgba(201,168,76,0.55)' : 'none',
            borderColor: crossed ? '#e8c876' : undefined,
          }}
        >
          <span
            className="absolute -inset-1.5 rounded-full border border-warm-gold pointer-events-none"
            style={{
              opacity: crossed ? 1 : 0,
              transform: crossed ? 'scale(1)' : 'scale(0.6)',
              transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
          {crossed && (
            <span
              key="pulse"
              className="absolute -inset-1.5 rounded-full border border-warm-gold/70 pointer-events-none"
              style={{ animation: 'timelineRingPulse 1.2s ease-out 0.15s 1 both' }}
            />
          )}
        </div>
      </div>

      {/* Mobile dot — pinned to the left-aligned line, vertically centered on the card */}
      <div
        className="md:hidden w-3.5 h-3.5 rounded-full bg-bg-primary border-[3px] border-warm-gold/40 absolute z-[3] left-10 top-1/2 max-[480px]:left-0 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-warm-gold before:opacity-60"
        style={{
          transform: visible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out, border-color 0.4s ease-out, box-shadow 0.4s ease-out',
          transitionDelay: visible ? '0.3s' : '0s',
          boxShadow: crossed ? '0 0 18px 3px rgba(201,168,76,0.55)' : 'none',
          borderColor: crossed ? '#e8c876' : undefined,
        }}
        aria-hidden="true"
      >
        <span
          className="absolute -inset-1.5 rounded-full border border-warm-gold pointer-events-none"
          style={{
            opacity: crossed ? 1 : 0,
            transform: crossed ? 'scale(1)' : 'scale(0.6)',
            transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
      </div>
    </div>
  );
}
