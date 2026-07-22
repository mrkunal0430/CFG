'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const pillars = [
  {
    icon: '◈',
    title: 'Creating Assets',
    text: 'We transform your business into a store of wealth for investors and make markets to enable liquidity for both ends — acting as a bridge to create, store, and transfer wealth across global capital ecosystems.',
  },
  {
    icon: '⚡',
    title: 'Technology First',
    text: 'We believe that building a strong and scalable technology is key to success. Our invest-tech platform puts people first, fostering a sense of belonging and connection amongst all our users and stakeholders.',
  },
  {
    icon: '★',
    title: 'Our CXOs Lead The Way',
    text: 'We combine the expertise of Chief Experience Officers with our value-based corporate advisory services. Our panel of Independent Directors serves aspiring public corporations to achieve their business goals.',
  },
];

export default function PillarsSection() {
  return (
    <section className={`section ${styles.pillars}`} id="pillars">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Foundation</span>
            <h2 className={styles.sectionTitle}>Core Pillars of Excellence</h2>
            <p className={styles.sectionSubtitle}>
              Built on three fundamental principles that drive every decision 
              we make and every partnership we forge.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 150}>
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
