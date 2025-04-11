
import { ArrowRight, Code, Database, Server, FileCode, Activity, Cpu, BrainCircuit, Sparkles, Bot, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'SQL'],
    icon: <Code className="h-6 w-6 text-primary" />
  },
  {
    category: 'Frameworks & Libraries',
    items: ['PySpark', 'Flask', 'Pandas', 'NumPy'],
    icon: <FileCode className="h-6 w-6 text-primary" />
  },
  {
    category: 'Data & Cloud',
    items: ['ETL', 'AWS', 'GCP', 'BigQuery'],
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    category: 'AI & ML',
    items: ['NLP', 'Computer Vision', 'TensorFlow', 'PyTorch'],
    icon: <BrainCircuit className="h-6 w-6 text-primary" />
  },
  {
    category: 'Tools & Technologies',
    items: ['Tableau', 'Jenkins', 'Selenium', 'Redis'],
    icon: <Activity className="h-6 w-6 text-primary" />
  }
];

const Skills = () => {
  return (
    <section className="section-container section-fade-in pt-24" id="skills">
      <h2 className="section-title numbered-heading">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
        {skills.map((skill) => (
          <div 
            key={skill.category} 
            className="bg-secondary/30 p-6 rounded-md shadow-sm hover-card border border-border/50 transition-all duration-300 hover:border-primary/50"
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-lg font-semibold text-foreground font-mono">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item} 
                  className="skill-badge transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
          <Link to="/skills" className="flex items-center gap-2 font-mono text-sm group">
            View All Skills
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Skills;
