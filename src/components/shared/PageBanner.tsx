
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-navy pt-32 pb-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{title}</h1>
          {subtitle && (
            <p className="text-light-slate text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
