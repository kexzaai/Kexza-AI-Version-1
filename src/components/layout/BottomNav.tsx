"use client";
import React from 'react';
import Link from 'next/link';
import { Home, Users, CheckSquare, MessageSquare, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const pathname = usePathname();
  
  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'Clients', href: '/dashboard/clients' },
    { icon: CheckSquare, label: 'Tasks', href: '/dashboard/tasks' },
    { icon: MessageSquare, label: 'AI', href: '/dashboard/ai' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none">
      <nav className="liquid-glass mx-auto flex items-center justify-around py-3 px-2 pointer-events-auto shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 tap-active ${isActive ? 'text-[var(--accent)] scale-110' : 'opacity-50'}`}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
