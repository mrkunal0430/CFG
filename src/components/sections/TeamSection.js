'use client';

import AnimatedSection from '@/components/AnimatedSection';
import styles from '../../app/page.module.css';

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
    <section className={`section ${styles.team}`} id="team">
      <div className="container">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Leadership</span>
            <h2 className={styles.sectionTitle}>Leading CXOs at Work</h2>
            <p className={styles.sectionSubtitle}>
              Our team is made up of experienced professionals who are dedicated 
              to providing exceptional service and delivering transformative results.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 100}>
              <div className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.initials}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
