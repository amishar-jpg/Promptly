import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'features', 'pricing', 'testimonials'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(6, 182, 212, 0.1), 0 0 40px rgba(10, 25, 47, 0.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.2)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-poppins font-bold gradient-text cursor-pointer relative group pb-3"
        >
          Promptly
          {/* Decorative line below logo */}
          <motion.div
            className="absolute -bottom-1 left-0 w-[75%] h-[2px] bg-gradient-to-r from-teal-400 via-emerald-400 to-transparent rounded-l-full"
            style={{
              boxShadow: '0 0 10px rgba(20, 184, 166, 0.6), 0 0 20px rgba(16, 185, 129, 0.4)',
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
              scaleX: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Decorative dot */}
          <motion.div
            className="absolute -bottom-1 left-[80%] w-1.5 h-1.5 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full"
            style={{
              boxShadow: '0 0 8px rgba(20, 184, 166, 0.8), 0 0 15px rgba(16, 185, 129, 0.5)',
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              className="relative pb-2"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: {},
                hover: {}
              }}
            >
              <motion.a
                href={link.href}
                className={`text-sm font-medium relative block px-3 py-2 ${
                  activeSection === link.href.slice(1)
                    ? 'text-teal-400'
                    : 'text-gray-300'
                }`}
                variants={{
                  initial: { y: 0, color: activeSection === link.href.slice(1) ? '#2dd4bf' : '#d1d5db' },
                  hover: { y: -2, color: '#5eead4' }
                }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
              
              {/* Subtle glow background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-emerald-500/10 to-teal-500/5 rounded-lg -z-10"
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated gradient underline - Thinner with better gradient */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                style={{
                  boxShadow: '0 0 8px rgba(20, 184, 166, 0.5), 0 0 12px rgba(16, 185, 129, 0.3)',
                }}
                variants={{
                  initial: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, transparent 70%)',
                filter: 'blur(15px)',
              }}
            />
            <span className="relative z-10">Try for Free</span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
