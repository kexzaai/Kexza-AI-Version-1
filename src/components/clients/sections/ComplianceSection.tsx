'use client';

import React from 'react';
import { ShieldAlert, CheckCircle2, AlertCircle, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Deadline } from '@/services/dashboardService';

interface ComplianceSectionProps {
  deadlines: Deadline[];
}

const ComplianceSection: React.FC<ComplianceSectionProps> = ({ deadlines }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Compliance Tracker</h2>
        <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <ShieldAlert size={14} />
          All Current Filings Up to Date
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Deadlines */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="mb-4 flex items-center gap-2 font-medium text-white">
            <Calendar className="text-indigo-400" size={18} />
            Upcoming Deadlines
          </h3>
          <div className="space-y-4">
            {deadlines.length > 0 ? (
              deadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className={`flex items-center justify-between rounded-xl border p-4 transition-all ${
                    deadline.urgent
                      ? 'border-rose-500/20 bg-rose-500/5'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ${deadline.urgent ? 'text-rose-400' : 'text-gray-400'}`}>
                      {deadline.urgent ? <AlertCircle size={20} /> : <Calendar size={20} />}
                    </div>
                    <div>
                      <p className="font-medium text-white">{deadline.title}</p>
                      <p className="text-xs text-gray-400">{deadline.date}</p>
                    </div>
                  </div>
                  <button className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))
            ) : (
              <p className="py-8 text-center text-sm text-gray-500">No upcoming deadlines.</p>
            )}
          </div>
        </div>

        {/* Compliance History / Status */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="mb-4 flex items-center gap-2 font-medium text-white">
            <CheckCircle2 className="text-emerald-400" size={18} />
            Recent Filings
          </h3>
          <div className="space-y-4">
            {[
              { id: 1, title: 'GST GSTR-1', month: 'February 2026', status: 'Completed', date: 'Mar 10, 2026' },
              { id: 2, title: 'TDS Payment', month: 'February 2026', status: 'Completed', date: 'Mar 07, 2026' },
              { id: 3, title: 'Advance Tax', month: 'Q4 FY 2025-26', status: 'Completed', date: 'Mar 15, 2026' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.month}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-emerald-400 uppercase">{item.status}</p>
                  <p className="text-[10px] text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all">
            View All Filings
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;
