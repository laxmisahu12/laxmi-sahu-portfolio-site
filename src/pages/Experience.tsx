
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Freelance Data & Analytics Engineer',
    company: 'Self-Employed',
    companyUrl: 'https://laxmisahu.vercel.app',
    period: 'January 2025 – Present',
    location: 'Stockholm, Sweden',
    achievements: [
      'Built Swedish Energy & Weather Analytics Platform: end-to-end data pipeline using Snowflake (medallion architecture), Apache Airflow, and dbt Cloud to ingest and model real-time Swedish energy and weather API data.',
      'Designed analytics-ready fact and dimension tables with automated data quality tests and full dbt documentation, enabling trusted self-service analysis.',
      'Developed an interactive Streamlit dashboard for energy trend exploration and forecasting, deployed on free cloud tiers (Astronomer, Snowflake, dbt Cloud, Streamlit Cloud).',
      'Engineered LUX, a multi-modal AI assistant using LangChain, Google Gemini Pro, and LiveKit; integrated live web search, email, and weather APIs demonstrating advanced agentic AI design.',
      'Active participant in 8+ hackathons (AI Sweden, Microsoft, Google, Epiroc) and speaker at Women in AI Sweden.'
    ]
  },
  {
    title: 'System Analyst – Data Engineering & QA Automation',
    company: 'Bitwise Solutions Pvt. Ltd',
    companyUrl: 'https://www.bitwiseglobal.com/',
    period: 'July 2024 – December 2024',
    location: 'Pune, India (Remote)',
    achievements: [
      'Engineered NFR Automation Framework that automated JMX file generation from Postman Collections, reducing manual performance testing efforts by 90% and accelerating QA cycles.',
      'Integrated framework into Jenkins CI/CD pipeline with Apache Kafka for real-time data streaming, AWS S3 for artifact storage, and Splunk for end-to-end data observability.',
      'Built load testing frameworks for high-volume data processing systems, ensuring reliability under peak loads of 100K+ requests per hour.',
      'Implemented data quality validation frameworks across 5–7 datasets in Splunk, enabling real-time analytics and observable, data-driven decision making.',
      'Optimised data pipeline workflows, reducing infrastructure costs by 25% through intelligent resource allocation and automated scaling.'
    ]
  },
  {
    title: 'Software Engineer → Senior Software Engineer',
    company: 'Securly India Private Limited',
    companyUrl: 'https://www.securly.com/',
    period: 'March 2019 – May 2023',
    location: 'Pune, India',
    achievements: [
      'Designed and scaled large-scale ETL/ELT pipelines integrating 5+ disparate data sources, improving reporting efficiency by 60% and reducing data latency from hours to minutes.',
      'Built domain/URL classification module using PySpark and Spark/Hadoop, processing 10M+ URLs monthly with 99.5% uptime.',
      'Architected Product Data Intelligence (PDI) platform delivering 45% improvement in marketing ROI through automated data collection, transformation, and BI dashboards.',
      'Automated audit reporting for 500+ clients using Apache Airflow-scheduled ETL jobs and SQL optimisation, reducing report generation time from 8 hours to 90 minutes (80% improvement).',
      'Led legacy system refactoring, reducing data processing errors by 30% and improving system performance by 20%.',
      'Developed web scraping pipeline aggregating offender data from 100+ US county websites using Selenium and BeautifulSoup, with daily incremental loads to PostgreSQL.'
    ]
  },
  {
    title: 'Full Stack & Android Developer',
    company: 'SPEGI Technologies',
    companyUrl: 'http://www.spegitech.com/',
    period: 'December 2015 – May 2018',
    location: 'Indore, India',
    achievements: [
      'Engineered Swim Team Management web application with integrated analytics and reporting, reducing administrative tasks by 70% and saving coaches 10+ hours weekly for 50+ clients.',
      'Developed Android ERP application for educational institutions with reporting dashboards and data visualisation, improving management efficiency by 35% with 95% user satisfaction.',
      'Designed normalised MySQL database schemas supporting both transactional and analytical workloads.'
    ]
  }
];

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Laxmi Sahu — Data Engineer & Data Analyst</title>
        <meta name="description" content="Professional experience of Laxmi Sahu — Data Engineer and Data Analyst with roles at Securly, Bitwise, and freelance projects in Stockholm, Sweden." />
      </Helmet>
      
      <PageBanner 
        title="Professional Experience" 
        subtitle="A detailed overview of my career journey and key accomplishments"
      />
      
      <div className="section-container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey through various roles and organizations"
          className="section-fade-in"
        />
        
        <div className="space-y-12 section-fade-in">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-secondary/30 p-6 rounded-lg shadow-sm border border-border/50 hover-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <h4 className="text-lg text-primary">
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company}
                        </a>
                      </h4>
                    </div>
                    
                    <div className="mt-2 md:mt-0 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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

export default Experience;
