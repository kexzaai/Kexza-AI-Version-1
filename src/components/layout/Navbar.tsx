"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Kexza AI Logo" width={120} height={40} className="object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/pricing" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">Pricing</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[var(--accent)] transition-colors">Contact</Link>
          <div className="flex items-center gap-4 ml-4">
            <Link href="/login" className="text-sm font-semibold px-4 py-2 hover:opacity-80">Login</Link>
            <Link href="/signup" className="btn btn-primary text-sm">Get Started</Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-[var(--border)] p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <hr className="border-[var(--border)]" />
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          <Link href="/signup" className="btn btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
