
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-navy pt-40 pb-16">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate">{title}</h1>
          {subtitle && (
            <p className="text-slate text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
