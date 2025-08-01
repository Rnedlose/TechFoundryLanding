import { Button } from "@/components/ui/button";
import { MessageSquare, Eye } from "lucide-react";
import logoPath from "@assets/logo3_1749304799153.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient circuit-bg min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-8 text-center lg:text-left">
              <div className="mb-8">
                <img
                  src={logoPath}
                  alt="TechFoundry Logo"
                  className="h-48 lg:h-56 w-auto mx-auto lg:mx-0 mb-6"
                />
              </div>
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white leading-tight mb-4">
                <span className="text-accent-teal">Forging</span> Ideas.
                <br />
                <span className="text-accent-orange">Impacting</span> Business.
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                <span className="text-accent-teal font-semibold">
                  Rodney Nedlose
                </span>
                , Technical Engineer crafting innovative solutions based out of
                Madison, WI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent-teal text-white hover:bg-accent-teal/90 px-8 py-4 rounded-full text-lg glow-button"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white px-8 py-4 rounded-full text-lg transition-all"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-accent-teal/20 to-accent-orange/20 rounded-3xl flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 opacity-60">
                <div className="w-16 h-16 bg-accent-teal rounded-lg animate-pulse"></div>
                <div
                  className="w-16 h-16 bg-accent-orange rounded-lg animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-16 h-16 bg-accent-teal rounded-lg animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="w-16 h-16 bg-accent-orange rounded-lg animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="w-16 h-16 bg-white rounded-lg animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="w-16 h-16 bg-accent-teal rounded-lg animate-pulse"
                  style={{ animationDelay: "2.5s" }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
