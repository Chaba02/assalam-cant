
import React from 'react';
import { 
  Droplets, 
  Layers3, 
  Shield,
  ArrowLeft,
  CheckCircle,
  Zap,
  Award,
  Target,
  Recycle,
  Settings,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ChappNavbar from '../components/ChappNavbar';
import ChappFooter from '../components/ChappFooter';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'resinatura',
      icon: Droplets,
      title: t('services.resinatura.title'),
      description: t('services.resinatura.description'),
      longDescription: t('services.resinatura.longDescription'),
      features: [
        t('services.resinatura.features.0'),
        t('services.resinatura.features.1'),
        t('services.resinatura.features.2'),
        t('services.resinatura.features.3')
      ],
      benefits: [
        t('services.resinatura.benefits.0'),
        t('services.resinatura.benefits.1'),
        t('services.resinatura.benefits.2')
      ],
      gradient: 'from-chapp-accent-blue to-chapp-accent-blue-light',
      bgGradient: 'from-chapp-accent-blue/10 to-chapp-accent-blue-light/5'
    },
    {
      id: 'accoppiatura',
      icon: Layers3,
      title: t('services.accoppiatura.title'),
      description: t('services.accoppiatura.description'),
      longDescription: t('services.accoppiatura.longDescription'),
      features: [
        t('services.accoppiatura.features.0'),
        t('services.accoppiatura.features.1'),
        t('services.accoppiatura.features.2'),
        t('services.accoppiatura.features.3')
      ],
      benefits: [
        t('services.accoppiatura.benefits.0'),
        t('services.accoppiatura.benefits.1'),
        t('services.accoppiatura.benefits.2')
      ],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/5'
    },
    {
      id: 'membrane',
      icon: Shield,
      title: t('services.membrane.title'),
      description: t('services.membrane.description'),
      longDescription: t('services.membrane.longDescription'),
      features: [
        t('services.membrane.features.0'),
        t('services.membrane.features.1'),
        t('services.membrane.features.2'),
        t('services.membrane.features.3')
      ],
      benefits: [
        t('services.membrane.benefits.0'),
        t('services.membrane.benefits.1'),
        t('services.membrane.benefits.2')
      ],
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/10 to-emerald-600/5'
    }
  ];

  const certifications = [
    {
      id: 'grs',
      icon: Recycle,
      title: t('certifications.grs.title'),
      subtitle: t('certifications.grs.subtitle'),
      certifier: t('certifications.grs.certifier'),
      description: t('certifications.grs.description'),
      note: t('certifications.grs.note'),
      gradient: 'from-emerald-400 to-green-500',
      bgGradient: 'from-emerald-500/15 to-green-600/10',
      iconBg: 'from-emerald-500 to-green-600'
    },
    {
      id: 'iso',
      icon: Settings,
      title: t('certifications.iso.title'),
      subtitle: t('certifications.iso.subtitle'),
      certifier: t('certifications.iso.certifier'),
      description: t('certifications.iso.description'),
      note: t('certifications.iso.note'),
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-500/15 to-indigo-600/10',
      iconBg: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'swiss',
      icon: Plus,
      title: t('certifications.swiss.title'),
      subtitle: t('certifications.swiss.subtitle'),
      certifier: t('certifications.swiss.certifier'),
      description: t('certifications.swiss.description'),
      note: t('certifications.swiss.note'),
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-500/15 to-rose-600/10',
      iconBg: 'from-red-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-chapp-dark-bg">
      <ChappNavbar />
      
      {/* Hero Section */}
      <section className="section-chapp pt-32 bg-chapp-dark-bg relative overflow-hidden">
        <div className="container-chapp relative z-10">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            {t('services.backHome')}
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6">
              <Shield size={16} />
              {t('services.badge')}
            </div>
            
            <h1 className="text-display-xl text-chapp-title mb-6 leading-tight font-light">
              {t('services.title.part1')}{' '}
              <span className="bg-gradient-blue-elegant bg-clip-text text-transparent font-medium">
                {t('services.title.part2')}
              </span>
            </h1>
            
            <p className="text-body-xl text-chapp-body max-w-3xl mx-auto leading-relaxed mb-16">
              {t('services.subtitle')}
            </p>

            {/* Enhanced Professional Certification Cards - Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="group">
                  <div className="relative h-72 sm:h-80 overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02]">
                    {/* Glassmorphism background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-40 group-hover:opacity-60 transition-all duration-700`}></div>
                    
                    {/* Animated border glow */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                      {/* Icon */}
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${cert.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.3)]`}>
                        <cert.icon className="text-white" size={24} />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-opacity-90 transition-colors duration-500 text-center">
                        {cert.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm text-chapp-gray-300 mb-3 sm:mb-4 font-medium text-center">
                        {cert.subtitle}
                      </p>
                      
                      {/* Certifier */}
                      <div className="mb-3 sm:mb-4 text-center">
                        <p className="text-xs text-chapp-accent-blue font-semibold mb-1">
                          {t('certifications.certifiedBy')}
                        </p>
                        <p className="text-xs sm:text-sm text-white font-medium">
                          {cert.certifier}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-chapp-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow text-center">
                        {cert.description}
                      </p>
                      
                      {/* Note */}
                      <div className="mt-auto">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2 sm:mb-3"></div>
                        <p className="text-xs text-chapp-gray-400 italic text-center">
                          {cert.note}
                        </p>
                      </div>
                      
                      {/* Subtle inner glow */}
                      <div className={`absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:opacity-60 transition-all duration-700 ${cert.gradient.includes('emerald') ? 'text-emerald-400' : cert.gradient.includes('blue') ? 'text-blue-400' : 'text-red-400'}`}></div>
                    </div>
                    
                    {/* Glass reflection effect */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive */}
      <section className="section-chapp bg-chapp-dark-bg">
        <div className="container-chapp">
          <div className="space-y-20 sm:space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className="relative group">
                {/* Elegant Enhanced Separator */}
                {index > 0 && (
                  <div className="absolute -top-10 sm:-top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-2 h-2 bg-chapp-accent-blue rounded-full animate-pulse mb-4"></div>
                    <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-chapp-accent-blue via-chapp-accent-blue/50 to-transparent"></div>
                    <div className="w-6 sm:w-8 h-6 sm:h-8 border border-chapp-accent-blue/30 rounded-full flex items-center justify-center mt-4 bg-chapp-dark-bg">
                      <div className="w-1.5 h-1.5 bg-chapp-accent-blue rounded-full animate-glow"></div>
                    </div>
                    <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-chapp-accent-blue/50 to-chapp-accent-blue mt-4"></div>
                    <div className="w-2 h-2 bg-chapp-accent-blue rounded-full animate-pulse mt-4"></div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6 sm:space-y-8`}>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl glass-dark border border-chapp-accent-blue/20 flex items-center justify-center group-hover:border-chapp-accent-blue/40 transition-all duration-500 mx-auto lg:mx-0">
                        <service.icon className="text-chapp-accent-blue group-hover:scale-110 transition-transform duration-300" size={28} />
                      </div>
                      <h2 className="text-display-md sm:text-display-lg text-chapp-title font-light tracking-tight text-center lg:text-left">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-body-lg sm:text-body-xl text-chapp-body leading-relaxed text-center lg:text-left">
                      {service.longDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-heading-md sm:text-heading-lg text-chapp-white font-medium text-center lg:text-left">{t('services.featuresTitle')}</h3>
                      <div className="space-y-3 sm:space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 sm:gap-4 group/item">
                            <div className="w-2 h-2 bg-chapp-accent-blue rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="text-chapp-gray-300 text-body-md sm:text-body-lg leading-relaxed group-hover/item:text-chapp-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-heading-md sm:text-heading-lg text-chapp-white font-medium text-center lg:text-left">{t('services.benefitsTitle')}</h3>
                      <div className="space-y-3 sm:space-y-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3 sm:gap-4 group/benefit">
                            <CheckCircle size={20} className="text-chapp-accent-blue/60 flex-shrink-0 mt-0.5 group-hover/benefit:text-chapp-accent-blue group-hover/benefit:scale-110 transition-all duration-300" />
                            <span className="text-chapp-gray-300 text-body-md sm:text-body-lg leading-relaxed group-hover/benefit:text-chapp-white transition-colors duration-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 text-center lg:text-left">
                      <a 
                        href="/#contact" 
                        className="btn-chapp-primary inline-flex items-center gap-2 hover-glow-blue"
                      >
                        {t('services.requestQuote')}
                        <ArrowLeft size={16} className="rotate-180" />
                      </a>
                    </div>
                  </div>

                  {/* Enhanced Animated Visual Element - Responsive */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                    <div className="relative group/visual">
                      <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-chapp-white/5 bg-chapp-white/[0.02] flex items-center justify-center backdrop-blur-sm group-hover/visual:border-chapp-white/15 transition-all duration-1000 animate-pulse">
                        <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border border-chapp-white/10 bg-chapp-white/[0.03] flex items-center justify-center group-hover/visual:border-chapp-accent-blue/40 group-hover/visual:rotate-45 transition-all duration-1000">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border border-chapp-accent-blue/20 bg-chapp-accent-blue/5 flex items-center justify-center group-hover/visual:bg-chapp-accent-blue/15 group-hover/visual:scale-110 group-hover/visual:rotate-90 transition-all duration-700">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-chapp-accent-blue/10 flex items-center justify-center group-hover/visual:bg-chapp-accent-blue/20 group-hover/visual:scale-125 transition-all duration-500">
                              <service.icon className="text-chapp-accent-blue group-hover/visual:scale-150 group-hover/visual:rotate-12 group-hover/visual:text-blue-300 transition-all duration-500" size={48} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Enhanced Floating particles - Responsive */}
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-chapp-accent-blue rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-2/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-chapp-accent-blue rounded-full animate-bounce opacity-70" style={{ animationDelay: '2s' }}></div>
                      <div className="absolute top-1/3 left-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1/4 right-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-chapp-accent-blue rounded-full animate-bounce opacity-90" style={{ animationDelay: '1.5s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-chapp bg-chapp-dark-bg">
        <div className="container-chapp">
          <div className="card-premium-dark rounded-4xl p-8 sm:p-12 lg:p-16 text-center apple-glow hover:bg-white/5 transition-all duration-500">
            <h2 className="text-display-md sm:text-display-lg text-chapp-title mb-4 sm:mb-6 font-light">
              {t('services.cta.title')}
            </h2>
            <p className="text-body-lg sm:text-body-xl text-chapp-body mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="/#contact" className="btn-chapp-primary hover-glow-blue">
                {t('services.cta.primary')}
              </a>
              <a href="/#contact" className="btn-chapp-secondary">
                {t('services.cta.secondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ChappFooter />
    </div>
  );
};

export default Services;
