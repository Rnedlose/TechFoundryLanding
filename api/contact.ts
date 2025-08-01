import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { ZodError } from 'zod';
import { sendContactFormEmail } from '../server/sendgrid';

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
