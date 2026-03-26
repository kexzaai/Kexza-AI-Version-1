import React from 'react';
import { Briefcase, Calendar, Cpu, FileText, Layout, Users } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const Features = () => {
  const features = [
    { icon: <Users size={32} />, title: "Client CRM", desc: "Centralized client database with history, services, and compliance status." },
    { icon: <Layout size={32} />, title: "Task & Workflow", desc: "Design custom service workflows that staff can follow with zero confusion." },
    { icon: <Calendar size={32} />, title: "Deadline Tracking", desc: "Automatic population of statutory deadlines based on client type." },
    { icon: <Cpu size={32} />, title: "AI Digital Clerk", desc: "AI assistant that helps draft emails, summarize filings, and respond to queries." },
    { icon: <FileText size={32} />, title: "Document Vault", desc: "Secure cloud storage for client documents with intelligent folder structure." },
    { icon: <Briefcase size={32} />, title: "Revenue Analytics", desc: "Track billing, outstanding payments, and staff profitability in one view." },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Everything You Need to Scale</h2>
          <p className="max-w-2xl mx-auto">Powerful features designed specifically for the unique needs of Indian Chartered Accountants.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <GlassCard key={i} className="hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-[var(--accent)] mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
