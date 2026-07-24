"use client";

import Link from "next/link";
import CounterAnimation from "@/components/CounterAnimation";
import EarthGlobe from "@/components/EarthGlobe";
import ParticleCanvas from "@/components/ParticleCanvas";
import styles from "../../app/page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Star particles background */}
      <ParticleCanvas />

      {/* Space background image */}
      <div className={styles.heroSpaceBg} aria-hidden="true" />

      {/* Large "CFG" watermark */}
      <div className={styles.heroWatermark} aria-hidden="true">
        CFG
      </div>

      {/* Earth globe at bottom */}
      <EarthGlobe />

      {/* Gradient overlay for readability */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Main content */}
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          {/* Welcome badge */}
          <span className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Welcome to Cosmos
          </span>

          {/* Main heading */}
          <h1 className={styles.heroTitle}>
            Financing a<br />
            <span className={styles.heroTitleItalic}>Better Tomorrow</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroDescription}>
            Cosmos is committed to enabling growth
            and creating lasting impact through
            responsible financing.
          </p>

          {/* Feature badges */}
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <svg className={styles.heroFeatureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <span>Trust &<br />Security</span>
            </div>
            <span className={styles.heroFeatureDivider} />
            <div className={styles.heroFeature}>
              <svg className={styles.heroFeatureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span>Growth<br />Focused</span>
            </div>
            <span className={styles.heroFeatureDivider} />
            <div className={styles.heroFeature}>
              <svg className={styles.heroFeatureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span>Long Term<br />Partnership</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className={styles.heroCtas}>
            <Link href="/services" className="btn btn-primary">
              Explore Our Offerings
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="btn btn-outline">
              About Cosmos
            </Link>
          </div>
        </div>

        {/* Stats grid — right side */}
        <div className={styles.heroStats}>
          <div className={styles.heroStatItem}>
            <CounterAnimation end={29} suffix="+" className={styles.heroStatNumber} />
            <span className={styles.heroStatLabel}>Years of Legacy</span>
          </div>
          <div className={styles.heroStatItem}>
            <CounterAnimation end={500} suffix="+" className={styles.heroStatNumber} />
            <span className={styles.heroStatLabel}>Team Strength</span>
          </div>
          <div className={styles.heroStatItem}>
            <CounterAnimation end={2} prefix="$" suffix="B+" className={styles.heroStatNumber} />
            <span className={styles.heroStatLabel}>Assets</span>
          </div>
          <div className={styles.heroStatItem}>
            <CounterAnimation end={150} suffix="+" className={styles.heroStatNumber} />
            <span className={styles.heroStatLabel}>Global Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
