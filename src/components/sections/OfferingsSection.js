'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const offerings = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Investments',
    text: 'Sophisticated investment solutions to drive growth and create long-term value across diverse asset classes.',
    href: '/services#investments',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Asset Management',
    text: 'Our asset management strategies focus on performance, resilience, and sustainable value creation over the long term.',
    href: '/services#asset-management',
  },
];

export default function OfferingsSection() {
  return (
    <section className={`section ${styles.offerings}`} id="offerings">
      <div className="container">
        <AnimatedSection>
          <div className={styles.offeringsHeader}>
            <span className="label">What We Do</span>
            <h2 className={styles.sectionTitle}>Our Offerings</h2>
          </div>
        </AnimatedSection>

        <div className={styles.offeringsLayout}>
          {/* Left: Offering cards */}
          <AnimatedSection direction="left">
            <div className={styles.offeringsCards}>
              {offerings.map((offering) => (
                <div key={offering.title} className={styles.offeringCard}>
                  <div className={styles.offeringIcon}>{offering.icon}</div>
                  <div className={styles.offeringBody}>
                    <h3 className={styles.offeringTitle}>{offering.title}</h3>
                    <p className={styles.offeringText}>{offering.text}</p>
                    <Link href={offering.href} className={styles.offeringLink}>
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Image */}
          <AnimatedSection direction="right" delay={200}>
            <div className={styles.offeringsImageWrapper}>
              <Image
                src="/images/wind-turbine.png"
                alt="Sustainable green energy wind turbines"
                width={600}
                height={500}
                className={styles.offeringsImage}
              />
              <div className={styles.offeringsImageOverlay} aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
