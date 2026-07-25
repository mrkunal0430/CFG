'use client';

import AnimatedSection from '@/components/AnimatedSection';

const milestones = [
  {
    year: '1995',
    title: 'Founded',
    text: 'Cosmos Financial Group was established with a clear vision to empower growth and create value.',
  },
  {
    year: '2005',
    title: 'Global Expansion',
    text: 'Expanded our footprint across key markets and built strategic global partnerships.',
  },
  {
    year: '2015',
    title: 'Diversifying Expertise',
    text: 'Strengthened our capabilities across multiple sectors, delivering end-to-end solutions.',
  },
  {
    year: '2024',
    title: 'Future Forward',
    text: 'Embracing innovation and sustainability to shape a better tomorrow for generations to come.',
  },
];

export default function GrowthSection() {
  return (
    <section className="section relative overflow-hidden bg-bg-primary" id="growth">
      <div className="container">
        <AnimatedSection>
          <div className="mb-3xl">
            <span className="label">Our Journey</span>
            <h2 className="text-4xl font-bold text-text-primary leading-tight mt-md">We Build Your Growth Story</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-4 gap-xl relative pt-2xl max-[1024px]:grid-cols-2 max-[1024px]:gap-x-2xl max-[1024px]:gap-y-xl max-[768px]:grid-cols-1">
            {/* Horizontal connecting line */}
            <div className="absolute top-0 left-[5%] right-[5%] h-0.5 bg-[linear-gradient(90deg,rgba(200,230,74,0.1),rgba(200,230,74,0.3),rgba(200,230,74,0.1))] max-[1024px]:hidden" aria-hidden="true" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pt-xl max-[1024px]:pt-0 max-[1024px]:pl-lg max-[1024px]:border-l-2 max-[1024px]:border-l-accent/20"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-[3px] border-bg-primary shadow-[0_0_12px_rgba(200,230,74,0.3)] z-[2] max-[1024px]:hidden" aria-hidden="true" />
                <span className="block text-3xl font-extrabold text-accent mb-sm leading-none">{milestone.year}</span>
                <h3 className="text-base font-bold text-text-primary mb-xs">{milestone.title}</h3>
                <p className="text-sm text-text-muted leading-normal">{milestone.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
