import React from 'react';
import { Cookie, Settings, BarChart3, Target, Shield, Trash2, Clock, Mail } from 'lucide-react';
import ChappNavbar from '../components/ChappNavbar';
import ChappFooter from '../components/ChappFooter';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Cookies = () => {
  const { t, language } = useLanguage();

  const cookiesData = {
    IT: {
      title: "Cookie Policy",
      subtitle: "Come utilizziamo i cookie sul nostro sito web",
      lastUpdated: "Ultimo aggiornamento: 14 Settembre 2025",
      sections: [
        {
          title: "1. Cosa sono i Cookie",
          icon: Cookie,
          content: [
            "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.",
            "Permettono al sito di riconoscerti e migliorare la tua esperienza di navigazione.",
            "I cookie possono essere 'di sessione' (cancellati alla chiusura del browser) o 'persistenti' (rimangono fino a scadenza).",
            "Possono essere 'first-party' (del nostro sito) o 'third-party' (di servizi esterni)."
          ]
        },
        {
          title: "2. Cookie Tecnici Necessari",
          icon: Settings,
          content: [
            "• Cookie di sessione: per il funzionamento base del sito",
            "• Cookie di preferenze: per ricordare lingua e impostazioni",
            "• Cookie di sicurezza: per proteggere da attacchi e frodi",
            "• Durata: Sessione o fino a 1 anno",
            "• Base legale: Interesse legittimo (non richiedono consenso)"
          ]
        },
        {
          title: "3. Cookie Analytics",
          icon: BarChart3,
          content: [
            "• Google Analytics: per analizzare il traffico e le prestazioni del sito",
            "• Raccolgono dati anonimi su visite, pagine visualizzate, tempo di permanenza",
            "• IP anonimizzato per rispettare la privacy",
            "• Durata: fino a 26 mesi",
            "• Base legale: Consenso (puoi rifiutare)"
          ]
        },
        {
          title: "4. Cookie di Marketing",
          icon: Target,
          content: [
            "• Cookie per pubblicità personalizzata (quando attivi)",
            "• Tracciamento interessi per contenuti rilevanti", 
            "• Remarketing per mostrare annunci su altri siti",
            "• Durata: fino a 2 anni",
            "• Base legale: Consenso esplicito (sempre opzionali)"
          ]
        },
        {
          title: "5. Gestione dei Cookie",
          icon: Shield,
          content: [
            "Puoi gestire i cookie attraverso:",
            "• Il banner cookie al primo accesso al sito",
            "• Le impostazioni del tuo browser",
            "• Gli strumenti di opt-out dei servizi terzi",
            "• Modificando le tue preferenze in qualsiasi momento"
          ]
        },
        {
          title: "6. Come Disabilitare i Cookie",
          icon: Trash2,
          content: [
            "• Chrome: Impostazioni > Privacy e sicurezza > Cookie",
            "• Firefox: Preferenze > Privacy e sicurezza",
            "• Safari: Preferenze > Privacy",
            "• Edge: Impostazioni > Privacy, ricerca e servizi",
            "Nota: Disabilitare tutti i cookie può compromettere alcune funzionalità del sito."
          ]
        },
        {
          title: "7. Durata e Scadenza",
          icon: Clock,
          content: [
            "• Cookie di sessione: si cancellano automaticamente",
            "• Cookie persistenti: hanno date di scadenza specifiche",
            "• Cookie analytics: 26 mesi",
            "• Cookie preferenze: 1 anno",
            "• Cookie marketing: fino a 2 anni"
          ]
        },
        {
          title: "8. Contatti e Supporto",
          icon: Mail,
          content: [
            "Per domande sui cookie o per esercitare i tuoi diritti:",
            "• Email: privacy@novaresin.it",
            "• Oggetto: 'Cookie Policy - Richiesta informazioni'",
            "• Ti risponderemo entro 72 ore",
            "• Puoi anche consultare la nostra Privacy Policy completa"
          ]
        }
      ]
    },
    EN: {
      title: "Cookie Policy",
      subtitle: "How we use cookies on our website",
      lastUpdated: "Last updated: September 14, 2025",
      sections: [
        {
          title: "1. What are Cookies",
          icon: Cookie,
          content: [
            "Cookies are small text files stored on your device when you visit a website.",
            "They allow the site to recognize you and improve your browsing experience.",
            "Cookies can be 'session' (deleted when browser closes) or 'persistent' (remain until expiry).",
            "They can be 'first-party' (from our site) or 'third-party' (from external services)."
          ]
        },
        {
          title: "2. Necessary Technical Cookies",
          icon: Settings,
          content: [
            "• Session cookies: for basic site functionality",
            "• Preference cookies: to remember language and settings",
            "• Security cookies: to protect from attacks and fraud",
            "• Duration: Session or up to 1 year",
            "• Legal basis: Legitimate interest (no consent required)"
          ]
        },
        {
          title: "3. Analytics Cookies",
          icon: BarChart3,
          content: [
            "• Google Analytics: to analyze traffic and site performance", 
            "• Collect anonymous data on visits, page views, dwell time",
            "• Anonymized IP to respect privacy",
            "• Duration: up to 26 months",
            "• Legal basis: Consent (you can refuse)"
          ]
        },
        {
          title: "4. Marketing Cookies",
          icon: Target,
          content: [
            "• Cookies for personalized advertising (when enabled)",
            "• Interest tracking for relevant content",
            "• Remarketing to show ads on other sites",
            "• Duration: up to 2 years",
            "• Legal basis: Explicit consent (always optional)"
          ]
        },
        {
          title: "5. Cookie Management",
          icon: Shield,
          content: [
            "You can manage cookies through:",
            "• The cookie banner on first site access",
            "• Your browser settings",
            "• Third-party service opt-out tools",
            "• Changing your preferences at any time"
          ]
        },
        {
          title: "6. How to Disable Cookies",
          icon: Trash2,
          content: [
            "• Chrome: Settings > Privacy and security > Cookies",
            "• Firefox: Preferences > Privacy and security",
            "• Safari: Preferences > Privacy", 
            "• Edge: Settings > Privacy, search, and services",
            "Note: Disabling all cookies may compromise some site functionality."
          ]
        },
        {
          title: "7. Duration and Expiry",
          icon: Clock,
          content: [
            "• Session cookies: automatically deleted",
            "• Persistent cookies: have specific expiry dates",
            "• Analytics cookies: 26 months",
            "• Preference cookies: 1 year",
            "• Marketing cookies: up to 2 years"
          ]
        },
        {
          title: "8. Contact and Support",
          icon: Mail,
          content: [
            "For cookie questions or to exercise your rights:",
            "• Email: privacy@novaresin.it",
            "• Subject: 'Cookie Policy - Information Request'",
            "• We will respond within 72 hours",
            "• You can also consult our complete Privacy Policy"
          ]
        }
      ]
    }
  };

  const currentData = cookiesData[language] || cookiesData.IT;

  return (
    <>
      <SEOHead 
        title={`${currentData.title} | Novaresin`}
        description="Cookie Policy di Novaresin - Informazioni dettagliate sui cookie utilizzati e come gestire le tue preferenze"
        keywords="cookie policy, privacy, novaresin, gestione cookie"
      />
      
      <div className="min-h-screen bg-chapp-dark-bg text-chapp-white">
        <ChappNavbar />
        
        <main className="pt-24 pb-16">
          <div className="container-chapp">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6 animate-fade-in">
                <Cookie size={16} />
                Cookie & Privacy
              </div>
              
              <h1 className="text-display-lg text-chapp-title mb-6 animate-fade-in">
                {currentData.title}
              </h1>
              
              <p className="text-body-xl text-chapp-body max-w-2xl mx-auto mb-8 animate-fade-in">
                {currentData.subtitle}
              </p>
              
              <p className="text-body-sm text-chapp-gray-400 animate-fade-in">
                {currentData.lastUpdated}
              </p>
            </div>

            {/* Cookie Sections */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {currentData.sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={index} className="card-premium-dark p-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 rounded-xl flex items-center justify-center">
                        <IconComponent className="text-chapp-accent-blue" size={24} />
                      </div>
                      <h2 className="text-heading-xl text-chapp-title">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-body-md text-chapp-body leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cookie Preferences CTA */}
            <div className="text-center mt-16 p-8 card-premium-dark animate-fade-in">
              <h2 className="text-heading-xl text-chapp-title mb-4">
                {language === 'IT' ? 'Gestisci le tue preferenze' : 'Manage your preferences'}
              </h2>
              <p className="text-body-lg text-chapp-body mb-6">
                {language === 'IT' 
                  ? 'Puoi modificare le tue scelte sui cookie in qualsiasi momento'
                  : 'You can change your cookie choices at any time'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="btn-chapp-accent inline-flex items-center hover-glow-blue"
                  onClick={() => {
                    // This would trigger cookie preferences modal
                    alert(language === 'IT' ? 'Funzionalità in sviluppo' : 'Feature in development');
                  }}
                >
                  <Settings size={18} className="mr-2" />
                  {language === 'IT' ? 'Gestisci Cookie' : 'Manage Cookies'}
                </button>
                <a 
                  href="mailto:privacy@novaresin.it"
                  className="btn-chapp-secondary inline-flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  {language === 'IT' ? 'Contatta Privacy' : 'Contact Privacy'}
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <ChappFooter />
      </div>
    </>
  );
};

export default Cookies;