
import { ArrowRight, Download, Code, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactIcons from '../shared/ContactIcons';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center border-b border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] animate-fade-in"></div>
      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center">
        {/* Centered Logo */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="animated-border rounded-full p-1">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-primary/70 to-accent/70 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="gradient-text text-8xl font-bold">LS</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center lg:text-left">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text">Laxmi Sahu</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground mb-6 text-center lg:text-left">
              Data Engineer & Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              With 7+ years of experience building scalable data solutions and applications.
              Specializing in data engineering, ETL, Python, GCP and AWS.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button asChild size="lg" className="animated-gradient text-white">
                <Link to="/contact" className="flex items-center gap-2">
                  Get In Touch 
                  <ArrowRight size={18} />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="border-primary/30 hover:border-primary">
                <a href="/Laxmi_Sahu_Resume.pdf" download className="flex items-center gap-2">
                  Download Resume 
                  <Download size={18} />
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <ContactIcons />
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative grid grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20 animate-float">
                <Database className="text-primary w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">Data Engineering</h3>
                <p className="text-muted-foreground">Building scalable ETL pipelines and data solutions</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20 animate-float" style={{ animationDelay: "0.2s" }}>
                <Code className="text-primary w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">Full Stack</h3>
                <p className="text-muted-foreground">Creating responsive applications with modern frameworks</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20 animate-float" style={{ animationDelay: "0.4s" }}>
                <Server className="text-primary w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">Cloud Solutions</h3>
                <p className="text-muted-foreground">Deploying and scaling with AWS and GCP infrastructure</p>
              </Card>
              
              <div className="absolute -bottom-8 -left-8 p-4 bg-background border border-border rounded-lg shadow-lg">
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
