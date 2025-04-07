
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Laxmi Sahu</title>
        <meta name="description" content="Learn about Laxmi Sahu, a Data Engineer and Full Stack Developer with 7+ years of experience specializing in data pipelines, ETL, and cloud solutions." />
      </Helmet>
      
      <PageBanner 
        title="About Me" 
        subtitle="Learn more about my background, expertise, and journey"
      />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start section-fade-in">
          <div>
            <SectionHeading title="Professional Summary" />
            
            <div className="space-y-4 text-lg">
              <p>
                With 7+ years of experience in Enterprise Application Development, I specialize in Data Engineering, ETL, Python, GCP and AWS to build scalable, efficient, and high-performance solutions.
              </p>
              <p>
                My expertise spans across designing data pipelines, real-time processing, automation frameworks, and system optimization, leading to impactful results such as:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>90% reduction in manual efforts by automating workflows using JMeter, Postman, and Jenkins.</li>
                <li>30% decrease in system errors and 20% performance improvement in critical applications.</li>
                <li>60% boost in reporting efficiency and 45% enhancement in marketing insights through data analytics.</li>
                <li>Building and optimizing large-scale ETL pipelines, processing over 10M+ URLs monthly for classification and analysis.</li>
              </ul>
              
              <p>
                I am proficient in Agile Methodology & SDLC for full application cycles including Requirement Analysis, Design, Development, Testing and Enhancements.
              </p>
              <p>
                I have extensive expertise in Data Visualization tools like Mode Analytics, Tableau, Looker Studio and Elastic Kibana for actionable insights and reporting.
              </p>
              <p>
                I have a proven ability to design and implement core framework components, container libraries, and scalable backend systems.
              </p>
              <p>
                I am passionate about AI, Machine Learning, and Data-Driven Decision Making—exploring ways to leverage AI in data processing, predictive analytics, and automation.
              </p>
              <p>
                Currently based in Stockholm, Sweden, I am open to opportunities that can leverage my skills and experience.
              </p>
            </div>
            
            <div className="mt-8">
              <ContactIcons />
            </div>
          </div>
          
          <div>
            <SectionHeading title="Education & Experience" />
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={24} className="text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg hover-card mb-4">
                <h4 className="text-lg font-medium">B.E. in Computer Science & Engineering</h4>
                <p className="text-primary">Sanghavi Innovative Academy, RGTU, Indore</p>
                <p className="text-muted-foreground mt-1">August 2010 – May 2014</p>
                <p className="mt-2">Indore, India</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={24} className="text-primary" />
                <h3 className="text-xl font-semibold">Experience Timeline</h3>
              </div>
              
              <div className="space-y-6">
                <div className="timeline-item">
                  <h4 className="text-lg font-medium">System Analyst</h4>
                  <p className="text-primary">Bitwise Solutions Pvt. Ltd</p>
                  <p className="text-muted-foreground">July 2024 - December 2024 | Pune, India</p>
                </div>
                
                <div className="timeline-item">
                  <h4 className="text-lg font-medium">Sr. Software Engineer</h4>
                  <p className="text-primary">Securly India Private Limited</p>
                  <p className="text-muted-foreground">May 2020 - May 2023 | Pune, India</p>
                </div>
                
                <div className="timeline-item">
                  <h4 className="text-lg font-medium">Software Engineer</h4>
                  <p className="text-primary">Securly India Private Limited</p>
                  <p className="text-muted-foreground">October 2019 - May 2020 | Pune, India</p>
                </div>
                
                <div className="timeline-item">
                  <h4 className="text-lg font-medium">Full Stack & Android Developer</h4>
                  <p className="text-primary">SPEGI Technologies</p>
                  <p className="text-muted-foreground">December 2015 - May 2018 | Indore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
