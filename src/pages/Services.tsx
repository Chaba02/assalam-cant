import React from 'react';
import { 
  Droplets, 
  Layers3, 
  Shield,
  ArrowLeft,
  CheckCircle,
  Zap,
  Award,
  Target
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

  const stats = [
    { icon: Award, value: '25+', label: t('services.stats.experience') },
    { icon: Target, value: '500+', label: t('services.stats.projects') },
    { icon: Zap, value: '99.8%', label: t('services.stats.quality') }
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

            {/* Enhanced Professional Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="relative bg-gradient-to-br from-chapp-dark-card/95 via-chapp-gray-900/90 to-chapp-dark-card/95 backdrop-blur-xl rounded-3xl p-10 border border-chapp-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_10px_30px_rgba(59,130,246,0.3)] group-hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)]">
                        <stat.icon className="text-white" size={32} />
                      </div>
                      <div className="text-4xl text-white font-bold mb-4 group-hover:text-blue-300 transition-colors duration-500">{stat.value}</div>
                      <div className="text-chapp-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-500 leading-relaxed">{stat.label}</div>
                    </div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent group-hover:via-blue-400/60 transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-chapp bg-chapp-dark-bg">
        <div className="container-chapp">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className="relative group">
                {/* Elegant Enhanced Separator */}
                {index > 0 && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-2 h-2 bg-chapp-accent-blue rounded-full animate-pulse mb-4"></div>
                    <div className="w-px h-12 bg-gradient-to-b from-chapp-accent-blue via-chapp-accent-blue/50 to-transparent"></div>
                    <div className="w-8 h-8 border border-chapp-accent-blue/30 rounded-full flex items-center justify-center mt-4 bg-chapp-dark-bg">
                      <div className="w-1.5 h-1.5 bg-chapp-accent-blue rounded-full animate-glow"></div>
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-chapp-accent-blue/50 to-chapp-accent-blue mt-4"></div>
                    <div className="w-2 h-2 bg-chapp-accent-blue rounded-full animate-pulse mt-4"></div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-8`}>
                    <div className="space-y-6">
                      <div className="w-20 h-20 rounded-3xl glass-dark border border-chapp-accent-blue/20 flex items-center justify-center group-hover:border-chapp-accent-blue/40 transition-all duration-500">
                        <service.icon className="text-chapp-accent-blue group-hover:scale-110 transition-transform duration-300" size={36} />
                      </div>
                      <h2 className="text-display-lg text-chapp-title font-light tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-body-xl text-chapp-body leading-relaxed">
                      {service.longDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-6">
                      <h3 className="text-heading-lg text-chapp-white font-medium">{t('services.featuresTitle')}</h3>
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-4 group/item">
                            <div className="w-2 h-2 bg-chapp-accent-blue rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="text-chapp-gray-300 text-body-lg leading-relaxed group-hover/item:text-chapp-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-6">
                      <h3 className="text-heading-lg text-chapp-white font-medium">{t('services.benefitsTitle')}</h3>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-4 group/benefit">
                            <CheckCircle size={20} className="text-chapp-accent-blue/60 flex-shrink-0 mt-0.5 group-hover/benefit:text-chapp-accent-blue group-hover/benefit:scale-110 transition-all duration-300" />
                            <span className="text-chapp-gray-300 text-body-lg leading-relaxed group-hover/benefit:text-chapp-white transition-colors duration-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <a 
                        href="/#contact" 
                        className="btn-chapp-primary inline-flex items-center gap-2 hover-glow-blue"
                      >
                        {t('services.requestQuote')}
                        <ArrowLeft size={16} className="rotate-180" />
                      </a>
                    </div>
                  </div>

                  {/* Enhanced Animated Visual Element */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                    <div className="relative group/visual">
                      <div className="w-96 h-96 rounded-full border border-chapp-white/5 bg-chapp-white/[0.02] flex items-center justify-center backdrop-blur-sm group-hover/visual:border-chapp-white/15 transition-all duration-1000 animate-pulse">
                        <div className="w-72 h-72 rounded-full border border-chapp-white/10 bg-chapp-white/[0.03] flex items-center justify-center group-hover/visual:border-chapp-accent-blue/40 group-hover/visual:rotate-45 transition-all duration-1000">
                          <div className="w-48 h-48 rounded-full border border-chapp-accent-blue/20 bg-chapp-accent-blue/5 flex items-center justify-center group-hover/visual:bg-chapp-accent-blue/15 group-hover/visual:scale-110 group-hover/visual:rotate-90 transition-all duration-700">
                            <div className="w-32 h-32 rounded-full bg-chapp-accent-blue/10 flex items-center justify-center group-hover/visual:bg-chapp-accent-blue/20 group-hover/visual:scale-125 transition-all duration-500">
                              <service.icon className="text-chapp-accent-blue group-hover/visual:scale-150 group-hover/visual:rotate-12 group-hover/visual:text-blue-300 transition-all duration-500" size={64} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Enhanced Floating particles */}
                      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-chapp-accent-blue rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-chapp-accent-blue rounded-full animate-bounce opacity-70" style={{ animationDelay: '2s' }}></div>
                      <div className="absolute top-1/3 left-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-chapp-accent-blue rounded-full animate-bounce opacity-90" style={{ animationDelay: '1.5s' }}></div>
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
          <div className="card-premium-dark rounded-4xl p-16 text-center apple-glow hover:bg-white/5 transition-all duration-500">
            <h2 className="text-display-lg text-chapp-title mb-6 font-light">
              {t('services.cta.title')}
            </h2>
            <p className="text-body-xl text-chapp-body mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
