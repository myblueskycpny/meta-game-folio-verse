
import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      // Send email using EmailJS
      // Replace these with your EmailJS Service ID, Template ID, and User ID
      await emailjs.send(
        "service_default", // Service ID
        "template_default", // Template ID
        templateParams,
        "your_user_id" // User ID
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">Interested in working together? Let's connect!</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <a href="mailto:ahmdfaiz27@gmail.com" className="hover:text-purple transition-colors">
                      ahmdfaiz27@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <a href="" className="hover:text-purple transition-colors">
                      (+62) 822-4828-0770
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p>Malang, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ahmad-faiz-3784a6248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center hover:bg-purple hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/myblueskycpny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center hover:bg-purple hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center hover:bg-purple hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Message subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-[150px]" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-purple hover:bg-purple-dark"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
