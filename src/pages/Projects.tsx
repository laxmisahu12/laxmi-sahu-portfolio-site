
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Data Analysis Web Platform',
    period: 'January 2025 - Present',
    description: 'A comprehensive web platform that empowers data scientists to securely upload datasets, automate data cleaning, create interactive visualizations, and perform statistical analysis with AI Agents — all within a single intuitive interface.',
    techStack: ['Python', 'React', 'TypeScript', 'Docker', 'TensorFlow', 'AWS', 'D3.js'],
  },
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – Dec 2024',
    description: 'A comprehensive automation framework designed to streamline non-functional requirements testing by generating JMX files from Postman Collections, enabling seamless integration with JMeter and reducing manual testing efforts by 90%.',
    techStack: ['Python', 'Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk', 'Postman'],
  },
  {
    title: 'Pagescan (Domain and URL Classification)',
    period: 'Sept 2021 – May 2023',
    description: 'A high-performance domain and URL classification system that processes over 10 million URLs monthly, categorizing content for content filtering and security systems while ensuring high accuracy and minimal false positives.',
    techStack: ['Python', 'Web Scraping', 'Elasticsearch', 'Redis', 'AWS ASG', 'AWS Redshift', 'AWS S3', 'AWS Cloud Watch', 'Slack API', 'Email API'],
  },
  {
    title: 'Product Data Intelligence (PDI)',
    period: 'Oct 2019 – May 2022',
    description: 'An end-to-end ETL pipeline system that extracts, transforms, and loads data from multiple sources into analytical databases, providing actionable insights that led to a 45% improvement in marketing and sales strategies.',
    techStack: ['Python', 'Pandas', 'Numpy', 'Elasticsearch', 'Redis', 'AWS Redshift', 'MySQL', 'AWS S3', 'Slack API', 'Email API'],
  },
  {
    title: 'Securly Visitor',
    period: 'Nov 2020 – Dec 2021',
    description: 'A data collection and tracking system that aggregates offender data from over 100 US counties using advanced web scraping techniques, building a comprehensive database for ongoing monitoring and analysis.',
    techStack: ['Python', 'Web Scraping', 'Selenium', 'Pandas', 'Numpy', 'MySQL', 'API calls', 'Postman'],
  },
  {
    title: 'Securly 24 Audit Report',
    period: 'Mar 2019 – Dec 2019',
    description: 'An enterprise-grade audit reporting system that generates PR reports for over 500 clients, reducing report generation time by 80% while ensuring accuracy and compliance with organizational standards.',
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
        title="Projects" 
        subtitle="A showcase of my technical projects and solutions"
      />
      
      <div className="section-container">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              <div className="space-y-4 hover-card">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
