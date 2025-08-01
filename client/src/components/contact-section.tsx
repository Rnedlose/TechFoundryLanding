import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Linkedin, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactFormSchema.parse(formData);
      setErrors({});
      contactMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-deep-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into impactful solutions? Let's
            discuss your project.
          </p>
          <div className="w-24 h-1 bg-accent-orange mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-accent-teal/20 p-3 rounded-full">
                  <MapPin className="text-accent-teal" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">Madison, WI</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-accent-orange/20 p-3 rounded-full">
                  <Mail className="text-accent-orange" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">inquiries@techfoundry.us</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-accent-teal/20 p-3 rounded-full">
                  <Linkedin className="text-accent-teal" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/rnedlose/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-teal hover:text-accent-teal/80 transition-colors"
                  >
                    linkedin.com/in/rnedlose
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-accent-teal focus:ring-accent-teal/20"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@company.com"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-accent-teal focus:ring-accent-teal/20"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-accent-teal focus:ring-accent-teal/20 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-accent-teal text-white hover:bg-accent-teal/90 py-4 text-lg font-semibold glow-button"
              >
                {contactMutation.isPending ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
