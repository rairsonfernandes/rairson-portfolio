import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traduções
import ptPT from './locales/pt-PT/translation.json';
import ptBR from './locales/pt-BR/translation.json';
import enUS from './locales/en-US/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';

const resources = {
  'pt-PT': { translation: ptPT },
  'pt-BR': { translation: ptBR },
  'en-US': { translation: enUS },
  'fr': { translation: fr },
  'es': { translation: es },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-PT',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;