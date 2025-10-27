import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { sendNewsletterEmail } from "../../lib/email";

/**
 * POST /api/newsletter
 *
 * Endpoint za prijavu na newsletter i slanje brošure
 *
 * WORKFLOW:
 * 1. Prima podatke iz forme (email, name, phone, gdprConsent)
 * 2. Validira podatke
 * 3. Proverava da li email već postoji u bazi
 * 4. Ako postoji - vraća 409 Conflict
 * 5. Ako ne postoji - čuva u bazu i šalje email sa brošurom
 * 6. Update-uje bazu sa brochureSent: true i sentAt timestamp
 */

export async function POST(request: NextRequest) {
  try {
    // 1. Parsiranje body-ja
    const body = await request.json();
    const { email, name, phone, gdprConsent } = body;

    // 2. Validacija obaveznih polja
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email je obavezan" }, { status: 400 });
    }

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Ime je obavezno" }, { status: 400 });
    }

    if (!gdprConsent) {
      return NextResponse.json(
        { error: "Morate prihvatiti uslove korišćenja i politiku privatnosti" },
        { status: 400 }
      );
    }

    // 3. Validacija email formata
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nevažeća email adresa" },
        { status: 400 }
      );
    }

    // 4. Provera duplikata - da li email već postoji u bazi
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existingSubscriber) {
      // Email već postoji u bazi
      return NextResponse.json(
        {
          error: "Već ste primili brošuru",
          message:
            "Već ste se prijavili i primili brošuru na ovaj email. Proverite inbox ili spam folder.",
          alreadyExists: true,
        },
        { status: 409 } // 409 Conflict status
      );
    }

    // 5. Prikupljanje dodatnih metapodataka (opciono)
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // 6. Čuvanje u bazu - PRVO kreiramo zapis
    const subscriber = await prisma.newsletterSubscriber.create({
      data: {
        email: email.toLowerCase().trim(),
        name: name.trim(),
        phone: phone?.trim() || null,
        gdprConsent,
        status: "active",
        brochureSent: false, // Prvo postavi na false
        ipAddress: ipAddress.substring(0, 100), // Limit dužine
        userAgent: userAgent.substring(0, 500), // Limit dužine
      },
    });

    // 7. Slanje emaila sa brošurom
    try {
      await sendNewsletterEmail({
        to: email.toLowerCase().trim(),
        name: name.trim(),
      });

      // 8. Update baze - brošura je poslata
      await prisma.newsletterSubscriber.update({
        where: { id: subscriber.id },
        data: {
          brochureSent: true,
          sentAt: new Date(),
        },
      });

      console.log(`✅ Brošura poslata: ${email}`);

      return NextResponse.json(
        {
          success: true,
          message: "Brošura je uspešno poslata na vašu email adresu!",
        },
        { status: 201 }
      );
    } catch (emailError: any) {
      // Ako slanje emaila ne uspe, ipak čuvamo podatke u bazi
      // ali označavamo da brošura NIJE poslata
      console.error("❌ Greška pri slanju emaila:", emailError);

      // Dodaj note u bazu
      await prisma.newsletterSubscriber.update({
        where: { id: subscriber.id },
        data: {
          notes: `Email sending failed: ${emailError.message}`,
        },
      });

      return NextResponse.json(
        {
          error: "Greška pri slanju emaila",
          message:
            "Vaši podaci su sačuvani, ali email nije poslat. Kontaktiraćemo vas uskoro.",
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("❌ Newsletter API Error:", error);

    // Proveri da li je greška zbog unique constraint (duplikat email)
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          error: "Već ste primili brošuru",
          message: "Ovaj email je već registrovan.",
          alreadyExists: true,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: "Greška na serveru",
        message: "Došlo je do greške. Pokušajte ponovo kasnije.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/newsletter
 *
 * Opcioni endpoint za proveru statusa ili statistiku (za admin panel u budućnosti)
 */
export async function GET(request: NextRequest) {
  try {
    // Ovde možeš dodati logiku za admin panel
    // Npr. broj subscribers, koliko je brošura poslato, itd.

    const subscriberCount = await prisma.newsletterSubscriber.count();
    const sentCount = await prisma.newsletterSubscriber.count({
      where: { brochureSent: true },
    });

    return NextResponse.json({
      total: subscriberCount,
      sent: sentCount,
      pending: subscriberCount - sentCount,
    });
  } catch (error) {
    console.error("❌ Newsletter GET Error:", error);
    return NextResponse.json({ error: "Greška na serveru" }, { status: 500 });
  }
}
