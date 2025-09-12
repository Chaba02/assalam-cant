
import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import ChappNavbar from '../components/ChappNavbar';
import ChappHero from '../components/ChappHero';
import ChappSectors from '../components/ChappSectors';
import ChappAbout from '../components/ChappAbout';
import ChappBIDashboard from '../components/ChappBIDashboard';
import ChappContactForm from '../components/ChappContactForm';
import ChappFooter from '../components/ChappFooter';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../data/structuredData';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Combined structured data
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema, 
      websiteSchema
    ]
  };

  const pageTitle = language === 'IT' 
    ? 'Novaresin S.p.A. - Finissaggio e Nobilitazione Tessuti | Resinatura, Accoppiatura, Membrane'
    : 'Novaresin S.p.A. - Textile Finishing & Enhancement | Resination, Coupling, Membranes';

  const pageDescription = language === 'IT'
    ? 'Novaresin S.p.A. leader nel finissaggio tessile dal 1970. Servizi di resinatura, accoppiatura e membrane per fashion, sport, outdoor e geotessile. Certificazioni GRS e ISO 9001.'
    : 'Novaresin S.p.A. leader in textile finishing since 1970. Resination, coupling and membrane services for fashion, sport, outdoor and geotextile. GRS and ISO 9001 certifications.';

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        structuredData={combinedStructuredData}
        type="website"
      />
      
      <div className="min-h-screen bg-chapp-dark-bg overflow-x-hidden">
        <header>
          <ChappNavbar />
        </header>
        
        <main>
          <ChappHero />
          <ChappSectors />
          <ChappAbout />
          <ChappContactForm />
        </main>
        
        <footer>
          <ChappFooter />
        </footer>
      </div>
    </>
  );
};

export default Index;
