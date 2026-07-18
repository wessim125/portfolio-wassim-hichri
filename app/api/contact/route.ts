import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const {
      EMAIL_SERVER_HOST,
      EMAIL_SERVER_PORT,
      EMAIL_SERVER_SECURE,
      EMAIL_SERVER_USER,
      EMAIL_SERVER_PASSWORD,
      EMAIL_FROM,
      CONTACT_EMAIL,
    } = process.env;

    // Vérification des variables d'environnement
    if (
      !EMAIL_SERVER_HOST ||
      !EMAIL_SERVER_PORT ||
      !EMAIL_SERVER_USER ||
      !EMAIL_SERVER_PASSWORD
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Les variables SMTP sont manquantes dans .env.local",
        },
        { status: 500 }
      );
    }

    console.log("========== SMTP CONFIG ==========");
    console.log("HOST :", EMAIL_SERVER_HOST);
    console.log("PORT :", EMAIL_SERVER_PORT);
    console.log("SECURE :", EMAIL_SERVER_SECURE);
    console.log("USER :", EMAIL_SERVER_USER);
    console.log("PASSWORD :", EMAIL_SERVER_PASSWORD ? "********" : "ABSENT");
    console.log("FROM :", EMAIL_FROM);
    console.log("CONTACT :", CONTACT_EMAIL);
    console.log("=================================");

    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER_HOST,
      port: Number(EMAIL_SERVER_PORT),
      secure: EMAIL_SERVER_SECURE === "true",
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
    });

    // Vérifie la connexion SMTP
    await transporter.verify();

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Tous les champs sont obligatoires.",
        },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: EMAIL_FROM || `"Portfolio" <${EMAIL_SERVER_USER}>`,
      to: CONTACT_EMAIL || EMAIL_SERVER_USER,
      replyTo: email,
      subject: `📩 Nouveau message de ${name}`,
      text: `
Nom : ${name}

Email : ${email}

Message :

${message}
`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>

        <p><strong>Nom :</strong> ${name}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Message :</strong></p>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès.",
    });
  } catch (error: any) {
    console.error("SMTP ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}