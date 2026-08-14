import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { 
    code: 'pt-PT', 
    name: 'Português (PT)', 
    flag: '/images/flags/pt.svg',
    alt: 'Bandeira de Portugal'
  },
  { 
    code: 'pt-BR', 
    name: 'Português (BR)', 
    flag: '/images/flags/br.svg',
    alt: 'Bandeira do Brasil'
  },
  { 
    code: 'en-US', 
    name: 'English (US)', 
    flag: '/images/flags/us.svg',
    alt: 'USA Flag'
  },
  { 
    code: 'fr', 
    name: 'Français', 
    flag: '/images/flags/fr.svg',
    alt: 'Drapeau de la France'
  },
  { 
    code: 'es', 
    name: 'Español', 
    flag: '/images/flags/es.svg',
    alt: 'Bandera de España'
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    localStorage.setItem('i18nextLng', langCode);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
        title="Selecionar idioma"
      >
        <img 
          src={currentLanguage.flag} 
          alt={currentLanguage.alt}
          className="lang-flag-img"
          loading="lazy"
        />
        <span className="lang-code">{currentLanguage.code}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <img 
                src={lang.flag} 
                alt={lang.alt}
                className="lang-flag-img"
                loading="lazy"
              />
              <span className="lang-name">{lang.name}</span>
              {i18n.language === lang.code && (
                <i className="fas fa-check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;