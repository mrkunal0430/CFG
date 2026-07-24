'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const milestones = [
  {
    year: '1995',
    title: 'Founded',
    text: 'Cosmos Financial Group was established with a clear vision to empower growth and create value.',
  },
  {
    year: '2005',
    title: 'Global Expansion',
    text: 'Expanded our footprint across key markets and built strategic global partnerships.',
  },
  {
    year: '2015',
    title: 'Diversifying Expertise',
    text: 'Strengthened our capabilities across multiple sectors, delivering end-to-end solutions.',
  },
  {
    year: '2024',
    title: 'Future Forward',
    text: 'Embracing innovation and sustainability to shape a better tomorrow for generations to come.',
  },
];

export default function GrowthSection() {
  return (
    <section className={`section ${styles.growth}`} id="growth">
      <div className="container">
        <AnimatedSection>
          <div className={styles.growthHeader}>
            <span className="label">Our Journey</span>
            <h2 className={styles.growthTitle}>We Build Your Growth Story</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className={styles.timelineRow}>
            {/* Horizontal connecting line */}
            <div className={styles.timelineLine} aria-hidden="true" />

            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={styles.timelineItem}>
                <div className={styles.timelineDot} aria-hidden="true" />
                <span className={styles.timelineYear}>{milestone.year}</span>
                <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                <p className={styles.timelineText}>{milestone.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
