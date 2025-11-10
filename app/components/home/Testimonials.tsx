"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Testimonials Component
 *
 * Lokacija: /app/components/home/Testimonials.tsx
 *
 * ŠTA RADI:
 * - Prikazuje recenzije i iskustva klijenata
 * - Social proof sa zvezdama i slikama
 * - Slider layout sa scroll animacijom
 *
 * KORISTI SE U: Homepage (/)
 */

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      id: 1,
      name: t("reviews.marko.name"),
      role: t("reviews.marko.role"),
      company: t("reviews.marko.company"),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      rating: 5,
      text: t("reviews.marko.text"),
      stat: t("reviews.marko.stat"),
    },
    {
      id: 2,
      name: t("reviews.ana.name"),
      role: t("reviews.ana.role"),
      company: t("reviews.ana.company"),
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
      text: t("reviews.ana.text"),
      stat: t("reviews.ana.stat"),
    },
    {
      id: 3,
      name: t("reviews.djordje.name"),
      role: t("reviews.djordje.role"),
      company: t("reviews.djordje.company"),
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
      text: t("reviews.djordje.text"),
      stat: t("reviews.djordje.stat"),
    },
    {
      id: 4,
      name: t("reviews.jelena.name"),
      role: t("reviews.jelena.role"),
      company: t("reviews.jelena.company"),
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
      text: t("reviews.jelena.text"),
      stat: t("reviews.jelena.stat"),
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-10 md:py-12 px-4 sm:px-6  scroll-mt-16 min-h-[80svh]"
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-orange-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6 text-base sm:text-lg leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Stats Badge */}
              <div className="inline px-4 py-2 bg-orange-100 rounded-full mb-6">
                <span className="text-orange-600 font-semibold text-base">
                  {testimonial.stat}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mt-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base sm:text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { number: "50+", label: "Hotela" },
            { number: "10,000+", label: "Check-inova" },
            { number: "99.9%", label: "Uptime" },
            { number: "4.9/5", label: "Prosečna ocena" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
