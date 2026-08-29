"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type Locale = "vi" | "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const localeStore = {
  subscribe(callback: () => void) {
    window.addEventListener("lamora-locale-change", callback);
    window.addEventListener("storage", callback);
    return () => {
      window.removeEventListener("lamora-locale-change", callback);
      window.removeEventListener("storage", callback);
    };
  },
  getSnapshot(): Locale {
    const stored = window.localStorage.getItem("lamora-locale");
    return stored === "en" ? "en" : "vi";
  },
  getServerSnapshot: () => "vi" as Locale,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(localeStore.subscribe, localeStore.getSnapshot, localeStore.getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem("lamora-locale", nextLocale);
    window.dispatchEvent(new Event("lamora-locale-change"));
  };

  const value = useMemo(() => ({
    locale,
    setLocale,
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageText({ vi, en }: { vi: string; en: string }) {
  const { locale } = useLanguage();
  return <>{locale === "en" ? en : vi}</>;
}

export function languageText(locale: Locale, vi: string, en: string) {
  return locale === "en" ? en : vi;
}
