
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ChappSectors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectors = [
    { name: 'Fashion & Luxury', logo: '/gucci.png', description: 'Brand di lusso e alta moda' },
    { name: 'Premium Fashion', logo: '/dior.png', description: 'Moda premium e couture' },
    { name: 'British Heritage', logo: '/burberry.png', description: 'Tradizione britannica' },
    { name: 'Italian Craftsmanship', logo: '/fendi.png', description: 'Artigianalità italiana' },
    { name: 'Fine Textiles', logo: '/loro_piana.png', description: 'Tessuti pregiati' },
    { name: 'Contemporary Style', logo: '/ck.png', description: 'Stile contemporaneo' },
    { name: 'Luxury Menswear', logo: '/zegna.png', description: 'Abbigliamento maschile di lusso' },
  ];

  // Duplicate sectors for seamless infinite scroll
  const duplicatedSectors = [...sectors, ...sectors, ...sectors];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const sectorWidth = scrollContainer.scrollWidth / 3; // Since we have 3 copies
    let scrollPosition = sectorWidth; // Start from the middle copy
    scrollContainer.scrollLeft = scrollPosition;
    let isUserScrolling = false;

    const handleUserScroll = () => {
      isUserScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 2000);
    };

    let scrollTimeout: NodeJS.Timeout;

    const scroll = () => {
      if (isUserScrolling) return;
      
      scrollPosition += 0.3; // Reduced speed for smoother effect
      
      // Seamless reset when reaching the end of second copy
      if (scrollPosition >= sectorWidth * 2) {
        scrollContainer.scrollLeft = sectorWidth;
        scrollPosition = sectorWidth + 0.3;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    scrollContainer.addEventListener('scroll', handleUserScroll);
    const intervalId = setInterval(scroll, 16); // ~60fps for smoother animation

    return () => {
      clearInterval(intervalId);
      clearTimeout(scrollTimeout);
      scrollContainer.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  return (
    <section id="sectors" className="section-chapp bg-chapp-dark-bg">
      <div className="container-chapp">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6">
            I Nostri Settori
          </div>
          <h2 className="text-display-lg text-chapp-title mb-6">
            Partner di Fiducia per{' '}
            <span className="bg-gradient-blue-elegant bg-clip-text text-transparent">
              Brand di Prestigio
            </span>
          </h2>
          <p className="text-body-xl text-chapp-body max-w-3xl mx-auto">
            Collaboriamo con i più prestigiosi brand internazionali, offrendo soluzioni tessili innovative 
            che rispettano i più alti standard di qualità e sostenibilità.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative mb-16">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedSectors.map((sector, index) => (
              <div
                key={`${sector.name}-${index}`}
                className="flex-shrink-0 w-80 glass-dark rounded-2xl p-8 apple-glow hover:border-chapp-accent-blue/30 transition-all duration-500 group"
              >
                <div className="aspect-video bg-chapp-white/5 rounded-xl mb-6 flex items-center justify-center border border-chapp-white/10 group-hover:bg-chapp-white/10 transition-all duration-300">
                  <img 
                    src={sector.logo} 
                    alt={sector.name}
                    className="max-w-24 max-h-12 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <h3 className="text-heading-lg text-chapp-white mb-3 group-hover:text-chapp-accent-blue transition-colors duration-300">
                  {sector.name}
                </h3>
                <p className="text-chapp-gray-300 text-body-md leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-chapp-dark-bg to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-chapp-dark-bg to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-dark rounded-2xl p-8 text-center apple-glow">
          <h3 className="text-heading-xl text-chapp-title mb-4">
            Vuoi Collaborare con Noi?
          </h3>
          <p className="text-body-lg text-chapp-body mb-6 max-w-xl mx-auto">
            Scopri come possiamo supportare il tuo brand con soluzioni tessili innovative e sostenibili.
          </p>
          <a 
            href="#contact"
            className="btn-chapp-primary inline-flex items-center gap-2"
          >
            Richiedi Consulenza
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChappSectors;
