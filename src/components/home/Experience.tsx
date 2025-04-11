
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const experiences = [
  {
    title: 'AI Engineer (Freelancer)',
    company: 'Outlier.ai',
    period: 'January 2025 - Present',
    location: 'Stockholm, Sweden',
    description: [
      'Developing and implementing advanced NLP models for content analysis and classification.',
      'Creating AI-driven recommendation systems to enhance user engagement and content discovery.',
      'Building and optimizing machine learning pipelines for real-time data processing.',
      'Implementing transformer-based models for text generation and summarization tasks.'
    ]
  },
  {
    title: 'System Analyst',
    company: 'Bitwise Solutions Pvt. Ltd',
    period: 'July 2024 - December 2024',
    location: 'Pune, India',
    description: [
      'Engineered a module to generate JMX files from Postman Collection, reducing manual work by 90%.',
      'Integrated the solution into the Jenkins pipeline, reducing manual work by 90%.',
      'Utilized Kafka for real-time messaging, Splunk for reporting and AWS S3 for cloud storage.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Securly India Private Limited',
    period: 'March 2019 - May 2023',
    location: 'Pune, India',
    description: [
      'Developed a URL classification module processing 10M+ URLs monthly.',
      'Enhanced legacy code, reducing system errors by 30% and improving performance by 20%.',
      'Led ETL project from 5+ sources, resulting in a 60% increase in reporting efficiency.',
      'Created an audit reporting system, generating PR reports for 500+ clients, reducing report generation time by 80%.'
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section className="section-container section-fade-in pt-24" id="experience">
      <h2 className="section-title numbered-heading">Where I've Worked</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mt-12">
        <div className="md:w-32 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none mb-6 md:mb-0 border-b md:border-b-0 md:border-l border-border/50">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`px-4 py-3 text-left whitespace-nowrap md:border-l-2 font-mono text-sm ${
                activeTab === index 
                  ? 'text-primary border-primary bg-primary/5 md:bg-transparent' 
                  : 'text-muted-foreground hover:text-primary border-transparent hover:bg-primary/5 md:hover:bg-transparent'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company.split(' ')[0]}
            </button>
          ))}
        </div>
        
        <div className="flex-1 min-h-[250px]">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${
                activeTab === index ? 'block' : 'hidden'
              }`}
            >
              <div className="mb-2">
                <h3 className="text-xl font-medium">
                  <span className="text-foreground">{exp.title}</span>
                  <span className="text-primary"> @ {exp.company}</span>
                </h3>
                <p className="text-muted-foreground mt-1 font-mono text-sm">{exp.period}</p>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-10">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link to="/experience" className="flex items-center gap-2 font-mono text-sm">
            View Full Experience
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Experience;
