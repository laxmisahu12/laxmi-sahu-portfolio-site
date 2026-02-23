
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '10M+', label: 'Records / Month' },
  { value: '45%', label: 'Marketing ROI ↑' },
  { value: '500+', label: 'Clients Served' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 lg:pt-40 border-b border-border/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 max-w-5xl">
        <div className="max-w-3xl">
          <div className="text-primary mb-5 font-mono">Hi, my name is</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground block mb-2 hover:text-primary transition-colors">Laxmi Sahu.</span>
            <span className="text-muted-foreground block">I turn data into decisions.</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mb-10 mt-6">
            Data Engineer & Data Analyst with 7+ years of experience building scalable ETL/ELT pipelines,
            data warehouses, and BI dashboards that drive real business impact. Specialising in
            SQL, Python, dbt, Apache Airflow, Snowflake, Tableau, and Power BI. Based in Stockholm 🇸🇪
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
              <Link to="/contact" className="font-mono text-sm group-hover:text-primary">
                Get In Touch
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/40 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 group">
              <Link to="/projects" className="font-mono text-sm">
                View Projects
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/30">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
