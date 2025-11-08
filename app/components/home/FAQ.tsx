"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Zašto je self check-in kiosk bolji od mobilne aplikacije?",
      answer:
        "Kiosk eliminiše sve prepreke za gosta - nema instalacije app-a, registracije ili komplikacija sa roamingom. Strani gosti često nemaju lokalni broj niti naviku da instaliraju aplikacije. Kiosk je uvek spreman, intuitivan i radi na svim jezicima bez obzira na tip telefona ili digitalnu pismenost gosta. Dodatno, kiosk direktno komunicira sa PMS-om, fiskalnim printerom i encoderom za sobne kartice, što mobilne aplikacije ne mogu. Fizička prisutnost elegantnog kioska u lobby-ju stvara utisak modernog hotela i odmah signalizira efikasnost.",
    },
    {
      question: "Koliko košta i koliko brzo se isplati investicija?",
      answer:
        "Pozovite nas ili zakazite demo sastanak za tacne cene koje se formiraju prem vasim potreba i paketima usluga. U cenu je uključeno: touchscreen kiosk, instalacija, PMS integracija, eTurista automatska prijava, 12 meseci podrške, besplatni update-i i obuka osoblja. Investicija se vraća za 6-12 meseci kroz smanjenje troškova osoblja (do 60%), eliminaciju grešaka pri check-in-u, povećanje zadovoljstva gostiju i mogućnost rada 24/7 bez dodatnih troškova. Hotel sa 50+ soba uštedi minimum 2.000€ mesečno.",
    },
    {
      question: "Kako izgleda proces check-in-a za gosta?",
      answer:
        "Proces je jednostavan i traje 30-60 sekundi: 1) Gost skenira QR kod ili unosi broj rezervacije, 2) Sistem automatski učitava podatke iz PMS-a, 3) Gost verifikuje podatke i potpisuje na ekranu, 4) Plaćanje karticom (opciono), 5) Automatski check-in u eTurista sistem, 6) Izdavanje ključa kartice. Sve je intuitivno sa jasnim instrukcijama na ekranu. Više kioska znači paralelno prijavljivanje više gostiju - nema gužve ni čekanja na recepciji.",
    },
    {
      question: "Da li se integriše sa PMS sistemom?",
      answer:
        "Da! Digitalna recepcija se integriše sa većinom popularnih PMS sistema kao što su Opera, Cloudbeds, Mews, Protel, Fidelio, HotelTime i mnogim drugim. Ako vaš PMS ima API, možemo ga integrisati. Kiosk direktno komunicira sa vašim sistemom - automatski preuzima rezervacije, ažurira status sobe (npr. 'checked-in') i sinhronizuje sve podatke bez potrebe za ručnim unosom. Naš tim će vam pomoći u celom procesu integracije i testiranja.",
    },
    {
      question: "Koliko traje instalacija digitalne recepcije?",
      answer:
        "Instalacija traje između 2-4 sata, zavisno od kompleksnosti integracije sa postojećim sistemima. Naš tim će se pobrinuti da sve bude podešeno, testirano i obučiće vaše osoblje za korišćenje. U cenu je uključena kompletna instalacija, podešavanje, integracija sa PMS-om i detaljan trening za vaš tim. Kiosk će biti spreman za rad istog dana, a mi ostajemo dostupni za bilo kakva pitanja.",
    },
    {
      question: "Da li mogu testirati pre kupovine?",
      answer:
        "Apsolutno! Nudimo besplatnu demo prezentaciju gde možete videti sistem uživo i isprobati sve funkcije. Takođe možete zatražiti trial period od 14 dana gde možete testirati kiosk u vašem hotelu bez obaveze kupovine. Za trial period je potreban refundable depozit. Mnogi naši klijenti su doneli odluku tek nakon što su videli reakciju svojih gostiju - koji su oduševljeni brzinom i jednostavnošću. Zakažite demo klikom na dugme gore!",
    },
    {
      question: "Kakva je tehnička podrška?",
      answer:
        "Nudimo 24/7 tehničku podršku putem telefona, emaila i remote desktop-a. U okviru paketa dobijate 12 meseci besplatne podrške. Prosečno vreme odgovora je ispod 30 minuta. Za hitne probleme garantujemo odgovor u roku od 15 minuta. Nakon isteka prvog perioda, podrška se može produžiti po preferencijalnim cenama. Većina problema se rešava daljinski, a za fizičke intervencije imamo servisne tehničare širom regiona.",
    },
    {
      question: "Šta ako gost ne želi da koristi kiosk?",
      answer:
        "Kiosk ne zamenjuje recepciju - već je dopunjava! Gosti koji preferiraju ljudski kontakt i dalje mogu da se prijave na recepciji klasičnim putem. U praksi, 85-90% gostiju prihvata kiosk nakon prvog korišćenja jer je brži i jednostavniji. Stariji gosti i oni koji nisu tehnički vični mogu dobiti asistenciju od recepcije. Kiosk je tu da eliminiše gužve tokom peak sati i omogući vašem osoblju da se fokusira na kompleksnije zadatke i personalizovanu uslugu.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 scroll-mt-16 min-h-[70svh]"
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
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-orange-50 px-6 py-4 rounded-xl border border-orange-200">
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
