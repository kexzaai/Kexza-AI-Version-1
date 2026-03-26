import React from 'react';
import { Check } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Link from 'next/link';

const PricingPreview = () => {
  return (
    <section id="pricing" className="section py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Simple, Scalable Pricing</h2>
          <p className="text-white/60">Transparent plans for firms of all sizes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <GlassCard className="flex flex-col border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
              <p className="text-sm mb-4 text-white/50">Perfect for individual practitioners</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">₹0</span>
                <span className="text-white/40 text-sm">/ forever</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check size={18} className="text-green-500" /> Up to 50 Clients
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check size={18} className="text-green-500" /> Basic Workflow Tracking
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check size={18} className="text-green-500" /> Limited AI Clerk Access
              </li>
            </ul>
            
            <Link href="/signup" className="btn bg-white/10 text-white hover:bg-white/20 justify-center w-full rounded-full transition-all">Start Free</Link>
          </GlassCard>

          {/* Paid Plan */}
          <GlassCard className="flex flex-col border-white/40 relative overflow-hidden bg-white/10 backdrop-blur-xl">
            <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
              <p className="text-sm mb-4 text-white/50">For growing firms needing full AEI power</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">₹2,499</span>
                <span className="text-white/40 text-sm">/ month</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Check size={18} className="text-white" /> Unlimited Clients
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Check size={18} className="text-white" /> Full AEI Engine Access
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Check size={18} className="text-white" /> Advanced Revenue Analytics
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Check size={18} className="text-white" /> Priority Team Support
              </li>
            </ul>
            
            <Link href="/signup" className="btn bg-white text-black hover:bg-white/90 justify-center w-full rounded-full font-bold transition-all transition-all">Go Pro</Link>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
