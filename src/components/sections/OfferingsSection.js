'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const offerings = [
  {
    icon: '📈',
    title: 'Investments',
    text: 'We empower institutions with strategic insights and investment opportunities across public and private markets, delivering superior risk-adjusted returns for our partners.',
    href: '/services#investments',
  },
  {
    icon: '🏛️',
    title: 'Asset Management',
    text: 'Providing state-of-the-art asset management services with disciplined portfolio construction, active risk monitoring, and transparent reporting frameworks.',
    href: '/services#asset-management',
  },
  {
    icon: '💎',
    title: 'Capital Advisory',
    text: 'We offer comprehensive capital advisory services designed to meet the strategic needs of our stakeholders — from fundraising to restructuring and M&A.',
    href: '/services#capital-advisory',
  },
];

const offeringsBottom = [
  {
    icon: '✈️',
    title: 'Aero Capital',
    subtitle: 'Aircraft Leasing',
    text: 'Welcome to the world of aviation, where we are shaping the aerolease infrastructure. Our aircraft leasing solutions connect airlines with optimal fleet financing strategies.',
    href: '/services#aero-capital',
  },
  {
    icon: '🌿',
    title: 'Sustainability',
    subtitle: 'Green Holdings',
    text: 'Sustainability is our core. Cosmos Green Holdings creates sustainable power technologies and green investment vehicles driving the transition to a cleaner future.',
    href: '/services#green-holdings',
  },
];

export default function OfferingsSection() {
  return (
    <section className={`section ${styles.offerings}`} id="offerings">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Do</span>
            <h2 className={styles.sectionTitle}>Our Offerings</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive suite of financial services crafted for 
              enterprises seeking transformative growth.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.offeringsGrid}>
          {offerings.map((offering, index) => (
            <AnimatedSection key={offering.title} delay={index * 150}>
              <div className={styles.offeringCard}>
                <div className={styles.offeringIcon}>{offering.icon}</div>
                <h3 className={styles.offeringTitle}>{offering.title}</h3>
                <p className={styles.offeringText}>{offering.text}</p>
                <Link href={offering.href} className={styles.offeringLink}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className={styles.offeringsBottomRow}>
          {offeringsBottom.map((offering, index) => (
            <AnimatedSection key={offering.title} delay={index * 150 + 450}>
              <div className={styles.offeringCard}>
                <div className={styles.offeringIcon}>{offering.icon}</div>
                <h3 className={styles.offeringTitle}>
                  {offering.title}
                  {offering.subtitle && (
                    <span style={{ display: 'block', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--accent-gold)', letterSpacing: 'var(--ls-normal)', textTransform: 'none', marginTop: '4px' }}>
                      {offering.subtitle}
                    </span>
                  )}
                </h3>
                <p className={styles.offeringText}>{offering.text}</p>
                <Link href={offering.href} className={styles.offeringLink}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
