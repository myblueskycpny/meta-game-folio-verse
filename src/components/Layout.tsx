
import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="border-t py-6 bg-muted/40">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p>© {new Date().getFullYear()} Game Developer Portfolio</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/docs" className="text-sm hover:underline">
              Documentation
            </Link>
            <span className="text-muted-foreground text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
