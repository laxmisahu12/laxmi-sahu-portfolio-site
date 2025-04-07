
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'ETL Data Pipeline for URL Classification',
    description: 'Developed an end-to-end data pipeline for classifying and analyzing millions of URLs monthly. The system extracts data from multiple sources, performs complex transformations, and loads the results into analytical databases.',
    image: 'https://via.placeholder.com/600x340',
    techStack: ['Python', 'AWS', 'Kafka', 'Elasticsearch', 'Redis'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'Automated Testing Framework',
    description: 'Built a robust automation framework that generates JMX files from Postman Collections, enabling seamless integration with JMeter. This solution was integrated into Jenkins pipeline, reducing manual testing efforts by 90%.',
    image: 'https://via.placeholder.com/600x340',
    techStack: ['Java', 'Jenkins', 'JMeter', 'Postman', 'AWS S3'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'Swim Team Management Application',
    description: 'Engineered a comprehensive web application for swim team management, reducing administrative tasks by 70% and saving coaches over 10 hours weekly.',
    image: 'https://via.placeholder.com/600x340',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'Educational ERP Android App',
    description: 'Developed an Android application for managing educational institution modules, improving management efficiency by 35% and achieving a 95% user satisfaction rate.',
    image: 'https://via.placeholder.com/600x340',
    techStack: ['Java', 'Android SDK', 'Firebase', 'RESTful APIs'],
    links: {
      demo: '#',
      github: '#'
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-fade-in">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg overflow-hidden border border-border/50 hover-card">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <Button asChild variant="default" size="sm">
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
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
