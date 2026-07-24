'use client';

import { useRef, useEffect } from 'react';
import styles from './EarthGlobe.module.css';

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
    <div className={styles.earthContainer} ref={globeRef}>
      {/* Sunrise/horizon glow */}
      <div className={styles.sunriseGlow} aria-hidden="true" />
      <div className={styles.sunriseFlare} aria-hidden="true" />

      {/* The rotating Earth sphere */}
      <div className={styles.earthSphere}>
        <div className={styles.earthTexture} />
        {/* Atmospheric glow ring */}
        <div className={styles.atmosphere} aria-hidden="true" />
      </div>

      {/* City lights overlay — faint golden dots effect */}
      <div className={styles.cityLights} aria-hidden="true" />
    </div>
  );
}
