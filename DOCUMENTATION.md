

# GameFolio Portfolio Documentation

This document provides guidance on how to modify and update the content of your portfolio website.

## Table of Contents
1. [General Information](#general-information)
2. [Navigation and Social Links](#navigation-and-social-links)
3. [Hero Section](#hero-section)
4. [About Section](#about-section)
5. [Portfolio Section](#portfolio-section)
6. [Technologies Section](#technologies-section)
7. [Collaborations Section](#collaborations-section)
8. [Contact Section](#contact-section)
9. [Images and Media](#images-and-media)
10. [Setting Up Email Functionality](#setting-up-email-functionality)

## General Information

The portfolio is built using React, TypeScript, and Tailwind CSS. To make content changes, you'll need to edit the specific component files.

## Navigation and Social Links

To update the navigation links and social media links:

1. Open `src/components/Navbar.tsx`
2. Find the `navLinks` and `socialLinks` arrays
3. Modify the URLs and names as needed

```typescript
// Example
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add or remove links as needed
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  // Update with your actual social media URLs
];
```

## Hero Section

To update the hero section content:

1. Open `src/components/Hero.tsx`
2. Change the headline, subheadline, and button text as needed
3. To update the profile image, replace the `src` attribute of the `img` tag with your new image URL:

```jsx
<img
  src="your-new-image-url.jpg"
  alt="Game Developer Portrait"
  className="w-full h-full object-cover"
/>
```

4. To modify the skills icons, update the following section:

```jsx
<div className="mt-12 grid grid-cols-3 gap-4">
  <div className="flex flex-col items-center text-center p-3">
    <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-2">
      <Gamepad2 className="text-purple" />
    </div>
    <h3 className="font-medium">Game Dev</h3>
  </div>
  // Add or modify other skill items as needed
</div>
```

## About Section

To update the "About Me" section:

1. Open `src/components/About.tsx`
2. Update the text content in the paragraph elements
3. Modify the experience cards to reflect your actual background:

```jsx
<div className="glass-card p-5 flex items-start gap-4">
  <div className="w-10 h-10 rounded-full bg-purple/10 flex-shrink-0 flex items-center justify-center">
    <GraduationCap className="text-purple" />
  </div>
  <div>
    <h4 className="font-bold mb-1">Informatics Engineering</h4>
    <p className="text-sm text-foreground/70">
      // Update description here
    </p>
  </div>
</div>
```

## Portfolio Section

To update the portfolio projects:

1. Open `src/components/Portfolio.tsx`
2. Locate the projects data array and update as needed:
3. For each project, you can modify:
   - `title`: The project name
   - `description`: Project description
   - `image`: URL to project image/thumbnail
   - `tags`: Technologies used
   - `type`: Category of project
   - `link`: URL to live project or repository

## Technologies Section

To update the technologies:

1. Open `src/components/Technologies.tsx`
2. Locate the `technologies` array and update it:

```typescript
const technologies: TechItem[] = [
  { name: 'Unity', icon: '🎮', category: 'primary', proficiency: 4 },
  // Add or modify as needed
];
```

3. To update the metaverse experience section, modify the paragraph text and replace the placeholder images with actual screenshots.

## Collaborations Section

To update your collaborations:

1. Open `src/components/Collaborations.tsx`
2. Find the `collaborations` array and update it with your actual experience:

```typescript
const collaborations = [
  {
    type: 'academic',
    title: "XR Research Lab",
    description: "Your updated description",
    icon: GraduationCap,
    year: "2022 - Present"
  },
  // Add or modify as needed
];
```

## Contact Section

To update contact information:

1. Open `src/components/Contact.tsx`
2. Update the email, phone, and location information:

```jsx
<div className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0">
    <Mail size={18} className="text-purple" />
  </div>
  <div>
    <p className="text-sm text-foreground/70">Email</p>
    <a href="mailto:your-actual-email@example.com" className="hover:text-purple transition-colors">
      your-actual-email@example.com
    </a>
  </div>
</div>
```

3. Update the social media links to use your actual profiles.

## Images and Media

For best results when updating images:

1. Use professional, high-quality images
2. For the hero section profile image, use a square aspect ratio
3. For project images, maintain consistent aspect ratios
4. Optimize images for web before uploading (compress to reduce file size)
5. Host images on a reliable service (e.g., your own server, AWS S3, Cloudinary, etc.)

## Setting Up Email Functionality

The contact form uses EmailJS to send emails directly from the client side. To set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (e.g., Gmail, Outlook, etc.)
3. Create an email template with variables matching the form fields:
   - `from_name`: Sender's name
   - `from_email`: Sender's email address
   - `subject`: Email subject
   - `message`: Message content

4. Get your Service ID, Template ID, and User ID from EmailJS
5. Update the Contact component with your IDs:

```jsx
await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your Service ID
  "YOUR_TEMPLATE_ID", // Replace with your Template ID
  templateParams,
  "YOUR_USER_ID" // Replace with your User ID
);
```

6. Test the form to ensure emails are being received properly

## Additional Notes

- If you need to change links or routes, make sure to update them in all relevant files
- When updating icons from Lucide React, ensure the icon exists in the current package version

