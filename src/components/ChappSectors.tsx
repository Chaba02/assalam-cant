
import React from 'react';
import {
  Factory,
  Car,
  Heart,
  Home,
  Zap,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ChappSectors = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Factory,
      title: 'Fashion',
      description: 'Tessuti pregiati per l\'alta moda e il prêt-à-porter, con focus su qualità e innovazione.',
    },
    {
      icon: Heart,
      title: 'Infanzia',
      description: 'Materiali sicuri e certificati per l\'abbigliamento dei più piccoli, morbidi e anallergici.',
    },
    {
      icon: Zap,
      title: 'Sport / Casual',
      description: 'Tessuti performanti per sportswear e casual wear, traspiranti e resistenti.',
    },
    {
      icon: Shield,
      title: 'Balistica',
      description: 'Materiali ad alta resistenza per applicazioni di protezione e sicurezza professionale.',
    },
    {
      icon: Home,
      title: 'Arredamento',
      description: 'Tessuti decorativi per interior design, tappezzeria e complementi d\'arredo di qualità.',
    },
    {
      icon: Car,
      title: 'Outdoor',
      description: 'Materiali tecnici resistenti agli agenti atmosferici per abbigliamento e accessori outdoor.',
    },
    {
      icon: Zap,
      title: 'Sport Attivo',
      description: 'Tessuti high-tech per performance atletiche estreme, con proprietà termoregolanti.',
    },
    {
      icon: Factory,
      title: 'Geotessile',
      description: 'Soluzioni innovative per ingegneria civile, drenaggio e stabilizzazione del terreno.',
    }
  ];

  return (
    <section id="sectors" className="section-chapp bg-chapp-dark-bg">
      <div className="container-chapp">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6">
            SETTORI DI APPLICAZIONE
          </div>

          <h2 className="text-display-lg text-chapp-title mb-8">
            {t('sectors.title.part1') || 'Tessuti per ogni'}{' '}
            <span className="bg-gradient-blue-elegant bg-clip-text text-transparent">
              {t('sectors.title.part2') || 'Industria'}
            </span>
          </h2>

          <p className="text-body-xl text-chapp-body max-w-4xl mx-auto leading-relaxed">
            {t('sectors.subtitle') || 'Soluzioni tessili innovative per i più esigenti settori industriali, dove prestazioni e affidabilità fanno la differenza.'}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-premium-dark p-6 h-56 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-lg bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 flex items-center justify-center group-hover:bg-chapp-accent-blue/20 transition-all duration-200">
                    <sector.icon className="text-chapp-accent-blue" size={20} />
                  </div>
                  <div className="absolute -bottom-1 left-0 w-4 h-[1px] bg-chapp-accent-blue group-hover:w-8 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-32">
                  <h3 className="text-heading-md text-chapp-title mb-3 group-hover:text-chapp-accent-blue transition-colors duration-200">
                    {sector.title}
                  </h3>
                  <p className="text-chapp-body leading-relaxed text-body-sm flex-1 group-hover:text-chapp-gray-300 transition-colors duration-200">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <div className="card-premium-dark max-w-4xl mx-auto p-12">
            <h3 className="text-display-md text-chapp-title mb-4">
              {t('sectors.cta.title') || 'Consulenza Specializzata'}
            </h3>
            <p className="text-body-xl text-chapp-body mb-8 max-w-2xl mx-auto">
              {t('sectors.cta.description') || 'I nostri esperti analizzano le tue esigenze specifiche per sviluppare soluzioni tessili innovative e personalizzate.'}
            </p>
            
            <button className="btn-chapp-accent hover-glow-blue">
              {t('sectors.cta.button') || 'Richiedi Consulenza'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChappSectors;
