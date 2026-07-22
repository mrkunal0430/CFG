'use client';

import Link from 'next/link';
import styles from '../investors-login/page.module.css';

export default function CreateAccountPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account creation will be connected to your authentication backend.');
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authBg} aria-hidden="true" />

      <div className={styles.authCard}>
        {/* Logo */}
        <div className={styles.authLogo}>
          <span className={styles.authLogoIcon}>✦</span>
          <span className={styles.authLogoName}>COSMOS</span>
        </div>

        <h1 className={styles.authTitle}>Create Account</h1>
        <p className={styles.authSubtitle}>
          Join the Cosmos investor community and access exclusive opportunities.
        </p>

        <form className={styles.authForm} onSubmit={handleSubmit} id="register-form">
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="reg-firstName" className={styles.formLabel}>
                First Name
              </label>
              <input
                type="text"
                id="reg-firstName"
                name="firstName"
                placeholder="John"
                className={styles.formInput}
                required
                autoComplete="given-name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="reg-lastName" className={styles.formLabel}>
                Last Name
              </label>
              <input
                type="text"
                id="reg-lastName"
                name="lastName"
                placeholder="Doe"
                className={styles.formInput}
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reg-email" className={styles.formLabel}>
              Email Address
            </label>
            <input
              type="email"
              id="reg-email"
              name="email"
              placeholder="you@company.com"
              className={styles.formInput}
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reg-phone" className={styles.formLabel}>
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="reg-phone"
              name="phone"
              placeholder="+91 99999 99999"
              className={styles.formInput}
              autoComplete="tel"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reg-password" className={styles.formLabel}>
              Password
            </label>
            <input
              type="password"
              id="reg-password"
              name="password"
              placeholder="Create a strong password"
              className={styles.formInput}
              required
              autoComplete="new-password"
              minLength={8}
            />
          </div>

          <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-normal)' }}>
            By creating an account, you agree to our Terms of Service and Privacy Policy. 
            This site is protected by reCAPTCHA.
          </p>

          <button type="submit" className={`btn btn-primary ${styles.authSubmit}`} id="register-submit">
            Create Account
          </button>
        </form>

        <div className={styles.authFooter}>
          Already have an account?{' '}
          <Link href="/investors-login" className={styles.authFooterLink}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
