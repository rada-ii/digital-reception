"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const sections = ["hero", "valueprops", "howitworks", "comparison", "packages", "faq", "cta"];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setClickCount(0);
      }
    };

    const findCurrentSection = () => {
      const scrollPosition = window.pageYOffset + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", findCurrentSection);
    findCurrentSection();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", findCurrentSection);
    };
  }, []);

  const scrollToTop = () => {
    if (clickCount === 0) {
      // Prvi klik: scroll to top of current section
      if (currentSection) {
        const element = document.getElementById(currentSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setClickCount(1);
          
          // Reset click count nakon 3 sekunde
          setTimeout(() => {
            setClickCount(0);
          }, 3000);
        }
      }
    } else {
      // Drugi klik: scroll to absolute top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setClickCount(0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label={clickCount === 0 ? "Scroll to section top" : "Scroll to page top"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${clickCount === 1 ? "animate-bounce" : ""}`} />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {clickCount === 0 ? "Na vrh sekcije" : "Na vrh stranice"}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}