
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – Dec 2024',
    description: 'A comprehensive automation framework designed to streamline non-functional requirements testing by generating JMX files from Postman Collections, enabling seamless integration with JMeter and reducing manual testing efforts by 90%.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk', 'Postman'],
  },
  {
    title: 'Pagescan (Domain and URL Classification)',
    period: 'Sept 2021 – May 2023',
    description: 'A high-performance domain and URL classification system that processes over 10 million URLs monthly, categorizing content for content filtering and security systems while ensuring high accuracy and minimal false positives.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Web Scraping', 'Elasticsearch', 'Redis', 'AWS ASG', 'AWS Redshift', 'AWS S3', 'AWS Cloud Watch', 'Slack API', 'Email API'],
  },
  {
    title: 'Product Data Intelligence (PDI)',
    period: 'Oct 2019 – May 2022',
    description: 'An end-to-end ETL pipeline system that extracts, transforms, and loads data from multiple sources into analytical databases, providing actionable insights that led to a 45% improvement in marketing and sales strategies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Pandas', 'Numpy', 'Elasticsearch', 'Redis', 'AWS Redshift', 'MySQL', 'AWS S3', 'Slack API', 'Email API'],
  },
  {
    title: 'Securly Visitor',
    period: 'Nov 2020 – Dec 2021',
    description: 'A data collection and tracking system that aggregates offender data from over 100 US counties using advanced web scraping techniques, building a comprehensive database for ongoing monitoring and analysis.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Web Scraping', 'Selenium', 'Pandas', 'Numpy', 'MySQL', 'API calls', 'Postman'],
  },
  {
    title: 'Securly 24 Audit Report',
    period: 'Mar 2019 – Dec 2019',
    description: 'An enterprise-grade audit reporting system that generates PR reports for over 500 clients, reducing report generation time by 80% while ensuring accuracy and compliance with organizational standards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'Flask', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Elasticsearch', 'AWS Redshift', 'Slack API'],
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
              className={`relative ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  {project.title}
                </h3>
                
                <div className="bg-secondary/30 p-6 rounded-lg shadow-md">
                  <p className="text-foreground">{project.description}</p>
                </div>
                
                <div className={`flex flex-wrap gap-2 text-sm ${
                  index % 2 === 0 ? '' : 'justify-end'
                }`}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="w-full overflow-hidden rounded-lg relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full object-cover rounded-lg shadow-lg" 
                    />
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
