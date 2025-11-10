import * as brevo from "@getbrevo/brevo";
import * as fs from "fs";
import * as path from "path";

/**
 * Email Service Utility
 *
 * Lokacija: /lib/email.ts
 *
 * ŠTA RADI:
 * - Inicijalizuje Brevo klijent
 * - Funkcije za slanje email-ova
 * - Email templating
 * - PDF attachment handling
 *
 * KORISTI SE U: API routes
 */

// Inicijalizacija Brevo API klijenta
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

interface SendNewsletterEmailParams {
  to: string;
  name: string;
  brochureUrl?: string;
}

interface SendContactEmailParams {
  adminEmail: string;
  userEmail: string;
  userName: string;
  userPhone?: string;
  subject?: string;
  message: string;
}

/**
 * Šalje newsletter email sa brošurom kao PDF attachment preko Brevo
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

    // Učitaj PDF fajl kao buffer i konvertuj u base64 za Brevo
    const pdfBuffer = fs.readFileSync(pdfPath);
    const pdfBase64 = pdfBuffer.toString("base64");

    // Kreiranje Brevo email objekta
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    // Sender info - koristi borishst@gmail.com
    sendSmtpEmail.sender = {
      name: "Digitalna Recepcija",
      email: process.env.FROM_EMAIL || "borishst@gmail.com",
    };

    // Recipient
    sendSmtpEmail.to = [
      {
        email: to,
        name: name,
      },
    ];

    sendSmtpEmail.subject = "📄 Vaša Brošura - Digitalna Recepcija";
    sendSmtpEmail.htmlContent = getNewsletterEmailTemplate(name, brochureUrl);

    // KRITIČNO: PDF brošura kao attachment (base64 format za Brevo)
    sendSmtpEmail.attachment = [
      {
        content: pdfBase64,
        name: "Digitalna-Recepcija-Brosura.pdf",
      },
    ];

    // Slanje emaila preko Brevo API
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("✅ Email uspešno poslat preko Brevo:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ Email service greška (Brevo):", error);
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

/**
 * Šalje email ADMINU sa podacima kontakt forme preko Brevo
 */
export async function sendAdminContactEmail({
  adminEmail,
  userEmail,
  userName,
  userPhone,
  subject,
  message,
}: SendContactEmailParams) {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "Digitalna Recepcija",
      email: process.env.FROM_EMAIL || "borishst@gmail.com",
    };

    sendSmtpEmail.to = [
      {
        email: adminEmail,
        name: "Admin",
      },
    ];

    sendSmtpEmail.subject = `Nova Kontakt Poruka - ${subject || "Opšte Pitanje"}`;
    sendSmtpEmail.htmlContent = getAdminEmailTemplate({
      ime: userName,
      email: userEmail,
      telefon: userPhone,
      predmet: subject,
      poruka: message,
    });

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Admin email uspešno poslat preko Brevo:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ Greška pri slanju admin emaila (Brevo):", error);
    throw error;
  }
}

/**
 * Šalje autoresponse email korisniku preko Brevo
 */
export async function sendAutoresponseEmail(userEmail: string, userName: string) {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "Digitalna Recepcija",
      email: process.env.FROM_EMAIL || "borishst@gmail.com",
    };

    sendSmtpEmail.to = [
      {
        email: userEmail,
        name: userName,
      },
    ];

    sendSmtpEmail.subject = "Hvala na poruci - Digitalna Recepcija";
    sendSmtpEmail.htmlContent = getAutoresponseTemplate(userName);

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Autoresponse email uspešno poslat preko Brevo:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ Greška pri slanju autoresponse emaila (Brevo):", error);
    throw error;
  }
}

/**
 * EMAIL TEMPLATE ZA ADMINA
 */
function getAdminEmailTemplate(data: {
  ime: string;
  email: string;
  telefon?: string;
  predmet?: string;
  poruka: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Kontakt Poruka</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">
                🔔 Nova Kontakt Poruka
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">

              <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #0f172a; margin: 0 0 15px;">👤 Informacije o pošiljaocu:</h3>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Ime:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${data.ime}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #0f172a;">
                      <a href="mailto:${data.email}" style="color: #f97316; text-decoration: none;">
                        ${data.email}
                      </a>
                    </td>
                  </tr>
                  ${
                    data.telefon
                      ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Telefon:</td>
                    <td style="padding: 8px 0; color: #0f172a;">
                      <a href="tel:${data.telefon}" style="color: #f97316; text-decoration: none;">
                        ${data.telefon}
                      </a>
                    </td>
                  </tr>
                  `
                      : ""
                  }
                  ${
                    data.predmet
                      ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Predmet:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${data.predmet}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>

              <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 20px; border-radius: 8px;">
                <h3 style="color: #0f172a; margin: 0 0 15px;">💬 Poruka:</h3>
                <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                  ${data.poruka}
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                Digitalna Recepcija | Sistem za kontakt forme
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

/**
 * AUTORESPONSE TEMPLATE ZA KORISNIKA
 */
function getAutoresponseTemplate(ime: string): string {
  return `
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hvala na poruci</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">
                Digitalna Recepcija
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">

              <!-- Icon -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 80px; height: 80px; background-color: #ffedd5; border-radius: 50%;">
                  <span style="font-size: 40px; line-height: 80px;">✉️</span>
                </div>
              </div>

              <!-- Title -->
              <h2 style="color: #0f172a; font-size: 24px; font-weight: bold; text-align: center; margin: 0 0 20px;">
                Hvala na poruci, ${ime}! 🎉
              </h2>

              <!-- Message -->
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 25px; text-align: center;">
                Primili smo vašu poruku i odgovorićemo vam u najkraćem roku.
              </p>

              <!-- Info Box -->
              <div style="border-left: 4px solid #f97316; background-color: #fff7ed; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <p style="color: #9a3412; font-size: 14px; margin: 0; line-height: 1.5;">
                  <strong>⏱️ Očekivano vreme odgovora:</strong> 2-24 sata (radnim danima)
                </p>
              </div>

              <!-- Contact Info -->
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h3 style="color: #0f172a; font-size: 16px; margin: 0 0 15px;">Hitno pitanje?</h3>
                <p style="color: #64748b; font-size: 14px; margin: 0 0 10px;">
                  📞 Telefon: <a href="tel:+381641238587" style="color: #f97316; text-decoration: none;">+381 64 123 8587</a>
                </p>
                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  ✉️ Email: <a href="mailto:info@inovatechit.com" style="color: #f97316; text-decoration: none;">info@inovatechit.com</a>
                </p>
              </div>

              <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0;">
                Ovo je automatska poruka. Molimo vas da ne odgovarate na ovaj email.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                © 2025 Digitalna Recepcija | Sva prava zadržana
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
