
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

const projects = [
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – Dec 2024',
    description: 'A comprehensive automation framework designed to streamline non-functional requirements testing by generating JMX files from Postman Collections, enabling seamless integration with JMeter and reducing manual testing efforts by 90%.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk', 'Postman'],
    link: 'https://example.com/nfr-automation',
    github: 'https://github.com/example/nfr-automation'
  },
  {
    title: 'Pagescan (Domain and URL Classification)',
    period: 'Sept 2021 – May 2023',
    description: 'A high-performance domain and URL classification system that processes over 10 million URLs monthly, categorizing content for content filtering and security systems while ensuring high accuracy and minimal false positives.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Web Scraping', 'Elasticsearch', 'Redis', 'AWS ASG', 'AWS Redshift', 'AWS S3', 'AWS Cloud Watch', 'Slack API', 'Email API'],
    link: 'https://example.com/pagescan',
    github: 'https://github.com/example/pagescan'
  },
  {
    title: 'Product Data Intelligence (PDI)',
    period: 'Oct 2019 – May 2022',
    description: 'An end-to-end ETL pipeline system that extracts, transforms, and loads data from multiple sources into analytical databases, providing actionable insights that led to a 45% improvement in marketing and sales strategies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Pandas', 'Numpy', 'Elasticsearch', 'Redis', 'AWS Redshift', 'MySQL', 'AWS S3', 'Slack API', 'Email API'],
    link: 'https://example.com/pdi',
    github: 'https://github.com/example/pdi'
  },
  {
    title: 'Securly Visitor',
    period: 'Nov 2020 – Dec 2021',
    description: 'A data collection and tracking system that aggregates offender data from over 100 US counties using advanced web scraping techniques, building a comprehensive database for ongoing monitoring and analysis.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Web Scraping', 'Selenium', 'Pandas', 'Numpy', 'MySQL', 'API calls', 'Postman'],
    link: 'https://example.com/securly-visitor',
    github: 'https://github.com/example/securly-visitor'
  },
  {
    title: 'Securly 24 Audit Report',
    period: 'Mar 2019 – Dec 2019',
    description: 'An enterprise-grade audit reporting system that generates PR reports for over 500 clients, reducing report generation time by 80% while ensuring accuracy and compliance with organizational standards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Flask', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Elasticsearch', 'AWS Redshift', 'Slack API'],
    link: 'https://example.com/audit-report',
    github: 'https://github.com/example/audit-report'
  }
];

const Projects = () => {
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
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image - Always visible on small screens, conditional on larger screens */}
              <div className={`md:col-span-7 relative group ${
                index % 2 === 0 
                  ? 'md:order-2' 
                  : 'md:order-1'
              }`}>
                <div className="w-full h-full overflow-hidden rounded-lg relative">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className={`md:col-span-7 ${
                index % 2 === 0 
                  ? 'md:order-1 md:text-left md:pr-8 md:col-start-1 md:col-end-8' 
                  : 'md:order-2 md:text-right md:pl-8 md:col-start-6 md:col-end-13'
              }`}>
                <div className="space-y-4">
                  <p className="text-primary font-mono">Featured Project</p>
                  <h3 className="text-2xl font-bold hover:text-primary transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  
                  <div className="bg-secondary/30 p-6 rounded-lg shadow-md hover-card">
                    <p className="text-foreground">{project.description}</p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-2 text-sm ${
                    index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex items-center gap-4 ${
                    index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
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

export default Projects;
