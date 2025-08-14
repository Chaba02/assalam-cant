import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
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

  return (
    <section
      className="relative min-h-screen text-white overflow-hidden font-sans"
      style={{ backgroundColor: 'hsl(0 0% 1%)' }}
    >
      {/* Premium animated lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="glowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="glowRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f87171" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="premiumPlatinum" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e5e4e2" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d3d3d3" />
          </linearGradient>
        </defs>

        <path
          d="M0,250 Q300,150 600,250 T1200,250"
          stroke="url(#glowBlue)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
          strokeDasharray="2000"
          strokeDashoffset="2000"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="3s"
            values="2000;0"
            fill="freeze"
          />
          <animate
            attributeName="d"
            dur="8s"
            begin="3s"
            repeatCount="indefinite"
            values="
              M0,250 Q300,150 600,250 T1200,250;
              M0,280 Q300,180 600,280 T1200,280;
              M0,220 Q300,120 600,220 T1200,220;
              M0,250 Q300,150 600,250 T1200,250
            "
          />
        </path>

        <path
          d="M0,450 Q300,550 600,450 T1200,450"
          stroke="url(#glowRed)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
          strokeDasharray="2200"
          strokeDashoffset="2200"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="3.5s"
            begin="0.5s"
            values="2200;0"
            fill="freeze"
          />
          <animate
            attributeName="d"
            dur="10s"
            begin="4s"
            repeatCount="indefinite"
            values="
              M0,450 Q300,550 600,450 T1200,450;
              M0,420 Q300,520 600,420 T1200,420;
              M0,480 Q300,580 600,480 T1200,480;
              M0,450 Q300,550 600,450 T1200,450
            "
          />
        </path>

        <path
          d="M0,350 Q400,250 800,350 Q1000,400 1200,350"
          stroke="url(#premiumPlatinum)"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
          strokeDasharray="1800"
          strokeDashoffset="1800"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="4s"
            begin="1s"
            values="1800;0"
            fill="freeze"
          />
          <animate
            attributeName="d"
            dur="12s"
            begin="5s"
            repeatCount="indefinite"
            values="
              M0,350 Q400,250 800,350 Q1000,400 1200,350;
              M0,370 Q400,270 800,370 Q1000,420 1200,370;
              M0,330 Q400,230 800,330 Q1000,380 1200,330;
              M0,350 Q400,250 800,350 Q1000,400 1200,350
            "
          />
        </path>

        <path
          d="M0,600 Q300,500 600,600 Q900,700 1200,600"
          stroke="url(#glowRed)"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
          strokeDasharray="1400"
          strokeDashoffset="1400"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="3.8s"
            begin="2s"
            values="1400;0"
            fill="freeze"
          />
          <animate
            attributeName="d"
            dur="18s"
            begin="5.8s"
            repeatCount="indefinite"
            values="
              M0,600 Q300,500 600,600 Q900,700 1200,600;
              M0,620 Q300,520 600,620 Q900,720 1200,620;
              M0,580 Q300,480 600,580 Q900,680 1200,580;
              M0,600 Q300,500 600,600 Q900,700 1200,600
            "
          />
        </path>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="inline-flex items-center gap-2 glass-dark text-chapp-gray-300 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in apple-glow">
          {t('hero.badge')}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-8 animate-fade-in-up leading-tight tracking-tight">
          {t('hero.title.part1')}{' '}
          <span className="text-glow-cyan-magenta font-light">{t('hero.title.highlight')}</span>
          <br />
          <span className="font-light text-chapp-gray-200">{t('hero.title.part2')}</span>
        </h1>

        <p
          className="max-w-2xl text-lg sm:text-xl text-chapp-gray-400 mb-10 leading-relaxed font-light animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {t('hero.subtitle')}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-2xl text-body-lg hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-chapp-dark-bg shadow-lg group">
            {t('hero.cta.primary')}
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <button
            className="inline-flex items-center justify-center px-8 py-4
    bg-white/10 backdrop-blur-md border border-white/30 text-white
    font-medium rounded-2xl text-body-lg
    hover:bg-white/20 hover:border-white/50
    active:bg-white/25
    transition-all duration-300
    hover:scale-[1.02]
    hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
    focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-chapp-dark-bg
    shadow-md
    group"
          >
            <Play
              size={18}
              className="mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            {t('hero.cta.secondary')}
          </button>

        </div>
      </div>

      {/* Scroll section */}
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
    </section>
  );
};

export default ChappHero;
