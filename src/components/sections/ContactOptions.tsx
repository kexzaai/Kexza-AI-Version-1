import React from 'react';
import { Mail, MessageSquare, Briefcase, ChevronRight } from 'lucide-react';

const ContactOptions = () => {
  const options = [
    {
      icon: <Mail className="w-6 h-6 text-[var(--accent)]" />,
      title: "Email Support",
      description: "Direct assistance for technical issues and account queries.",
      contact: "support@kexza.ai",
      availability: "Response within 24 hours",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[var(--accent)]" />,
      title: "Chat Support",
      description: "Real-time help within the application for all users.",
      contact: "Coming Soon",
      availability: "Available for Pro users",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[var(--accent)]" />,
      title: "Business & Sales",
      description: "Talk to our team about onboarding or custom enterprise needs.",
      contact: "sales@kexza.ai",
      availability: "Mon–Fri, 9am–6pm IST",
    }
  ];

  return (
    <section className="pb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-[var(--radius-lg)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-[var(--accent-soft)] rounded-xl flex items-center justify-center mb-6 border border-blue-50">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {option.description}
              </p>
              <div className="pt-6 border-t border-[var(--border)]">
                <div className="text-blue-600 font-semibold mb-1 flex items-center gap-1">
                  {option.contact}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ml-1 -translate-x-1 group-hover:translate-x-0" />
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {option.availability}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
