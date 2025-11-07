"use client";

import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const images = [
    {
      id: 1,
      url: "/images/masina3.jpg",
      title: "Digitalna Recepcija - Front View",
      description: "Moderan touchscreen interfejs za automatski check-in",
      alt: "Digitalna recepcija sa velikim touchscreen ekranom za hotel check-in",
    },
    {
      id: 2,
      url: "/images/masina6.jpg",
      title: "Check-in Proces",
      description: "Intuitivan i brz proces prijave gostiju",
      alt: "Gost koristi digitalni kiosk za brzi hotel check-in za 30 sekundi",
    },
    {
      id: 3,
      url: "/images/masina2.jpg",
      title: "Plaćanje Karticom",
      description: "Bezbedno i jednostavno kartično plaćanje",
      alt: "Bezkontaktno plaćanje karticom na digitalnoj recepciji hotela",
    },
    {
      id: 4,
      url: "/images/masina5.jpg",
      title: "Hotel Lobby Integracija",
      description: "Savršeno se uklapa u prostor hotela",
      alt: "Moderna digitalna recepcija u luksuznom hotel lobby-ju",
    },
    {
      id: 5,
      url: "/images/masina10.jpg",
      title: "Noćni Rad 24/7",
      description: "Automatska recepcija dostupna non-stop",
      alt: "Hotel digitalna recepcija radi 24/7 bez osoblja",
    },
    {
      id: 6,
      url: "/images/masina13.jpg",
      title: "Moderna Recepcija",
      description: "Dizajn koji impresionira goste",
      alt: "Premium digitalni check-in kiosk sa elegantnim dizajnom",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
      setZoomLevel(1);
    }
  };

  // ZOOM
  const zoomIn = () => setZoomLevel((p) => Math.min(p + 0.25, 3));
  const zoomOut = () => setZoomLevel((p) => Math.max(p - 0.25, 0.5));
  const resetZoom = () => setZoomLevel(1);

  // Keyboard navigation + uredan cleanup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
        case "_":
          zoomOut();
          break;
        case "0":
          resetZoom();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6scroll-mt-16"
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
            Galerija Proizvoda
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Pogledajte našu digitalnu recepciju u različitim hotel okruženjima
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                title={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-xl">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox sa zoomom */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Gornja traka */}
            <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-4 z-20">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                {Math.round(zoomLevel * 100)}%
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Zoom kontrole (levo) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomIn();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition backdrop-blur-sm"
                aria-label="Zoom in"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  resetZoom();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition backdrop-blur-sm"
                aria-label="Reset zoom"
                title="Fit to Screen (0)"
              >
                <Maximize2 className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomOut();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition backdrop-blur-sm"
                aria-label="Zoom out"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Prethodna/Sledeća */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-20 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-10 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-10 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Slika sa zoomom */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ scale: zoomLevel }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full"
                style={{ transformOrigin: "center center" }}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={images[selectedImage].url}
                    alt={images[selectedImage].alt}
                    title={images[selectedImage].title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 mb-2">
                {images[selectedImage].description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/60">
                  Slika {selectedImage + 1} od {images.length}
                </p>
                <p className="text-xs text-white/60">
                  Tasteri: ← → | + − | 0 | ESC
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
