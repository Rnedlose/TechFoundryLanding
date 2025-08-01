import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactFormEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Send email notification
      const emailSent = await sendContactFormEmail(
        validatedData.name,
        validatedData.email,
        validatedData.message
      );
      
      if (!emailSent) {
        console.error("Failed to send email notification for contact form");
        res.status(500).json({ 
          success: false, 
          message: "Failed to send email notification. Please try again later." 
        });
        return;
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        emailSent 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
