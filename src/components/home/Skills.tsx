
import { ArrowRight, Code, Database, Server, Layers, Cloud, BarChart, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import { Button } from '@/components/ui/button';

const skillsWithIcons = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'SQL'],
    icon: <Code className="skill-icon" />
  },
  {
    category: 'Frameworks & Libraries',
    items: ['PySpark', 'Flask', 'Pandas', 'NumPy'],
    icon: <Layers className="skill-icon" />
  },
  {
    category: 'Data & Cloud',
    items: ['ETL', 'AWS', 'GCP', 'BigQuery'],
    icon: <Cloud className="skill-icon" />
  },
  {
    category: 'Tools & Technologies',
    items: ['Tableau', 'Jenkins', 'Selenium', 'Redis'],
    icon: <Terminal className="skill-icon" />
  }
];

const Skills = () => {
  return (
    <section className="section-container section-fade-in relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      <div className="relative z-10">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A snapshot of my technical capabilities and proficiencies"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillsWithIcons.map((skill, index) => (
            <div 
              key={skill.category} 
              className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover-card border border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center md:items-start">
                {skill.icon}
                <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm">
            <Database className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
            <p className="text-muted-foreground">Expert in building ETL pipelines, data transformation, and web scraping solutions to process millions of data points efficiently.</p>
          </div>
          
          <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm">
            <BarChart className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
            <p className="text-muted-foreground">Creating insightful analytics dashboards with Tableau, Mode Analytics, and Kibana to transform raw data into business intelligence.</p>
          </div>
          
          <div className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm">
            <GitBranch className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">DevOps & Automation</h3>
            <p className="text-muted-foreground">Streamlining workflows with Jenkins, JMeter, and automated testing frameworks to improve development efficiency.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button asChild className="animated-gradient text-white">
            <Link to="/skills" className="flex items-center gap-2 mx-auto">
              View All Skills
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
