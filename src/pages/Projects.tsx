
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – Dec 2024',
    description: 'A comprehensive automation framework designed to streamline non-functional requirements testing by generating JMX files from Postman Collections, enabling seamless integration with JMeter and reducing manual testing efforts by 90%.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk', 'Postman']
  },
  {
    title: 'Pagescan (Domain and URL Classification)',
    period: 'Sept 2021 – May 2023',
    description: 'A high-performance domain and URL classification system that processes over 10 million URLs monthly, categorizing content for content filtering and security systems while ensuring high accuracy and minimal false positives.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Web Scraping', 'Elasticsearch', 'Redis', 'AWS ASG', 'AWS Redshift', 'AWS S3', 'AWS Cloud Watch', 'Slack API', 'Email API']
  },
  {
    title: 'Product Data Intelligence (PDI)',
    period: 'Oct 2019 – May 2022',
    description: 'An end-to-end ETL pipeline system that extracts, transforms, and loads data from multiple sources into analytical databases, providing actionable insights that led to a 45% improvement in marketing and sales strategies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Pandas', 'Numpy', 'Elasticsearch', 'Redis', 'AWS Redshift', 'MySQL', 'AWS S3', 'Slack API', 'Email API']
  },
  {
    title: 'Securly Visitor',
    period: 'Nov 2020 – Dec 2021',
    description: 'A data collection and tracking system that aggregates offender data from over 100 US counties using advanced web scraping techniques, building a comprehensive database for ongoing monitoring and analysis.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Web Scraping', 'Selenium', 'Pandas', 'Numpy', 'MySQL', 'API calls', 'Postman']
  },
  {
    title: 'Securly 24 Audit Report',
    period: 'Mar 2019 – Dec 2019',
    description: 'An enterprise-grade audit reporting system that generates PR reports for over 500 clients, reducing report generation time by 80% while ensuring accuracy and compliance with organizational standards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Flask', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Elasticsearch', 'AWS Redshift', 'Slack API']
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  return (
    <>
      <Helmet>
        <title>Projects | Laxmi Sahu</title>
        <meta name="description" content="Explore Laxmi Sahu's portfolio of projects showcasing expertise in data engineering, automation, web development, and more." />
      </Helmet>
      
      <PageBanner 
        title="Projects Portfolio" 
        subtitle="A showcase of my technical projects and solutions"
      />
      
      <div className="section-container">
        <div className="grid grid-cols-12 gap-8">
          {/* Project Navigation */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="border-l-2 border-muted">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  className={`block text-left pl-4 py-3 mb-1 hover:text-primary transition-all border-l-2 -ml-[2px] ${
                    activeProject === idx 
                      ? 'text-primary border-primary' 
                      : 'border-transparent text-muted-foreground'
                  }`}
                  onClick={() => setActiveProject(idx)}
                >
                  <div className="font-mono text-xs">{project.period}</div>
                  <div className="font-medium">{project.title}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Project Details */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="bg-secondary/30 rounded-lg p-6 border border-border/50 hover-card">
              <h3 className="text-2xl font-bold mb-2 text-primary">
                {projects[activeProject].title}
              </h3>
              
              <div className="text-sm text-muted-foreground mb-4">
                {projects[activeProject].period}
              </div>
              
              <div className="relative mb-6 overflow-hidden rounded-lg h-60 lg:h-80 group">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <p className="text-foreground mb-6">
                {projects[activeProject].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].techStack.map((tech, i) => (
                  <span key={i} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
