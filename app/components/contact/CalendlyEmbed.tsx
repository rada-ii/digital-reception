"use client";

import { useEffect } from "react";
import { Calendar } from "lucide-react";

/**
 * Calendly Embed Component
 *
 * Lokacija: /app/components/contact/CalendlyEmbed.tsx
 *
 * ŠTA RADI:
 * - Integriše Calendly za zakazivanje demo sastanaka
 * - Automatski učitava Calendly widget
 * - Responsive dizajn
 *
 * KORISTI SE U: /kontakt stranica
 *
 * SETUP:
 * 1. Napravi Calendly nalog: https://calendly.com
 * 2. Kopiraj svoj scheduling link
 * 3. Zameni URL u NEXT_PUBLIC_CALENDLY_URL
 */

export default function CalendlyEmbed() {
  // Učitaj Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/boris-inovatechit/self_check_in_meeting";

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Zakažite Demo Prezentaciju</h3>
        </div>
        <p className="text-white/90">
          Odaberite termin koji vam odgovara - trajanje 30 minuta
        </p>
      </div>

      {/* Calendly Widget */}
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />

      {/* Footer Info */}
      <div className="p-6 bg-slate-50 border-t">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="font-bold text-slate-900 mb-1">📹 Video Call</div>
            <div className="text-slate-600">Google Meet ili Zoom</div>
          </div>
          <div>
            <div className="font-bold text-slate-900 mb-1">⏱️ 30 minuta</div>
            <div className="text-slate-600">Potpuna demonstracija</div>
          </div>
          <div>
            <div className="font-bold text-slate-900 mb-1">🎁 Besplatno</div>
            <div className="text-slate-600">Bez obaveze</div>
          </div>
        </div>
      </div>
    </div>
  );
}
