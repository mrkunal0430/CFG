import Link from 'next/link';
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
      <section className="relative pt-[calc(80px+6rem)] pb-4xl bg-[linear-gradient(160deg,#0a0e0a_0%,#0f1a0e_30%,#0a100a_60%,#0a0e0a_100%)] text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,168,76,0.06)_0%,transparent_60%)]"
          aria-hidden="true"
        />
        <div className="container relative z-[2]">
          <span className="label">What We Do</span>
          <h1 className="text-5xl font-extrabold text-text-primary mb-md leading-tight">Our Services</h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
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
          className={`section [scroll-margin-top:calc(80px+2rem)] ${index % 2 !== 0 ? 'bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]' : ''}`}
        >
          <div className="container">
            <div
              className={`grid grid-cols-2 gap-4xl items-center max-[768px]:grid-cols-1 ${
                service.reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
              }`}
            >
              <AnimatedSection direction={service.reverse ? 'right' : 'left'}>
                <div className="flex flex-col gap-lg">
                  <div className="w-16 h-16 rounded-lg bg-warm-gold/[0.08] border border-warm-gold/15 flex items-center justify-center text-3xl text-warm-gold">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-text-primary leading-snug">{service.title}</h2>
                  {service.subtitle && (
                    <p className="text-base text-warm-gold font-medium">{service.subtitle}</p>
                  )}
                  <div className="divider" />
                  <p className="text-base text-text-secondary leading-relaxed">{service.text}</p>
                  <div className="flex flex-col gap-sm mt-md">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-md text-sm text-text-secondary">
                        <span className="w-6 h-6 min-w-[24px] rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center text-xs text-warm-gold">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction={service.reverse ? 'left' : 'right'} delay={200}>
                <div className="flex flex-col gap-md">
                  {service.visuals.map((visual) => (
                    <div
                      key={visual.title}
                      className="bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-lg p-2xl flex flex-col gap-md transition-all duration-350 ease-out hover:border-warm-gold/25 hover:-translate-y-1"
                    >
                      <h3 className="text-base font-semibold text-text-primary">{visual.title}</h3>
                      <p className="text-sm text-text-muted leading-normal">{visual.text}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section bg-bg-primary text-center">
        <div className="container">
          <AnimatedSection direction="scale">
            <div className="bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-xl p-4xl max-w-[700px] mx-auto">
              <h2 className="text-3xl font-bold text-text-primary mb-md">Ready to Get Started?</h2>
              <p className="text-base text-text-secondary mb-2xl leading-relaxed">
                Our team of experts is ready to help you navigate the world
                of global finance. Let&apos;s build your growth story together.
              </p>
              <div className="flex justify-center gap-lg flex-wrap">
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
