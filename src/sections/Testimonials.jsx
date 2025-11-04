import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import ScrollReveal from '../components/ScrollReveal';
import { testimonials } from '../data/content';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] w-24 mx-auto mb-8 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.6)',
              }}
            />

            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Loved by <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who transformed their content creation
            </p>
            
            {/* Decorative line with enhanced animation */}
            <motion.div
              className="w-24 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"
              style={{
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)',
              }}
              animate={{
                scaleX: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </ScrollReveal>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 justify-center"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className={`hidden md:block ${index === 1 ? '' : 'opacity-60 scale-90'}`}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
                <div className="md:hidden">
                  <TestimonialCard testimonial={testimonials[currentIndex]} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows with Enhanced Effects */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full backdrop-blur-md transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              border: '1px solid rgba(20, 184, 166, 0.4)',
              boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
                boxShadow: 'inset 0 0 20px rgba(20, 184, 166, 0.3)',
              }}
            />
            <FiChevronLeft className="text-2xl text-teal-400 relative z-10" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="group absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full backdrop-blur-md transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)',
                boxShadow: 'inset 0 0 20px rgba(16, 185, 129, 0.3)',
              }}
            />
            <FiChevronRight className="text-2xl text-emerald-400 relative z-10" />
          </motion.button>
        </div>

        {/* Dots Indicator with Enhanced Styling */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-gradient-to-r from-teal-400 to-emerald-400' 
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
              style={
                index === currentIndex
                  ? {
                      boxShadow: '0 0 15px rgba(20, 184, 166, 0.6)',
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
