'use client';

import AnimatedSection from '@/components/AnimatedSection';

const updates = [
  {
    icon: '🤖',
    tag: 'TEDx Feature',
    title: 'Investment Banking & Artificial Intelligence',
    text: 'Exploring how AI is reshaping the landscape of global investment banking and financial decision-making.',
  },
  {
    icon: '💳',
    tag: 'Industry Insights',
    title: 'Fintech & New-Gen Banking',
    text: 'The rise of digital banking platforms and how fintech innovations are disrupting traditional financial services.',
  },
  {
    icon: '📊',
    tag: 'Expert Guide',
    title: 'Guide to Personal Finance',
    text: 'Essential strategies for building wealth, managing investments, and planning for long-term financial security.',
  },
];

export default function UpdatesSection() {
  return (
    <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]" id="updates">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-[700px] mx-auto mb-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-md">Latest Updates</span>
            <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight">
              TEDx &middot; AI in Investment Banking & Fintech
            </h2>
            <p className="text-base text-text-muted leading-normal">
              Insights, thought leadership, and the latest from the world of
              finance and technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-xl max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {updates.map((update, index) => (
            <AnimatedSection key={update.title} delay={index * 150}>
              <div className="glass-card flex flex-col gap-lg p-0 overflow-hidden">
                <div className="flex items-center justify-center h-40 bg-accent-muted text-5xl">
                  {update.icon}
                </div>
                <div className="flex flex-col gap-sm p-2xl pt-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">{update.tag}</span>
                  <h3 className="text-lg font-bold text-text-primary">{update.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{update.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
