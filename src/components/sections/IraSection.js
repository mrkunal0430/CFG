'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

export default function IraSection() {
  return (
    <section className={`section ${styles.ira}`} id="ira-score">
      <div className={styles.iraGlow} aria-hidden="true" />
      <div className="container">
        <AnimatedSection direction="scale">
          <div className={styles.iraCard}>
            <span className={styles.iraLabel}>Powered by AI & Machine Learning</span>
            <h2 className={styles.iraTitle}>
              Next Level Investment Banking Suite for Global SMEs
            </h2>
            <p className={styles.iraSubtitle}>
              Introducing — &lsquo;IPO Readiness Assessment Score&rsquo;
            </p>
            <p className={styles.iraText}>
              Discover how Cosmos Financial Group is revolutionising the finance 
              industry with our innovative IPO Readiness Assessment Score. Powered 
              by Artificial Intelligence and Machine Learning, the IRA Score 
              provides enterprises with a comprehensive, data-driven assessment 
              of their readiness for public markets — enabling smarter decisions 
              at every stage of the IPO journey.
            </p>
            <div className={styles.iraCtas}>
              <a href="tel:+919999999999" className="btn btn-primary">
                Talk to Our Experts
              </a>
              <a
                href="https://www.irascore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Know Your IRA
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
