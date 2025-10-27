"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Koliko traje instalacija digitalne recepcije?",
      answer:
        "Instalacija digitalne recepcije traje između 2-4 sata, u zavisnosti od kompleksnosti integracije sa postojećim sistemima. Naš tim će se pobrinuti da sve bude podešeno, testirano i obučiće vaše osoblje za korišćenje. U cenu je uključena kompletna instalacija, podešavanje i trening.",
    },
    {
      question: "Koliko košta digitalna recepcija?",
      answer:
        "Cena digitalne recepcije počinje od 999€ za osnovni paket (Standard). Imamo tri paketa: Standard (999€), Professional (1.499€) i Enterprise (1.999€). Svaki paket uključuje hardware, software, instalaciju i 12 meseci podrške. Za detaljan cenovnik kontaktirajte nas za personalizovanu ponudu.",
    },
    {
      question: "Da li se integriše sa PMS sistemom?",
      answer:
        "Da! Digitalna recepcija se integriše sa većinom popularnih PMS sistema kao što su Opera, Cloudbeds, Mews, Protel, Fidelio, HotelTime i mnogim drugim. Ako vaš PMS ima API, možemo ga integrisati. Naš tim će vam pomoći u procesu integracije.",
    },
    {
      question: "Šta je uključeno u cenu?",
      answer:
        "U cenu je uključeno: touchscreen kiosk sa postoljem, kompletna instalacija i podešavanje, integracija sa PMS sistemom, eTurista automatska prijava, 12 meseci tehničke podrške, besplatni software update-i, obuka osoblja, i garancija na hardware. Nema skrivenih troškova!",
    },
    {
      question: "Da li je potrebna internet konekcija?",
      answer:
        "Da, internet konekcija je neophodna za funkcionisanje digitalne recepcije. Preporučujemo stabilnu konekciju brzine minimum 10 Mbps. Sistem ima backup režim koji omogućava offline rad u slučaju problema sa internetom, a podaci se sinhronizuju kada se konekcija vrati.",
    },
    {
      question: "Kakva je tehnička podrška?",
      answer:
        "Nudimo 24/7 tehničku podršku putem telefona, emaila i remote desktop-a. U okviru paketa dobijate 12 meseci besplatne podrške. Prosečno vreme odgovora je ispod 30 minuta. Za hitne probleme garantujemo odgovor u roku od 15 minuta. Nakon isteka prvog perioda, podrška se može produžiti po preferencijalnim cenama.",
    },
    {
      question: "Da li mogu testirati pre kupovine?",
      answer:
        "Apsolutno! Nudimo besplatnu demo prezentaciju gde možete videti sistem uživo. Takođe možete zatražiti trial period od 14 dana gde možete testirati kiosk u vašem hotelu bez obaveze kupovine. Za trial period je potreban refundable depozit. Zakažite demo klikom na dugme gore!",
    },
    {
      question: "Kako izgleda proces check-in-a za gosta?",
      answer:
        "Proces je jednostavan: 1) Gost skenira QR kod ili unosi broj rezervacije, 2) Sistem automatski učitava podatke iz PMS-a, 3) Gost verifikuje podatke i potpisuje, 4) Plaćanje karticom (opciono), 5) Automatski check-in u eTurista sistem, 6) Izdavanje ključa kartice. Sve traje maksimum 30 sekundi!",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4 text-sm sm:text-base">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Često Postavljana Pitanja
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            Imate Pitanja? Odgovorili Smo!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4">
            Odgovori na najčešće postavljana pitanja o Digitalnoj Recepciji
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white border-2 border-slate-100 rounded-xl sm:rounded-2xl overflow-hidden hover:border-orange-300 transition-colors shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 text-sm sm:text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 border-t border-slate-100">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-orange-50 px-6 py-4 rounded-xl border border-orange-200">
            <p className="text-slate-700 font-medium text-sm sm:text-base">
              Nemate odgovor na vaše pitanje?
            </p>

            <a
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
            >
              Kontaktirajte Nas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
