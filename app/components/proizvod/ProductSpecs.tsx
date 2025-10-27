"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  CreditCard,
  Wifi,
  Printer,
  Lock,
  Zap,
  Camera,
  HardDrive,
} from "lucide-react";

/**
 * Product Specifications Component
 *
 * Lokacija: /app/components/product/ProductSpecs.tsx
 *
 * ŠTA RADI:
 * - Detaljne tehničke specifikacije
 * - Grid layout sa ikonama
 * - Hover animacije
 *
 * KORISTI SE U: /proizvod stranica
 */

export default function ProductSpecs() {
  const specs = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Touchscreen Displej",
      specs: [
        '21.5" Full HD (1920x1080)',
        "Kapacitivni multi-touch",
        "Gorilla Glass zaštita",
        "Anti-glare premaz",
      ],
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Sistem Plaćanja",
      specs: [
        "EMV Chip & PIN",
        "Contactless (NFC)",
        "Apple Pay / Google Pay",
        "PCI DSS compliant",
      ],
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Štampač",
      specs: [
        "Termalni štampač",
        "Auto-cut funkcija",
        "Računi i keycards",
        "QR kod podrška",
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Keycard Sistem",
      specs: [
        "RFID tehnologija",
        "Magnetske kartice",
        "Auto-encoding",
        "Dispenser za 100 kartica",
      ],
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Kamera & Scanner",
      specs: [
        "5MP kamera za dokumente",
        "QR/Barcode scanner",
        "OCR tehnologija",
        "Auto-focus",
      ],
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: "Hardware",
      specs: ["Intel i5 procesor", "8GB RAM", "256GB SSD", "Fanless dizajn"],
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Povezivanje",
      specs: [
        "WiFi 6 (802.11ax)",
        "Gigabit Ethernet",
        "4G/LTE backup (opciono)",
        "Bluetooth 5.0",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Napajanje & Sigurnost",
      specs: [
        "24/7 rad",
        "UPS backup (opciono)",
        "Metal kućište",
        "Anti-vandal dizajn",
      ],
    },
  ];

  const software = [
    "✓ PMS Integracija (Opera, Cloudbeds, Mews)",
    "✓ eTurista automatska prijava",
    "✓ Multi-language podrška (10+ jezika)",
    "✓ Real-time reporting dashboard",
    "✓ Email & SMS notifikacije",
    "✓ Cloud backup & sync",
    "✓ Remote management",
    "✓ Automatic updates",
  ];

  return (
    <section
      id="specs"
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Tehničke Specifikacije
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Premium komponente za maksimalnu pouzdanost i performanse
          </p>
        </motion.div>

        {/* Hardware Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                {spec.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {spec.title}
              </h3>

              {/* Specs List */}
              <ul className="space-y-2">
                {spec.specs.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex items-start gap-2"
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Software Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Softverske Mogućnosti
              </h3>
              <p className="text-slate-600 mb-6">
                Napredni softver dizajniran za maksimalnu fleksibilnost i
                jednostavnost korišćenja.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {software.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <span className="text-green-500 font-bold">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dimensions Visualization */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="font-bold text-slate-900 mb-6 text-center">
                Dimenzije
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">Visina:</span>
                  <span className="font-bold text-slate-900">150 cm</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">Širina:</span>
                  <span className="font-bold text-slate-900">60 cm</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">Dubina:</span>
                  <span className="font-bold text-slate-900">40 cm</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-slate-600">Težina:</span>
                  <span className="font-bold text-slate-900">45 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Napajanje:</span>
                  <span className="font-bold text-slate-900">220V AC</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg text-center">
                <p className="text-sm text-orange-800">
                  <strong>Garancija:</strong> 2 godine punog servisa
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
