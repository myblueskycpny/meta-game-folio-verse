
/**
 * Projects Portfolio
 * 
 * This file contains all your projects.
 * Add, edit, or remove projects by modifying this array.
 * 
 * Instructions:
 * - Each project is an object with various properties
 * - Place project images in public/images/projects/
 * - For YouTube videos, only include the video ID (e.g., "dQw4w9WgXcQ" from "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  youtubeId?: string; // Optional YouTube video ID
  year: number;
  collaborationType: string;
  collaborators: string[];
  link?: string; // Optional external link
  featured?: boolean; // Optional flag for featured projects
}

export const projects: Project[] = [
  {
    id: "virtual-courtroom",
    title: "Virtual Courtroom",
    description: "A metaverse environment designed for conducting thesis defenses in a realistic courtroom setting. Built using Spatial.io with custom 3D models and interactive elements.",
    imageUrl: "/images/projects/virtual-courtroom.jpg",
    tags: ["Spatial.io", "Metaverse", "Academic", "3D Modeling"],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    year: 2023,
    collaborationType: "University Research",
    collaborators: ["Dr. Jane Smith", "Virtual Environments Lab"],
    featured: true
  },
  {
    id: "ar-campus-tour",
    title: "AR Campus Tour",
    description: "An augmented reality application that provides an interactive tour of the university campus. Users can scan buildings to reveal information and historical facts.",
    imageUrl: "/images/projects/ar-campus.jpg",
    tags: ["Unity", "AR", "C#", "Mobile"],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    year: 2022,
    collaborationType: "Internship",
    collaborators: ["TechVision Inc.", "University IT Department"]
  },
  {
    id: "vr-training-sim",
    title: "VR Safety Training Simulation",
    description: "Virtual reality training program for industrial safety procedures. Users learn through immersive scenarios with real-time feedback and assessment.",
    imageUrl: "/images/projects/vr-training.jpg",
    tags: ["Unity", "VR", "Oculus", "Training"],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    year: 2022,
    collaborationType: "Industry Collaboration",
    collaborators: ["SafetyFirst Corp", "Dr. Michael Johnson"],
    link: "https://example.com/vr-training"
  },
  {
    id: "puzzle-game",
    title: "Dimensional Puzzle",
    description: "A 3D puzzle game that challenges players to manipulate objects across dimensions. Features procedurally generated levels and physics-based interactions.",
    imageUrl: "/images/projects/puzzle-game.jpg",
    tags: ["Unity", "C#", "Game Design", "Procedural Generation"],
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    year: 2021,
    collaborationType: "Personal Project",
    collaborators: ["Self-Developed"]
  },
];
