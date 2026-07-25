'use client';

import AnimatedSection from '@/components/AnimatedSection';

const team = [
  {
    initials: '👤',
    name: 'Rajesh Mehta',
    role: 'Chairman & CEO',
    bio: 'Three decades of experience in global investment banking and capital markets strategy.',
  },
  {
    initials: '👤',
    name: 'Priya Sharma',
    role: 'Chief Strategy Officer',
    bio: 'Expert in corporate restructuring and cross-border M&A advisory for growth-stage enterprises.',
  },
  {
    initials: '👤',
    name: 'Arjun Kapoor',
    role: 'Head of Technology',
    bio: 'Leads our invest-tech platform development with 20+ years in fintech and AI solutions.',
  },
  {
    initials: '👤',
    name: 'Anita Desai',
    role: 'Director, Green Holdings',
    bio: 'Pioneering sustainable investment strategies and green energy financing solutions.',
  },
];

export default function TeamSection() {
  return (
    <section className="section bg-[linear-gradient(180deg,#0a0e0a_0%,#0f1410_50%,#0a0e0a_100%)]" id="team">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-[700px] mx-auto mb-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-md">Leadership</span>
            <h2 className="text-4xl font-bold text-text-primary mb-md leading-tight">Leading CXOs at Work</h2>
            <p className="text-base text-text-muted leading-normal">
              Our team is made up of experienced professionals who are dedicated
              to providing exceptional service and delivering transformative results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-4 gap-xl max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 100}>
              <div className="glass-card text-center flex flex-col items-center gap-sm">
                <div className="w-16 h-16 rounded-full bg-accent-muted border border-accent/[0.12] flex items-center justify-center text-3xl mb-sm">{member.initials}</div>
                <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide">{member.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
