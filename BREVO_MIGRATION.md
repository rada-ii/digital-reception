# Migracija na Brevo Email Service

## Pregled Promena

Sistem za slanje emailova je migriran sa **Resend** na **Brevo** (ranije SendinBlue). Svi emailovi se sada šalju preko Brevo API-ja sa konfigurisanom sender adresom `borishst@gmail.com`.

## Šta je Promenjeno?

### 1. Email Servis (`app/lib/email.ts`)
- ✅ Zamenjen Resend SDK sa `@getbrevo/brevo`
- ✅ Sve funkcije za slanje emailova koriste Brevo API
- ✅ PDF attachments se konvertuju u base64 format
- ✅ Dodate nove funkcije:
  - `sendNewsletterEmail()` - šalje brošuru sa PDF attachment-om
  - `sendAdminContactEmail()` - šalje kontakt formu adminu
  - `sendAutoresponseEmail()` - šalje autoresponse korisniku

### 2. API Routes
- ✅ `/api/contact/route.ts` - ažuriran za korišćenje Brevo funkcija
- ✅ `/api/newsletter/route.ts` - već koristi funkcije iz `lib/email.ts`

### 3. Evidencija Poslate Pošte
Evidencija se **već vodi** u PostgreSQL bazi preko Prisma ORM-a:

**Tabela: `newsletter_subscribers`**
- `email` - email korisnika (unique)
- `name` - ime korisnika
- `phone` - telefon (opciono)
- `brochureSent` - da li je brošura poslata (boolean)
- `sentAt` - timestamp kada je poslata
- `status` - status pretplate (active/inactive)
- `gdprConsent` - saglasnost za obradu podataka
- `ipAddress`, `userAgent` - metadata
- `notes` - interne beleške

## Konfiguracija

### Environment Varijable

Kreiraj `.env` fajl na osnovu `.env.example`:

```bash
# Brevo API Key
BREVO_API_KEY="your-brevo-api-key-here"

# Email Configuration
FROM_EMAIL="borishst@gmail.com"
ADMIN_EMAIL="admin@inovatechit.com"

# Database
DATABASE_URL="postgresql://..."
```

### Kako Dobiti Brevo API Key?

1. Idi na [Brevo](https://www.brevo.com/)
2. Registruj se / prijavi se
3. Idi na **Settings → API Keys** (https://app.brevo.com/settings/keys/api)
4. Kreiraj novi API key
5. Kopiraj key u `.env` fajl kao `BREVO_API_KEY`

### Verifikacija Sender Email-a

**VAŽNO:** Pre nego što možeš da šalješ emailove sa `borishst@gmail.com`, moraš da verifikuješ ovaj email u Brevo dashboard-u:

1. Idi na **Senders → Domains & Addresses**
2. Dodaj `borishst@gmail.com` kao verified sender
3. Potvrdi email verifikaciju

## Instalacija

```bash
# Instaliraj zavisnosti
npm install

# Pokreni Prisma migraciju (ako već nije)
npx prisma migrate dev

# Pokreni aplikaciju
npm run dev
```

## Testiranje

### 1. Newsletter Forma
- Popuni formu na homepage-u
- Proveri da li email stiže sa PDF attachment-om
- Proveri bazu da li je zapis kreiran:
  ```sql
  SELECT * FROM newsletter_subscribers ORDER BY created_at DESC LIMIT 10;
  ```

### 2. Kontakt Forma
- Popuni kontakt formu na `/kontakt` stranici
- Admin email treba da stigne na `ADMIN_EMAIL`
- Korisnik treba da dobije autoresponse

## Prednosti Brevo-a

- ✅ **Besplatni plan**: 300 emailova/dnevno
- ✅ **Transactional emails**: Idealno za brošure i notifikacije
- ✅ **Email tracking**: Statistika otvaranja, klikova
- ✅ **Attachment support**: PDF brošure
- ✅ **Deliverability**: Visok delivery rate

## Migracija Podataka

Ako imaš postojeće email zapise iz starog sistema, možeš ih importovati ručno u bazu ili kroz Brevo dashboard.

## Troubleshooting

### Problem: "Email nije poslat"
- Proveri da li je `BREVO_API_KEY` postavljen u `.env`
- Proveri da li je sender email (`FROM_EMAIL`) verifikovan u Brevo

### Problem: "PDF nije priložen"
- Proveri da li postoji fajl: `public/DigitalnaRecepcijaBrosura.pdf`
- Proveri da li je putanja tačna u `lib/email.ts`

### Problem: "Duplikat email"
- Sistem automatski sprečava duplikate u bazi
- Korisnik dobija poruku: "Već ste primili brošuru"

## Dokumentacija

- [Brevo API Docs](https://developers.brevo.com/)
- [Brevo Node.js SDK](https://github.com/getbrevo/brevo-node)

---

**Autor:** Claude
**Datum:** 2025-11-10
**Verzija:** 1.0
