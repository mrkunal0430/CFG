'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

export default function AboutSection() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <AnimatedSection direction="left">
            <div className={styles.aboutContent}>
              <span className="label">Who We Are</span>
              <h2 className={styles.aboutTitle}>
                Serving Global<br />
                Businesses{' '}
                <span className={styles.aboutHighlight}>Since 1995</span>
              </h2>
              <div className="divider" />
              <p className={styles.aboutText}>
                At Cosmos Financial Group, we combine deep industry
                expertise with innovative financial solutions. Bridging
                markets across multiple sectors and geographies, we
                partner with businesses to drive sustainable growth
                and create lasting value.
              </p>
              <Link href="/about" className={styles.aboutLink}>
                Discover Our Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/images/city-skyline.png"
                alt="Global financial district skyline at night"
                width={600}
                height={400}
                className={styles.aboutImage}
                priority={false}
              />
              <div className={styles.aboutImageOverlay} aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
