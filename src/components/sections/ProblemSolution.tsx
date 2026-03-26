import React from 'react';
import { AlertCircle, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const ProblemSolution = () => {
  const problems = [
    { icon: <Clock className="text-red-500" />, title: "Missed Deadlines", desc: "Missing critical GST/Income Tax filings leading to heavy penalties." },
    { icon: <Users className="text-red-500" />, title: "Communication Gaps", desc: "Client requests getting lost in email chains and WhatsApp groups." },
    { icon: <AlertCircle className="text-red-500" />, title: "No Staff Visibility", desc: "Uncertainty about which staff member is working on what task." },
  ];

  const solutions = [
    { icon: <CheckCircle className="text-green-500" />, title: "Automated Tracking", desc: "Real-time deadline monitoring and automated reminders." },
    { icon: <Zap className="text-green-500" />, title: "Workstream Clarity", desc: "Unified dashboards for all client interactions and task status." },
    { icon: <Users className="text-green-500" />, title: "Staff Accountability", desc: "Detailed execution logs and staff workload management." },
  ];

  return (
    <section className="section bg-white/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problem Section */}
          <div id="problem">
            <h2 className="mb-8 text-red-600/80">The Real Struggles of CA Firms</h2>
            <div className="flex flex-col gap-6">
              {problems.map((p, i) => (
                <GlassCard key={i} className="flex gap-4 p-6 border-transparent bg-red-50/30">
                  <div className="mt-1">{p.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                    <p className="text-sm">{p.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Solution Section */}
          <div id="solution">
            <h2 className="mb-8 text-[var(--accent)]">The Kexza AI Advantage</h2>
            <div className="flex flex-col gap-6">
              {solutions.map((s, i) => (
                <GlassCard key={i} className="flex gap-4 p-6 border-transparent bg-blue-50/30">
                  <div className="mt-1">{s.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{s.title}</h4>
                    <p className="text-sm">{s.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
