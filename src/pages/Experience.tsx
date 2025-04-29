
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    title: 'AI Engineer (Freelancer)',
    company: 'Outlier.ai',
    companyUrl: 'https://outlier.ai/',
    period: 'January 2025 - Present',
    location: 'Stockholm, Sweden',
    achievements: [
      'Aim to streamline data preprocessing workflows by up to 40% through the integration of AI agents for automating missing value handling, outlier detection, and data transformation recommendations.',
      'Expected to improve user adoption and engagement by 30–35% with a highly intuitive and responsive interface designed for both novice and experienced data scientists.',
      'Plan to eliminate the need for multiple external tools by centralizing data upload, cleaning, visualization, and statistical analysis into a single unified platform.',
      'Working toward achieving near real-time visualization generation, empowering users to explore datasets dynamically and derive insights faster.'
    ]
  },
  {
    title: 'System Analyst',
    company: 'Bitwise Solutions Pvt. Ltd',
    companyUrl: 'https://www.bitwiseglobal.com/',
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
    companyUrl: 'https://www.securly.com/',
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
    title: 'Sr. Software Engineer',
    company: 'SPEGI Technologies',
    companyUrl: 'http://www.spegitech.com/',
    period: 'December 2015 - May 2018',
    location: 'Indore, India',
    achievements: [
      'Engineered Swim Team Management web application, reducing administrative tasks by 70%, saving coaches 10+ hours weekly.',
      'Developed an Android app for managing Education ERP modules, used by institutions, improving management efficiency by 35% and achieving a 95% user satisfaction rate.'
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("0");
  
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
        <h2 className="numbered-heading">Where I've Worked</h2>
        
        <div className="tabs-container mt-10 flex flex-col md:flex-row">
          <Tabs 
            defaultValue="0" 
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="md:w-max mb-8 md:mb-0 md:mr-8 flex md:flex-col overflow-x-auto">
              {experiences.map((exp, index) => (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()}
                  className="min-w-32 md:w-full text-left px-4 py-3 md:border-l-2 md:border-l-lightest-navy md:border-b-0 border-b-2 border-b-lightest-navy font-mono text-sm data-[state=active]:border-l-primary data-[state=active]:text-primary"
                >
                  {exp.company.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="tab-panels">
              {experiences.map((exp, index) => (
                <TabsContent 
                  key={index} 
                  value={index.toString()}
                  className="p-0 mt-0"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-medium">
                      <span>{exp.title}</span>
                      {" "}
                      <span className="text-primary">
                        @ <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-link">
                          {exp.company}
                        </a>
                      </span>
                    </h3>
                    
                    <p className="text-light-slate font-mono text-sm mt-1 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="inline" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 mt-1">
                        <MapPin size={14} className="inline" />
                        {exp.location}
                      </span>
                    </p>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="relative pl-7 text-light-slate">
                        <span className="absolute left-0 text-primary">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Experience;
