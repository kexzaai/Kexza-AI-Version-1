import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import AEIConcept from '@/components/sections/AEIConcept';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import PricingPreview from '@/components/sections/PricingPreview';
import TrustAndCTA from '@/components/sections/TrustAndCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <AEIConcept />
      <Features />
      <HowItWorks />
      <PricingPreview />
      <TrustAndCTA />
      <Footer />
    </main>
  );
}
