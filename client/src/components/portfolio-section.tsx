import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import { Link } from "wouter";
import dndPortalImage from "@assets/image_1750946978531.png";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://www.synczybot.com/static/SynczyBotLite_1750963277370.png",
      title: "SynczyBot",
      description: "AI-powered task management assistant with seamless integrations for Google Tasks and Todoist, featuring intelligent prioritization and automation.",
      technologies: ["AI Integration", "Google Tasks API", "Todoist API"],
      link: "https://www.synczybot.com/",
      status: "Live"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-deep-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing successful projects that demonstrate expertise in solving complex technical challenges.
          </p>
          <div className="w-24 h-1 bg-accent-teal mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-montserrat font-bold text-xl text-deep-navy">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-steel-gray mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        techIndex % 3 === 0 
                          ? "bg-accent-teal/10 text-accent-teal" 
                          : techIndex % 3 === 1 
                          ? "bg-accent-orange/10 text-accent-orange" 
                          : "bg-deep-navy/10 text-deep-navy"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button 
              variant="outline"
              className="border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
