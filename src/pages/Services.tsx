
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
            
            <h1 className="text-display-xl text-chapp-title mb-6 leading-tight">
              {t('services.title.part1')}{' '}
              <span className="bg-gradient-blue-elegant bg-clip-text text-transparent">
                {t('services.title.part2')}
              </span>
            </h1>
            
            <p className="text-body-xl text-chapp-body max-w-3xl mx-auto leading-relaxed mb-16">
              {t('services.subtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass-dark rounded-2xl p-6 apple-glow">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-chapp-accent-blue to-chapp-accent-blue-light rounded-xl flex items-center justify-center">
                    <stat.icon className="text-chapp-white" size={24} />
                  </div>
                  <div className="text-display-sm text-chapp-white font-bold mb-2">{stat.value}</div>
                  <div className="text-chapp-gray-300 text-body-md">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-chapp bg-chapp-dark-bg">
        <div className="container-chapp">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className="relative group">
                {/* Elegant Separator */}
                {index > 0 && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-chapp-accent-blue/30 to-transparent"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-8`}>
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl glass-dark border border-chapp-accent-blue/20 flex items-center justify-center">
                        <service.icon className="text-chapp-accent-blue" size={32} />
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
                      <h3 className="text-heading-lg text-chapp-white">{t('services.featuresTitle')}</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 bg-chapp-accent-blue rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="text-chapp-gray-300 text-body-lg leading-relaxed group-hover/item:text-chapp-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-6">
                      <h3 className="text-heading-lg text-chapp-white">{t('services.benefitsTitle')}</h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3 group/benefit">
                            <CheckCircle size={18} className="text-chapp-accent-blue/60 flex-shrink-0 mt-0.5 group-hover/benefit:text-chapp-accent-blue group-hover/benefit:scale-110 transition-all duration-300" />
                            <span className="text-chapp-gray-300 text-body-lg leading-relaxed group-hover/benefit:text-chapp-white transition-colors duration-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <a 
                        href="/#contact" 
                        className="btn-chapp-primary inline-flex items-center gap-2"
                      >
                        {t('services.requestQuote')}
                        <ArrowLeft size={16} className="rotate-180" />
                      </a>
                    </div>
                  </div>

                  {/* Enhanced Visual Element */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                    <div className="relative group/visual">
                      <div className="w-80 h-80 rounded-full border border-chapp-white/5 bg-chapp-white/[0.02] flex items-center justify-center backdrop-blur-sm group-hover/visual:border-chapp-white/10 transition-all duration-700 animate-pulse">
                        <div className="w-56 h-56 rounded-full border border-chapp-white/10 bg-chapp-white/[0.03] flex items-center justify-center group-hover/visual:border-chapp-accent-blue/30 group-hover/visual:rotate-45 transition-all duration-700">
                          <div className="w-28 h-28 rounded-full bg-chapp-accent-blue/10 flex items-center justify-center group-hover/visual:bg-chapp-accent-blue/20 group-hover/visual:scale-110 transition-all duration-500">
                            <service.icon className="text-chapp-accent-blue group-hover/visual:scale-125 group-hover/visual:rotate-12 transition-all duration-500" size={56} />
                          </div>
                        </div>
                      </div>
                      {/* Floating particles */}
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-chapp-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-chapp-accent-blue-light rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-chapp-accent-blue rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
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
          <div className="glass-dark rounded-4xl p-16 text-center apple-glow">
            <h2 className="text-display-lg text-chapp-title mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-body-xl text-chapp-body mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/#contact" className="btn-chapp-primary">
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
