import React, { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check, Shield, BarChart3, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allPreferences);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
    setIsVisible(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      preferences: prefs,
      timestamp: Date.now(),
    }));

    // Here you would typically initialize or disable analytics/marketing scripts
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing scripts
      console.log('Marketing enabled');
    }
  };

  const texts = {
    IT: {
      title: "Questo sito utilizza i cookie",
      description: "Utilizziamo cookie tecnici necessari e, con il tuo consenso, cookie analytics e marketing per migliorare la tua esperienza e personalizzare i contenuti.",
      acceptAll: "Accetta Tutti",
      acceptNecessary: "Solo Necessari",
      settings: "Personalizza",
      save: "Salva Preferenze",
      close: "Chiudi",
      settingsTitle: "Preferenze Cookie",
      settingsDescription: "Scegli quali categorie di cookie accettare. Puoi modificare queste impostazioni in qualsiasi momento.",
      necessary: {
        title: "Cookie Necessari",
        description: "Essenziali per il funzionamento del sito. Non possono essere disabilitati.",
        always: "Sempre attivi"
      },
      analytics: {
        title: "Cookie Analytics",
        description: "Ci aiutano a capire come utilizzi il sito per migliorare l'esperienza."
      },
      marketing: {
        title: "Cookie Marketing",
        description: "Utilizzati per mostrarti contenuti e pubblicità personalizzate."
      },
      learnMore: "Per saperne di più consulta la nostra",
      cookiePolicy: "Cookie Policy",
      privacyPolicy: "Privacy Policy"
    },
    EN: {
      title: "This site uses cookies",
      description: "We use necessary technical cookies and, with your consent, analytics and marketing cookies to improve your experience and personalize content.",
      acceptAll: "Accept All",
      acceptNecessary: "Necessary Only",
      settings: "Customize",
      save: "Save Preferences",
      close: "Close",
      settingsTitle: "Cookie Preferences",
      settingsDescription: "Choose which categories of cookies to accept. You can change these settings at any time.",
      necessary: {
        title: "Necessary Cookies",
        description: "Essential for website functionality. Cannot be disabled.",
        always: "Always active"
      },
      analytics: {
        title: "Analytics Cookies",
        description: "Help us understand how you use the site to improve the experience."
      },
      marketing: {
        title: "Marketing Cookies",
        description: "Used to show you personalized content and advertising."
      },
      learnMore: "Learn more in our",
      cookiePolicy: "Cookie Policy",
      privacyPolicy: "Privacy Policy"
    }
  };

  const t = texts[language] || texts.IT;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" />
      
      {/* Banner */}
      <div className="relative w-full max-w-6xl pointer-events-auto animate-slide-up">
        <div className="glass-dark border border-chapp-white/20 rounded-2xl p-6 shadow-glass-dark">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 rounded-xl flex items-center justify-center">
                    <Cookie className="text-chapp-accent-blue" size={20} />
                  </div>
                  <h3 className="text-heading-lg text-chapp-title">
                    {t.title}
                  </h3>
                </div>
                
                <p className="text-body-md text-chapp-body mb-4 lg:mb-0">
                  {t.description}
                </p>
                
                <p className="text-body-sm text-chapp-gray-400">
                  {t.learnMore}{' '}
                  <a href="/cookies" className="text-chapp-accent-blue hover:underline">
                    {t.cookiePolicy}
                  </a>
                  {' '}e{' '}
                  <a href="/privacy" className="text-chapp-accent-blue hover:underline">
                    {t.privacyPolicy}
                  </a>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[300px]">
                <button
                  onClick={handleAcceptAll}
                  className="btn-chapp-accent flex items-center justify-center hover-glow-blue"
                >
                  <Check size={18} className="mr-2" />
                  {t.acceptAll}
                </button>
                
                <button
                  onClick={handleAcceptNecessary}
                  className="btn-chapp-secondary flex items-center justify-center"
                >
                  <Shield size={18} className="mr-2" />
                  {t.acceptNecessary}
                </button>
                
                <button
                  onClick={() => setShowSettings(true)}
                  className="btn-chapp-secondary flex items-center justify-center"
                >
                  <Settings size={18} className="mr-2" />
                  {t.settings}
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-chapp-accent-blue/10 border border-chapp-accent-blue/30 rounded-xl flex items-center justify-center">
                    <Settings className="text-chapp-accent-blue" size={20} />
                  </div>
                  <h3 className="text-heading-lg text-chapp-title">
                    {t.settingsTitle}
                  </h3>
                </div>
                
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-chapp-gray-400 hover:text-chapp-white transition-colors p-2"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-body-md text-chapp-body">
                {t.settingsDescription}
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="card-premium-dark p-4 opacity-75">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Shield className="text-chapp-accent-blue" size={20} />
                      <h4 className="text-body-lg font-medium text-chapp-title">
                        {t.necessary.title}
                      </h4>
                    </div>
                    <span className="text-body-sm text-chapp-accent-blue font-medium">
                      {t.necessary.always}
                    </span>
                  </div>
                  <p className="text-body-sm text-chapp-body">
                    {t.necessary.description}
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="card-premium-dark p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="text-chapp-accent-blue" size={20} />
                      <h4 className="text-body-lg font-medium text-chapp-title">
                        {t.analytics.title}
                      </h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          analytics: e.target.checked
                        }))}
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        preferences.analytics ? 'bg-chapp-accent-blue' : 'bg-chapp-gray-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                        } translate-y-0.5`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-body-sm text-chapp-body">
                    {t.analytics.description}
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="card-premium-dark p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Target className="text-chapp-accent-blue" size={20} />
                      <h4 className="text-body-lg font-medium text-chapp-title">
                        {t.marketing.title}
                      </h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          marketing: e.target.checked
                        }))}
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-chapp-accent-blue' : 'bg-chapp-gray-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                          preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                        } translate-y-0.5`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-body-sm text-chapp-body">
                    {t.marketing.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-chapp-white/10">
                <button
                  onClick={handleSaveSettings}
                  className="btn-chapp-accent flex items-center justify-center hover-glow-blue"
                >
                  <Check size={18} className="mr-2" />
                  {t.save}
                </button>
                
                <button
                  onClick={handleAcceptNecessary}  
                  className="btn-chapp-secondary flex items-center justify-center"
                >
                  <Shield size={18} className="mr-2" />
                  {t.acceptNecessary}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;