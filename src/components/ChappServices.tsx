import React from 'react';
import { 
  Factory, 
  Droplets, 
  Layers3, 
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

const ChappServices = () => {
  const services = [
    {
      icon: Factory,
      title: 'Settori Specializzati',
      description: 'Soluzioni tessili innovative per diversi settori industriali, dall\'abbigliamento tecnico all\'automotive.',
      features: ['Abbigliamento sportivo', 'Tessuti automotive', 'Tessile medicale', 'Arredamento'],
      color: 'from-blue-500 to-blue-600',
      highlight: 'Versatilità'
    },
    {
      icon: Droplets,
      title: 'Resinatura Avanzata',
      description: 'Trattamenti di resinatura professionale per conferire proprietà specifiche ai tessuti con tecnologie all\'avanguardia.',
      features: ['Impermeabilizzazione', 'Resistenza al fuoco', 'Proprietà antibatteriche', 'Controllo qualità'],
      color: 'from-emerald-500 to-emerald-600',
      highlight: 'Innovazione'
    },
    {
      icon: Layers3,
      title: 'Accoppiatura Precision',
      description: 'Servizi di accoppiatura tessile di precisione per creare materiali compositi performanti e duraturi.',
      features: ['Laminazione tessuti', 'Accoppiatura multistrato', 'Processi termici', 'Test di tenuta'],
      color: 'from-purple-500 to-purple-600',
      highlight: 'Precisione'
    },
    {
      icon: Shield,
      title: 'Membrane Tecniche',
      description: 'Sviluppo e applicazione di membrane tecniche specializzate per applicazioni ad alte prestazioni.',
      features: ['Membrane traspiranti', 'Barriere impermeabili', 'Filtrazione avanzata', 'Certificazioni'],
      color: 'from-amber-500 to-amber-600',
      highlight: 'Performance'
    }
  ];

  const sectors = [
    { name: 'Sport & Outdoor', icon: Target },
    { name: 'Automotive', icon: Zap },
    { name: 'Medicale', icon: Shield },
    { name: 'Arredamento', icon: Sparkles }
  ];

  return (
    <section id="services" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <Factory size={16} />
            I Nostri Servizi Tessili
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
            Eccellenza nella{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-medium">
              Lavorazione Tessile
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Offriamo servizi specializzati di resinatura, accoppiatura e membrane tecniche 
            per diversi settori industriali, garantendo qualità e innovazione in ogni progetto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Highlight Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                  {service.highlight}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-700">
                Scopri di più
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Sectors Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            Settori di <span className="font-medium text-blue-600">Applicazione</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <sector.icon size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{sector.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Hai un progetto tessile in mente?
            </h3>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              I nostri esperti tessili sono pronti ad analizzare le tue esigenze 
              e proporti la soluzione più innovativa per il tuo settore.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Richiedi una Consulenza Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChappServices;