import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    // Show cursor after text animation completes
    const timer = setTimeout(() => setCursorVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Soft accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight"
          >
            {/* Sequential word animation */}
            <motion.span
              initial={{ opacity: 0, y: 30, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0em' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              AI that
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0em' }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block"
            >
              writes your
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="inline-block relative"
            >
              <motion.span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #10B981, #14B8A6)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(20, 184, 166, 0.5))',
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
                ideas for
              </motion.span>
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="inline-block relative"
            >
              <motion.span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, #06B6D4, #0EA5E9, #06B6D4)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              >
                you.
              </motion.span>
              {/* Blinking cursor */}
              {cursorVisible && (
                <motion.span
                  className="inline-block w-1 h-12 md:h-16 ml-1 rounded-sm"
                  style={{
                    background: 'linear-gradient(180deg, #14B8A6, #06B6D4)',
                    boxShadow: '0 0 10px rgba(20, 184, 166, 0.8)',
                  }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl"
          >
            Generate blogs, posts, and stories 10x faster with AI precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full text-white font-semibold text-lg overflow-hidden group shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #14B8A6, #10B981)',
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, transparent 70%)',
                  filter: 'blur(15px)',
                }}
              />
              
              <span className="relative z-10">Start Free Trial</span>
              
              {/* Hover shadow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"
              />
            </motion.button>
            
            {/* Secondary CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-teal-400/30 backdrop-blur-md font-semibold text-lg flex items-center gap-2 transition-all shadow-lg hover:border-teal-400/50 hover:shadow-xl"
              style={{
                background: 'rgba(20, 184, 166, 0.05)',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiPlay className="text-teal-400" />
              </motion.div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex items-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span>14-day free trial</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Holographic AI Interface Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="relative hidden md:flex items-center justify-center h-[600px]"
        >
          {/* Central glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
            style={{
              background: 'radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Holographic Display Panels */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]">
            {/* Main holographic screen with enhanced glow */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08), rgba(16, 185, 129, 0.12), rgba(20, 184, 166, 0.08))',
                border: '2px solid rgba(20, 184, 166, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '24px',
                boxShadow: 'inset 0 0 40px rgba(20, 184, 166, 0.1)',
              }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(20, 184, 166, 0.3), inset 0 0 40px rgba(20, 184, 166, 0.1)',
                  '0 0 60px rgba(20, 184, 166, 0.5), inset 0 0 60px rgba(20, 184, 166, 0.2)',
                  '0 0 30px rgba(20, 184, 166, 0.3), inset 0 0 40px rgba(20, 184, 166, 0.1)',
                ],
                borderColor: [
                  'rgba(20, 184, 166, 0.4)',
                  'rgba(20, 184, 166, 0.7)',
                  'rgba(20, 184, 166, 0.4)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Animated corner accents */}
              {[
                { top: 0, left: 0, rotate: 0 },
                { top: 0, right: 0, rotate: 90 },
                { bottom: 0, right: 0, rotate: 180 },
                { bottom: 0, left: 0, rotate: 270 },
              ].map((pos, i) => (
                <motion.div
                  key={`corner-${i}`}
                  className="absolute w-8 h-8"
                  style={{
                    ...pos,
                    margin: '8px',
                    borderTop: '2px solid rgba(20, 184, 166, 0.6)',
                    borderLeft: '2px solid rgba(20, 184, 166, 0.6)',
                    transform: `rotate(${pos.rotate}deg)`,
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Enhanced scan lines */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-[24px]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(20, 184, 166, 0.05) 3px, rgba(20, 184, 166, 0.05) 6px)',
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '0px 6px'],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Glowing scan beam */}
              <motion.div
                className="absolute left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.8), transparent)',
                  filter: 'blur(2px)',
                }}
                animate={{
                  top: ['0%', '100%'],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Enhanced data streams with glow */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`stream-${i}`}
                  className="absolute left-8 h-1"
                  style={{
                    width: `${60 + Math.random() * 20}%`,
                    top: `${10 + i * 8}%`,
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.6), rgba(16, 185, 129, 0.6), transparent)',
                    filter: 'blur(1px)',
                    boxShadow: '0 0 8px rgba(20, 184, 166, 0.5)',
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scaleX: [0, 1, 0],
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Enhanced AI Processing indicator */}
              <div className="absolute top-8 left-8">
                <motion.div
                  className="flex items-center gap-3 bg-teal-500/10 px-3 py-2 rounded-lg border border-teal-400/30"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-teal-400"
                    style={{
                      boxShadow: '0 0 8px rgba(20, 184, 166, 0.8)',
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-xs text-teal-300 font-mono font-semibold">AI ACTIVE</span>
                </motion.div>
              </div>

              {/* Enhanced code terminal with typing effect */}
              <div className="absolute top-24 left-8 right-8 space-y-3 font-mono text-xs">
                {[
                  { text: '> import ai.neural_network', color: 'text-teal-400/80' },
                  { text: '> model.analyze(content)', color: 'text-emerald-400/80' },
                  { text: '> generate.response()', color: 'text-cyan-400/80' },
                  { text: '✓ Processing complete', color: 'text-teal-300/70' },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    className={`${line.color} flex items-center gap-2`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: [0, 1, 1], x: 0 }}
                    transition={{
                      delay: 1.5 + i * 0.4,
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  >
                    <motion.span
                      animate={{
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: 1.5 + i * 0.4,
                      }}
                    >
                      {line.text}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="absolute bottom-12 left-8 right-8 space-y-2">
                {['Neural Processing', 'Data Analysis'].map((label, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] text-teal-300/60 font-mono">{label}</div>
                    <div className="h-1 bg-teal-950/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
                        style={{
                          boxShadow: '0 0 8px rgba(20, 184, 166, 0.6)',
                        }}
                        animate={{
                          width: ['0%', '100%', '0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced orbiting data nodes with connections */}
          {[...Array(12)].map((_, i) => {
            const orbitRadius = 210 + (i % 3) * 20;
            
            return (
              <motion.div
                key={`node-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: `${8 + (i % 3) * 2}px`,
                  height: `${8 + (i % 3) * 2}px`,
                  background: i % 2 === 0 
                    ? 'radial-gradient(circle, #14B8A6, #06B6D4)' 
                    : 'radial-gradient(circle, #10B981, #14B8A6)',
                  boxShadow: `0 0 ${15 + (i % 3) * 5}px rgba(20, 184, 166, 0.9)`,
                }}
                animate={{
                  x: [
                    Math.cos((i * 30) * Math.PI / 180) * orbitRadius,
                    Math.cos(((i * 30) + 360) * Math.PI / 180) * orbitRadius,
                  ],
                  y: [
                    Math.sin((i * 30) * Math.PI / 180) * orbitRadius,
                    Math.sin(((i * 30) + 360) * Math.PI / 180) * orbitRadius,
                  ],
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  x: { duration: 8 + (i % 3), repeat: Infinity, ease: "linear" },
                  y: { duration: 8 + (i % 3), repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: i * 0.15 },
                  opacity: { duration: 2, repeat: Infinity, delay: i * 0.15 },
                }}
              />
            );
          })}

          {/* Enhanced digital particles with trails */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`pixel-${i}`}
              className="absolute"
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 50}%`,
              }}
            >
              <motion.div
                className="rounded-full"
                style={{
                  width: `${3 + Math.random() * 3}px`,
                  height: `${3 + Math.random() * 3}px`,
                  background: i % 3 === 0 ? '#14B8A6' : i % 3 === 1 ? '#10B981' : '#06B6D4',
                  boxShadow: `0 0 ${8 + Math.random() * 4}px ${i % 3 === 0 ? '#14B8A6' : i % 3 === 1 ? '#10B981' : '#06B6D4'}`,
                }}
                animate={{
                  y: [0, -60 - Math.random() * 40, 0],
                  x: [0, (Math.random() - 0.5) * 30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}

          {/* Rotating circuit rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: '450px',
              height: '450px',
              border: '1px solid rgba(20, 184, 166, 0.15)',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Circuit nodes on ring */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`circuit-${i}`}
                className="absolute w-2 h-2 rounded-full bg-teal-400"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-4px',
                  marginTop: '-4px',
                  transform: `rotate(${i * 45}deg) translateY(-225px)`,
                  boxShadow: '0 0 10px rgba(20, 184, 166, 0.8)',
                }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: '350px',
              height: '350px',
              border: '1px dashed rgba(16, 185, 129, 0.2)',
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        {/* Decorative line above scroll text */}
        <motion.div
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span className="text-xs text-teal-400/60 uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FiArrowDown className="text-teal-400/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
