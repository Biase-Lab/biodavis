import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  service: z.string(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Initialize Resend only when the API is called
    const resend = new Resend(process.env.RESEND_API_KEY || "");

    const serviceLabels: { [key: string]: string } = {
      "rna-seq": "RNA-Sequencing Analysis",
      "single-cell": "Single Cell RNA-Sequencing",
      microbiome: "Microbiome Analysis",
      nanopore: "Nanopore Long-Read Processing",
      "wgs-snp": "Whole Genome Sequencing",
      "small-rna": "Small RNA Sequencing",
      metabolomics: "Metabolomics Analysis",
      proteomics: "Proteomics Analysis",
      other: "Other / Custom Analysis",
    };

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a74ba 0%, #1CABE3 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 30px; background-color: #f9fafb;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1a3a52; margin-top: 0;">Contact Information</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #1a74ba;">${data.email}</a></p>
            ${data.organization ? `<p style="margin: 10px 0;"><strong>Organization:</strong> ${data.organization}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Service Interest:</strong> ${serviceLabels[data.service] || data.service}</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #1a3a52; margin-top: 0;">Project Details</h2>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #374151;">${data.message}</p>
          </div>
        </div>

        <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>This message was sent from the BiODAVis contact form</p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: "BiODAVis Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "contact@biodavis.com"],
      replyTo: data.email,
      subject: `New Contact: ${data.name} - ${serviceLabels[data.service] || data.service}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    // Log the full error for debugging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });
    }

    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
