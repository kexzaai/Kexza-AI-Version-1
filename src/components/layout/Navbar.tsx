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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center gap-2 p-1.5">
        <div className="flex items-center gap-1 md:gap-2">
          <Link href="/" className="px-5 py-2 text-sm font-medium text-black hover:bg-black/5 rounded-full transition-all">Home</Link>
          <Link href="/pricing" className="px-5 py-2 text-sm font-medium text-black/60 hover:text-black hover:bg-black/5 rounded-full transition-all">Pricing</Link>
          <Link href="/contact" className="px-5 py-2 text-sm font-medium text-black/60 hover:text-black hover:bg-black/5 rounded-full transition-all">Contact</Link>
        </div>

        <div className="h-6 w-[1px] bg-black/10 mx-1 hidden md:block" />

        <div className="hidden md:flex items-center gap-2">
          <Link href="/login" className="px-5 py-2 text-sm font-semibold text-black/80 hover:text-black transition-all">Login</Link>
          <Link href="/signup" className="px-6 py-2 text-sm font-bold bg-black text-white rounded-full hover:bg-black/80 transition-all shadow-lg shadow-black/10">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Simplified Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/20 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <Link href="/" className="text-black font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/pricing" className="text-black font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/contact" className="text-black font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="h-[1px] bg-black/10" />
          <Link href="/login" className="text-black font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          <Link href="/signup" className="bg-black text-white py-4 rounded-2xl text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
