
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactIcons from '../shared/ContactIcons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 lg:pt-40 border-b border-border/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 max-w-5xl">
        <div className="max-w-3xl">
          <div className="text-primary mb-5 font-mono animate-[fadeIn_0.5s_ease-out_0.2s_both]">Hi, my name is</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground block mb-2 animate-[fadeIn_0.5s_ease-out_0.4s_both]">Laxmi Sahu.</span>
            <span className="text-muted-foreground block animate-[fadeIn_0.5s_ease-out_0.6s_both]">I build data solutions.</span>
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 mt-6 animate-[fadeIn_0.5s_ease-out_0.8s_both]">
            I'm a Data Engineer & Full Stack Developer specializing in building exceptional 
            data pipelines and applications. Currently focused on creating scalable 
            solutions using Python, AWS and GCP.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 animate-[fadeIn_0.5s_ease-out_1s_both]">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <Link to="/contact" className="font-mono text-sm group">
                Get In Touch
                <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <a href="/laxmi-sahu-resume.pdf" download className="font-mono text-sm group">
                Resume
                <Download size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
