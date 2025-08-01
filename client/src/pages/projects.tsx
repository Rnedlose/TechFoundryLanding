import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import dndPortalImage from "@assets/image_1750946978531.png";

export default function Projects() {
  const projects = [
    {
      image: "https://www.synczybot.com/static/SynczyBotLite_1750963277370.png",
      title: "SynczyBot",
      description: "AI-powered task management assistant designed to help organize, prioritize, and automate daily workflows. Features seamless integrations with Google Tasks and Todoist, real-time monitoring, and intelligent task prioritization with premium subscription options.",
      technologies: ["AI Integration", "Google Tasks API", "Todoist API", "Task Management"],
      link: "https://www.synczybot.com/",
      status: "Live"
    },
    {
      image: dndPortalImage,
      title: "D&D Campaign Portal",
      description: "Alpha project for managing Dungeons & Dragons and other tabletop roleplaying games online with comprehensive campaign tools. Features include character management, campaign tracking, dice rolling, and collaborative storytelling tools.",
      technologies: ["Next.js", "React", "TypeScript"],
      link: "https://dnd-campaign-portal.vercel.app/",
      status: "Alpha"
    },
    {
      image: "https://cdn.sanity.io/images/8nssn5r4/production/18bf2de68f7efcb340d1810f0022b4c001afac88-5184x3456.jpg?rect=0,599,5184,2258&w=800&h=400",
      title: "Blog with w00k",
      description: "Personal blog focused on tabletop gaming, RPGs, and creative storytelling. Features articles about game design, player experiences, and the intersection of technology and tabletop gaming culture.",
      technologies: ["Next.js", "Sanity CMS", "Vercel"],
      link: "https://blog-with-w00k.vercel.app/",
      status: "Live"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/">
              <Button 
                variant="ghost" 
                className="text-white hover:text-accent-teal mb-8 px-0"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <h1 className="font-montserrat font-bold text-5xl mb-6">
              All Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exploring innovative solutions and building tools that solve real-world problems.
            </p>
            <div className="w-24 h-1 bg-accent-teal mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group bg-off-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-montserrat font-bold text-xl text-deep-navy">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-steel-gray mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
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
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-accent-teal text-white hover:bg-accent-teal/90 px-4 py-3 rounded-full font-semibold transition-all glow-button"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-steel-gray">More projects coming soon...</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}