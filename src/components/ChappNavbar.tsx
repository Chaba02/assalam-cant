
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';

const ChappNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t, isLoading } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '/#about', isExternal: false },
    { name: t('nav.services'), href: '/services', isExternal: false },
    { name: t('nav.contact'), href: '/#contact', isExternal: false },
  ];

  const languages = [
    { code: 'IT' as Language, name: 'Italiano', flag: '🇮🇹' },
    { code: 'EN' as Language, name: 'English', flag: '🇺🇸' },
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-dark shadow-glass-dark backdrop-blur-xl opacity-95'
          : 'bg-transparent backdrop-blur-sm opacity-100'
        }`}
    >
      <div className="container-chapp mt-3">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-heading-lg text-chapp-white font-display">
              Novaresin s.p.a
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-all duration-300 relative group link-hover-dark"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-chapp-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-all duration-300 relative group link-hover-dark"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-chapp-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              )
            ))}
          </div>

          {/* Language Dropdown & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Dropdown - Dimensioni ridotte */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-lg text-chapp-gray-300 hover:text-chapp-white hover:bg-chapp-white/15 transition-all duration-300 group"
              >
                <Globe size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-body-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-chapp-dark-card/95 backdrop-blur-xl border border-chapp-white/20 rounded-xl shadow-glass-dark overflow-hidden z-60">
                  {languages.map((langItem) => (
                    <button
                      key={langItem.code}
                      onClick={() => handleLanguageSelect(langItem.code)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 text-left text-body-sm font-medium transition-all duration-300 hover:bg-chapp-white/10 ${language === langItem.code
                          ? 'text-chapp-accent-blue bg-chapp-white/5'
                          : 'text-chapp-gray-300 hover:text-chapp-white'
                        }`}
                    >
                      <span className="text-sm">{langItem.flag}</span>
                      <span>{langItem.name}</span>
                      {language === langItem.code && (
                        <div className="ml-auto w-1.5 h-1.5 bg-chapp-accent-blue rounded-full animate-glow"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button - Dimensioni ridotte */}
            <button className={`px-5 py-2 bg-chapp-accent-blue text-chapp-white font-medium rounded-xl text-body-md hover:bg-chapp-accent-blue-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-blue ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-1 px-2 py-1.5 bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-lg text-chapp-gray-300 hover:text-chapp-white transition-all duration-300"
            >
              <span className="text-xs">
                {languages.find(lang => lang.code === language)?.flag}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 p-1.5 bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-80 pb-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col space-y-3 pt-3 border-t border-chapp-white/20">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 px-3 py-2 hover:bg-chapp-white/10 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 px-3 py-2 hover:bg-chapp-white/10 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}

            {/* Mobile Language Options */}
            {isLanguageOpen && (
              <div className="px-3 space-y-1">
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLanguageSelect(langItem.code)}
                    className={`w-full flex items-center space-x-2 px-2 py-1.5 text-left text-body-sm font-medium rounded-lg transition-all duration-300 ${language === langItem.code
                        ? 'text-chapp-accent-blue bg-chapp-white/10'
                        : 'text-chapp-gray-300 hover:text-chapp-white hover:bg-chapp-white/5'
                      }`}
                  >
                    <span>{langItem.flag}</span>
                    <span>{langItem.name}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="px-3 pt-1">
              <button className={`w-full px-4 py-2 bg-chapp-accent-blue text-chapp-white font-medium rounded-lg text-body-md hover:bg-chapp-accent-blue-dark transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {t('nav.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </nav>
  );
};

export default ChappNavbar;
