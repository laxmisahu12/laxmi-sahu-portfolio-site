
import { useState, useEffect } from 'react';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (min 1.5 seconds to show animation)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block relative w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin-slow"></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-12 overflow-hidden">
            <h2 className="typewriter text-3xl font-bold text-primary">
              Laxmi Sahu
            </h2>
          </div>
          <p className="mt-2 text-muted-foreground animate-pulse">Data Engineer & Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
