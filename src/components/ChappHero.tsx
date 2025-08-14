
import React from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ChappHero = () => {
  const { t } = useLanguage();

  const clientLogos = [
    { name: 'Burberry', src: '/burberry.png' },
    { name: 'Calvin Klein', src: '/ck.png' },
    { name: 'Dior', src: '/dior.png' },
    { name: 'Fendi', src: '/fendi.png' },
    { name: 'Gucci', src: '/gucci.png' },
    { name: 'Loro Piana', src: '/loro_piana.png' },
    { name: 'Zegna', src: '/zegna.png' },
  ];

  // Duplica i loghi per un effetto infinito più fluido
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-chapp bg-chapp-dark-bg relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main ambient glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-60"></div>
        
        {/* Side accents */}
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-full blur-2xl animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-l from-violet-500/15 to-indigo-500/10 rounded-full blur-2xl animate-float-delayed opacity-35"></div>
        
        {/* Subtle moving particles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-chapp-accent-blue/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-chapp relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-6 py-3 rounded-full text-body-sm font-semibold backdrop-blur-sm border border-chapp-accent-blue/30">
              <div className="w-2 h-2 bg-chapp-accent-blue rounded-full animate-pulse"></div>
              {t('hero.badge')}
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-display-2xl lg:text-display-3xl text-chapp-title mb-8 leading-tight">
              {t('hero.title.part1')}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-blue-elegant bg-clip-text text-transparent font-display">
                  {t('hero.title.highlight')}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-blue-elegant opacity-30 blur-sm"></div>
              </span>
              <br />
              {t('hero.title.part2')}
            </h1>

            <p className="text-body-xl text-chapp-body max-w-4xl mx-auto leading-relaxed mb-12">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button 
                onClick={handleScrollToAbout}
                className="btn-chapp-accent hover-glow-blue w-full sm:w-auto"
              >
                {t('hero.cta.primary')}
              </button>

              <button className="btn-chapp-secondary group w-full sm:w-auto">
                <Play size={18} className="group-hover:scale-110 transition-transform duration-200" />
                {t('hero.cta.secondary')}
              </button>
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-12">
              <p className="text-body-md text-chapp-gray-400 font-medium">
                {t('hero.clients.label')}
              </p>
            </div>

            {/* Improved Infinite Scrolling Logos */}
            <div className="relative overflow-hidden">
              {/* Gradient masks per un effetto fade */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-chapp-dark-bg via-chapp-dark-bg/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-chapp-dark-bg via-chapp-dark-bg/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-scroll-smooth">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-12 max-w-28 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-chapp-gray-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-chapp-accent-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ChappHero;
