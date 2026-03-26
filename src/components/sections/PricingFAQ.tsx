"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const PricingFAQ = () => {
  const faqs = [
    {
      q: "Is the Free plan really free forever?",
      a: "Yes. Our Starter plan is designed for individual practitioners or very small firms. You can manage up to 50 clients forever without paying a rupee."
    },
    {
      q: "Can I upgrade from Starter to Pro later?",
      a: "Absolutely. All your data will seamlessly migrate to the Professional plan. You can upgrade any time from your dashboard."
    },
    {
      q: "Is our firm data secure?",
      a: "Security is our top priority. We use 256-bit encryption and secure Indian data centers compliant with professional auditing standards."
    },
    {
      q: "What happens if I cancel my Pro subscription?",
      a: "You can cancel anytime. Your account will revert to the Starter plan (subject to client limits), and your data remains exportable."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-[var(--background)]">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">Common Questions</h2>
          <p>Everything you need to know about Kexza AI pricing.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 last:border-0">
              <button 
                className="w-full flex items-center justify-between py-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openIndex === i && (
                <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
