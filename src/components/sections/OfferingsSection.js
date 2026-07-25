'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const offerings = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Investments',
    text: 'Sophisticated investment solutions to drive growth and create long-term value across diverse asset classes.',
    href: '/services#investments',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Asset Management',
    text: 'Our asset management strategies focus on performance, resilience, and sustainable value creation over the long term.',
    href: '/services#asset-management',
  },
];

export default function OfferingsSection() {
  return (
    <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]" id="offerings">
      <div className="container">
        <AnimatedSection>
          <div className="mb-3xl">
            <span className="label">What We Do</span>
            <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight">Our Offerings</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-3xl items-center max-[1024px]:grid-cols-1 max-[1024px]:gap-2xl">
          {/* Left: Offering cards */}
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-xl">
              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-lg p-2xl flex gap-lg transition-all duration-350 ease-out hover:border-accent/25 hover:-translate-y-1 hover:shadow-accent"
                >
                  <div className="w-[52px] h-[52px] min-w-[52px] rounded-md bg-accent-muted border border-accent/[0.12] flex items-center justify-center text-accent transition-all duration-350 ease-out group-hover:bg-accent/15 group-hover:shadow-[0_0_15px_rgba(200,230,74,0.12)]">{offering.icon}</div>
                  <div className="flex flex-col gap-sm">
                    <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide">{offering.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{offering.text}</p>
                    <Link href={offering.href} className="inline-flex items-center gap-xs text-sm font-semibold text-accent uppercase tracking-wide transition-all duration-200 ease-out mt-xs hover:gap-sm hover:text-accent-light">
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Image */}
          <AnimatedSection direction="right" delay={200}>
            <div className="relative rounded-lg overflow-hidden border border-border-glass">
              <Image
                src="/images/wind-turbine.png"
                alt="Sustainable green energy wind turbines"
                width={600}
                height={500}
                className="w-full h-auto block aspect-[6/5] object-cover"
              />
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top,rgba(10,14,10,0.5)_0%,transparent_50%)]" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
