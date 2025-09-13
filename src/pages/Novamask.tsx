import React, { useState } from "react";
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
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";
import ChappNavbar from "../components/ChappNavbar";
import ChappFooter from "../components/ChappFooter";
import { breadcrumbSchema } from "../data/structuredData";

const Novamask = () => {
  const { t, language } = useLanguage();
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [isInspiration, setIsInspiration] = useState(true);
  const [imageLoading, setImageLoading] = useState({});

  // Force scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const layers = [
    {
      id: "bacteriostatic",
      name:
        language === "IT"
          ? "Batteriostatico traspirante"
          : "Breathable bacteriostatic",
      description:
        language === "IT"
          ? "Tessuto indemagliabile certificato Oeko-tex e trattato con batteriostatico e idrorepellente Sanitized ® AG Swiss"
          : "Run-resistant fabric certified Oeko-tex and treated with bacteriostatic and water-repellent Sanitized ® AG Swiss",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400/30",
      hoverColor: "hover:border-cyan-400/60",
    },
    {
      id: "filter",
      name: language === "IT" ? "Imbottitura filtrante" : "Filtering padding",
      description:
        language === "IT"
          ? "Imbottitura filtrante microforata."
          : "Micro-perforated filtering padding.",
      color: "from-emerald-400 to-green-500",
      borderColor: "border-emerald-400/30",
      hoverColor: "hover:border-emerald-400/60",
    },
    {
      id: "breathable",
      name: language === "IT" ? "Tessuto traspirante" : "Breathable fabric",
      description:
        language === "IT"
          ? "Lo strato a contatto con la pelle è composto da un tessuto indemagliabile certificato Oeko-tex."
          : "The layer in contact with the skin is made of run-resistant fabric certified Oeko-tex.",
      color: "from-purple-400 to-indigo-500",
      borderColor: "border-purple-400/30",
      hoverColor: "hover:border-purple-400/60",
    },
  ];

  const sectors = [
    {
      id: "industrial",
      title: "Industrial",
      description:
        language === "IT"
          ? "Protezione in ambienti industriali e manifatturieri"
          : "Protection in industrial and manufacturing environments",
      icon: Building,
      gradient: "from-slate-400 to-gray-500",
      glowColor: "shadow-slate-400/20",
    },
    {
      id: "fashion",
      title: "Fashion",
      description:
        language === "IT"
          ? "Design elegante per uso quotidiano e professionale"
          : "Elegant design for daily and professional use",
      icon: Shirt,
      gradient: "from-pink-400 to-rose-500",
      glowColor: "shadow-pink-400/20",
    },
    {
      id: "daily",
      title: "Daily",
      description:
        language === "IT"
          ? "Comfort e praticità per l'uso di tutti i giorni"
          : "Comfort and practicality for everyday use",
      icon: Home,
      gradient: "from-blue-400 to-indigo-500",
      glowColor: "shadow-blue-400/20",
    },
  ];

  const warnings = [
    {
      icon: Thermometer,
      text:
        language === "IT"
          ? "Lavaggio a macchina delicato alla temperatura indicata"
          : "Delicate machine wash at indicated temperature",
      color: "from-cyan-400 to-blue-500",
      iconColor: "text-cyan-400",
    },
    {
      icon: AlertTriangle,
      text: language === "IT" ? "Asciugatura in tamburo" : "Tumble drying",
      color: "from-amber-400 to-orange-500",
      iconColor: "text-amber-400",
    },
    {
      icon: Droplets,
      text: language === "IT" ? "No lavaggio a secco" : "No dry cleaning",
      color: "from-red-400 to-pink-500",
      iconColor: "text-red-400",
    },
    {
      icon: Flame,
      text: language === "IT" ? "Non stirare" : "Do not iron",
      color: "from-yellow-400 to-amber-500",
      iconColor: "text-yellow-400",
    },
  ];

  // SEO data for Novamask page
  const pageTitle =
    language === "IT"
      ? "Novamask - Mascherine Protettive Lavabili | Certificazione Sanitized AG ISO 9001"
      : "Novamask - Washable Protective Face Masks | Sanitized AG ISO 9001 Certification";

  const pageDescription =
    language === "IT"
      ? "Novamask: mascherine protettive lavabili e riutilizzabili con certificazione Sanitized AG. Riduce la diffusione di particelle contenenti batteri e virus. Comfort e protezione quotidiana."
      : "Novamask: washable and reusable protective face masks with Sanitized AG certification. Reduces the spread of particles containing bacteria and viruses. Daily comfort and protection.";

  // Breadcrumb structured data
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://novaresin.lovable.app/" },
    { name: "Novamask", url: "https://novaresin.lovable.app/novamask" },
  ]);

  const handleImageLoad = (imageName) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };

  const handleImageError = (imageName) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };

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
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
                {language === "IT" ? "Torna alla Homepage" : "Back to Homepage"}
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-body-sm font-semibold border border-cyan-400/20">
                    <Shield size={16} />
                    Novamask
                  </div>

                  <h1 className="text-display-xl text-chapp-title leading-tight font-light">
                    {language === "IT" ? "Protezione " : "Advanced "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-medium">
                      {language === "IT" ? "Avanzata" : "Protection"}
                    </span>
                    <br />
                    {language === "IT" ? "Riutilizzabile" : "Reusable Masks"}
                  </h1>

                  <p className="text-body-xl text-chapp-body leading-relaxed">
                    {language === "IT"
                      ? "Copri viso lavabile e adattabile a diverse morfologie facciali. Realizzato secondo normativa ISO9001, certificato Sanitized AG con proprietà batteriostatiche e idrorepellenti."
                      : "Washable face cover adaptable to different facial morphologies. Made according to ISO9001 standards, Sanitized AG certified with bacteriostatic and water-repellent properties."}
                  </p>

                  <div className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <Shield
                        className="text-cyan-400 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <h3 className="text-heading-sm text-chapp-white font-semibold mb-2">
                          {language === "IT"
                            ? "Messaggio Chiave"
                            : "Key Message"}
                        </h3>
                        <p className="text-body-md text-chapp-gray-300">
                          {language === "IT"
                            ? "Novamask riduce la diffusione di particelle di saliva contenenti batteri e virus, garantendo protezione e comfort per uso quotidiano."
                            : "Novamask reduces the spread of saliva particles containing bacteria and viruses, ensuring protection and comfort for daily use."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Logo - Interactive */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-chapp-dark-bg/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 group-hover:border-cyan-400/30 transition-all duration-500 group-hover:scale-105">
                      <img
                        src="/novamask_logo.png"
                        alt="Novamask Logo"
                        className="w-96 h-auto object-contain filter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500"
                        style={{ 
                          filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5)) brightness(1.1) contrast(1.1)',
                          mixBlendMode: 'screen'
                        }}
                        onLoad={() => handleImageLoad('logo')}
                        onError={() => handleImageError('logo')}
                      />
                    </div>
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
                  {language === "IT" ? "Struttura a Strati" : "Layer Structure"}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === "IT"
                    ? "Scopri la tecnologia avanzata dei nostri strati protettivi"
                    : "Discover the advanced technology of our protective layers"}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Interactive Layers Visualization */}
                <div className="flex justify-center">
                  <div className="relative w-80 h-80">
                    {layers.map((layer, index) => (
                      <div
                        key={layer.id}
                        className={`absolute inset-0 rounded-3xl border-2 cursor-pointer transition-all duration-500 backdrop-blur-sm ${
                          activeLayer === layer.id
                            ? `bg-gradient-to-br ${layer.color} ${layer.borderColor} scale-105 z-30 shadow-2xl`
                            : `border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:scale-102 ${layer.hoverColor}`
                        }`}
                        style={{
                          transform: `translateZ(${index * 20}px) scale(${
                            1 - index * 0.08
                          })`,
                          zIndex: activeLayer === layer.id ? 30 : 10 - index,
                        }}
                        onClick={() =>
                          setActiveLayer(
                            activeLayer === layer.id ? null : layer.id
                          )
                        }
                        onMouseEnter={() => setActiveLayer(layer.id)}
                        onMouseLeave={() => setActiveLayer(null)}
                      >
                        <div className="flex items-center justify-center h-full relative overflow-hidden">
                          <div className={`absolute inset-0 ${activeLayer === layer.id ? 'bg-black/10' : 'bg-black/30'} transition-all duration-300`}></div>
                          <img
                            src="/novamask.webp"
                            alt="Novamask"
                            className={`w-32 h-32 object-contain transition-all duration-300 relative z-10 ${
                              activeLayer === layer.id
                                ? "scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                : "scale-100 opacity-80"
                            }`}
                            style={{ 
                              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5)) brightness(1.2) contrast(1.1)',
                              mixBlendMode: 'screen'
                            }}
                            onLoad={() => handleImageLoad(`layer-${index}`)}
                            onError={() => handleImageError(`layer-${index}`)}
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
                      className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-sm ${
                        activeLayer === layer.id
                          ? `bg-gradient-to-r ${layer.color} border-white/20 scale-105 shadow-xl`
                          : `bg-gray-900/30 ${layer.borderColor} hover:${layer.hoverColor} hover:bg-gray-800/40`
                      }`}
                      onClick={() =>
                        setActiveLayer(
                          activeLayer === layer.id ? null : layer.id
                        )
                      }
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          activeLayer === layer.id
                            ? 'bg-white/20'
                            : 'bg-gray-800/50'
                        }`}>
                          <Layers size={20} className={`${
                            activeLayer === layer.id ? 'text-white' : 'text-cyan-400'
                          }`} />
                        </div>
                        <div>
                          <h3
                            className={`text-heading-md font-semibold mb-3 ${
                              activeLayer === layer.id
                                ? "text-white"
                                : "text-chapp-white"
                            }`}
                          >
                            {layer.name}
                          </h3>
                          <p
                            className={`text-body-md ${
                              activeLayer === layer.id
                                ? "text-white/90"
                                : "text-chapp-gray-300"
                            }`}
                          >
                            {layer.description}
                          </p>
                        </div>
                      </div>
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
                  {language === "IT" ? "Settori di Utilizzo" : "Usage Sectors"}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === "IT"
                    ? "Versatilità e protezione per ogni ambiente"
                    : "Versatility and protection for every environment"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sectors.map((sector) => (
                  <div key={sector.id} className="group">
                    <div className="relative overflow-hidden rounded-3xl bg-gray-900/40 border border-gray-700/50 p-8 text-center hover:border-gray-600/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm group-hover:bg-gray-800/50">
                      {/* Background gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10">
                        <div
                          className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${sector.glowColor} group-hover:shadow-2xl`}
                        >
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
                  {language === "IT"
                    ? "Funzionamento Respiratorio"
                    : "Breathing Function"}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === "IT"
                    ? "Flusso d'aria ottimizzato per comfort e protezione"
                    : "Optimized airflow for comfort and protection"}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-full p-2">
                    <button
                      onClick={() => setIsInspiration(true)}
                      className={`px-6 py-3 rounded-full transition-all duration-300 ${
                        isInspiration
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg"
                          : "text-chapp-gray-300 hover:text-chapp-white hover:bg-gray-800/50"
                      }`}
                    >
                      {language === "IT" ? "Inspirazione" : "Inspiration"}
                    </button>
                    <button
                      onClick={() => setIsInspiration(false)}
                      className={`px-6 py-3 rounded-full transition-all duration-300 ${
                        !isInspiration
                          ? "bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-lg"
                          : "text-chapp-gray-300 hover:text-chapp-white hover:bg-gray-800/50"
                      }`}
                    >
                      {language === "IT" ? "Espirazione" : "Expiration"}
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="relative bg-gray-900/40 border border-gray-700/50 rounded-3xl p-12 overflow-hidden backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center text-center space-y-6">
                    {/* Interactive Image Switch */}
                    <div className="relative group cursor-pointer">
                      <div className={`absolute inset-0 ${isInspiration ? 'bg-cyan-400/10' : 'bg-emerald-400/10'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${isInspiration ? 'border-cyan-400/20' : 'border-emerald-400/20'} rounded-2xl p-6 transition-all duration-500 group-hover:scale-105`}>
                        {isInspiration ? (
                          <img
                            src="/inspira.png"
                            alt="Inspirazione"
                            className="w-48 h-48 object-contain mx-auto transition-all duration-500 hover:scale-110"
                            style={{ 
                              filter: 'drop-shadow(0 0 15px rgba(34,211,238,0.3)) brightness(1.2) contrast(1.1)',
                              mixBlendMode: 'screen'
                            }}
                            onLoad={() => handleImageLoad('inspira')}
                            onError={() => handleImageError('inspira')}
                          />
                        ) : (
                          <img
                            src="/espira.png"
                            alt="Espirazione"
                            className="w-48 h-48 object-contain mx-auto transition-all duration-500 hover:scale-110"
                            style={{ 
                              filter: 'drop-shadow(0 0 15px rgba(16,185,129,0.3)) brightness(1.2) contrast(1.1)',
                              mixBlendMode: 'screen'
                            }}
                            onLoad={() => handleImageLoad('espira')}
                            onError={() => handleImageError('espira')}
                          />
                        )}
                      </div>
                    </div>

                    {/* Text Switch */}
                    <div className={`p-6 rounded-2xl border ${isInspiration ? 'border-cyan-400/20 bg-cyan-400/5' : 'border-emerald-400/20 bg-emerald-400/5'} backdrop-blur-sm transition-all duration-500`}>
                      <p className="text-body-lg text-chapp-white font-semibold max-w-2xl mx-auto">
                        {isInspiration
                          ? language === "IT"
                            ? "Tramite il composto 3-layer della maschera, l'aria viene filtrata dallo strato esterno impermeabile e batteriostatico."
                            : "Through the 3-layer composition of the mask, the air is filtered by the outer waterproof and bacteriostatic layer."
                          : language === "IT"
                          ? "Riduce la nebulizzazione e la diffusione delle particelle di saliva verso l'esterno"
                          : "Reduces nebulization and the spread of saliva particles outward."}
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
                  {language === "IT"
                    ? "Istruzioni per la Cura"
                    : "Care Instructions"}
                </h2>
                <p className="text-body-lg text-chapp-body max-w-2xl mx-auto">
                  {language === "IT"
                    ? "Mantieni la tua Novamask in perfette condizioni"
                    : "Keep your Novamask in perfect condition"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {warnings.map((warning, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-6 p-6 bg-gray-900/40 border border-gray-700/50 rounded-2xl hover:border-gray-600/60 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm group-hover:bg-gray-800/50">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${warning.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                      >
                        <warning.icon className="text-white" size={24} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <warning.icon className={`${warning.iconColor}`} size={16} />
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${warning.color}`}></div>
                        </div>
                        <p className="text-body-md text-chapp-gray-300 group-hover:text-chapp-white transition-colors duration-300 leading-relaxed">
                          {warning.text}
                        </p>
                      </div>
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