"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const testimonials = [
    {
      id: 1,
      name: "Marko Petrović",
      role: "Vlasnik Hotela",
      company: "Hotel Beograd",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      rating: 5,
      text: "Digitalna recepcija je izmenila u potpunosti naš način poslovanja. Gosti su oduševljeni brzinom check-ina, a mi smo smanjili troškove osoblja za 40%. Investicija se isplatila za 6 meseci!",
      stats: {
        metric: "40%",
        label: "Ušteda troškova",
      },
    },
    {
      id: 2,
      name: "Ana Jovanović",
      role: "Menadžer Recepcije",
      company: "Apartmani Novi Sad",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
      text: "Neverovatno kako tehnologija može da olakša posao. Sada možemo da primamo goste 24/7 bez dodatnog osoblja. Sistem je intuitivan i naši stariji gosti nemaju problem sa njim.",
      stats: {
        metric: "24/7",
        label: "Dostupnost",
      },
    },
    {
      id: 3,
      name: "Đorđe Nikolić",
      role: "Direktor",
      company: "Resort Zlatibor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
      text: "Integracija sa našim PMS sistemom prošla je besprekorno. Podaci se automatski sinhronizuju, a eTurista prijava nam je olakšala život. Preporučujem svima!",
      stats: {
        metric: "5 min",
        label: "Instalacija",
      },
    },
    {
      id: 4,
      name: "Jelena Stojanović",
      role: "Vlasnica",
      company: "Boutique Hotel Skadarlija",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
      text: "Gosti često komentarišu kako im se sviđa moderan pristup. Mladi gosti to očekuju, a stariji brzo nauče. Povećali smo prosečnu ocenu na Booking.com za 0.5 poena!",
      stats: {
        metric: "+0.5",
        label: "Rating boost",
      },
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
            Šta Kažu Naši Klijenti
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Više od 20+ hotela i apartmana koristi našu digitalnu recepciju
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
              <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-6">
                <span className="text-orange-600 font-bold text-xl">
                  {testimonial.stats.metric}
                </span>
                <span className="text-orange-600 text-sm ml-2">
                  {testimonial.stats.label}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
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
