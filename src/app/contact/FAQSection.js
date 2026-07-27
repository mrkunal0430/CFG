'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const faqs = [
  {
    q: 'What services does Cosmos Financial Group offer?',
    a: 'We provide a comprehensive suite of financial services including Investment Banking, Asset Management, Capital Advisory, Aircraft Leasing (Aero Capital), and Sustainable Investments (Green Holdings).',
  },
  {
    q: 'How can I schedule a consultation?',
    a: 'You can reach us via the contact form above, email us at connect@cosmosfinancialgroup.com, or call our office directly. Our team typically responds within 24 hours.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. We have a global presence with operations in India, the Middle East, Europe, and Southeast Asia. We regularly serve clients across 15+ countries.',
  },
  {
    q: 'What is the IRA Score?',
    a: 'The IPO Readiness Assessment (IRA) Score is our AI-powered proprietary tool that evaluates a company\'s readiness for public markets across multiple dimensions, providing actionable insights for IPO preparation.',
  },
  {
    q: 'What is the minimum investment or engagement size?',
    a: 'Our engagement size varies by service. We work with growth-stage companies and institutions of all scales. Contact us for a personalized discussion about your requirements.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)] relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,230,74,0.03)_0%,transparent_50%)]" aria-hidden="true" />
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-[700px] mx-auto mb-3xl relative z-[1]">
            <div className="inline-flex items-center gap-sm mb-lg">
              <span className="w-6 h-px bg-accent opacity-50" />
              <span className="label">Common Questions</span>
              <span className="w-6 h-px bg-accent opacity-50" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-md leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Quick answers to common questions about our services and processes.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-[750px] mx-auto flex flex-col gap-md relative z-[1]">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
