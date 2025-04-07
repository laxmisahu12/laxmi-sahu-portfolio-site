
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'System Analyst',
    company: 'Bitwise Solutions Pvt. Ltd',
    period: 'July 2024 - December 2024',
    location: 'Pune, India',
    highlight: 'Engineered a module to generate JMX files from Postman Collection, reducing manual work by 90%.'
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Securly India Private Limited',
    period: 'May 2020 - May 2023',
    location: 'Pune, India',
    highlight: 'Developed a URL classification module processing 10M+ URLs monthly and improved system performance by 20%.'
  },
  {
    title: 'Software Engineer',
    company: 'Securly India Private Limited',
    period: 'October 2019 - May 2020',
    location: 'Pune, India',
    highlight: 'Led ETL project from 5+ sources, resulting in a 60% increase in reporting efficiency.'
  }
];

const Experience = () => {
  return (
    <section className="section-container section-fade-in">
      <SectionHeading 
        title="Experience" 
        subtitle="My professional journey through various roles and organizations"
      />
      
      <div className="space-y-8 mb-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-secondary/30 hover:bg-secondary/50 p-6 rounded-lg transition-all hover-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <h4 className="text-lg text-primary">{exp.company}</h4>
              </div>
              <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-2">{exp.location}</p>
            <p>{exp.highlight}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button asChild>
          <Link to="/experience" className="flex items-center gap-2 mx-auto">
            View Full Experience
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Experience;
