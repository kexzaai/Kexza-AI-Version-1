import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassCard from '@/components/common/GlassCard';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--background)]">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors">
        <ArrowLeft size={16} /> Back to home
      </Link>
      
      <GlassCard className="w-full max-w-md p-10 bg-white/70">
        <div className="text-center mb-10">
          <Link href="/">
            <Image src="/logo.png" alt="Kexza AI" width={140} height={40} className="mx-auto mb-6 object-contain" />
          </Link>
          <h2 className="text-2xl font-bold mb-2">Login to your firm</h2>
          <p className="text-sm">Enter your credentials to access your dashboard</p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold ml-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                placeholder="name@firm.com" 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                required 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-semibold">Password</label>
              <Link href="#" className="text-xs text-[var(--accent)] hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary justify-center py-4 text-base mt-2 shadow-lg shadow-blue-500/10">
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="text-gray-500">Don't have an account? <Link href="/signup" className="text-[var(--accent)] font-semibold hover:underline">Sign up for free</Link></p>
        </div>
      </GlassCard>
    </div>
  );
};

export default LoginPage;
