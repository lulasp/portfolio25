import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import translations from './translations';

export const LANGS = ['en', 'pt'];
const DEFAULT_LANG = 'en';

const LangContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  mounted: false,
});

export const LangProvider = ({ children }) => {
  // Start from DEFAULT_LANG so SSR and first client render match (no hydration
  // mismatch); read the stored choice after mount.
  const [lang, setLangState] = useState(DEFAULT_LANG);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    const initial = LANGS.includes(stored) ? stored : DEFAULT_LANG;
    document.documentElement.setAttribute('lang', initial);
    setLangState(initial);
    setMounted(true);
  }, []);

  const setLang = next => {
    if (!LANGS.includes(next) || next === lang) {
      return;
    }
    document.documentElement.setAttribute('lang', next);
    try {
      localStorage.setItem('lang', next);
    } catch (e) {
      // ignore storage failures (private mode etc.)
    }
    setLangState(next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, mounted }}>{children}</LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLang = () => useContext(LangContext);

// Returns the translation dictionary for the active language.
export const useTranslations = () => {
  const { lang } = useContext(LangContext);
  return translations[lang] || translations[DEFAULT_LANG];
};
