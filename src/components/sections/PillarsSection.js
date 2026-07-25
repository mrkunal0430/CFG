'use client';

import AnimatedSection from '@/components/AnimatedSection';

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Creating Assets',
    text: 'We build and manage high-performing assets across industries to generate sustainable value for our partners and stakeholders.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Technology First',
    text: 'Our technology-led approach empowers us to deliver smarter, faster, and more efficient solutions in a rapidly evolving world.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Our CXOs Lead The Way',
    text: 'Our leadership brings deep experience and a shared vision to drive impact, innovation & responsible growth.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: 'Responsible Impact',
    text: 'We are committed to creating meaningful impact for communities, the environment, and future generations.',
  },
];

export default function PillarsSection() {
  return (
    <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]" id="pillars">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-[700px] mx-auto mb-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-md">What Drives Us</span>
            <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight">Core Pillars of Excellence</h2>
          </div>
        </AnimatedSection>

        {/* Decorative corner ornaments */}
        <div className="grid grid-cols-4 gap-xl max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 120}>
              <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-lg p-2xl transition-all duration-350 ease-out relative overflow-hidden hover:border-accent/25 hover:-translate-y-1.5 hover:shadow-accent before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[linear-gradient(135deg,#c8e64a,#d8f06a,#c8e64a)] before:scale-x-0 before:origin-left before:transition-transform before:duration-350 before:ease-out hover:before:scale-x-100">
                <div className="w-12 h-12 rounded-md bg-accent-muted border border-accent/[0.12] flex items-center justify-center mb-lg text-accent transition-all duration-350 ease-out group-hover:bg-accent/15 group-hover:shadow-[0_0_20px_rgba(200,230,74,0.12)] group-hover:scale-110">{pillar.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-sm">{pillar.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{pillar.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
