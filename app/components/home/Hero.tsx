"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Mail,
  TrendingUp,
  Users,
  Shield,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedDots from "../shared/AnimatedDots";
import NewsletterModal from "../shared/NewsletterModal";

/**
 * 🎯 Hero Section - KOMPAKTNA VERZIJA!
 *
 * ✅ "Šta ako je moguće..." kao pitanje
 * ✅ "CHECK-IN ZA 30s" kao odgovor
 * ✅ Sve centrirano
 * ✅ Kompaktan layout - sve stane na ekran
 * ✅ KOMPAKTAN STATS BANNER - duplo manji, jedan banner!
 */

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const carouselImages = [
    {
      image: "/images/masina10.jpg",
      title: "Digitalna Recepcija",
      subtitle: "Za Moderne Hotele",
    },
    {
      image: "/images/masina13.jpg",
      title: "Automatski Check-in",
      subtitle: "Bez Čekanja",
    },
    {
      image: "/images/masina12.jpg",
      title: "24/7 Dostupnost",
      subtitle: "Uvek Dostupno",
    },
    {
      image: "/images/masina9.jpg",
      title: "24/7 Dostupnost",
      subtitle: "Uvek Dostupno",
    },
    {
      image: "/images/masinacentar.jpg",
      title: "24/7 Dostupnost",
      subtitle: "Uvek Dostupno",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const animatedDots = useMemo(() => <AnimatedDots />, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-50 scroll-mt-16"
    >
      {animatedDots}
      <div className="relative min-h-[100svh] flex flex-col justify-center py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pitanje - "Šta ako je moguće..." */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-3 sm:mb-4 font-medium"
            >
              Šta ako je moguće ...
            </motion.p>

            {/* Glavni Odgovor - "CHECK-IN ZA 30s" */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-slate-900 leading-none tracking-tight"
            >
              <span className="inline-block">CHECK-IN ZA</span>{" "}
              <span className="text-orange-500 inline-block relative">
                30s
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-orange-500/30"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,7 Q50,0 100,7 T200,7"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Opis sa Highlight-ovanim Ključnim Rečima */}
            <motion.div
              variants={itemVariants}
              className="max-w-5xl mx-auto mb-5 sm:mb-6"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed px-2 sm:px-4">
                Digitalna recepcija za sve hotele i apartmane koji razmišljaju
                da{" "}
                <span className="font-bold text-slate-900 bg-orange-100 px-1.5 py-0.5 rounded">
                  potpuno automatizuju
                </span>{" "}
                check-in i check-out, ali imaju neke nedoumice. Zato što vaši
                gosti zaslužuju{" "}
                <span className="font-bold text-orange-600">brz odziv</span> čak
                i van sezone ili u trećoj smeni{" "}
                <span className="text-slate-600">
                  (a Vi zaslužujete{" "}
                  <span className="font-bold text-orange-600 underline decoration-orange-300 decoration-2">
                    još bolju ocenu na Booking-u
                  </span>
                  )
                </span>
              </p>
            </motion.div>

            {/* CTA Buttons - Kompaktni */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row xs:flex-row gap-2.5 sm:gap-3 justify-center items-stretch xs:items-center max-w-md xs:max-w-none mx-auto px-2 mb-6 sm:mb-8"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full xs:w-auto px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base active:scale-95"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Preuzmite Brošuru</span>
              </button>
              <Link
                href="/kontakt#booking"
                className="w-full xs:w-auto px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white text-slate-900 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50 text-sm sm:text-base active:scale-95"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Zakažite Demo</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel - Kompaktan */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 sm:mb-8 md:mb-10"
          >
            <div className="relative h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              {carouselImages.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-6 left-3 xs:left-4 sm:left-5 md:left-6 right-3 xs:right-4 sm:right-5 text-white z-20">
                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-2 drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/95 drop-shadow-md">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons - Manji */}
              <button
                onClick={prevSlide}
                className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/55 hover:bg-white text-slate-800 p-1.5 xs:p-2 sm:p-2.5 rounded-full transition-all duration-300 z-20 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 xs:right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/55 hover:bg-white text-slate-800 p-1.5 xs:p-2 sm:p-2.5 rounded-full transition-all duration-300 z-20 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                      index === currentSlide
                        ? "bg-orange-500 w-6 xs:w-8 sm:w-10 shadow-lg"
                        : "bg-white/70 hover:bg-white/90 w-1.5 xs:w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats - KOMPAKTAN BANNER! */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            <div className="px-4 sm:px-6 py-2 sm:py-3">
              <div className="flex flex-wrap items-center justify-between gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 text-center">
                {[
                  {
                    icon: <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                    number: "50+",
                    label: "Hotela",
                  },
                  {
                    icon: <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                    number: "10,000+",
                    label: "Check-inova",
                  },
                  {
                    icon: <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                    number: "99.9%",
                    label: "Uptime",
                  },
                  {
                    icon: <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
                    number: "4.9/5",
                    label: "Ocena",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2"
                  >
                    <div className="flex items-center justify-center text-orange-500">
                      {stat.icon}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-orange-500">
                        {stat.number}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-600 font-medium">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <NewsletterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
