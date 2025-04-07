
import React from 'react';

type TechItem = {
  name: string;
  icon: string;
  category: 'primary' | 'modeling' | 'graphics' | 'audio' | 'other';
  proficiency?: number; // 1-5 scale
};

const technologies: TechItem[] = [
  { name: 'Unity', icon: '🎮', category: 'primary', proficiency: 4 },
  { name: 'C#', icon: '💻', category: 'primary', proficiency: 3 },
  { name: 'Blender', icon: '🧊', category: 'modeling', proficiency: 2 },
  { name: 'Photoshop', icon: '🖌️', category: 'graphics', proficiency: 3 },
  { name: 'Audacity', icon: '🔊', category: 'audio', proficiency: 3 },
  { name: 'Spatial.io', icon: '🌐', category: 'other', proficiency: 4 },
  { name: 'AR Core', icon: '📱', category: 'primary', proficiency: 3 },
  { name: 'VR Toolkit', icon: '👓', category: 'primary', proficiency: 3 },
  { name: 'Substance Painter', icon: '🎨', category: 'graphics', proficiency: 2 },
];

const Technologies = () => {
  const renderProficiencyBar = (level: number) => {
    return (
      <div className="w-full bg-secondary rounded-full h-2 mt-1">
        <div 
          className="bg-gradient-to-r from-purple to-teal h-full rounded-full" 
          style={{ width: `${(level / 5) * 100}%` }}
        ></div>
      </div>
    );
  };

  return (
    <section id="tech" className="section bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">My Development Process</h3>
            <p className="mb-4">
              I approach game and XR development with a focus on user experience and performance.
              My workflow typically involves rapid prototyping in Unity, followed by iterative 
              improvements based on testing and feedback.
            </p>
            <p className="mb-4">
              While my programming skills are at a beginner to intermediate level, I enhance my 
              development capabilities by leveraging AI tools to assist with complex logic and 
              optimize workflows.
            </p>
            <p>
              For asset creation and modification, I use a combination of tools including Blender 
              for 3D models, Photoshop for textures, and Audacity for sound editing. This allows 
              me to customize every aspect of the experience.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Technology Expertise</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold mb-3 text-purple">Main Development Tools</h4>
                <div className="grid grid-cols-2 gap-4">
                  {technologies
                    .filter(tech => tech.category === 'primary')
                    .map(tech => (
                      <div key={tech.name} className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        {renderProficiencyBar(tech.proficiency || 0)}
                      </div>
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-purple">Asset Creation Tools</h4>
                <div className="grid grid-cols-3 gap-4">
                  {technologies
                    .filter(tech => ['modeling', 'graphics', 'audio'].includes(tech.category))
                    .map(tech => (
                      <div key={tech.name} className="p-3 text-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <div className="font-medium text-sm">{tech.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-purple">Additional Platforms</h4>
                <div className="grid grid-cols-3 gap-4">
                  {technologies
                    .filter(tech => tech.category === 'other')
                    .map(tech => (
                      <div key={tech.name} className="p-3 text-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <div className="font-medium text-sm">{tech.name}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 glass-card p-6">
          <h3 className="text-xl font-bold mb-4">Metaverse Experience</h3>
          <p className="mb-6">
            I've designed virtual rooms in the metaverse using Spatial.io for academic purposes, 
            including creating a virtual courtroom for thesis defenses. These environments enable 
            immersive collaboration and presentation opportunities regardless of physical location.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gradient-to-br from-purple/20 to-teal/20 rounded-lg flex items-center justify-center">
              <p className="text-center text-sm text-foreground/70">
                Virtual Courtroom Screenshot<br/>
                (Placeholder - Add actual screenshot)
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-purple/20 to-teal/20 rounded-lg flex items-center justify-center">
              <p className="text-center text-sm text-foreground/70">
                Academic Presentation Space<br/>
                (Placeholder - Add actual screenshot)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
