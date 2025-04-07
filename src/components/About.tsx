
import React from 'react';
import { BookText, GraduationCap, Users, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Game developer with a background in Informatics Engineering, specializing in intelligent games and XR technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4">My Journey</h3>
            <p className="mb-4">
              As an Informatics Engineering graduate with a passion for game development and XR technologies, 
              I've been creating immersive experiences that blend cutting-edge technology with engaging gameplay.
            </p>
            <p className="mb-4">
              My academic background has provided me with a solid foundation in programming concepts and software engineering,
              while my passion for games has driven me to continuously explore new tools and techniques in the field.
            </p>
            <p>
              I specialize in Unity development, creating experiences ranging from educational games to VR applications.
              I'm particularly interested in merging AI concepts with game mechanics to create intelligent, responsive gameplay.
            </p>
          </div>

          <div className="space-y-6">
            {/* Experience Cards */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple/10 flex-shrink-0 flex items-center justify-center">
                <GraduationCap className="text-purple" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Informatics Engineering</h4>
                <p className="text-sm text-foreground/70">
                  Bachelor's degree with focus on software engineering and intelligent systems
                </p>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple/10 flex-shrink-0 flex items-center justify-center">
                <BookText className="text-purple" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Academic Research</h4>
                <p className="text-sm text-foreground/70">
                  Collaborated with university lecturers on XR applications for education
                </p>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple/10 flex-shrink-0 flex items-center justify-center">
                <Users className="text-purple" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Internship Experience</h4>
                <p className="text-sm text-foreground/70">
                  Developed game prototypes and XR applications during industry internships
                </p>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple/10 flex-shrink-0 flex items-center justify-center">
                <Brain className="text-purple" />
              </div>
              <div>
                <h4 className="font-bold mb-1">AI-Assisted Development</h4>
                <p className="text-sm text-foreground/70">
                  Using AI tools to enhance game logic and creative workflow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
