
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { Code, Database, Server, Globe, FileCode, BarChart, Terminal, Cog, Settings } from 'lucide-react';

const skillGroups = [
  {
    category: 'Languages & Query',
    skills: ['SQL (Advanced)', 'Python', 'PySpark', 'Bash'],
    icon: <Code className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data Engineering & Pipelines',
    skills: ['ETL/ELT Development', 'Apache Airflow', 'dbt', 'Apache Kafka', 'Medallion Architecture', 'Star Schema', 'Dimensional Modeling', 'Event-Driven Architecture'],
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    category: 'Cloud Platforms',
    skills: ['Snowflake', 'GCP (BigQuery, Firebase)', 'AWS (Redshift, S3, EC2)', 'Azure (Databricks, Synapse, SQL)'],
    icon: <Globe className="h-6 w-6 text-primary" />
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    icon: <Server className="h-6 w-6 text-primary" />
  },
  {
    category: 'BI & Data Visualisation',
    skills: ['Tableau', 'Power BI', 'Looker Studio', 'Streamlit', 'Kibana', 'Matplotlib', 'Seaborn'],
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data Analysis',
    skills: ['Statistical Analysis', 'A/B Testing', 'Cohort Analysis', 'Funnel Analysis', 'Churn Prediction', 'KPI Development', 'Predictive Analytics'],
    icon: <Cog className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data Quality & Observability',
    skills: ['Data Governance', 'Data Profiling', 'Anomaly Detection', 'Splunk', 'CloudWatch', 'GDPR / PII Compliance'],
    icon: <Terminal className="h-6 w-6 text-primary" />
  },
  {
    category: 'DevOps & Automation',
    skills: ['CI/CD', 'Jenkins', 'Azure DevOps', 'Git', 'Docker', 'JMeter', 'Selenium'],
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'LangChain', 'BeautifulSoup'],
    icon: <FileCode className="h-6 w-6 text-primary" />
  }
];

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Laxmi Sahu — Data Engineer & Data Analyst</title>
        <meta name="description" content="Technical skills of Laxmi Sahu: SQL, Python, dbt, Apache Airflow, Snowflake, Tableau, Power BI, BigQuery, AWS, GCP, Azure, PySpark, data modeling, and more." />
      </Helmet>
      
      <PageBanner 
        title="Skills & Expertise" 
        subtitle="A comprehensive overview of my technical capabilities"
      />
      
      <div className="section-container">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My toolkit for building robust, scalable data solutions and applications"
          className="section-fade-in"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-fade-in">
          {skillGroups.map((group, index) => (
            <div key={index} className="bg-secondary/30 p-6 rounded-lg hover-card">
              <div className="flex items-center mb-4">
                {group.icon}
                <h3 className="text-xl font-semibold ml-3">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
