import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { CONTACT_EMAIL, SERVICES } from "@/lib/constants";

const serviceLabels: Record<string, string> = {
  ...Object.fromEntries(SERVICES.map((service) => [service.id, service.title])),
  other: "Other / Custom Analysis",
};

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  organization: z.string().trim().max(200).optional(),
  service: z.string().refine((value) => value in serviceLabels),
  message: z.string().trim().min(10).max(5000),
  // Spam checks: a field real visitors never see, and how long the form was open.
  company_website: z.string().optional(),
  elapsedMs: z.number().optional(),
});

// Fastest a person could plausibly fill in the form.
const MIN_FILL_TIME_MS = 3000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let data: z.infer<typeof contactSchema>;
  try {
    data = contactSchema.parse(await request.json());
  } catch {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  // Bots fill in the hidden field. Report success so they do not retry.
  if (data.company_website) {
    return NextResponse.json({ success: true });
  }

  if (data.elapsedMs === undefined || data.elapsedMs < MIN_FILL_TIME_MS) {
    return NextResponse.json(
      { error: "That was too fast. Please wait a moment and send again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[Contact API] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 500 }
    );
  }

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const organization = data.organization ? escapeHtml(data.organization) : "";
  const service = escapeHtml(serviceLabels[data.service]);
  const message = escapeHtml(data.message);

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a74ba 0%, #1CABE3 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
      </div>

      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a3a52; margin-top: 0;">Contact Information</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a74ba;">${email}</a></p>
          ${organization ? `<p style="margin: 10px 0;"><strong>Organization:</strong> ${organization}</p>` : ""}
          <p style="margin: 10px 0;"><strong>Service Interest:</strong> ${service}</p>
        </div>

        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #1a3a52; margin-top: 0;">Project Details</h2>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #374151;">${message}</p>
        </div>
      </div>

      <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
        <p>This message was sent from the BiODAVis contact form</p>
      </div>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    // Resend reports failures in `error` instead of throwing.
    const { error } = await resend.emails.send({
      from: "BiODAVis Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || CONTACT_EMAIL],
      replyTo: data.email,
      subject: `New Contact: ${data.name.replace(/[\r\n]+/g, " ")} - ${serviceLabels[data.service]}`,
      html: emailHtml,
    });

    if (error) {
      console.error("[Contact API] Email was not sent:", error);
      return NextResponse.json(
        { error: "We could not send your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      { error: "We could not send your message." },
      { status: 500 }
    );
  }
}
