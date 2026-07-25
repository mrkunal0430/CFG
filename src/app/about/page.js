import AnimatedSection from '@/components/AnimatedSection';
import CounterAnimation from '@/components/CounterAnimation';
import TimelineSection from '@/components/TimelineSection';
import Link from 'next/link';

export const metadata = {
  title: 'Our Story',
  description:
    'Discover the Cosmos Financial Group journey — nearly three decades of transforming global finance, creating lasting value, and pioneering innovation since 1995.',
};

const values = [
  {
    icon: '🎯',
    title: 'Mission',
    text: 'To bridge global capital markets with enterprise growth, delivering transformative financial solutions that create lasting value for all stakeholders.',
  },
  {
    icon: '🔭',
    title: 'Vision',
    text: 'To be the most trusted global investment banking partner for growth-stage corporations, pioneering innovation at the intersection of finance and technology.',
  },
  {
    icon: '💡',
    title: 'Values',
    text: 'Integrity, innovation, and impact. We operate with unwavering ethical standards while pushing the boundaries of what financial advisory can achieve.',
  },
];

const timeline = [
  {
    year: '1995',
    title: 'The Foundation',
    text: 'Cosmos Financial Group was established in New Delhi with a bold vision — to transform capital markets advisory in India and create a world-class investment banking institution.',
  },
  {
    year: '2002',
    title: 'Capital Advisory Launch',
    text: 'Expanded into full-spectrum capital advisory, helping enterprises raise growth capital, navigate IPOs, and structure complex transactions across sectors.',
  },
  {
    year: '2008',
    title: 'Global Expansion',
    text: 'Extended operations across Asia, the Middle East, and European markets through strategic partnerships and a deepening network of institutional relationships.',
  },
  {
    year: '2015',
    title: 'Invest-Tech Platform',
    text: 'Launched our proprietary technology platform, digitizing the investment banking experience and bringing data-driven precision to advisory services.',
  },
  {
    year: '2020',
    title: 'Aero Capital & Green Holdings',
    text: 'Diversified into aircraft leasing and sustainable investments, opening new frontiers in alternative asset classes and ESG-focused capital deployment.',
  },
  {
    year: '2024',
    title: 'IRA Score Launch',
    text: 'Introduced the AI-powered IPO Readiness Assessment Score — a global first in investment banking, revolutionizing how companies prepare for public markets.',
  },
];

const globalPresence = [
  {
    icon: '🇮🇳',
    title: 'India',
    text: 'Headquarters in New Delhi — the strategic hub for South Asian operations and CXO advisory.',
  },
  {
    icon: '🇦🇪',
    title: 'Middle East',
    text: 'Dubai & Abu Dhabi presence, serving sovereign wealth funds and high-growth enterprises.',
  },
  {
    icon: '🇬🇧',
    title: 'Europe',
    text: 'London-based operations bridging European capital markets with Asian growth stories.',
  },
  {
    icon: '🇸🇬',
    title: 'Southeast Asia',
    text: 'Singapore gateway for ASEAN market access and cross-border transaction advisory.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center bg-[linear-gradient(160deg,#0a0e0a_0%,#0f1a0e_30%,#0a100a_60%,#0a0e0a_100%)] text-center overflow-hidden max-[768px]:min-h-0 max-[768px]:py-[calc(80px+6rem)]">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(201,168,76,0.08)_0%,transparent_60%),radial-gradient(circle_at_20%_80%,rgba(201,168,76,0.04)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(201,168,76,0.03)_0%,transparent_35%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none animate-[meshRotate_30s_linear_infinite] bg-[conic-gradient(from_0deg_at_30%_40%,transparent_0%,rgba(201,168,76,0.03)_25%,transparent_50%),conic-gradient(from_180deg_at_70%_60%,transparent_0%,rgba(201,168,76,0.02)_25%,transparent_50%)]"
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full blur-[80px] pointer-events-none animate-[orbFloat_15s_ease-in-out_infinite] w-[400px] h-[400px] bg-warm-gold/[0.06] -top-[10%] -right-[5%]"
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full blur-[80px] pointer-events-none animate-[orbFloat_18s_ease-in-out_infinite] w-[300px] h-[300px] bg-warm-gold/[0.04] -bottom-[5%] -left-[5%] [animation-delay:-5s]"
          aria-hidden="true"
        />
        <div
          className="absolute rounded-full blur-[80px] pointer-events-none animate-[orbFloat_12s_ease-in-out_infinite] w-[200px] h-[200px] bg-warm-gold/[0.05] top-[40%] left-[20%] [animation-delay:-8s]"
          aria-hidden="true"
        />

        <div className="container relative z-[2] pt-[80px]">
          <div className="inline-flex items-center gap-sm mb-xl animate-[fadeInUp_0.8s_var(--ease-out)_both]">
            <span className="w-10 h-px bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] opacity-60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-warm-gold">About Cosmos Financial Group</span>
            <span className="w-10 h-px bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] opacity-60" aria-hidden="true" />
          </div>

          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold text-text-primary mb-lg leading-[1.05] tracking-tight animate-[fadeInUp_0.8s_var(--ease-out)_0.15s_both] max-[480px]:text-3xl">
            Nearly Three Decades of<br />
            <span className="relative inline-block bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] after:opacity-40 after:rounded-full">
              Shaping Global Finance
            </span>
          </h1>

          <p className="text-lg text-text-secondary max-w-[640px] mx-auto mb-2xl leading-relaxed animate-[fadeInUp_0.8s_var(--ease-out)_0.3s_both]">
            From a boutique advisory firm in New Delhi to a global investment
            banking powerhouse — our story is one of relentless innovation,
            deep expertise, and an unwavering commitment to creating value.
          </p>

          <div className="flex justify-center gap-3xl animate-[fadeInUp_0.8s_var(--ease-out)_0.45s_both] max-[768px]:flex-col max-[768px]:gap-xl">
            <div className="text-center relative max-[768px]:after:hidden after:content-[''] after:absolute after:right-[-2rem] after:top-1/2 after:-translate-y-1/2 after:w-px after:h-10 after:bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.3),transparent)] last:after:hidden">
              <div className="text-4xl font-extrabold bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent leading-[1.2]">
                <CounterAnimation end={29} suffix="+" />
              </div>
              <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">Years of Excellence</span>
            </div>
            <div className="text-center relative after:content-[''] after:absolute after:right-[-2rem] after:top-1/2 after:-translate-y-1/2 after:w-px after:h-10 after:bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.3),transparent)] max-[768px]:after:hidden">
              <div className="text-4xl font-extrabold bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent leading-[1.2]">
                <CounterAnimation end={500} suffix="+" />
              </div>
              <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">Clients Served</span>
            </div>
            <div className="text-center relative after:content-[''] after:absolute after:right-[-2rem] after:top-1/2 after:-translate-y-1/2 after:w-px after:h-10 after:bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.3),transparent)] max-[768px]:after:hidden">
              <div className="text-4xl font-extrabold bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent leading-[1.2]">
                <CounterAnimation end={15} suffix="+" />
              </div>
              <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">Countries</span>
            </div>
            <div className="text-center relative">
              <div className="text-4xl font-extrabold bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent leading-[1.2]">
                $<CounterAnimation end={2} suffix="B+" />
              </div>
              <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">Capital Deployed</span>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-xs animate-[fadeInUp_0.8s_var(--ease-out)_0.6s_both] cursor-pointer z-[2]"
          aria-hidden="true"
        >
         </div>
      </section>

      {/* ==================== NARRATIVE ==================== */}
      <section className="section relative overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_0%_50%,rgba(201,168,76,0.03)_0%,transparent_50%)]" aria-hidden="true" />
        <div className="container">
          <div className="grid grid-cols-2 gap-4xl items-center relative z-[1] max-[768px]:grid-cols-1 max-[768px]:gap-2xl">
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-lg">
                <div className="inline-flex items-center gap-sm">
                  <span className="w-2 h-2 rounded-full bg-warm-gold shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
                  <span className="label">Our Beginning</span>
                </div>

                <h2 className="text-4xl font-bold text-text-primary leading-snug tracking-tight">
                  Building Bridges Between Capital & Ambition
                </h2>

                <div className="w-[60px] h-[3px] bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] rounded-full" />

                <p className="text-base text-text-secondary leading-relaxed">
                  At Cosmos Financial Group, we work closely with companies to
                  understand their capital goals. Bridging the gap with our
                  state-of-the-art CXO advisory, our core strength lies in
                  identification of <span className="text-warm-gold font-semibold">investment opportunities</span> and
                  creating value for stakeholders across the globe.
                </p>

                <p className="text-base text-text-secondary leading-relaxed">
                  What started as a boutique advisory firm in New Delhi has grown
                  into a global investment banking group with operations spanning
                  Asia, the Middle East, and Europe. Our journey is defined by
                  relentless innovation, deep market expertise, and an unwavering
                  commitment to <span className="text-warm-gold font-semibold">unlocking enterprise value</span>.
                </p>

                <blockquote className="mt-md p-xl bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass border-l-[3px] border-l-warm-gold rounded-r-md italic text-text-secondary leading-relaxed relative before:content-['\201C'] before:absolute before:-top-2.5 before:left-4 before:font-serif before:text-6xl before:text-warm-gold before:opacity-20 before:leading-none">
                  We don&apos;t just advise — we partner with visionary leaders
                  to build enterprises that define industries and transcend borders.
                </blockquote>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-lg">
                <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg p-2xl text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/35 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(201,168,76,0.12)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.05)_0%,transparent_60%)]">
                  <CounterAnimation end={29} suffix="+" className="heading-lg text-gradient" />
                  <p className="text-xs text-text-muted mt-1.5">Years of Excellence</p>
                </div>
                <div className="grid grid-cols-2 gap-lg max-[768px]:grid-cols-1">
                  <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-xl px-lg text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/30 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(201,168,76,0.12)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] after:scale-x-0 after:transition-transform after:duration-350 after:ease-out hover:after:scale-x-100">
                    <CounterAnimation end={500} suffix="+" className="heading-sm text-gradient" />
                    <p className="text-xs text-text-muted mt-1.5">Clients Served</p>
                  </div>
                  <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-xl px-lg text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/30 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(201,168,76,0.12)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] after:scale-x-0 after:transition-transform after:duration-350 after:ease-out hover:after:scale-x-100">
                    <CounterAnimation end={15} suffix="+" className="heading-sm text-gradient" />
                    <p className="text-xs text-text-muted mt-1.5">Countries</p>
                  </div>
                  <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-xl px-lg text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/30 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(201,168,76,0.12)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] after:scale-x-0 after:transition-transform after:duration-350 after:ease-out hover:after:scale-x-100">
                    <CounterAnimation end={50} suffix="+" className="heading-sm text-gradient" />
                    <p className="text-xs text-text-muted mt-1.5">Team Members</p>
                  </div>
                  <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-xl px-lg text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/30 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(201,168,76,0.12)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] after:scale-x-0 after:transition-transform after:duration-350 after:ease-out hover:after:scale-x-100">
                    <CounterAnimation end={200} suffix="+" className="heading-sm text-gradient" />
                    <p className="text-xs text-text-muted mt-1.5">Deals Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== LEADERSHIP QUOTE ==================== */}
      <section className="section relative overflow-hidden bg-bg-primary">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.04)_0%,transparent_40%),radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.03)_0%,transparent_40%)]"
          aria-hidden="true"
        />
        <div className="container">
          <AnimatedSection direction="scale">
            <div className="relative z-[1] max-w-[900px] mx-auto text-center">
              <div className="bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-xl py-4xl px-3xl relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.05)_0%,transparent_50%)] max-[768px]:py-2xl max-[768px]:px-xl">
                <span className="font-serif text-[6rem] leading-[0.8] bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent opacity-25 block mb-md relative z-[1]">
                  &ldquo;
                </span>
                <p className="font-serif text-2xl text-text-primary leading-relaxed italic mb-2xl relative z-[1] max-[768px]:text-lg">
                  We believe that every enterprise holds the potential to
                  redefine its industry. Our role is to unlock that potential
                  through strategic capital solutions, unwavering integrity,
                  and a partnership built on trust.
                </p>
                <div className="flex flex-col items-center gap-xs relative z-[1]">
                  <span className="text-base font-semibold text-warm-gold tracking-wide">Leadership Team</span>
                  <span className="text-sm text-text-muted">Cosmos Financial Group</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== PHILOSOPHY / VALUES ==================== */}
      <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.04)_0%,transparent_40%),radial-gradient(circle_at_20%_80%,rgba(201,168,76,0.03)_0%,transparent_40%)]"
          aria-hidden="true"
        />
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-[700px] mx-auto mb-4xl relative z-[1]">
              <div className="inline-flex items-center gap-sm mb-lg">
                <span className="w-6 h-px bg-warm-gold opacity-50" />
                <span className="label">What Drives Us</span>
                <span className="w-6 h-px bg-warm-gold opacity-50" />
              </div>
              <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight tracking-tight">
                Mission, Vision & Values
              </h2>
              <p className="text-base text-text-muted leading-relaxed">
                The principles that guide every decision, every relationship,
                and every transaction across our global operations.
              </p>
              <div className="w-[60px] h-[3px] bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] rounded-full mt-lg mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-3 gap-xl relative z-[1] max-[768px]:grid-cols-1">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-lg py-2xl px-xl text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/35 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.06)_0%,transparent_60%)] after:opacity-0 after:transition-opacity after:duration-350 after:ease-out hover:after:opacity-100">
                  <div className="w-[72px] h-[72px] rounded-lg bg-warm-gold/[0.08] border border-warm-gold/15 flex items-center justify-center mx-auto mb-lg text-3xl transition-all duration-350 ease-out relative z-[1] group-hover:bg-warm-gold/[0.12] group-hover:border-warm-gold/30 group-hover:scale-[1.08] group-hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-md relative z-[1]">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-[1]">{value.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="section relative overflow-hidden bg-bg-primary">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.04)_0%,transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(201,168,76,0.03)_0%,transparent_50%)]"
          aria-hidden="true"
        />
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-[700px] mx-auto mb-4xl relative z-[1]">
              <div className="inline-flex items-center gap-sm mb-lg">
                <span className="w-6 h-px bg-warm-gold opacity-50" />
                <span className="label">Our Journey</span>
                <span className="w-6 h-px bg-warm-gold opacity-50" />
              </div>
              <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight tracking-tight">
                Milestones That Define Us
              </h2>
              <p className="text-base text-text-muted leading-relaxed">
                From foundation to frontier — key moments that have shaped
                Cosmos Financial Group into a global force.
              </p>
              <div className="w-[60px] h-[3px] bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] rounded-full mt-lg mx-auto" />
            </div>
          </AnimatedSection>

          <TimelineSection timeline={timeline} />
        </div>
      </section>

      {/* ==================== GLOBAL PRESENCE ==================== */}
      <section className="section relative overflow-hidden py-4xl bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.04)_0%,transparent_50%)]" aria-hidden="true" />
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-[700px] mx-auto mb-4xl relative z-[1]">
              <div className="inline-flex items-center gap-sm mb-lg">
                <span className="w-6 h-px bg-warm-gold opacity-50" />
                <span className="label">Global Footprint</span>
                <span className="w-6 h-px bg-warm-gold opacity-50" />
              </div>
              <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight tracking-tight">
                Where We Operate
              </h2>
              <p className="text-base text-text-muted leading-relaxed">
                Our strategically positioned offices enable us to serve clients
                across continents with local expertise and global perspective.
              </p>
              <div className="w-[60px] h-[3px] bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] rounded-full mt-lg mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-4 gap-xl relative z-[1] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {globalPresence.map((region, index) => (
              <AnimatedSection key={region.title} delay={index * 120}>
                <div className="group bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] border border-border-glass rounded-lg py-2xl px-xl text-center transition-all duration-350 ease-out relative overflow-hidden hover:border-warm-gold/30 hover:-translate-y-1.5 hover:shadow-[0_4px_30px_rgba(201,168,76,0.12)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.06)_0%,transparent_60%)] before:opacity-0 before:transition-opacity before:duration-350 before:ease-out hover:before:opacity-100">
                  <span className="text-3xl mb-md block relative z-[1]">{region.icon}</span>
                  <h3 className="text-lg font-semibold text-text-primary mb-sm relative z-[1]">{region.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed relative z-[1]">{region.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section relative overflow-hidden bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.06)_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container">
          <AnimatedSection direction="scale">
            <div className="relative z-[1] text-center max-w-[800px] mx-auto">
              <h2 className="text-4xl font-bold text-text-primary mb-lg leading-snug">
                Ready to Write the Next Chapter?
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-2xl">
                Whether you&apos;re seeking capital advisory, exploring
                strategic partnerships, or preparing for an IPO — let&apos;s
                build something extraordinary together.
              </p>
              <div className="flex justify-center gap-lg flex-wrap max-[768px]:flex-col max-[768px]:items-center">
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
