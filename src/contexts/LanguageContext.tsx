import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Language types
export type Language = 'IT' | 'EN';

// Translation interface
interface Translations {
  [key: string]: {
    IT: string;
    EN: string;
  };
}

// Translation object with all text content
const translations: Translations = {
  // Navbar
  'nav.about': { IT: 'Chi Siamo', EN: 'About Us' },
  'nav.services': { IT: 'Servizi', EN: 'Services' },
  'nav.dashboard': { IT: 'Dashboard', EN: 'Dashboard' },
  'nav.contact': { IT: 'Contatti', EN: 'Contact' },
  'nav.cta': { IT: 'Inizia Ora', EN: 'Get Started' },
  
  // Hero Section
  'hero.badge': { IT: 'Eccellenza Tessile Italiana', EN: 'Italian Textile Excellence' },
  'hero.title.part1': { IT: 'Tessiamo il Futuro', EN: 'Weaving the Future' },
  'hero.title.part2': { IT: 'con Qualità e Stile', EN: 'with Quality and Style' },
  'hero.subtitle': { 
    IT: 'Dal filo al capolavoro: innovazione, artigianato e design senza tempo per trasformare ogni tessuto in un\'opera d\'arte.',
    EN: 'From thread to masterpiece: innovation, craftsmanship and timeless design to transform every fabric into a work of art.'
  },
  'hero.cta.primary': { IT: 'Scopri di più', EN: 'Learn More' },
  'hero.cta.secondary': { IT: 'Guarda il video', EN: 'Watch Video' },
  'hero.clients.label': { IT: 'Partner', EN: 'Partner' },
  
  // Sectors Section
  'sectors.badge': { IT: 'I Nostri Settori', EN: 'Our Sectors' },
  'sectors.title.part1': { IT: 'Settori', EN: 'Operational' },
  'sectors.title.part2': { IT: 'Operativi', EN: 'Sectors' },
  'sectors.subtitle': { 
    IT: 'Offriamo soluzioni tessili specializzate per diversi settori industriali, garantendo qualità e innovazione in ogni applicazione.',
    EN: 'We offer specialized textile solutions for different industrial sectors, ensuring quality and innovation in every application.'
  },
  'sectors.manufacturing.title': { IT: 'Manifatturiero', EN: 'Manufacturing' },
  'sectors.manufacturing.description': { IT: 'Soluzioni tessili per l\'industria manifatturiera con focus su qualità e resistenza.', EN: 'Textile solutions for manufacturing industry focused on quality and resistance.' },
  'sectors.automotive.title': { IT: 'Automotive', EN: 'Automotive' },
  'sectors.automotive.description': { IT: 'Tessuti tecnici per interni auto, sedili e componenti di sicurezza.', EN: 'Technical fabrics for car interiors, seats and safety components.' },
  'sectors.medical.title': { IT: 'Medicale', EN: 'Medical' },
  'sectors.medical.description': { IT: 'Tessuti specializzati per dispositivi medici e abbigliamento sanitario.', EN: 'Specialized fabrics for medical devices and healthcare apparel.' },
  'sectors.furnishing.title': { IT: 'Arredamento', EN: 'Furnishing' },
  'sectors.furnishing.description': { IT: 'Tessuti per mobili, decorazioni e soluzioni d\'arredo innovative.', EN: 'Fabrics for furniture, decorations and innovative furnishing solutions.' },
  'sectors.sports.title': { IT: 'Sport & Outdoor', EN: 'Sports & Outdoor' },
  'sectors.sports.description': { IT: 'Materiali tecnici per abbigliamento sportivo e attrezzature outdoor.', EN: 'Technical materials for sportswear and outdoor equipment.' },
  'sectors.technical.title': { IT: 'Tessuti Tecnici', EN: 'Technical Fabrics' },
  'sectors.technical.description': { IT: 'Soluzioni avanzate per applicazioni industriali specializzate.', EN: 'Advanced solutions for specialized industrial applications.' },
  'sectors.cta.title': { IT: 'Interessato a un settore specifico?', EN: 'Interested in a specific sector?' },
  'sectors.cta.description': { IT: 'I nostri esperti sono pronti ad analizzare le tue esigenze e proporti la soluzione più innovativa per il tuo settore.', EN: 'Our experts are ready to analyze your needs and propose the most innovative solution for your sector.' },
  'sectors.cta.button': { IT: 'Richiedi Consulenza', EN: 'Request Consultation' },
  
  // Services Section
  'services.badge': { IT: 'I Nostri Servizi', EN: 'Our Services' },
  'services.title.part1': { IT: 'Servizi', EN: 'Specialized' },
  'services.title.part2': { IT: 'Specializzati', EN: 'Services' },
  'services.subtitle': { 
    IT: 'Offriamo tre servizi principali di lavorazione tessile con tecnologie all\'avanguardia e processi certificati.',
    EN: 'We offer three main textile processing services with cutting-edge technologies and certified processes.'
  },
  'services.backHome': { IT: 'Torna alla Home', EN: 'Back to Home' },
  'services.featuresTitle': { IT: 'Caratteristiche Principali', EN: 'Key Features' },
  'services.benefitsTitle': { IT: 'Vantaggi', EN: 'Benefits' },
  'services.requestQuote': { IT: 'Richiedi Preventivo', EN: 'Request Quote' },
  'services.stats.experience': { IT: 'Anni di Esperienza', EN: 'Years of Experience' },
  'services.stats.projects': { IT: 'Progetti Completati', EN: 'Completed Projects' },
  'services.stats.quality': { IT: 'Tasso di Qualità', EN: 'Quality Rate' },
  'services.resinatura.title': { IT: 'Resinatura', EN: 'Resination' },
  'services.resinatura.description': { IT: 'Trattamenti di resinatura professionale per conferire proprietà specifiche ai tessuti.', EN: 'Professional resination treatments to give specific properties to fabrics.' },
  'services.resinatura.longDescription': { IT: 'La nostra tecnologia di resinatura all\'avanguardia permette di applicare trattamenti specializzati che conferiscono ai tessuti proprietà uniche come impermeabilizzazione, resistenza al fuoco e caratteristiche antibatteriche.', EN: 'Our cutting-edge resination technology allows us to apply specialized treatments that give fabrics unique properties such as waterproofing, fire resistance and antibacterial characteristics.' },
  'services.resinatura.features.0': { IT: 'Impermeabilizzazione avanzata', EN: 'Advanced waterproofing' },
  'services.resinatura.features.1': { IT: 'Resistenza al fuoco', EN: 'Fire resistance' },
  'services.resinatura.features.2': { IT: 'Proprietà antibatteriche', EN: 'Antibacterial properties' },
  'services.resinatura.features.3': { IT: 'Controllo qualità rigoroso', EN: 'Rigorous quality control' },
  'services.resinatura.benefits.0': { IT: 'Maggiore durata del prodotto finale', EN: 'Greater durability of the final product' },
  'services.resinatura.benefits.1': { IT: 'Prestazioni superiori in condizioni estreme', EN: 'Superior performance in extreme conditions' },
  'services.resinatura.benefits.2': { IT: 'Certificazioni internazionali di qualità', EN: 'International quality certifications' },
  'services.accoppiatura.title': { IT: 'Accoppiatura', EN: 'Coupling' },
  'services.accoppiatura.description': { IT: 'Servizi di accoppiatura tessile di precisione per materiali compositi performanti.', EN: 'Precision textile coupling services for high-performance composite materials.' },
  'services.accoppiatura.longDescription': { IT: 'La nostra expertise nell\'accoppiatura permette di unire diversi materiali tessili creando prodotti compositi dalle prestazioni eccezionali, ideali per applicazioni tecniche e industriali.', EN: 'Our expertise in coupling allows us to combine different textile materials creating composite products with exceptional performance, ideal for technical and industrial applications.' },
  'services.accoppiatura.features.0': { IT: 'Laminazione tessuti multistrato', EN: 'Multi-layer fabric lamination' },
  'services.accoppiatura.features.1': { IT: 'Processi termici controllati', EN: 'Controlled thermal processes' },
  'services.accoppiatura.features.2': { IT: 'Test di tenuta avanzati', EN: 'Advanced seal testing' },
  'services.accoppiatura.features.3': { IT: 'Personalizzazione completa', EN: 'Complete customization' },
  'services.accoppiatura.benefits.0': { IT: 'Materiali compositi ad alte prestazioni', EN: 'High-performance composite materials' },
  'services.accoppiatura.benefits.1': { IT: 'Resistenza meccanica superiore', EN: 'Superior mechanical resistance' },
  'services.accoppiatura.benefits.2': { IT: 'Adattabilità a diverse applicazioni industriali', EN: 'Adaptability to various industrial applications' },
  'services.membrane.title': { IT: 'Membrane', EN: 'Membranes' },
  'services.membrane.description': { IT: 'Sviluppo e applicazione di membrane tecniche per applicazioni specializzate.', EN: 'Development and application of technical membranes for specialized applications.' },
  'services.membrane.longDescription': { IT: 'Sviluppiamo e applichiamo membrane tecniche altamente specializzate per creare soluzioni innovative nel campo della filtrazione, impermeabilizzazione e protezione avanzata.', EN: 'We develop and apply highly specialized technical membranes to create innovative solutions in the field of filtration, waterproofing and advanced protection.' },
  'services.membrane.features.0': { IT: 'Membrane traspiranti', EN: 'Breathable membranes' },
  'services.membrane.features.1': { IT: 'Barriere impermeabili', EN: 'Waterproof barriers' },
  'services.membrane.features.2': { IT: 'Filtrazione avanzata', EN: 'Advanced filtration' },
  'services.membrane.features.3': { IT: 'Certificazioni tecniche', EN: 'Technical certifications' },
  'services.membrane.benefits.0': { IT: 'Protezione superiore dagli agenti esterni', EN: 'Superior protection from external agents' },
  'services.membrane.benefits.1': { IT: 'Comfort e traspirabilità ottimali', EN: 'Optimal comfort and breathability' },
  'services.membrane.benefits.2': { IT: 'Conformità agli standard più rigorosi', EN: 'Compliance with the most rigorous standards' },
  'services.cta.title': { IT: 'Pronto per iniziare il tuo progetto?', EN: 'Ready to start your project?' },
  'services.cta.description': { IT: 'Contattaci oggi per discutere le tue esigenze e scoprire come i nostri servizi possono trasformare la tua idea in realtà.', EN: 'Contact us today to discuss your needs and discover how our services can transform your idea into reality.' },
  'services.cta.primary': { IT: 'Contattaci Ora', EN: 'Contact Us Now' },
  'services.cta.secondary': { IT: 'Scarica Brochure', EN: 'Download Brochure' },
  
  // About Section
  'about.badge': { IT: 'Chi Siamo', EN: 'About Us' },
  'about.title1': { IT: 'Il tuo', EN: 'Your trusted' },
  'about.title2': { IT: 'partner tecnologico', EN: 'technology partner' },
  'about.title3': { IT: 'di fiducia', EN: '' },
  'about.description1': {
    IT: 'Chapp è specializzata nello sviluppo di web-app innovative e piattaforme di Business Intelligence. Con oltre 12 anni di esperienza nel settore tecnologico, aiutiamo le aziende a digitalizzare i propri processi attraverso soluzioni su misura.',
    EN: 'Chapp specializes in developing innovative web apps and Business Intelligence platforms. With over 12 years of experience in the technology sector, we help companies digitize their processes through customized solutions.'
  },
  'about.description2': {
    IT: 'La nostra metodologia combina tecnologie all\'avanguardia con design UX/UI di ultima generazione, garantendo piattaforme performanti, scalabili e orientate ai risultati di business.',
    EN: 'Our methodology combines cutting-edge technologies with the latest generation UX/UI design, ensuring high-performance, scalable platforms oriented towards business results.'
  },
  'about.value1.title': { IT: 'Web-App Innovative', EN: 'Innovative Web Apps' },
  'about.value1.desc': { IT: 'Sviluppiamo piattaforme web moderne e scalabili per il tuo business', EN: 'We develop modern and scalable web platforms for your business' },
  'about.value2.title': { IT: 'Business Intelligence', EN: 'Business Intelligence' },
  'about.value2.desc': { IT: 'Trasformiamo i dati in insights strategici con dashboard avanzate', EN: 'We transform data into strategic insights with advanced dashboards' },
  'about.value3.title': { IT: 'Eccellenza Tecnica', EN: 'Technical Excellence' },
  'about.value3.desc': { IT: 'Standard qualitativi premium in ogni progetto tecnologico', EN: 'Premium quality standards in every technological project' },
  'about.value4.title': { IT: 'Crescita Digitale', EN: 'Digital Growth' },
  'about.value4.desc': { IT: 'Focus sulla crescita sostenibile attraverso la tecnologia', EN: 'Focus on sustainable growth through technology' },
  'about.team.title': { IT: 'Il Team Chapp', EN: 'The Chapp Team' },
  'about.team.subtitle': { IT: 'Sviluppatori e Data Analyst esperti', EN: 'Expert Developers and Data Analysts' },
  'about.team.badge': { IT: 'Certificati Full-Stack & BI', EN: 'Certified Full-Stack & BI' },
  'about.stat1': { IT: 'Anni di Esperienza', EN: 'Years of Experience' },
  'about.stat2': { IT: 'Piattaforme Sviluppate', EN: 'Platforms Developed' },
  
  // BI Dashboard
  'bi.badge': { IT: 'Demo Interattiva', EN: 'Interactive Demo' },
  'bi.title': { IT: 'Dashboard', EN: 'Dashboard' },
  'bi.title.highlight': { IT: 'Business Intelligence', EN: 'Business Intelligence' },
  'bi.subtitle': {
    IT: 'Esplora una demo completamente funzionante della nostra dashboard BI. Interagisci con i filtri e osserva come i dati si aggiornano in tempo reale.',
    EN: 'Explore a fully functional demo of our BI dashboard. Interact with filters and watch how data updates in real-time.'
  },
  'bi.dashboard.title': { IT: 'Analytics Dashboard', EN: 'Analytics Dashboard' },
  'bi.dashboard.subtitle': { IT: 'Panoramica delle performance aziendali', EN: 'Business performance overview' },
  'bi.period.week': { IT: 'Settimana', EN: 'Week' },
  'bi.period.month': { IT: 'Mese', EN: 'Month' },
  'bi.period.year': { IT: 'Anno', EN: 'Year' },
  'bi.region.all': { IT: 'Tutto il mondo', EN: 'Worldwide' },
  'bi.region.europe': { IT: 'Europa', EN: 'Europe' },
  'bi.region.america': { IT: 'America', EN: 'America' },
  'bi.refresh': { IT: 'Aggiorna', EN: 'Refresh' },
  'bi.kpi.revenue': { IT: 'Fatturato', EN: 'Revenue' },
  'bi.kpi.users': { IT: 'Utenti Attivi', EN: 'Active Users' },
  'bi.kpi.conversions': { IT: 'Conversioni', EN: 'Conversions' },
  'bi.kpi.orders': { IT: 'Ordini', EN: 'Orders' },
  'bi.chart.sales': { IT: 'Trend Vendite', EN: 'Sales Trends' },
  'bi.chart.channels': { IT: 'Distribuzione Canali', EN: 'Channel Distribution' },
  'bi.channel.online': { IT: 'Online', EN: 'Online' },
  'bi.channel.retail': { IT: 'Retail', EN: 'Retail' },
  'bi.channel.partner': { IT: 'Partner', EN: 'Partner' },
  'bi.lastUpdate': { IT: 'Ultimo aggiornamento', EN: 'Last updated' },
  'bi.realTime': { IT: 'Dati in tempo reale', EN: 'Real-time data' },
  'bi.cta': { IT: 'Richiedi una Demo Personalizzata', EN: 'Request a Custom Demo' },
  
  // Interactive Preview
  'preview.badge': { IT: 'Preview Interattiva', EN: 'Interactive Preview' },
  'preview.title1': { IT: 'Scopri le nostre', EN: 'Discover our' },
  'preview.title2': { IT: 'soluzioni', EN: 'solutions' },
  'preview.title3': { IT: 'in azione', EN: 'in action' },
  'preview.subtitle': {
    IT: 'Esplora i nostri progetti attraverso mockup interattivi e vedi come trasformiamo le idee in soluzioni concrete e innovative.',
    EN: 'Explore our projects through interactive mockups and see how we transform ideas into concrete and innovative solutions.'
  },
  'preview.tab.dashboard': { IT: 'BI Dashboard', EN: 'BI Dashboard' },
  'preview.tab.dashboard.desc': { IT: 'Analytics e reportistica avanzata', EN: 'Advanced analytics and reporting' },
  'preview.tab.webapp': { IT: 'Web App', EN: 'Web App' },
  'preview.tab.webapp.desc': { IT: 'Applicazioni web moderne e responsive', EN: 'Modern and responsive web applications' },
  'preview.tab.mobile': { IT: 'Mobile App', EN: 'Mobile App' },
  'preview.tab.mobile.desc': { IT: 'App native per iOS e Android', EN: 'Native apps for iOS and Android' },
  'preview.play.idle': { IT: 'Avvia Demo', EN: 'Start Demo' },
  'preview.play.active': { IT: 'In riproduzione...', EN: 'Playing...' },
  'preview.cta': { IT: 'Richiedi una Demo Personalizzata', EN: 'Request a Custom Demo' },
  
  // Loading and feedback
  'loading': { IT: 'Caricamento...', EN: 'Loading...' },
  'error': { IT: 'Errore', EN: 'Error' },
  'success': { IT: 'Successo', EN: 'Success' },
  'languageChanged': { IT: 'Lingua cambiata in Italiano', EN: 'Language changed to English' },
};

// Language context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('IT');
  const [isLoading, setIsLoading] = useState(false);

  // Translation function
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || key;
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  // Handle language change with smooth transition
  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage === language) return;
    
    setIsLoading(true);
    
    // Add a smooth transition effect
    setTimeout(() => {
      setLanguage(newLanguage);
      setIsLoading(false);
      
      // Show language change notification
      const message = newLanguage === 'IT' ? 'Lingua cambiata in Italiano' : 'Language changed to English';
      
      // Create and show toast notification
      const toast = document.createElement('div');
      toast.className = 'fixed top-20 right-4 bg-chapp-accent-blue text-white px-4 py-2 rounded-lg shadow-lg z-[100] transition-all duration-300 transform translate-x-full';
      toast.textContent = message;
      document.body.appendChild(toast);
      
      // Animate in
      setTimeout(() => {
        toast.classList.remove('translate-x-full');
      }, 100);
      
      // Remove after 3 seconds
      setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    }, 150);
  };

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('chapp-language') as Language;
    if (savedLanguage && (savedLanguage === 'IT' || savedLanguage === 'EN')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('chapp-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleLanguageChange, 
        t, 
        isLoading 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};