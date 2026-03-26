import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] rounded-[40px] md:rounded-[60px] relative overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-12 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.5)]">
        {/* Card Background Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8000ff] via-[#4000ff] to-[#ff4000] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10 animate-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-white text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
            Kexza AI -<br/>
            For CA Firms
          </h1>
          
          <p className="text-white/80 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            India's First AET
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/services" className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
              Our services
            </Link>
            <Link href="/blog" className="text-white flex items-center gap-2 font-bold text-lg group hover:opacity-80 transition-all">
              Read our blog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Brand mark/logo placeholder at bottom right like in image */}
        <div className="absolute bottom-8 right-12 opacity-30 text-white font-bold tracking-tighter text-xs">
          KEXZA AI
        </div>
      </div>
    </section>
  );
};

export default Hero;
