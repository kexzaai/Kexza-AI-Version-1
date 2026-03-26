import React from 'react';
import GlassCard from '../common/GlassCard';

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Sign Up & Verify", desc: "Create your firm account and verify your email to secure your data." },
    { number: "02", title: "Setup Firm Profile", desc: "Add your team, set department structures, and define your services." },
    { number: "03", title: "Import Clients", desc: "Easily upload client data or import from existing spreadsheets." },
    { number: "04", title: "Enable AEI", desc: "Start managing workflows with AI assistance and real-time execution tracking." },
  ];

  return (
    <section id="how-it-works" className="section relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get Started in Minutes</h2>
          <p>Simple onboarding designed for busy CA firms.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold opacity-10 mb-[-24px] ml-[-8px] text-[var(--accent)]">{s.number}</div>
              <div className="relative z-10 px-2">
                <h4 className="font-bold text-xl mb-3">{s.title}</h4>
                <p className="text-sm">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[24px] left-[100%] w-full border-t-2 border-dashed border-[var(--accent-soft)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
