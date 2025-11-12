# Digital Reception - Digitalna Recepcija

Moderna B2B SaaS aplikacija za digitalizaciju hotel recepcija. Automatizovani kiosk sistem za check-in gostiju u hotelima, hostelima i apartmanskim zgradama.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.18.0-2D3748?style=flat-square&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Vercel-336791?style=flat-square&logo=postgresql)

---

## 📋 Sadržaj

- [O Projektu](#-o-projektu)
- [Tehnologije](#-tehnologije)
- [Funkcionalnosti](#-funkcionalnosti)
- [Preduslov za instalaciju](#-preduslov-za-instalaciju)
- [Instalacija](#-instalacija)
- [Konfiguracija](#-konfiguracija)
- [Pokretanje](#-pokretanje)
- [Struktura Projekta](#-struktura-projekta)
- [Baza Podataka](#-baza-podataka)
- [API Rute](#-api-rute)
- [Internacionalizacija](#-internacionalizacija)
- [Deployment](#-deployment)
- [Skripta komande](#-skripta-komande)
- [Licenca](#-licenca)

---

## 🎯 O Projektu

**Digital Reception** je moderna web aplikacija dizajnirana za automatizaciju procesa prijave gostiju u ugostiteljskim objektima. Sistem omogućava:

- Brži check-in bez čekanja u redu
- Smanjenje operativnih troškova
- Dostupnost 24/7
- Integracju sa PMS sistemima
- Višejezična podrška (srpski, engleski, hrvatski)

**Ciljno tržište:** Hoteli, hosteli i apartmanski kompleksi u Srbiji, Hrvatskoj i drugim tržištima.

---

## 🚀 Tehnologije

### Frontend
- **Framework:** [Next.js 15.5.6](https://nextjs.org/) (App Router)
- **UI Library:** [React 19.1.0](https://react.dev/)
- **Jezik:** [TypeScript 5](https://www.typescriptlang.org/)
- **Stilizacija:** [Tailwind CSS 4](https://tailwindcss.com/) (PostCSS v4)
- **Animacije:** [Framer Motion 12.23.24](https://www.framer.com/motion/)
- **Ikone:** [Lucide React 0.546.0](https://lucide.dev/)

### Backend & Baza
- **Baza:** PostgreSQL (Vercel Postgres)
- **ORM:** [Prisma 6.18.0](https://www.prisma.io/)
- **API:** Next.js API Routes
- **Email Servis:** [Resend 6.2.2](https://resend.com/)

### Internacionalizacija
- **Biblioteka:** [next-intl 4.5.0](https://next-intl-docs.vercel.app/)
- **Podržani jezici:** Srpski (sr), Engleski (en), Hrvatski (hr)
- **Default:** Srpski (bez prefiksa u URL-u)

### Dev Tools
- **Linting:** ESLint 9
- **Build Tool:** Turbopack (brži razvoj i build)
- **Verzija kontrola:** Git

---

## ✨ Funkcionalnosti

### Javne stranice
- **Početna stranica** - Hero sekcija, vrednosti, proces, testimonijali, FAQ
- **Stranica proizvoda** - Detaljne specifikacije, galerija, paketi
- **Kontakt stranica** - Kontakt forma, Calendly widget, FAQ
- **O nama** - Informacije o kompaniji
- **Privatnost** - Politika privatnosti

### Backend funkcionalnosti
- **Kontakt forma API** - Slanje upita sa automatskim odgovorom
- **Newsletter API** - Pretplata + slanje PDF brošure
- **Baza podataka** - PostgreSQL za skladištenje pretplatnika
- **Email servis** - Profesionalni HTML email-ovi preko Resend

### UX/UI
- **Responsive dizajn** - Prilagođeno za sve uređaje
- **Animacije** - Smooth scroll, fade-in, scale efekti
- **SEO optimizovano** - Meta tagovi, Open Graph, JSON-LD
- **Multilingual** - Automatska detekcija jezika
- **Dark patterns** - Newsletter modal sa brošurom

---

## 📦 Preduslov za instalaciju

Pre instalacije, osigurajte da imate sledeće:

- **Node.js** - verzija 20.x ili novija ([preuzmi ovde](https://nodejs.org/))
- **npm** ili **yarn** ili **pnpm** - package manager
- **PostgreSQL** - baza podataka (lokalna ili Vercel Postgres)
- **Git** - za kloniranje repozitorijuma

Provera instalacije:

```bash
node --version   # v20.0.0 ili noviji
npm --version    # 10.0.0 ili noviji
git --version    # 2.0.0 ili noviji
```

---

## 🔧 Instalacija

### 1. Kloniranje repozitorijuma

```bash
git clone https://github.com/your-username/digital-reception.git
cd digital-reception
```

### 2. Instalacija zavisnosti

```bash
npm install
```

**Alternativno sa drugim package manager-ima:**

```bash
# Yarn
yarn install

# pnpm
pnpm install
```

---

## ⚙️ Konfiguracija

### 1. Kreiranje `.env.local` fajla

Kreirajte `.env.local` fajl u root direktorijumu projekta:

```bash
touch .env.local
```

### 2. Dodavanje promenljivih okruženja

Dodajte sledeće promenljive u `.env.local`:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

# Email Service (Resend)
RESEND_API_KEY="re_your_resend_api_key"
FROM_EMAIL="noreply@yourdomain.com"
ADMIN_EMAIL="admin@yourdomain.com"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_APP_VERSION="1.0.0"
COMPANY_NAME="Digital Reception"

# Integrations
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-calendly-url"

# Files
BROCHURE_PDF_URL="/DigitalnaRecepcijaBrosura.pdf"

# Analytics (opciono)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### 3. Postavljanje baze podataka

#### Opcija A: Vercel Postgres (preporučeno za production)

1. Napravite nalog na [Vercel](https://vercel.com/)
2. Idite na Dashboard > Storage > Create Database
3. Izaberite PostgreSQL
4. Kopirajte `DATABASE_URL` i dodajte u `.env.local`

#### Opcija B: Lokalna PostgreSQL baza

```bash
# Pokrenite PostgreSQL lokalno
psql postgres

# Kreirajte bazu
CREATE DATABASE digital_reception;

# Izađite
\q
```

Zatim postavite `DATABASE_URL`:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/digital_reception"
```

### 4. Pokretanje migracija baze

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Ovo će:
- Generisati Prisma Client
- Kreirati tabele u bazi
- Primeniti migracije

### 5. Postavljanje Resend (Email servis)

1. Napravite nalog na [Resend](https://resend.com/)
2. Idite na Dashboard > API Keys
3. Kreirajte novi API key
4. Dodajte ga u `.env.local` kao `RESEND_API_KEY`

**Napomena:** Za testiranje, možete koristiti sandbox email: `onboarding@resend.dev`

---

## 🚀 Pokretanje

### Development mod

```bash
npm run dev
```

Aplikacija će biti dostupna na: **http://localhost:3000**

Features u development modu:
- Hot reload (automatsko osvežavanje)
- Turbopack (brži build)
- Error overlay
- TypeScript type checking

### Production build

```bash
# Build aplikacije
npm run build

# Pokretanje production servera
npm start
```

### Linting

```bash
npm run lint
```

---

## 📁 Struktura Projekta

```
digital-reception/
├── app/                                # Next.js App Router
│   ├── [locale]/                       # Locale-specific routes
│   │   ├── layout.tsx                  # Layout sa SEO i metadata
│   │   ├── page.tsx                    # Početna stranica
│   │   ├── kontakt/                    # Kontakt stranica
│   │   ├── proizvod/                   # Stranica proizvoda
│   │   ├── o-nama/                     # O nama stranica
│   │   └── privatnost/                 # Privatnost stranica
│   ├── api/                            # API routes
│   │   ├── contact/route.ts            # Kontakt forma API
│   │   └── newsletter/route.ts         # Newsletter API
│   ├── components/                     # React komponente
│   │   ├── layout/                     # Layout komponente
│   │   │   ├── Navbar.tsx              # Navigacija
│   │   │   ├── Footer.tsx              # Footer
│   │   │   └── LanguageSwitcher.tsx    # Prebacivanje jezika
│   │   ├── home/                       # Početna stranica komponente
│   │   │   ├── Hero.tsx                # Hero sekcija
│   │   │   ├── ValueProps.tsx          # Vrednosti
│   │   │   ├── HowItWorks.tsx          # Kako funkcioniše
│   │   │   ├── Testimonials.tsx        # Testimonijali
│   │   │   └── FAQ.tsx                 # Često postavljana pitanja
│   │   ├── proizvod/                   # Proizvod komponente
│   │   │   ├── ProductHero.tsx         # Proizvod hero
│   │   │   ├── ProductSpecs.tsx        # Specifikacije
│   │   │   └── ComparisonTable.tsx     # Tabela poređenja
│   │   ├── contact/                    # Kontakt komponente
│   │   │   ├── ContactForm.tsx         # Kontakt forma
│   │   │   └── CalendlyEmbed.tsx       # Calendly widget
│   │   └── shared/                     # Deljene komponente
│   │       ├── AnimatedDots.tsx        # Animirane tačke
│   │       ├── CTASection.tsx          # Call-to-action
│   │       └── NewsletterModal.tsx     # Newsletter modal
│   ├── lib/                            # Utility funkcije
│   │   ├── prisma.ts                   # Prisma client
│   │   └── email.ts                    # Email servisi
│   └── globals.css                     # Globalni stilovi i animacije
├── i18n/                               # Internacionalizacija config
│   ├── request.ts                      # Server-side i18n
│   └── routing.ts                      # Locale routing
├── messages/                           # Prevodi
│   ├── sr.json                         # Srpski
│   ├── en.json                         # Engleski
│   └── hr.json                         # Hrvatski
├── prisma/                             # Prisma setup
│   ├── schema.prisma                   # Database schema
│   └── migrations/                     # Migracije
├── public/                             # Statički fajlovi
│   ├── images/                         # Slike proizvoda
│   ├── 1.svg, 2.svg, 3.svg             # Logotipi
│   ├── favicon-*.png                   # Favicon
│   └── DigitalnaRecepcijaBrosura.pdf   # PDF brošura
├── .env.local                          # Lokalne env promenljive (ne commit-uje se)
├── .gitignore                          # Git ignore pravila
├── next.config.ts                      # Next.js konfiguracija
├── tsconfig.json                       # TypeScript config
├── tailwind.config.ts                  # Tailwind config
├── package.json                        # Dependencies
└── README.md                           # Ova dokumentacija
```

---

## 🗄️ Baza Podataka

### Prisma Schema

Projekat koristi PostgreSQL bazu sa sledećim modelom:

```prisma
model NewsletterSubscriber {
  id           String    @id @default(cuid())
  email        String    @unique
  name         String?
  phone        String?

  // Status tracking
  status       String    @default("active")
  brochureSent Boolean   @default(false)
  sentAt       DateTime?

  // GDPR & Marketing
  gdprConsent  Boolean   @default(false)

  // Metadata
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  ipAddress    String?
  userAgent    String?
  notes        String?

  @@index([email])
  @@index([createdAt])
  @@map("newsletter_subscribers")
}
```

### Prisma Komande

```bash
# Generisanje Prisma Client-a
npx prisma generate

# Kreiranje nove migracije
npx prisma migrate dev --name migration_name

# Primena migracija na production
npx prisma migrate deploy

# Resetovanje baze (PAŽNJA: briše sve podatke)
npx prisma migrate reset

# Otvaranje Prisma Studio (GUI za bazu)
npx prisma studio
```

---

## 🔌 API Rute

### 1. **Kontakt Form API**

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "ime": "Ime Prezime",
  "email": "email@example.com",
  "telefon": "+381 60 123 4567",
  "predmet": "Upit o proizvodu",
  "poruka": "Tekst poruke..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Poruka uspešno poslata!"
}
```

**Funkcionalnost:**
- Validacija email adrese
- Slanje notifikacije adminu
- Automatski odgovor korisniku
- HTML formatirani email-ovi

---

### 2. **Newsletter API**

**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "email@example.com",
  "name": "Ime Prezime",
  "phone": "+381 60 123 4567",
  "gdprConsent": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Brošura poslata na email!",
  "subscriber": {
    "id": "clxxx...",
    "email": "email@example.com"
  }
}
```

**Funkcionalnost:**
- Čuvanje pretplatnika u bazi
- Slanje PDF brošure na email
- Prevencija duplikata (409 Conflict)
- GDPR consent tracking
- IP i User Agent logging

---

**Endpoint:** `GET /api/newsletter`

**Response:**
```json
{
  "total": 150,
  "brochuresSent": 145,
  "pending": 5
}
```

**Funkcionalnost:** Admin statistika

---

## 🌍 Internacionalizacija

Projekat podržava **tri jezika**:

| Jezik | Kod | URL Prefix | Default |
|-------|-----|------------|---------|
| Srpski | `sr` | `/` | ✅ |
| Engleski | `en` | `/en` | ❌ |
| Hrvatski | `hr` | `/hr` | ❌ |

### Konfiguracija

**Fajl:** `i18n/routing.ts`

```typescript
export const routing = {
  defaultLocale: "sr",
  locales: ["sr", "en", "hr"],
  localePrefix: "as-needed", // sr nema prefix
};
```

### Dodavanje prevoda

**Lokacija:** `messages/{locale}.json`

Primer strukture:

```json
{
  "navbar": {
    "home": "Početna",
    "product": "Proizvod",
    "contact": "Kontakt"
  },
  "hero": {
    "title": "Digitalna Recepcija",
    "subtitle": "Automatizujte check-in proces"
  }
}
```

### Korišćenje u komponentama

```typescript
// Server komponenta
import { getTranslations } from "next-intl/server";

const t = await getTranslations("navbar");
const title = t("home"); // "Početna"

// Client komponenta
"use client";
import { useTranslations } from "next-intl";

const t = useTranslations("navbar");
const title = t("home"); // "Početna"
```

---

## 🚢 Deployment

### Vercel (Preporučeno)

1. **Push na GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Povezivanje sa Vercel**

- Idite na [vercel.com](https://vercel.com/)
- Kliknite "New Project"
- Importujte GitHub repozitorijum
- Vercel će automatski detektovati Next.js

3. **Dodavanje Environment Variables**

U Vercel Dashboard > Settings > Environment Variables, dodajte:

```
DATABASE_URL
RESEND_API_KEY
FROM_EMAIL
ADMIN_EMAIL
NEXT_PUBLIC_CALENDLY_URL
```

4. **Deploy**

Vercel će automatski deploy-ovati:
- Na svaki push na `main` branch
- Preview deploy za pull request-ove

---

### Alternative (Docker, VPS)

#### Docker Deployment

Kreirajte `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build i pokreni:

```bash
docker build -t digital-reception .
docker run -p 3000:3000 --env-file .env.local digital-reception
```

---

## 📜 Skripta komande

| Komanda | Opis |
|---------|------|
| `npm run dev` | Pokreće development server sa Turbopack |
| `npm run build` | Build production verzije |
| `npm start` | Pokreće production server |
| `npm run lint` | Pokreće ESLint |
| `npx prisma studio` | Otvara Prisma Studio (GUI za bazu) |
| `npx prisma generate` | Generiše Prisma Client |
| `npx prisma migrate dev` | Kreira i primenjuje migracije |

---

## 🎨 Stilizacija

### Tailwind CSS v4

Projekat koristi **Tailwind CSS 4** sa PostCSS v4 integracijom.

**Custom boje:**

```css
/* Orange (primary) */
orange-50 do orange-950

/* Peach (secondary) */
peach-50 do peach-950

/* Cream (accent) */
cream-50 do cream-950
```

**Custom animacije:**

```css
@keyframes fade-in-up { ... }
@keyframes fade-in { ... }
@keyframes scale-in { ... }
@keyframes dots-float { ... }
```

**Responsive breakpoints:**

- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px
- `macbook:` 1512px (MacBook Pro 14")

---

## 🔒 Sigurnost

### Implementirane mere

- ✅ Email validacija (regex pattern)
- ✅ GDPR consent tracking
- ✅ IP address logging
- ✅ User agent tracking
- ✅ XSS prevention (Next.js default)
- ✅ CORS headers konfigurisani
- ✅ SSL/TLS via Vercel
- ✅ Environment variables za osetljive podatke
- ✅ Rate limiting (kroz Vercel Edge Functions)

---

## 🤝 Doprinos

Projekat je trenutno privatni. Za doprinose:

1. Fork repozitorijum
2. Kreirajte feature branch (`git checkout -b feature/nova-funkcionalnost`)
3. Commit promena (`git commit -m 'Dodata nova funkcionalnost'`)
4. Push na branch (`git push origin feature/nova-funkcionalnost`)
5. Otvorite Pull Request

---

## 📞 Kontakt

**InovaTech IT**
- **Email:** boris@inovatechit.com
- **Website:** https://digital-reception.vercel.app
- **Lokacije:**
  - 📍 Beograd, Srbija
  - 📍 Prag, Češka Republika

---

## 📄 Licenca

Ovaj projekat je vlasnički softver kompanije InovaTech IT. Sva prava zadržana © 2025.

---

## 🙏 Zahvalnice

Izgrađeno sa:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com/)
- [Vercel](https://vercel.com/)

---

## 🐛 Problemi i Podrška

Za prijavu bagova ili zahteve za nove funkcionalnosti:
- Otvorite **Issue** na GitHub-u
- Pošaljite email na boris@inovatechit.com

---

## 📚 Dodatni Resursi

- [Next.js Dokumentacija](https://nextjs.org/docs)
- [Prisma Dokumentacija](https://www.prisma.io/docs)
- [next-intl Dokumentacija](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Dokumentacija](https://tailwindcss.com/docs)
- [Vercel Deployment Dokumentacija](https://vercel.com/docs)

---

**Verzija:** 1.0.0
**Poslednje ažurirano:** Januar 2025
**Status:** ✅ Production Ready

---

Made with ❤️ by [InovaTech IT](https://inovatechit.com)
