"use client";

import { useState } from "react";
import { ChevronDown, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Koje su tehničke specifikacije kioska?",
      answer:
        "Kiosk dolazi sa 21.5-inčnim Full HD touchscreen-om (1920x1080), Intel i5 procesorom (11. generacija), 8GB DDR4 RAM-a, 256GB NVMe SSD-om, integrisanim čitačem kartica (NFC/RFID/Contactless), termičkim printerom za račune (80mm), 1080p kamerom za QR skeniranje, i WiFi 6/Gigabit Ethernet povezivanjem. Kućište je od nehrđajućeg čelika, dimenzije: 180cm (H) x 40cm (W) x 40cm (D), težina: ~25kg sa Anti-vandal zaštitom.",
    },
    {
      question: "Koje jezike podržava sistem?",
      answer:
        "Sistem podržava više od 25 jezika uključujući: Srpski, Engleski, Nemački, Francuski, Italijanski, Španski, Portugalski, Ruski, Ukrajinski, Kineski (Simplified i Traditional), Japanski, Korejski, Arapski, Turski, Grčki, Poljski, Holandski, Švedski, Norveški, Danski, Finski i mnoge druge. Jezik se automatski menja na osnovu nacionalnosti gosta iz rezervacije, ili gost može ručno izabrati jezik na početnom ekranu.",
    },
    {
      question: "Koje PMS sisteme podržavate i kako izgleda integracija?",
      answer:
        "Podržavamo sve vodeće PMS sisteme: Opera Cloud, Cloudbeds, Mews, Protel, Fidelio, HotelTime, Clock PMS+, eZee FrontDesk, Little Hotelier, RoomRaccoon i mnoge druge. Integracija se vrši putem REST API ili SOAP-a i uključuje real-time sinhronizaciju rezervacija, check-in/check-out komunikaciju, folija transakcije, room status update-e i guest profile sync. Prosečno vreme integracije: 2-5 radnih dana.",
    },
    {
      question: "Kako funkcioniše integracija sa eTurista (eVisitor) sistemom?",
      answer:
        "Naš sistem je zvanično sertifikovan i integrisan sa eTurista API sistemom. Automatski šalje sve potrebne podatke: lične podatke gosta, podatke o dokumentu, datum dolaska/odlaska, vrstu smeštaja, i turističku taksu. Sve se dešava u realnom vremenu bez potrebe za ručnim unosom. Potpuno kompatibilno sa srpskim zakonom o evidenciji turista. Eliminise ručni unos i greške.",
    },
    {
      question: "Koje načine plaćanja podržava?",
      answer:
        "Podržavamo: 1) Visa, Mastercard, American Express, Maestro, Dina Card kartice putem integrisanog POS terminala, 2) Contactless NFC plaćanja (Apple Pay, Google Pay, Samsung Pay), 3) QR code plaćanja (DinaQR, PaySpot), 4) Direct billing na PMS (plaćanje pri checkout-u). Integracija sa svim vodećim PSP-ovima u regionu (Monri, CorvusPay, Stripe). PCI DSS Level 1 Compliant sa potpunom enkriptijom.",
    },
    {
      question: "Da li sistem radi offline?",
      answer:
        "Da, sistem ima napredan offline režim! U slučaju prekida internet konekcije, kiosk nastavlja da radi koristeći lokalni cache rezervacija za narednih 7 dana. Gosti mogu završiti check-in, sistem kešira transakcije, i sve se automatski sinhronizuje kada se internet vrati. Preporučujemo backup 4G/LTE konekciju za maksimalnu pouzdanost (99.9% uptime).",
    },
    {
      question: "Kako se vrši održavanje i update sistema?",
      answer:
        "Software update-i se vrše automatski (noćni update-i 2-4 AM) ili manuelno prema vašim preferencijama. Možete izabrati da li želite automatske update-e ili da ručno odobrite svaki update. Notifikacije o novim verzijama stižu putem admin panela. Hardware održavanje preporučujemo jednom godišnje (čišćenje, kalibracija). U paketu dobijate 12 meseci besplatnih update-a. Remote administracija putem Cloud Dashboard-a.",
    },
    {
      question: "Kakva je zaštita podataka i GDPR usklađenost?",
      answer:
        "Sistem je potpuno GDPR compliant. Svi podaci se enkriptuju (AES-256), čuvaju se na serverima u EU (Frankfurt/Amsterdam), automatski se brišu nakon zakonski predviđenog roka (3 godine), i imamo DPA (Data Processing Agreement) za svaku instalaciju. SSL/TLS 1.3 za sve konekcije, 2FA autentifikacija za admin panel, audit log svih radnji, i potpuna transparentnost u korišćenju podataka. ISO 27001 i SOC 2 Type II sertifikovani.",
    },
    {
      question: "Mogu li prilagoditi izgled i branding kioska?",
      answer:
        "Apsolutno! Nudimo potpuno custom branding: vaš logo, boje, fontovi, background slike, video prezentacije, custom welcome poruke, multilanguage content, i branding na fizičkom kiosku (vinyl wrap). U Enterprise paketu nudimo i potpuno custom UI dizajn prilagođen vašem brendu. Dizajn se postavlja putem admin panela bez potrebe za kodom. Drag-and-drop editor sa live preview.",
    },
    {
      question: "Šta se dešava ako gost ima problem tokom check-in-a?",
      answer:
        "Sistem ima 'Help' dugme koje gosta povezuje sa recepcijom putem video poziva ili intercom-a. Takođe, kiosk automatski detektuje probleme (nevalidna kartica, greška u dokumentu) i prikazuje jasna uputstva. Vaše osoblje može remote preuzeti kontrolu nad kiosk-om i pomoći gostu. Imamo i 24/7 tehničku podršku. Multi-level support: on-screen help → video call → remote assistance → 24/7 tech support.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="product-faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6scroll-mt-16 min-h-[70svh]"
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
            <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            Tehnička Pitanja
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            Detaljne Tehničke Informacije
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4">
            Odgovori na tehnička pitanja o specifikacijama, integracijama i
            funkcionalnostima
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
              className="bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-orange-300 transition-colors shadow-sm hover:shadow-md"
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 px-8 py-5 rounded-xl border border-orange-200 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="text-slate-900 font-bold text-base sm:text-lg mb-1">
                Trebate dodatne tehničke detalje?
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                Zakažite sastanak sa našim tehničkim timom
              </p>
            </div>

            <a
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm sm:text-base whitespace-nowrap"
            >
              Zakažite Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
