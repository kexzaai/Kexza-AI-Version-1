'use client';

import React from 'react';
import { LayoutDashboard, CheckSquare, FileText, ShieldAlert, BadgeInfo } from 'lucide-react';

export type ClientTab = 'overview' | 'tasks' | 'documents' | 'compliance' | 'notes';

interface ClientTabsProps {
  activeTab: ClientTab;
  onTabChange: (tab: ClientTab) => void;
}

const ClientTabs: React.FC<ClientTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: ClientTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
    { id: 'tasks', label: 'Tasks', icon: <CheckSquare size={18} /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={18} /> },
    { id: 'compliance', label: 'Compliance', icon: <ShieldAlert size={18} /> },
    { id: 'notes', label: 'Notes', icon: <BadgeInfo size={18} /> },
  ];

  return (
    <div className="flex border-b border-white/10 px-2 lg:px-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'border-indigo-500 text-indigo-400'
              : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5'
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ClientTabs;
