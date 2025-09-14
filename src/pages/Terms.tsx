import React from 'react';
import { FileText, Scale, AlertTriangle, Mail, Clock, Shield, Gavel, Info } from 'lucide-react';
import ChappNavbar from '../components/ChappNavbar';
import ChappFooter from '../components/ChappFooter';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Terms = () => {
  const { t, language } = useLanguage();

  const termsData = {
    IT: {
      title: "Termini di Servizio",
      subtitle: "Condizioni generali di utilizzo del sito web",
      lastUpdated: "Ultimo aggiornamento: 14 Settembre 2025",
      sections: [
        {
          title: "1. Accettazione dei Termini",
          icon: FileText,
          content: [
            "Utilizzando questo sito web, accetti automaticamente questi termini di servizio.",
            "Se non accetti questi termini, ti preghiamo di non utilizzare il nostro sito web.",
            "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.",
            "Le modifiche saranno pubblicate su questa pagina con data di aggiornamento."
          ]
        },
        {
          title: "2. Servizi Offerti",
          icon: Info,
          content: [
            "Novaresin S.p.A. offre servizi specializzati in maschere e dispositivi di protezione.",
            "Le informazioni sul sito sono fornite a scopo informativo e commerciale.",
            "I servizi specifici sono soggetti a contratti separati.",
            "I prezzi e la disponibilità sono soggetti a variazioni senza preavviso."
          ]
        },
        {
          title: "3. Utilizzo del Sito",
          icon: Shield,
          content: [
            "Puoi utilizzare il sito solo per scopi legali e conformi a questi termini.",
            "È vietato tentare di compromettere la sicurezza del sito.",
            "Non puoi utilizzare sistemi automatizzati per estrarre dati dal sito.",
            "Rispetta i diritti di proprietà intellettuale di tutti i contenuti."
          ]
        },
        {
          title: "4. Proprietà Intellettuale",
          icon: Scale,
          content: [
            "Tutti i contenuti del sito sono protetti da copyright di Novaresin S.p.A.",
            "È vietata la riproduzione non autorizzata di testi, immagini e design.",
            "I marchi e loghi sono di proprietà esclusiva di Novaresin S.p.A.",
            "L'uso non autorizzato può comportare azioni legali."
          ]
        },
        {
          title: "5. Limitazioni di Responsabilità",
          icon: AlertTriangle,
          content: [
            "Il sito è fornito 'così com'è' senza garanzie di alcun tipo.",
            "Non garantiamo la disponibilità continua o l'assenza di errori.",
            "Non siamo responsabili per danni diretti, indiretti o consequenziali.",
            "La responsabilità è limitata al valore dei servizi acquistati."
          ]
        },
        {
          title: "6. Privacy e Protezione Dati",
          icon: Shield,
          content: [
            "Il trattamento dei dati personali è disciplinato dalla nostra Privacy Policy.",
            "Utilizziamo cookie tecnici e di profilazione come descritto nella Cookie Policy.",
            "I tuoi diritti GDPR sono descritti nella Privacy Policy.",
            "Puoi contattare il nostro DPO per questioni sulla privacy."
          ]
        },
        {
          title: "7. Risoluzione delle Controversie",
          icon: Gavel,
          content: [
            "Questi termini sono regolati dalla legge italiana.",
            "Per controversie fino a €5.000 è competente il Giudice di Pace di Como.",
            "Per controversie superiori è competente il Tribunale di Como.",
            "Si privilegerà sempre la risoluzione amichevole delle controversie."
          ]
        },
        {
          title: "8. Contatti",
          icon: Mail,
          content: [
            "Per domande sui termini di servizio contattaci:",
            "• Email: legal@novaresin.it",
            "• Telefono: +39 031 123456",
            "• Indirizzo: Via Montegrappa, 28 - 23895 Nibionno (LC)",
            "• P.IVA: IT12345678901"
          ]
        }
      ]
    },
    EN: {
      title: "Terms of Service",
      subtitle: "General conditions for website use",
      lastUpdated: "Last updated: September 14, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          icon: FileText,
          content: [
            "By using this website, you automatically accept these terms of service.",
            "If you do not accept these terms, please do not use our website.",
            "We reserve the right to modify these terms at any time.",
            "Changes will be posted on this page with an updated date."
          ]
        },
        {
          title: "2. Services Offered",
          icon: Info,
          content: [
            "Novaresin S.p.A. offers specialized services in masks and protective devices.",
            "Website information is provided for informational and commercial purposes.",
            "Specific services are subject to separate contracts.",
            "Prices and availability are subject to change without notice."
          ]
        },
        {
          title: "3. Website Use",
          icon: Shield,
          content: [
            "You may use the site only for legal purposes compliant with these terms.",
            "It is forbidden to attempt to compromise site security.",
            "You cannot use automated systems to extract data from the site.",
            "Respect intellectual property rights of all content."
          ]
        },
        {
          title: "4. Intellectual Property",
          icon: Scale,
          content: [
            "All site content is protected by Novaresin S.p.A. copyright.",
            "Unauthorized reproduction of texts, images and designs is prohibited.",
            "Trademarks and logos are exclusive property of Novaresin S.p.A.",
            "Unauthorized use may result in legal action."
          ]
        },
        {
          title: "5. Liability Limitations",
          icon: AlertTriangle,
          content: [
            "The site is provided 'as is' without warranties of any kind.",
            "We do not guarantee continuous availability or absence of errors.",
            "We are not responsible for direct, indirect or consequential damages.",
            "Liability is limited to the value of purchased services."
          ]
        },
        {
          title: "6. Privacy and Data Protection",
          icon: Shield,
          content: [
            "Personal data processing is governed by our Privacy Policy.",
            "We use technical and profiling cookies as described in the Cookie Policy.",
            "Your GDPR rights are described in the Privacy Policy.",
            "You can contact our DPO for privacy matters."
          ]
        },
        {
          title: "7. Dispute Resolution",
          icon: Gavel,
          content: [
            "These terms are governed by Italian law.",
            "For disputes up to €5,000, the Peace Judge of Como has jurisdiction.",
            "For higher disputes, the Court of Como has jurisdiction.",
            "Amicable resolution of disputes will always be preferred."
          ]
        },
        {
          title: "8. Contact",
          icon: Mail,
          content: [
            "For questions about terms of service contact us:",
            "• Email: legal@novaresin.it",
            "• Phone: +39 031 123456",
            "• Address: Via Montegrappa, 28 - 23895 Nibionno (LC)",
            "• VAT: IT12345678901"
          ]
        }
      ]
    }
  };

  const currentData = termsData[language] || termsData.IT;

  return (
    <>
      <SEOHead 
        title={`${currentData.title} | Novaresin`}
        description="Termini di Servizio di Novaresin - Condizioni generali per l'utilizzo del sito web e dei servizi"
        keywords="termini servizio, condizioni utilizzo, novaresin, legale"
      />
      
      <div className="min-h-screen bg-chapp-dark-bg text-chapp-white">
        <ChappNavbar />
        
        <main className="pt-24 pb-16">
          <div className="container-chapp">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6 animate-fade-in">
                <Scale size={16} />
                Termini Legali
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

            {/* Terms Sections */}
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
                {language === 'IT' ? 'Hai domande legali?' : 'Legal questions?'}
              </h2>
              <p className="text-body-lg text-chapp-body mb-6">
                {language === 'IT' 
                  ? 'Contatta il nostro ufficio legale per chiarimenti sui termini'
                  : 'Contact our legal office for clarification on terms'
                }
              </p>
              <a 
                href="mailto:legal@novaresin.it"
                className="btn-chapp-accent inline-flex items-center hover-glow-blue"
              >
                <Mail size={18} className="mr-2" />
                {language === 'IT' ? 'Contatta Ufficio Legale' : 'Contact Legal Office'}
              </a>
            </div>
          </div>
        </main>
        
        <ChappFooter />
      </div>
    </>
  );
};

export default Terms;