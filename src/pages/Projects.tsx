
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – Dec 2024',
    description: 'A comprehensive automation framework designed to streamline non-functional requirements testing by generating JMX files from Postman Collections, enabling seamless integration with JMeter and reducing manual testing efforts by 90%.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Implemented a module to automate the generation of JMX files from Postman Collection enabling seamless integration with JMeter',
      'Integrated the solution into the Jenkins pipeline, reducing manual work by 90%',
      'Utilized Kafka for real-time messaging, Splunk for reporting and AWS S3 for cloud storage'
    ],
    techStack: ['Python', 'Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk', 'Postman']
  },
  {
    title: 'Pagescan (Domain and URL Classification)',
    period: 'Sept 2021 – May 2023',
    description: 'A high-performance domain and URL classification system that processes over 10 million URLs monthly, categorizing content for content filtering and security systems while ensuring high accuracy and minimal false positives.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Developed a module for domain and URL classification, processing over 10 million URLs monthly',
      'Enhanced legacy code, reducing system errors by 30% and improving performance by 20%'
    ],
    techStack: ['Python', 'Web Scraping', 'Elasticsearch', 'Redis', 'AWS ASG', 'AWS Redshift', 'AWS S3', 'AWS Cloud Watch', 'Slack API', 'Email API']
  },
  {
    title: 'Product Data Intelligence (PDI)',
    period: 'Oct 2019 – May 2022',
    description: 'An end-to-end ETL pipeline system that extracts, transforms, and loads data from multiple sources into analytical databases, providing actionable insights that led to a 45% improvement in marketing and sales strategies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Led ETL project, extracting and transforming data from 5+ sources, resulting in a 60% increase in reporting efficiency',
      'Enabled data analysts to generate insights, contributing to a 45% improvement in marketing and sales strategies'
    ],
    techStack: ['Python', 'Pandas', 'Numpy', 'Elasticsearch', 'Redis', 'AWS Redshift', 'MySQL', 'AWS S3', 'Slack API', 'Email API']
  },
  {
    title: 'Securly Visitor',
    period: 'Nov 2020 – Dec 2021',
    description: 'A data collection and tracking system that aggregates offender data from over 100 US counties using advanced web scraping techniques, building a comprehensive database for ongoing monitoring and analysis.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Collected offender data from 100+ US counties using Selenium and web scraping techniques',
      'Assisted in building a robust database for tracking offenders'
    ],
    techStack: ['Python', 'Web Scraping', 'Selenium', 'Pandas', 'Numpy', 'MySQL', 'API calls', 'Postman']
  },
  {
    title: 'Securly 24 Audit Report',
    period: 'Mar 2019 – Dec 2019',
    description: 'An enterprise-grade audit reporting system that generates PR reports for over 500 clients, reducing report generation time by 80% while ensuring accuracy and compliance with organizational standards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Created an audit reporting system, generating PR reports for 500+ clients, reducing report generation time by 80%',
      'Led project development, ensuring zero critical issues post-deployment'
    ],
    techStack: ['Python', 'Flask', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Elasticsearch', 'AWS Redshift', 'Slack API']
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
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Highlighting some of my most impactful work"
          className="section-fade-in"
        />
        
        <div className="space-y-16 section-fade-in">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg overflow-hidden border border-border/50 hover-card">
              <div className="md:grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover md:h-full" 
                  />
                </div>
                
                <div className="md:col-span-7 p-6">
                  <div className="font-mono text-sm text-primary mb-1">{project.period}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="bg-background/50 p-4 rounded-md mb-4">
                    <h4 className="font-medium mb-2 text-sm">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
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
