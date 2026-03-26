import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--border)] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Image src="/logo.png" alt="Kexza AI" width={120} height={40} className="mb-6 object-contain" />
            <p className="text-sm leading-relaxed mb-6">
              Execution Intelligence for CA Firms. The modern standard for professional execution and compliance management in India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="/pricing" className="hover:text-[var(--accent)] transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link></li>
              <li><Link href="/login" className="hover:text-[var(--accent)] transition-colors">Login</Link></li>
              <li><Link href="/signup" className="hover:text-[var(--accent)] transition-colors">Signup</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Product</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="#features" className="hover:text-[var(--accent)] transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[var(--accent)] transition-colors">How it works</Link></li>
              <li><Link href="/app/onboarding" className="hover:text-[var(--accent)] transition-colors">Onboarding</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Legal & Support</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium mb-8">
              <li><Link href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</Link></li>
            </ul>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <a href="mailto:support@kexza.ai" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">support@kexza.ai</a>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">© 2024 Kexza AI. All rights reserved.</p>
          <div className="flex gap-6">
             {/* Social placeholders if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
