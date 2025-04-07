
/**
 * Technology Stack
 * 
 * This file contains information about the technologies and tools you use.
 * Add, edit, or remove technologies by modifying this array.
 * 
 * Instructions:
 * - Each technology is an object with name, icon path, and description
 * - Place technology icons in public/images/tech/
 * - Use PNG format with transparency for best results
 */

export interface Technology {
  name: string;
  icon: string;
  description: string;
  category?: string; // Optional category for grouping
  proficiency?: "beginner" | "intermediate" | "advanced"; // Optional skill level
}

export const techStack: Technology[] = [
  {
    name: "Unity",
    icon: "/images/tech/unity.png",
    description: "Primary game engine for all development projects",
    category: "Game Engine",
    proficiency: "intermediate"
  },
  {
    name: "Blender",
    icon: "/images/tech/blender.png",
    description: "Used for 3D modeling, material creation, and mesh modification",
    category: "3D Graphics",
    proficiency: "intermediate"
  },
  {
    name: "Photoshop",
    icon: "/images/tech/photoshop.png",
    description: "Used for UI design and texture optimization",
    category: "Graphics",
    proficiency: "intermediate"
  },
  {
    name: "Audacity",
    icon: "/images/tech/audacity.png",
    description: "Sound editing and audio processing for game assets",
    category: "Audio",
    proficiency: "beginner"
  },
  {
    name: "Spatial.io",
    icon: "/images/tech/spatial.png",
    description: "Platform for creating metaverse environments for research and demonstrations",
    category: "Metaverse",
    proficiency: "intermediate"
  },
  {
    name: "C#",
    icon: "/images/tech/csharp.png",
    description: "Primary programming language for Unity development",
    category: "Programming",
    proficiency: "intermediate"
  },
  {
    name: "GitHub",
    icon: "/images/tech/github.png",
    description: "Version control and project management",
    category: "Development Tools",
    proficiency: "beginner"
  },
];

/**
 * Development approach information
 */
export const developmentApproach = {
  title: "My Development Approach",
  description: `I approach game and XR development with a focus on user experience and innovation. 
                While my programming skills are at a beginner to intermediate level, I enhance my 
                capabilities by leveraging AI tools to assist with complex logic and algorithm development.
                
                This approach allows me to create polished, functional applications while continuously 
                building my technical skills.`,
  
  aiTools: [
    "GitHub Copilot for code assistance",
    "ChatGPT for algorithm logic",
    "Design pattern recommendations",
    "Debugging assistance"
  ]
};
