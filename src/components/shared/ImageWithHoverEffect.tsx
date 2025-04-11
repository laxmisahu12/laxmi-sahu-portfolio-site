
import { useState } from 'react';

interface ImageWithHoverEffectProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithHoverEffect = ({ src, alt, className = '' }: ImageWithHoverEffectProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className={`transition-all duration-500 ease-in-out hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary/50 animate-pulse flex items-center justify-center">
          <span className="text-xs text-muted-foreground">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithHoverEffect;
