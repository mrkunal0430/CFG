import AnimatedSection from '@/components/AnimatedSection';
import MagneticCard from '@/components/MagneticCard';
import MouseGridBackground from '@/components/MouseGridBackground';
import FloatingShapes from '@/components/FloatingShapes';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Cosmos Financial Group. Visit our office in New Delhi, call our experts, or send us a message. We are here to help you grow.',
};

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Office Address',
    value: 'New Friends Colony, New Delhi, Delhi, India',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Monday — Friday, 09:00 AM — 05:00 PM IST',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'connect@cosmosfinancialgroup.com',
    href: 'mailto:connect@cosmosfinancialgroup.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    href: 'https://wa.me/919999999999',
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ==================== HERO — Geometric Dot Grid ==================== */}
      <section className="relative pt-[calc(80px+6rem)] pb-4xl text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #0a0e0a 0%, #0d120d 30%, #0a100a 60%, #0a0e0a 100%)' }}>
        {/* Mouse-reactive dot grid */}
        <MouseGridBackground />

        {/* Floating geometric shapes */}
        <FloatingShapes />

        {/* Hero background image */}
        <div
          className="absolute inset-0 pointer-events-none z-[0] opacity-20"
          style={{
            backgroundImage: 'url(/images/contact-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />

        <div className="container relative z-[3]">
          <div className="inline-flex items-center gap-sm mb-lg animate-[fadeInUp_0.8s_var(--ease-out)_both]">
            <span className="w-10 h-px bg-[linear-gradient(135deg,#c8e64a,#d8f06a)] opacity-60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Get in Touch</span>
            <span className="w-10 h-px bg-[linear-gradient(135deg,#c8e64a,#d8f06a)] opacity-60" aria-hidden="true" />
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold text-text-primary mb-md leading-tight tracking-tight animate-[fadeInUp_0.8s_var(--ease-out)_0.15s_both]">
            Let&apos;s Build Something<br />
            <span className="bg-[linear-gradient(90deg,#c8e64a,#e0f580,#c8e64a)] bg-clip-text text-transparent">Extraordinary</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed animate-[fadeInUp_0.8s_var(--ease-out)_0.3s_both]">
            Ready to explore opportunities? Our team of experts is here
            to help you navigate the world of global finance.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT GRID — Glassmorphic Cards + Form ==================== */}
      <section className="section bg-bg-primary relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_0%_0%,rgba(200,230,74,0.03)_0%,transparent_50%)]" aria-hidden="true" />
        <div className="container">
          <div className="grid grid-cols-[1fr_1.2fr] gap-3xl max-[768px]:grid-cols-1 relative z-[1]">
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-lg">
                <div className="mb-md">
                  <h2 className="text-2xl font-bold text-text-primary mb-sm">Reach Out to Us</h2>
                  <p className="text-sm text-text-muted">We&apos;d love to hear from you. Choose your preferred way to connect.</p>
                </div>
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.label} delay={index * 80}>
                    <MagneticCard
                      className="flex gap-lg items-start p-xl bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-md transition-[border-color,box-shadow] duration-350 ease-out hover:border-accent/25 hover:shadow-[0_4px_20px_rgba(200,230,74,0.08)]"
                      intensity={8}
                    >
                      <div className="relative z-[3] flex gap-lg items-start w-full">
                        <div className="w-12 h-12 min-w-[48px] rounded-md bg-accent/[0.08] border border-accent/15 flex items-center justify-center text-accent">{info.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary mb-xs">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-accent transition-colors duration-200 hover:text-accent-light text-sm"
                              {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-text-muted leading-normal">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </MagneticCard>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="animated-border-card p-2xl">
                <div className="relative z-[1]">
                  <h2 className="text-2xl font-bold text-text-primary mb-xs">Send Us a Message</h2>
                  <p className="text-sm text-text-muted mb-2xl">
                    Fill in the form below and our team will get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <FAQSection />

      {/* ==================== MAP ==================== */}
      <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-2xl">
              <span className="label">Find Us</span>
              <h2 className="text-3xl font-bold text-text-primary mt-sm">Our Location</h2>
            </div>
            <div className="rounded-lg overflow-hidden border border-border-glass h-[400px] relative group">
              {/* Pulsing pin marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-accent relative">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                </div>
              </div>
              {/* Glassmorphic tooltip */}
              <div className="absolute top-[calc(50%-52px)] left-1/2 -translate-x-1/2 z-[3] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                <div className="bg-bg-glass backdrop-blur-md border border-border-glass rounded-md px-md py-sm text-xs text-text-primary whitespace-nowrap shadow-lg">
                  📍 New Friends Colony, New Delhi
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8534893017254!2d77.26!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzM2LjAiTiA3N8KwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0 [filter:grayscale(0.3)_brightness(0.7)_contrast(1.1)]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cosmos Financial Group Office Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
