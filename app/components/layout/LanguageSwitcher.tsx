"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "sr", name: "Srpski", flag: "🇷🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">
          {currentLanguage?.name}
        </span>
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`group w-full px-4 py-3 flex items-center gap-3 transition-colors text-left relative ${
                    locale === lang.code
                      ? "text-orange-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium">
                    {lang.name}
                  </span>
                  {locale === lang.code && (
                    <span className="ml-auto text-orange-400">✓</span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
