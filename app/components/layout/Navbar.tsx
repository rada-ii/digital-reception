"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("navbar");

  const navLinks = [
    { href: "/", label: t("links.home") },
    { href: "/proizvod", label: t("links.product") },
    { href: "/kontakt", label: t("links.contact") },
    { href: "/o-nama", label: t("links.about") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="group flex-shrink-0">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Desktop Logo - Full logo with text */}
              <div className="hidden sm:block">
                <Image
                  src="/2.png"
                  alt={t("logoAlt")}
                  width={400}
                  height={200}
                  priority
                  className="h-78 md:h-76 lg:h-100 xl:h-100 w-100% relative right-35
                  "
                />
              </div>

              {/* Mobile Logo - Icon only (orange circle) */}
              <div className="sm:hidden ">
                <Image
                  src="/1.png"
                  alt={t("logoAltMobile")}
                  width={60}
                  height={60}
                  priority
                  className="h-50 w-50 pt-4 relative right-14"
                />
              </div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 xl:px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Telefon Button */}
            <motion.a
              href={`tel:${t("phone")}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 xl:ml-4 flex items-center gap-2 px-4 xl:px-5 py-2 bg-orange-500 rounded-full hover:bg-orange-600 transition font-semibold text-xs xl:text-sm whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">{t("phone")}</span>
              <span className="xl:hidden">{t("call")}</span>
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-2 pr-4">
            <LanguageSwitcher />

            <motion.a
              href={`tel:${t("phone")}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 rounded-full hover:bg-orange-600 transition font-semibold text-xs sm:text-sm"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{t("call")}</span>
            </motion.a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg transition touch-manipulation"
              aria-label={isMenuOpen ? t("menuClose") : t("menuOpen")}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-slate-800 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 text-white/80 hover:text-white hover:bg-slate-800 rounded-lg px-4 transition text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${t("phone")}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition font-semibold mx-4 mt-3 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  {t("phone")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
