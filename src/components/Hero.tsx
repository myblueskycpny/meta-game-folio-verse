
import React from 'react';
import { ArrowDown, Gamepad2, Laptop, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-purple to-purple-dark bg-clip-text text-transparent">
              Game Developer & XR Specialist
            </h1>
            <p className="text-lg md:text-xl mb-6 text-foreground/80">
              Creating immersive experiences with Unity, AR/VR technologies, and intelligent game design
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="btn-primary flex items-center justify-center gap-2">
                <Gamepad2 size={18} />
                <span>View My Work</span>
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-3">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-2">
                  <Gamepad2 className="text-purple" />
                </div>
                <h3 className="font-medium">Game Dev</h3>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-2">
                  <Headphones className="text-purple" />
                </div>
                <h3 className="font-medium">XR Design</h3>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-2">
                  <Laptop className="text-purple" />
                </div>
                <h3 className="font-medium">Informatics</h3>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="glass-card p-4 sm:p-6 relative animate-fade-in">
              <div className="aspect-square w-full max-w-[400px] rounded-xl bg-gradient-to-tr from-purple/20 via-transparent to-teal/20 overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Game Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-purple" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
