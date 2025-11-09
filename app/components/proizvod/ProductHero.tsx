"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock, Download, Calendar } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * 🎯 Product Hero Component - ISPRAVLJEN
 *
 * ISPRAVKA:
 * ✅ Thumbnail kontrole su ISPOD glavne slike (ne preko nje!)
 * ✅ Buttoni povezani sa modal-ima i Calendly
 * ✅ Fullscreen section (min-h-screen)
 * ✅ Responzivnost na svim ekranima
 */

interface ProductHeroProps {
  onOpenBrochure?: () => void;
}

export default function ProductHero({ onOpenBrochure }: ProductHeroProps) {
  const t = useTranslations("product.hero");
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/images/masina9.jpg",
    "/images/masina1.jpg",
    "/images/masina8.jpg",
  ];

  const keyFeatures = [
    { icon: <Zap className="w-5 h-5" />, text: t("features.speed") },
    {
      icon: <Shield className="w-5 h-5" />,
      text: t("features.security"),
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: t("features.availability"),
    },
  ];

  const handleBrochureClick = () => {
    if (onOpenBrochure) {
      onOpenBrochure();
    }
  };

  const handleDemoClick = () => {
    window.open(
      "https://calendly.com/boris-inovatechit/digital-reception-intro",
      "_blank"
    );
  };

  return (
    <section
      id="product-hero"
      className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-white to-slate-50 scroll-mt-16 overflow-hidden"
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

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-6"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              {t("badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    {feature.icon}
                  </div>
                  <span className="text-slate-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleBrochureClick}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {t("ctaDownload")}
              </button>
              <button
                onClick={handleDemoClick}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-bold transition border-2 border-slate-200 hover:border-orange-500 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {t("ctaDemo")}
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center gap-3 text-sm text-slate-600"
            >
              {/* <Check className="w-5 h-5 text-green-500" />
              <span>Više od 20+ hotela koristi našu digitalnu recepciju</span> */}
            </motion.div>
          </motion.div>

          {/* Right - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images[selectedImage]}
                alt="Digitalna Recepcija"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Stats - na slici */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 right-4 bg-white rounded-xl shadow-xl p-3"
              >
                <div className="text-2xl font-bold text-orange-500">24/7</div>
                <div className="text-xs text-slate-600">{t("stats.availability")}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-4 left-4 bg-white rounded-xl shadow-xl p-3"
              >
                <div className="text-2xl font-bold text-orange-500">30s</div>
                <div className="text-xs text-slate-600">{t("stats.checkin")}</div>
              </motion.div>
            </div>

            {/* 🎯 Thumbnail Selector - ISPOD glavne slike! */}
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    relative flex-1 aspect-video rounded-lg overflow-hidden
                    transition-all duration-300
                    ${
                      selectedImage === index
                        ? "ring-4 ring-orange-500 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }
                  `}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
