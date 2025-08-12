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
      gradient: 'from-slate-600 to-slate-800',
      accentColor: 'text-slate-300'
    },
    {
      icon: Heart,
      title: 'Infanzia',
      description: 'Materiali sicuri e certificati per l\'abbigliamento dei più piccoli, morbidi e anallergici.',
      gradient: 'from-zinc-600 to-zinc-800',
      accentColor: 'text-zinc-300'
    },
    {
      icon: Zap,
      title: 'Sport / Casual',
      description: 'Tessuti performanti per sportswear e casual wear, traspiranti e resistenti.',
      gradient: 'from-stone-600 to-stone-800',
      accentColor: 'text-stone-300'
    },
    {
      icon: Shield,
      title: 'Balistica',
      description: 'Materiali ad alta resistenza per applicazioni di protezione e sicurezza professionale.',
      gradient: 'from-neutral-600 to-neutral-800',
      accentColor: 'text-neutral-300'
    },
    {
      icon: Home,
      title: 'Arredamento',
      description: 'Tessuti decorativi per interior design, tappezzeria e complementi d\'arredo di qualità.',
      gradient: 'from-gray-600 to-gray-800',
      accentColor: 'text-gray-300'
    },
    {
      icon: Car,
      title: 'Outdoor',
      description: 'Materiali tecnici resistenti agli agenti atmosferici per abbigliamento e accessori outdoor.',
      gradient: 'from-slate-700 to-slate-900',
      accentColor: 'text-slate-200'
    },
    {
      icon: Zap,
      title: 'Sport Attivo',
      description: 'Tessuti high-tech per performance atletiche estreme, con proprietà termoregolanti.',
      gradient: 'from-zinc-700 to-zinc-900',
      accentColor: 'text-zinc-200'
    },
    {
      icon: Factory,
      title: 'Geotessile',
      description: 'Soluzioni innovative per ingegneria civile, drenaggio e stabilizzazione del terreno.',
      gradient: 'from-stone-700 to-stone-900',
      accentColor: 'text-stone-200'
    }
  ];

  return (
    <section id="sectors" className="section-chapp bg-black relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container-chapp relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-24 animate-on-scroll">
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/[0.08] border border-white/10 px-8 py-4 rounded-full text-sm font-medium mb-12 hover:bg-white/[0.12] transition-all duration-500">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span className="text-white/80 tracking-wide">
              {t('sectors.badge') || 'SETTORI DI APPLICAZIONE'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 tracking-tight leading-none">
            {t('sectors.title.part1') || 'Tessuti per ogni'}{' '}
            <span className="block mt-2 font-extralight text-white/90">
              {t('sectors.title.part2') || 'Industria'}
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
            {t('sectors.subtitle') || 'Soluzioni tessili innovative per i più esigenti settori industriali, dove prestazioni e affidabilità fanno la differenza.'}
          </p>
        </div>

        {/* Compact Sectors Grid - 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Compact Card */}
              <div className="relative h-56 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 transform-gpu cursor-pointer">

                {/* Compact Icon Container */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-all duration-200">
                    <sector.icon className="text-white/70 group-hover:text-white/90 transition-colors duration-200" size={20} />
                  </div>

                  {/* Clean accent line */}
                  <div className="absolute -bottom-1 left-0 w-4 h-[1px] bg-white/30 group-hover:w-8 transition-all duration-300"></div>
                </div>

                {/* Compact Content Area */}
                <div className="relative z-10 flex flex-col h-32">
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-white/95 transition-colors duration-200">
                    {sector.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed font-light text-xs flex-1 group-hover:text-white/75 transition-colors duration-200 line-clamp-4">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA Section */}
        <div className="text-center mt-32 animate-on-scroll">
          <div className="relative max-w-5xl mx-auto">
            {/* Professional Container */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl overflow-hidden">

              {/* Header Section */}
              <div className="border-b border-white/[0.06] px-12 py-8">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {t('sectors.cta.title') || 'Consulenza Specializzata'}
                    </h3>
                    <p className="text-white/50 text-sm">
                      Soluzioni tessili su misura per il tuo settore
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400/60 rounded-full"></div>
                    <span className="text-white/40 text-xs font-mono">DISPONIBILE</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-12 py-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                    <p className="text-white/70 leading-relaxed mb-6">
                      {t('sectors.cta.description') || 'I nostri esperti analizzano le tue esigenze specifiche per sviluppare soluzioni tessili innovative e personalizzate.'}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                        <span className="text-white/60 text-sm">Analisi tecnica approfondita</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                        <span className="text-white/60 text-sm">Prototipazione rapida</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                        <span className="text-white/60 text-sm">Supporto post-implementazione</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center md:text-right">
                    <button className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 transform-gpu">
                      <span>{t('sectors.cta.button') || 'Richiedi Consulenza'}</span>
                      <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/15 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black/60 rounded-full"></div>
                      </div>
                    </button>

                    <p className="text-white/40 text-xs mt-4">
                      Risposta entro 24 ore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChappSectors;