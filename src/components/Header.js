'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

  const headerClasses = [
    'fixed top-0 left-0 right-0 z-[1000] h-[80px] max-[768px]:h-16',
    'transition-[transform,background,box-shadow] duration-350 ease-out',
    'translate-y-0',
    isScrolled
      ? 'bg-[rgba(10,14,10,0.88)] backdrop-blur-[24px] border-b border-border-glass shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
      : 'bg-transparent',
    isHidden ? '-translate-y-full' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses} id="site-header">
      <div className="flex items-center justify-between h-full max-w-[1280px] mx-auto px-xl">
        {/* Logo — CFG + Cosmos Financial Group */}
        <Link href="/" className="group flex items-center gap-sm no-underline z-10 hover:text-inherit" aria-label="Cosmos Financial Group Home">
          <span className="text-[1.75rem] font-extrabold tracking-[0.08em] text-text-primary leading-none border-2 border-white/20 rounded-sm py-1 px-2.5 transition-all duration-350 ease-out group-hover:border-accent group-hover:text-accent">CFG</span>
          <span className="block w-px h-9 bg-white/15 shrink-0" aria-hidden="true" />
          <span className="text-[0.8rem] font-medium text-text-secondary leading-[1.3] tracking-[0.02em]">
            Cosmos<br />Financial Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-2xl max-[900px]:hidden" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-normal text-text-secondary tracking-[0.02em] py-xs transition-colors duration-200 ease-out hover:text-text-primary after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-[width] after:duration-350 after:ease-out after:rounded-full hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-md max-[900px]:hidden">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 py-[0.55rem] px-6 text-xs font-semibold tracking-wide uppercase text-accent border border-accent rounded-full bg-transparent transition-all duration-350 ease-out whitespace-nowrap hover:bg-accent hover:text-bg-primary hover:-translate-y-0.5 hover:shadow-accent"
          >
            Get in Touch
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hidden max-[900px]:flex flex-col gap-[5px] p-2 z-10 cursor-pointer bg-none border-none [&>span]:block [&>span]:w-6 [&>span]:h-0.5 [&>span]:bg-text-primary [&>span]:rounded-full [&>span]:transition-all [&>span]:duration-350 [&>span]:ease-out [&>span]:origin-center"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          id="mobile-menu-toggle"
        >
          <span className={isMobileOpen ? '!rotate-45 !translate-x-[5px] !translate-y-[5px]' : ''} />
          <span className={isMobileOpen ? '!opacity-0 !scale-x-0' : ''} />
          <span className={isMobileOpen ? '!-rotate-45 !translate-x-[5px] !-translate-y-[5px]' : ''} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 w-full max-w-[380px] h-screen bg-bg-secondary border-l border-border-glass pt-[calc(80px+3rem)] px-2xl pb-2xl transition-[right] duration-350 ease-out z-[5] overflow-y-auto ${
          isMobileOpen ? 'right-0' : '-right-full'
        }`}
        aria-hidden={!isMobileOpen}
      >
        <nav className="flex flex-col gap-xs" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-xl font-semibold text-text-secondary py-md border-b border-border-subtle transition-all duration-200 ease-out hover:text-accent hover:pl-md"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-border-glass my-lg" />
          <Link
            href="/contact"
            className="btn btn-primary text-center mt-xs"
            onClick={() => setIsMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-[4px] z-[4]"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
