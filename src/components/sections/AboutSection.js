'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutSection() {
  return (
    <section className="section relative bg-bg-primary" id="about">
      <div className="container">
        <div className="grid grid-cols-2 gap-4xl items-center max-[1024px]:grid-cols-1 max-[1024px]:gap-2xl">
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-lg">
              <span className="label">Who We Are</span>
              <h2 className="text-4xl font-bold text-text-primary leading-tight">
                Serving Global<br />
                Businesses{' '}
                <span className="text-accent italic font-serif">Since 1995</span>
              </h2>
              <div className="divider" />
              <p className="text-base text-text-secondary leading-relaxed">
                At Cosmos Financial Group, we combine deep industry
                expertise with innovative financial solutions. Bridging
                markets across multiple sectors and geographies, we
                partner with businesses to drive sustainable growth
                and create lasting value.
              </p>
              <Link href="/about" className="inline-flex items-center gap-xs text-sm font-semibold text-accent uppercase tracking-wide transition-all duration-200 ease-out mt-md hover:gap-sm hover:text-accent-light">
                Discover Our Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="relative rounded-lg overflow-hidden border border-border-glass">
              <Image
                src="/images/city-skyline.png"
                alt="Global financial district skyline at night"
                width={600}
                height={400}
                className="w-full h-auto block aspect-[3/2] object-cover"
                priority={false}
              />
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(10,14,10,0.3)_0%,rgba(200,230,74,0.05)_100%)]" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
