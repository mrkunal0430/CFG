'use client';

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
    <section className="py-2xl bg-bg-secondary border-t border-b border-border-subtle relative overflow-hidden" id="trusted-by">
      <div className="container">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-text-muted mb-2xl before:content-[''] before:inline-block before:w-8 before:h-px before:bg-border-glass before:align-middle before:mx-md after:content-[''] after:inline-block after:w-8 after:h-px after:bg-border-glass after:align-middle after:mx-md">Trusted by Businesses Worldwide</p>
      </div>
      <div className="group relative overflow-visible w-full pt-6 pb-4 [mask-image:linear-gradient(to_right,transparent_0%,#000_12%,#000_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_12%,#000_88%,transparent_100%)]">
        <div className="flex items-center gap-2xl w-max animate-[trustedByScroll_36s_linear_infinite] group-hover:[animation-play-state:paused] max-[768px]:gap-lg max-[768px]:[animation-duration:22s]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 w-[130px] h-[76px] rounded-md bg-bg-tertiary bg-no-repeat bg-center [background-size:90%_auto] border border-border-glass overflow-hidden relative shadow-md opacity-85 transition-[transform,border-color,box-shadow,opacity] duration-350 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-accent hover:shadow-accent-intense hover:opacity-100 after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_40px_rgba(0,0,0,0.45)] after:pointer-events-none max-[768px]:w-[100px] max-[768px]:h-[60px]"
              style={{ backgroundImage: `url(${logo.src})` }}
              role="img"
              aria-label={logo.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
