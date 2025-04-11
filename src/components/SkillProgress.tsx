
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillProgressProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillProgress = ({ name, percentage, delay = 0 }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-primary">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 transition-all duration-500"
        aria-label={`${name} skill level`}
      />
    </div>
  );
};

export default SkillProgress;
