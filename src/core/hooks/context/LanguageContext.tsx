import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { trackEvent } from "@/core/helpers/analytics";

export type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang") as Language;
      if (saved === "es" || saved === "en") return saved;
      const browserLang = navigator.language?.toLowerCase() || "";
      if (browserLang.startsWith("en")) return "en";
    }
    return "es";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang;
      trackEvent("language_switch", { language_selected: newLang });
    }
  };

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
