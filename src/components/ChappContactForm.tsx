
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Building, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ChappMap from './ChappMap';

const ChappContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.name');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.errors.email.invalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.message');
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
        message: ''
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="section-chapp bg-chapp-dark-bg relative z-10">
      <div className="container-chapp">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-chapp-accent-blue/20 text-chapp-accent-blue px-4 py-2 rounded-full text-body-sm font-semibold mb-6">
            {t('contact.badge')}
          </div>
          <h2 className="text-display-lg text-chapp-title mb-6">
            {t('contact.title')}{' '}
            <span className="bg-gradient-blue-elegant bg-clip-text text-transparent">
              {t('contact.title.highlight')}
            </span>
          </h2>
          <p className="text-body-xl text-chapp-body max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Form & Map Grid - Fixed Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <div className="card-premium-dark p-8 lg:p-12 flex flex-col h-full">
            <h3 className="text-heading-xl text-chapp-title mb-8">
              {t('contact.form.title')}
            </h3>

            {status === 'success' && (
              <div className="mb-8 p-4 bg-green-900/20 border border-green-500/30 rounded-2xl flex items-center gap-3">
                <CheckCircle className="text-green-400" size={20} />
                <p className="text-green-400">
                  {t('contact.form.success')}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-body-sm font-semibold text-chapp-white mb-3">
                    <User size={16} className="text-chapp-accent-blue" />
                    {t('contact.form.name')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-chapp ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder={t('contact.form.name')}
                  />
                  {errors.name && (
                    <p className="mt-2 text-body-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-body-sm font-semibold text-chapp-white mb-3">
                    <Mail size={16} className="text-chapp-accent-blue" />
                    {t('contact.form.email')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-chapp ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder={t('contact.form.email')}
                  />
                  {errors.email && (
                    <p className="mt-2 text-body-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Azienda */}
              <div>
                <label htmlFor="company" className="flex items-center gap-2 text-body-sm font-semibold text-chapp-white mb-3">
                  <Building size={16} className="text-chapp-accent-blue" />
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-chapp"
                  placeholder={t('contact.form.company.placeholder')}
                />
              </div>

              {/* Messaggio */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="flex items-center gap-2 text-body-sm font-semibold text-chapp-white mb-3">
                  <MessageSquare size={16} className="text-chapp-accent-blue" />
                  {t('contact.form.message')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea-chapp flex-1 ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder={t('contact.form.message.placeholder')}
                />
                {errors.message && (
                  <p className="mt-2 text-body-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`btn-chapp-accent w-full justify-center flex items-center hover-glow-blue ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.form.send')}
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start gap-3 p-4 bg-chapp-white/5 border border-chapp-white/10 rounded-xl">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  required
                  className="mt-1 w-4 h-4 text-chapp-accent-blue bg-transparent border-2 border-chapp-gray-400 rounded focus:ring-chapp-accent-blue focus:ring-2 focus:border-chapp-accent-blue"
                />
                <label htmlFor="privacy-consent" className="text-body-sm text-chapp-gray-300 leading-relaxed">
                  Accetto il trattamento dei miei dati personali secondo la{' '}
                  <a href="/privacy" className="text-chapp-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                  {' '}e acconsento a essere contattato per rispondere alla mia richiesta. <span className="text-red-400">*</span>
                </label>
              </div>

              <p className="text-body-sm text-chapp-gray-400 text-center">
                I campi contrassegnati con * sono obbligatori. 
                <br />
                Consulta la nostra <a href="/privacy" className="text-chapp-accent-blue hover:underline">Privacy Policy</a> per maggiori informazioni.
              </p>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div className="flex flex-col h-full space-y-6">
            {/* Map - Fixed height to match form */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-chapp-dark-border/30 bg-chapp-dark-card relative">
              <ChappMap className="h-full w-full" />
            </div>

            {/* Contact Info Card */}
            <div className="card-premium-dark p-6">
              <h3 className="text-heading-lg text-chapp-title mb-6">
                {t('contact.info.title')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-chapp-accent-blue" size={18} />
                  </div>
                  <div>
                    <h4 className="text-body-lg font-medium text-chapp-white mb-1">{t('contact.info.email')}</h4>
                    <p className="text-chapp-gray-300 text-body-md">info@novaresin.it</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="text-chapp-accent-blue" size={18} />
                  </div>
                  <div>
                    <h4 className="text-body-lg font-medium text-chapp-white mb-1">{t('contact.info.address')}</h4>
                    <address className="not-italic text-chapp-gray-300 text-body-sm">
                      Via Montegrappa, 28<br />
                      23895 Nibionno (LC)<br />
                      Italia
                    </address>
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

export default ChappContactForm;
