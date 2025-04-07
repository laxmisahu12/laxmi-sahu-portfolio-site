
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactIcons from '../shared/ContactIcons';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Laxmi Sahu</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground mb-6">
              Data Engineer & Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              With 7+ years of experience building scalable data solutions and applications.
              Specializing in data engineering, ETL, Python, GCP and AWS.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Get In Touch 
                  <ArrowRight size={18} />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.json" download="laxmi-sahu-resume.json" className="flex items-center gap-2">
                  Download Resume 
                  <Download size={18} />
                </a>
              </Button>
            </div>
            
            <ContactIcons />
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/50 to-accent/50 p-1 rotate-3">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                  <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">LS</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-4 bg-background border border-border rounded-lg shadow-lg">
                <p className="font-semibold">Currently in</p>
                <p className="text-muted-foreground">Stockholm, Sweden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
