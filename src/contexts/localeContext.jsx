import React, { createContext } from 'react';
import { appLanguages } from '../utils';

// Detect the default language from a browser
const defaultLang = navigator.language.substring(0,2)

export const LOCALE_KEY = 'locale';
export const LOCALE_CONTEXT_DEFAULT = {
    locale: appLanguages[localStorage.getItem(LOCALE_KEY)]?.locale || appLanguages[defaultLang]?.locale,
    setLocale: (newLocale) => {
        localStorage.setItem(LOCALE_KEY, newLocale);
        LOCALE_CONTEXT_DEFAULT.locale = appLanguages.newLocale?.locale;
    },
};

const LocaleContext = createContext({
    ...LOCALE_CONTEXT_DEFAULT
});

export default LocaleContext;
