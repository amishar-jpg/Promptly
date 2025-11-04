import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const FeatureCard = ({ feature, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Main Card Container */}
      <motion.div
        whileHover={{ 
          y: -12, 
          scale: 1.03,
          rotateX: 5,
          rotateY: 5,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative p-8 rounded-2xl h-full overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated Gradient Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, #14B8A6, #10B981, #14B8A6)',
            backgroundSize: '200% 200%',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Hologram Effect */}
        {isHovered && (
          <>
            {/* Holographic scan lines */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    rgba(20, 184, 166, 0.03) 0px,
                    rgba(20, 184, 166, 0.08) 1px,
                    transparent 1px,
                    transparent 2px
                  )
                `,
                backgroundSize: '100% 4px',
              }}
              animate={{
                backgroundPositionY: ['0px', '4px'],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Holographic glow sweep */}
            <motion.div
              className="absolute left-0 right-0 h-32 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(20, 184, 166, 0.15) 50%, transparent 100%)',
                filter: 'blur(20px)',
              }}
              animate={{
                top: ['-10%', '110%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Holographic color shift overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-screen"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Holographic edge glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: `
                  inset 0 0 40px rgba(20, 184, 166, 0.2),
                  inset 0 0 80px rgba(16, 185, 129, 0.1),
                  0 0 40px rgba(20, 184, 166, 0.15)
                `,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Holographic glitch effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(20, 184, 166, 0.05) 50%, transparent 100%)',
              }}
              animate={{
                left: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Corner Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-teal-400/50 rounded-tl-lg" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-teal-400/50 rounded-br-lg" />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div className="relative mb-6 inline-block">
            {/* Icon Background */}
            <div
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.2))',
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
              }}
            >
              <div
                className="text-5xl"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.5))',
                }}
              >
                {feature.icon}
              </div>
            </div>
          </div>

          {/* Title with Animated Gradient */}
          <motion.h3 
            className="text-2xl font-poppins font-bold mb-4 relative text-white"
          >
            {feature.title}
          </motion.h3>

          {/* Decorative line */}
          <motion.div
            className="h-[1px] w-full mb-4 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Description */}
          <motion.p 
            className="text-gray-300 leading-relaxed mb-6 text-[15px]"
            animate={{
              color: isHovered ? '#e5e7eb' : '#d1d5db',
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.description}
          </motion.p>

          {/* Learn More Arrow */}
          <motion.div
            className="flex items-center gap-2 text-teal-400 font-medium text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn More</span>
            <motion.div
              animate={{
                x: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <FiArrowRight className="text-lg" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
