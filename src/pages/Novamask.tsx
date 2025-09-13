import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Pause, ChevronRight, Check, X, Droplets, Wind, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChappNavbar from "@/components/ChappNavbar";
import ChappFooter from "@/components/ChappFooter";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { breadcrumbSchema } from "@/data/structuredData";
import InteractiveLayerStructure from "@/components/InteractiveLayer";

const Novamask = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inspiration' | 'expiration'>('inspiration');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apple-style breathing animation cycle
  useEffect(() => {
    if (!isBreathingActive) return;
    
    const interval = setInterval(() => {
      setBreathingPhase(prev => prev === 'inspiration' ? 'expiration' : 'inspiration');
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isBreathingActive]);

  const layers = [
    {
      id: 1,
      name: language === 'IT' ? 'Strato Batteriostatico' : 'Bacteriostatic Layer',
      description: language === 'IT' 
        ? 'Trattamento antibatterico certificato Sanitized AG per massima igiene'
        : 'Certified Sanitized AG antibacterial treatment for maximum hygiene',
      color: 'from-blue-500/20 via-cyan-400/30 to-blue-600/20',
      icon: Shield,
      depth: 'translateZ(30px)'
    },
    {
      id: 2,
      name: language === 'IT' ? 'Strato Filtrante' : 'Filtering Layer',
      description: language === 'IT' 
        ? 'Filtrazione avanzata delle particelle e massima protezione respiratoria'
        : 'Advanced particle filtration and maximum respiratory protection',
      color: 'from-purple-500/20 via-pink-400/30 to-purple-600/20',
      icon: Wind,
      depth: 'translateZ(20px)'
    },
    {
      id: 3,
      name: language === 'IT' ? 'Strato Traspirante' : 'Breathable Layer',
      description: language === 'IT' 
        ? 'Comfort respiratorio e gestione ottimale della temperatura e umidità'
        : 'Respiratory comfort and optimal temperature and humidity management',
      color: 'from-green-500/20 via-emerald-400/30 to-green-600/20',
      icon: Droplets,
      depth: 'translateZ(10px)'
    }
  ];

  const sectors = [
    {
      id: 'industrial',
      title: language === 'IT' ? 'Industriale' : 'Industrial',
      description: language === 'IT' 
        ? 'Protezione avanzata in ambienti di lavoro con alte concentrazioni di particelle'
        : 'Advanced protection in work environments with high particle concentrations',
      icon: '🏭',
      gradient: 'from-amber-500/20 to-orange-600/20',
      features: ['ISO 9001', 'Alta filtrazione', 'Resistenza'],
    },
    {
      id: 'fashion',
      title: 'Fashion',
      description: language === 'IT' 
        ? 'Design elegante per eventi, sfilate e occasioni speciali di alta gamma'
        : 'Elegant design for events, fashion shows and high-end special occasions',
      icon: '✨',
      gradient: 'from-pink-500/20 to-rose-600/20',
      features: ['Design premium', 'Comfort superiore', 'Stile italiano'],
    },
    {
      id: 'daily',
      title: language === 'IT' ? 'Quotidiano' : 'Daily',
      description: language === 'IT' 
        ? 'Uso quotidiano con massimo comfort, lavabile e riutilizzabile'
        : 'Daily use with maximum comfort, washable and reusable',
      icon: '🌟',
      gradient: 'from-blue-500/20 to-cyan-600/20',
      features: ['Lavabile', 'Riutilizzabile', 'Eco-friendly'],
    }
  ];

  const warnings = [
    {
      icon: '🌡️',
      text: language === 'IT' 
        ? 'Lavaggio a macchina delicato alla temperatura indicata' 
        : 'Machine wash gentle at indicated temperature',
      allowed: true
    },
    {
      icon: '🚫',
      text: language === 'IT' ? 'Non stirare' : 'Do not iron',
      allowed: false
    },
    {
      icon: '💨',
      text: language === 'IT' ? 'Asciugatura in tamburo' : 'Tumble dry',
      allowed: true
    },
    {
      icon: '🧼',
      text: language === 'IT' ? 'No lavaggio a secco' : 'No dry cleaning',
      allowed: false
    }
  ];

  const pageTitle = language === 'IT' 
    ? 'Novamask - Mascherina Lavabile Premium | Protezione e Stile'
    : 'Novamask - Premium Washable Face Mask | Protection and Style';
  
  const pageDescription = language === 'IT' 
    ? 'Novamask è la mascherina lavabile premium certificata ISO9001 e Sanitized AG. Protezione batteriostatica e idrorepellente per uso industriale, fashion e quotidiano.'
    : 'Novamask is the premium washable face mask certified ISO9001 and Sanitized AG. Bacteriostatic and water-repellent protection for industrial, fashion and daily use.';

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Novamask', url: '/novamask' }
  ]);

  const toggleBreathing = useCallback(() => {
    setIsBreathingActive(prev => !prev);
  }, []);

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        structuredData={breadcrumbs}
      />
      
      <div className="min-h-screen bg-background">
        <ChappNavbar />

        {/* Apple-style Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-chapp-night-blue/20" />
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-20 bg-gradient-to-b from-accent/30 to-transparent rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container-chapp relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button
                  variant="ghost"
                  onClick={() => navigate(-1)}
                  className="group p-3 hover:bg-white/5 rounded-2xl transition-all duration-300 mb-6"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="ml-2">{language === 'IT' ? 'Indietro' : 'Back'}</span>
                </Button>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
                      {language === 'IT' ? '🏆 Certificato ISO 9001' : '🏆 ISO 9001 Certified'}
                    </span>
                  </motion.div>

                  <motion.h1 
                    className="text-hero-sm lg:text-hero font-display font-bold text-foreground leading-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Nova<span className="text-glow-cyan-magenta">mask</span>
                  </motion.h1>

                  <motion.p 
                    className="text-body-xl text-muted-foreground leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {language === 'IT' 
                      ? 'La mascherina lavabile premium che combina protezione avanzata, comfort superiore e design elegante. Certificata per ridurre la diffusione di particelle contenenti batteri e virus.'
                      : 'The premium washable face mask that combines advanced protection, superior comfort and elegant design. Certified to reduce the spread of particles containing bacteria and viruses.'
                    }
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <Button className="btn-chapp-primary group">
                      {language === 'IT' ? 'Scopri di più' : 'Learn More'}
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="btn-chapp-secondary">
                      {language === 'IT' ? 'Specifiche tecniche' : 'Technical specs'}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Content - Product Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 blur-3xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                  
                  <motion.img
                    src="/novamask.webp"
                    alt="Novamask Premium Face Mask"
                    className="relative z-10 w-full h-full object-contain animate-float"
                    onLoad={() => setImageLoaded(true)}
                    whileHover={{ scale: 1.05, rotateY: 15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Layer Structure - Apple Style */}
        <InteractiveLayerStructure language="IT"/>

        {/* Usage Sectors - Bento Grid Layout */}
        <section className="section-chapp">
          <div className="container-chapp">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-lg font-display font-bold text-foreground mb-4">
                {language === 'IT' ? 'Settori di Utilizzo' : 'Usage Sectors'}
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'IT' 
                  ? 'Versatilità e prestazioni per ogni esigenza'
                  : 'Versatility and performance for every need'
                }
              </p>
            </motion.div>

            <div className="hover-orchestration grid md:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.id}
                  className={`
                    hover-child-${index + 1} apple-glass rounded-3xl p-8 
                    magnetic-hover group cursor-pointer
                    ${sector.gradient} bg-gradient-to-br
                  `}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                  
                  <h3 className="text-heading-xl font-semibold text-foreground mb-4">
                    {sector.title}
                  </h3>
                  
                  <p className="text-body-md text-muted-foreground mb-6 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {sector.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Breathing Function Demo */}
        <section className="section-chapp bg-gradient-to-b from-card/20 to-background">
          <div className="container-chapp">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-lg font-display font-bold text-foreground mb-4">
                {language === 'IT' ? 'Funzione Respiratoria' : 'Breathing Function'}
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'IT' 
                  ? 'Visualizza il flusso d\'aria ottimizzato per comfort e protezione'
                  : 'Visualize the optimized airflow for comfort and protection'
                }
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="apple-glass rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <Button
                    onClick={toggleBreathing}
                    className={`
                      group px-8 py-4 rounded-2xl font-medium transition-all duration-300
                      ${isBreathingActive 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }
                    `}
                  >
                    {isBreathingActive ? (
                      <>
                        <Pause className="w-5 h-5 mr-2" />
                        {language === 'IT' ? 'Ferma Demo' : 'Stop Demo'}
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        {language === 'IT' ? 'Avvia Demo' : 'Start Demo'}
                      </>
                    )}
                  </Button>
                </div>

                <div className="relative aspect-video bg-gradient-to-br from-background to-card/50 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isBreathingActive && (
                      <motion.div
                        key={breathingPhase}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-center space-y-6">
                          <motion.div
                            className={`
                              w-32 h-32 rounded-full mx-auto flex items-center justify-center
                              ${breathingPhase === 'inspiration' 
                                ? 'bg-blue-500/30 animate-breathe' 
                                : 'bg-green-500/30 animate-breathe'
                              }
                            `}
                            animate={{
                              scale: breathingPhase === 'inspiration' ? [1, 1.2, 1] : [1, 0.8, 1],
                            }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                          >
                            <Wind className="w-12 h-12 text-white" />
                          </motion.div>

                          <motion.h3 
                            className="text-heading-lg font-semibold text-foreground"
                            key={`${breathingPhase}-title`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                          >
                            {breathingPhase === 'inspiration' 
                              ? (language === 'IT' ? 'Inspirazione' : 'Inspiration')
                              : (language === 'IT' ? 'Espirazione' : 'Expiration')
                            }
                          </motion.h3>

                          <motion.p 
                            className="text-body-md text-muted-foreground max-w-md"
                            key={`${breathingPhase}-desc`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            {breathingPhase === 'inspiration' 
                              ? (language === 'IT' ? 'Filtrazione avanzata dell\'aria in entrata' : 'Advanced filtering of incoming air')
                              : (language === 'IT' ? 'Controllo delle particelle in uscita' : 'Control of outgoing particles')
                            }
                          </motion.p>

                          {/* Particle Animation */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-accent rounded-full animate-particle-flow"
                                style={{
                                  left: `${20 + i * 10}%`,
                                  top: `${40 + Math.sin(i) * 20}%`,
                                }}
                                animate={{
                                  x: breathingPhase === 'inspiration' ? ['-100px', '100px'] : ['100px', '-100px'],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: [0.25, 0.1, 0.25, 1]
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isBreathingActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Sparkles className="w-16 h-16 text-accent mx-auto opacity-50" />
                        <p className="text-muted-foreground">
                          {language === 'IT' ? 'Clicca per avviare la demo' : 'Click to start the demo'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions - Modern Icons */}
        <section className="section-chapp">
          <div className="container-chapp">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-lg font-display font-bold text-foreground mb-4">
                {language === 'IT' ? 'Istruzioni per la Cura' : 'Care Instructions'}
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'IT' 
                  ? 'Mantieni la tua Novamask in perfette condizioni'
                  : 'Keep your Novamask in perfect condition'
                }
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {warnings.map((warning, index) => (
                <motion.div
                  key={index}
                  className={`
                    apple-glass rounded-2xl p-6 text-center group
                    ${warning.allowed 
                      ? 'hover:bg-green-500/10 hover:border-green-500/30' 
                      : 'hover:bg-red-500/10 hover:border-red-500/30'
                    }
                  `}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {warning.icon}
                  </div>
                  
                  <div className={`
                    inline-flex items-center justify-center w-8 h-8 rounded-full mb-4
                    ${warning.allowed 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                    }
                  `}>
                    {warning.allowed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </div>
                  
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {warning.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ChappFooter />
      </div>
    </>
  );
};

export default Novamask;