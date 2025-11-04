import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative p-8 rounded-2xl min-w-[300px] mx-4 cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(20, 184, 166, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Animated gradient border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(16, 185, 129, 0.3))',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 30px rgba(20, 184, 166, 0.4), inset 0 0 20px rgba(20, 184, 166, 0.1)',
        }}
      />

      {/* Quote mark with gradient */}
      <div 
        className="text-6xl mb-4 font-serif leading-none"
        style={{
          background: 'linear-gradient(135deg, #14B8A6 0%, #10B981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.3,
        }}
      >
        "
      </div>

      {/* Quote text */}
      <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
        {testimonial.quote}
      </p>

      {/* Decorative line */}
      <motion.div
        className="h-[1px] w-full mb-6 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Author info */}
      <div className="flex items-center relative z-10">
        <motion.div 
          className="text-4xl mr-4 p-2 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
          }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {testimonial.avatar}
        </motion.div>
        <div>
          <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
          <p className="text-sm gradient-text font-medium">{testimonial.company}</p>
        </div>
      </div>

      {/* Corner brackets decoration */}
      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-teal-400/50 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-emerald-400/50 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-emerald-400/50 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-teal-400/50 rounded-br-lg" />
    </motion.div>
  );
};

export default TestimonialCard;
