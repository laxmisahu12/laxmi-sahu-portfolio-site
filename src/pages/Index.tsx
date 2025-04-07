
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import CTA from '@/components/home/CTA';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const Index = () => {
  // Add scroll animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Laxmi Sahu | Data Engineer & Full Stack Developer</title>
        <meta name="description" content="Portfolio of Laxmi Sahu, a Data Engineer and Full Stack Developer with 7+ years of experience in Enterprise Application Development, specializing in ETL, Python, AWS and GCP." />
        <meta property="og:title" content="Laxmi Sahu | Data Engineer & Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Laxmi Sahu, a Data Engineer and Full Stack Developer with 7+ years of experience in ETL, Python, AWS and GCP." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CTA />
      </div>
    </>
  );
};

export default Index;
