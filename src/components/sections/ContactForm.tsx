"use client";
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firmName: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        firmName: '',
        subject: '',
        message: ''
      });
      
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (status === 'success') {
    return (
      <div className="glass p-12 rounded-[var(--radius-lg)] text-center animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message sent successfully!</h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Thank you for reaching out. Our support team has received your inquiry and will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="btn btn-secondary px-8"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="glass p-8 md:p-12 rounded-[var(--radius-lg)] shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-soft)] rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
        <p className="text-gray-400 mb-10 text-sm font-medium">Have a specific question? Fill out the form below and we'll be in touch.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-5 py-4 bg-white/50 border ${errors.name ? 'border-red-300' : 'border-[var(--border)]'} rounded-[var(--radius)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder:text-gray-300`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1 ml-1 font-medium">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@firm.com"
                className={`w-full px-5 py-4 bg-white/50 border ${errors.email ? 'border-red-300' : 'border-[var(--border)]'} rounded-[var(--radius)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder:text-gray-300`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 ml-1 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firmName" className="text-sm font-semibold text-gray-700 ml-1">Firm Name (Optional)</label>
              <input
                type="text"
                id="firmName"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
                placeholder="Kexza Partners"
                className="w-full px-5 py-4 bg-white/50 border border-[var(--border)] rounded-[var(--radius)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder:text-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-5 py-4 bg-white/50 border ${errors.subject ? 'border-red-300' : 'border-[var(--border)]'} rounded-[var(--radius)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select an option</option>
                <option value="Demo Request">Request a Demo</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Pricing Inquiry">Pricing Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
              {errors.subject && <p className="text-xs text-red-500 mt-1 ml-1 font-medium">{errors.subject}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              className={`w-full px-5 py-4 bg-white/50 border ${errors.message ? 'border-red-300' : 'border-[var(--border)]'} rounded-[var(--radius)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-300`}
            ></textarea>
            {errors.message && <p className="text-xs text-red-500 mt-1 ml-1 font-medium">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn btn-primary py-5 justify-center text-lg font-bold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
          
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 text-sm font-medium justify-center bg-red-50 p-3 rounded-lg border border-red-100">
              <AlertCircle className="w-4 h-4" />
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
