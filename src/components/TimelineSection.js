'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../app/about/page.module.css';

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
    <div className={styles.timelineTrack} ref={trackRef}>
      <div className={styles.timelineLine} aria-hidden="true" />
      <div className={styles.timelineLineGlow} aria-hidden="true" />
      <div className={styles.timelineProgress} ref={progressRef} aria-hidden="true" />

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
      className={`${styles.timelineItem} ${isLeft ? styles.timelineItemLeft : styles.timelineItemRight}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : `translateY(40px)`,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <div className={styles.timelineContent}>
        <span className={styles.timelineYear}>{item.year}</span>
        <h3 className={styles.timelineTitle}>{item.title}</h3>
        <p className={styles.timelineText}>{item.text}</p>
      </div>

      <div className={styles.timelineCenter}>
        <div className={styles.timelineDot} />
      </div>

      <div className={styles.timelineSpacer} />
    </div>
  );
}
