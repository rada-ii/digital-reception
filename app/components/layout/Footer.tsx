"use client";

import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("navbar.links");
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* ✅ FIXED: Dodato flex items-start za vertical alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xs:col-span-2 lg:col-span-1 flex flex-col items-start"
          >
            {/* ✅ FIXED: Logo wrapper sa flex za alignment */}
            <Link href="/" className="inline-flex items-center mb-4 sm:mb-5">
              <Image
                src="/3.png"
                alt="Digitalna Recepcija"
                width={200}
                height={100}
                className="h-36 sm:h-40 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              {t("pages")}
            </h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <Link href="/" className="block hover:text-orange-500 transition">
                {navT("home")}
              </Link>
              <Link
                href="/proizvod"
                className="block hover:text-orange-500 transition"
              >
                {navT("product")}
              </Link>
              <Link
                href="/kontakt"
                className="block hover:text-orange-500 transition"
              >
                {navT("contact")}
              </Link>
              <Link
                href="/o-nama"
                className="block hover:text-orange-500 transition"
              >
                {navT("about")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              {t("company")}
            </h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <a
                href="https://inovatechit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition"
              >
                {t("companyName")}
              </a>
              <Link
                href="/privatnost"
                className="block hover:text-orange-500 transition"
              >
                {t("privacy")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              {t("contact")}
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-slate-400 text-sm">
              <a
                href="tel:+381641238587"
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">+381 64 1238587</span>
              </a>
              <a
                href="mailto:office@inovatechit.com"
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">office@inovatechit.com</span>
              </a>
              <a
                href="https://inovatechit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{t("website")}</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 pt-6 sm:pt-8 text-center"
        >
          <p className="text-slate-400 text-xs sm:text-sm">{t("copyright")}</p>
        </motion.div>
      </div>
    </footer>
  );
}
