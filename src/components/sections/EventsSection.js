'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function EventsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section bg-bg-primary" id="events">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-[700px] mx-auto mb-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-md">Upcoming</span>
            <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight">Events & Conclaves</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card flex items-center gap-xl max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:text-center">
            <div className="flex flex-col items-center justify-center shrink-0 w-24 h-24 rounded-md bg-accent-muted border border-accent/[0.12]">
              <span className="text-3xl font-extrabold text-accent leading-none">11</span>
              <span className="text-xs font-medium uppercase tracking-wide text-text-muted mt-xs">Aug 2026</span>
            </div>

            <div className="flex-1 flex flex-col gap-sm">
              <h3 className="text-lg font-bold text-text-primary">
                Alternative Investments Conclave
              </h3>
              <p className="text-sm text-text-muted">
                📍 New Delhi, India
              </p>
              {isExpanded && (
                <p className="text-sm text-text-secondary leading-relaxed">
                  Join industry leaders, fund managers, and institutional investors
                  at the premier Alternative Investments Conclave in Delhi. Explore
                  emerging opportunities in private equity, venture capital, real
                  estate, and infrastructure investments. Featuring keynote sessions,
                  panel discussions, and exclusive networking opportunities with
                  leading CXOs from across the globe.
                </p>
              )}
            </div>

            <div className="flex items-center gap-md flex-wrap max-[768px]:justify-center">
              <button
                className="btn btn-outline btn-sm"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                id="event-details-toggle"
              >
                {isExpanded ? 'Hide Details' : 'Event Details'}
              </button>
              <a href="mailto:events@cosmosfinancialgroup.com" className="btn btn-primary btn-sm">
                Register Now
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
