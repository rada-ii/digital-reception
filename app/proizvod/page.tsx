"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/proizvod/ProductHero";
import ProductSpecs from "@/components/proizvod/ProductSpecs";
import Gallery from "@/components/home/Gallery";
import ComparisonTable from "@/components/proizvod/ComparisonTable";
import ProductFAQ from "@/components/proizvod/ProductFAQ";
import CTASection from "@/components/shared/CTASection";
import NewsletterModal from "@/components/shared/NewsletterModal";
import SectionNavigation from "@/components/layout/SectionNavigation";

/**
 * 🎯 PROIZVOD PAGE - SA FULLSCREEN SEKCIJAMA
 *
 * STRUKTURA:
 * ✅ Svaka sekcija je fullscreen (min-h-screen)
 * ✅ Različite pozadine za svaku sekciju
 * ✅ Povezani buttoni (Brošura -> Modal, Demo -> Calendly)
 * ✅ ProductHero sa thumbnail kontrolama u donjem levom uglu
 * ✅ Responzivno na svim ekranima
 */

export default function ProizvodPage() {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* PRODUCT HERO - Svetla pozadina */}
      <ProductHero onOpenBrochure={() => setIsBrochureModalOpen(true)} />

      {/* SPECS - Bela pozadina */}
      <section
        id="specs"
        className="min-h-screen flex items-center justify-center bg-white scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
          <ProductSpecs />
        </div>
      </section>

      {/* GALLERY - Siva pozadina */}
      <section
        id="gallery"
        className="min-h-screen flex items-center justify-center bg-slate-50 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
          <Gallery />
        </div>
      </section>

      {/* COMPARISON - Svetla pozadina */}
      <section
        id="comparison"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-white scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ - Bela pozadina */}
      <section
        id="product-faq"
        className="min-h-screen flex items-center justify-center bg-white scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
          <ProductFAQ />
        </div>
      </section>

      {/* CTA - Narandžasta pozadina */}
      <CTASection />

      <Footer />
      <SectionNavigation />

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </>
  );
}
