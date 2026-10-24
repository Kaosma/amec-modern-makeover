
import { Resend } from "resend";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
  help: z.array(
    z.enum([
      "Löpande redovisning",
      "Lön",
      "Bokslut",
      "Deklaration",
      "Annat",
    ])
  ).max(5).default([]),
}).strict();

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function onRequestPost({ request, env }) {
  if (
    !env.RESEND_API_KEY ||
    !env.RESEND_FROM_EMAIL ||
    !env.INQUIRY_TO_EMAIL
  ) {
    console.error("Missing email configuration");
    return json({ error: "E-posttjänsten är inte korrekt konfigurerad." }, 500);
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ error: "Förfrågan måste skickas som JSON." }, 415);
  }

  let body;

  try {
    const raw = await request.text();

    if (new TextEncoder().encode(raw).byteLength > 20_000) {
      return json({ error: "Förfrågan är för stor." }, 413);
    }

    body = JSON.parse(raw);
  } catch {
    return json({ error: "Ogiltig förfrågan." }, 400);
  }

  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return json({
      error: "Kontrollera formuläret och försök igen.",
      fields: parsed.error.flatten().fieldErrors,
    }, 400);
  }

  const { name, email, subject, message, help } = parsed.data;

  const html = `
    <h2>Ny förfrågan: ${escapeHtml(subject)}</h2>
    <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
    <p><strong>Ämne:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Vill ha hjälp med:</strong></p>
    <ul>${help.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <hr />
    <p>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>
  `;

  const text = [
    `Namn: ${name}`,
    `E-post: ${email}`,
    `Ämne: ${subject}`,
    `Vill ha hjälp med: ${help.join(", ") || "Inget valt"}`,
    "",
    message,
  ].join("\n");

  try {
    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: [env.INQUIRY_TO_EMAIL],
      replyTo: email,
      subject: `Webbförfrågan: ${subject}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return json({
        error: "Kunde inte skicka meddelandet just nu. Försök igen senare.",
      }, 502);
    }

    console.log("Inquiry accepted by Resend:", data?.id);
    return json({ success: true });
  } catch (error) {
    console.error("Unexpected email error:", error);
    return json({
      error: "Ett oväntat fel uppstod. Försök igen senare.",
    }, 500);
  }
}
