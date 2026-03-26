import React from 'react';
import { Check } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Link from 'next/link';

const PricingPreview = () => {
  return (
    <section id="pricing" className="section bg-white/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Simple, Scalable Pricing</h2>
          <p>Transparent plans for firms of all sizes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <GlassCard className="flex flex-col border-white">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-sm mb-4">Perfect for individual practitioners</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-gray-500">/ forever</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-green-500" /> Up to 50 Clients
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-green-500" /> Basic Workflow Tracking
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-green-500" /> Limited AI Clerk Access
              </li>
            </ul>
            
            <Link href="/signup" className="btn btn-secondary justify-center w-full">Start Free</Link>
          </GlassCard>

          {/* Paid Plan */}
          <GlassCard className="flex flex-col border-[var(--accent)] relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-sm mb-4">For growing firms needing full AEI power</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">₹2,499</span>
                <span className="text-gray-500">/ month</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-[var(--accent)]" /> Unlimited Clients
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-[var(--accent)]" /> Full AEI Engine Access
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-[var(--accent)]" /> Advanced Revenue Analytics
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-[var(--accent)]" /> Priority Team Support
              </li>
            </ul>
            
            <Link href="/signup" className="btn btn-primary justify-center w-full">Go Pro</Link>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
