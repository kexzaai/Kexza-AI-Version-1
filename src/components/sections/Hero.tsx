import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const Hero = () => {
  return (
    <section className="section pt-40 pb-24 overflow-hidden relative">
      <div className="container text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass bg-white/10 text-sm font-bold mb-10 animate-fade-in shadow-xl hover:scale-105 transition-all cursor-default">
          <CheckCircle2 size={16} className="text-[var(--accent)]" />
          <span className="opacity-80 uppercase tracking-widest text-[10px]">Strategic Execution Intelligence</span>
        </div>
        
        <h1 className="mb-8 max-w-5xl mx-auto tracking-[-0.05em] text-7xl md:text-[120px] font-black leading-[0.85] text-white">
          Gradient <br/>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Perfection.</span>
        </h1>
        
        <p className="max-w-3xl mx-auto mb-16 text-xl md:text-2xl font-bold opacity-50 leading-tight">
          Create stunning user interfaces with vibrant <br/> high-resolution backgrounds.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32">
          <Link href="/signup" className="btn liquid-glass px-12 py-6 text-2xl font-black w-full sm:w-auto justify-center shadow-2xl tap-active bg-white text-black border-none hover:scale-105 active:scale-95 transition-all">
            Use Now
          </Link>
        </div>

        <div className="relative group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <GlassCard className="max-w-6xl mx-auto aspect-[16/9] flex items-center justify-center overflow-hidden liquid-glass border-white/30 shadow-2xl transform transition-all duration-700 group-hover:scale-[1.01]">
            <div className="text-center p-20">
              <div className="w-24 h-24 liquid-glass bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse shadow-inner">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-2xl animate-spin-slow opacity-20" />
                <div className="absolute w-8 h-8 bg-[var(--accent)] rounded-full blur-[2px]" />
              </div>
              <h3 className="text-4xl font-black mb-4 tracking-tight">Kexza Engine v2.6</h3>
              <p className="text-lg font-bold opacity-50 tracking-wider uppercase">Refractive Fluid Dynamics Active</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
