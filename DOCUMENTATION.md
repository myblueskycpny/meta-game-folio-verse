# Portfolio Documentation

This documentation will help you easily modify your portfolio content without needing to edit code directly. All content is stored in data files that can be updated to refresh your portfolio.

## Table of Contents
- [Personal Information](#personal-information)
- [Projects](#projects)
- [Skills & Tech Stack](#skills--tech-stack)
- [Experience & Collaboration](#experience--collaboration)
- [Media & Assets](#media--assets)

## Personal Information

To update your personal information, modify the `src/data/personalInfo.ts` file:

```typescript
// src/data/personalInfo.ts
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "A short biography about yourself",
  location: "City, Country",
  email: "your.email@example.com",
  phone: "+1 123 456 7890",
  socialMedia: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    // Add other social media platforms as needed
  }
};
```

## Projects

Projects are defined in `src/data/projects.ts`. Add, remove, or edit projects by updating this file:

```typescript
// src/data/projects.ts
export const projects = [
  {
    id: "project1",
    title: "Project Name",
    description: "Brief description of the project",
    longDescription: "Detailed explanation of the project, its goals, and your role in it",
    thumbnailUrl: "/images/projects/project1-thumbnail.jpg",
    imageUrl: "/images/projects/project1-full.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://project-example.com",
    githubUrl: "https://github.com/yourusername/project-name",
    featured: true,
    date: "2023-04"
  },
  // Add more projects following the same structure
];
```

### Adding a New Project

1. Create a new object in the projects array following the structure above
2. Add project images to the `/public/images/projects/` directory
3. Reference these images in the `thumbnailUrl` and `imageUrl` properties

## Skills & Tech Stack

Update your skills and technologies in `src/data/techStack.ts`:

```typescript
// src/data/techStack.ts
export const techStack = {
  frontend: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Django", "Flask", "Ruby on Rails"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  devops: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Adobe XD"]
};

export const skillLevels = [
  {
    name: "React",
    level: 90 // Percentage of proficiency
  },
  {
    name: "TypeScript",
    level: 85
  },
  // Add more skills with their proficiency levels
];
```

## Experience & Collaboration

Manage your work experience and collaborations in `src/data/experience.ts`:

```typescript
// src/data/experience.ts
export const workExperience = [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Jan 2022 - Present",
    description: "Brief description of your responsibilities and achievements",
    logo: "/images/logos/company-logo.png"
  },
  // Add more work experiences
];

export const collaborations = [
  {
    name: "Collaboration Partner",
    description: "Description of the collaboration",
    url: "https://partner-website.com",
    logo: "/images/logos/partner-logo.png"
  },
  // Add more collaborations
];
```

## Media & Assets

### Images

1. Store all images in the `/public/images/` directory
2. Organize in subdirectories for better management:
   - `/public/images/profile/` - For personal photos
   - `/public/images/projects/` - For project screenshots and thumbnails
   - `/public/images/logos/` - For company logos and tech stack icons

### Image Guidelines

- **Profile Images**: Recommended size 500x500px, square aspect ratio
- **Project Thumbnails**: Recommended size 800x600px
- **Project Full Images**: Recommended size 1920x1080px
- **Logos**: Recommended size 200x200px, transparent background

### File Formats

- Use `.jpg` or `.jpeg` for photographs
- Use `.png` for images that require transparency
- Use `.svg` for logos and icons where possible

### Replacing Images

1. Create your new image with the recommended specifications
2. Add it to the appropriate directory in `/public/images/`
3. Update the reference in the corresponding data file

## Adding New Content Sections

If you need to add entirely new types of content:

1. Create a new data file in `src/data/` following the patterns shown above
2. Import and use this data file in the relevant component
3. Style the new section to match the overall design

## Theme Customization

To update theme colors, modify the `tailwind.config.ts` file:

```typescript
// tailwind.config.ts
// Look for the colors section and update the values:
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  // Other color definitions...
}
```

## Troubleshooting

If you encounter issues after updating content:

1. Check for typos in file paths and URLs
2. Verify that all referenced images exist in the correct directories
3. Ensure all data files maintain the expected structure

---

This documentation is meant to help you easily maintain and update your portfolio. If you need to make structural changes to the site itself, you may need to edit the React components directly.
