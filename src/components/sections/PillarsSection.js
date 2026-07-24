'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Creating Assets',
    text: 'We build and manage high-performing assets across industries to generate sustainable value for our partners and stakeholders.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Technology First',
    text: 'Our technology-led approach empowers us to deliver smarter, faster, and more efficient solutions in a rapidly evolving world.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Our CXOs Lead The Way',
    text: 'Our leadership brings deep experience and a shared vision to drive impact, innovation & responsible growth.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: 'Responsible Impact',
    text: 'We are committed to creating meaningful impact for communities, the environment, and future generations.',
  },
];

export default function PillarsSection() {
  return (
    <section className={`section ${styles.pillars}`} id="pillars">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What Drives Us</span>
            <h2 className={styles.sectionTitle}>Core Pillars of Excellence</h2>
          </div>
        </AnimatedSection>

        {/* Decorative corner ornaments */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 120}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
