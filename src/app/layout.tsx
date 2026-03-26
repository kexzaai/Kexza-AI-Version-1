import type { Metadata } from 'next';
import '@/styles/globals.css';
import LiquidBackground from '@/components/layout/Background';
import BottomNav from '@/components/layout/BottomNav';

export const metadata: Metadata = {
  title: 'Kexza AI | Premium CA SaaS',
  description: 'iOS 26 Liquid Glass empowered SaaS for Chartered Accountants',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen relative font-sans overflow-x-hidden">
        <LiquidBackground />
        {children}
      </body>
    </html>
  );
}
