"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I expect a response from support?",
      answer: "We aim to respond to all support queries within 24 hours. For critical technical issues, our response time is typically under 4 hours during business days (Mon–Fri, 9am–6pm IST)."
    },
    {
      question: "Is there onboarding help available for my firm?",
      answer: "Yes! We offer personal onboarding sessions for all new firms. Our team will help you migrate your data, set up your workflows, and train your staff on the Kexza platform."
    },
    {
      question: "Can I request a custom demo for my partners?",
      answer: "Absolutely. You can request a personalized demo via the contact form or by emailing sales@kexza.ai. We'll show you how Kexza solves specific challenges for CA firms like yours."
    },
    {
      question: "What if I face technical issues after office hours?",
      answer: "Our documentation is available 24/7. For urgent matters, you can still submit a ticket via email, and our on-call engineers monitor critical system alerts around the clock."
    },
    {
      question: "Is my firm's data safe and secure?",
      answer: "Data security is our top priority. We use industry-standard encryption, regular backups, and secure cloud infrastructure to ensure your firm's sensitive information is always protected."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Common questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to the most common questions about support, onboarding, and platform use.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass rounded-[var(--radius)] overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg border-blue-100 ring-1 ring-blue-50' : 'hover:bg-white/60'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-gray-400" />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-[var(--border)] pt-4 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
