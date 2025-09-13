import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';

const ChappNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t, isLoading } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-dropdown')) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setIsOpen(false);
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 100);
    } else scrollToContact();
  };

  const handleServicesClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/services') {
      navigate('/services');
      // Force scroll to top after navigation with longer delay to ensure page loads
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      // If already on services page, scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNovamaskClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/novamask') {
      navigate('/novamask');
      // Force scroll to top after navigation with longer delay to ensure page loads
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      // If already on novamask page, scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t('nav.about'), href: '/#about', action: () => handleNavClick('/#about') },
    { name: t('nav.services'), href: '/services', isRoute: true, action: () => handleServicesClick() },
    { name: 'Novamask', href: '/novamask', isRoute: true, action: () => handleNovamaskClick() },
    { name: t('nav.contact'), href: '/#contact', action: () => handleNavClick('/#contact') },
  ];

  const languages = [
    { code: 'IT' as Language, name: 'Italiano', flag: '🇮🇹' },
    { code: 'EN' as Language, name: 'English', flag: '🇺🇸' },
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const toggleMobileLanguage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-navbar-appear ${isScrolled
        ? 'glass-dark shadow-glass-dark backdrop-blur-xl opacity-95'
        : 'bg-transparent backdrop-blur-sm opacity-100'
        }`}
    >
      <div className="container-chapp mt-3">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
                         <button
               onClick={handleLogoClick}
               className="group transition-all duration-300 hover:scale-105 focus:outline-none rounded-lg p-1"
               aria-label="Torna all'inizio"
             >
              <img 
                src={"/novaresin_logo.png"} 
                alt="Novaresin s.p.a" 
                className="w-22 h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:brightness-110" 
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.isRoute && link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-all duration-300 relative group link-hover-dark"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-chapp-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ) : link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-all duration-300 relative group link-hover-dark"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-chapp-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-all duration-300 relative group link-hover-dark"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-chapp-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              )
            )}
          </div>

          {/* Language Dropdown & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-lg text-chapp-gray-300 hover:text-chapp-white hover:bg-chapp-white/15 transition-all duration-300 group"
              >
                <Globe size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-body-sm font-medium">
                  {languages.find((lang) => lang.code === language)?.flag}
                </span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full right-0 mt-2 w-44 bg-chapp-dark-card/95 backdrop-blur-xl border border-chapp-white/20 rounded-xl shadow-glass-dark overflow-hidden z-60
                transform transition-all duration-300 ease-out ${isLanguageOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
              >
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
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContactClick}
              className={`px-5 py-2 bg-chapp-accent-blue text-chapp-white font-medium rounded-xl text-body-md hover:bg-chapp-accent-blue-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-blue ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={isLoading}
            >
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative language-dropdown">
              <button
                onClick={toggleMobileLanguage}
                className="flex items-center space-x-1 px-2 py-1.5 bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-lg text-chapp-gray-300 hover:text-chapp-white transition-all duration-300 touch-manipulation"
              >
                <span className="text-xs">{languages.find((lang) => lang.code === language)?.flag}</span>
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Mobile Language Dropdown */}
              <div
                className={`absolute top-full right-0 mt-1 w-32 bg-chapp-dark-card/95 backdrop-blur-xl border border-chapp-white/20 rounded-lg shadow-glass-dark overflow-hidden z-[70]
                transform transition-all duration-300 ease-out ${isLanguageOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
              >
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLanguageSelect(langItem.code)}
                    className={`w-full flex items-center space-x-2 px-2 py-1.5 text-left text-body-sm font-medium transition-all duration-300 hover:bg-chapp-white/10 touch-manipulation ${language === langItem.code
                      ? 'text-chapp-accent-blue bg-chapp-white/5'
                      : 'text-chapp-gray-300 hover:text-chapp-white'
                      }`}
                  >
                    <span className="text-xs">{langItem.flag}</span>
                    <span className="text-xs">{langItem.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 p-1.5 bg-chapp-white/10 backdrop-blur-sm border border-chapp-white/20 rounded-lg touch-manipulation"
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
            {navLinks.map((link) =>
              link.isRoute && link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 px-3 py-2 hover:bg-chapp-white/10 rounded-lg text-left touch-manipulation"
                >
                  {link.name}
                </button>
              ) : link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 px-3 py-2 hover:bg-chapp-white/10 rounded-lg touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-body-md font-medium text-chapp-gray-300 hover:text-chapp-white transition-colors duration-300 px-3 py-2 hover:bg-chapp-white/10 rounded-lg text-left touch-manipulation"
                >
                  {link.name}
                </button>
              )
            )}

            <div className="px-3 pt-1">
              <button
                onClick={handleContactClick}
                className={`w-full px-4 py-2 bg-chapp-accent-blue text-chapp-white font-medium rounded-xl text-body-md hover:bg-chapp-accent-blue-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-blue ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                disabled={isLoading}
              >
                {t('nav.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ChappNavbar;
