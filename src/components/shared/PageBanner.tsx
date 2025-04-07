
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageBanner = ({ title, subtitle, className }: PageBannerProps) => {
  return (
    <div className={cn(
      'py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border',
      className
    )}>
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
