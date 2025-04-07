
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Documentation = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Developer Documentation</h1>
      <p className="text-lg mb-8">
        This guide explains how to modify and update your portfolio content without requiring advanced coding skills.
      </p>

      <Tabs defaultValue="structure">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="structure">File Structure</TabsTrigger>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="media">Media & Assets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="structure" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Understanding the File Structure</CardTitle>
              <CardDescription>Key files and their locations for easy modifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Main Content Files</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><code>src/data/personalInfo.ts</code> - Contains personal details, social links, and skills</li>
                  <li><code>src/data/projects.ts</code> - Contains all portfolio projects data</li>
                  <li><code>src/data/techStack.ts</code> - Contains technology stack information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Component Structure</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><code>src/components/Hero.tsx</code> - Hero section with personal introduction</li>
                  <li><code>src/components/Portfolio.tsx</code> - Projects portfolio section</li>
                  <li><code>src/components/TechStack.tsx</code> - Technology stack showcase</li>
                  <li><code>src/components/Contact.tsx</code> - Contact information and social links</li>
                  <li><code>src/components/Collaborations.tsx</code> - Section about collaborations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Updating Personal Information</CardTitle>
              <CardDescription>How to modify your personal details, social links, and skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Personal Details</h3>
                <p className="mb-2">Edit the file <code>src/data/personalInfo.ts</code>:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
{`export const personalInfo = {
  name: "Your Name",
  title: "Game Developer & XR Specialist",
  email: "your.email@example.com",
  phone: "+1 234 567 890",
  location: "Your City, Country",
  bio: "Your detailed biography...",
  avatarUrl: "/images/profile.jpg", // Place image in public/images folder
  
  // Social media links
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/your-profile/",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    youtube: "https://youtube.com/@yourchannel"
  },
};`}
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Profile Picture</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Prepare a square image (recommended: 500x500 pixels)</li>
                  <li>Save it in the <code>public/images/</code> folder</li>
                  <li>Update the <code>avatarUrl</code> in <code>personalInfo.ts</code> to point to your image</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Skills & Expertise</h3>
                <p className="mb-2">Edit the skills section in the same file:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
{`export const skills = [
  { name: "Unity 3D", level: 80 },
  { name: "C#", level: 70 },
  { name: "AR/VR Development", level: 85 },
  // Add more skills as needed
];`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Managing Projects</CardTitle>
              <CardDescription>How to add, edit, or remove portfolio projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Project Structure</h3>
                <p className="mb-2">Edit the file <code>src/data/projects.ts</code>:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
{`export const projects = [
  {
    id: "project-1",
    title: "VR Escape Room",
    description: "An immersive virtual reality escape room experience...",
    imageUrl: "/images/projects/vr-escape-room.jpg",
    tags: ["Unity", "VR", "C#", "Oculus"],
    youtubeId: "dQw4w9WgXcQ", // YouTube video ID (from URL)
    year: 2023,
    collaborationType: "University Research",
    collaborators: ["Dr. Jane Smith", "XR Lab"],
    link: "https://yourprojectlink.com" // Optional external link
  },
  // Additional projects...
];`}
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Adding a New Project</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Prepare a project thumbnail image (recommended: 16:9 ratio)</li>
                  <li>Save it in the <code>public/images/projects/</code> folder</li>
                  <li>Copy an existing project object in <code>projects.ts</code> and modify all fields</li>
                  <li>Generate a unique <code>id</code> for the new project</li>
                  <li>For YouTube videos, extract just the ID from the YouTube URL (e.g., "dQw4w9WgXcQ" from "https://www.youtube.com/watch?v=dQw4w9WgXcQ")</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Removing or Editing Projects</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To remove a project: Delete its entire object from the <code>projects</code> array</li>
                  <li>To edit a project: Locate its object in the array and modify the relevant properties</li>
                  <li>To reorder projects: Change their position in the array (first items appear first)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Managing Media & Assets</CardTitle>
              <CardDescription>How to handle images, videos, and other assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Image Management</h3>
                <p className="mb-4">All images should be stored in the <code>public</code> folder structure:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><code>public/images/</code> - Main folder for images</li>
                  <li><code>public/images/projects/</code> - Project thumbnails and screenshots</li>
                  <li><code>public/images/tech/</code> - Technology logos</li>
                </ul>
                <p className="mt-2">Recommended formats: JPG for photos, PNG for graphics with transparency</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">YouTube Videos</h3>
                <p>To embed YouTube videos:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Get your YouTube video URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)</li>
                  <li>Extract just the ID part (e.g., "dQw4w9WgXcQ")</li>
                  <li>Add this ID to the <code>youtubeId</code> property in your project</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Technology Stack Icons</h3>
                <p className="mb-2">Edit the file <code>src/data/techStack.ts</code>:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
{`export const techStack = [
  {
    name: "Unity",
    icon: "/images/tech/unity.png",
    description: "Primary game development engine"
  },
  // Add more technologies
];`}
                </pre>
                <p className="mt-2">Place all technology icons in <code>public/images/tech/</code> folder</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Update Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Edit <code>src/data/personalInfo.ts</code></p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Add Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Add to array in <code>src/data/projects.ts</code></p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Change Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Modify <code>src/data/techStack.ts</code></p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p>If you need additional assistance with customizing your portfolio, consider:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Checking the React and Tailwind CSS documentation for component customizations</li>
          <li>Exploring the <code>src/components</code> folder to understand how each section is built</li>
          <li>Adding comments to your data files to document your customizations</li>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
