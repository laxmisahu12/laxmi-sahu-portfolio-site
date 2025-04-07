
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
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
    <section className="section-container section-fade-in bg-secondary/30">
      <SectionHeading 
        title="Skills & Expertise" 
        subtitle="A snapshot of my technical capabilities and proficiencies"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-background p-6 rounded-lg shadow-sm hover-card">
            <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
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
      
      <div className="text-center mt-8">
        <Button asChild>
          <Link to="/skills" className="flex items-center gap-2 mx-auto">
            View All Skills
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Skills;
