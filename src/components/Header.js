'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
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
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Cosmos Financial Group Home">
          <span className={styles.logoMarkWrap}>
            <Image
              src="/logo.webp"
              alt=""
              width={44}
              height={44}
              className={styles.logoMark}
              priority
            />
          </span>
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
