'use client';

import React, { useState, useEffect } from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import DashboardNavbar from '@/components/layout/DashboardNavbar';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simple Auth Simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real app, we'd check for a session here
      // if (!session) router.push('/login');
    }, 500);
    return () => clearTimeout(timer);
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[var(--background)]">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-indigo-200 border-t-transparent rounded-full animate-spin duration-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <DashboardSidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <main className={`transition-all duration-300 ease-in-out ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <DashboardNavbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="p-4 sm:p-8 md:p-10 max-w-[1600px] mx-auto min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
