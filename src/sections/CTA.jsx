import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const CTA = () => {
  const subheadingText = "Join thousands of content creators who are already transforming their workflow with AI";

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            y: { duration: 0.8, ease: "easeOut" }
          }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Content */}
          <div className="relative z-10">
            {/* Decorative top line */}
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

            {/* Headline with gradient effect */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-8 leading-tight"
            >
              Start Writing <span className="gradient-text">Smarter</span> Today
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {subheadingText}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              {/* Primary CTA Button with Enhanced Effects */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 rounded-full overflow-hidden text-white font-semibold text-lg"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500"
                  style={{ backgroundSize: '200% 100%' }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 30px rgba(20, 184, 166, 0.8), inset 0 0 20px rgba(20, 184, 166, 0.3)',
                  }}
                />
                
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-teal-400"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <span className="relative z-10">Get Started Free</span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full border-2 border-teal-500/30 text-white font-semibold text-lg hover:border-teal-400 transition-all duration-300"
                style={{
                  background: 'rgba(20, 184, 166, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <span className="relative z-10">Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Badges with Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(20, 184, 166, 0.4)',
                        '0 0 15px rgba(20, 184, 166, 0.6)',
                        '0 0 0px rgba(20, 184, 166, 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✓
                  </motion.div>
                  <span className="text-gray-300">No Credit Card</span>
                </motion.div>

                <div className="w-px h-4 bg-gradient-to-b from-transparent via-teal-400 to-transparent" />

                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(16, 185, 129, 0.4)',
                        '0 0 15px rgba(16, 185, 129, 0.6)',
                        '0 0 0px rgba(16, 185, 129, 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    ✓
                  </motion.div>
                  <span className="text-gray-300">14-Day Free Trial</span>
                </motion.div>

                <div className="w-px h-4 bg-gradient-to-b from-transparent via-emerald-400 to-transparent" />

                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(20, 184, 166, 0.4)',
                        '0 0 15px rgba(20, 184, 166, 0.6)',
                        '0 0 0px rgba(20, 184, 166, 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    ✓
                  </motion.div>
                  <span className="text-gray-300">Cancel Anytime</span>
                </motion.div>
              </div>

              {/* Social Proof Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-6"
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    50K+
                  </motion.div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-teal-400/50 to-transparent" />

                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    1M+
                  </motion.div>
                  <div className="text-sm text-gray-400">Words Generated</div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />

                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                  >
                    4.9★
                  </motion.div>
                  <div className="text-sm text-gray-400">User Rating</div>
                </div>
              </motion.div>

              {/* Decorative bottom line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="h-[2px] w-24 mx-auto mt-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
