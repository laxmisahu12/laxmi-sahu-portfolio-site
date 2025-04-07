
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-24 border-t border-border section-fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to collaborate?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's discuss how my data engineering and development expertise can help bring your project to life.
        </p>
        <Button asChild size="lg">
          <Link to="/contact" className="flex items-center gap-2 mx-auto">
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
