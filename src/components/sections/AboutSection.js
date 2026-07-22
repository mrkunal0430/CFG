'use client';

import AnimatedSection from '@/components/AnimatedSection';
import CounterAnimation from '@/components/CounterAnimation';
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
                Serving Global Businesses{' '}
                <span className={styles.aboutHighlight}>Since 1995</span>
              </h2>
              <div className="divider" />
              <p className={styles.aboutText}>
                At Cosmos Financial Group, we work closely with companies to understand 
                their capital goals. Bridging the gap with our state-of-the-art CXO 
                advisory, our core strength lies in identification of investment 
                opportunities and creating value for stakeholders across the globe.
              </p>
              <blockquote className={styles.aboutQuote}>
                &ldquo;Creating a Next League of Growth Stage Corporations, 
                Unlocking Value for All&rdquo;
              </blockquote>
              <p className={styles.aboutText}>
                We play a pivotal role in upstreaming business valuations, 
                enabling enterprises to achieve their full market potential 
                through strategic capital allocation and expert advisory.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <CounterAnimation
                  end={29}
                  suffix="+"
                  className={styles.statNumber}
                />
                <span className={styles.statLabel}>Years Active</span>
              </div>
              <div className={styles.statItem}>
                <CounterAnimation
                  end={500}
                  suffix="+"
                  className={styles.statNumber}
                />
                <span className={styles.statLabel}>Global Clients</span>
              </div>
              <div className={styles.statItem}>
                <CounterAnimation
                  end={2}
                  prefix="$"
                  suffix="B+"
                  className={styles.statNumber}
                />
                <span className={styles.statLabel}>AUM</span>
              </div>
              <div className={styles.statItem}>
                <CounterAnimation
                  end={150}
                  suffix="+"
                  className={styles.statNumber}
                />
                <span className={styles.statLabel}>Deals Closed</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
