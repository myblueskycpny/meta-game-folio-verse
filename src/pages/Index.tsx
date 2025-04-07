
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headset, Code, PenTool, Layers } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Game Developer Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Showcasing XR projects, games, and metaverse environments built with Unity and modern tools
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Button size="lg" className="gap-2">
                <Headset className="h-5 w-5" /> View Projects
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Code className="h-5 w-5" /> Tech Stack
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Headset className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">XR Development</h3>
                <p className="text-muted-foreground">
                  Specialized in creating immersive AR/VR experiences and metaverse environments
                </p>
              </div>
              
              <div className="p-6 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Unity Specialist</h3>
                <p className="text-muted-foreground">
                  Building games and applications with Unity, C#, and supporting creative tools
                </p>
              </div>
              
              <div className="p-6 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <PenTool className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Academic Research</h3>
                <p className="text-muted-foreground">
                  Collaborating with universities on innovative XR applications for education
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Link to="/docs">
                <Button variant="link" className="text-primary">
                  Documentation for Developers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
