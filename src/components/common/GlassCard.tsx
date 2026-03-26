import React from 'react';

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`glass ${className}`} style={{
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
    }}>
      {children}
    </div>
  );
};

export default GlassCard;
