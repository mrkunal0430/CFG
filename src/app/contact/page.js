import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Cosmos Financial Group. Visit our office in New Delhi, call our experts, or send us a message. We are here to help you grow.',
};

const contactInfo = [
  {
    icon: '📍',
    label: 'Office Address',
    value: 'New Friends Colony, New Delhi, Delhi, India',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    value: 'Monday — Friday, 09:00 AM — 05:00 PM IST',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'connect@cosmosfinancialgroup.com',
    href: 'mailto:connect@cosmosfinancialgroup.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    href: 'https://wa.me/919999999999',
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[calc(80px+6rem)] pb-4xl bg-[linear-gradient(160deg,#0a0e0a_0%,#0f1a0e_30%,#0a100a_60%,#0a0e0a_100%)] text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,168,76,0.06)_0%,transparent_60%)]"
          aria-hidden="true"
        />
        <div className="container relative z-[2]">
          <span className="label">Get in Touch</span>
          <h1 className="text-5xl font-extrabold text-text-primary mb-md leading-tight">Contact Us</h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
            Ready to explore opportunities? Our team of experts is here
            to help you navigate the world of global finance.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section bg-bg-primary">
        <div className="container">
          <div className="grid grid-cols-[1fr_1.2fr] gap-3xl max-[768px]:grid-cols-1">
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-2xl">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex gap-lg items-start p-xl bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-md transition-all duration-350 ease-out hover:border-warm-gold/25 hover:translate-x-1.5"
                  >
                    <div className="w-12 h-12 min-w-[48px] rounded-md bg-warm-gold/[0.08] border border-warm-gold/15 flex items-center justify-center text-lg text-warm-gold">{info.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary mb-xs">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-warm-gold transition-colors duration-200 hover:text-[#e8c876]"
                          {...(info.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-text-muted leading-normal">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-lg p-2xl">
                <h2 className="text-2xl font-bold text-text-primary mb-xs">Send Us a Message</h2>
                <p className="text-sm text-text-muted mb-2xl">
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]">
        <div className="container">
          <AnimatedSection>
            <div className="rounded-lg overflow-hidden border border-border-glass h-[400px] [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0 [&_iframe]:[filter:grayscale(0.3)_brightness(0.7)_contrast(1.1)]">
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
      </section>
    </>
  );
}
