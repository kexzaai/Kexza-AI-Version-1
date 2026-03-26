import React from 'react';
import { HelpCircle, BookOpen, Settings, Zap } from 'lucide-react';

const SupportHelp = () => {
  const guides = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Getting Started",
      description: "Learn how to set up your firm profile and invite your team in under 5 minutes.",
      link: "/docs/getting-started"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      title: "Feature Overview",
      description: "Explore the full potential of Digital Clerk, Workflow, and Document Vault.",
      link: "/docs/features"
    },
    {
      icon: <Settings className="w-5 h-5 text-gray-500" />,
      title: "Account Settings",
      description: "Manage your subscription, firm details, and security preferences.",
      link: "/settings"
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-purple-500" />,
      title: "Common Fixes",
      description: "Troubleshooting steps for sync issues, login problems, and permissions.",
      link: "/docs/troubleshooting"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Quick help resources</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Save time and find answers yourself with our comprehensive documentation and help guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <a 
              key={index}
              href={guide.link}
              className="group p-6 bg-white border border-[var(--border)] rounded-[var(--radius)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[var(--accent-soft)] transition-colors">
                {guide.icon}
              </div>
              <h4 className="font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{guide.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {guide.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportHelp;
