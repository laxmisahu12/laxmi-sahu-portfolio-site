import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Briefcase, GraduationCap, MapPin, Award } from 'lucide-react';

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '10M+', label: 'Records / Month' },
  { value: '45%', label: 'Marketing ROI ↑' },
  { value: '500+', label: 'Clients Served' },
  { value: '80%', label: 'Faster Reporting' },
  { value: '8+', label: 'Hackathons' },
];

const timeline = [
  {
    year: '2025–Now',
    role: 'Freelance Data & Analytics Engineer',
    company: 'Self-Employed',
    location: 'Stockholm, Sweden',
    current: true,
  },
  {
    year: '2024',
    role: 'System Analyst',
    company: 'Bitwise Solutions',
    location: 'Pune, India (Remote)',
    current: false,
  },
  {
    year: '2019–2023',
    role: 'Software Engineer → Senior Software Engineer',
    company: 'Securly India',
    location: 'Pune, India',
    current: false,
  },
  {
    year: '2015–2018',
    role: 'Full Stack & Android Developer',
    company: 'SPEGI Technologies',
    location: 'Indore, India',
    current: false,
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Laxmi Sahu — Data Engineer & Data Analyst</title>
        <meta name="description" content="About Laxmi Sahu — Data Engineer and Data Analyst with 7+ years of experience in ETL/ELT pipelines, dbt, Apache Airflow, Snowflake, Tableau, Power BI, and Python. Based in Stockholm, Sweden." />
      </Helmet>

      <PageBanner title="About Me" subtitle="Learn more about my background, expertise, and journey" />

      <div className="section-container space-y-16 section-fade-in">

        {/* Top section — photo + summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Photo */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="relative w-56 mx-auto lg:mx-0">
              <div className="relative z-10 overflow-hidden rounded-xl border-2 border-primary/20">
                <AspectRatio ratio={1 / 1} className="bg-secondary/30">
                  <img
                    src="/lovable-uploads/8cd2f2ff-0d22-4565-ba19-026f6395f405.png"
                    alt="Laxmi Sahu"
                    className="object-cover h-full w-full brightness-90 contrast-105"
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-3 -right-3 border-2 border-primary w-full h-full rounded-xl z-0" />
            </div>

            {/* Location + availability badge */}
            <div className="flex flex-col gap-2 mt-4 w-full max-w-[224px]">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                Stockholm, Sweden 🇸🇪
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs font-mono text-green-400">Available for work</span>
              </div>
            </div>

            <div className="mt-2 w-full max-w-[224px]">
              <ContactIcons />
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2 space-y-4 text-lg">
            <SectionHeading title="Professional Summary" />
            <p>
              Data Engineer and Data Analyst with 7+ years of experience designing and building scalable data platforms, ETL/ELT pipelines, and BI solutions that transform complex datasets into strategic business decisions.
            </p>
            <p>
              My expertise spans the full modern data stack — from pipeline orchestration with Apache Airflow and dbt, to cloud data warehousing in Snowflake, BigQuery, and Redshift, to delivering self-service dashboards in Tableau, Power BI, and Looker Studio that stakeholders actually use.
            </p>
            <p>
              Currently based in Stockholm with a valid Swedish work permit, actively seeking Data Engineer and Data Analyst roles where technical depth meets business impact.
            </p>

            {/* Certifications pill row */}
            <div className="pt-4 flex flex-wrap gap-2">
              {['Azure AI Essentials', 'Azure ML Fundamentals', 'GitHub Copilot', 'AI Agents'].map((cert) => (
                <span key={cert} className="flex items-center gap-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">
                  <Award size={11} />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 py-8 border-y border-border/30">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Experience timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 pl-6 relative">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${item.current ? 'border-primary bg-primary/30' : 'border-border bg-background'}`} />
                    <div>
                      <div className="text-xs font-mono text-primary mb-1">{item.year}</div>
                      <h4 className="font-semibold text-foreground leading-snug">{item.role}</h4>
                      <p className="text-sm text-primary mt-0.5">{item.company}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <MapPin size={10} /> {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary/30 p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-xs font-mono text-primary mb-1">2018 – 2019</div>
                <h4 className="font-semibold">Post Graduate Diploma in Big Data Analytics</h4>
                <p className="text-sm text-primary mt-1">Centre for Development of Advanced Computing (CDAC)</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin size={10} /> Pune, India</p>
              </div>
              <div className="bg-secondary/30 p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-xs font-mono text-primary mb-1">2010 – 2014</div>
                <h4 className="font-semibold">B.E. in Computer Science & Engineering</h4>
                <p className="text-sm text-primary mt-1">Sanghvi Innovative Academy, RGTU</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin size={10} /> Indore, India</p>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Languages</h4>
              <div className="space-y-3">
                {[
                  { lang: 'English', level: 'Fluent', pct: 100 },
                  { lang: 'Swedish', level: 'Basic (ongoing)', pct: 30 },
                  { lang: 'Hindi', level: 'Native', pct: 100 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-mono">{l.lang}</span>
                      <span className="text-muted-foreground text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
