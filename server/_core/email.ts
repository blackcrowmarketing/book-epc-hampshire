import nodemailer from "nodemailer";
import { ENV } from "./env";

/**
 * Email transporter configured for Cloudflare email forwarding.
 * Uses a catch-all mailbox that forwards to the configured destination.
 */
let transporter: nodemailer.Transporter | null = null;

export function getEmailTransporter() {
  if (transporter) return transporter;

  // Configure nodemailer for SMTP (works with any SMTP server)
  // For Cloudflare email forwarding, you'll need to set SMTP credentials via environment variables
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export interface EnquiryEmailData {
  name: string;
  email: string;
  phone: string;
  bestTime: string;
  message?: string;
}

/**
 * Send enquiry email to Hilary
 */
export async function sendEnquiryEmail(data: EnquiryEmailData): Promise<boolean> {
  try {
    const transporter = getEmailTransporter();

    // Validate SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("[Email] SMTP credentials not configured");
      return false;
    }

    const emailBody = `
New EPC Enquiry Received

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Best Time to Call: ${data.bestTime}

Message:
${data.message || "(No message provided)"}

---
This enquiry was submitted through the Book EPC Hampshire website contact form.
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender email
      to: "hilary@book-epc-hampshire.co.uk", // Recipient
      subject: `New EPC Enquiry from ${data.name}`,
      text: emailBody,
      replyTo: data.email, // Allow Hilary to reply directly to the enquirer
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("[Email] Enquiry email sent successfully:", result.messageId);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send enquiry email:", error);
    return false;
  }
}
