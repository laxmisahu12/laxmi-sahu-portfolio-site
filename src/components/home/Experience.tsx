import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const experiences = [
  {
    title: 'Freelance Data & Analytics Engineer',
    company: 'Self-Employed',
    companyUrl: 'https://laxmisahu.vercel.app',
    period: 'January 2025 – Present',
    location: 'Stockholm, Sweden',
    description: [
      'Built Swedish Energy & Weather Analytics Platform: end-to-end pipeline using Snowflake (medallion architecture), Apache Airflow, and dbt Cloud with an interactive Streamlit dashboard for forecasting.',
      'Engineered LUX — a multi-modal AI assistant using LangChain, Google Gemini Pro, and LiveKit for real-time voice, video, and chat with external API integrations.',
      'Active participant in 8+ hackathons (AI Sweden, Microsoft, Google, Epiroc) and speaker at Women in AI Sweden.',
    ]
  },
  {
    title: 'System Analyst – Data Engineering & QA Automation',
    company: 'Bitwise Solutions Pvt. Ltd',
    companyUrl: 'https://www.bitwiseglobal.com/',
    period: 'July 2024 – December 2024',
    location: 'Pune, India (Remote)',
    description: [
      'Engineered NFR Automation Framework generating JMX files from Postman Collections, reducing manual performance testing by 90%.',
      'Integrated Jenkins CI/CD pipeline with Apache Kafka for real-time streaming, AWS S3 for storage, and Splunk for end-to-end observability.',
      'Optimised data pipeline workflows, reducing infrastructure costs by 25% through intelligent resource allocation.',
    ]
  },
  {
    title: 'Software Engineer → Senior Software Engineer',
    company: 'Securly India Private Limited',
    companyUrl: 'https://www.securly.com/',
    period: 'March 2019 – May 2023',
    location: 'Pune, India',
    description: [
      'Built PySpark URL classification module processing 10M+ URLs monthly with 99.5% uptime.',
      'Led ETL pipelines from 5+ disparate sources, improving reporting efficiency by 60% and delivering 45% marketing ROI improvement.',
      'Automated audit reports for 500+ clients with Airflow, cutting generation time by 80% (8 hrs → 90 mins).',
      'Reduced data processing errors by 30% and improved system performance by 20% through data quality frameworks.',
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-container section-fade-in pt-24" id="experience">
      <h2 className="section-title numbered-heading">Where I've Worked</h2>

      <div className="flex flex-col md:flex-row gap-4 mt-12">
        <div className="md:w-40 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none mb-6 md:mb-0 border-b md:border-b-0 md:border-l border-border/50">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`px-4 py-3 text-left whitespace-nowrap md:border-l-2 font-mono text-sm transition-colors ${
                activeTab === index
                  ? 'text-primary border-primary bg-primary/5 md:bg-transparent'
                  : 'text-muted-foreground hover:text-primary border-transparent hover:bg-primary/5 md:hover:bg-transparent'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[250px]">
          {experiences.map((exp, index) => (
            <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
              <div className="mb-2">
                <h3 className="text-xl font-medium">
                  <span className="text-foreground">{exp.title}</span>
                  <span className="text-primary"> @ <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a></span>
                </h3>
                <p className="text-muted-foreground mt-1 font-mono text-sm">{exp.period} · {exp.location}</p>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-1.5 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link to="/experience" className="flex items-center gap-2 font-mono text-sm">
            View Full Experience
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Experience;
