import Link from 'next/link';
import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PillarsSection from '@/components/sections/PillarsSection';
import GrowthSection from '@/components/sections/GrowthSection';
import OfferingsSection from '@/components/sections/OfferingsSection';
import IraSection from '@/components/sections/IraSection';
import TeamSection from '@/components/sections/TeamSection';
import UpdatesSection from '@/components/sections/UpdatesSection';
import EventsSection from '@/components/sections/EventsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <GrowthSection />
      <OfferingsSection />
      <IraSection />
      <TeamSection />
      <UpdatesSection />
      <EventsSection />
      <ContactSection />
    </>
  );
}
