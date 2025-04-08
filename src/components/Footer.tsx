import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-md py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-display font-bold text-purple hover:text-purple-dark transition">
              Game<span className="text-accent">Folio</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-6 mb-4">
              <a href="#about" className="nav-link text-sm">
                About
              </a>
              <a href="#portfolio" className="nav-link text-sm">
                Portfolio
              </a>
              <a href="#tech" className="nav-link text-sm">
                Technologies
              </a>
              <a href="#contact" className="nav-link text-sm">
                Contact
              </a>
            </div>

            <p className="text-sm text-foreground/70">© {currentYear} • Ahmad Faiz</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
