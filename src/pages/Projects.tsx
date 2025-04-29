
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import { Github, ExternalLink, Folder } from 'lucide-react';

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
        <h2 className="numbered-heading">Projects</h2>
        
        <ul className="projects-grid space-y-24 mt-10">
          {projects.map((project, index) => (
            <li key={index} className={`project relative ${index % 2 === 0 ? '' : 'even'}`}>
              <div className="project-content">
                <h3 className="project-title text-2xl font-bold text-primary">
                  {project.title}
                </h3>
                
                <div className="project-description bg-light-navy p-6 rounded-lg my-5">
                  <p className="text-light-slate">{project.description}</p>
                </div>
                
                <ul className={`project-tech-list flex flex-wrap gap-2 mt-6 ${
                  index % 2 !== 0 ? 'justify-end' : ''
                }`}>
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="text-light-slate font-mono text-xs">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        
        <h2 className="numbered-heading mt-24">Other Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(2, 5).map((project, index) => (
            <div 
              key={`other-${index}`} 
              className="other-project bg-light-navy rounded-lg p-6 hover-card cursor-pointer"
            >
              <div className="project-top flex justify-between items-center mb-8">
                <Folder className="text-primary" size={40} />
                <div className="project-links flex gap-4">
                  <a href="#" className="text-light-slate hover:text-primary">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-light-slate hover:text-primary">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-lightest-slate">
                {project.title}
              </h3>
              
              <div className="mt-4 mb-8">
                <p className="text-light-slate text-sm">{project.description.substring(0, 150)}...</p>
              </div>
              
              <div className="mt-auto">
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-light-slate">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
