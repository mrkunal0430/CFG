import styles from './page.module.css';
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
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} aria-hidden="true" />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="label">Get in Touch</span>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Ready to explore opportunities? Our team of experts is here 
            to help you navigate the world of global finance.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <AnimatedSection direction="left">
              <div className={styles.infoCol}>
                {contactInfo.map((info) => (
                  <div key={info.label} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div>
                      <p className={styles.infoLabel}>{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={styles.infoLink}
                          {...(info.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={styles.infoValue}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className={styles.formCol}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={`section ${styles.mapSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.mapWrapper}>
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
