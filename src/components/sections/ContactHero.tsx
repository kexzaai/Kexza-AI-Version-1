import React from 'react';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 overflow-hidden relative">
      <div className="container relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-[var(--accent-soft)] text-[var(--accent)] rounded-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Support & Contact
        </div>
        <h1 className="mb-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          We're here to <span className="text-[var(--accent)]">help you</span> succeed.
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-500 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          Whether you have a question about features, pricing, or need technical assistance, our team is ready to provide the support your firm deserves.
        </p>
      </div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[var(--accent-soft)] rounded-full blur-[120px] opacity-30 -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-20 -z-10" />
    </section>
  );
};

export default ContactHero;
