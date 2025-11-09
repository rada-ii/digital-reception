"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  CreditCard,
  Wifi,
  Printer,
  Lock,
  Zap,
  Camera,
  HardDrive,
} from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Product Specifications Component
 *
 * Lokacija: /app/components/product/ProductSpecs.tsx
 *
 * ŠTA RADI:
 * - Detaljne tehničke specifikacije
 * - Grid layout sa ikonama
 * - Hover animacije
 *
 * KORISTI SE U: /proizvod stranica
 */

export default function ProductSpecs() {
  const t = useTranslations("product.specs");

  const specs = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t("touchscreen.title"),
      specs: [
        t("touchscreen.spec1"),
        t("touchscreen.spec2"),
        t("touchscreen.spec3"),
        t("touchscreen.spec4"),
      ],
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t("payment.title"),
      specs: [
        t("payment.spec1"),
        t("payment.spec2"),
        t("payment.spec3"),
        t("payment.spec4"),
      ],
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: t("printer.title"),
      specs: [
        t("printer.spec1"),
        t("printer.spec2"),
        t("printer.spec3"),
        t("printer.spec4"),
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("keycard.title"),
      specs: [
        t("keycard.spec1"),
        t("keycard.spec2"),
        t("keycard.spec3"),
        t("keycard.spec4"),
      ],
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: t("camera.title"),
      specs: [
        t("camera.spec1"),
        t("camera.spec2"),
        t("camera.spec3"),
        t("camera.spec4"),
      ],
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: t("hardware.title"),
      specs: [
        t("hardware.spec1"),
        t("hardware.spec2"),
        t("hardware.spec3"),
        t("hardware.spec4"),
      ],
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: t("connectivity.title"),
      specs: [
        t("connectivity.spec1"),
        t("connectivity.spec2"),
        t("connectivity.spec3"),
        t("connectivity.spec4"),
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("power.title"),
      specs: [
        t("power.spec1"),
        t("power.spec2"),
        t("power.spec3"),
        t("power.spec4"),
      ],
    },
  ];

  const software = [
    `✓ ${t("software.features.f1")}`,
    `✓ ${t("software.features.f2")}`,
    `✓ ${t("software.features.f3")}`,
    `✓ ${t("software.features.f4")}`,
    `✓ ${t("software.features.f5")}`,
    `✓ ${t("software.features.f6")}`,
    `✓ ${t("software.features.f7")}`,
    `✓ ${t("software.features.f8")}`,
  ];

  return (
    <section
      id="specs"
      className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto min-h-[70vh]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Hardware Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                {spec.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {spec.title}
              </h3>

              {/* Specs List */}
              <ul className="space-y-2">
                {spec.specs.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex items-start gap-2"
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Software Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {t("software.title")}
              </h3>
              <p className="text-slate-600 mb-6">
                {t("software.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {software.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <span className="text-orange-500 font-bold">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dimensions Visualization */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="font-bold text-slate-900 mb-6 text-center">
                Dimenzije
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">{t("dimensions.height").split(": ")[0]}:</span>
                  <span className="font-bold text-slate-900">{t("dimensions.height").split(": ")[1]}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">{t("dimensions.width").split(": ")[0]}:</span>
                  <span className="font-bold text-slate-900">{t("dimensions.width").split(": ")[1]}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">{t("dimensions.depth").split(": ")[0]}:</span>
                  <span className="font-bold text-slate-900">{t("dimensions.depth").split(": ")[1]}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">{t("dimensions.weight").split(": ")[0]}:</span>
                  <span className="font-bold text-slate-900">{t("dimensions.weight").split(": ")[1]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t("dimensions.power").split(": ")[0]}:</span>
                  <span className="font-bold text-slate-900">{t("dimensions.power").split(": ")[1]}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg text-center">
                <p className="text-sm text-orange-800">
                  <strong>{t("dimensions.warranty").split(": ")[0]}:</strong> {t("dimensions.warranty").split(": ")[1]}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
