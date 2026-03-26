import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassCard from '@/components/common/GlassCard';
import { Mail, ArrowRight } from 'lucide-react';

const VerifyEmailPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--background)]">
      <GlassCard className="w-full max-w-md p-12 text-center bg-white/70">
        <Link href="/">
          <Image src="/logo.png" alt="Kexza AI" width={140} height={40} className="mx-auto mb-10 object-contain" />
        </Link>
        <div className="w-20 h-20 bg-[var(--accent-soft)] rounded-full flex items-center justify-center mx-auto mb-8">
          <Mail size={32} className="text-[var(--accent)]" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Check your email</h2>
        <p className="text-base text-gray-500 mb-10">
          We've sent a verification link to your email address. Please click the link to activate your firm account.
        </p>
        
        <div className="flex flex-col gap-4">
          <button className="btn btn-primary justify-center py-4">
            Resend Email
          </button>
          <Link href="/login" className="text-sm font-semibold text-[var(--accent)] hover:underline">
            Back to login
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-gray-400">
            Once verified, you'll be redirected to the onboarding wizard.
          </p>
        </div>
      </GlassCard>
    </div>
  );
};

export default VerifyEmailPage;
