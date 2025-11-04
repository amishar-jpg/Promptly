import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import './styles/index.css';
import './styles/animations.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 origin-left z-[100]"
        style={{ 
          scaleX,
          boxShadow: '0 0 10px rgba(20, 184, 166, 0.6)'
        }}
      />
      
      {/* Unified gradient background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0D1B2A] -z-50" />
      
      {/* Subtle animated overlay */}
      <div className="fixed inset-0 -z-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>
      
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
