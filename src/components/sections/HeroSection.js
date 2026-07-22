'use client';

import ParticleCanvas from '@/components/ParticleCanvas';
import Link from 'next/link';
import styles from '../../app/page.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <ParticleCanvas />
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContent}>
        <span className={styles.heroLabel}>Est. 1995 — Global Investment Banking</span>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGradient}>Cosmos</span>{' '}
          Financial Group
        </h1>

        <p className={styles.heroTagline}>
          &ldquo;Transcend to our Cosmos of Infinite Opportunities&rdquo;
        </p>

        <p className={styles.heroDescription}>
          Elevate your business to a whole new financial realm. We deliver 
          world-class investment banking, strategic advisory, and innovative 
          fintech solutions to enterprises worldwide.
        </p>

        <div className={styles.heroCtas}>
          <Link href="/investors-login" className="btn btn-primary">
            Investors Clique
          </Link>
          <a href="mailto:connect@cosmosfinancialgroup.com" className="btn btn-outline">
            Connect With Us
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollDot} />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
