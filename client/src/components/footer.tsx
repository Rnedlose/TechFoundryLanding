import logoPath from "@assets/logo3_1749304799153.png";

export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-steel-gray/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={logoPath} alt="TechFoundry Logo" className="h-8 w-auto" />
            <span className="font-montserrat font-bold text-lg text-white">TechFoundry</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">Forging Ideas. Impacting Business.</p>
            <p className="text-sm text-gray-500">&copy; 2025 TechFoundry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
