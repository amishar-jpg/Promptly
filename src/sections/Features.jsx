import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import ScrollReveal from '../components/ScrollReveal';
import { features } from '../data/content';

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20"
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
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full opacity-20"
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
              What <span className="gradient-text">Promptly</span> Can Do
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to supercharge your content creation workflow
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
