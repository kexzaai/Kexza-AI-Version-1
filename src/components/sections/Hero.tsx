import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const Hero = () => {
  return (
    <section className="section pt-32 pb-20 overflow-hidden">
      <div className="container text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-semibold mb-6 animate-fade-in">
          <CheckCircle2 size={14} />
          <span>The #1 Execution Intelligence Platform for CAs</span>
        </div>
        
        <h1 className="mb-6 max-w-4xl mx-auto tracking-tight">
          Transform Your CA Firm with <span className="text-[var(--accent)]">Execution Intelligence</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl">
          Kexza AI brings workflow clarity, deadline precision, and AI-assisted execution to Indian CA firms. Stop managing data, start mastering execution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="btn btn-primary px-8 py-4 text-lg w-full sm:w-auto justify-center">
            Get Started <ArrowRight size={20} />
          </Link>
          <Link href="/login" className="btn btn-secondary px-8 py-4 text-lg w-full sm:w-auto justify-center">
            Login to Dashboard
          </Link>
        </div>

        <div className="mt-20 relative px-4">
          <GlassCard className="max-w-5xl mx-auto aspect-video flex items-center justify-center overflow-hidden border-2 border-white/50 shadow-2xl">
            <div className="text-center p-12">
              <div className="w-16 h-16 bg-[var(--accent-soft)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[var(--accent)] rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">AEI Dashboard Preview</h3>
              <p className="text-sm">Real-time execution metrics & staff workflows</p>
            </div>
            {/* Visual elements for decorative purposes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)] opacity-5 blur-[100px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--accent)] opacity-5 blur-[100px]" />
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
