'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className={styles.formInput}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@company.com"
          className={styles.formInput}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.formLabel}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="How can we help?"
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          className={`${styles.formInput} ${styles.formTextarea}`}
          required
        />
      </div>

      <div className={styles.formSubmit}>
        <button type="submit" className="btn btn-primary" id="contact-submit">
          {submitted ? '✓ Message Sent' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
