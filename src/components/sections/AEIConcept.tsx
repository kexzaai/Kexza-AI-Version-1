import React from 'react';
import GlassCard from '../common/GlassCard';
import { Cpu, Zap, Radio } from 'lucide-react';

const AEIConcept = () => {
  return (
    <section className="section bg-white/5 backdrop-blur-3xl border-y border-white/10 text-white overflow-hidden relative">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-6">
            <Cpu size={14} />
            <span>Introducing Artificial Execution Intelligence</span>
          </div>
          <h2 className="mb-6 text-white text-4xl md:text-5xl">Moving Beyond Data Management</h2>
          <p className="text-white/80 text-lg mb-12">
            Most software manages data. Kexza AI manages <strong>execution</strong>. Our proprietary AEI engine understands CA workflows, tracks every micro-step, and ensures nothing falls through the cracks.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Zap size={20} />
              </div>
              <h4 className="font-bold text-xl mb-2">Real-time Assistance</h4>
              <p className="text-sm text-white/70">AEI identifies bottlenecks before they become delays, suggesting optimized staff assignments.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Radio size={20} />
              </div>
              <h4 className="font-bold text-xl mb-2">Execution Memory</h4>
              <p className="text-sm text-white/70">The system learns from every completed service, making your firm smarter with every filing.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 blur-[120px] -mr-64 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-5 blur-[120px] -ml-64 -mb-32" />
    </section>
  );
};

export default AEIConcept;
