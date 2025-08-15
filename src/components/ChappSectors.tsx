
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
      titleKey: 'sectors.fashion.title',
      descriptionKey: 'sectors.fashion.description',
    },
    {
      icon: Heart,
      titleKey: 'sectors.children.title',
      descriptionKey: 'sectors.children.description',
    },
    {
      icon: Zap,
      titleKey: 'sectors.sport.title',
      descriptionKey: 'sectors.sport.description',
    },
    {
      icon: Shield,
      titleKey: 'sectors.ballistic.title',
      descriptionKey: 'sectors.ballistic.description',
    },
    {
      icon: Home,
      titleKey: 'sectors.furnishing.title',
      descriptionKey: 'sectors.furnishing.description',
    },
    {
      icon: Car,
      titleKey: 'sectors.outdoor.title',
      descriptionKey: 'sectors.outdoor.description',
    },
    {
      icon: Zap,
      titleKey: 'sectors.activesport.title',
      descriptionKey: 'sectors.activesport.description',
    },
    {
      icon: Factory,
      titleKey: 'sectors.geotextile.title',
      descriptionKey: 'sectors.geotextile.description',
    }
  ];

  return (
    <section id="sectors" className="section-chapp bg-chapp-dark-bg relative">
      {/* Soft ambient light effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle side accents */}
        <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 w-60 h-60 bg-indigo-500/15 rounded-full blur-2xl animate-pulse opacity-30" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-cyan-500/12 rounded-full blur-3xl animate-pulse opacity-35" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
      </div>

      <div className="container-chapp relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6">
            {t('sectors.badge')}
          </div>

          <h2 className="text-display-lg text-chapp-title mb-8">
            {t('sectors.title.part1')}{' '}
            <span className="bg-gradient-blue-elegant bg-clip-text text-transparent">
              {t('sectors.title.part2')}
            </span>
          </h2>

          <p className="text-body-xl text-chapp-body max-w-4xl mx-auto leading-relaxed">
            {t('sectors.subtitle')}
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
                    {t(sector.titleKey)}
                  </h3>
                  <p className="text-chapp-body leading-relaxed text-body-sm flex-1 group-hover:text-chapp-gray-300 transition-colors duration-200">
                    {t(sector.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default ChappSectors;
