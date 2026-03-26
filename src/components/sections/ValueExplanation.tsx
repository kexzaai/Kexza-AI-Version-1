import React from 'react';
import { ArrowRight, Clock, ShieldAlert, TrendingUp } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const ValueExplanation = () => {
  return (
    <section className="section bg-white/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Kexza AI Pays for Itself</h2>
          <p className="max-w-2xl mx-auto">The cost of a single missed deadline can exceed our annual subscription. Kexza AI doesn't just manage data—it guarantees execution.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="p-8 border-transparent bg-white shadow-sm">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">Zero Missed Deadlines</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Average CA firms lose ₹50k+ annually in GST/IT late fees and interest. AEI eliminates these omissions entirely.
            </p>
          </GlassCard>

          <GlassCard className="p-8 border-transparent bg-white shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">Save 20+ Hours/Week</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Automate repeat follow-ups and status checks. Let your staff focus on complex advisory, not manual tracking.
            </p>
          </GlassCard>

          <GlassCard className="p-8 border-transparent bg-white shadow-sm">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">Superior Scalability</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Manage 2x more clients with the same staff size. Professionalize your firm for high-value corporate clients.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ValueExplanation;
