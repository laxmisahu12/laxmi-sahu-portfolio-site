
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'System Analyst',
    company: 'Bitwise Solutions Pvt. Ltd',
    logo: 'https://via.placeholder.com/80',
    period: 'July 2024 - December 2024',
    location: 'Pune, India',
    achievements: [
      'Engineered a module to generate JMX files from Postman Collection enabling seamless integration with JMeter.',
      'Integrated the solution into the Jenkins pipeline, reducing manual work by 90%.',
      'Utilized Kafka for real-time messaging, Splunk for reporting and AWS S3 for cloud storage.'
    ]
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Securly India Private Limited',
    logo: 'https://via.placeholder.com/80',
    period: 'May 2020 - May 2023',
    location: 'Pune, India',
    achievements: [
      'Developed a module for domain and URL classification, processing over 10 million URLs monthly.',
      'Enhanced legacy code, reducing system errors by 30% and improving performance by 20%.',
      'Collected offender data from 100+ US counties using Selenium and web scraping techniques.',
      'Assisted in building a robust database for tracking offenders.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Securly India Private Limited',
    logo: 'https://via.placeholder.com/80',
    period: 'October 2019 - May 2020',
    location: 'Pune, India',
    achievements: [
      'Led ETL project, extracting and transforming data from 5+ sources, resulting in a 60% increase in reporting efficiency.',
      'Enabled data analysts to generate insights, contributing to a 45% improvement in marketing and sales strategies.',
      'Created an audit reporting system, generating PR reports for 500+ clients, reducing report generation time by 80%.'
    ]
  },
  {
    title: 'Full Stack & Android Developer',
    company: 'SPEGI Technologies',
    logo: 'https://via.placeholder.com/80',
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
      
      <div className="section-container relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="relative z-10">
          <SectionHeading 
            title="Work Experience" 
            subtitle="My professional journey through various roles and organizations"
            className="section-fade-in"
          />
          
          <div className="space-y-12 section-fade-in">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-primary/20 hover-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-start justify-center">
                    <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center p-2 shadow-sm animated-border">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                        <h4 className="text-lg gradient-text">{exp.company}</h4>
                      </div>
                      
                      <div className="space-y-2 bg-secondary/50 rounded-lg p-3 backdrop-blur-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar size={16} className="mr-2 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={16} className="mr-2 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-medium mb-4 text-primary">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight size={18} className="text-primary flex-shrink-0 mt-1" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 section-fade-in">
            <SectionHeading 
              title="Key Accomplishments" 
              subtitle="Notable achievements across my career"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover-card text-center">
                <div className="text-4xl font-bold mb-2 gradient-text">90%</div>
                <p className="text-muted-foreground">Reduction in manual testing efforts through automation</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover-card text-center">
                <div className="text-4xl font-bold mb-2 gradient-text">10M+</div>
                <p className="text-muted-foreground">URLs processed monthly in data pipeline</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover-card text-center">
                <div className="text-4xl font-bold mb-2 gradient-text">60%</div>
                <p className="text-muted-foreground">Increase in reporting efficiency from ETL improvements</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 hover-card text-center">
                <div className="text-4xl font-bold mb-2 gradient-text">7+</div>
                <p className="text-muted-foreground">Years of professional experience in data engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
