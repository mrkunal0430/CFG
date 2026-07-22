import styles from './page.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import CounterAnimation from '@/components/CounterAnimation';
import TimelineSection from '@/components/TimelineSection';
import Link from 'next/link';

export const metadata = {
  title: 'Our Story',
  description:
    'Discover the Cosmos Financial Group journey — nearly three decades of transforming global finance, creating lasting value, and pioneering innovation since 1995.',
};

const values = [
  {
    icon: '🎯',
    title: 'Mission',
    text: 'To bridge global capital markets with enterprise growth, delivering transformative financial solutions that create lasting value for all stakeholders.',
  },
  {
    icon: '🔭',
    title: 'Vision',
    text: 'To be the most trusted global investment banking partner for growth-stage corporations, pioneering innovation at the intersection of finance and technology.',
  },
  {
    icon: '💡',
    title: 'Values',
    text: 'Integrity, innovation, and impact. We operate with unwavering ethical standards while pushing the boundaries of what financial advisory can achieve.',
  },
];

const timeline = [
  {
    year: '1995',
    title: 'The Foundation',
    text: 'Cosmos Financial Group was established in New Delhi with a bold vision — to transform capital markets advisory in India and create a world-class investment banking institution.',
  },
  {
    year: '2002',
    title: 'Capital Advisory Launch',
    text: 'Expanded into full-spectrum capital advisory, helping enterprises raise growth capital, navigate IPOs, and structure complex transactions across sectors.',
  },
  {
    year: '2008',
    title: 'Global Expansion',
    text: 'Extended operations across Asia, the Middle East, and European markets through strategic partnerships and a deepening network of institutional relationships.',
  },
  {
    year: '2015',
    title: 'Invest-Tech Platform',
    text: 'Launched our proprietary technology platform, digitizing the investment banking experience and bringing data-driven precision to advisory services.',
  },
  {
    year: '2020',
    title: 'Aero Capital & Green Holdings',
    text: 'Diversified into aircraft leasing and sustainable investments, opening new frontiers in alternative asset classes and ESG-focused capital deployment.',
  },
  {
    year: '2024',
    title: 'IRA Score Launch',
    text: 'Introduced the AI-powered IPO Readiness Assessment Score — a global first in investment banking, revolutionizing how companies prepare for public markets.',
  },
];

const globalPresence = [
  {
    icon: '🇮🇳',
    title: 'India',
    text: 'Headquarters in New Delhi — the strategic hub for South Asian operations and CXO advisory.',
  },
  {
    icon: '🇦🇪',
    title: 'Middle East',
    text: 'Dubai & Abu Dhabi presence, serving sovereign wealth funds and high-growth enterprises.',
  },
  {
    icon: '🇬🇧',
    title: 'Europe',
    text: 'London-based operations bridging European capital markets with Asian growth stories.',
  },
  {
    icon: '🇸🇬',
    title: 'Southeast Asia',
    text: 'Singapore gateway for ASEAN market access and cross-border transaction advisory.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} aria-hidden="true" />
        <div className={styles.heroMesh} aria-hidden="true" />
        <div className={`${styles.heroOrb} ${styles.heroOrb1}`} aria-hidden="true" />
        <div className={`${styles.heroOrb} ${styles.heroOrb2}`} aria-hidden="true" />
        <div className={`${styles.heroOrb} ${styles.heroOrb3}`} aria-hidden="true" />

        <div className={`container ${styles.pageHeroContent}`}>
          <div className={styles.heroLabelWrapper}>
            <span className={styles.heroLabelLine} aria-hidden="true" />
            <span className={styles.heroLabel}>About Cosmos Financial Group</span>
            <span className={styles.heroLabelLine} aria-hidden="true" />
          </div>

          <h1 className={styles.pageTitle}>
            Nearly Three Decades of<br />
            <span className={styles.titleAccent}>Shaping Global Finance</span>
          </h1>

          <p className={styles.pageSubtitle}>
            From a boutique advisory firm in New Delhi to a global investment 
            banking powerhouse — our story is one of relentless innovation, 
            deep expertise, and an unwavering commitment to creating value.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>
                <CounterAnimation end={29} suffix="+" />
              </div>
              <span className={styles.heroStatLabel}>Years of Excellence</span>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>
                <CounterAnimation end={500} suffix="+" />
              </div>
              <span className={styles.heroStatLabel}>Clients Served</span>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>
                <CounterAnimation end={15} suffix="+" />
              </div>
              <span className={styles.heroStatLabel}>Countries</span>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>
                $<CounterAnimation end={2} suffix="B+" />
              </div>
              <span className={styles.heroStatLabel}>Capital Deployed</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot} />
          </div>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* ==================== NARRATIVE ==================== */}
      <section className={`section ${styles.narrative}`}>
        <div className={styles.narrativeBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.narrativeGrid}>
            <AnimatedSection direction="left">
              <div className={styles.narrativeContent}>
                <div className={styles.narrativeLabel}>
                  <span className={styles.narrativeLabelDot} />
                  <span className="label">Our Beginning</span>
                </div>

                <h2 className={styles.narrativeTitle}>
                  Building Bridges Between Capital & Ambition
                </h2>

                <div className={styles.narrativeDivider} />

                <p className={styles.narrativeText}>
                  At Cosmos Financial Group, we work closely with companies to 
                  understand their capital goals. Bridging the gap with our 
                  state-of-the-art CXO advisory, our core strength lies in 
                  identification of <span className={styles.narrativeHighlight}>investment opportunities</span> and 
                  creating value for stakeholders across the globe.
                </p>

                <p className={styles.narrativeText}>
                  What started as a boutique advisory firm in New Delhi has grown 
                  into a global investment banking group with operations spanning 
                  Asia, the Middle East, and Europe. Our journey is defined by 
                  relentless innovation, deep market expertise, and an unwavering 
                  commitment to <span className={styles.narrativeHighlight}>unlocking enterprise value</span>.
                </p>

                <blockquote className={styles.narrativeQuote}>
                  We don&apos;t just advise — we partner with visionary leaders 
                  to build enterprises that define industries and transcend borders.
                </blockquote>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className={styles.narrativeVisual}>
                <div className={styles.visualCard}>
                  <CounterAnimation end={29} suffix="+" className="heading-lg text-gradient" />
                  <p className={styles.cardLabel}>Years of Excellence</p>
                </div>
                <div className={styles.visualCardGrid}>
                  <div className={styles.miniCard}>
                    <CounterAnimation end={500} suffix="+" className="heading-sm text-gradient" />
                    <p className={styles.cardLabel}>Clients Served</p>
                  </div>
                  <div className={styles.miniCard}>
                    <CounterAnimation end={15} suffix="+" className="heading-sm text-gradient" />
                    <p className={styles.cardLabel}>Countries</p>
                  </div>
                  <div className={styles.miniCard}>
                    <CounterAnimation end={50} suffix="+" className="heading-sm text-gradient" />
                    <p className={styles.cardLabel}>Team Members</p>
                  </div>
                  <div className={styles.miniCard}>
                    <CounterAnimation end={200} suffix="+" className="heading-sm text-gradient" />
                    <p className={styles.cardLabel}>Deals Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== LEADERSHIP QUOTE ==================== */}
      <section className={`section ${styles.leadershipQuote}`}>
        <div className={styles.quoteBg} aria-hidden="true" />
        <div className="container">
          <AnimatedSection direction="scale">
            <div className={styles.quoteWrapper}>
              <div className={styles.quoteCard}>
                <span className={styles.quoteSymbol}>&ldquo;</span>
                <p className={styles.quoteText}>
                  We believe that every enterprise holds the potential to 
                  redefine its industry. Our role is to unlock that potential 
                  through strategic capital solutions, unwavering integrity, 
                  and a partnership built on trust.
                </p>
                <div className={styles.quoteAuthor}>
                  <span className={styles.quoteAuthorName}>Leadership Team</span>
                  <span className={styles.quoteAuthorRole}>Cosmos Financial Group</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== PHILOSOPHY / VALUES ==================== */}
      <section className={`section ${styles.philosophy}`}>
        <div className={styles.philosophyBg} aria-hidden="true" />
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <span className={styles.sectionLabelLine} />
                <span className="label">What Drives Us</span>
                <span className={styles.sectionLabelLine} />
              </div>
              <h2 className={styles.sectionTitle}>
                Mission, Vision & Values
              </h2>
              <p className={styles.sectionSubtitle}>
                The principles that guide every decision, every relationship, 
                and every transaction across our global operations.
              </p>
              <div className={styles.sectionDivider} />
            </div>
          </AnimatedSection>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIconWrapper}>
                    {value.icon}
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueText}>{value.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className={`section ${styles.timeline}`}>
        <div className={styles.timelineBg} aria-hidden="true" />
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <span className={styles.sectionLabelLine} />
                <span className="label">Our Journey</span>
                <span className={styles.sectionLabelLine} />
              </div>
              <h2 className={styles.sectionTitle}>
                Milestones That Define Us
              </h2>
              <p className={styles.sectionSubtitle}>
                From foundation to frontier — key moments that have shaped 
                Cosmos Financial Group into a global force.
              </p>
              <div className={styles.sectionDivider} />
            </div>
          </AnimatedSection>

          <TimelineSection timeline={timeline} />
        </div>
      </section>

      {/* ==================== GLOBAL PRESENCE ==================== */}
      <section className={`section ${styles.presence}`}>
        <div className={styles.presenceBg} aria-hidden="true" />
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <span className={styles.sectionLabelLine} />
                <span className="label">Global Footprint</span>
                <span className={styles.sectionLabelLine} />
              </div>
              <h2 className={styles.sectionTitle}>
                Where We Operate
              </h2>
              <p className={styles.sectionSubtitle}>
                Our strategically positioned offices enable us to serve clients 
                across continents with local expertise and global perspective.
              </p>
              <div className={styles.sectionDivider} />
            </div>
          </AnimatedSection>

          <div className={styles.presenceGrid}>
            {globalPresence.map((region, index) => (
              <AnimatedSection key={region.title} delay={index * 120}>
                <div className={styles.presenceCard}>
                  <span className={styles.presenceIcon}>{region.icon}</span>
                  <h3 className={styles.presenceTitle}>{region.title}</h3>
                  <p className={styles.presenceText}>{region.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className={`section ${styles.cta}`}>
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className="container">
          <AnimatedSection direction="scale">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Write the Next Chapter?
              </h2>
              <p className={styles.ctaText}>
                Whether you&apos;re seeking capital advisory, exploring 
                strategic partnerships, or preparing for an IPO — let&apos;s 
                build something extraordinary together.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
