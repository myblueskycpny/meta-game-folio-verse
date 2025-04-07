
/**
 * Personal Information
 * 
 * This file contains all your personal and contact information.
 * Edit the values below to update the content on your portfolio.
 */

export const personalInfo = {
  // Basic information
  name: "John Doe",
  title: "Game Developer & XR Specialist",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  location: "San Francisco, CA",
  
  // About me section - this can be multiple paragraphs
  bio: "Game developer with a background in Informatics Engineering, specializing in intelligent games and XR (AR/VR) applications. Passionate about creating immersive digital experiences that blend technology and creativity.\n\nI have experience in designing virtual environments for both entertainment and educational purposes, with a particular focus on accessibility and user engagement.",
  
  // Your profile image (place in public/images folder)
  avatarUrl: "/images/profile.jpg",
  
  // Social media and professional links
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    youtube: "https://youtube.com/@johndoe",
    // Add any other platforms as needed
  },
};

/**
 * Skills and expertise levels
 * 
 * Add or modify skills with a name and proficiency level (0-100)
 */
export const skills = [
  { name: "Unity 3D", level: 85 },
  { name: "C#", level: 75 },
  { name: "AR/VR Development", level: 80 },
  { name: "Blender", level: 65 },
  { name: "Spatial.io", level: 90 },
  { name: "Photoshop", level: 60 },
  { name: "Audacity", level: 70 },
];

/**
 * Education background
 */
export const education = [
  {
    degree: "Bachelor of Informatics Engineering",
    institution: "University of Technology",
    year: "2018 - 2022", 
    description: "Focused on computational intelligence and virtual reality applications."
  },
  // Add more education items as needed
];
