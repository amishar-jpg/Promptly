import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiMail, 
  FiArrowUp,
  FiSend,
  FiCheck,
  FiShield,
  FiLock,
  FiGlobe
} from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, [controls]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkSections = [
    {
      title: 'Products',
      color: 'text-purple-400',
      links: [
        { name: 'AI Writer', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Blog Generator', href: '#' },
        { name: 'API Access', href: '#' },
      ]
    },
    {
      title: 'Resources',
      color: 'text-teal-400',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
      ]
    },
    {
      title: 'Company',
      color: 'text-blue-400',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press Kit', href: '#' },
      ]
    },
    {
      title: 'Legal',
      color: 'text-pink-400',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
      ]
    },
  ];

  const socialLinks = [
    { 
      icon: <FiGithub />, 
      href: '#', 
      gradient: 'from-gray-600 to-gray-800',
      hoverGradient: 'from-gray-500 to-gray-700'
    },
    { 
      icon: <FiTwitter />, 
      href: '#', 
      gradient: 'from-blue-400 to-blue-600',
      hoverGradient: 'from-blue-300 to-blue-500'
    },
    { 
      icon: <FiLinkedin />, 
      href: '#', 
      gradient: 'from-blue-500 to-blue-700',
      hoverGradient: 'from-blue-400 to-blue-600'
    },
    { 
      icon: <FiMail />, 
      href: '#', 
      gradient: 'from-red-500 to-pink-600',
      hoverGradient: 'from-red-400 to-pink-500'
    },
  ];

  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Animated gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400" style={{ boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)' }}></div>
      
      {/* Floating geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-500/30 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -90, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-40 h-40 border-2 border-emerald-500/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-teal-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Section - Brand & Newsletter */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="lg:col-span-4"
          >
            {/* Logo with animated gradient */}
            <motion.h3 
              className="text-4xl font-poppins font-bold mb-4 relative"
              style={{
                background: 'linear-gradient(135deg, #14B8A6 0%, #10B981 50%, #14B8A6 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Promptly
              {/* Decorative line below logo */}
              <motion.div
                className="absolute -bottom-2 left-0 w-20 h-[2px] bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(20, 184, 166, 0.6)',
                }}
                animate={{
                  scaleX: [0.8, 1, 0.8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered writing assistant that helps you create better content, faster.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-200">
                Subscribe to our newsletter
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 pr-24 rounded-lg bg-white/5 border-2 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none transition-all ${
                    email && !isValidEmail
                      ? 'border-red-500/50'
                      : isValidEmail
                      ? 'border-emerald-500/50'
                      : 'border-white/10 focus:border-teal-400/50'
                  }`}
                  style={{
                    boxShadow: isValidEmail ? '0 0 20px rgba(16, 185, 129, 0.2)' : 'none'
                  }}
                />
                <button
                  type="submit"
                  disabled={!isValidEmail || isSubscribed}
                  className={`absolute right-1.5 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-md font-semibold transition-all flex items-center justify-center ${
                    isSubscribed
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-teal-500/50'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  style={{
                    boxShadow: '0 0 15px rgba(20, 184, 166, 0.3)',
                  }}
                >
                  {isSubscribed ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-1"
                    >
                      <FiCheck /> Done
                    </motion.span>
                  ) : (
                    <FiSend />
                  )}
                </button>
              </div>
              {email && !isValidEmail && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2"
                >
                  Please enter a valid email
                </motion.p>
              )}
            </form>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <FiShield className="text-emerald-400" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <FiLock className="text-teal-400" />
                <span>Encrypted</span>
              </div>
            </div>
          </motion.div>

          {/* Center Sections - Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {linkSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <h4 className="font-poppins font-bold text-lg mb-4 text-teal-400">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal-300 transition-all duration-300 relative group/link inline-block"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 group-hover/link:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Section - Social & Back to Top */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="font-poppins font-bold text-lg mb-4 text-white">
              Connect With Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 text-xl transition-all duration-300 relative overflow-hidden group"
                  style={{
                    boxShadow: '0 0 20px rgba(20, 184, 166, 0.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="mb-6">
              <label className="flex text-sm font-semibold mb-2 text-gray-200 items-center gap-2">
                <FiGlobe /> Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-white focus:outline-none focus:border-teal-400/50 transition-all cursor-pointer"
                style={{
                  boxShadow: 'none',
                }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-gray-900">
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
              }}
            >
              <FiArrowUp /> Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Gradient Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-8" style={{ boxShadow: '0 0 10px rgba(20, 184, 166, 0.3)' }}></div>

        {/* Copyright Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm"
        >
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Promptly. All rights reserved. Crafted with ❤️ for creators.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
