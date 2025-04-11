
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { Code, Database, Server, Globe, FileCode, BarChart, Terminal, Cog, Settings, WifiIcon, BrainCircuit, Sparkles, Bot, Workflow } from 'lucide-react';

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'SQL'],
    icon: <Code className="h-6 w-6 text-primary" />
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['PySpark3', 'Flask', 'Pandas', 'NumPy'],
    icon: <FileCode className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data Engineering',
    skills: ['ETL', 'Web Scraping', 'Data Pipelines', 'Data Modeling'],
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    category: 'AI & Machine Learning',
    skills: ['NLP', 'Computer Vision', 'TensorFlow', 'PyTorch', 'LLMs', 'Prompt Engineering'],
    icon: <BrainCircuit className="h-6 w-6 text-primary" />
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'AWS Redshift', 'Redis', 'Elasticsearch'],
    icon: <Server className="h-6 w-6 text-primary" />
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS ECS', 'EC2', 'S3', 'Cloud Watch', 'ASG', 'GCP', 'BigQuery'],
    icon: <Globe className="h-6 w-6 text-primary" />
  },
  {
    category: 'DevOps & Automation',
    skills: ['Jenkins', 'Selenium', 'JMeter', 'Git'],
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    category: 'API & Integration',
    skills: ['REST API', 'gRPC', 'Email API', 'Slack API', 'Kafka'],
    icon: <WifiIcon className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data Visualization',
    skills: ['Mode Analytics', 'Tableau', 'Looker Studio', 'Elastic Kibana', 'Matplotlib', 'Seaborn'],
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    category: 'Tools & IDE',
    skills: ['Postman', 'Ubuntu', 'PyCharm', 'VSCode'],
    icon: <Terminal className="h-6 w-6 text-primary" />
  }
];

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Laxmi Sahu</title>
        <meta name="description" content="Explore Laxmi Sahu's technical skills and expertise in data engineering, programming languages, cloud platforms, and more." />
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
            <div 
              key={index} 
              className="bg-secondary/30 p-6 rounded-lg hover-card transition-all duration-300 hover:border-primary/50 border border-border/50"
            >
              <div className="flex items-center mb-4">
                {group.icon}
                <h3 className="text-xl font-semibold ml-3">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="skill-badge transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 section-fade-in">
          <SectionHeading title="Proficiency" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Data Engineering & ETL</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Python & Related Libraries</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Cloud Platforms (AWS/GCP)</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Web Scraping & Automation</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">AI & Machine Learning</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Java & Backend Development</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">API Integration & Development</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Database Management</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-2.5 rounded-full animate-[slideRight_1.5s_ease-out]" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
