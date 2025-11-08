import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// VIEWPORT CONFIGURATION
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#f97316",
};

// SEO SUPER OPTIMIZACIJA - Meta tags
export const metadata: Metadata = {
  metadataBase: new URL("https://hotelsync.org"),

  // BASIC META
  title: {
    default:
      "Digitalna Recepcija | Automatski Check-in Kiosk za Hotele - 30 Sekundi",
    template: "%s | Digitalna Recepcija",
  },

  description:
    "Najmodernija digitalna recepcija za potpuno automatizovan hotel check-in za samo 30 sekundi. 24/7 dostupnost, eTurista integracija, smanjenje troškova do 60%. Preko 20+ hotela koristi naš sistem. Zatražite besplatnu demo prezentaciju!",

  keywords: [
    // Primary keywords
    "digitalna recepcija",
    "automatski check-in hotel",
    "hotel check-in kiosk",
    "self check-in kiosk",

    // Secondary keywords
    "hotel automation",
    "digitalna prijava gostiju",
    "automatska recepcija",
    "touchscreen hotel kiosk",
    "hotel reception automation",

    // Long-tail keywords
    "check-in za 30 sekundi",
    "24/7 hotel recepcija",
    "digitalni hotel kiosk Srbija",
    "eTurista automatska prijava",
    "PMS integracija hotel",
    "contactless hotel check-in",
    "bezkontaktni check-in",
    "automatizacija hotela",

    // Location-based
    "hotel kiosk Beograd",
    "digitalna recepcija Srbija",
    "hotel automatizacija Balkan",
  ],

  authors: [{ name: "Inova Tech IT", url: "https://inovatechit.com" }],

  creator: "Inova Tech IT",
  publisher: "Inova Tech IT",

  // OPEN GRAPH (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "sr_RS",
    alternateLocale: ["en_US", "hr_HR"],
    url: "https://hotelsync.org",
    siteName: "Digitalna Recepcija",
    title: "Digitalna Recepcija | Automatski Hotel Check-in za 30 Sekundi",
    description:
      "Automatizujte vaš hotel sa najmodernijom digitalnom recepcijom. Check-in za 30 sekundi, 24/7 dostupnost, eTurista integracija. Preko 20+ hotela već koristi naš sistem!",
    images: [
      {
        url: "https://hotelsync.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digitalna Recepcija - Automatski Hotel Check-in Kiosk",
      },
    ],
  },

  // TWITTER CARD
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Digitalna Recepcija | Hotel Check-in Automation",
    description:
      "Automatski check-in kiosk za hotele. 30 sekundi, 24/7 dostupnost, eTurista integracija. Zatražite demo!",
    images: ["https://hotelsync.org/twitter-image.jpg"],
  },

  // ROBOTS & INDEXING
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // VERIFICATION
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // CATEGORY
  category: "technology",

  // ALTERNATE LANGUAGES
  alternates: {
    canonical: "https://hotelsync.org",
    languages: {
      "sr-RS": "https://hotelsync.org",
      "en-US": "https://hotelsync.org/en",
    },
  },

  // OTHER META
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ICONS & MANIFEST
  icons: {
    icon: [
      { url: "/1.png", sizes: "32x32", type: "image/png" },
      { url: "/1.png", sizes: "16x16", type: "image/png" },
      { url: "/1.png" },
    ],
    apple: [{ url: "/1.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/1.png" }],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Schema.org JSON-LD - MAIN BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Digitalna Recepcija",
              description:
                "Automatski check-in kiosk za hotele sa touchscreen-om, integrisanim plaćanjem i eTurista prijavom",
              image: "https://hotelsync.org/product-image.jpg",
              brand: {
                "@type": "Brand",
                name: "Inova Tech IT",
                logo: "https://hotelsync.org/logo.png",
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "EUR",
                lowPrice: "999",
                highPrice: "1999",
                offerCount: "3",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "Inova Tech IT",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Marko Petrović",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "Digitalna recepcija je revolucionisala naš posao. Gosti su oduševljeni, a mi smo smanjili troškove.",
                },
              ],
              manufacturer: {
                "@type": "Organization",
                name: "Inova Tech IT",
                url: "https://inovatechit.com",
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD - LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Digitalna Recepcija - Inova Tech IT",
              image: "https://hotelsync.org/office-image.jpg",
              "@id": "https://hotelsync.org",
              url: "https://hotelsync.org",
              telephone: "+381641238587",
              email: "info@inovatechit.com",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vaša ulica 123",
                addressLocality: "Beograd",
                postalCode: "11000",
                addressCountry: "RS",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.7866,
                longitude: 20.4489,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/inovatechit/",
                "https://www.instagram.com/yourpage",
              ],
            }),
          }}
        />

        {/* Schema.org JSON-LD - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Koliko traje instalacija digitalne recepcije?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Instalacija digitalne recepcije traje između 2-4 sata, u zavisnosti od kompleksnosti integracije sa postojećim sistemima. Naš tim će se pobrinuti da sve bude podešeno i testirano.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Koliko košta digitalna recepcija?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cena digitalne recepcije počinje od 999€ za osnovni paket. Kontaktirajte nas za detaljnu ponudu prilagođenu vašim potrebama.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Da li se integriše sa PMS sistemom?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da! Digitalna recepcija se integriše sa većinom popularnih PMS sistema kao što su Opera, Cloudbeds, Mews i drugi.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="Serbian" />
        <meta name="geo.region" content="RS" />
        <meta name="geo.placename" content="Beograd" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>

      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
