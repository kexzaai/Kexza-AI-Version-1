import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const TrustAndCTA = () => {
  return (
    <>
      <section className="section bg-white">
        <div className="container text-center">
          <div className="flex flex-col items-center gap-6 mb-12">
            <ShieldCheck size={48} className="text-[var(--accent)] opacity-80" />
            <h2 className="max-w-2xl">Built for Indian CA Firms, <span>Designed for Real Compliance</span></h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-xl"><Globe size={24}/> ICAI Compliant Pro</div>
            <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck size={24}/> 256-bit Encrypted</div>
            <div className="flex items-center gap-2 font-bold text-xl"><ArrowRight size={24}/> MSME Verified</div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--accent-soft)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto glass p-12 border-white rounded-[32px] shadow-xl">
            <h2 className="mb-6">Ready to Lead with Execution Intelligence?</h2>
            <p className="mb-10 text-lg">Join hundreds of forward-thinking CA firms transforming their practice with Kexza AI.</p>
            <Link href="/signup" className="btn btn-primary px-10 py-5 text-xl rounded-full">
              Get Started for Free <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustAndCTA;
