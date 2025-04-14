
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
