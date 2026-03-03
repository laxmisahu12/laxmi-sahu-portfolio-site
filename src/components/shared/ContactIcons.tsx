
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactIcons = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      <Button 
        asChild 
        variant="outline" 
        className="flex items-center gap-2"
      >
        <a 
          href="mailto:laxmisahu1211@gmail.com" 
          className="flex items-center gap-2"
        >
          <Mail size={18} />
          <span className="hidden sm:inline">laxmisahu1211@gmail.com</span>
        </a>
      </Button>

      <Button 
        asChild 
        variant="outline" 
        className="flex items-center gap-2"
      >
        <a 
          href="tel:+46764453551" 
          className="flex items-center gap-2"
        >
          <Phone size={18} />
          <span className="hidden sm:inline">+46 764453551</span>
        </a>
      </Button>

      <Button 
        asChild 
        variant="outline" 
        className="flex items-center gap-2"
      >
        <a 
          href="https://www.linkedin.com/in/laxmisahu12" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2"
        >
          <Linkedin size={18} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </Button>

      <Button 
        asChild 
        variant="outline" 
        className="flex items-center gap-2"
      >
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2"
        >
          <Github size={18} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </Button>
    </div>
  );
};

export default ContactIcons;
