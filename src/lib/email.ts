// ============================================================
// GES SOLAR PRO — Email Utility (Resend / SMTP)
// ============================================================
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

// Resend client (varsa)
const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: SendEmailParams) {
  const fromAddress = from || process.env.EMAIL_FROM || 'info@example.com';

  // Resend kullanılabilirse onu kullan
  if (resend) {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to,
      subject,
      html,
    });

    if (error) {
      console.error('[EMAIL] Resend error:', error);
      throw new Error(`Email gönderilemedi: ${error.message}`);
    }
    return data;
  }

  // SMTP fallback
  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({ from: fromAddress, to, subject, html });
}

// ============================================================
// İletişim formu bildirimi
// ============================================================
export async function sendContactNotification({
  name,
  email,
  phone,
  company,
  service,
  message,
}: {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

  return sendEmail({
    to: adminEmail,
    subject: `Yeni İletişim Mesajı — ${name} | ${company || 'Bireysel'}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc;">
        <div style="background: #0F3D5C; padding: 24px; border-radius: 16px 16px 0 0; color: white;">
          <h2 style="margin: 0; font-size: 20px;">☀️ Yeni İletişim Mesajı</h2>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Ad Soyad</td><td style="font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">E-Posta</td><td style="font-weight: 600;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Telefon</td><td style="font-weight: 600;">${phone}</td></tr>` : ''}
            ${company ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Firma</td><td style="font-weight: 600;">${company}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Hizmet</td><td style="font-weight: 600;">${service}</td></tr>` : ''}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #F5A623;">
            <p style="margin: 0; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
        </div>
        <p style="margin-top: 16px; font-size: 11px; color: #94a3b8; text-align: center;">
          Bu email ${process.env.NEXT_PUBLIC_SITE_URL || 'localhost'}/admin/mesajlar adresinden yönetilebilir.
        </p>
      </div>
    `,
  });
}
