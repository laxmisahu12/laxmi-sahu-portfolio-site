
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Swedish Energy & Weather Analytics Platform',
    period: 'January 2026 – Present',
    description: 'End-to-end data analytics platform analysing the relationship between weather patterns and energy production/consumption in Sweden using real-time public APIs. Designed a medallion architecture (Bronze → Silver → Gold) in Snowflake, orchestrated ingestion and transformations with Apache Airflow (Astronomer) and dbt Cloud, and built analytics-ready fact and dimension tables with automated data quality tests. Deployed an interactive Streamlit dashboard for trend exploration and forecasting — fully on free cloud tiers.',
    techStack: ['Snowflake', 'Apache Airflow', 'dbt Cloud', 'Streamlit', 'Python', 'SQL', 'REST APIs', 'Astronomer'],
  },
  {
    title: 'LUX: Multi-Modal AI Assistant',
    period: 'June 2025',
    description: 'Sophisticated multi-modal AI agent inspired by Iron Man\'s Jarvis. Architected as a tool-using agent in LangChain with LiveKit powering real-time voice, video, and chat in a unified interface. LUX can perform live web searches via DuckDuckGo, send emails, and report real-time weather conditions — demonstrating advanced agentic AI design, prompt engineering, and safe external API integration.',
    techStack: ['LangChain', 'Google Gemini Pro', 'LiveKit', 'Python', 'DuckDuckGo API', 'Prompt Engineering'],
  },
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – December 2024',
    description: 'Comprehensive automation framework that generates JMX files from Postman Collections, enabling seamless JMeter integration and reducing manual performance testing efforts by 90%. Integrated into Jenkins CI/CD pipeline with Apache Kafka for real-time data streaming, AWS S3 for artifact storage, and Splunk for end-to-end observability and monitoring across high-volume data processing systems.',
    techStack: ['Python', 'Apache Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk', 'Postman'],
  },
  {
    title: 'Pagescan — Domain & URL Classification',
    period: 'September 2021 – May 2023',
    description: 'High-performance domain and URL classification system processing 10M+ URLs monthly using PySpark and distributed computing (Hadoop, Spark). Categorises web content for filtering and security systems with 99.5% uptime. Built on AWS with auto-scaling, real-time monitoring via CloudWatch, and structured data storage in Redshift — delivering high accuracy with minimal false positives.',
    techStack: ['Python', 'PySpark', 'Elasticsearch', 'Redis', 'AWS Redshift', 'AWS S3', 'AWS CloudWatch', 'Hadoop', 'Spark'],
  },
  {
    title: 'Product Data Intelligence (PDI) Platform',
    period: 'October 2019 – May 2022',
    description: 'End-to-end ETL/ELT platform extracting and transforming data from 5+ disparate sources (APIs, databases, flat files) into analytical schemas in AWS Redshift. Delivered Tableau and Looker Studio dashboards that provided actionable marketing insights, resulting in a 45% improvement in marketing ROI and a 60% increase in reporting efficiency. Reduced data latency from hours to near real-time.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Elasticsearch', 'Redis', 'AWS Redshift', 'MySQL', 'Tableau', 'Looker Studio'],
  },
  {
    title: 'Securly Visitor — Offender Data Pipeline',
    period: 'November 2020 – December 2021',
    description: 'Automated data collection pipeline aggregating offender records from 100+ US county websites using Selenium and BeautifulSoup. Stored structured data in PostgreSQL with daily incremental loads, maintaining a comprehensive and continuously updated database for monitoring and analysis at scale.',
    techStack: ['Python', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Pandas', 'NumPy'],
  },
  {
    title: 'Securly 24 Audit Reporting System',
    period: 'March 2019 – December 2019',
    description: 'Enterprise-grade automated reporting system generating compliance and audit reports for 500+ clients. Reduced report generation time by 80% (from 8 hours to 90 minutes) using advanced SQL optimisation, scheduled ETL jobs, and Python-based data processing with Matplotlib and Seaborn visualisations. Built on AWS Redshift and Elasticsearch.',
    techStack: ['Python', 'Flask', 'Pandas', 'Matplotlib', 'Seaborn', 'Elasticsearch', 'AWS Redshift', 'SQL'],
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Laxmi Sahu — Data Engineer & Data Analyst</title>
        <meta name="description" content="Projects by Laxmi Sahu — including a Snowflake + dbt + Airflow analytics platform, AI assistants, ETL pipelines, BI dashboards, and more." />
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
