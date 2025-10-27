"use client";

import { useState, FormEvent } from "react";
import {
  X,
  Mail,
  User,
  Phone,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

/**
 * Newsletter Modal Component
 *
 * FUNKCIONALNOSTI:
 * ✅ Modal za prijavu na newsletter i preuzimanje brošure
 * ✅ Forma sa validacijom (email, ime, telefon, GDPR)
 * ✅ Slanje podataka na API endpoint
 * ✅ Success/Error poruke
 * ✅ Duplikat handling
 * ✅ Responsive dizajn
 * ✅ Animacije
 */

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({
  isOpen,
  onClose,
}: NewsletterModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    gdprConsent: false,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "duplicate"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Zatvori modal
  const handleClose = () => {
    if (status === "loading") return; // Ne dozvoli zatvaranje tokom slanja
    onClose();
    // Reset forme nakon 300ms (animacija zatvaranja)
    setTimeout(() => {
      setFormData({ email: "", name: "", phone: "", gdprConsent: false });
      setStatus("idle");
      setErrorMessage("");
    }, 300);
  };

  // Validacija email formata
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validacija
    if (!formData.email.trim()) {
      setErrorMessage("Email adresa je obavezna");
      setStatus("error");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Unesite validnu email adresu");
      setStatus("error");
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage("Ime je obavezno");
      setStatus("error");
      return;
    }

    if (!formData.gdprConsent) {
      setErrorMessage(
        "Morate prihvatiti uslove korišćenja i politiku privatnosti"
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Proveri da li je duplikat email
        if (response.status === 409) {
          setStatus("duplicate");
          setErrorMessage(
            data.message || "Već ste primili brošuru na ovaj email"
          );
          return;
        }
        throw new Error(data.error || "Greška prilikom slanja");
      }

      setStatus("success");

      // Zatvori modal nakon 3 sekunde
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || "Greška prilikom slanja. Pokušajte ponovo."
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Reset error statusa kada korisnik pocne da kuca
    if (status === "error" || status === "duplicate") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={status === "loading"}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Zatvori modal"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 pb-8 rounded-2xl">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Download className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Preuzmite Brošuru
            </h2>
            <p className="text-orange-50 text-center text-sm">
              Unesite vaše podatke i dobićete kompletnu brošuru na email
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Status Messages */}
            {status === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-in slide-in-from-top duration-300">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">
                    Uspešno poslato! 🎉
                  </p>
                  <p className="text-sm text-green-700">
                    Brošura je poslata na vašu email adresu. Proverite inbox!
                  </p>
                </div>
              </div>
            )}

            {status === "duplicate" && (
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 animate-in slide-in-from-top duration-300">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">
                    Već ste primili brošuru
                  </p>
                  <p className="text-sm text-blue-700">{errorMessage}</p>
                  <p className="text-sm text-blue-700 mt-2">
                    Ukoliko niste primili email, proverite spam folder ili nas
                    kontaktirajte.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 animate-in slide-in-from-top duration-300">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Greška</p>
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Adresa <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg 
                              focus:ring-2 focus:ring-orange-500 focus:border-transparent
                              disabled:bg-slate-100 disabled:cursor-not-allowed transition-all"
                    placeholder="vas@email.com"
                  />
                </div>
              </div>

              {/* Ime */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Ime i Prezime <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg 
                              focus:ring-2 focus:ring-orange-500 focus:border-transparent
                              disabled:bg-slate-100 disabled:cursor-not-allowed transition-all"
                    placeholder="Petar Petrović"
                  />
                </div>
              </div>

              {/* Telefon */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Telefon{" "}
                  <span className="text-slate-400 text-xs">(opciono)</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "loading" || status === "success"}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg 
                              focus:ring-2 focus:ring-orange-500 focus:border-transparent
                              disabled:bg-slate-100 disabled:cursor-not-allowed transition-all"
                    placeholder="+381 64 123 4567"
                  />
                </div>
              </div>

              {/* GDPR Consent */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="mt-1 w-4 h-4 text-orange-500 border-slate-300 rounded 
                              focus:ring-2 focus:ring-orange-500 disabled:cursor-not-allowed"
                  />
                  <span className="text-sm text-slate-700 leading-relaxed">
                    Slažem se sa{" "}
                    <a
                      href="/uslovi-korisenja"
                      target="_blank"
                      className="text-orange-500 hover:underline"
                    >
                      uslovima korišćenja
                    </a>{" "}
                    i{" "}
                    <a
                      href="/politika-privatnosti"
                      target="_blank"
                      className="text-orange-500 hover:underline"
                    >
                      politikom privatnosti
                    </a>
                    . Prihvatam da primam marketinške email poruke.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold 
                          py-3.5 px-6 rounded-lg transition-all duration-300
                          disabled:bg-slate-400 disabled:cursor-not-allowed
                          flex items-center justify-center gap-2 shadow-lg hover:shadow-xl
                          hover:scale-[1.02] active:scale-[0.98]"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Šaljem...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Poslato!
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Preuzmite Brošuru
                  </>
                )}
              </button>

              {/* Info Text */}
              <p className="text-xs text-center text-slate-500 leading-relaxed">
                Vaši podaci su zaštićeni i neće biti deljeni sa trećim licima.
                Možete se odjaviti u bilo kom trenutku.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
