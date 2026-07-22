'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      id="site-header"
    >
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Cosmos Financial Group Home">
          <span className={styles.logoIcon}>✦</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>COSMOS</span>
            <span className={styles.logoSub}>Financial Group</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.headerActions}>
          <Link href="/investors-login" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
            Investors Clique
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          <Link
            href="/investors-login"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Investors Clique
          </Link>
          <a
            href="mailto:connect@cosmosfinancialgroup.com"
            className={`btn btn-outline ${styles.mobileCta}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Connect With Us
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
