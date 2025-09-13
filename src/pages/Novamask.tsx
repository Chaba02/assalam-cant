import React, { useState } from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Building, 
  Shirt, 
  Home,
  Eye,
  Droplets,
  Wind,
  AlertTriangle,
  Thermometer,
  WashingMachine,
  Flame,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import ChappNavbar from '../components/ChappNavbar';
import ChappFooter from '../components/ChappFooter';
import { breadcrumbSchema } from '../data/structuredData';

const Novamask = () => {
  const { t, language } = useLanguage();
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [isInspiration, setIsInspiration] = useState(true);

  // Force scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const layers = [
    {
      id: 'external',
      name: language === 'IT' ? 'Strato Esterno' : 'External Layer',
      description: language === 'IT' 
        ? 'Tessuto resistente e lavabile, protezione contro agenti esterni'
        : 'Resistant and washable fabric, protection against external agents',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'filter',
      name: language === 'IT' ? 'Strato Filtrante' : 'Filter Layer',
      description: language === 'IT' 
        ? 'Filtrazione avanzata delle particelle e dei batteri'
        : 'Advanced filtration of particles and bacteria',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'internal',
      name: language === 'IT' ? 'Strato Interno' : 'Internal Layer',
      description: language === 'IT' 
        ? 'Comfort e traspirabilità a contatto con la pelle'
        : 'Comfort and breathability in contact with the skin',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const sectors = [
    {
      id: 'industrial',
      title: 'Industrial',
      description: language === 'IT' 
        ? 'Protezione in ambienti industriali e manifatturieri'
        : 'Protection in industrial and manufacturing environments',
      icon: Building,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'fashion',
      title: 'Fashion',
      description: language === 'IT' 
        ? 'Design elegante per uso quotidiano e professionale'
        : 'Elegant design for daily and professional use',
      icon: Shirt,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'daily',
      title: 'Daily',
      description: language === 'IT' 
        ? 'Comfort e praticità per l\'uso di tutti i giorni'
        : 'Comfort and practicality for everyday use',
      icon: Home,
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const warnings = [
    {
      icon: Thermometer,
      text: language === 'IT' 
        ? 'Lavaggio a macchina delicato alla temperatura indicata'
        : 'Delicate machine wash at indicated temperature',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: AlertTriangle,
      text: language === 'IT' 
        ? 'Asciugatura in tamburo'
        : 'Tumble drying',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Droplets,
      text: language === 'IT' 
        ? 'No lavaggio a secco'
        : 'No dry cleaning',
      color: 'from-red-400 to-red-500'
    },
    {
      icon: Flame,
      text: language === 'IT' 
        ? 'Non stirare'
        : 'Do not iron',
      color: 'from-yellow-400 to-yellow-500'
    }
  ];

  // SEO data for Novamask page
  const pageTitle = language === 'IT' 
    ? 'Novamask - Mascherine Protettive Lavabili | Certificazione Sanitized AG ISO 9001'
    : 'Novamask - Washable Protective Face Masks | Sanitized AG ISO 9001 Certification';

  const pageDescription = language === 'IT'
    ? 'Novamask: mascherine protettive lavabili e riutilizzabili con certificazione Sanitized AG. Riduce la diffusione di particelle contenenti batteri e virus. Comfort e protezione quotidiana.'
    : 'Novamask: washable and reusable protective face masks with Sanitized AG certification. Reduces the spread of particles containing bacteria and viruses. Daily comfort and protection.';

  // Breadcrumb structured data
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://novaresin.lovable.app/' },
    { name: 'Novamask', url: 'https://novaresin.lovable.app/novamask' }
  ]);

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        structuredData={breadcrumbs}
        type="website"
        canonical="https://novaresin.lovable.app/novamask"
      />
      
      <div className="min-h-screen bg-chapp-dark-bg">
        <header>
          <ChappNavbar />
        </header>
        
        <main>
          {/* Hero Section */}
          <section className="section-chapp pt-32 bg-chapp-dark-bg relative overflow-hidden">
            <div className="container-chapp relative z-10">
              {/* Back Button */}
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 mb-12 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                {language === 'IT' ? 'Torna alla Homepage' : 'Back to Homepage'}
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold">
                    <Shield size={16} />
                    Novamask
                  </div>
                  
                  <h1 className="text-display-xl text-chapp-title leading-tight font-light">
                    {language === 'IT' ? 'Protezione ' : 'Advanced '}
                    <span className="bg-gradient-blue-elegant bg-clip-text text-transparent font-medium">
                      {language === 'IT' ? 'Avanzata' : 'Protection'}
                    </span>
                    <br />
                    {language === 'IT' ? 'Riutilizzabile' : 'Reusable Masks'}
                  </h1>
                  
                  <p className="text-body-xl text-chapp-body leading-relaxed">
                    {language === 'IT' 
                      ? 'Copri viso lavabile e adattabile a diverse morfologie facciali. Realizzato secondo normativa ISO9001, certificato Sanitized AG con proprietà batteriostatiche e idrorepellenti.'
                      : 'Washable face cover adaptable to different facial morphologies. Made according to ISO9001 standards, Sanitized AG certified with bacteriostatic and water-repellent properties.'
                    }
                  </p>

                  <div className="bg-chapp-accent-blue/10 border border-chapp-accent-blue/20 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="text-chapp-accent-blue flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="text-heading-sm text-chapp-white font-semibold mb-2">
                          {language === 'IT' ? 'Messaggio Chiave' : 'Key Message'}
                        </h3>
                        <p className="text-body-md text-chapp-gray-300">
                          {language === 'IT' 
                            ? 'Novamask riduce la diffusione di particelle di saliva contenenti batteri e virus, garantendo protezione e comfort per uso quotidiano.'
                            : 'Novamask reduces the spread of saliva particles containing bacteria and viruses, ensuring protection and comfort for daily use.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-chapp-white/10 via-chapp-white/5 to-transparent border border-chapp-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-chapp-accent-blue/40 transition-all duration-500">
                      <div className="w-48 h-48 lg:w-56 lg:h-56 bg-chapp-accent-blue/20 rounded-2xl flex items-center justify-center group-hover:bg-chapp-accent-blue/30 transition-all duration-500">
                        <Shield className="text-chapp-accent-blue" size={80} />
                      </div>
                    </div>
                    {/* Floating particles */}
                    <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-chapp-accent-blue rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-chapp-accent-blue rounded-full animate-bounce opacity-70" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Layers Section */}
          <section className="section-chapp bg-chapp-dark-bg">
            <div className="container-chapp">
              <div className="text-center mb-16">
                <h2 className="text-display-md text-chapp-title font-light mb-6">
                  {language === 'IT' ? 'Struttura a Strati' : 'Layer Structure'}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === 'IT' 
                    ? 'Scopri la tecnologia avanzata dei nostri strati protettivi'
                    : 'Discover the advanced technology of our protective layers'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Interactive Layers Visualization */}
                <div className="flex justify-center">
                  <div className="relative w-80 h-80">
                    {layers.map((layer, index) => (
                      <div
                        key={layer.id}
                        className={`absolute inset-0 rounded-3xl border-2 cursor-pointer transition-all duration-500 ${
                          activeLayer === layer.id 
                            ? `bg-gradient-to-br ${layer.color} border-white/40 scale-105 z-30` 
                            : 'border-chapp-white/20 bg-chapp-white/5 hover:border-chapp-white/40 hover:scale-102'
                        }`}
                        style={{ 
                          transform: `translateZ(${index * 20}px) scale(${1 - index * 0.1})`,
                          zIndex: activeLayer === layer.id ? 30 : 10 - index 
                        }}
                        onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                        onMouseEnter={() => setActiveLayer(layer.id)}
                        onMouseLeave={() => setActiveLayer(null)}
                      >
                        <div className="flex items-center justify-center h-full">
                          <Layers 
                            className={`transition-all duration-300 ${
                              activeLayer === layer.id 
                                ? 'text-white scale-150' 
                                : 'text-chapp-accent-blue scale-100'
                            }`} 
                            size={40} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Layer Descriptions */}
                <div className="space-y-6">
                  {layers.map((layer, index) => (
                    <div
                      key={layer.id}
                      className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                        activeLayer === layer.id 
                          ? `bg-gradient-to-r ${layer.color} border-white/20 scale-105` 
                          : 'bg-chapp-white/5 border-chapp-white/10 hover:border-chapp-white/20 hover:bg-chapp-white/10'
                      }`}
                      onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                    >
                      <h3 className={`text-heading-md font-semibold mb-3 ${
                        activeLayer === layer.id ? 'text-white' : 'text-chapp-white'
                      }`}>
                        {layer.name}
                      </h3>
                      <p className={`text-body-md ${
                        activeLayer === layer.id ? 'text-white/90' : 'text-chapp-gray-300'
                      }`}>
                        {layer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sectors Section */}
          <section className="section-chapp bg-chapp-dark-bg">
            <div className="container-chapp">
              <div className="text-center mb-16">
                <h2 className="text-display-md text-chapp-title font-light mb-6">
                  {language === 'IT' ? 'Settori di Utilizzo' : 'Usage Sectors'}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === 'IT' 
                    ? 'Versatilità e protezione per ogni ambiente'
                    : 'Versatility and protection for every environment'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sectors.map((sector) => (
                  <div key={sector.id} className="group">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-chapp-white/10 via-chapp-white/5 to-transparent border border-chapp-white/20 p-8 text-center hover:border-chapp-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <sector.icon className="text-white" size={32} />
                        </div>
                        
                        <h3 className="text-heading-lg text-chapp-white font-semibold mb-4 group-hover:text-opacity-90">
                          {sector.title}
                        </h3>
                        
                        <p className="text-body-md text-chapp-gray-300 leading-relaxed group-hover:text-chapp-white transition-colors duration-300">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Breathing Function Section */}
          <section className="section-chapp bg-chapp-dark-bg">
            <div className="container-chapp">
              <div className="text-center mb-16">
                <h2 className="text-display-md text-chapp-title font-light mb-6">
                  {language === 'IT' ? 'Funzionamento Respiratorio' : 'Breathing Function'}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === 'IT' 
                    ? 'Flusso d\'aria ottimizzato per comfort e protezione'
                    : 'Optimized airflow for comfort and protection'
                  }
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-full p-2">
                    <button
                      onClick={() => setIsInspiration(true)}
                      className={`px-6 py-3 rounded-full transition-all duration-300 ${
                        isInspiration 
                          ? 'bg-chapp-accent-blue text-white' 
                          : 'text-chapp-gray-300 hover:text-chapp-white'
                      }`}
                    >
                      {language === 'IT' ? 'Inspirazione' : 'Inspiration'}
                    </button>
                    <button
                      onClick={() => setIsInspiration(false)}
                      className={`px-6 py-3 rounded-full transition-all duration-300 ${
                        !isInspiration 
                          ? 'bg-chapp-accent-blue text-white' 
                          : 'text-chapp-gray-300 hover:text-chapp-white'
                      }`}
                    >
                      {language === 'IT' ? 'Espirazione' : 'Expiration'}
                    </button>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-chapp-white/10 via-chapp-white/5 to-transparent border border-chapp-white/20 rounded-3xl p-12 overflow-hidden">
                  <div className="flex items-center justify-center space-x-8">
                    {/* Air particles animation */}
                    <div className="relative">
                      <Wind 
                        className={`text-chapp-accent-blue transition-all duration-1000 ${
                          isInspiration ? 'scale-100 rotate-0' : 'scale-110 rotate-180'
                        }`} 
                        size={48} 
                      />
                      {/* Animated particles */}
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 bg-chapp-accent-blue rounded-full transition-all duration-1000 ${
                            isInspiration 
                              ? `opacity-100 translate-x-${i * 4 + 8}` 
                              : `opacity-100 -translate-x-${i * 4 + 8}`
                          }`}
                          style={{ 
                            left: `${isInspiration ? -20 - i * 16 : 60 + i * 16}px`,
                            top: `${20 + i * 2}px`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                    </div>

                    <div className="text-center">
                      <Eye className="text-chapp-gray-300 mx-auto mb-4" size={32} />
                      <p className="text-body-lg text-chapp-white font-semibold">
                        {isInspiration 
                          ? (language === 'IT' ? 'Aria filtrata in entrata' : 'Filtered air in')
                          : (language === 'IT' ? 'Aria sicura in uscita' : 'Safe air out')
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Care Instructions Section */}
          <section className="section-chapp bg-chapp-dark-bg">
            <div className="container-chapp">
              <div className="text-center mb-16">
                <h2 className="text-display-md text-chapp-title font-light mb-6">
                  {language === 'IT' ? 'Istruzioni per la Cura' : 'Care Instructions'}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === 'IT' 
                    ? 'Mantieni la tua Novamask in perfette condizioni'
                    : 'Keep your Novamask in perfect condition'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {warnings.map((warning, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-chapp-white/10 via-chapp-white/5 to-transparent border border-chapp-white/20 rounded-2xl hover:border-chapp-white/40 transition-all duration-500 hover:-translate-y-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${warning.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <warning.icon className="text-white" size={24} />
                      </div>
                      
                      <p className="text-body-md text-chapp-gray-300 group-hover:text-chapp-white transition-colors duration-300 leading-relaxed">
                        {warning.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <ChappFooter />
      </div>
    </>
  );
};

export default Novamask;