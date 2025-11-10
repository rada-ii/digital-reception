"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/translations/LanguageContext";

/**
 * 🎯 Contact Form Component - REDIZAJNIRAN
 *
 * PROMENE:
 * ✅ Stack layout (kontakt info + forma jedan ispod drugog)
 * ✅ Bolja organizacija na svim ekranima
 * ✅ Fullscreen-friendly dizajn
 */

export default function ContactForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    predmet: "",
    poruka: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.ime.trim() ||
      !formData.email.trim() ||
      !formData.poruka.trim()
    ) {
      setErrorMessage(t("contact.form.error.required"));
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("contact.form.error.description"));
      }

      setStatus("success");

      setTimeout(() => {
        setFormData({
          ime: "",
          email: "",
          telefon: "",
          predmet: "",
          poruka: "",
        });
        setStatus("idle");
      }, 3000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || t("contact.form.error.description")
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Kontakt Informacije - Kartica */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
        <p className="text-orange-50 mb-8 text-lg">
          {t("contact.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Telefon */}
          <a
            href="tel:+381641238587"
            className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition group"
          >
            <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-sm text-orange-100 font-medium mb-1">
                {t("contact.info.phone.title")}
              </p>
              <p className="font-bold">{t("contact.info.phone.value")}</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@inovatechit.com"
            className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition group"
          >
            <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-sm text-orange-100 font-medium mb-1">
                {t("contact.info.email.title")}
              </p>
              <p className="font-bold text-sm">{t("contact.info.email.value")}</p>
            </div>
          </a>

          {/* Lokacija */}
          <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="p-3 bg-white/20 rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-sm text-orange-100 font-medium mb-1">
                {t("contact.info.address.title")}
              </p>
              <p className="font-bold">{t("contact.info.address.value")}</p>
            </div>
          </div>
        </div>

        {/* Radno vreme */}
        <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
          <h3 className="font-bold mb-3">{t("contact.info.hours.title")}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-orange-100">{t("contact.info.hours.weekdays")}</span>
            </div>
            <div className="text-right">
              <span className="font-semibold">{t("contact.info.hours.weekdaysTime")}</span>
            </div>
            <div>
              <span className="text-orange-100">{t("contact.info.hours.weekend")}</span>
            </div>
            <div className="text-right">
              <span className="font-semibold">{t("contact.info.hours.weekendTime")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt Forma */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          {t("contact.form.title")}
        </h3>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">
                {t("contact.form.success.title")}
              </p>
              <p className="text-sm text-green-700">
                {t("contact.form.success.description")}
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">{t("contact.form.error.title")}</p>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Ime */}
            <div>
              <label
                htmlFor="ime"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                {t("contact.form.name.label")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ime"
                name="ime"
                value={formData.ime}
                onChange={handleChange}
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg
                          focus:ring-2 focus:ring-orange-500 focus:border-transparent
                          disabled:bg-slate-100 disabled:cursor-not-allowed"
                placeholder={t("contact.form.name.placeholder")}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                {t("contact.form.email.label")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg
                          focus:ring-2 focus:ring-orange-500 focus:border-transparent
                          disabled:bg-slate-100 disabled:cursor-not-allowed"
                placeholder={t("contact.form.email.placeholder")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Telefon */}
            <div>
              <label
                htmlFor="telefon"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                {t("contact.form.phone.label")}
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg
                          focus:ring-2 focus:ring-orange-500 focus:border-transparent
                          disabled:bg-slate-100 disabled:cursor-not-allowed"
                placeholder={t("contact.form.phone.placeholder")}
              />
            </div>

            {/* Predmet */}
            <div>
              <label
                htmlFor="predmet"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                {t("contact.form.subject.label")}
              </label>
              <select
                id="predmet"
                name="predmet"
                value={formData.predmet}
                onChange={handleChange}
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg
                          focus:ring-2 focus:ring-orange-500 focus:border-transparent
                          disabled:bg-slate-100 disabled:cursor-not-allowed"
              >
                <option value="">{t("contact.form.subject.placeholder")}</option>
                <option value="demo">{t("contact.form.subject.options.demo")}</option>
                <option value="cenovnik">{t("contact.form.subject.options.pricing")}</option>
                <option value="tehnicka-podrska">{t("contact.form.subject.options.support")}</option>
                <option value="ostalo">{t("contact.form.subject.options.other")}</option>
              </select>
            </div>
          </div>

          {/* Poruka */}
          <div>
            <label
              htmlFor="poruka"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              {t("contact.form.message.label")} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="poruka"
              name="poruka"
              value={formData.poruka}
              onChange={handleChange}
              required
              rows={5}
              disabled={status === "loading" || status === "success"}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg
                        focus:ring-2 focus:ring-orange-500 focus:border-transparent
                        disabled:bg-slate-100 disabled:cursor-not-allowed resize-none"
              placeholder={t("contact.form.message.placeholder")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold
                      py-3 px-6 rounded-lg transition-all duration-300
                      disabled:bg-slate-400 disabled:cursor-not-allowed
                      flex items-center justify-center gap-2 shadow-lg hover:shadow-xl
                      hover:scale-[1.02] active:scale-[0.98]"
          >
            {status === "loading" ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t("contact.form.sending")}
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                {t("contact.form.sent")}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t("contact.form.submit")}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
