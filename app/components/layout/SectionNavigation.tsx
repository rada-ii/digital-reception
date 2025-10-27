"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 🎯 POJEDNOSTAVLJENA Section Navigation - Samo UP/DOWN
 *
 * PROMENE:
 * ✅ Uklonjene tačkice (section indicators)
 * ✅ Samo 2 buttona: UP i DOWN
 * ✅ Čistiji UI
 * ✅ Lakša upotreba na mobilnim uređajima
 * ✅ Smooth scroll animacije
 */

export default function SectionNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Prikaži buttone nakon 100px scrolla
      setIsVisible(scrollY > 100);

      // Proveri da li možemo ići gore/dole
      setCanScrollUp(scrollY > 100);
      setCanScrollDown(scrollY < documentHeight - windowHeight - 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 md:right-6 bottom-20 md:bottom-24 z-40 flex flex-col gap-3"
        >
          {/* UP Button */}
          <motion.button
            onClick={scrollUp}
            disabled={!canScrollUp}
            whileHover={{ scale: canScrollUp ? 1.1 : 1 }}
            whileTap={{ scale: canScrollUp ? 0.9 : 1 }}
            className={`
              p-3 md:p-4 rounded-full shadow-lg transition-all duration-300
              ${
                canScrollUp
                  ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer hover:shadow-2xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-40"
              }
            `}
            aria-label="Scroll up"
            title="Scroll gore"
          >
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </motion.button>

          {/* DOWN Button */}
          <motion.button
            onClick={scrollDown}
            disabled={!canScrollDown}
            whileHover={{ scale: canScrollDown ? 1.1 : 1 }}
            whileTap={{ scale: canScrollDown ? 0.9 : 1 }}
            className={`
              p-3 md:p-4 rounded-full shadow-lg transition-all duration-300
              ${
                canScrollDown
                  ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer hover:shadow-2xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-40"
              }
            `}
            aria-label="Scroll down"
            title="Scroll dole"
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
