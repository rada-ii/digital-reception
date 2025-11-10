import { NextRequest, NextResponse } from "next/server";
import {
  sendAdminContactEmail,
  sendAutoresponseEmail,
} from "../../lib/email";

/**
 * Contact API Route
 *
 * PUTANJA: /api/contact
 * METODA: POST
 *
 * ŠTA RADI:
 * ✅ Prima podatke iz kontakt forme
 * ✅ Validira podatke
 * ✅ Šalje email poruku adminu preko Brevo
 * ✅ Šalje autoresponse korisniku preko Brevo
 */

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

    // 1. Slanje emaila ADMINU preko Brevo
    await sendAdminContactEmail({
      adminEmail: process.env.ADMIN_EMAIL || "admin@inovatechit.com",
      userEmail: body.email,
      userName: body.ime,
      userPhone: body.telefon,
      subject: body.predmet,
      message: body.poruka,
    });

    // 2. Slanje AUTORESPONSE emaila korisniku preko Brevo
    await sendAutoresponseEmail(body.email, body.ime);

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
