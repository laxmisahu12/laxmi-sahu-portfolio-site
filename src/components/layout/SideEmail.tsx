
import React from 'react';

const SideEmail = () => {
  return (
    <div className="fixed left-8 bottom-0 z-30 hidden lg:block">
      <div className="flex flex-col items-center">
        <a 
          href="mailto:laxmisahu1211@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors mb-6 vertical-text font-mono text-xs tracking-widest"
        >
          laxmisahu1211@gmail.com
        </a>
        <div className="h-24 w-[1px] bg-muted-foreground/50"></div>
      </div>
    </div>
  );
};

export default SideEmail;
