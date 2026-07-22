import Link from 'next/link';
import styles from './page.module.css';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Services',
  description:
    'Explore Cosmos Financial Group\'s comprehensive suite of services: Investments, Asset Management, Capital Advisory, Aero Capital (Aircraft Leasing), and Sustainability (Green Holdings).',
};

const services = [
  {
    id: 'investments',
    icon: '📈',
    title: 'Investments',
    text: 'We empower institutions with strategic insights and investment opportunities across public and private markets, delivering superior risk-adjusted returns for our partners. Our investment philosophy combines deep fundamental analysis with quantitative models to identify high-conviction opportunities.',
    features: [
      'Public & private market strategies',
      'Cross-border investment facilitation',
      'Portfolio construction & optimization',
      'Institutional-grade research & analytics',
    ],
    visuals: [
      { title: 'Equity Markets', text: 'Direct equity investments and structured products across emerging and developed markets.' },
      { title: 'Alternative Investments', text: 'Private equity, venture capital, and real estate investment opportunities.' },
    ],
    reverse: false,
  },
  {
    id: 'asset-management',
    icon: '🏛️',
    title: 'Asset Management',
    text: 'Providing state-of-the-art asset management services with disciplined portfolio construction, active risk monitoring, and transparent reporting frameworks. We manage diverse asset classes with a focus on long-term wealth preservation and growth.',
    features: [
      'Multi-asset portfolio management',
      'Risk assessment & mitigation',
      'Regulatory compliance frameworks',
      'Transparent real-time reporting',
    ],
    visuals: [
      { title: 'Wealth Preservation', text: 'Conservative strategies focused on capital protection and steady returns.' },
      { title: 'Growth Mandates', text: 'Aggressive growth strategies for institutions seeking alpha generation.' },
    ],
    reverse: true,
  },
  {
    id: 'capital-advisory',
    icon: '💎',
    title: 'Capital Advisory',
    text: 'We offer comprehensive capital advisory services designed to meet the strategic needs of our stakeholders — from fundraising to restructuring and M&A. Our advisory team brings decades of experience in structuring complex transactions across industries.',
    features: [
      'IPO readiness & listing advisory',
      'Mergers & acquisitions',
      'Debt & equity fundraising',
      'Corporate restructuring',
    ],
    visuals: [
      { title: 'Transaction Advisory', text: 'End-to-end support for complex transactions from strategy to execution.' },
      { title: 'Valuation Services', text: 'Fair value assessments, business modeling, and financial due diligence.' },
    ],
    reverse: false,
  },
  {
    id: 'aero-capital',
    icon: '✈️',
    title: 'Aero Capital',
    subtitle: 'Aircraft Leasing',
    text: 'Welcome to the world of aviation, where we are shaping the aerolease infrastructure. Our aircraft leasing solutions connect airlines with optimal fleet financing strategies, offering both operating and finance lease structures tailored to carrier requirements.',
    features: [
      'Operating & finance lease structures',
      'Fleet portfolio optimization',
      'Aircraft acquisition advisory',
      'Aviation asset management',
    ],
    visuals: [
      { title: 'Lease Structuring', text: 'Customized lease arrangements optimized for airline cash flow and fleet strategy.' },
      { title: 'Asset Trading', text: 'Secondary market trading and remarketing of aviation assets globally.' },
    ],
    reverse: true,
  },
  {
    id: 'green-holdings',
    icon: '🌿',
    title: 'Sustainability',
    subtitle: 'Green Holdings',
    text: 'Sustainability is our core. Cosmos Green Holdings creates sustainable power technologies and green investment vehicles driving the transition to a cleaner future. We invest in renewable energy, clean technology, and environmental infrastructure projects worldwide.',
    features: [
      'Renewable energy investments',
      'Clean technology funding',
      'ESG integration & reporting',
      'Carbon credit advisory',
    ],
    visuals: [
      { title: 'Clean Energy', text: 'Solar, wind, and hydroelectric project financing and development.' },
      { title: 'Green Bonds', text: 'Structuring and placement of green bonds for sustainable infrastructure.' },
    ],
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} aria-hidden="true" />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="label">What We Do</span>
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>
            A comprehensive suite of financial services crafted for 
            enterprises seeking transformative growth.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${styles.serviceBlock} ${index % 2 !== 0 ? styles.serviceBlockAlt : ''}`}
        >
          <div className="container">
            <div className={`${styles.serviceGrid} ${service.reverse ? styles.serviceGridReverse : ''}`}>
              <AnimatedSection direction={service.reverse ? 'right' : 'left'}>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  {service.subtitle && (
                    <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                  )}
                  <div className="divider" />
                  <p className={styles.serviceText}>{service.text}</p>
                  <div className={styles.serviceFeatures}>
                    {service.features.map((feature) => (
                      <div key={feature} className={styles.featureItem}>
                        <span className={styles.featureCheck}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction={service.reverse ? 'left' : 'right'} delay={200}>
                <div className={styles.serviceVisual}>
                  {service.visuals.map((visual) => (
                    <div key={visual.title} className={styles.visualCard}>
                      <h3 className={styles.visualCardTitle}>{visual.title}</h3>
                      <p className={styles.visualCardText}>{visual.text}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <AnimatedSection direction="scale">
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaText}>
                Our team of experts is ready to help you navigate the world 
                of global finance. Let&apos;s build your growth story together.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <a href="tel:+919999999999" className="btn btn-outline">
                  Talk to an Expert
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
