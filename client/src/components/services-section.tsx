import { Code, TrendingUp, Settings, CloudUpload } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description: "Tailored applications built with modern technologies to meet your specific business requirements and scale with your growth.",
      color: "text-accent-teal"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Data Engineering & Analytics",
      description: "Transform raw data into actionable insights with robust pipelines, warehousing, and advanced analytics solutions.",
      color: "text-accent-orange"
    },
    {
      icon: <CloudUpload size={32} />,
      title: "Cloud Solutions & Integration",
      description: "Migrate, integrate, and optimize your infrastructure with secure, scalable cloud architectures.",
      color: "text-accent-orange"
    },
    {
      icon: <Settings size={32} />,
      title: "Automation & Workflow Optimization",
      description: "Streamline operations and eliminate manual processes with intelligent automation solutions.",
      color: "text-accent-teal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-deep-navy mb-4">Services</h2>
          <p className="text-xl text-steel-gray max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to transform your business operations and drive growth.
          </p>
          <div className="w-24 h-1 bg-accent-orange mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-off-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200">
              <div className={`text-4xl ${service.color} mb-6`}>
                {service.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-deep-navy mb-4">
                {service.title}
              </h3>
              <p className="text-steel-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
