'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

export default function ContactSection() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Get in Touch</span>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.sectionSubtitle}>
              Ready to explore opportunities? Reach out to our team.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.contactGrid}>
          <AnimatedSection direction="left">
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <p className={styles.contactLabel}>Office Address</p>
                  <p className={styles.contactValue}>
                    New Friends Colony,<br />
                    New Delhi, Delhi, India
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>
                <div>
                  <p className={styles.contactLabel}>Business Hours</p>
                  <p className={styles.contactValue}>
                    Monday — Friday<br />
                    09:00 AM — 05:00 PM IST
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>
                    <a href="mailto:connect@cosmosfinancialgroup.com" style={{ color: 'var(--accent-gold)' }}>
                      connect@cosmosfinancialgroup.com
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>💬</div>
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <p className={styles.contactValue}>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: '8px' }}
                    >
                      WhatsApp Connect
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8534893017254!2d77.26!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzM2LjAiTiA3N8KwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cosmos Financial Group Office Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
