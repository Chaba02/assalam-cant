import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
  canonical?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/novaresin_logo.png',
  url = 'https://novaresin.lovable.app',
  type = 'website',
  noIndex = false,
  canonical,
  structuredData
}) => {
  const { language } = useLanguage();
  
  // Default values based on language
  const defaultTitle = language === 'IT' 
    ? 'Novaresin S.p.A. - Finissaggio e Nobilitazione Tessuti | Resinatura, Accoppiatura, Membrane'
    : 'Novaresin S.p.A. - Textile Finishing & Enhancement | Resination, Coupling, Membranes';
    
  const defaultDescription = language === 'IT'
    ? 'Novaresin S.p.A. leader nel finissaggio tessile dal 1970. Servizi di resinatura, accoppiatura e membrane per fashion, sport, outdoor e geotessile. Certificazioni GRS e ISO 9001.'
    : 'Novaresin S.p.A. leader in textile finishing since 1970. Resination, coupling and membrane services for fashion, sport, outdoor and geotextile. GRS and ISO 9001 certifications.';

  const defaultKeywords = language === 'IT'
    ? 'novaresin, finissaggio tessuti, resinatura tessile, accoppiatura tessile, membrane tecniche, tessuti tecnici, nobilitazione tessile, certificazione GRS, ISO 9001, fashion tessile, sportswear, outdoor tessile, geotessile, impermeabilizzazione tessuti, tessuti antibatterici, Italia, Lombardia'
    : 'novaresin, textile finishing, textile resination, textile coupling, technical membranes, technical textiles, textile ennobling, GRS certification, ISO 9001, textile fashion, sportswear, outdoor textile, geotextile, textile waterproofing, antibacterial fabrics, Italy, Lombardy';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalUrl = `${url}${window.location.pathname}`;
  const finalCanonical = canonical || finalUrl;

  // Hreflang URLs
  const hreflangUrls = {
    it: finalUrl.replace(/\/en\//, '/').replace(/\/en$/, ''),
    en: finalUrl.includes('/en') ? finalUrl : finalUrl.replace(url, `${url}/en`)
  };

  React.useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMeta('description', finalDescription);
    updateMeta('keywords', finalKeywords);
    updateMeta('author', 'Novaresin S.p.A.');
    updateMeta('robots', noIndex ? 'noindex,nofollow' : 'index,follow,max-snippet:160,max-image-preview:large');
    updateMeta('language', language);
    updateMeta('revisit-after', '7 days');
    updateMeta('distribution', 'global');
    updateMeta('rating', 'general');

    // Open Graph
    updateMeta('', finalTitle, 'og:title');
    updateMeta('', finalDescription, 'og:description');
    updateMeta('', type, 'og:type');
    updateMeta('', finalUrl, 'og:url');
    updateMeta('', image, 'og:image');
    updateMeta('', 'Novaresin S.p.A.', 'og:site_name');
    updateMeta('', language === 'IT' ? 'it_IT' : 'en_US', 'og:locale');

    // Twitter Cards
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDescription);
    updateMeta('twitter:image', image);
    updateMeta('twitter:creator', '@novaresin');
    updateMeta('twitter:site', '@novaresin');

    // Additional social meta tags
    updateMeta('', finalTitle, 'linkedin:title');
    updateMeta('', finalDescription, 'linkedin:description');
    updateMeta('', image, 'linkedin:image');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = finalCanonical;

    // Hreflang links
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    Object.entries(hreflangUrls).forEach(([lang, url]) => {
      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = lang;
      hreflang.href = url;
      document.head.appendChild(hreflang);
    });

    // Add x-default hreflang
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = hreflangUrls.it;
    document.head.appendChild(xDefault);

    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [finalTitle, finalDescription, finalKeywords, finalUrl, image, type, noIndex, finalCanonical, language, structuredData]);

  return null;
};

export default SEOHead;