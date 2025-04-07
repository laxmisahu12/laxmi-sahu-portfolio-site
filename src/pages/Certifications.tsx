
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: 'Azure Databricks and PySpark3',
    issuer: 'Microsoft',
    date: 'January 2023',
    description: 'Advanced certification in Azure Databricks and PySpark3 for big data processing and analytics.',
    image: 'https://via.placeholder.com/200',
    url: '#'
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2022',
    description: 'Certification validating expertise in designing and deploying scalable systems on AWS.',
    image: 'https://via.placeholder.com/200',
    url: '#'
  },
  {
    title: 'Python for Data Science and Machine Learning',
    issuer: 'Udemy',
    date: 'September 2021',
    description: 'Comprehensive course covering Python libraries for data analysis and machine learning.',
    image: 'https://via.placeholder.com/200',
    url: '#'
  }
];

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>Certifications | Laxmi Sahu</title>
        <meta name="description" content="Explore Laxmi Sahu's professional certifications and credentials in data engineering, cloud platforms, and more." />
      </Helmet>
      
      <PageBanner 
        title="Certifications" 
        subtitle="Professional credentials and ongoing learning journey"
      />
      
      <div className="section-container">
        <SectionHeading 
          title="Professional Certifications" 
          subtitle="Validating my expertise and commitment to continuous learning"
          className="section-fade-in"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-fade-in">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg border border-border/50 overflow-hidden hover-card">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-background p-2 flex items-center justify-center shadow-sm">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} logo`} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-2">{cert.title}</h3>
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                  <Award size={16} />
                  <span>{cert.issuer}</span>
                </div>
                
                <div className="flex items-center justify-center text-muted-foreground mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <p className="text-center text-muted-foreground mb-6">
                  {cert.description}
                </p>
                
                <div className="flex justify-center">
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 section-fade-in">
          <SectionHeading 
            title="Continuous Learning" 
            subtitle="My approach to staying current with technology trends and skills"
          />
          
          <div className="bg-secondary/30 p-8 rounded-lg border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Learning Philosophy</h3>
                <p className="mb-4">
                  I believe that continuous learning is essential in the rapidly evolving field of technology. I regularly dedicate time to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Completing online courses and workshops</li>
                  <li>Participating in technical webinars and conferences</li>
                  <li>Experimenting with new technologies through personal projects</li>
                  <li>Reading technical blogs, papers, and books</li>
                  <li>Engaging with professional communities and forums</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Current Focus Areas</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Advanced Data Engineering Techniques</h4>
                    <p className="text-muted-foreground">Exploring modern data architecture patterns and real-time processing frameworks.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Machine Learning & AI</h4>
                    <p className="text-muted-foreground">Building practical ML models for data processing and predictive analytics.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Cloud-Native Architecture</h4>
                    <p className="text-muted-foreground">Designing scalable, resilient systems using Kubernetes and serverless technologies.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Data Visualization & Storytelling</h4>
                    <p className="text-muted-foreground">Creating impactful data narratives through advanced visualization techniques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
