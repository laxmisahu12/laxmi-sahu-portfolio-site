
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="section-container section-fade-in">
      <SectionHeading 
        title="About Me" 
        subtitle="A glimpse into my professional journey and expertise"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6">
            With over 7 years of experience in Enterprise Application Development, I specialize in Data Engineering, ETL, Python, GCP and AWS to build scalable, efficient, and high-performance solutions.
          </p>
          
          <p className="text-lg mb-6">
            My expertise spans across designing data pipelines, real-time processing, automation frameworks, and system optimization, which has led to impactful results in various organizations.
          </p>
          
          <p className="text-lg mb-6">
            I am proficient in Agile Methodology & SDLC for full application cycles and I have a strong background in data visualization using tools like Mode Analytics, Tableau, Looker Studio and Elastic Kibana.
          </p>
          
          <div className="mt-8">
            <Button asChild>
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Me
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary dark:bg-secondary/30 p-6 rounded-lg shadow-sm hover-card">
            <h3 className="text-2xl font-bold text-primary mb-2">90%</h3>
            <p className="text-muted-foreground">Reduction in manual efforts by automating workflows</p>
          </div>
          
          <div className="bg-secondary dark:bg-secondary/30 p-6 rounded-lg shadow-sm hover-card">
            <h3 className="text-2xl font-bold text-primary mb-2">30%</h3>
            <p className="text-muted-foreground">Decrease in system errors and 20% performance improvement</p>
          </div>
          
          <div className="bg-secondary dark:bg-secondary/30 p-6 rounded-lg shadow-sm hover-card">
            <h3 className="text-2xl font-bold text-primary mb-2">60%</h3>
            <p className="text-muted-foreground">Boost in reporting efficiency through data analytics</p>
          </div>
          
          <div className="bg-secondary dark:bg-secondary/30 p-6 rounded-lg shadow-sm hover-card">
            <h3 className="text-2xl font-bold text-primary mb-2">10M+</h3>
            <p className="text-muted-foreground">URLs processed monthly for classification and analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
