
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12', 
      center && 'text-center',
      className
    )}>
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-5 bg-primary"></div>
        <h2 className="gradient-text section-title">
          {title}
        </h2>
        <div className="h-px flex-grow bg-primary/20"></div>
      </div>
      
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
