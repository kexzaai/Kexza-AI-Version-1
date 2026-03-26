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
          Kexza AI -<br/>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-6xl md:text-[100px]">For CA firms</span>
        </h1>
        
        <p className="max-w-3xl mx-auto mb-16 text-xl md:text-2xl font-bold opacity-50 leading-tight">
          Create stunning user interfaces with vibrant <br/> high-resolution backgrounds.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32">
          <Link href="/signup" className="btn liquid-glass px-12 py-6 text-2xl font-black w-full sm:w-auto justify-center shadow-2xl tap-active bg-white text-black border-none hover:scale-105 active:scale-95 transition-all">
            Use Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
