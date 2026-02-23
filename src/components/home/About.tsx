
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  return (
    <section className="section-container section-fade-in">
      <SectionHeading 
        title="About Me" 
        subtitle="A glimpse into my professional journey and expertise"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-lg mb-6">
            With 7+ years of experience in data engineering and analytics, I specialise in designing scalable ETL/ELT pipelines, data warehouses, and business intelligence solutions that transform raw data into strategic decisions.
          </p>
          
          <p className="text-lg mb-6">
            My work spans the full data stack — from ingesting and modelling data using Python, SQL, Apache Airflow, dbt, and Snowflake, to delivering self-service dashboards in Tableau, Power BI, and Looker Studio that stakeholders actually use.
          </p>
          
          <p className="text-lg mb-6">
            I've delivered measurable impact across every role: 45% improvement in marketing ROI, 60% faster reporting, 80% reduction in manual processes, and data pipelines processing 10M+ records monthly. Currently based in Stockholm, open to Data Engineer and Data Analyst roles.
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
        
        <div className="relative">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative z-10 overflow-hidden rounded-md border-2 border-primary/20">
              <AspectRatio ratio={1/1} className="bg-secondary/30">
                <img 
                  src="/lovable-uploads/8cd2f2ff-0d22-4565-ba19-026f6395f405.png" 
                  alt="Laxmi Sahu"
                  className="object-cover h-full w-full brightness-90 contrast-105"
                />
              </AspectRatio>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 border-2 border-primary w-full h-full rounded-md z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
