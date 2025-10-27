"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ComparisonTable() {
  const features = [
    {
      feature: "Vreme check-in-a",
      traditional: "5-15 minuta",
      digital: "30 sekundi",
      highlight: true,
    },
    {
      feature: "Dostupnost",
      traditional: "Radno vreme",
      digital: "24/7",
      highlight: true,
    },
    {
      feature: "Troškovi osoblja",
      traditional: "Visoki",
      digital: "Minimalni",
      highlight: false,
    },
    {
      feature: "Greške u podacima",
      traditional: "Česte",
      digital: "Retke",
      highlight: false,
    },
    {
      feature: "Višejezična podrška",
      traditional: "Ograničena",
      digital: "Neograničena",
      highlight: false,
    },
    {
      feature: "Integracija sa PMS",
      traditional: "false",
      digital: "true",
      highlight: false,
    },
    {
      feature: "COVID bezbednost",
      traditional: "false",
      digital: "true",
      highlight: false,
    },
  ];

  return (
    <section
      id="comparison"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6  scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            Tradicionalna vs. Digitalna Recepcija
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4">
            Vidite razliku
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden sm:block bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-bold text-slate-900">
                  Karakteristika
                </th>
                <th className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-slate-600 bg-slate-300">
                  Tradicionalna
                </th>
                <th className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-orange-600 bg-orange-200">
                  Digitalna Recepcija
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-slate-100 ${
                    item.highlight ? "bg-orange-50/30" : ""
                  }`}
                >
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base font-medium text-slate-900">
                    {item.feature}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base text-slate-600">
                    {item.traditional === "true" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : item.traditional === "false" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      item.traditional
                    )}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-semibold text-orange-600">
                    {item.digital === "true" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : item.digital === "false" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      item.digital
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="sm:hidden space-y-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`bg-white rounded-xl shadow-lg p-4 ${
                item.highlight ? "border-2 border-orange-200" : ""
              }`}
            >
              <h3 className="font-bold text-slate-900 mb-3 text-sm">
                {item.feature}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs text-slate-500 mb-1">
                    Tradicionalna
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    {item.traditional === "true" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : item.traditional === "false" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      item.traditional
                    )}
                  </div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-xs text-orange-600 mb-1">Digitalna</div>
                  <div className="text-sm font-bold text-orange-600">
                    {item.digital === "true" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : item.digital === "false" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      item.digital
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
