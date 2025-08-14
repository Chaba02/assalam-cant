
import React from 'react';
import { Users, Award, Sparkles, Factory, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ChappAbout = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Layers,
      titleKey: "about.value1.title",
      descriptionKey: "about.value1.desc"
    },
    {
      icon: Factory,
      titleKey: "about.value2.title",
      descriptionKey: "about.value2.desc"
    },
    {
      icon: Award,
      titleKey: "about.value3.title",
      descriptionKey: "about.value3.desc"
    },
    {
      icon: Users,
      titleKey: "about.value4.title",
      descriptionKey: "about.value4.desc"
    }
  ];

  return (
    <section id="about" className="section-chapp bg-chapp-dark-bg px-6 sm:px-8 lg:px-20">
      <div className="container-chapp">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Testo Storia e Valori */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-chapp-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-body-md font-medium text-chapp-gray-300 mb-8 shadow-chapp border border-chapp-white/20">
              <Sparkles size={16} className="text-chapp-accent-blue" />
              {t('about.badge')}
            </div>

            <h2 className="text-display-lg text-chapp-title mb-8 leading-tight">
              {t('about.title1')} <br />
              <span className="bg-gradient-blue-elegant bg-clip-text text-transparent">
                {t('about.title2')}
              </span>{' '}
              {t('about.title3')}
            </h2>

            <div className="space-y-6 mb-12 text-body-lg text-chapp-body leading-relaxed">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
              <p>
                {t('about.description3')}
              </p>
            </div>

            {/* Valori */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card-glass-dark p-6 hover-lift-dark group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-blue-elegant rounded-2xl flex items-center justify-center flex-shrink-0 shadow-chapp-md group-hover:shadow-glow-blue transition-all duration-300">
                      <value.icon className="text-chapp-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-heading-md text-chapp-title mb-2 font-semibold">
                        {t(value.titleKey)}
                      </h4>
                      <p className="text-body-md text-chapp-body leading-relaxed">
                        {t(value.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="animate-on-scroll relative">
            <div className="relative">
              {/* Visual principale */}
              <div className="card-premium-dark p-12 text-center relative overflow-hidden min-h-96 flex flex-col items-center justify-center">
                {/* Pattern Sfondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-chapp-accent-blue/5 via-transparent to-chapp-accent-blue-light/5"></div>

                {/* Contenuto */}
                <div className="relative z-10 space-y-6">
                  <div className="w-20 h-20 bg-gradient-blue-elegant rounded-3xl flex items-center justify-center shadow-chapp-lg mx-auto">
                    <Factory className="text-chapp-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-heading-xl text-chapp-title font-semibold mb-3">
                      {t('about.team.title')}
                    </h3>
                    <p className="text-body-lg text-chapp-body mb-6">
                      {t('about.team.subtitle')}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-chapp-white/10 px-4 py-2 rounded-full text-body-sm font-medium text-chapp-gray-300 border border-chapp-white/20">
                      <Award size={14} />
                      {t('about.team.badge')}
                    </div>
                  </div>
                </div>

                {/* Elementi flottanti */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-chapp-accent-blue/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-chapp-accent-blue-light/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Statistiche */}
              <div className="absolute -bottom-6 -left-6 card-glass-dark p-6 shadow-chapp-lg">
                <div className="text-center">
                  <div className="text-display-md text-chapp-title font-semibold mb-1">50+</div>
                  <div className="text-body-sm text-chapp-body">{t('about.stat1')}</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 card-glass-dark p-6 shadow-chapp-lg">
                <div className="text-center">
                  <div className="text-display-md text-chapp-title font-semibold mb-1">200+</div>
                  <div className="text-body-sm text-chapp-body">{t('about.stat2')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChappAbout;
