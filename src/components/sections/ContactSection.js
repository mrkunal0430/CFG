'use client';

import AnimatedSection from '@/components/AnimatedSection';

export default function ContactSection() {
  return (
    <section className="section bg-bg-primary" id="contact">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-[700px] mx-auto mb-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-md">Get in Touch</span>
            <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight">Contact Us</h2>
            <p className="text-base text-text-muted leading-normal">
              Ready to explore opportunities? Reach out to our team.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-3xl items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-2xl">
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-xl">
              <div className="flex items-start gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-md bg-accent-muted border border-accent/[0.12] flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-xs">Office Address</p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    New Friends Colony,<br />
                    New Delhi, Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-md bg-accent-muted border border-accent/[0.12] flex items-center justify-center text-xl">🕐</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-xs">Business Hours</p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    Monday — Friday<br />
                    09:00 AM — 05:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-md bg-accent-muted border border-accent/[0.12] flex items-center justify-center text-xl">✉️</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-xs">Email</p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    <a href="mailto:connect@cosmosfinancialgroup.com" className="text-warm-gold">
                      connect@cosmosfinancialgroup.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-md bg-accent-muted border border-accent/[0.12] flex items-center justify-center text-xl">💬</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-xs">WhatsApp</p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm mt-xs"
                    >
                      WhatsApp Connect
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="rounded-lg overflow-hidden border border-border-glass aspect-[4/3] [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8534893017254!2d77.26!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzM2LjAiTiA3N8KwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cosmos Financial Group Office Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
