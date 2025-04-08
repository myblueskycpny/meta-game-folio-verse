import React from "react";
import { Building, GraduationCap, Briefcase, Users } from "lucide-react";

const collaborations = [
  {
    type: "academic",
    title: "Metaverse Research Project",
    description: "Metaverse research project focusing on the development of virtual environments for educational purposes. Collaborated with faculty and peers to create immersive learning experiences.",
    icon: GraduationCap,
    year: "2023",
  },
  {
    type: "internship",
    title: "Digital Art and Information",
    description: "Internship at a digital art studio, assisting in the development of interactive installations and virtual exhibitions. Gained experience in project management and client collaboration.",
    icon: Briefcase,
    year: "2023 - 2024",
  },
  {
    type: "academic",
    title: "Law Department Research Initiative",
    description: "Developed a virtual courtroom environment in collaboration with the university's Law department to facilitate remote thesis defenses and moot court sessions.",
    icon: GraduationCap,
    year: "2024 - Present",
  },
  {
    type: "project",
    title: "Malang Creative Center - Interactive Selfie Booth",
    description: "Designed and developed an interactive selfie booth for a local event, allowing attendees to take augmented reality selfies with themed filters and backgrounds.",
    icon: Building,
    year: "2023 - 2024",
  },
  {
    type: "project",
    title: "Student Game Development Team",
    description: "Led a team of student developers in creating an educational game about environmental conservation. Managed asset creation, programming tasks, and project timeline.",
    icon: Users,
    year: "2024",
  },
];

const Collaborations = () => {
  return (
    <section id="collaborations" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaborations</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">Projects developed through internships and academic collaborations</p>
        </div>

        <div className="space-y-6">
          {collaborations.map((item, index) => (
            <div key={index} className="glass-card p-6 md:p-8 transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center">
                    <item.icon size={32} className="text-purple" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="hidden md:block text-foreground/50">•</span>
                    <span className="text-sm text-foreground/70 font-medium bg-secondary px-3 py-1 rounded-full w-fit">{item.year}</span>
                  </div>

                  <p className="text-foreground/80">{item.description}</p>

                  <div className="mt-4">
                    <span className="inline-block bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">{item.type === "academic" ? "Academic Collaboration" : item.type === "internship" ? "Industry Internship" : "Student Project"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
