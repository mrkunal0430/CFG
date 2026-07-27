import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SVGPathReveal from '@/components/SVGPathReveal';
import ScrollSpyNav from '@/components/ScrollSpyNav';
import MarqueeText from '@/components/MarqueeText';
import TextReveal from '@/components/TextReveal';
import MagneticCard from '@/components/MagneticCard';

export const metadata = {
  title: 'Services',
  description:
    'Explore Cosmos Financial Group\'s comprehensive suite of services: Investments, Asset Management, Capital Advisory, Aero Capital (Aircraft Leasing), and Sustainability (Green Holdings).',
};

const scrollSpyItems = [
  { id: 'investments', label: 'Investments' },
  { id: 'asset-management', label: 'Asset Management' },
  { id: 'capital-advisory', label: 'Capital Advisory' },
  { id: 'aero-capital', label: 'Aero Capital' },
  { id: 'green-holdings', label: 'Sustainability' },
];

const services = [
  {
    id: 'investments',
    iconPaths: ['M4 20L4 10', 'M10 20L10 6', 'M16 20L16 12', 'M22 20L22 4', 'M4 14L10 8L16 12L22 4'],
    title: 'Investments',
    accentClass: 'service-accent-investments',
    accentColor: '#48bb78',
    text: 'We empower institutions with strategic insights and investment opportunities across public and private markets, delivering superior risk-adjusted returns for our partners.',
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
    marquee: 'INVESTMENTS • EQUITY • GROWTH • RETURNS •',
    reverse: false,
  },
  {
    id: 'asset-management',
    iconPaths: ['M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z', 'M12 8V12L15 15', 'M2 12H6', 'M18 12H22'],
    title: 'Asset Management',
    accentClass: 'service-accent-asset-management',
    accentColor: '#4299e1',
    text: 'Providing state-of-the-art asset management services with disciplined portfolio construction, active risk monitoring, and transparent reporting frameworks.',
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
    marquee: 'ASSET MANAGEMENT • PORTFOLIO • RISK • GROWTH •',
    reverse: true,
  },
  {
    id: 'capital-advisory',
    iconPaths: ['M12 2L2 7L12 12L22 7L12 2Z', 'M2 17L12 22L22 17', 'M2 12L12 17L22 12'],
    title: 'Capital Advisory',
    accentClass: 'service-accent-capital-advisory',
    accentColor: '#ed8936',
    text: 'We offer comprehensive capital advisory services designed to meet the strategic needs of our stakeholders — from fundraising to restructuring and M&A.',
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
    marquee: 'CAPITAL ADVISORY • M&A • IPO • FUNDRAISING •',
    reverse: false,
  },
  {
    id: 'aero-capital',
    iconPaths: ['M2 16L12 6L22 16', 'M4 14L12 8L20 14', 'M8 20H16', 'M10 20V16', 'M14 20V16'],
    title: 'Aero Capital',
    subtitle: 'Aircraft Leasing',
    accentClass: 'service-accent-aero-capital',
    accentColor: '#9f7aea',
    text: 'Welcome to the world of aviation, where we are shaping the aerolease infrastructure. Our aircraft leasing solutions connect airlines with optimal fleet financing strategies.',
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
    marquee: 'AERO CAPITAL • AVIATION • LEASING • FLEET •',
    reverse: true,
  },
  {
    id: 'green-holdings',
    iconPaths: ['M12 22C12 22 4 16 4 10C4 7 6 4 9 4C10.5 4 11.5 5 12 6C12.5 5 13.5 4 15 4C18 4 20 7 20 10C20 16 12 22 12 22Z', 'M12 10V18', 'M8 14H16'],
    title: 'Sustainability',
    subtitle: 'Green Holdings',
    accentClass: 'service-accent-green-holdings',
    accentColor: '#48bb78',
    text: 'Sustainability is our core. Cosmos Green Holdings creates sustainable power technologies and green investment vehicles driving the transition to a cleaner future.',
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
    marquee: 'SUSTAINABILITY • GREEN • ESG • CLEAN ENERGY •',
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Scroll Spy Navigation */}
      <ScrollSpyNav items={scrollSpyItems} />

      {/* ==================== HERO — SVG Line Art ==================== */}
      <section className="relative pt-[calc(80px+6rem)] pb-3xl text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #0a0e0a 0%, #0d120d 30%, #0a100a 60%, #0a0e0a 100%)' }}>
        {/* Hero background image */}
        <div
          className="absolute inset-0 pointer-events-none z-[0] opacity-20"
          style={{
            backgroundImage: 'url(/images/services-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />

        {/* Abstract SVG line art that draws on load */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] opacity-[0.06]" aria-hidden="true">
          <SVGPathReveal
            viewBox="0 0 200 200"
            paths={[
              'M20 100 Q60 20 100 100 T180 100',
              'M100 20 Q20 60 100 100 T100 180',
              'M30 30 L170 170',
              'M170 30 L30 170',
              'M100 10 L100 190',
              'M10 100 L190 100',
            ]}
            className="!w-[600px] !h-[600px] !text-accent"
          />
        </div>

        <div className="container relative z-[2]">
          <div className="inline-flex items-center gap-sm mb-lg animate-[fadeInUp_0.8s_var(--ease-out)_both]">
            <span className="w-10 h-px bg-[linear-gradient(135deg,#c8e64a,#d8f06a)] opacity-60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">What We Do</span>
            <span className="w-10 h-px bg-[linear-gradient(135deg,#c8e64a,#d8f06a)] opacity-60" aria-hidden="true" />
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold text-text-primary mb-md leading-tight tracking-tight animate-[fadeInUp_0.8s_var(--ease-out)_0.15s_both]">
            Our Services
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed mb-2xl animate-[fadeInUp_0.8s_var(--ease-out)_0.3s_both]">
            A comprehensive suite of financial services crafted for
            enterprises seeking transformative growth.
          </p>
        </div>

        {/* Marquee strip below hero */}
        <MarqueeText text="INVESTMENTS • ASSET MANAGEMENT • CAPITAL ADVISORY • AERO CAPITAL • SUSTAINABILITY •" speed={35} />
      </section>

      {/* ==================== SERVICE BLOCKS ==================== */}
      {services.map((service, index) => (
        <div key={service.id}>
          <section
            id={service.id}
            className={`section [scroll-margin-top:calc(80px+2rem)] relative overflow-hidden ${service.accentClass} ${index % 2 !== 0 ? 'bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]' : ''}`}
          >
            {/* Subtle accent radial */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at ${service.reverse ? '80%' : '20%'} 50%, var(--service-accent, transparent), transparent 60%)` }}
              aria-hidden="true"
            />

            <div className="container relative z-[1]">
              <div
                className={`grid grid-cols-2 gap-4xl items-center max-[768px]:grid-cols-1 ${
                  service.reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
                }`}
              >
                <AnimatedSection direction={service.reverse ? 'right' : 'left'}>
                  <div className="flex flex-col gap-lg">
                    {/* SVG icon that draws itself */}
                    <SVGPathReveal
                      paths={service.iconPaths}
                      viewBox="0 0 24 24"
                      className="!w-[64px] !h-[64px]"
                    />

                    <h2 className="text-3xl font-bold text-text-primary leading-snug">{service.title}</h2>
                    {service.subtitle && (
                      <p className="text-base font-medium" style={{ color: service.accentColor }}>{service.subtitle}</p>
                    )}
                    <div className="w-[60px] h-[3px] rounded-full" style={{ background: `linear-gradient(135deg, ${service.accentColor}, var(--accent))` }} />

                    <TextReveal className="text-base text-text-secondary leading-relaxed">
                      {service.text}
                    </TextReveal>

                    {/* Animated feature checklist */}
                    <div className="flex flex-col gap-sm mt-md">
                      {service.features.map((feature, fi) => (
                        <AnimatedSection key={feature} delay={fi * 100}>
                          <div className="flex items-center gap-md text-sm text-text-secondary">
                            <span
                              className="w-6 h-6 min-w-[24px] rounded-full flex items-center justify-center text-xs border"
                              style={{ background: `${service.accentColor}15`, borderColor: `${service.accentColor}30`, color: service.accentColor }}
                            >
                              ✓
                            </span>
                            <span>{feature}</span>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction={service.reverse ? 'left' : 'right'} delay={200}>
                  <div className="flex flex-col gap-md">
                    {service.visuals.map((visual) => (
                      <MagneticCard
                        key={visual.title}
                        className="animated-border-card p-2xl flex flex-col gap-md transition-all duration-350 ease-out"
                        intensity={8}
                      >
                        <div className="relative z-[3]">
                          <h3 className="text-base font-semibold text-text-primary">{visual.title}</h3>
                          <p className="text-sm text-text-muted leading-normal">{visual.text}</p>
                        </div>
                      </MagneticCard>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Marquee divider between sections */}
          {index < services.length - 1 && (
            <MarqueeText text={service.marquee} speed={25 + index * 3} />
          )}
        </div>
      ))}

      {/* ==================== CTA — Premium Glassmorphic ==================== */}
      <section className="section bg-bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,230,74,0.05)_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container">
          <AnimatedSection direction="scale">
            <div className="animated-border-card p-4xl max-w-[700px] mx-auto text-center">
              <div className="relative z-[1]">
                <h2 className="text-3xl font-bold text-text-primary mb-md">Ready to Get Started?</h2>
                <p className="text-base text-text-secondary mb-2xl leading-relaxed">
                  Our team of experts is ready to help you navigate the world
                  of global finance. Let&apos;s build your growth story together.
                </p>
                <div className="flex justify-center gap-lg flex-wrap">
                  <Link href="/contact" className="btn btn-primary" style={{ animation: 'glowPulseStrong 3s ease-in-out infinite' }}>
                    Contact Us
                  </Link>
                  <a href="tel:+919999999999" className="btn btn-outline">
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
