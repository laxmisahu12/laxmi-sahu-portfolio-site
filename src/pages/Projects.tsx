
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Database, Code, Server, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'ETL Data Pipeline for URL Classification',
    description: 'Developed an end-to-end data pipeline for classifying and analyzing millions of URLs monthly. The system extracts data from multiple sources, performs complex transformations, and loads the results into analytical databases.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    techStack: ['Python', 'AWS', 'Kafka', 'Elasticsearch', 'Redis'],
    links: {
      demo: '#',
      github: '#'
    },
    icon: <Database className="text-primary w-10 h-10" />
  },
  {
    title: 'Automated Testing Framework',
    description: 'Built a robust automation framework that generates JMX files from Postman Collections, enabling seamless integration with JMeter. This solution was integrated into Jenkins pipeline, reducing manual testing efforts by 90%.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    techStack: ['Java', 'Jenkins', 'JMeter', 'Postman', 'AWS S3'],
    links: {
      demo: '#',
      github: '#'
    },
    icon: <Cpu className="text-primary w-10 h-10" />
  },
  {
    title: 'Swim Team Management Application',
    description: 'Engineered a comprehensive web application for swim team management, reducing administrative tasks by 70% and saving coaches over 10 hours weekly.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript'],
    links: {
      demo: '#',
      github: '#'
    },
    icon: <Code className="text-primary w-10 h-10" />
  },
  {
    title: 'Educational ERP Android App',
    description: 'Developed an Android application for managing educational institution modules, improving management efficiency by 35% and achieving a 95% user satisfaction rate.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    techStack: ['Java', 'Android SDK', 'Firebase', 'RESTful APIs'],
    links: {
      demo: '#',
      github: '#'
    },
    icon: <Server className="text-primary w-10 h-10" />
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
      
      <div className="section-container relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="relative z-10">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Highlighting some of my most impactful work"
            className="section-fade-in"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-fade-in">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 hover-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 p-3 bg-background/70 backdrop-blur-sm rounded-full z-20">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="tech-badge"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 mt-4">
                    <Button asChild variant="default" size="sm" className="animated-gradient text-white">
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary">
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 section-fade-in">
            <SectionHeading 
              title="Project Approach" 
              subtitle="How I tackle complex technical challenges" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Research & Planning</h3>
                <p className="text-muted-foreground">Thorough analysis of requirements, constraints and potential solutions before implementation begins.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-2xl font-bold text-primary">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
                <p className="text-muted-foreground">Incremental approach with continuous testing and feedback to ensure alignment with requirements.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-2xl font-bold text-primary">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimization & Scaling</h3>
                <p className="text-muted-foreground">Performance optimization and architecture refinement to handle growing demands and data volumes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
