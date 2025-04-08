import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Technology", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/myblueskycpny", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-faiz-3784a6248", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ];

  return (
    <header className={cn("fixed top-0 w-full transition-all duration-300 z-50", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "py-4")}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="text-xl font-display font-bold text-purple hover:text-purple-dark transition">
          Game<span className="text-accent">Folio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-purple transition-colors" aria-label={link.name}>
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-foreground py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-border">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-purple transition-colors" aria-label={link.name}>
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
