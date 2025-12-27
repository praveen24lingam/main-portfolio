import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Praveen Lingam | Frontend Developer</title>
        <meta
          name="description"
          content="Aspiring frontend developer with hands-on experience in building responsive and accessible web applications using HTML, CSS, JavaScript, and React.js."
        />
        <meta
          name="keywords"
          content="Praveen Lingam, Frontend Developer, React Developer, Web Developer, HTML, CSS, JavaScript"
        />
        <meta name="author" content="Praveen Lingam" />
        <meta property="og:title" content="Praveen Lingam | Frontend Developer" />
        <meta
          property="og:description"
          content="Aspiring frontend developer building responsive and interactive web applications."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praveen Lingam | Frontend Developer" />
        <meta
          name="twitter:description"
          content="Aspiring frontend developer building responsive and interactive web applications."
        />
        <link rel="canonical" href="https://praveenlingam.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Praveen Lingam",
            "jobTitle": "Frontend Developer",
            "url": "https://praveenlingam.dev",
            "email": "praveenlinga24@navgurukul.org",
            "telephone": "+91-6261693378",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bijapur",
              "addressRegion": "Chhattisgarh",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://linkedin.com/in/praveen-lingam",
              "https://github.com/praveen-lingam"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;