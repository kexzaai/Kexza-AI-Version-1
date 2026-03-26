import React from 'react';
import { ShieldCheck, Globe, Users, Trophy } from 'lucide-react';

const ContactTrustSignals = () => {
  const highlights = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Trusted by 500+ CA firms across India"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "Enterprise-grade data security"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Dedicated account managers"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      text: "Voted #1 for Support Excellence 2024"
    }
  ];

  return (
    <section className="py-16 border-y border-[var(--border)] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-gray-400 font-medium group transition-all"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)] transition-all">
                {highlight.icon}
              </div>
              <span className="text-sm leading-tight group-hover:text-gray-600 transition-colors">
                {highlight.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactTrustSignals;
