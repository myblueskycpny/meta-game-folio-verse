import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink, Tag } from "lucide-react";

// Mock project data - this would ideally come from a CMS or JSON file
const projects = [
  {
    id: 1,
    title: "VR Classroom Experience",
    description: "An immersive virtual reality simulation for learning with interactive 3D models and collaborative features.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/Simulation.png",
    tags: ["VR", "Education", "Unity"],
    videoId: "c0wTpPyKMXw", // Example YouTube ID
    categories: ["vr", "education"],
    collaboration: "GEMASTIK 2023 - Software Engineering Competition",
    year: "2023",
  },
  {
    id: 2,
    title: "Virtual Batik Museum",
    description: "A virtual museum showcasing Indonesian batik culture, especially Nitik from Yogyakarta, allowing users to explore and learn about various of Nitik batik styles.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/RBatik.png",
    tags: ["Metaverse", "Spatial.io", "Academic"],
    videoId: "3IPLcmZI2oY", // Example YouTube ID
    categories: ["metaverse", "culture"],
    collaboration: "Sekar Jagad - Paguyuban Pecinta Batik Indonesia",
    year: "2023",
  },
  {
    id: 3,
    title: "Virtual Courtroom",
    description: "A virtual courtroom environment built with Unity & Spatial.io framework for practical work and legal simulations.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/RMK.png",
    tags: ["Metaverse", "Spatial.io", "Academic"],
    videoId: "3oPB3ZIr28s", // Example YouTube ID
    categories: ["metaverse", "education"],
    collaboration: "Law Department Research Initiative",
    year: "2024",
  },
  {
    id: 4,
    title: "Pyramid Legacy Virtual Tour",
    description: "An interactive virtual tour of the Pyramid Legacy, allowing users to explore ancient structures and artifacts in a 3D environment.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/Pyramid.jpg",
    tags: ["Game", "VR", "Unity"],
    videoId: "Lex5kFnJN14", // Example YouTube ID
    categories: ["game", "vr"],
    collaboration: "Jatim Park Group",
    year: "2025",
  },
  {
    id: 5,
    title: "ARBMKG : Sekolah Lapang Iklim",
    description: "An Augmented Reality application for the Meteorology, Climatology, and Geophysics Agency (BMKG) to educate the public about climate and weather.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/BMKGLogo.png",
    tags: ["AR", "Education", "Unity"],
    videoId: "yto-MJZJn9E", // Example YouTube ID
    categories: ["ar"],
    collaboration: "BMKG - Research and Development",
    year: "2024",
  },
  {
    id: 6,
    title: "Block Runner : Hand Tracking Control (Prototype)",
    description: "A prototype game using hand tracking technology for a unique gaming experience.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/Block%20Runner.jpg",
    tags: ["AR", "Education", "Unity"],
    videoId: "zbOBnRrNUnE", // Example YouTube ID
    categories: ["ar", "game"],
    collaboration: "Self-initiated",
    year: "2024",
  },
  {
    id: 7,
    title: "Hijaiyah AR",
    description: "An Augmented Reality application for learning Hijaiyah letters, designed for children to enhance their learning experience.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/HijaiyAR.jpg",
    tags: ["AR", "Education", "Unity"],
    videoId: "a6966XTTGHM", // Example YouTube ID
    categories: ["ar"],
    collaboration: "MTQMN 2023 - Scientific Literature of Al-Qur'an Competition",
    year: "2023",
  },
  {
    id: 8,
    title: "Photobooth AR",
    description: "An Augmented Reality photobooth application that allows users to take fun and interactive photos with virtual Characters.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/PhotoboothAR.jpg",
    tags: ["AR", "Unity"],
    videoId: "ttopK-UZ5ag", // Example YouTube ID
    categories: ["ar"],
    collaboration: "Malang Creative Center",
    year: "2024",
  },
  {
    id: 9,
    title: "Interactive Selfie Booth",
    description:
      "An interactive selfie booth application that uses AR technology to enhance user experience with fun filters and effects. They can also take selfies visually with President, Vice President, local freedom fighter heroes and other public figures.",
    image: "https://mybluesky-gamedev-portfolio.vercel.app/assets/InteractiveSelfie.jpg",
    tags: ["AR", "Unity"],
    videoId: "ttopK-UZ5ag", // Example YouTube ID
    categories: ["ar"],
    collaboration: "Malang Creative Center",
    year: "2024",
  },
];

type Category = "all" | "vr" | "ar" | "game" | "metaverse";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "vr", label: "VR Experiences" },
    { id: "ar", label: "AR Applications" },
    { id: "game", label: "Games" },
    { id: "metaverse", label: "Metaverse" },
  ];

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">Explore my latest projects and game development work</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${activeCategory === category.id ? "bg-purple hover:bg-purple-dark" : "hover:bg-purple/10"}`}
              onClick={() => setActiveCategory(category.id as Category)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 text-sm">
                      {project.collaboration} • {project.year}
                    </p>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-purple text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => setActiveProject(project.id)}
                  aria-label="Show video"
                >
                  <Youtube size={18} />
                </button>
              </div>
              <div className="p-5">
                <p className="mb-4 text-sm text-foreground/80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs py-1 px-2 bg-secondary rounded-full flex items-center gap-1">
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center text-sm text-purple hover:text-purple-dark gap-1 transition-colors" onClick={() => setActiveProject(project.id)}>
                  <span>View Project</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setActiveProject(null)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button className="absolute -top-10 right-0 text-white hover:text-accent" onClick={() => setActiveProject(null)}>
                Close
              </button>
              <div className="glass-card p-4">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${projects.find((p) => p.id === activeProject)?.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-6">Want to see more of my work? Check out my full project archive.</p>
          <Button className="bg-purple hover:bg-purple-dark">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
