import React, { createContext, useEffect, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { appLanguages } from "../utils";
const DateFns = new AdapterDateFns();
// Detect the default language from a browser
const defaultLang = navigator.language.substring(0, 2);

export const LOCALE_KEY = "locale";
export const LOCALE_CONTEXT_DEFAULT = {
  locale:
    appLanguages[localStorage.getItem(LOCALE_KEY)]?.locale ||
    appLanguages[defaultLang]?.locale,
  setLocale: (newLocale) => {
    localStorage.setItem(LOCALE_KEY, newLocale);
    LOCALE_CONTEXT_DEFAULT.locale = appLanguages.newLocale?.locale;
  },
};

const LocaleContext = createContext({
  ...LOCALE_CONTEXT_DEFAULT,
});

export const LocaleContextProvider = ({ children }) => {
  const [current, setCurrent] = useState(LOCALE_CONTEXT_DEFAULT.locale);

  return (
    <LocaleContext.Provider
      value={{
        locale: current,
        setLocale: (newLocale) => {
          // aktualizuj local storage
          LOCALE_CONTEXT_DEFAULT.setLocale(newLocale);
          // aktualizuj app state
          setCurrent({ ...DateFns.locale, code: newLocale });
        },
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
