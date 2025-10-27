"use client";
import { Scan, CreditCard, Key, DoorOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Scan className="w-8 h-8 sm:w-9 sm:h-9" />,
      title: "SKENIRAJ",
      description: "QR kod ili broj",
    },
    {
      number: "02",
      icon: <CreditCard className="w-8 h-8 sm:w-9 sm:h-9" />,
      title: "PLATI",
      description: "Karticom ili gotovinom",
    },
    {
      number: "03",
      icon: <Key className="w-8 h-8 sm:w-9 sm:h-9" />,
      title: "PREUZMI",
      description: "Automatski keycard",
    },
    {
      number: "04",
      icon: <DoorOpen className="w-8 h-8 sm:w-9 sm:h-9" />,
      title: "UĐI",
      description: "Uživaj!",
    },
  ];

  return (
    <section
      id="howitworks"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            Kako Funkcioniše?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            4 jednostavna koraka
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-orange-200 z-0" />
              )}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-lg border border-slate-100 h-full"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                <div className="flex justify-center text-orange-500 mb-3 sm:mb-4 mt-3">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600">
                  {step.description}
                </p>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-3">
                  <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
