"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";
import SectionNavigation from "@/components/layout/SectionNavigation";

/**
 * Contact Page
 *
 * Lokacija: /app/kontakt/page.tsx
 *
 * ŠTA RADI:
 * - Kontakt stranica sa formom
 * - Calendly za zakazivanje demo sastanaka
 * - Kontakt informacije
 * - Mapa (opciono)
 *
 * SEKCIJE:
 * 1. Hero - Poziv na kontakt
 * 2. Contact Form - Slanje poruke
 * 3. Calendly - Zakazivanje sastanka
 * 4. Info - Kontakt detalji
 */

export default function ContactPage() {
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("cards.phone.title"),
      content: t("cards.phone.value"),
      link: "tel:+381641238587",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("cards.email.title"),
      content: t("cards.email.value"),
      link: "mailto:office@inovatechit.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("cards.address.title"),
      content: t("cards.address.value"),
      link: "https://maps.google.com/?q=Ratka+Mitrovića+130,+Beograd",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("cards.addressMain.title"),
      content: t("cards.addressMain.value"),
      link: "https://maps.google.com/?q=Milady+Horakove+600/38,+Praha",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("hours.title"),
      content: `${t("hours.weekdays.label")} ${t("hours.weekdays.hours")}`,
      link: null,
    },
  ];

  return (
    <>
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-6">
                <MessageCircle className="w-4 h-4" />
                {t("hero.badge")}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {t("hero.title")}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 whitespace-pre-line">
                {t("hero.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center h-full"
                    >
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{info.content}</p>
                    </a>
                  ) : (
                    <div className="bg-slate-50 rounded-xl p-6 text-center h-full">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{info.content}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content - Form & Calendly */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Calendly Embed */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="booking"
            >
              <CalendlyEmbed />
            </motion.div> */}
          </div>
        </section>

        {/* FAQ Mini Section */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
                {t("faq.title")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {t("faq.q1.question")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("faq.q1.answer")}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {t("faq.q2.question")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("faq.q2.answer")}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {t("faq.q3.question")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("faq.q3.answer")}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {t("faq.q4.question")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("faq.q4.answer")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <SectionNavigation />
    </>
  );
}
