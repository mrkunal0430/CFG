'use client';

import AnimatedSection from '@/components/AnimatedSection';

export default function IraSection() {
  return (
    <section className="section relative overflow-hidden bg-bg-primary" id="ira-score">
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,230,74,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <AnimatedSection direction="scale">
          <div className="text-center max-w-[800px] mx-auto bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-xl p-3xl flex flex-col items-center gap-lg">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">Powered by AI & Machine Learning</span>
            <h2 className="text-4xl font-bold text-text-primary leading-tight">
              Next Level Investment Banking Suite for Global SMEs
            </h2>
            <p className="text-lg font-serif italic text-accent">
              Introducing — &lsquo;IPO Readiness Assessment Score&rsquo;
            </p>
            <p className="text-base text-text-secondary leading-relaxed max-w-[640px]">
              Discover how Cosmos Financial Group is revolutionising the finance
              industry with our innovative IPO Readiness Assessment Score. Powered
              by Artificial Intelligence and Machine Learning, the IRA Score
              provides enterprises with a comprehensive, data-driven assessment
              of their readiness for public markets — enabling smarter decisions
              at every stage of the IPO journey.
            </p>
            <div className="flex items-center gap-lg flex-wrap justify-center mt-md">
              <a href="tel:+919999999999" className="btn btn-primary">
                Talk to Our Experts
              </a>
              <a
                href="https://www.irascore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Know Your IRA
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
