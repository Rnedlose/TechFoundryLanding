import { MailService } from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'inquiries@techfoundry.us';
const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL || 'inquiries@techfoundry.us';

if (!SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    };
    
    if (params.replyTo) {
      emailData.replyTo = params.replyTo;
    }
    
    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendContactFormEmail(
  name: string,
  email: string,
  message: string
): Promise<boolean> {
  // Using verified sender email from environment variables
  const emailParams: EmailParams = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    replyTo: email, // Set reply-to to the contact's email
    subject: `New Contact Form Submission from ${name}`,
    text: `
You have received a new contact form submission:

Name: ${name}
Email: ${email}
Message: ${message}

You can reply directly to this email to respond to ${name}.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          <em>You can reply directly to this email to respond to ${name}.</em>
        </p>
      </div>
    `,
  };

  console.log('Attempting to send email to:', emailParams.to);
  const result = await sendEmail(emailParams);
  console.log('Email send result:', result);
  return result;
}