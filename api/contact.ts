import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z, ZodError } from 'zod';
import { MailService } from '@sendgrid/mail';

// Inline schema definition to avoid import issues
const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

// Inline SendGrid function
async function sendContactFormEmail(
  name: string,
  email: string,
  message: string
): Promise<boolean> {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'inquiries@techfoundry.us';
  const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL || 'inquiries@techfoundry.us';

  if (!SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    return false;
  }

  const mailService = new MailService();
  mailService.setApiKey(SENDGRID_API_KEY);

  try {
    const emailData = {
      to: SENDGRID_TO_EMAIL,
      from: SENDGRID_FROM_EMAIL,
      replyTo: email,
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
    
    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactSchema.parse(req.body);
    
    // Send email notification
    const emailSent = await sendContactFormEmail(
      validatedData.name,
      validatedData.email,
      validatedData.message
    );
    
    if (!emailSent) {
      console.error('Failed to send email notification for contact form');
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to send email notification. Please try again later.' 
      });
    }
    
    return res.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon.",
      emailSent 
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid form data', 
        errors: error.errors 
      });
    } else {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to submit contact form. Please try again later.' 
      });
    }
  }
}
