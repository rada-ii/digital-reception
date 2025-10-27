import { Resend } from "resend";
import * as fs from "fs";
import * as path from "path";

/**
 * Email Service Utility
 *
 * Lokacija: /lib/email.ts
 *
 * ŠTA RADI:
 * - Inicijalizuje Resend klijent
 * - Funkcije za slanje email-ova
 * - Email templating
 * - PDF attachment handling
 *
 * KORISTI SE U: API routes
 */

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendNewsletterEmailParams {
  to: string;
  name: string;
  brochureUrl?: string;
}

/**
 * Šalje newsletter email sa brošurom kao PDF attachment
 */
export async function sendNewsletterEmail({
  to,
  name,
  brochureUrl,
}: SendNewsletterEmailParams) {
  try {
    // Putanja do PDF brošure u public folderu
    const pdfPath = path.join(
      process.cwd(),
      "public",
      "DigitalnaRecepcijaBrosura.pdf"
    );

    // Proveri da li PDF postoji
    if (!fs.existsSync(pdfPath)) {
      console.error("❌ PDF brošura ne postoji na putanji:", pdfPath);
      throw new Error("PDF brošura nije pronađena");
    }

    // Učitaj PDF fajl kao buffer
    const pdfBuffer = fs.readFileSync(pdfPath);

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [to],
      subject: "📄 Vaša Brošura - Digitalna Recepcija",
      html: getNewsletterEmailTemplate(name, brochureUrl),

      // KRITIČNO: PDF brošura kao attachment
      attachments: [
        {
          filename: "Digitalna-Recepcija-Brosura.pdf",
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error("❌ Resend email greška:", error);
      throw new Error(error.message || "Email nije poslat");
    }

    console.log("✅ Email uspešno poslat:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ Email service greška:", error);
    throw error;
  }
}

/**
 * HTML template za newsletter email
 */
function getNewsletterEmailTemplate(
  name: string,
  brochureUrl?: string
): string {
  const companyName = process.env.COMPANY_NAME || "Digital Reception";
  const firstName = name.split(" ")[0]; // Izvuci prvo ime

  return `
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hvala na prijavi!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 40px 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                ${companyName}
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">

              <!-- Icon -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 80px; height: 80px; background-color: #ffedd5; border-radius: 50%;">
                  <span style="font-size: 40px; line-height: 80px;">📄</span>
                </div>
              </div>

              <!-- Title -->
              <h2 style="color: #0f172a; font-size: 24px; font-weight: bold; text-align: center; margin: 0 0 20px;">
                Hvala ${firstName}! 🎉
              </h2>

              <!-- Message -->
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 25px; text-align: center;">
                Drago nam je što ste zainteresovani za naša rešenja. Vaša brošura je <strong>priložena uz ovaj email</strong> kao PDF dokument.
              </p>

              <!-- Benefits List -->
              <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0 0 15px;">
                  📋 Šta ćete pronaći u brošuri:
                </p>
                <div style="margin-bottom: 15px;">
                  <span style="color: #f97316; font-weight: bold; font-size: 18px;">✓</span>
                  <span style="color: #334155; font-size: 15px; margin-left: 10px;">Kompletnu prezentaciju svih funkcija</span>
                </div>
                <div style="margin-bottom: 15px;">
                  <span style="color: #f97316; font-weight: bold; font-size: 18px;">✓</span>
                  <span style="color: #334155; font-size: 15px; margin-left: 10px;">Detaljni cenovnik paketa</span>
                </div>
                <div style="margin-bottom: 15px;">
                  <span style="color: #f97316; font-weight: bold; font-size: 18px;">✓</span>
                  <span style="color: #334155; font-size: 15px; margin-left: 10px;">Case study naših klijenata</span>
                </div>
                <div>
                  <span style="color: #f97316; font-weight: bold; font-size: 18px;">✓</span>
                  <span style="color: #334155; font-size: 15px; margin-left: 10px;">Tehničke specifikacije</span>
                </div>
              </div>

              ${
                brochureUrl
                  ? `
              <!-- Download Button (ako želiš i link) -->
              <div style="text-align: center; margin-bottom: 30px;">
                <a href="${brochureUrl}" style="display: inline-block; background-color: #f97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-weight: bold; font-size: 16px;">
                  📥 Preuzmite Brošuru
                </a>
              </div>
              `
                  : ""
              }

              <!-- Info Box -->
              <div style="border-left: 4px solid #f97316; background-color: #fff7ed; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px;">
                <p style="color: #9a3412; font-size: 14px; margin: 0; line-height: 1.5;">
                  <strong>💡 Sledeći korak:</strong> Naš tim će vas kontaktirati u roku od 24h da odgovori na sva vaša pitanja i dogovori besplatnu demo prezentaciju.
                </p>
              </div>

              <!-- Call to Action -->
              <div style="background-color: #f1f5f9; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 25px;">
                <p style="color: #1e293b; font-size: 15px; margin: 0 0 15px; font-weight: 600;">
                  Želite da zakažete demo odmah?
                </p>
                <a href="mailto:info@inovatechit.com" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  Kontaktirajte Nas
                </a>
              </div>

              <!-- Footer Message -->
              <p style="color: #64748b; font-size: 14px; line-height: 1.6; text-align: center; margin: 0;">
                Imate pitanja? Odgovorite direktno na ovaj email ili nas pozovite na <strong>+381 64 123 8587</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 10px;">
                ${companyName} | Moderna rešenja za digitalnu recepciju
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0 0 5px;">
                📞 +381 64 123 8587 | ✉️ info@inovatechit.com
              </p>
              <p style="color: #cbd5e1; font-size: 12px; margin: 0;">
                Možete se odjaviti u bilo kom trenutku. Poštujemo vašu privatnost.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
