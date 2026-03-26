'use client';

import React, { useState } from 'react';
import { Search, Bell, User, LogOut, Settings, UserCircle, Menu } from 'lucide-react';
import Image from 'next/image';

const DashboardNavbar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full h-20 bg-white/50 backdrop-blur-md border-b border-white/30 px-6 sm:px-10 flex items-center justify-between">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg mr-4"
      >
        <Menu size={24} />
      </button>

      {/* Global Search */}
      <div className="flex-1 max-w-xl hidden md:block">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--accent)] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search clients, tasks, or documents..." 
            className="w-full pl-12 pr-4 py-2.5 bg-gray-100/50 border border-transparent focus:bg-white focus:border-[var(--accent)] rounded-2xl outline-none transition-all text-sm"
          />
          <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-gray-200 text-[10px] text-gray-400 bg-white shadow-sm pointer-events-none">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-3 bg-white/80 hover:bg-white rounded-xl border border-white/50 shadow-sm transition-all relative group"
          >
            <Bell size={20} className="text-gray-600 group-hover:text-[var(--accent)]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white ring-2 ring-red-500/10"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm">Notifications</h3>
                <span className="text-[10px] text-[var(--accent)] font-semibold cursor-pointer hover:underline text-nowrap">Mark all as read</span>
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto no-scrollbar">
                <NotificationItem title="GST filing deadline" desc="Reliance Industries quarterly filing due in 2 days" time="5m ago" urgent />
                <NotificationItem title="Document approved" desc="Audit document for Tata Motors has been verified" time="2h ago" />
                <NotificationItem title="New task assigned" desc="Drafting ITR for Infosys" time="4h ago" />
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 p-1.5 pr-4 bg-white/80 hover:bg-white rounded-2xl border border-white/50 shadow-sm transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              AK
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-gray-900 group-hover:text-[var(--accent)]">Ankit Kumar</p>
              <p className="text-[10px] text-gray-500">Master Admin</p>
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <DropdownLink icon={UserCircle} text="My Profile" />
              <DropdownLink icon={Settings} text="Settings" />
              <div className="h-px bg-gray-100 my-1 mx-2"></div>
              <DropdownLink icon={LogOut} text="Logout" color="text-red-500" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NotificationItem = ({ title, desc, time, urgent = false }: any) => (
  <div className={`p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border ${urgent ? 'border-red-50 bg-red-50/50' : 'border-transparent'}`}>
    <p className="text-xs font-bold text-gray-900 flex justify-between">
      {title}
      <span className="text-[10px] font-normal text-gray-400">{time}</span>
    </p>
    <p className="text-[11px] text-gray-600 mt-0.5 line-clamp-1">{desc}</p>
  </div>
);

const DropdownLink = ({ icon: Icon, text, color = "text-gray-700" }: any) => (
  <button className={`w-full flex items-center gap-3 p-2.5 px-4 text-sm font-medium rounded-xl hover:bg-gray-50 hover:translate-x-1 transition-all ${color}`}>
    <Icon size={18} />
    {text}
  </button>
);

export default DashboardNavbar;
