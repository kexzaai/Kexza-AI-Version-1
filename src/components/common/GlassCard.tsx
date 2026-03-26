import React from 'react';

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`liquid-glass p-6 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
