"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedDots from "../shared/AnimatedDots";
import NewsletterModal from "../shared/NewsletterModal";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const carouselImages = [
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop",
      title: "Digitalna Recepcija",
      subtitle: "Za Moderne Hotele",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=900&fit=crop",
      title: "Automatski Check-in",
      subtitle: "Bez Čekanja",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&h=900&fit=crop",
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const animatedDots = useMemo(() => <AnimatedDots />, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-50 scroll-mt-16"
    >
      {animatedDots}
      <div className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16 md:py-18 lg:py-16 xl:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-slate-900 px-2 leading-tight"
            >
              CHECK-IN ZA{" "}
              <span className="text-orange-500 block sm:inline">
                30 SEKUNDI
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              Najmodernija digitalna recepcija za potpuno automatizovan check-in
              i check-out.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-row xs:flex-row gap-3 sm:gap-4 justify-center items-stretch xs:items-center max-w-md xs:max-w-none mx-auto px-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full xs:w-auto px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg text-sm sm:text-base active:scale-95"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Preuzmite Brošuru</span>
              </button>
              <Link
                href="/kontakt#booking"
                className="w-full xs:w-auto px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white text-slate-900 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-orange-500 text-sm sm:text-base active:scale-95"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Zakažite Demo</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] xl:h-[500px]"
          >
            <div className="relative h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-3 xs:left-4 sm:left-6 md:left-8 lg:left-10 right-3 xs:right-4 sm:right-6 text-white z-20">
                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-xs xs:text-sm sm:text-base md:text-base lg:text-lg text-white/90">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}
              <button
                onClick={prevSlide}
                className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 z-20 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 xs:right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 z-20 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                      index === currentSlide
                        ? "bg-orange-500 w-6 xs:w-7 sm:w-8"
                        : "bg-white/60 w-1.5 xs:w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
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
