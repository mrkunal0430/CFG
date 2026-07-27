'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ParallaxDepth from '@/components/ParallaxDepth';
import TextReveal from '@/components/TextReveal';

export default function AboutSection() {
  return (
    <section className="section relative bg-bg-primary overflow-hidden" id="about">
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
              <TextReveal tag="p" className="text-base text-text-secondary leading-relaxed" delay={150}>
                At Cosmos Financial Group, we combine deep industry expertise with innovative financial solutions. Bridging markets across multiple sectors and geographies, we partner with businesses to drive sustainable growth and create lasting value.
              </TextReveal>
              <Link href="/about" className="group inline-flex items-center gap-xs text-sm font-semibold text-accent uppercase tracking-wide transition-all duration-200 ease-out mt-md hover:gap-sm hover:text-accent-light w-fit">
                Discover Our Journey
                <svg className="transition-transform duration-300 ease-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <ParallaxDepth speed={0.1}>
              <div className="group relative rounded-lg overflow-hidden border border-border-glass transition-all duration-500 ease-out hover:border-accent/30 hover:shadow-accent">
                <Image
                  src="/images/city-skyline.png"
                  alt="Global financial district skyline at night"
                  width={600}
                  height={400}
                  className="w-full h-auto block aspect-[3/2] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  priority={false}
                />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(10,14,10,0.3)_0%,rgba(200,230,74,0.05)_100%)]" aria-hidden="true" />
              </div>
            </ParallaxDepth>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
