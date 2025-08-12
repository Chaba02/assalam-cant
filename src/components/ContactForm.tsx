
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import ChappMap from './ChappMap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    'Strategia Aziendale',
    'Gestione del Cambiamento',
    'Marketing & Vendite',
    'Innovazione & R&D',
    'Business Intelligence',
    'Ottimizzazione Processi'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('loading');

    // Simulazione invio form
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Rimuovi errore quando l'utente inizia a digitare
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefono',
      details: ['+39 02 1234 5678', '+39 348 123 4567'],
      link: 'tel:+390212345678'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@consultpro.it', 'consulenza@consultpro.it'],
      link: 'mailto:info@consultpro.it'
    },
    {
      icon: MapPin,
      title: 'Sede',
      details: ['Via della Consulenza, 123', '20121 Milano, Italia'],
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contatti" className="section-chapp bg-chapp-dark-bg">
      <div className="container-chapp">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-dark text-chapp-accent-blue px-6 py-3 rounded-full text-body-sm font-semibold mb-8 apple-glow">
            <Send size={18} />
            Contattaci
          </div>
          <h2 className="text-display-lg text-chapp-title mb-8">
            Inizia il Tuo{' '}
            <span className="text-glow-blue text-chapp-accent-blue">Percorso di Crescita</span>
          </h2>
          <p className="text-body-xl text-chapp-body max-w-3xl mx-auto leading-relaxed">
            Siamo qui per ascoltare le tue esigenze e proporti la soluzione migliore. 
            Contattaci per una consulenza professionale e senza impegno.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="xl:col-span-1">
            <div className="bg-chapp-white/[0.02] border border-chapp-white/10 rounded-3xl p-10 backdrop-blur-sm">
              <h3 className="text-display-md text-chapp-white mb-2 font-light tracking-tight">
                Richiedi una Consulenza
              </h3>
              <p className="text-body-lg text-chapp-gray-300 mb-10 font-light">
                Compila il form per essere ricontattato dal nostro team
              </p>

              {status === 'success' && (
                <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 backdrop-blur-sm">
                  <CheckCircle className="text-emerald-400" size={20} />
                  <p className="text-emerald-300">
                    Messaggio inviato con successo! Ti contatteremo presto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-6">
                  {/* Nome */}
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-body-md font-medium text-chapp-white">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl text-chapp-white placeholder-chapp-gray-400 focus:outline-none focus:ring-2 focus:ring-chapp-accent-blue/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                      placeholder="Il tuo nome e cognome"
                    />
                    {errors.name && (
                      <p className="text-body-sm text-red-400 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-body-md font-medium text-chapp-white">
                      Email Professionale *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl text-chapp-white placeholder-chapp-gray-400 focus:outline-none focus:ring-2 focus:ring-chapp-accent-blue/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                      placeholder="nome@azienda.com"
                    />
                    {errors.email && (
                      <p className="text-body-sm text-red-400 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Azienda */}
                    <div className="space-y-3">
                      <label htmlFor="company" className="block text-body-md font-medium text-chapp-white">
                        Azienda
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl text-chapp-white placeholder-chapp-gray-400 focus:outline-none focus:ring-2 focus:ring-chapp-accent-blue/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Nome dell'azienda"
                      />
                    </div>

                    {/* Telefono */}
                    <div className="space-y-3">
                      <label htmlFor="phone" className="block text-body-md font-medium text-chapp-white">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl text-chapp-white placeholder-chapp-gray-400 focus:outline-none focus:ring-2 focus:ring-chapp-accent-blue/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                  </div>

                  {/* Servizio */}
                  <div className="space-y-3">
                    <label htmlFor="service" className="block text-body-md font-medium text-chapp-white">
                      Servizio di Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl text-chapp-white focus:outline-none focus:ring-2 focus:ring-chapp-accent-blue/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm appearance-none bg-[url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3e%3c/svg%3e')] bg-[position:right_1rem_center] bg-no-repeat bg-[size:1.5em_1.5em] pr-12"
                    >
                      <option value="">Seleziona un servizio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Messaggio */}
                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-body-md font-medium text-chapp-white">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl text-chapp-white placeholder-chapp-gray-400 focus:outline-none focus:ring-2 focus:ring-chapp-accent-blue/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                      placeholder="Descrivi il tuo progetto e le tue esigenze..."
                    />
                    {errors.message && (
                      <p className="text-body-sm text-red-400 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full px-8 py-5 bg-chapp-accent-blue hover:bg-chapp-accent-blue-light text-chapp-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                      status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia Richiesta
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map & Contact Info */}
          <div className="xl:col-span-1 space-y-8">
            {/* Map */}
            <div className="h-96 xl:h-80">
              <ChappMap className="h-full" />
            </div>

            {/* Contact Info */}
            <div className="bg-chapp-white/[0.02] border border-chapp-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-heading-lg text-chapp-white mb-6 font-light">
                Informazioni di Contatto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-chapp-accent-blue/20 transition-all duration-300">
                      <info.icon className="text-chapp-accent-blue" size={18} />
                    </div>
                    <div>
                      <h4 className="text-body-lg font-medium text-chapp-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-chapp-gray-300 text-body-md leading-relaxed">
                          {detailIndex === 0 && info.link ? (
                            <a 
                              href={info.link}
                              className="text-chapp-accent-blue hover:text-chapp-accent-blue-light transition-colors duration-300"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-chapp-white/5 backdrop-blur-sm rounded-2xl border border-chapp-white/10">
                <h4 className="text-body-lg font-medium text-chapp-white mb-4">
                  Orari di Apertura
                </h4>
                <div className="space-y-3 text-body-sm text-chapp-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Lunedì - Venerdì</span>
                    <span className="text-chapp-white font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sabato</span>
                    <span className="text-chapp-white font-medium">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domenica</span>
                    <span className="text-chapp-gray-400">Chiuso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
