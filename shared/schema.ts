import { z } from "zod";

// Contact form validation schema
export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

// TypeScript types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = InsertContact & {
  id: number;
  createdAt: Date;
};
