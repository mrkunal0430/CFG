'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

export default function EventsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={`section ${styles.events}`} id="events">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Upcoming</span>
            <h2 className={styles.sectionTitle}>Events & Conclaves</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.eventDay}>11</span>
              <span className={styles.eventMonth}>Aug 2026</span>
            </div>

            <div className={styles.eventInfo}>
              <h3 className={styles.eventTitle}>
                Alternative Investments Conclave
              </h3>
              <p className={styles.eventLocation}>
                📍 New Delhi, India
              </p>
              {isExpanded && (
                <p className={styles.eventDescription}>
                  Join industry leaders, fund managers, and institutional investors 
                  at the premier Alternative Investments Conclave in Delhi. Explore 
                  emerging opportunities in private equity, venture capital, real 
                  estate, and infrastructure investments. Featuring keynote sessions, 
                  panel discussions, and exclusive networking opportunities with 
                  leading CXOs from across the globe.
                </p>
              )}
            </div>

            <div className={styles.eventActions}>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                id="event-details-toggle"
              >
                {isExpanded ? 'Hide Details' : 'Event Details'}
              </button>
              <a href="mailto:events@cosmosfinancialgroup.com" className="btn btn-primary btn-sm">
                Register Now
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
