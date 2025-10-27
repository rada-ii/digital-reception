import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact API Route
 *
 * PUTANJA: /api/contact
 * METODA: POST
 *
 * ŠTA RADI:
 * ✅ Prima podatke iz kontakt forme
 * ✅ Validira podatke
 * ✅ Šalje email poruku adminu
 * ✅ Šalje autoresponse korisniku
 */

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
  ime: string;
  email: string;
  telefon?: string;
  predmet?: string;
  poruka: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json();

    // Validacija obaveznih polja
    if (!body.ime || !body.email || !body.poruka) {
      return NextResponse.json(
        { error: "Molimo popunite sva obavezna polja" },
        { status: 400 }
      );
    }

    // Validacija email formata
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Neispravna email adresa" },
        { status: 400 }
      );
    }

    // 1. Slanje emaila ADMINU
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.ADMIN_EMAIL || "admin@inovatechit.com"],
      subject: `Nova Kontakt Poruka - ${body.predmet || "Opšte Pitanje"}`,
      html: getAdminEmailTemplate(body),
    });

    // 2. Slanje AUTORESPONSE emaila korisniku
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [body.email],
      subject: "Hvala na poruci - Digitalna Recepcija",
      html: getAutoresponseTemplate(body.ime),
    });

    console.log("Kontakt forma poslata:", body.email);

    return NextResponse.json(
      {
        success: true,
        message: "Poruka uspešno poslata!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API greška:", error);

    return NextResponse.json(
      {
        error: "Greška na serveru. Pokušajte ponovo kasnije.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// GET metoda za testiranje
export async function GET() {
  return NextResponse.json({
    message: "Contact API je aktivan",
    endpoints: {
      POST: "/api/contact - Za slanje kontakt poruke",
    },
  });
}

/**
 * EMAIL TEMPLATE ZA ADMINA
 */
function getAdminEmailTemplate(data: ContactData): string {
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
                      <a href="mailto:${
                        data.email
                      }" style="color: #f97316; text-decoration: none;">
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
