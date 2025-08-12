
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
    <section id="sectors" className="section-chapp bg-gradient-to-b from-chapp-dark-bg via-gray-900/95 to-chapp-dark-bg relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-transparent"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl"></div>

      <div className="container-chapp relative z-10">
        {/* Header con badge omogeneo */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span className="text-white/80">
              {t('sectors.badge') || 'SETTORI DI APPLICAZIONE'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            {t('sectors.title.part1') || 'Tessuti per ogni'}{' '}
            <span className="block mt-2 font-extralight text-white/90">
              {t('sectors.title.part2') || 'Industria'}
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
            {t('sectors.subtitle') || 'Soluzioni tessili innovative per i più esigenti settori industriali, dove prestazioni e affidabilità fanno la differenza.'}
          </p>
        </div>

        {/* Grid Settori - 4 per riga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-all duration-200">
                    <sector.icon className="text-white/70 group-hover:text-white/90 transition-colors duration-200" size={20} />
                  </div>
                  <div className="absolute -bottom-1 left-0 w-4 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-white/95 transition-colors duration-200">
                    {sector.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light text-sm group-hover:text-white/75 transition-colors duration-200 line-clamp-4">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Semplificata */}
        <div className="text-center animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-white mb-4">
                {t('sectors.cta.title') || 'Consulenza Specializzata'}
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                {t('sectors.cta.description') || 'I nostri esperti analizzano le tue esigenze specifiche per sviluppare soluzioni tessili innovative e personalizzate.'}
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5">
                {t('sectors.cta.button') || 'Richiedi Consulenza'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChappSectors;
