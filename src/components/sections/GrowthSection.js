'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const milestones = [
  {
    year: '1995',
    title: 'Foundation',
    text: 'Cosmos Financial Group established with a vision to bridge capital markets and enterprise growth.',
  },
  {
    year: '2005',
    title: 'Global Expansion',
    text: 'Expanded advisory services across Asia, Middle East, and European markets.',
  },
  {
    year: '2015',
    title: 'Technology Integration',
    text: 'Launched our proprietary invest-tech platform, transforming how clients interact with capital.',
  },
  {
    year: '2024',
    title: 'IRA Score Launch',
    text: 'Introduced the AI-powered IPO Readiness Assessment Score — a first in investment banking.',
  },
];

export default function GrowthSection() {
  return (
    <section className={`section ${styles.growth}`} id="growth">
      <div className={styles.growthGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.growthGrid}>
          <AnimatedSection direction="left">
            <div className={styles.growthContent}>
              <span className="label">Our Journey</span>
              <h2 className={styles.growthTitle}>
                We Build Your Growth Story
              </h2>
              <div className="divider" />
              <p className={styles.growthText}>
                At Cosmos Financial Group, we started with the goal of providing 
                the finest financial products and advisory services to our clients. 
                With nearly three decades of experience in global capital markets, 
                we have established ourselves as a trusted name that delivers 
                transformative results every time.
              </p>
              <p className={styles.growthText}>
                Our journey is defined by relentless innovation, deep market 
                expertise, and an unwavering commitment to unlocking enterprise 
                value for growth-stage corporations worldwide.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className={styles.growthVisual}>
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 100 + 300}>
                  <div className={styles.milestoneCard}>
                    <span className={styles.milestoneYear}>{milestone.year}</span>
                    <div>
                      <p className={styles.milestoneTitle}>{milestone.title}</p>
                      <p className={styles.milestoneText}>{milestone.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
