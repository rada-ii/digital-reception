"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Video Section Component
 *
 * Lokacija: /app/components/home/VideoSection.tsx
 *
 * ŠTA RADI:
 * - Prikazuje video demo digitalnog kioska
 * - Modal sa video playerom
 * - Thumbnail sa play buttonom
 * - Podržava YouTube/Vimeo ili lokalni video
 *
 * KORISTI SE U: Homepage (/)
 */

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // NAPOMENA: Zameni sa pravim video linkom!
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Primer
  const thumbnailUrl =
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=675&fit=crop";

  return (
    <section
      id="video"
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pogledajte Kako Funkcioniše
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            2-minutni video koji pokazuje kompletnu funkcionalnost digitalne
            recepcije
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Thumbnail */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group aspect-video"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent group-hover:bg-slate-900/60 transition-all duration-300" />

            {/* Play Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-xl group-hover:bg-orange-600 transition-colors">
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" />
              </div>
            </motion.div>

            {/* Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Check-in za 30 sekundi
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Kompletna demonstracija sistema
              </p>
            </div>
          </div>

          {/* Stats Below Video */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8">
            {[
              { number: "30s", label: "Brzi Check-in" },
              { number: "24/7", label: "Dostupnost" },
              { number: "100%", label: "Automatizovan" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-xl shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-orange-500 transition"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Player */}
              <iframe
                src={`${videoUrl}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
