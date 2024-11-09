import React from 'react';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import PromoBanner from './components/PromoBanner';
import PremiumBasmatiSection from './components/PremiumBasmatiSection';

const HomePage: React.FC = () => {
  return (
    <>
     <PromoBanner />
      
      <PremiumBasmatiSection />
      <HeroSection />
      {/* Add more sections here */}
      <ContactSection />
    </>
  );
};

export default HomePage;
