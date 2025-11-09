"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ComparisonTable() {
  const t = useTranslations("product.comparison");
  const features = [
    {
      feature: t("features.time"),
      traditional: t("values.time.traditional"),
      digital: t("values.time.digital"),
      highlight: true,
    },
    {
      feature: t("features.availability"),
      traditional: t("values.availability.traditional"),
      digital: t("values.availability.digital"),
      highlight: true,
    },
    {
      feature: t("features.costs"),
      traditional: t("values.costs.traditional"),
      digital: t("values.costs.digital"),
      highlight: false,
    },
    {
      feature: t("features.errors"),
      traditional: t("values.errors.traditional"),
      digital: t("values.errors.digital"),
      highlight: false,
    },
    {
      feature: t("features.languages"),
      traditional: t("values.languages.traditional"),
      digital: t("values.languages.digital"),
      highlight: false,
    },
    {
      feature: t("features.pms"),
      traditional: "false",
      digital: "true",
      highlight: false,
    },
    {
      feature: t("features.covid"),
      traditional: "false",
      digital: "true",
      highlight: false,
    },
  ];

  return (
    <section
      id="comparison"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6  scroll-mt-16 min-h-[80svh]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black px-4">
            {t("subtitle")}
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
              <tr className="bg-white">
                <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-bold text-black border-b-2 border-orange-500">
                  Karakteristika
                </th>
                <th className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-black bg-orange-100 border-b-2 border-orange-500">
                  {t("traditional")}
                </th>
                <th className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-white bg-orange-500 border-b-2 border-orange-500">
                  {t("digital")}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-orange-200 ${
                    item.highlight ? "bg-orange-50" : ""
                  }`}
                >
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base font-medium text-black">
                    {item.feature}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base text-black">
                    {item.traditional === "true" ? (
                      <Check className="w-5 h-5 text-orange-500 mx-auto" />
                    ) : item.traditional === "false" ? (
                      <X className="w-5 h-5 text-black mx-auto" />
                    ) : (
                      item.traditional
                    )}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-semibold text-orange-600">
                    {item.digital === "true" ? (
                      <Check className="w-5 h-5 text-orange-500 mx-auto" />
                    ) : item.digital === "false" ? (
                      <X className="w-5 h-5 text-black mx-auto" />
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
                item.highlight
                  ? "border-2 border-orange-500"
                  : "border border-orange-200"
              }`}
            >
              <h3 className="font-bold text-black mb-3 text-sm">
                {item.feature}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-orange-100 rounded-lg">
                  <div className="text-xs text-black mb-1">{t("traditional")}</div>
                  <div className="text-sm font-medium text-black">
                    {item.traditional === "true" ? (
                      <Check className="w-5 h-5 text-orange-500 mx-auto" />
                    ) : item.traditional === "false" ? (
                      <X className="w-5 h-5 text-black mx-auto" />
                    ) : (
                      item.traditional
                    )}
                  </div>
                </div>
                <div className="text-center p-3 bg-orange-500 rounded-lg">
                  <div className="text-xs text-white mb-1">{t("digital")}</div>
                  <div className="text-sm font-bold text-white">
                    {item.digital === "true" ? (
                      <Check className="w-5 h-5 text-white mx-auto" />
                    ) : item.digital === "false" ? (
                      <X className="w-5 h-5 text-white mx-auto" />
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
