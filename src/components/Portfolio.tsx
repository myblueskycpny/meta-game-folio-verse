
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink, Tag } from 'lucide-react';

// Mock project data - this would ideally come from a CMS or JSON file
const projects = [
  {
    id: 1,
    title: "VR Classroom Experience",
    description: "An immersive virtual reality classroom for remote learning with interactive 3D models and collaborative features.",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["VR", "Education", "Unity"],
    videoId: "dQw4w9WgXcQ", // Example YouTube ID
    category: "vr",
    collaboration: "University XR Lab",
    year: "2023"
  },
  {
    id: 2,
    title: "AR Puzzle Game",
    description: "Augmented reality puzzle game that transforms your surroundings into interactive puzzles to solve.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AR", "Game", "Unity"],
    videoId: "dQw4w9WgXcQ", // Example YouTube ID
    category: "ar",
    collaboration: "Summer Internship - GameTech Studios",
    year: "2022"
  },
  {
    id: 3,
    title: "Virtual Courtroom",
    description: "A virtual courtroom environment built in Spatial.io for remote thesis defense presentations and legal simulations.",
    image: "https://images.unsplash.com/photo-1583118443607-33f3532091cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Metaverse", "Spatial.io", "Academic"],
    videoId: "dQw4w9WgXcQ", // Example YouTube ID
    category: "metaverse",
    collaboration: "Law Department Research Initiative",
    year: "2023"
  },
  {
    id: 4,
    title: "AI Opponent Chess Game",
    description: "Chess game with multiple AI difficulty levels using machine learning to create dynamic opponents.",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Game", "AI", "Unity"],
    videoId: "dQw4w9WgXcQ", // Example YouTube ID
    category: "game",
    collaboration: "Computer Science Department",
    year: "2022"
  },
];

type Category = 'all' | 'vr' | 'ar' | 'game' | 'metaverse';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'vr', label: 'VR Experiences' },
    { id: 'ar', label: 'AR Applications' },
    { id: 'game', label: 'Games' },
    { id: 'metaverse', label: 'Metaverse' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Explore my latest projects and game development work
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${activeCategory === category.id ? 'bg-purple hover:bg-purple-dark' : 'hover:bg-purple/10'}`}
              onClick={() => setActiveCategory(category.id as Category)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.collaboration} • {project.year}</p>
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
                    <span 
                      key={index} 
                      className="text-xs py-1 px-2 bg-secondary rounded-full flex items-center gap-1"
                    >
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="inline-flex items-center text-sm text-purple hover:text-purple-dark gap-1 transition-colors"
                  onClick={() => setActiveProject(project.id)}
                >
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
              <button 
                className="absolute -top-10 right-0 text-white hover:text-accent"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
              <div className="glass-card p-4">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${projects.find(p => p.id === activeProject)?.videoId}`}
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
          <p className="text-foreground/70 mb-6">
            Want to see more of my work? Check out my full project archive.
          </p>
          <Button className="bg-purple hover:bg-purple-dark">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
