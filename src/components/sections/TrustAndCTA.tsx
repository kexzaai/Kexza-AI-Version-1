import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const TrustAndCTA = () => {
  return (
    <>
      <section className="section py-32">
        <div className="container text-center">
          <div className="flex flex-col items-center gap-6 mb-12">
            <ShieldCheck size={48} className="text-white opacity-80" />
            <h2 className="max-w-2xl text-white">Built for Indian CA Firms, <span className="opacity-50">Designed for Real Compliance</span></h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-white/40">
            <div className="flex items-center gap-2 font-bold text-xl"><Globe size={24}/> ICAI Compliant Pro</div>
            <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck size={24}/> 256-bit Encrypted</div>
            <div className="flex items-center gap-2 font-bold text-xl"><ArrowRight size={24}/> MSME Verified</div>
          </div>
        </div>
      </section>

      <section className="section pb-40">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl p-16 border border-white/10 rounded-[60px] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
            <h2 className="mb-6 text-white relative z-10">Ready to Lead with Execution Intelligence?</h2>
            <p className="mb-10 text-lg text-white/60 relative z-10">Join hundreds of forward-thinking CA firms transforming their practice with Kexza AI.</p>
            <Link href="/signup" className="bg-white text-black px-12 py-5 text-xl rounded-full font-bold hover:scale-105 transition-all shadow-xl relative z-10 inline-flex items-center gap-2">
              Get Started for Free <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustAndCTA;
