import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ChappHero = () => {
  const { t } = useLanguage();

  // Placeholder images
  const clientLogos = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Premium animated lines that draw on load */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#f4e4bc" />
            <stop offset="100%" stopColor="#c9b037" />
          </linearGradient>
          <linearGradient id="premiumSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c0c0c0" />
            <stop offset="50%" stopColor="#e8e8e8" />
            <stop offset="100%" stopColor="#a8a8a8" />
          </linearGradient>
          <linearGradient id="premiumPlatinum" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e5e4e2" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d3d3d3" />
          </linearGradient>
        </defs>

        {/* Prima linea premium - si disegna e poi ondeggia */}
        <path
          d="M0,250 Q300,150 600,250 T1200,250"
          stroke="url(#premiumGold)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
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

        {/* Seconda linea premium */}
        <path
          d="M0,450 Q300,550 600,450 T1200,450"
          stroke="url(#premiumSilver)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
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

        {/* Terza linea premium */}
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



        {/* Quinta linea elegante */}
        <path
          d="M0,600 Q300,500 600,600 Q900,700 1200,600"
          stroke="url(#premiumSilver)"
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

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-dark text-chapp-gray-300 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in apple-glow">
          {t('hero.badge') || 'Eccellenza Tessile Italiana'}
        </div>

        {/* Main heading with original glow effect - testo più piccolo */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-8 animate-fade-in-up leading-tight tracking-tight">
          Innoviamo il{' '}
          <span className="text-glow-cyan-magenta font-light">
            Tessuto
          </span>
          <br />
          <span className="font-light text-chapp-gray-200">
            Filo Dopo Filo
          </span>
        </h1>

        {/* Subtitle - ridotta */}
        <p
          className="max-w-2xl text-lg sm:text-xl text-chapp-gray-400 mb-10 leading-relaxed font-light animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Materiali pregiati, cura artigianale e tecnologie d'avanguardia per tessuti che ispirano il futuro.
        </p>

        {/* CTA Buttons - tornati alle dimensioni originali */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button className="btn-chapp-primary group">
            Scopri di più
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <button className="btn-chapp-secondary group">
            <Play
              size={18}
              className="mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            Guarda il video
          </button>
        </div>
      </div>

      {/* Infinite Scroll Section - Moved below Hero */}
      <section className="py-16 bg-black">
        <div className="container-chapp">
          <div className="text-center mb-12">
            <h3 className="text-heading-lg text-chapp-gray-400 font-light mb-8">
              Aziende che si Affidano a Noi
            </h3>
          </div>
          <div className="relative overflow-hidden w-full">
            <div className="flex space-x-8 animate-scroll-x will-change-transform">
              {[...Array(18)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-16 w-32 bg-chapp-white/5 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 border border-chapp-white/10"
                >
                  <img
                    src="/placeholder.svg"
                    alt={`Cliente ${index + 1}`}
                    className="max-h-10 object-contain filter invert opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChappHero;