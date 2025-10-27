"use client";

import { ArrowRight, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 🎯 CTA Section - SA ISPRAVKAMA
 *
 * PROMENE:
 * ✅ "Zakažite Demo" button vodi direktno na Calendly
 * ✅ Fullscreen section (min-h-screen)
 * ✅ Različita pozadina (narandžasta) za razlikovanje
 */

export default function CTASection() {
  const handleDemoClick = () => {
    // Otvori Calendly u novom tabu
    window.open(
      "https://calendly.com/aitechwebdev/demo-prezentacija",
      "_blank"
    );
  };

  return (
    <section
      id="cta"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Spremni da Automatizujete Svoju Recepciju?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            Pridružite se hotelima koji su već uštedeli hiljade sati i povećali
            zadovoljstvo gostiju.
          </p>

          <div className="flex flex-col xs:flex-row gap-4 justify-center items-stretch xs:items-center max-w-md xs:max-w-none mx-auto px-4">
            {/* 🎯 ZAKAŽITE DEMO - VODI NA CALENDLY */}
            <motion.button
              onClick={handleDemoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 shadow-xl text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Zakažite Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+381641238587"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white rounded-full font-bold border-2 border-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Pozovite Nas</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
