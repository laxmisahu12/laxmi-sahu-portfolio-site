import PageBanner from '@/components/shared/PageBanner';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Swedish Energy & Weather Analytics Platform',
    period: 'January 2026 – Present',
    description: 'End-to-end analytics platform analysing weather vs energy patterns in Sweden. Medallion architecture (Bronze → Silver → Gold) in Snowflake, orchestrated with Apache Airflow and dbt Cloud. Interactive Streamlit dashboard for forecasting — fully on free cloud tiers.',
    techStack: ['Snowflake', 'Apache Airflow', 'dbt Cloud', 'Streamlit', 'Python', 'SQL', 'REST APIs'],
    featured: true,
    tag: 'Freelance · Live',
  },
  {
    title: 'LUX: Multi-Modal AI Assistant',
    period: 'June 2025',
    description: "AI agent inspired by Iron Man's Jarvis. Built with LangChain + LiveKit for real-time voice, video, and chat. Integrates live web search, email, and weather APIs via Google Gemini Pro.",
    techStack: ['LangChain', 'Google Gemini Pro', 'LiveKit', 'Python', 'Prompt Engineering'],
    featured: true,
    tag: 'Freelance · AI',
  },
  {
    title: 'NFR Automation Framework',
    period: 'July 2024 – December 2024',
    description: 'Automation framework generating JMX files from Postman Collections, cutting manual testing by 90%. Integrated into Jenkins CI/CD with Kafka, AWS S3, and Splunk for full observability.',
    techStack: ['Python', 'Apache Kafka', 'JMeter', 'AWS S3', 'Jenkins', 'Splunk'],
    featured: false,
    tag: 'Bitwise Solutions',
  },
  {
    title: 'Pagescan — URL Classification',
    period: 'September 2021 – May 2023',
    description: 'High-performance URL classification system processing 10M+ URLs monthly using PySpark and Spark/Hadoop. 99.5% uptime on AWS with auto-scaling and CloudWatch monitoring.',
    techStack: ['PySpark', 'Elasticsearch', 'Redis', 'AWS Redshift', 'Hadoop', 'Spark'],
    featured: false,
    tag: 'Securly',
  },
  {
    title: 'Product Data Intelligence (PDI)',
    period: 'October 2019 – May 2022',
    description: 'ETL/ELT platform from 5+ disparate sources into AWS Redshift. Tableau and Looker Studio dashboards delivering 45% marketing ROI improvement and 60% faster reporting.',
    techStack: ['Python', 'Pandas', 'AWS Redshift', 'MySQL', 'Tableau', 'Looker Studio'],
    featured: false,
    tag: 'Securly',
  },
  {
    title: 'Securly Visitor — Data Pipeline',
    period: 'November 2020 – December 2021',
    description: 'Automated scraping pipeline aggregating offender records from 100+ US county websites using Selenium and BeautifulSoup, with daily incremental loads to PostgreSQL.',
    techStack: ['Python', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Pandas'],
    featured: false,
    tag: 'Securly',
  },
  {
    title: 'Securly 24 Audit Reporting',
    period: 'March 2019 – December 2019',
    description: 'Automated compliance reports for 500+ clients. Reduced generation time by 80% (8 hours → 90 min) using Airflow-scheduled ETL, SQL optimisation, and Python visualisations.',
    techStack: ['Python', 'Flask', 'Pandas', 'Matplotlib', 'AWS Redshift', 'SQL'],
    featured: false,
    tag: 'Securly',
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Helmet>
        <title>Projects | Laxmi Sahu — Data Engineer & Data Analyst</title>
        <meta name="description" content="Projects by Laxmi Sahu — Snowflake + dbt + Airflow analytics platform, AI assistants, ETL pipelines, BI dashboards, and more." />
      </Helmet>

      <PageBanner
        title="Projects"
        subtitle="A showcase of my technical projects and solutions"
      />

      <div className="section-container space-y-16">

        {/* Featured projects — large cards */}
        <div>
          <h2 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <div
                key={i}
                className="group bg-secondary/30 border border-border/50 hover:border-primary/40 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {project.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Calendar size={11} />
                    {project.period}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other projects — compact grid */}
        <div>
          <h2 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, i) => (
              <div
                key={i}
                className="group bg-secondary/30 border border-border/50 hover:border-primary/40 rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
                    {project.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Calendar size={10} />
                    {project.period.split('–')[0].trim()}
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-muted-foreground font-mono px-1">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
