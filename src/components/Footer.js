import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Investments', href: '/services#investments' },
    { label: 'Asset Management', href: '/services#asset-management' },
    { label: 'Capital Advisory', href: '/services#capital-advisory' },
    { label: 'Aero Capital', href: '/services#aero-capital' },
    { label: 'Green Holdings', href: '/services#green-holdings' },
  ],
  connect: [
    { label: 'Investors Login', href: '/investors-login' },
    { label: 'IRA Score', href: 'https://www.irascore.com', external: true },
    { label: 'WhatsApp', href: 'https://wa.me/919999999999', external: true },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerGlow} aria-hidden="true" />

      <div className={`container ${styles.footerInner}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.footerLogo}>
            <span className={styles.logoMarkWrap}>
              <Image
                src="/logo.webp"
                alt=""
                width={48}
                height={48}
                className={styles.logoMark}
              />
            </span>
            <div>
              <span className={styles.logoName}>COSMOS</span>
              <span className={styles.logoSub}>Financial Group</span>
            </div>
          </Link>
          <p className={styles.brandDesc}>
            Transcending businesses to a cosmos of infinite opportunities. 
            Serving global enterprises with world-class investment banking 
            and financial advisory since 1995.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="mailto:connect@cosmosfinancialgroup.com" aria-label="Email" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linkList}>
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linkList}>
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Connect</h4>
          <ul className={styles.linkList}>
            {footerLinks.connect.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <p className={styles.copyright}>
            © {currentYear} Cosmos Financial Group. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
            <a href="#" className={styles.bottomLink}>Disclaimer</a>
          </div>
          <a href="#site-header" className={styles.backToTop} aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
