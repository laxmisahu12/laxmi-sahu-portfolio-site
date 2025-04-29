
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const SideNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="social-sidebar fixed left-8 bottom-0 z-30 hidden lg:block">
      <ul className="social-links flex flex-col items-center gap-6">
        <li>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-slate hover:text-primary hover:-translate-y-1 transition-all flex p-2"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/laxmisahu1211" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-slate hover:text-primary hover:-translate-y-1 transition-all flex p-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a 
            href="mailto:laxmisahu1211@gmail.com"
            className="text-light-slate hover:text-primary hover:-translate-y-1 transition-all flex p-2"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </li>
        <li className="after:content-[''] after:block after:w-[1px] after:h-24 after:mx-auto after:bg-light-slate"></li>
      </ul>
    </div>
  );
};

export default SideNav;
