
# Developer Documentation: Portfolio Customization Guide

This documentation provides comprehensive instructions on how to modify and update your Game Developer & XR Specialist portfolio content without requiring advanced coding skills.

## Table of Contents

1. [File Structure Overview](#file-structure-overview)
2. [Updating Personal Information](#updating-personal-information)
3. [Managing Projects](#managing-projects)
4. [Modifying Technology Stack](#modifying-technology-stack)
5. [Handling Collaborations](#handling-collaborations)
6. [Managing Media & Assets](#managing-media-assets)

## File Structure Overview

The portfolio content is organized in data files that are easy to edit:

```
src/
├── data/
│   ├── personalInfo.ts   # Personal details, social links, skills
│   ├── projects.ts       # Portfolio projects data
│   ├── techStack.ts      # Technology stack information
│   └── collaborations.ts # Academic & industry collaborations
├── components/
│   └── ...               # React components (no need to edit these)
└── pages/
    └── ...               # Page components (no need to edit these)
```

**Important**: Focus on editing files in the `src/data` directory. Leave the component files untouched unless you have development experience.

## Updating Personal Information

Edit the file `src/data/personalInfo.ts` to update your personal details.

### Basic Information

```typescript
export const personalInfo = {
  // Basic information
  name: "John Doe",
  title: "Game Developer & XR Specialist",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  location: "San Francisco, CA",
  
  // About me section - can be multiple paragraphs with \n for line breaks
  bio: "Game developer with a background in Informatics Engineering...",
  
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
```

### Skills

In the same file, you can update your skills:

```typescript
export const skills = [
  { name: "Unity 3D", level: 85 },  // Level is 0-100
  { name: "C#", level: 75 },
  { name: "AR/VR Development", level: 80 },
  // Add or remove skills as needed
];
```

### Education Background

Also in `personalInfo.ts`, you can update your education:

```typescript
export const education = [
  {
    degree: "Bachelor of Informatics Engineering",
    institution: "University of Technology",
    year: "2018 - 2022", 
    description: "Focused on computational intelligence and virtual reality applications."
  },
  // Add more education items as needed
];
```

### Profile Picture

1. Prepare a square image (recommended 500x500 pixels)
2. Save it as JPG or PNG format
3. Place the file in `public/images/` directory
4. Update the `avatarUrl` in `personalInfo.ts` to point to your image (e.g., "/images/your-new-image.jpg")

## Managing Projects

Edit the file `src/data/projects.ts` to add, remove, or update portfolio projects.

### Project Structure

Each project follows this structure:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  description: "Detailed description of the project...",
  imageUrl: "/images/projects/project-thumbnail.jpg",
  tags: ["Unity", "VR", "C#", "Oculus"], // Technologies used
  youtubeId: "dQw4w9WgXcQ", // YouTube video ID (explained below)
  year: 2023,
  collaborationType: "University Research",
  collaborators: ["Dr. Jane Smith", "Virtual Environments Lab"],
  link: "https://example.com/project", // Optional external link
  featured: true // Optional - set to true to highlight this project
}
```

### Adding a New Project

1. Prepare a project thumbnail image (recommended ratio: 16:9)
2. Save it in `public/images/projects/` directory
3. Copy an existing project object in `projects.ts` and paste it at the desired position in the array
4. Update all fields with your new project information
5. Make sure to create a unique `id` for the new project

### YouTube Videos

For the `youtubeId` field:

1. Take your YouTube video URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
2. Extract only the ID part (in this example, `dQw4w9WgXcQ`)
3. Add this ID to the `youtubeId` property in your project

### Removing a Project

To remove a project, simply delete its entire object (the block enclosed in curly braces `{}` including the comma) from the `projects` array in `projects.ts`.

### Reordering Projects

Projects appear in the same order as they are listed in the `projects` array. Move the project objects up or down in the array to change their display order.

## Modifying Technology Stack

Edit the file `src/data/techStack.ts` to update your technology stack information.

### Technology Items

```typescript
export const techStack: Technology[] = [
  {
    name: "Unity",
    icon: "/images/tech/unity.png",
    description: "Primary game engine for all development projects",
    category: "Game Engine", // Optional category
    proficiency: "intermediate" // Optional: "beginner", "intermediate", "advanced"
  },
  // Add more technologies as needed
];
```

### Adding New Technologies

1. Prepare an icon image for the technology (recommended: square with transparent background, PNG format)
2. Save it in `public/images/tech/` directory
3. Add a new technology object to the `techStack` array in `techStack.ts`

### Development Approach

In the same file, you can update your development approach text:

```typescript
export const developmentApproach = {
  title: "My Development Approach",
  description: `I approach game and XR development with a focus on user experience...`,
  
  aiTools: [
    "GitHub Copilot for code assistance",
    "ChatGPT for algorithm logic",
    "Design pattern recommendations",
    // Add or modify tools as needed
  ]
};
```

## Handling Collaborations

Edit the file `src/data/collaborations.ts` to update information about academic and industry collaborations.

### Collaboration Structure

```typescript
{
  id: "unique-collab-id",
  title: "XR Learning Environments",
  partner: "University Research Lab",
  description: "Collaborated with university lecturers to develop...",
  imageUrl: "/images/collaborations/university-lab.jpg", // Optional image
  year: "2022-2023",
  outcomes: [  // Optional list of outcomes
    "Published research paper on immersive learning",
    "Developed prototype for virtual classroom",
    "Presented findings at EdTech Conference 2023"
  ],
  link: "https://example.com/research" // Optional external link
}
```

### Adding or Editing Collaborations

1. Prepare an image for the collaboration (if needed)
2. Save it in `public/images/collaborations/` directory
3. Add a new collaboration object or edit an existing one in the `collaborations` array

### Collaboration Introduction

In the same file, you can update the introduction text for the collaborations section:

```typescript
export const collaborationIntroduction = {
  title: "Academic & Industry Collaborations",
  description: `My projects have been developed through meaningful collaborations...`,
};
```

## Managing Media & Assets

### Image Organization

All images should be stored in specific folders within the `public/images/` directory:

- `public/images/` - Main folder for images (profile picture, etc.)
- `public/images/projects/` - Project thumbnails and screenshots
- `public/images/tech/` - Technology logos
- `public/images/collaborations/` - Collaboration images

### Image Formats and Sizing

- **Profile Picture**: Square format, 500x500 pixels recommended (JPG or PNG)
- **Project Thumbnails**: 16:9 ratio, 1280x720 pixels recommended (JPG)
- **Technology Icons**: Square format with transparent background (PNG)
- **Collaboration Images**: 16:9 or 4:3 ratio recommended (JPG)

### Adding YouTube Videos

1. Upload your video to YouTube
2. Copy the video URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Extract the video ID (everything after `v=`, in this example: `dQw4w9WgXcQ`)
4. Add this ID to the `youtubeId` field in your project

## Advanced Customizations

For more advanced customizations (layout changes, styling, adding new sections), you will need development experience with React and TypeScript. The following files contain the main components:

- `src/components/Hero.tsx` - Hero section with personal introduction
- `src/components/Portfolio.tsx` - Projects portfolio section
- `src/components/TechStack.tsx` - Technology stack showcase
- `src/components/Contact.tsx` - Contact information and social links
- `src/components/Collaborations.tsx` - Section about collaborations

---

If you have any questions about customizing your portfolio beyond what's covered in this documentation, please contact the development team for assistance.
