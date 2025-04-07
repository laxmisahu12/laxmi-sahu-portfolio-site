
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { Helmet } from 'react-helmet-async';
import { 
  Code, Database, CloudLightning, Layers, Server, BarChart, GitBranch, Terminal, 
  Globe, Cpu, MessageSquare, Zap
} from 'lucide-react';

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'SQL'],
    icon: <Code size={28} className="text-primary" />,
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['PySpark3', 'Flask', 'Pandas', 'NumPy'],
    icon: <Layers size={28} className="text-primary" />,
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    category: 'Data Engineering',
    skills: ['ETL', 'Web Scraping', 'Data Pipelines', 'Data Modeling'],
    icon: <Database size={28} className="text-primary" />,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'AWS Redshift', 'Redis', 'Elasticsearch'],
    icon: <Server size={28} className="text-primary" />,
    color: 'from-orange-500/20 to-amber-500/20'
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS ECS', 'EC2', 'S3', 'Cloud Watch', 'ASG', 'GCP', 'BigQuery'],
    icon: <CloudLightning size={28} className="text-primary" />,
    color: 'from-sky-500/20 to-blue-500/20'
  },
  {
    category: 'DevOps & Automation',
    skills: ['Jenkins', 'Selenium', 'JMeter', 'Git'],
    icon: <GitBranch size={28} className="text-primary" />,
    color: 'from-red-500/20 to-pink-500/20'
  },
  {
    category: 'API & Integration',
    skills: ['REST API', 'gRPC', 'Email API', 'Slack API', 'Kafka'],
    icon: <Globe size={28} className="text-primary" />,
    color: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    category: 'Data Visualization',
    skills: ['Mode Analytics', 'Tableau', 'Looker Studio', 'Elastic Kibana', 'Matplotlib', 'Seaborn'],
    icon: <BarChart size={28} className="text-primary" />,
    color: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    category: 'Tools & IDE',
    skills: ['Postman', 'Ubuntu', 'PyCharm', 'VSCode'],
    icon: <Terminal size={28} className="text-primary" />,
    color: 'from-gray-500/20 to-slate-500/20'
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
      
      <div className="section-container relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="relative z-10">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="My toolkit for building robust, scalable data solutions and applications"
            className="section-fade-in"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-fade-in">
            {skillGroups.map((group, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg hover-card bg-gradient-to-br ${group.color} border border-primary/10 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {group.icon}
                  <h3 className="text-xl font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="skill-badge bg-background/50 backdrop-blur-sm"
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 section-fade-in">
            <SectionHeading title="Core Competencies" subtitle="Areas where I excel and deliver exceptional value" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm hover-card">
                <Database className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Pipeline Design</h3>
                <p className="text-muted-foreground">Architecting robust ETL solutions that process, transform, and load millions of data points efficiently.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm hover-card">
                <Cpu className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-muted-foreground">Enhancing system performance through code optimization, caching strategies, and architectural improvements.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm hover-card">
                <MessageSquare className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Technical Leadership</h3>
                <p className="text-muted-foreground">Guiding teams through complex technical challenges with clear communication and strategic direction.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm hover-card">
                <Server className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cloud Architecture</h3>
                <p className="text-muted-foreground">Designing and implementing scalable solutions on AWS and GCP platforms with best practices.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm hover-card">
                <Zap className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automation</h3>
                <p className="text-muted-foreground">Creating automated workflows that reduce manual effort by up to 90% and improve reliability.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm hover-card">
                <BarChart className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
                <p className="text-muted-foreground">Transforming complex data into meaningful insights through intuitive dashboards and reports.</p>
              </div>
            </div>
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
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Python & Related Libraries</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Cloud Platforms (AWS/GCP)</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Web Scraping & Automation</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Data Visualization & Reporting</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Java & Backend Development</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">API Integration & Development</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Database Management</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div className="animated-gradient h-2.5 rounded-full" style={{ width: '90%' }}></div>
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

export default Skills;
