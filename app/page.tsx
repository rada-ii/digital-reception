import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import VideoSection from "@/components/home/VideoSection";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/shared/CTASection";
import SectionNavigation from "@/components/layout/SectionNavigation";
import PackagesTeaser from "./components/home/PackagesTeaser";

/**
 * 🎯 HOME PAGE - SA FULLSCREEN SEKCIJAMA
 *
 * STRUKTURA:
 * ✅ Svaka sekcija je fullscreen (min-h-screen)
 * ✅ Različite pozadine za svaku sekciju
 * ✅ Responzivno na svim ekranima
 * ✅ Smooth scroll navigacija
 */

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO - Tamna pozadina (slate-900) */}
      <Hero />

      {/* VALUE PROPS - Svetla pozadina (orange-50 to white) */}
      <ValueProps />

      {/* HOW IT WORKS - Bela pozadina */}
      <section
        id="kako-funkcionise"
        className="min-h-[70svh] flex items-center justify-centerscroll-mt-8"
      >
        <div className="max-w-7xl mx-auto w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6">
          <HowItWorks />
        </div>
      </section>

      {/* VIDEO - Siva pozadina (slate-50) */}
      <section
        id="video"
        className="min-h-[70vh] flex items-center justify-center bg-slate-50 scroll-mt-8"
      >
        <div className="max-w-7xl mx-auto w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6">
          <VideoSection />
        </div>
      </section>

      {/* TESTIMONIALS - Svetla pozadina (white to orange-50) */}
      <section
        id="testimonials"
        className="min-h-[70vsh] flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-white scroll-mt-8"
      >
        <div className="max-w-7xl mx-auto w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6">
          <Testimonials />
        </div>
      </section>

      <section
        id="faq"
        className="min-h-[80svh] flex items-center justify-center scroll-mt-8"
      >
        <div className="max-w-5xl mx-auto w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6">
          <PackagesTeaser />
        </div>
      </section>

      {/* FAQ - Bela pozadina */}
      <section
        id="faq"
        className="min-h-[80svh] flex items-center justify-center bg-slate-50 scroll-mt-8"
      >
        <div className="max-w-5xl mx-auto w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6">
          <FAQ />
        </div>
      </section>

      {/* CTA - Narandžasta pozadina */}
      <CTASection />

      <Footer />
      <SectionNavigation />
    </>
  );
}
