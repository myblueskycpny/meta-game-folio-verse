
/**
 * Collaborations Information
 * 
 * This file contains information about academic and industry collaborations.
 * Edit this file to update the collaborations section of your portfolio.
 */

export interface Collaboration {
  id: string;
  title: string;
  partner: string;
  description: string;
  imageUrl?: string; // Optional image
  year: string | number;
  outcomes?: string[]; // Optional list of outcomes
  link?: string; // Optional external link
}

export const collaborations: Collaboration[] = [
  {
    id: "university-research",
    title: "XR Learning Environments",
    partner: "University Research Lab",
    description: "Collaborated with university lecturers to develop virtual learning environments for distance education.",
    imageUrl: "/images/collaborations/university-lab.jpg",
    year: "2022-2023",
    outcomes: [
      "Published research paper on immersive learning",
      "Developed prototype for virtual classroom",
      "Presented findings at EdTech Conference 2023"
    ]
  },
  {
    id: "industry-internship",
    title: "Industrial Training Simulations",
    partner: "TechSim Industries",
    description: "Internship focused on creating VR training simulations for industrial safety procedures.",
    imageUrl: "/images/collaborations/tech-internship.jpg",
    year: 2022,
    outcomes: [
      "Completed safety training module used by 500+ employees",
      "Implemented performance tracking system",
      "Reduced training costs by 30%"
    ],
    link: "https://example.com/techsim"
  },
  {
    id: "academic-project",
    title: "Virtual Courtroom Project",
    partner: "Law Department",
    description: "Designed a virtual courtroom in the metaverse for conducting thesis defenses and moot courts.",
    imageUrl: "/images/collaborations/courtroom.jpg",
    year: 2023,
    outcomes: [
      "Successfully hosted 15+ virtual thesis defenses",
      "Created reusable environment template",
      "Received university innovation award"
    ]
  }
];

export const collaborationIntroduction = {
  title: "Academic & Industry Collaborations",
  description: `My projects have been developed through meaningful collaborations with university 
                lecturers, research labs, and industry partners. These partnerships have provided 
                valuable mentorship and real-world application contexts for my work in game development 
                and XR technologies.`,
};
