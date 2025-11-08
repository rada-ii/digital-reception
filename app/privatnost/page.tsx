import { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, Phone, ArrowLeft } from "lucide-react";

/**
 * Politika Privatnosti Stranica
 *
 * PUTANJA: /politika-privatnosti
 *
 * GDPR Kompatibilna politika privatnosti - Inova Tech d.o.o.
 */

export const metadata: Metadata = {
  title: "Politika Privatnosti | Inova Tech d.o.o.",
  description:
    "Politika privatnosti za Inova Tech d.o.o. - kako čuvamo vaše lične, poslovne i finansijske podatke u skladu sa zakonima Republike Srbije",
};

export default function PolitikaPrivatnosti() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-orange-500 text-white py-16 px-4">
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
            Inova Tech d.o.o. | Poslednje ažurirano:{" "}
            {new Date().toLocaleDateString("sr-RS")}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Uvod */}
        <section className="mb-12 p-6 bg-white rounded-xl border-l-4 border-orange-500 shadow-sm">
          <h2 className="text-2xl font-bold text-black mb-4">Uvod</h2>
          <p className="text-black leading-relaxed mb-4">
            Firmi Inova Tech d.o.o. je posvećena zaštiti vaše privatnosti i
            zaštiti vaših ličnih, poslovnih i finansijskih podataka.
          </p>
          <p className="text-black leading-relaxed mb-4">
            Svrha ove Izjave o privatnosti je da vas informiše o vrstama ličnih
            podataka, kako su definisane u nastavku, koje Inova Tech d.o.o.
            prikuplja, koristi i otkriva. Objašnjava kako te informacije
            koristimo i otkrivamo, izbore koje imate u vezi sa takvom upotrebom
            i otkrivanjem i kako te informacije možete kontrolisati.
          </p>
          <p className="text-black leading-relaxed">
            Ova Izjava o privatnosti dizajnirana je da zadovolji standarde
            propisane teritorijalnim zakonodavstvom i najboljom praksom. Pored
            svih zakona specifičnih za teritoriju, i dalje se podvrgavamo
            pravilima poverljivosti profesionalnih tela na teritoriji.
          </p>
        </section>

        {/* Glavni sadržaj */}
        <div className="space-y-10">
          {/* 1. Saglasnost */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              1. Saglasnost
            </h2>
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <p className="text-black leading-relaxed mb-4">
                Korišćenjem sajta kompanije Inova Tech d.o.o. uključujući i sve
                druge domena i poddomena kojima pristupate putem internet adrese{" "}
                <strong className="text-orange-600">www.inovatechit.com</strong>{" "}
                dajete saglasnost na uslove ove Politike privatnosti.
              </p>
              <p className="text-black leading-relaxed">
                Inova Tech d.o.o. zadržava pravo da povremeno izmeni uslove iz
                ove Politike privatnosti. S tim u vezi ćete biti blagovremeno
                obavešteni.
              </p>
            </div>
          </section>

          {/* 2. Prikupljanje i korišćenje informacija */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              2. Prikupljanje i korišćenje informacija
            </h2>
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <p className="text-black leading-relaxed mb-4">
                Prikupljene informacije se koriste u sledećim slučajevima:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Popunjavanje formi u zahtevima za informacijama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Ponuda novih proizvoda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    Poboljšanje efektivnosti naših veb stranica, servisa i
                    proizvoda
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Sprovođenje istraživanja i analiza</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Obezbeđivanje i pružanje korisničkih servisa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Slanje informacija u marketinške svrhe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Analiza podataka putem analitike</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Koji lični podaci se prikupljaju */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              3. Koji lični podaci se prikupljaju
            </h2>
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Vaše kontakt informacije:</strong> ime, prezime,
                    poštanska i e-mail adresa, broj telefona
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Informacije za isporuku:</strong> adresa za isporuku
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Podaci prikupljeni putem Google Analytics:</strong>{" "}
                    podaci koje prikuplja treća strana putem servisa Google
                    Analytics
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Upotreba sakupljenih informacija */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              4. Deljenje podataka sa trećim licima
            </h2>
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <p className="text-black leading-relaxed mb-4">
                Možemo da otkrijemo Vaše podatke o ličnosti sledećim
                korisnicima:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Našim povezanim kompanijama</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Obrađivačima podataka</strong> koji će podatke o
                    ličnosti da obrađuju u naše ime u skladu sa Zakonom o
                    zaštiti podataka o ličnosti Republike Srbije, na način na
                    koji se obezbeđuje zaštita prava lica na koje se podaci
                    odnose
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Drugim korisnicima</strong> ukoliko su obavezni da
                    tako postupe po nalogu suda ili nalogu koji je izdao drugi
                    organ vlasti ili ih zakon na to obavezuje
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>
                    Vaše podatke možemo preneti i{" "}
                    <strong>van teritorije Srbije</strong> našim povezanim
                    pravnim licima u cilju poboljšanja naših usluga, proizvoda i
                    servisa
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Kolačići (Cookies) */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              5. Korišćenje Internet kolačića (Cookies)
            </h2>
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <p className="text-black leading-relaxed mb-4">
                Internet kolačić je mala datoteka koja se putem Veb stranica
                generiše i čuva na Vašem računaru. Oni omogućavaju čuvanje
                informacija o Vašim podešavanjima i sesijama i dozvoljava
                pristup Veb stranicama bez ponovne personalizacije.
              </p>
              <p className="text-black leading-relaxed mb-4">
                Ta vrsta prikupljenih podataka može da uključuje:
              </p>
              <ul className="space-y-3 text-black mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Vaše prethodno odredište</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Korišćeni pregledač</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Operativni sistem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Pretraživač</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Trajanje Vaše posete vebsajtu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>IP adresu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Google Analytics servise</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-black text-sm leading-relaxed">
                  <strong>Upravljanje kolačićima:</strong> Možete da onemogućite
                  skladištenje kolačića u određenim podešavanjima Vašeg internet
                  pretraživača. Takođe možete onemogućiti Google-u da snima
                  podatke koji se odnose na Vašu upotrebu vebsajta, koje je
                  kolačić generisao (što uključuje i IP adresu).
                </p>
              </div>
            </div>
          </section>

          {/* 6. Prava korisnika */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              6. Vaša prava u vezi sa ličnim podacima
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-black/10 hover:border-orange-500 transition">
                <h3 className="font-bold text-black mb-2">
                  Pravo na prigovor i pritužbu
                </h3>
                <p className="text-sm text-black">
                  Korisnik ima pravo da prigovori na način obrade njegovih
                  ličnih podataka koji može podneti direktno Inova Tech d.o.o.
                  ili da podnese pritužbu Povereniku za informacije od javnog
                  značaja i zaštitu podataka o ličnosti.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-black/10 hover:border-orange-500 transition">
                <h3 className="font-bold text-black mb-2">
                  Pravo na ograničenje obrade
                </h3>
                <p className="text-sm text-black">
                  U svakom trenutku korisnik ima pravo da traži ograničenje
                  obrade njegovih ličnih podataka.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-black/10 hover:border-orange-500 transition">
                <h3 className="font-bold text-black mb-2">Pravo na pristup</h3>
                <p className="text-sm text-black">
                  Možete zatražiti kopiju svih podataka koje imamo o vama.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-black/10 hover:border-orange-500 transition">
                <h3 className="font-bold text-black mb-2">Pravo na ispravku</h3>
                <p className="text-sm text-black">
                  Možete tražiti ispravku netačnih ili nepotpunih podataka.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-black/10 hover:border-orange-500 transition">
                <h3 className="font-bold text-black mb-2">Pravo na brisanje</h3>
                <p className="text-sm text-black">
                  Možete zatražiti trajno brisanje vaših podataka.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-black/10 hover:border-orange-500 transition">
                <h3 className="font-bold text-black mb-2">
                  Pravo na prenosivost
                </h3>
                <p className="text-sm text-black">
                  Možete dobiti podatke u strukturisanom formatu.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Promene politike */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-orange-500">
              7. Promene ove Izjave o privatnosti
            </h2>
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <p className="text-black leading-relaxed mb-4">
                Povremeno možemo izvršiti promene u ovoj Izjavi o privatnosti.
                Izjava o privatnosti je aktuelna od datuma "poslednjeg
                revidiranog" koji se pojavljuje na vrhu ove stranice.
              </p>
              <p className="text-black leading-relaxed">
                Mi ćemo se prema Ličnim podacima odnositi na način koji je u
                skladu sa Izjavom o privatnosti prema kojoj su prikupljeni i
                našom Politikom privatnosti, osim ako nemamo vašu saglasnost da
                ih tretiramo drugačije. Ova Izjava o privatnosti odnosi se na
                sve informacije koje sakupljamo ili primamo o vama iz bilo kog
                izvora.
              </p>
            </div>
          </section>
        </div>

        {/* Kontakt za pitanja */}
        <div className="bg-orange-500 text-white p-8 rounded-2xl mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Imate pitanja o privatnosti?
          </h2>
          <p className="mb-6">
            Za sva pitanja u vezi sa zaštitom podataka, kontaktirajte nas:
          </p>

          <div className="space-y-3 mb-6">
            <a
              href="mailto:office@inovatechit.com"
              className="flex items-center gap-3 text-white/90 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
              <span>office@inovatechit.com</span>
            </a>

            <a
              href="tel:+381641238587"
              className="flex items-center gap-3 text-white/90 hover:text-white transition"
            >
              <Phone className="w-5 h-5" />
              <span>+381 64 123 8587</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-white/90 leading-relaxed">
              <strong className="text-white">Inova Tech d.o.o.</strong>
              <br />
              Beograd, Republika Srbija
              <br />
              www.inovatechit.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
