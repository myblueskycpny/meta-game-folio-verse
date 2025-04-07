
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Technologies from '@/components/Technologies';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          const href = this.getAttribute('href');
          if (href !== '#') {
            window.history.pushState({}, '', href);
          } else {
            window.history.pushState({}, '', window.location.pathname);
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <Collaborations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
