'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Offerings' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      const scrolledPastHeader = currentScrollY > 120;
      const scrollingDown = currentScrollY > lastScrollY;

      setIsHidden(scrolledPastHeader && scrollingDown);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      setIsHidden(false);
    }
  }, [isMobileOpen]);

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
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.headerHidden : ''}`}
      id="site-header"
    >
      <div className={styles.headerInner}>
        {/* Logo — CFG + Cosmos Financial Group */}
        <Link href="/" className={styles.logo} aria-label="Cosmos Financial Group Home">
          <span className={styles.logoMark}>CFG</span>
          <span className={styles.logoDivider} aria-hidden="true" />
          <span className={styles.logoText}>
            Cosmos<br />Financial Group
          </span>
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
          <Link href="/contact" className={styles.ctaBtn}>
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
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
            href="/contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Get in Touch
          </Link>
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
