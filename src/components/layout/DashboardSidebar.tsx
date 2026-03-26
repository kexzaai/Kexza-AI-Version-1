'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  Calendar, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Clients', icon: Users, href: '/dashboard/clients' },
  { name: 'Tasks', icon: CheckSquare, href: '/dashboard/tasks' },
  { name: 'Compliance', icon: Calendar, href: '/dashboard/compliance' },
  { name: 'Documents', icon: FileText, href: '/dashboard/documents' },
  { name: 'AI Assistant', icon: MessageSquare, href: '/dashboard/ai' },
  { name: 'Reports', icon: BarChart3, href: '/dashboard/reports' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

const DashboardSidebar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {!isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggle}
        />
      )}

      <aside className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-20'} bg-white/70 backdrop-blur-xl border-r border-white/30 shadow-2xl`}>
        
        {/* Toggle Button */}
        <button 
          onClick={toggle}
          className="absolute -right-3 top-10 bg-[var(--accent)] text-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform z-50 hidden lg:block"
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className="flex flex-col h-full p-4 overflow-y-auto no-scrollbar">
          {/* Logo */}
          <div className={`mb-12 flex items-center ${isOpen ? 'px-4' : 'justify-center'} transition-all`}>
            {isOpen ? (
              <Image src="/logo.png" alt="Kexza AI" width={120} height={32} className="object-contain" />
            ) : (
              <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white font-bold">K</div>
            )}
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isActive = item.href === '/dashboard' 
                ? pathname === '/dashboard' 
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-[var(--accent)] text-white shadow-lg shadow-blue-500/20' 
                      : 'text-gray-500 hover:bg-white/50 hover:text-[var(--accent)] hover:translate-x-1'
                    }`}
                >
                  <item.icon size={22} className={`${!isOpen && 'mx-auto'}`} />
                  {isOpen && <span className="font-medium text-sm">{item.name}</span>}
                  
                  {/* Tooltip for collapsed state */}
                  {!isOpen && (
                    <div className="absolute left-20 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100]">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer / Logout Placeholder */}
          <div className="mt-auto pt-4 border-t border-gray-100">
             <div className={`flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-500 cursor-pointer transition-all ${!isOpen && 'justify-center'}`}>
                <Settings size={22} />
                {isOpen && <span className="font-medium text-sm">Logout</span>}
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
