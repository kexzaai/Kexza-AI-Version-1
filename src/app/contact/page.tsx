import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/sections/ContactHero';
import ContactOptions from '@/components/sections/ContactOptions';
import ContactForm from '@/components/sections/ContactForm';
import SupportHelp from '@/components/sections/SupportHelp';
import FAQ from '@/components/sections/FAQ';
import ContactTrustSignals from '@/components/sections/ContactTrustSignals';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata = {
  title: 'Contact & Support | Kexza AI',
  description: 'Get in touch with Kexza AI support team. We are here to help your CA firm with any questions or technical assistance.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Options Grid */}
      <ContactOptions />
      
      {/* Trust Signals Strip */}
      <ContactTrustSignals />
      
      {/* Main Form Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-40 -z-10" />
        <div className="absolute bottom-1/4 right-[-5%] w-80 h-80 bg-[var(--accent-soft)] rounded-full blur-[100px] opacity-40 -z-10" />
      </section>
      
      {/* Help Resources */}
      <SupportHelp />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Final CTA */}
      <ContactCTA />
      
      <Footer />
    </main>
  );
}
