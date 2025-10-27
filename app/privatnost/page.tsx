import { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, Phone, ArrowLeft } from "lucide-react";

/**
 * Politika Privatnosti Stranica
 *
 * PUTANJA: /politika-privatnosti
 *
 * GDPR Kompatibilna politika privatnosti
 */

export const metadata: Metadata = {
  title: "Politika Privatnosti",
  description:
    "Politika privatnosti za Digitalnu Recepciju - kako čuvamo vaše podatke",
};

export default function PolitikaPrivatnosti() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na početnu
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Politika Privatnosti
            </h1>
          </div>
          <p className="text-lg text-white/90">
            Poslednje ažurirano: {new Date().toLocaleDateString("sr-RS")}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Uvod */}
        <section className="mb-12 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📋 Uvod</h2>
          <p className="text-slate-700 leading-relaxed">
            Dobrodošli na sajt Digitalne Recepcije. Ova politika privatnosti
            objašnjava kako
            <strong> Inova Tech IT</strong> prikuplja, koristi i štiti vaše
            lične podatke kada koristite naš sajt i usluge. Posvećeni smo
            zaštiti vaše privatnosti i u skladu smo sa GDPR i važećim zakonima o
            zaštiti podataka u Republici Srbiji.
          </p>
        </section>

        {/* Glavni sadržaj */}
        <div className="prose prose-slate max-w-none">
          {/* 1. Prikupljanje podataka */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-orange-500">1.</span>
              Koje podatke prikupljamo?
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Lični podaci koje dobrovoljno delite:
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Ime i prezime</strong> - za identifikaciju prilikom
                    komunikacije
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Email adresa</strong> - za slanje informacija i
                    odgovora na upite
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Broj telefona</strong> - za direktnu komunikaciju
                    (opciono)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Naziv firme/hotela</strong> - za personalizaciju
                    ponude
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Sadržaj poruka</strong> - pitanja i zahtevi koje nam
                    šaljete
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Automatski prikupljeni podaci:
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>IP adresa</strong> - za sigurnost i analitiku
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Tip browsera i uređaja</strong> - za optimizaciju
                    korisničkog iskustva
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Podaci o poseti</strong> - stranice koje posećujete,
                    vreme provedeno na sajtu
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Kolačići (cookies)</strong> - za funkcionisanje
                    sajta i analitiku
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Kako koristimo podatke */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-orange-500">2.</span>
              Kako koristimo vaše podatke?
            </h2>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-lg mb-4">
              <p className="text-slate-700 leading-relaxed mb-4">
                Vaše podatke koristimo isključivo za sledeće svrhe:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>
                    <strong>Odgovaranje na upite</strong> - kontaktiramo vas u
                    vezi sa vašim pitanjima
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>
                    <strong>Slanje brošura i materijala</strong> - šaljemo
                    tražene informacije
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>
                    <strong>Newsletter</strong> - šaljemo korisne informacije
                    (samo uz vašu saglasnost)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>
                    <strong>Zakazivanje demo prezentacija</strong> -
                    koordinacija sastanaka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>
                    <strong>Poboljšanje usluga</strong> - analiza kako
                    poboljšati naš sajt i ponudu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>
                    <strong>Sigurnost</strong> - zaštita od zloupotrebe i
                    prevare
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-900 font-semibold mb-2">
                ❌ ŠTA NE RADIMO:
              </p>
              <ul className="space-y-1 text-red-800 text-sm">
                <li>• Nikada ne prodajemo vaše podatke trećim stranama</li>
                <li>• Ne delimo vaše podatke bez vaše saglasnosti</li>
                <li>• Ne šaljemo neželjenu poštu (spam)</li>
              </ul>
            </div>
          </section>

          {/* 3. Čuvanje podataka */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-orange-500">3.</span>
              Kako čuvamo vaše podatke?
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <p className="text-slate-700 leading-relaxed mb-4">
                Primenjujemo sledeće mere sigurnosti:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">🔒</span>
                  <span>
                    <strong>SSL enkripcija</strong> - svi podaci se prenose
                    enkriptovano
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">🔒</span>
                  <span>
                    <strong>Sigurni serveri</strong> - podaci se čuvaju na
                    zaštićenim serverima
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">🔒</span>
                  <span>
                    <strong>Ograničen pristup</strong> - samo ovlašćeno osoblje
                    ima pristup
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">🔒</span>
                  <span>
                    <strong>Redovne rezervne kopije</strong> - zaštita od
                    gubitka podataka
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  <strong>Rok čuvanja:</strong> Vaše podatke čuvamo dokle god je
                  potrebno za navedene svrhe ili dok ne zatražite brisanje.
                  Najduže čuvamo podatke
                  <strong> 3 godine</strong> nakon poslednje interakcije.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Vaša prava */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-orange-500">4.</span>
              Vaša prava (GDPR)
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  📄 Pravo na pristup
                </h3>
                <p className="text-sm text-slate-600">
                  Možete zatražiti kopiju svih podataka koje imamo o vama
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  ✏️ Pravo na ispravku
                </h3>
                <p className="text-sm text-slate-600">
                  Možete tražiti ispravku netačnih ili nepotpunih podataka
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  🗑️ Pravo na brisanje
                </h3>
                <p className="text-sm text-slate-600">
                  Možete zatražiti trajno brisanje vaših podataka
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  🚫 Pravo na prigovor
                </h3>
                <p className="text-sm text-slate-600">
                  Možete prigovoriti načinu obrade vaših podataka
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  📦 Pravo na prenosivost
                </h3>
                <p className="text-sm text-slate-600">
                  Možete dobiti podatke u strukturisanom formatu
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  ⏸️ Pravo na ograničenje
                </h3>
                <p className="text-sm text-slate-600">
                  Možete ograničiti obradu vaših podataka
                </p>
              </div>
            </div>
          </section>

          {/* 5. Kolačići */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-orange-500">5.</span>
              Kolačići (Cookies)
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Naš sajt koristi kolačiće za poboljšanje korisničkog iskustva.
              Kolačići su male tekstualne datoteke koje se čuvaju na vašem
              uređaju.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3">
                Vrste kolačića koje koristimo:
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Neophodni kolačići</strong> - potrebni za
                    funkcionisanje sajta
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Analitički kolačići</strong> - pomažu nam da
                    razumemo kako koristite sajt
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>
                    <strong>Funkcionalni kolačići</strong> - pamte vaše
                    preferencije
                  </span>
                </li>
              </ul>

              <p className="text-sm text-slate-600 mt-4">
                Možete upravljati kolačićima u podešavanjima vašeg browsera.
              </p>
            </div>
          </section>

          {/* 6. Promene politike */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-orange-500">6.</span>
              Promene politike
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Zadržavamo pravo da ažuriramo ovu politiku privatnosti. O svim
              bitnim promenama ćemo vas obavestiti putem emaila ili obaveštenja
              na sajtu. Preporučujemo da povremeno proveravate ovu stranicu.
            </p>
          </section>
        </div>

        {/* Kontakt za pitanja */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-2xl mt-12">
          <h2 className="text-2xl font-bold mb-4">
            📞 Imate pitanja o privatnosti?
          </h2>
          <p className="mb-6">
            Za sva pitanja u vezi sa zaštitom podataka, kontaktirajte nas:
          </p>

          <div className="space-y-3">
            <a
              href="mailto:privacy@inovatechit.com"
              className="flex items-center gap-3 text-white/90 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
              <span>privacy@inovatechit.com</span>
            </a>

            <a
              href="tel:+381641238587"
              className="flex items-center gap-3 text-white/90 hover:text-white transition"
            >
              <Phone className="w-5 h-5" />
              <span>+381 64 123 8587</span>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm text-white/80">
              <strong>Inova Tech IT</strong>
              <br />
              Beograd, Srbija
              <br />
              PIB: 123456789
              <br />
              Matični broj: 987654321
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
