
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer (Freelancer)',
    company: 'Outlier.ai',
    companyUrl: 'https://outlier.ai/',
    logo: '/assets/outlier.png',
    period: 'January 2025 - Present',
    location: 'Stockholm, Sweden',
    achievements: [
      'Developing and implementing advanced NLP models for content analysis and classification.',
      'Creating AI-driven recommendation systems to enhance user engagement and content discovery.',
      'Building and optimizing machine learning pipelines for real-time data processing.',
      'Implementing transformer-based models for text generation and summarization tasks.'
    ]
  },
  {
    title: 'System Analyst',
    company: 'Bitwise Solutions Pvt. Ltd',
    companyUrl: 'https://www.bitwiseglobal.com/',
    logo: '/assets/bitwise.png',
    period: 'July 2024 - December 2024',
    location: 'Pune, India',
    achievements: [
      'Engineered a module to generate JMX files from Postman Collection enabling seamless integration with JMeter.',
      'Integrated the solution into the Jenkins pipeline, reducing manual work by 90%.',
      'Utilized Kafka for real-time messaging, Splunk for reporting and AWS S3 for cloud storage.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Securly India Private Limited',
    companyUrl: 'https://www.securly.com/',
    logo: '/assets/securly.png',
    period: 'March 2019 - May 2023',
    location: 'Pune, India',
    achievements: [
      'Developed a module for domain and URL classification, processing over 10 million URLs monthly.',
      'Enhanced legacy code, reducing system errors by 30% and improving performance by 20%.',
      'Led ETL project, extracting and transforming data from 5+ sources, resulting in a 60% increase in reporting efficiency.',
      'Enabled data analysts to generate insights, contributing to a 45% improvement in marketing and sales strategies.',
      'Collected offender data from 100+ US counties using Selenium and web scraping techniques.',
      'Created an audit reporting system, generating PR reports for 500+ clients, reducing report generation time by 80%.'
    ]
  },
  {
    title: 'Full Stack & Android Developer',
    company: 'SPEGI Technologies',
    companyUrl: 'http://www.spegitech.com/',
    logo: '/assets/spegi.png',
    period: 'December 2015 - May 2018',
    location: 'Indore, India',
    achievements: [
      'Engineered Swim Team Management web application, reducing administrative tasks by 70%, saving coaches 10+ hours weekly.',
      'Developed an Android app for managing Education ERP modules, used by institutions, improving management efficiency by 35% and achieving a 95% user satisfaction rate.'
    ]
  }
];

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Laxmi Sahu</title>
        <meta name="description" content="Explore Laxmi Sahu's professional experience as a Data Engineer and Full Stack Developer across various roles and organizations." />
      </Helmet>
      
      <PageBanner 
        title="Professional Experience" 
        subtitle="A detailed overview of my career journey and key accomplishments"
      />
      
      <div className="section-container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey through various roles and organizations"
          className="section-fade-in"
        />
        
        <div className="space-y-12 section-fade-in">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-secondary/30 p-6 rounded-lg shadow-sm border border-border/50 hover-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="w-20 h-20 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <h4 className="text-lg text-primary">
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company}
                        </a>
                      </h4>
                    </div>
                    
                    <div className="mt-2 md:mt-0 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
