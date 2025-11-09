"use client";

import { Check, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PackagesTeaser() {
  const t = useTranslations("packages");

  const packages = [
    {
      name: t("basic.name"),
      features: [
        t("basic.features.payment"),
        t("basic.features.email"),
        t("basic.features.locks"),
        t("basic.features.qr"),
      ],
    },
    {
      name: t("standard.name"),
      popular: true,
      features: [
        t("standard.features.all"),
        t("standard.features.eturista"),
        t("standard.features.cash"),
        t("standard.features.pms"),
      ],
    },
    {
      name: t("pro.name"),
      features: [
        t("pro.features.all"),
        t("pro.features.app"),
        t("pro.features.sms"),
        t("pro.features.custom"),
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-sm md:max-w-none mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg relative border-2 ${
                pkg.popular
                  ? "border-orange-500 lg:scale-105"
                  : "border-slate-100"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                  {t("popularBadge")}
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {pkg.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-2">
                  {pkg.price}
                </div>
                <p className="text-xs text-slate-500">{t("priceNote")}</p>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-xs sm:text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/proizvod"
                className="w-full block text-center px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition group text-sm sm:text-base"
              >
                {t("ctaButton")}
                <ArrowRight className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
