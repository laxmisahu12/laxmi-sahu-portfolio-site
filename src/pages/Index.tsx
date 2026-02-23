
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import CTA from '@/components/home/CTA';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const Index = () => {
  // For adding a scroll fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-fade-in').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('.section-fade-in').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Laxmi Sahu | Data Engineer & Data Analyst | Stockholm</title>
        <meta name="description" content="Portfolio of Laxmi Sahu — Data Engineer and Data Analyst with 7+ years of experience in ETL/ELT pipelines, dbt, Airflow, Snowflake, Tableau, and Power BI. Based in Stockholm, Sweden." />
        <meta property="og:title" content="Laxmi Sahu | Data Engineer & Data Analyst | Stockholm" />
        <meta property="og:description" content="Data Engineer and Data Analyst with 7+ years of experience building scalable pipelines, data warehouses, and BI dashboards. Based in Stockholm, Sweden." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CTA />
    </>
  );
};

export default Index;
