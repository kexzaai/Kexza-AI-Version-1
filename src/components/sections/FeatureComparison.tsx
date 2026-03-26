import React from 'react';
import { Check, Minus } from 'lucide-react';

const FeatureComparison = () => {
  const features = [
    { name: "Client Database (CRM)", starter: "50 Clients", pro: "Unlimited" },
    { name: "Task & Workflow Mgmt", starter: "Basic", pro: "Advanced (Custom)" },
    { name: "Statutory Deadline Tracker", starter: "No", pro: "Yes (Automatic)" },
    { name: "AI Digital Clerk", starter: "Limited", pro: "Unlimited" },
    { name: "Email Automation", starter: "No", pro: "Yes" },
    { name: "Document Vault (Cloud)", starter: "No", pro: "Yes (5GB Included)" },
    { name: "Revenue Analytics", starter: "Basic", pro: "Full Dashboard" },
    { name: "Team Management", starter: "Up to 3 staff", pro: "Unlimited" },
    { name: "Support", starter: "Email", pro: "Priority 24/7" },
  ];

  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">Plan Comparison</h2>
          <p>A detailed look at what powers your firm.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-6 font-bold text-gray-400 text-sm uppercase">Feature</th>
                <th className="py-6 font-bold px-6">Starter</th>
                <th className="py-6 font-bold px-6 text-[var(--accent)]">Professional</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 text-sm font-medium">{f.name}</td>
                  <td className="py-5 px-6 text-sm text-gray-500">{f.starter}</td>
                  <td className="py-5 px-6 text-sm font-semibold">{f.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
