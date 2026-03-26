'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, Clock, Calendar } from 'lucide-react';

interface ClientSummaryProps {
  stats: {
    activeTasks: number;
    completedTasks: number;
    upcomingDeadlines: number;
    lastActivity: string;
  };
}

const ClientSummary: React.FC<ClientSummaryProps> = ({ stats }) => {
  const summaryItems = [
    {
      label: 'Active Tasks',
      value: stats.activeTasks,
      icon: <Clock className="text-amber-400" size={20} />,
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
    {
      label: 'Completed Tasks',
      value: stats.completedTasks,
      icon: <CheckCircle2 className="text-emerald-400" size={20} />,
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      label: 'Upcoming Deadlines',
      value: stats.upcomingDeadlines,
      icon: <AlertCircle className="text-rose-400" size={20} />,
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
    },
    {
      label: 'Last Activity',
      value: stats.lastActivity,
      icon: <Calendar className="text-indigo-400" size={20} />,
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 rounded-2xl border ${item.borderColor} ${item.bgColor} p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
            {item.icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-white tracking-tight">
              {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientSummary;
