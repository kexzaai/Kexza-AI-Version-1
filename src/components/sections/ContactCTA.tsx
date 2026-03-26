import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-[40px] text-center border-white shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[var(--accent)] rounded-2xl rotate-12 flex items-center justify-center shadow-lg shadow-blue-200">
             <MessageCircle className="w-10 h-10 text-white -rotate-12" />
          </div>
          
          <h2 className="mb-6 mt-4">Still have questions?</h2>
          <p className="mb-10 text-lg text-gray-500 max-w-2xl mx-auto">
            Our team is always available to help you transform your firm's execution. Start your journey with Kexza AI today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/signup" className="btn btn-primary px-10 py-5 text-lg rounded-full w-full sm:w-auto shadow-lg shadow-blue-100">
              Start Free Trial <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="/login" className="btn btn-secondary px-10 py-5 text-lg rounded-full w-full sm:w-auto">
              Login to Account
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-gray-400 font-medium">
            No credit card required • Friendly support included • Cancel anytime
          </p>
        </div>
      </div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -ml-32" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[var(--accent-soft)] rounded-full blur-3xl opacity-60 -mr-32" />
    </section>
  );
};

export default ContactCTA;
