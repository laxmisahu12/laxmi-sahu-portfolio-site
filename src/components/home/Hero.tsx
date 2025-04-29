
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="container mx-auto px-6 md:px-8 py-8 md:py-12 relative z-10 max-w-3xl">
        <div className="space-y-6">
          <div className="text-primary mb-5 font-mono">Hi, my name is</div>
          <h1 className="big-heading">
            <span className="text-lightest-slate block mb-2">Laxmi Sahu.</span>
            <span className="text-slate block">I build data solutions.</span>
          </h1>
          
          <p className="text-slate text-lg max-w-xl mt-6 mb-12">
            I'm a Data Engineer & Full Stack Developer specializing in building exceptional 
            data pipelines and applications. Currently focused on creating scalable 
            solutions using Python, AWS and GCP.
          </p>
          
          <div className="mt-12">
            <Link to="/contact" className="button big">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
