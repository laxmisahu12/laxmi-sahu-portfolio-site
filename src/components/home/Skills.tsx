
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'SQL']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['PySpark', 'Flask', 'Pandas', 'NumPy']
  },
  {
    category: 'Data & Cloud',
    items: ['ETL', 'AWS', 'GCP', 'BigQuery']
  },
  {
    category: 'Tools & Technologies',
    items: ['Tableau', 'Jenkins', 'Selenium', 'Redis']
  }
];

const Skills = () => {
  return (
    <section className="section-container section-fade-in pt-24" id="skills">
      <h2 className="section-title numbered-heading">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-secondary/30 p-6 rounded-md shadow-sm hover-card border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground font-mono">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link to="/skills" className="flex items-center gap-2 font-mono text-sm">
            View All Skills
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Skills;
