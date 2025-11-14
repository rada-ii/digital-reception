# Digital Reception

B2B SaaS web application for hotel reception automation. Full-stack Next.js project with multilingual support, email integration, and PostgreSQL database.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.18.0-2D3748?style=flat-square&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Vercel-336791?style=flat-square&logo=postgresql)

---

## 🎯 About

Modern web application for automating guest check-in at hotels and hostels. Features include automated kiosk system, multilingual support (Serbian, English, Croatian), and integration capabilities with PMS systems.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.6 (App Router, Turbopack)
- **Frontend:** React 19.1.0, TypeScript 5
- **Styling:** Tailwind CSS 4, Framer Motion
- **Backend:** Next.js API Routes, Prisma ORM 6.18.0
- **Database:** PostgreSQL (Vercel Postgres)
- **i18n:** next-intl 4.5.0 (Serbian, English, Croatian)
- **Email:** Resend API

---

## ✨ Key Features

- **Multilingual Support:** Dynamic routing with next-intl (sr/en/hr)
- **Email System:** Contact form + newsletter with Resend API
- **Database:** PostgreSQL with Prisma ORM, subscriber management
- **Animations:** Framer Motion for smooth UX
- **SEO Optimized:** Meta tags, Open Graph, JSON-LD
- **Responsive Design:** Mobile-first approach
- **API Routes:** Contact form and newsletter endpoints

---

## 🔧 Installation

```bash
# Clone repository
git clone https://github.com/your-username/digital-reception.git
cd digital-reception

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Configure Prisma
npx prisma generate
npx prisma migrate dev

# Run development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL="postgresql://..."
RESEND_API_KEY="re_..."
FROM_EMAIL="noreply@domain.com"
ADMIN_EMAIL="admin@domain.com"
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/..."
```

---

## 🚀 Scripts

```bash
npm run dev    # Development server (Turbopack)
npm run build  # Production build
npm start      # Production server
npm run lint   # ESLint
```

---

## 📁 Project Structure

```
app/
├── [locale]/          # Dynamic i18n routes
├── api/               # API routes (contact, newsletter)
├── components/        # React components
└── lib/               # Utilities (Prisma, email)
i18n/                  # Internationalization config
messages/              # Translation files (sr, en, hr)
prisma/                # Database schema & migrations
```

---

## 🔌 API Routes

### Contact Form
`POST /api/contact` - Sends email notifications with auto-response

### Newsletter
`POST /api/newsletter` - Saves subscriber to DB, sends PDF brochure
`GET /api/newsletter` - Admin statistics

---

## 🌍 Internationalization

- **Locales:** Serbian (sr), English (en), Croatian (hr)
- **Default:** Serbian (no prefix in URL)
- **Library:** next-intl with dynamic routing

```typescript
// Server component
const t = await getTranslations("navbar");

// Client component
const t = useTranslations("navbar");
```

---

## 🚀 Deployment

Optimized for **Vercel**:
1. Connect GitHub repository
2. Add environment variables
3. Auto-deploy on push to master

---

## 📄 License

MIT License - © 2025

---

**Status:** Production Ready | **Version:** 1.0.0
