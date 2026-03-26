import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassCard from '@/components/common/GlassCard';
import { Mail, Lock, User, Briefcase, ArrowLeft } from 'lucide-react';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--background)]">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors">
        <ArrowLeft size={16} /> Back to home
      </Link>
      
      <GlassCard className="w-full max-w-lg p-10 bg-white/70">
        <div className="text-center mb-8">
          <Link href="/">
            <Image src="/logo.png" alt="Kexza AI" width={140} height={40} className="mx-auto mb-6 object-contain" />
          </Link>
          <h2 className="text-2xl font-bold mb-2">Create your firm account</h2>
          <p className="text-sm">Start your 14-day free trial. No credit card required.</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                  required 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold ml-1">Firm Name</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Doe & Associates" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                  required 
                />
              </div>
            </div>
          </div>

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
            <label className="text-sm font-semibold ml-1">Create Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                placeholder="Min. 8 characters" 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary justify-center py-4 text-base mt-2 shadow-lg shadow-blue-500/10">
            Create Account
          </button>
        </form>

        <div className="mt-8">
           <div className="relative flex items-center justify-center mb-8">
              <hr className="w-full border-[var(--border)]" />
              <span className="absolute bg-white/70 px-4 text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
           </div>
           
           <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[var(--border)] bg-white hover:bg-gray-50 transition-colors font-medium text-sm">
             <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={18} height={18} />
             Google (Placeholder)
           </button>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          By signing up, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
        </div>
      </GlassCard>
    </div>
  );
};

export default SignupPage;
