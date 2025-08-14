
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
  'hero.title.part1': { IT: 'Innoviamo il', EN: 'We Innovate' },
  'hero.title.highlight': { IT: 'Tessuto', EN: 'Textiles' },
  'hero.title.part2': { IT: 'Filo Dopo Filo', EN: 'Thread by Thread' },
  'hero.subtitle': { 
    IT: 'Materiali pregiati, cura artigianale e tecnologie d\'avanguardia per tessuti che ispirano il futuro.',
    EN: 'Premium materials, artisan care and cutting-edge technologies for fabrics that inspire the future.'
  },
  'hero.cta.primary': { IT: 'Scopri di più', EN: 'Learn More' },
  'hero.cta.secondary': { IT: 'Guarda il video', EN: 'Watch Video' },
  'hero.clients.label': { IT: 'Aziende che si Affidano a Noi', EN: 'Companies that Trust Us' },
  
  // Sectors Section
  'sectors.badge': { IT: 'Settori di applicazione', EN: 'Application Sectors' },
  'sectors.title.part1': { IT: 'Tessuti per ogni', EN: 'Fabrics for every' },
  'sectors.title.part2': { IT: 'Industria', EN: 'Industry' },
  'sectors.subtitle': { 
    IT: 'Soluzioni tessili innovative per i più esigenti settori industriali, dove prestazioni e affidabilità fanno la differenza.',
    EN: 'Innovative textile solutions for the most demanding industrial sectors, where performance and reliability make the difference.'
  },
  'sectors.fashion.title': { IT: 'Fashion', EN: 'Fashion' },
  'sectors.fashion.description': { IT: 'Tessuti pregiati per l\'alta moda e il prêt-à-porter, con focus su qualità e innovazione.', EN: 'Premium fabrics for haute couture and ready-to-wear, focusing on quality and innovation.' },
  'sectors.children.title': { IT: 'Infanzia', EN: 'Children' },
  'sectors.children.description': { IT: 'Materiali sicuri e certificati per l\'abbigliamento dei più piccoli, morbidi e anallergici.', EN: 'Safe and certified materials for children\'s clothing, soft and hypoallergenic.' },
  'sectors.sport.title': { IT: 'Sport / Casual', EN: 'Sport / Casual' },
  'sectors.sport.description': { IT: 'Tessuti performanti per sportswear e casual wear, traspiranti e resistenti.', EN: 'High-performance fabrics for sportswear and casual wear, breathable and resistant.' },
  'sectors.ballistic.title': { IT: 'Balistica', EN: 'Ballistic' },
  'sectors.ballistic.description': { IT: 'Materiali ad alta resistenza per applicazioni di protezione e sicurezza professionale.', EN: 'High-resistance materials for protection and professional security applications.' },
  'sectors.furnishing.title': { IT: 'Arredamento', EN: 'Furnishing' },
  'sectors.furnishing.description': { IT: 'Tessuti decorativi per interior design, tappezzeria e complementi d\'arredo di qualità.', EN: 'Decorative fabrics for interior design, upholstery and quality furnishing accessories.' },
  'sectors.outdoor.title': { IT: 'Outdoor', EN: 'Outdoor' },
  'sectors.outdoor.description': { IT: 'Materiali tecnici resistenti agli agenti atmosferici per abbigliamento e accessori outdoor.', EN: 'Weather-resistant technical materials for outdoor clothing and accessories.' },
  'sectors.activesport.title': { IT: 'Sport Attivo', EN: 'Active Sports' },
  'sectors.activesport.description': { IT: 'Tessuti high-tech per performance atletiche estreme, con proprietà termoregolanti.', EN: 'High-tech fabrics for extreme athletic performance, with thermoregulating properties.' },
  'sectors.geotextile.title': { IT: 'Geotessile', EN: 'Geotextile' },
  'sectors.geotextile.description': { IT: 'Soluzioni innovative per ingegneria civile, drenaggio e stabilizzazione del terreno.', EN: 'Innovative solutions for civil engineering, drainage and soil stabilization.' },
  'sectors.cta.title': { IT: 'Consulenza Specializzata', EN: 'Specialized Consultation' },
  'sectors.cta.description': { IT: 'I nostri esperti analizzano le tue esigenze specifiche per sviluppare soluzioni tessili innovative e personalizzate.', EN: 'Our experts analyze your specific needs to develop innovative and customized textile solutions.' },
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

  // Certifications Section
  'certifications.certifiedBy': { IT: 'CERTIFICATO DA', EN: 'CERTIFIED BY' },
  'certifications.grs.title': { IT: 'GRS Certified', EN: 'GRS Certified' },
  'certifications.grs.subtitle': { IT: 'Global Recycled Standard', EN: 'Global Recycled Standard' },
  'certifications.grs.certifier': { IT: 'ICEA (ICEA-TX-2978)', EN: 'ICEA (ICEA-TX-2978)' },
  'certifications.grs.description': { IT: 'Processi di nobilitazione tessile conformi GRS', EN: 'GRS-compliant Textile Ennobling Processes' },
  'certifications.grs.note': { IT: 'Solo i processi coperti da un certificato valido sono certificati GRS', EN: 'Only processes covered by a valid certificate are GRS certified' },
  'certifications.iso.title': { IT: 'ISO 9001 Certified', EN: 'ISO 9001 Certified' },
  'certifications.iso.subtitle': { IT: 'Sistema di Gestione Qualità', EN: 'Quality Management System' },
  'certifications.iso.certifier': { IT: 'Certificazione attiva dal 2017', EN: 'Certification active since 2017' },
  'certifications.iso.description': { IT: 'Garantisce standard di qualità elevati nei servizi ai partner', EN: 'Ensures high quality standards in partner services' },
  'certifications.iso.note': { IT: 'Sistema di gestione qualità riconosciuto internazionalmente', EN: 'Internationally recognized quality management system' },
  'certifications.swiss.title': { IT: 'Swiss Antimicrobial Expertise', EN: 'Swiss Antimicrobial Expertise' },
  'certifications.swiss.subtitle': { IT: 'Soluzioni Antimicrobiche', EN: 'Antimicrobial Solutions' },
  'certifications.swiss.certifier': { IT: 'Swiss Quality Standard', EN: 'Swiss Quality Standard' },
  'certifications.swiss.description': { IT: 'Eccellenza svizzera nelle soluzioni antimicrobiche', EN: 'Swiss excellence in antimicrobial solutions' },
  'certifications.swiss.note': { IT: 'Tecnologie avanzate per protezione e igiene', EN: 'Advanced technologies for protection and hygiene' },

  // About Section
  'about.badge': { IT: 'La Nostra Storia', EN: 'Our Story' },
  'about.title1': { IT: 'Novaresin:', EN: 'Novaresin:' },
  'about.title2': { IT: 'Innovazione Tessile', EN: 'Textile Innovation' },
  'about.title3': { IT: 'dal 1970', EN: 'since 1970' },
  'about.description1': {
    IT: 'La nostra storia inizia nel 1970 come Retex Srl, evolvendosi fino a diventare Novaresin S.p.A., leader nel finissaggio, accoppiatura e nobilitazione tessuti.',
    EN: 'Our story begins in 1970 as Retex Srl, evolving to become Novaresin S.p.A., leader in finishing, coupling and textile ennobling.'
  },
  'about.description2': {
    IT: 'Grazie a investimenti continui e a un team specializzato, offriamo soluzioni innovative e tecnologie all\'avanguardia per il settore tessile tecnico e arredamento.',
    EN: 'Thanks to continuous investments and a specialized team, we offer innovative solutions and cutting-edge technologies for the technical textile and furnishing sector.'
  },
  'about.description3': {
    IT: 'Oggi siamo un punto di riferimento per aziende che cercano qualità, affidabilità e ricerca applicata nel mondo dei tessuti.',
    EN: 'Today we are a reference point for companies seeking quality, reliability and applied research in the world of textiles.'
  },
  'about.value1.title': { IT: 'Tecnologie Avanzate', EN: 'Advanced Technologies' },
  'about.value1.desc': { IT: 'Utilizziamo le più moderne tecnologie di finissaggio, accoppiatura e nobilitazione per tessuti di alta qualità.', EN: 'We use the most modern finishing, coupling and ennobling technologies for high-quality textiles.' },
  'about.value2.title': { IT: 'Esperienza Industriale', EN: 'Industrial Experience' },
  'about.value2.desc': { IT: 'Dal 1970, esperienza consolidata nel settore tessile, con un know-how unico e riconosciuto.', EN: 'Since 1970, consolidated experience in the textile sector, with unique and recognized know-how.' },
  'about.value3.title': { IT: 'Qualità e Affidabilità', EN: 'Quality and Reliability' },
  'about.value3.desc': { IT: 'Garantiamo prodotti con standard elevati, in grado di soddisfare clienti nazionali e internazionali.', EN: 'We guarantee products with high standards, capable of satisfying national and international customers.' },
  'about.value4.title': { IT: 'Team Specializzato', EN: 'Specialized Team' },
  'about.value4.desc': { IT: 'Un team di professionisti dedicati alla ricerca e allo sviluppo di soluzioni innovative.', EN: 'A team of professionals dedicated to research and development of innovative solutions.' },
  'about.team.title': { IT: 'Il Nostro Team', EN: 'Our Team' },
  'about.team.subtitle': { IT: 'Professionisti con esperienza consolidata nel settore tessile, dedicati alla ricerca e sviluppo di tecnologie innovative.', EN: 'Professionals with consolidated experience in the textile sector, dedicated to research and development of innovative technologies.' },
  'about.team.badge': { IT: 'Eccellenza Certificata', EN: 'Certified Excellence' },
  'about.stat1': { IT: 'Anni di esperienza', EN: 'Years of experience' },
  'about.stat2': { IT: 'Clienti soddisfatti', EN: 'Satisfied customers' },

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

  // Contact Section
  'contact.badge': { IT: 'Contattaci', EN: 'Contact Us' },
  'contact.title': { IT: 'Inizia il Tuo', EN: 'Start Your' },
  'contact.title.highlight': { IT: 'Progetto Tessile', EN: 'Textile Project' },
  'contact.subtitle': { IT: 'Contattaci per una consulenza gratuita e personalizzata. Il nostro team di esperti è pronto ad analizzare le tue esigenze tessili.', EN: 'Contact us for a free and personalized consultation. Our team of experts is ready to analyze your textile needs.' },
  'contact.form.title': { IT: 'Richiedi una Consulenza Gratuita', EN: 'Request a Free Consultation' },
  'contact.form.name': { IT: 'Nome', EN: 'Name' },
  'contact.form.email': { IT: 'Email', EN: 'Email' },
  'contact.form.company': { IT: 'Azienda', EN: 'Company' },
  'contact.form.company.placeholder': { IT: 'Nome dell\'azienda (opzionale)', EN: 'Company name (optional)' },
  'contact.form.message': { IT: 'Messaggio', EN: 'Message' },
  'contact.form.message.placeholder': { IT: 'Descrivi il tuo progetto tessile o le tue esigenze...', EN: 'Describe your textile project or your needs...' },
  'contact.form.send': { IT: 'Richiedi Consulenza', EN: 'Request Consultation' },
  'contact.form.sending': { IT: 'Invio in corso...', EN: 'Sending...' },
  'contact.form.success': { IT: 'Messaggio inviato con successo! Ti contatteremo presto.', EN: 'Message sent successfully! We will contact you soon.' },
  'contact.form.privacy': { IT: 'Rispettiamo la tua privacy. Le informazioni fornite verranno utilizzate esclusivamente per contattarti.', EN: 'We respect your privacy. The information provided will be used exclusively to contact you.' },
  'contact.info.title': { IT: 'Informazioni di Contatto', EN: 'Contact Information' },
  'contact.info.address': { IT: 'Sede', EN: 'Address' },
  'contact.info.phone': { IT: 'Telefono', EN: 'Phone' },
  'contact.info.email': { IT: 'Email', EN: 'Email' },
  'contact.info.hours': { IT: 'Orari', EN: 'Hours' },
  'contact.info.hours.value': { IT: 'Lun - Ven: 9:00 - 18:00', EN: 'Mon - Fri: 9:00 - 18:00' },
  'contact.errors.name': { IT: 'Il nome è obbligatorio', EN: 'Name is required' },
  'contact.errors.email': { IT: 'L\'email è obbligatoria', EN: 'Email is required' },
  'contact.errors.email.invalid': { IT: 'Inserisci un\'email valida', EN: 'Enter a valid email' },
  'contact.errors.message': { IT: 'Il messaggio è obbligatorio', EN: 'Message is required' },

  // Footer
  'footer.tagline': { IT: 'Eccellenza tessile italiana dal 1970', EN: 'Italian textile excellence since 1970' },
  'footer.services.title': { IT: 'Servizi', EN: 'Services' },
  'footer.company.title': { IT: 'Azienda', EN: 'Company' },
  'footer.support.title': { IT: 'Supporto', EN: 'Support' },
  'footer.legal.title': { IT: 'Legale', EN: 'Legal' },
  'footer.privacy': { IT: 'Privacy Policy', EN: 'Privacy Policy' },
  'footer.terms': { IT: 'Termini di Servizio', EN: 'Terms of Service' },
  'footer.cookies': { IT: 'Cookie Policy', EN: 'Cookie Policy' },
  'footer.support.faq': { IT: 'FAQ', EN: 'FAQ' },
  'footer.support.help': { IT: 'Centro Assistenza', EN: 'Help Center' },
  'footer.support.contact': { IT: 'Contattaci', EN: 'Contact Us' },
  'footer.copyright': { IT: 'Tutti i diritti riservati.', EN: 'All rights reserved.' },

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
