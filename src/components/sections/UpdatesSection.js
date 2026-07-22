'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

const updates = [
  {
    icon: '🤖',
    tag: 'TEDx Feature',
    title: 'Investment Banking & Artificial Intelligence',
    text: 'Exploring how AI is reshaping the landscape of global investment banking and financial decision-making.',
  },
  {
    icon: '💳',
    tag: 'Industry Insights',
    title: 'Fintech & New-Gen Banking',
    text: 'The rise of digital banking platforms and how fintech innovations are disrupting traditional financial services.',
  },
  {
    icon: '📊',
    tag: 'Expert Guide',
    title: 'Guide to Personal Finance',
    text: 'Essential strategies for building wealth, managing investments, and planning for long-term financial security.',
  },
];

export default function UpdatesSection() {
  return (
    <section className={`section ${styles.updates}`} id="updates">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Latest Updates</span>
            <h2 className={styles.sectionTitle}>
              TEDx &middot; AI in Investment Banking & Fintech
            </h2>
            <p className={styles.sectionSubtitle}>
              Insights, thought leadership, and the latest from the world of 
              finance and technology.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.updatesGrid}>
          {updates.map((update, index) => (
            <AnimatedSection key={update.title} delay={index * 150}>
              <div className={styles.updateCard}>
                <div className={styles.updateImagePlaceholder}>
                  {update.icon}
                </div>
                <div className={styles.updateBody}>
                  <span className={styles.updateTag}>{update.tag}</span>
                  <h3 className={styles.updateTitle}>{update.title}</h3>
                  <p className={styles.updateText}>{update.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
