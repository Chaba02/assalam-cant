import React from 'react';
import { Shield, Mail, FileText, Calendar, Database, Eye, Lock, UserCheck } from 'lucide-react';
import ChappNavbar from '../components/ChappNavbar';
import ChappFooter from '../components/ChappFooter';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy = () => {
  const { t, language } = useLanguage();

  const privacyData = {
    IT: {
      title: "Privacy Policy",
      subtitle: "La tua privacy è importante per noi",
      lastUpdated: "Ultimo aggiornamento: 14 Settembre 2025",
      sections: [
        {
          title: "1. Informazioni che raccogliamo",
          icon: Database,
          content: [
            "• Dati di contatto (nome, email, azienda) quando compili i nostri form",
            "• Dati di navigazione (indirizzo IP, browser, sistema operativo)",
            "• Cookie tecnici e di preferenze per migliorare l'esperienza utente",
            "• Dati di geolocalizzazione approssimativa per servizi localizzati"
          ]
        },
        {
          title: "2. Come utilizziamo i tuoi dati",
          icon: Eye,
          content: [
            "• Rispondere alle tue richieste di contatto e preventivi",
            "• Migliorare i nostri servizi e l'esperienza del sito web",
            "• Inviarti comunicazioni commerciali (solo con il tuo consenso)",
            "• Analizzare le prestazioni del sito per ottimizzazioni"
          ]
        },
        {
          title: "3. Base legale del trattamento",
          icon: FileText,
          content: [
            "• Consenso esplicito per comunicazioni marketing",
            "• Interesse legittimo per l'analisi del sito web",
            "• Esecuzione del contratto per servizi richiesti",
            "• Obbligo legale per conservazione documenti fiscali"
          ]
        },
        {
          title: "4. Condivisione dei dati",
          icon: UserCheck,
          content: [
            "• Non vendiamo mai i tuoi dati personali a terze parti",
            "• Condividiamo dati solo con fornitori di servizi fidati (Google Analytics, hosting)",
            "• Trasferimenti dati extra-UE solo con adeguate garanzie",
            "• Accesso limitato solo al personale autorizzato"
          ]
        },
        {
          title: "5. Conservazione dei dati",
          icon: Calendar,
          content: [
            "• Dati di contatto: conservati per 2 anni dall'ultimo contatto",
            "• Dati analitici: conservati per 26 mesi (Google Analytics)",
            "• Cookie: scadenza variabile (da sessione a 2 anni)",
            "• Diritto alla cancellazione: puoi richiedere la rimozione in qualsiasi momento"
          ]
        },
        {
          title: "6. I tuoi diritti GDPR",
          icon: Shield,
          content: [
            "• Diritto di accesso: vedere quali dati abbiamo su di te",
            "• Diritto di rettifica: correggere dati inesatti",
            "• Diritto alla cancellazione: richiedere la rimozione dei tuoi dati",
            "• Diritto alla portabilità: ricevere i tuoi dati in formato leggibile",
            "• Diritto di opposizione: opporti al trattamento per marketing",
            "• Diritto di limitazione: limitare l'uso dei tuoi dati"
          ]
        },
        {
          title: "7. Sicurezza",
          icon: Lock,
          content: [
            "• Utilizziamo crittografia SSL/TLS per tutte le comunicazioni",
            "• Server sicuri con backup regolari",
            "• Accesso limitato ai dati con autenticazione a due fattori",
            "• Monitoraggio costante per prevenire violazioni"
          ]
        },
        {
          title: "8. Contatti",
          icon: Mail,
          content: [
            "Per esercitare i tuoi diritti o per domande sulla privacy:",
            "• Email: privacy@novaresin.it",
            "• Telefono: +39 031 123456",
            "• Indirizzo: Via Montegrappa, 28 - 23895 Nibionno (LC)",
            "• Responsabile della Protezione dei Dati: dpo@novaresin.it"
          ]
        }
      ]
    },
    EN: {
      title: "Privacy Policy",
      subtitle: "Your privacy matters to us",
      lastUpdated: "Last updated: September 14, 2025",
      sections: [
        {
          title: "1. Information we collect",
          icon: Database,
          content: [
            "• Contact details (name, email, company) when you fill our forms",
            "• Navigation data (IP address, browser, operating system)",
            "• Technical and preference cookies to improve user experience",
            "• Approximate geolocation data for localized services"
          ]
        },
        {
          title: "2. How we use your data",
          icon: Eye,
          content: [
            "• Respond to your contact requests and quotes",
            "• Improve our services and website experience",
            "• Send commercial communications (only with your consent)",
            "• Analyze website performance for optimizations"
          ]
        },
        {
          title: "3. Legal basis for processing",
          icon: FileText,
          content: [
            "• Explicit consent for marketing communications",
            "• Legitimate interest for website analysis",
            "• Contract execution for requested services",
            "• Legal obligation for tax document retention"
          ]
        },
        {
          title: "4. Data sharing",
          icon: UserCheck,
          content: [
            "• We never sell your personal data to third parties",
            "• We share data only with trusted service providers (Google Analytics, hosting)",
            "• Extra-EU data transfers only with adequate safeguards",
            "• Limited access only to authorized personnel"
          ]
        },
        {
          title: "5. Data retention",
          icon: Calendar,
          content: [
            "• Contact data: retained for 2 years from last contact",
            "• Analytics data: retained for 26 months (Google Analytics)",
            "• Cookies: variable expiration (from session to 2 years)",
            "• Right to deletion: you can request removal at any time"
          ]
        },
        {
          title: "6. Your GDPR rights",
          icon: Shield,
          content: [
            "• Right of access: see what data we have about you",
            "• Right to rectification: correct inaccurate data",
            "• Right to erasure: request removal of your data",
            "• Right to data portability: receive your data in readable format",
            "• Right to object: oppose processing for marketing",
            "• Right to restriction: limit the use of your data"
          ]
        },
        {
          title: "7. Security",
          icon: Lock,
          content: [
            "• We use SSL/TLS encryption for all communications",
            "• Secure servers with regular backups",
            "• Limited data access with two-factor authentication",
            "• Constant monitoring to prevent breaches"
          ]
        },
        {
          title: "8. Contact",
          icon: Mail,
          content: [
            "To exercise your rights or for privacy questions:",
            "• Email: privacy@novaresin.it",
            "• Phone: +39 031 123456",
            "• Address: Via Montegrappa, 28 - 23895 Nibionno (LC)",
            "• Data Protection Officer: dpo@novaresin.it"
          ]
        }
      ]
    }
  };

  const currentData = privacyData[language] || privacyData.IT;

  return (
    <>
      <SEOHead 
        title={`${currentData.title} | Novaresin`}
        description="Privacy Policy di Novaresin - Scopri come proteggiamo e utilizziamo i tuoi dati personali in conformità al GDPR"
        keywords="privacy, gdpr, protezione dati, novaresin, policy"
      />
      
      <div className="min-h-screen bg-chapp-dark-bg text-chapp-white">
        <ChappNavbar />
        
        <main className="pt-24 pb-16">
          <div className="container-chapp">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6 animate-fade-in">
                <Shield size={16} />
                Privacy & Sicurezza
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

            {/* Privacy Sections */}
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

            {/* Contact CTA */}
            <div className="text-center mt-16 p-8 card-premium-dark animate-fade-in">
              <h2 className="text-heading-xl text-chapp-title mb-4">
                {language === 'IT' ? 'Hai domande sulla privacy?' : 'Questions about privacy?'}
              </h2>
              <p className="text-body-lg text-chapp-body mb-6">
                {language === 'IT' 
                  ? 'Contattaci per qualsiasi chiarimento sui tuoi dati personali'
                  : 'Contact us for any clarification about your personal data'
                }
              </p>
              <a 
                href="mailto:privacy@novaresin.it"
                className="btn-chapp-accent inline-flex items-center hover-glow-blue"
              >
                <Mail size={18} className="mr-2" />
                {language === 'IT' ? 'Contatta Privacy Officer' : 'Contact Privacy Officer'}
              </a>
            </div>
          </div>
        </main>
        
        <ChappFooter />
      </div>
    </>
  );
};

export default Privacy;