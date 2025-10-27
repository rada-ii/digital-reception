"use client";

import { ReactNode } from "react";

/**
 * 🎯 Fullscreen Section Wrapper
 *
 * SVRHA:
 * ✅ Osigurava da svaka sekcija bude tačno 100vh (puna visina ekrana)
 * ✅ Responzivna na svim ekranima (17", 27", Mac 14")
 * ✅ Različite pozadine za svaku sekciju
 *
 * UPOTREBA:
 * <FullscreenSection bgColor="white">
 *   <YourContent />
 * </FullscreenSection>
 */

interface FullscreenSectionProps {
  children: ReactNode;
  id?: string;
  bgColor?:
    | "white"
    | "gray"
    | "orange"
    | "slate"
    | "beige"
    | "lightOrange"
    | "darkSlate";
  className?: string;
}

export default function FullscreenSection({
  children,
  id,
  bgColor = "white",
  className = "",
}: FullscreenSectionProps) {
  // Mapiranje boja pozadine
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    orange: "bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700",
    slate: "bg-slate-50",
    beige: "bg-orange-50",
    lightOrange: "bg-gradient-to-br from-orange-50 via-white to-slate-50",
    darkSlate: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  };

  return (
    <section
      id={id}
      className={`
        min-h-screen w-full
        flex items-center justify-center
        ${bgClasses[bgColor]}
        ${className}
        scroll-mt-16
      `}
    >
      <div className="w-full h-full flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
