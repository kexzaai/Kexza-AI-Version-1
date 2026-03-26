import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/sections/PricingHero';
import PricingPlans from '@/components/sections/PricingPlans';
import ValueExplanation from '@/components/sections/ValueExplanation';
import FeatureComparison from '@/components/sections/FeatureComparison';
import PricingFAQ from '@/components/sections/PricingFAQ';
import TrustAndCTA from '@/components/sections/TrustAndCTA';

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <ValueExplanation />
      <FeatureComparison />
      <PricingFAQ />
      <TrustAndCTA />
      <Footer />
    </main>
  );
}
