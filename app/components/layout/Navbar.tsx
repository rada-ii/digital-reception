"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* ✅ FIXED: Logo sa flex items-center za vertikalno centriranje */}
          <Link href="/" className="group flex-shrink-0 flex items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Desktop Logo - Full logo with text */}
              {/* ✅ FIXED: Smanjene dimenzije da odgovaraju navbar visini, uklonjeno negative positioning */}
              <div className="hidden sm:block">
                <Image
                  src="/2.png"
                  alt={t("logoAlt")}
                  width={280}
                  height={240}
                  priority
                  className="h-40 sm:h-30 md:h-[350px] w-auto"
                />
              </div>

              {/* Mobile Logo - Icon only (orange circle) */}
              {/* ✅ FIXED: Uklonjeno pt-4 i relative positioning */}
              <div className="sm:hidden">
                <Image
                  src="/1.png"
                  alt={t("logoAltMobile")}
                  width={44}
                  height={44}
                  priority
                  className="h-11 w-11"
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
          </div>

          <div className="lg:hidden flex items-center gap-2 pr-4">
            <LanguageSwitcher />

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
                    className="relative block py-2.5 px-4 text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
