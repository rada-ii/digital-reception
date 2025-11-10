"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import sr from "./sr.json";
import en from "./en.json";

type Language = "sr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sr");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "sr" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  // Save language to localStorage when changed
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = lang;
  };

  // Translation function
  const t = (path: string): any => {
    const translations = language === "sr" ? sr : en;

    // Handle nested paths like "contact.form.title"
    const keys = path.split(".");
    let result: any = translations;

    for (const key of keys) {
      if (result && typeof result === "object" && key in result) {
        result = result[key];
      } else {
        console.warn(`Translation key not found: ${path}`);
        return path; // Return the key itself if translation not found
      }
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
