import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import ScrollReveal from '../components/ScrollReveal';
import { pricingPlans } from '../data/content';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

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
              Simple & <span className="gradient-text">Transparent</span> Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your content creation needs
            </p>

            {/* Toggle Switch with Enhanced Styling */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-lg transition-all duration-300 ${!isYearly ? 'text-white font-semibold scale-110' : 'text-gray-400'}`}>
                Monthly
              </span>
              <motion.button
                onClick={() => setIsYearly(!isYearly)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  isYearly ? 'bg-gradient-to-r from-teal-500 to-emerald-500' : 'bg-gray-600'
                }`}
                style={
                  isYearly
                    ? {
                        boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)',
                      }
                    : {}
                }
              >
                <motion.div
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                />
              </motion.button>
              <span className={`text-lg transition-all duration-300 ${isYearly ? 'text-white font-semibold scale-110' : 'text-gray-400'}`}>
                Yearly
                <motion.span 
                  className="ml-2 text-sm gradient-text font-bold"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Save 20%
                </motion.span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal 
              key={plan.id}
              direction="up"
              delay={index * 0.15}
              duration={0.6}
            >
              <PricingCard plan={plan} isYearly={isYearly} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
