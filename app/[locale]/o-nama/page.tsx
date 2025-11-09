"use client";

import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/shared/CTASection";
import SectionNavigation from "@/components/layout/SectionNavigation";
import { useTranslations } from "next-intl";

/**
 * About Page
 *
 * Lokacija: /app/o-nama/page.tsx
 *
 * ŠTA RADI:
 * - O nama stranica
 * - Priča o kompaniji
 * - Misija i vrednosti
 * - Tim (opciono)
 * - Achievements
 *
 * SEKCIJE:
 * 1. Hero - Intro
 * 2. Story - Naša priča
 * 3. Mission & Values - Misija i vrednosti
 * 4. Stats - Brojke koje govore
 * 5. Team - Tim (opciono)
 * 6. CTA - Poziv na akciju
 */

export default function AboutPage() {
  const t = useTranslations("about");

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("values.quality.title"),
      description: t("values.quality.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("values.support.title"),
      description: t("values.support.description"),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t("values.results.title"),
      description: t("values.results.description"),
    },
  ];

  const stats = [
    { number: "50+", label: "Hotela koristi naš sistem" },
    { number: "10,000+", label: "Uspešnih check-inova" },
    { number: "3 godine", label: "Na tržištu" },
    { number: "99.9%", label: "Uptime garancija" },
  ];

  const timeline = [
    {
      year: t("timeline.year2017.year"),
      title: t("timeline.year2017.title"),
      description: t("timeline.year2017.description"),
    },
    {
      year: t("timeline.year2019.year"),
      title: t("timeline.year2019.title"),
      description: t("timeline.year2019.description"),
    },
    {
      year: t("timeline.year2024.year"),
      title: t("timeline.year2024.title"),
      description: t("timeline.year2024.description"),
    },
    {
      year: t("timeline.year2025.year"),
      title: t("timeline.year2025.title"),
      description: t("timeline.year2025.description"),
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
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-6">
                <Award className="w-4 h-4" />
                {t("badge")}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-6">
                {t("title")}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1758520145178-29eafeda9908?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
                alt="Inova Tech IT Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  {t("story.title")}
                </h2>

                <div className="space-y-4 text-orange-500 leading-relaxed">
                  <p>{t("story.p1")}</p>
                  <p>{t("story.p2")}</p>
                  <p>{t("story.p3")}</p>
                  <p>{t("story.p4")}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                  alt="Team working"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {t("values.title")}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {t("values.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {t("timeline.title")}
              </h2>
              <p className="text-lg text-slate-600">
                {t("timeline.subtitle")}
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.year}
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
      <SectionNavigation />
    </>
  );
}
