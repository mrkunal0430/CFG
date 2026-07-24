'use client';

import Image from 'next/image';
import styles from '../../app/page.module.css';

const logos = [
  { name: 'TATA', src: '/images/logos/tata.png' },
  { name: 'Mahindra', src: '/images/logos/mahindra.png' },
  { name: 'Adani', src: '/images/logos/adani.png' },
  { name: 'Reliance', src: '/images/logos/reliance.png' },
  { name: 'Vedanta', src: '/images/logos/vedanta.png' },
  { name: 'JSW', src: '/images/logos/jsw.png' },
  { name: 'HDFC Bank', src: '/images/logos/hdfc.png' },
];

export default function TrustedBySection() {
  return (
    <section className={styles.trustedBy} id="trusted-by">
      <div className="container">
        <p className={styles.trustedByLabel}>Trusted by Businesses Worldwide</p>
        <div className={styles.trustedByTrack}>
          {logos.map((logo) => (
            <div key={logo.name} className={styles.trustedByLogo}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className={styles.trustedByLogoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
