// Structured Data for SEO (JSON-LD)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Novaresin S.p.A.",
  "description": "Leader nel finissaggio tessile dal 1970. Servizi di resinatura, accoppiatura e membrane per fashion, sport, outdoor e geotessile.",
  "url": "https://novaresin.lovable.app",
  "logo": "https://novaresin.lovable.app/novaresin_logo.png",
  "image": "https://novaresin.lovable.app/novaresin_logo.png",
  "telephone": "+39 02 12345678",
  "email": "info@novaresin.it",
  "foundingDate": "1970",
  "founders": [
    {
      "@type": "Organization",
      "name": "Retex Srl"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via dell'Industria, 42",
    "addressLocality": "Milano",
    "addressRegion": "Lombardia",
    "postalCode": "20100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.4642",
    "longitude": "9.1900"
  },
  "sameAs": [
    "https://www.linkedin.com/company/novaresin",
    "https://www.facebook.com/novaresin",
    "https://www.instagram.com/novaresin_spa"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "knowsAbout": [
    "Textile Finishing",
    "Resination",
    "Textile Coupling", 
    "Technical Membranes",
    "Textile Ennobling",
    "Industrial Textiles"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "GRS Certification",
      "issuedBy": {
        "@type": "Organization",
        "name": "ICEA"
      },
      "identifier": "ICEA-TX-2978"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "credentialCategory": "Certificate",
      "name": "ISO 9001 Quality Management System",
      "dateCreated": "2017"
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Novaresin S.p.A.",
  "description": "Azienda leader nel finissaggio e nobilitazione tessuti, specializzata in resinatura, accoppiatura e membrane tecniche.",
  "image": "https://novaresin.lovable.app/novaresin_logo.png",
  "telephone": "+39 02 12345678",
  "email": "info@novaresin.it",
  "url": "https://novaresin.lovable.app",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via dell'Industria, 42",
    "addressLocality": "Milano",
    "addressRegion": "Lombardia", 
    "postalCode": "20100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.4642",
    "longitude": "9.1900"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00"
  ],
  "priceRange": "€€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer"
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Resinatura Tessile",
    "description": "Trattamenti di resinatura professionale per conferire proprietà specifiche ai tessuti come impermeabilizzazione, resistenza al fuoco e caratteristiche antibatteriche.",
    "provider": {
      "@type": "Organization",
      "name": "Novaresin S.p.A."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi di Resinatura",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Impermeabilizzazione avanzata"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Resistenza al fuoco"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Proprietà antibatteriche"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accoppiatura Tessile",
    "description": "Servizi di accoppiatura tessile di precisione per materiali compositi performanti, ideali per applicazioni tecniche e industriali.",
    "provider": {
      "@type": "Organization",
      "name": "Novaresin S.p.A."
    },
    "areaServed": {
      "@type": "Place", 
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi di Accoppiatura",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laminazione tessuti multistrato"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Processi termici controllati"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Membrane Tecniche",
    "description": "Sviluppo e applicazione di membrane tecniche altamente specializzate per filtrazione, impermeabilizzazione e protezione avanzata.",
    "provider": {
      "@type": "Organization",
      "name": "Novaresin S.p.A."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Membrane",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Membrane traspiranti"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Barriere impermeabili"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Filtrazione avanzata"
          }
        }
      ]
    }
  }
];

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Novaresin S.p.A.", 
  "description": "Sito ufficiale di Novaresin S.p.A., leader nel finissaggio tessile dal 1970",
  "url": "https://novaresin.lovable.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://novaresin.lovable.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Novaresin S.p.A.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://novaresin.lovable.app/novaresin_logo.png"
    }
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Che servizi offre Novaresin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Novaresin offre tre servizi principali: resinatura tessile per proprietà specifiche, accoppiatura per materiali compositi e sviluppo di membrane tecniche per applicazioni specializzate."
      }
    },
    {
      "@type": "Question", 
      "name": "Quali certificazioni ha Novaresin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Novaresin possiede certificazione GRS (Global Recycled Standard) da ICEA e certificazione ISO 9001 per il Sistema di Gestione Qualità, attiva dal 2017."
      }
    },
    {
      "@type": "Question",
      "name": "Per quali settori lavora Novaresin?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Novaresin lavora per diversi settori: fashion, infanzia, sport/casual, balistica, arredamento, outdoor, sport attivo e geotessile, fornendo soluzioni tessili innovative per ogni industria."
      }
    }
  ]
};