
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { Briefcase, GraduationCap } from 'lucide-react';
const About = () => {
  return <>
      <Helmet>
        <title>About | Laxmi Sahu — Data Engineer & Data Analyst</title>
        <meta name="description" content="About Laxmi Sahu — Data Engineer and Data Analyst with 7+ years of experience in ETL/ELT pipelines, dbt, Apache Airflow, Snowflake, Tableau, Power BI, and Python. Based in Stockholm, Sweden." />
      </Helmet>
      
      <PageBanner title="About Me" subtitle="Learn more about my background, expertise, and journey" />
      
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 section-fade-in">
          <div>
            <SectionHeading title="Professional Summary" />
            
            <div className="space-y-4 text-lg">
              <p>
                Data Engineer and Data Analyst with 7+ years of experience designing and building scalable data platforms, ETL/ELT pipelines, and BI solutions that transform complex datasets into strategic business decisions.
              </p>
              <p>
                My expertise spans the full modern data stack — from pipeline orchestration with Apache Airflow and dbt, to cloud data warehousing in Snowflake, BigQuery, and Redshift, to delivering self-service dashboards in Tableau, Power BI, and Looker Studio.
              </p>
              <p>
                Key impact delivered across my career:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>45% improvement in marketing ROI through BI dashboards and actionable data insights.</li>
                <li>60% faster reporting and 80% reduction in manual processes through ETL automation and pipeline optimisation.</li>
                <li>30% decrease in data processing errors and 20% system performance improvement through data quality frameworks.</li>
                <li>10M+ records processed monthly with 99.5% uptime using PySpark and distributed computing.</li>
                <li>500+ client reports automated using advanced SQL optimisation and Apache Airflow scheduling.</li>
              </ul>
              
              <p>
                Currently based in Stockholm with a valid Swedish work permit. Actively seeking Data Engineer and Data Analyst roles where technical depth meets business impact.
              </p>
              
              <div className="mt-8">
                <ContactIcons />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <SectionHeading title="Education & Experience" />
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg hover-card mb-4">
                  <h4 className="text-lg font-medium">B.E. in Computer Science & Engineering</h4>
                  <p className="text-primary">Sanghavi Innovative Academy, RGTU, Indore</p>
                  <p className="text-muted-foreground mt-1">August 2010 – May 2014</p>
                  <p className="mt-2">Indore, India</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">Experience Timeline</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="timeline-item">
                    <h4 className="text-lg font-medium">Freelance Data & Analytics Engineer</h4>
                    <p className="text-primary">Self-Employed</p>
                    <p className="text-muted-foreground">January 2025 - Present | Stockholm, Sweden</p>
                  </div>
                  
                  <div className="timeline-item">
                    <h4 className="text-lg font-medium">System Analyst</h4>
                    <p className="text-primary">
                      <a href="https://www.bitwiseglobal.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Bitwise Solutions Pvt. Ltd
                      </a>
                    </p>
                    <p className="text-muted-foreground">July 2024 - December 2024 | Pune, India</p>
                  </div>
                  
                  <div className="timeline-item">
                    <h4 className="text-lg font-medium">Sr. Software Engineer</h4>
                    <p className="text-primary">
                      <a href="https://www.securly.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Securly India Private Limited
                      </a>
                    </p>
                    <p className="text-muted-foreground">March 2019 - May 2023 | Pune, India</p>
                  </div>
                  
                  <div className="timeline-item">
                    <h4 className="text-lg font-medium">Sr. Software Engineer</h4>
                    <p className="text-primary">
                      <a href="http://www.spegitech.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        SPEGI Technologies
                      </a>
                    </p>
                    <p className="text-muted-foreground">December 2015 - May 2018 | Indore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default About;
