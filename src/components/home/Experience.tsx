
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const experiences = [
  {
    title: 'AI Engineer (Freelancer)',
    company: 'Outlier.ai',
    companyUrl: 'https://outlier.ai/',
    period: 'January 2025 - Present',
    location: 'Stockholm, Sweden',
    description: [
      'Leading the development of a data analysis web platform that enables users to securely upload datasets, perform advanced data cleaning, generate interactive visualizations, and conduct statistical analysis through a unified interface.',
      'Integrating AI agents to automate key data preprocessing steps such as missing value handling, outlier detection, and recommending optimal data transformation techniques to improve workflow efficiency.',
      'Building a scalable, containerized platform architecture and designing a highly responsive user interface to cater to both novice and experienced data scientists, enhancing usability and system performance.'
    ]
  },
  {
    title: 'System Analyst',
    company: 'Bitwise Solutions Pvt. Ltd',
    companyUrl: 'https://www.bitwiseglobal.com/',
    period: 'July 2024 - December 2024',
    location: 'Pune, India',
    description: [
      'Engineered a module to generate JMX files from Postman Collection, reducing manual work by 90%.',
      'Integrated the solution into the Jenkins pipeline, reducing manual work by 90%.',
      'Utilized Kafka for real-time messaging, Splunk for reporting and AWS S3 for cloud storage.'
    ]
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Securly India Private Limited',
    companyUrl: 'https://www.securly.com/',
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
                  <span className="text-primary"> @ <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a></span>
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
