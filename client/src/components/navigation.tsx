import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    if (isProjectsPage) {
      // Navigate to home page with section anchor
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  const isProjectsPage = location === "/projects";
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isProjectsPage 
        ? "bg-deep-navy border-b border-white/20" 
        : isScrolled 
        ? "bg-white/95 backdrop-blur-sm border-b border-gray-200" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <span className={`font-montserrat font-bold text-xl cursor-pointer ${
                isProjectsPage ? "text-white" : "text-deep-navy"
              }`}>TechFoundry</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("about")}
              className={`${
                isProjectsPage ? "text-gray-300" : "text-steel-gray"
              } hover:text-accent-teal transition-colors font-medium`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("portfolio")}
              className={`${
                isProjectsPage ? "text-gray-300" : "text-steel-gray"
              } hover:text-accent-teal transition-colors font-medium`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`${
                isProjectsPage ? "text-gray-300" : "text-steel-gray"
              } hover:text-accent-teal transition-colors font-medium`}
            >
              Services
            </button>
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-accent-teal text-white hover:bg-accent-teal/90 rounded-full px-6 glow-button"
            >
              Contact
            </Button>
          </div>
          
          <button
            className={`md:hidden ${
              isProjectsPage ? "text-gray-300" : "text-steel-gray"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => handleNavClick("about")}
              className={`block w-full text-left ${
                isProjectsPage ? "text-gray-300" : "text-steel-gray"
              } hover:text-accent-teal transition-colors font-medium`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("portfolio")}
              className={`block w-full text-left ${
                isProjectsPage ? "text-gray-300" : "text-steel-gray"
              } hover:text-accent-teal transition-colors font-medium`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`block w-full text-left ${
                isProjectsPage ? "text-gray-300" : "text-steel-gray"
              } hover:text-accent-teal transition-colors font-medium`}
            >
              Services
            </button>
            <Button
              onClick={() => handleNavClick("contact")}
              className="w-full bg-accent-teal text-white hover:bg-accent-teal/90 rounded-full glow-button"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
