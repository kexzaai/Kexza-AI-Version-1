import React from 'react';
import { Check } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Link from 'next/link';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      period: "/ forever",
      desc: "Perfect for individual practitioners starting their digital journey.",
      features: [
        "Up to 50 Clients",
        "Basic Task Management",
        "Standard Compliance Dashboard",
        "Limited AI Clerk Access",
        "Email Support"
      ],
      cta: "Start Free",
      highlight: false
    },
    {
      name: "Professional",
      price: "2,499",
      period: "/ month",
      desc: "For growing firms needing full AEI power and advanced tracking.",
      features: [
        "Unlimited Clients",
        "Advanced Workflow Engine",
        "Automated Deadline Tracking",
        "Full AI Digital Clerk Access",
        "Document Vault System",
        "Priority 24/7 Support"
      ],
      cta: "Upgrade Now",
      highlight: true
    }
  ];

  return (
    <section className="section pb-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <GlassCard key={i} className={`flex flex-col p-10 h-full transition-all duration-300 ${plan.highlight ? 'border-[var(--accent)] ring-1 ring-[var(--accent)] bg-white relative' : 'border-white bg-white/40'}`}>
              {plan.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-[var(--accent)] text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">₹{plan.price}</span>
                  <span className="text-gray-400 font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className={`mt-0.5 rounded-full p-0.5 ${plan.highlight ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'bg-gray-100 text-gray-400'}`}>
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href="/signup" 
                className={`btn w-full justify-center py-4 text-base font-bold shadow-sm ${plan.highlight ? 'btn-primary shadow-blue-500/20' : 'btn-secondary'}`}
              >
                {plan.cta}
              </Link>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Prices are excluding GST. Custom plans available for large firms (100+ staff).</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
