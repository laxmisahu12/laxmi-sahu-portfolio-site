
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import CTA from '@/components/home/CTA';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Laxmi Sahu | Data Engineer & Full Stack Developer</title>
        <meta name="description" content="Portfolio of Laxmi Sahu, a Data Engineer and Full Stack Developer with 7+ years of experience in Enterprise Application Development, specializing in ETL, Python, AWS and GCP." />
        <meta property="og:title" content="Laxmi Sahu | Data Engineer & Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Laxmi Sahu, a Data Engineer and Full Stack Developer with 7+ years of experience in ETL, Python, AWS and GCP." />
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
