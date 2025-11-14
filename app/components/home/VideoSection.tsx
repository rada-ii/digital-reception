"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("video");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoUrl =
    "https://www.youtube.com/embed/YP10mh0BNZM?si=ES-3ZP8jvrnlH9sZ";
  const thumbnailUrl = "/images/masina-video.jpg";

  const overlayParts = t("overlay").split(" - ");

  return (
    <section
      id="video"
      className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 scroll-mt-16 sm:min-h-[70svh]"
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
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            {t("subtitle")}
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
              <div className="w-15 h-15 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl group-hover:bg-orange-600 transition-colors">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
              </div>
            </motion.div>

            {/* Text Overlay */}
            <div className="absolute bottom-2 left-14 right-8 text-white z-10">
              <h3 className="text-xl sm:text-2xl font-bold ">
                {overlayParts[0]}
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                {overlayParts[1]}
              </p>
            </div>
          </div>

          {/* Stats Below Video */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8">
            {[
              { number: "30s", label: t("stats.speed") },
              { number: "24/7", label: t("stats.availability") },
              { number: "100%", label: t("stats.security") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-xl shadow-md"
              >
                <div className="text-xl sm:text-24xl font-bold text-orange-500 mb-2">
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
