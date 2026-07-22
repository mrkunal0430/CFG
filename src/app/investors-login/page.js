'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function InvestorsLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only — no backend
    alert('Login functionality will be connected to your authentication backend.');
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

        <h1 className={styles.authTitle}>Investors Login</h1>
        <p className={styles.authSubtitle}>
          Access your investor portal, portfolio, and exclusive insights.
        </p>

        <form className={styles.authForm} onSubmit={handleSubmit} id="login-form">
          <div className={styles.formGroup}>
            <label htmlFor="login-email" className={styles.formLabel}>
              Email Address
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="you@company.com"
              className={styles.formInput}
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="login-password" className={styles.formLabel}>
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="login-password"
              name="password"
              placeholder="••••••••"
              className={styles.formInput}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.authSubmit}`} id="login-submit">
            Sign In
          </button>
        </form>

        <div className={styles.authDivider}>
          <span className={styles.authDividerText}>or</span>
        </div>

        <div className={styles.authLinks}>
          <button
            type="button"
            className={styles.authLink}
            onClick={() =>
              alert('Password reset flow will be connected to your authentication backend.')
            }
            id="reset-password"
          >
            Reset Password
          </button>
        </div>

        <div className={styles.authFooter}>
          Don&apos;t have an account?{' '}
          <Link href="/create-account" className={styles.authFooterLink}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
