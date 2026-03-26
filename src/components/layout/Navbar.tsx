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
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className={`liquid-glass mx-auto max-w-7xl transition-all duration-500 ${isScrolled ? 'py-3 px-6' : 'py-4 px-8'} ${isMobileMenuOpen ? 'rounded-b-none' : ''}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 tap-active">
            <Image 
              src="/logo.png" 
              alt="Kexza AI Logo" 
              width={160} 
              height={52} 
              className="object-contain hover:scale-105 transition-all duration-500" 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/pricing" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-all hover:scale-105 active:scale-95">Pricing</Link>
            <Link href="/contact" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-all hover:scale-105 active:scale-95">Contact</Link>
            <div className="flex items-center gap-6 ml-4">
              <Link href="/login" className="text-sm font-bold opacity-80 hover:opacity-100 tap-active">Login</Link>
              <Link href="/signup" className="btn btn-primary text-sm shadow-xl shadow-blue-500/20 tap-active">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden tap-active p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 liquid-glass rounded-t-none border-t-0 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-500 shadow-2xl">
            <Link href="/pricing" className="text-lg font-bold tap-active" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" className="text-lg font-bold tap-active" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <div className="h-[1px] bg-white/10" />
            <Link href="/login" className="text-lg font-bold tap-active" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            <Link href="/signup" className="btn btn-primary text-center py-4 text-lg shadow-2xl" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
