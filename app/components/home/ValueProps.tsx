"use client";

import { motion } from "framer-motion";
import { Zap, DollarSign, Clock, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * 🎯 Value Props Section - FULLSCREEN
 *
 * PROMENE:
 * ✅ Fullscreen (min-h-screen)
 * ✅ Različita pozadina (beige/orange-50)
 * ✅ Responzivno na svim ekranima
 */

export default function ValueProps() {
  const t = useTranslations("valueProps");

  const valueProps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("speed.title"),
      description: t("speed.feature"),
      details: t("speed.description"),
      color: "orange",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t("savings.title"),
      description: t("savings.feature"),
      details: t("savings.description"),
      color: "black",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("availability.title"),
      description: t("availability.feature"),
      details: t("availability.description"),
      color: "orangeLight",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("security.title"),
      description: t("security.feature"),
      details: t("security.description"),
      color: "blackLight",
    },
  ];

  const colorMap = {
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-500",
      hover: "hover:bg-orange-500",
    },
    black: {
      bg: "bg-slate-900",
      text: "text-white",
      hover: "hover:bg-slate-900",
    },
    orangeLight: {
      bg: "bg-orange-500",
      text: "text-white",
      hover: "hover:bg-orange-500",
    },
    blackLight: {
      bg: "bg-slate-700",
      text: "text-white",
      hover: "hover:bg-slate-700",
    },
  };

  return (
    <section
      id="value-props"
      className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-slate-50 scroll-mt-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(249, 115, 22) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl ${
                  colorMap[prop.color as keyof typeof colorMap].bg
                } ${
                  colorMap[prop.color as keyof typeof colorMap].text
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {prop.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-slate-700 font-semibold mb-2">
                {prop.description}
              </p>
              <p className="text-sm text-slate-600">{prop.details}</p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl ${
                  colorMap[prop.color as keyof typeof colorMap].hover
                } opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
