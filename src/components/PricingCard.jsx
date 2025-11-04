import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ plan, isYearly }) => {
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  const period = isYearly ? 'year' : 'month';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -12, scale: plan.popular ? 1.02 : 1 }}
      className={`group relative p-8 rounded-2xl ${
        plan.popular ? 'scale-105' : ''
      }`}
      style={{
        background: plan.popular
          ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        border: plan.popular ? '2px solid rgba(20, 184, 166, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: plan.popular
          ? '0 8px 32px rgba(20, 184, 166, 0.3)'
          : '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Animated gradient border effect on hover */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: plan.popular
            ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(16, 185, 129, 0.3))'
            : 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.2))',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Glow effect for popular plan */}
      {plan.popular && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-50 blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Corner brackets decoration */}
      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-teal-400/50 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-emerald-400/50 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-emerald-400/50 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-teal-400/50 rounded-br-lg" />

      {plan.popular && (
        <motion.div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span 
            className="px-6 py-2 rounded-full text-sm font-semibold text-white relative overflow-hidden inline-block"
            style={{
              background: 'linear-gradient(90deg, #14B8A6 0%, #10B981 50%, #14B8A6 100%)',
              backgroundSize: '200% 100%',
              boxShadow: '0 0 20px rgba(20, 184, 166, 0.6)',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Most Popular
          </motion.span>
        </motion.div>
      )}

      <div className="text-center mb-6 relative z-10">
        <h3 className="text-2xl font-poppins font-bold mb-2 text-white">{plan.name}</h3>
        <p className="text-gray-400 text-sm">{plan.description}</p>
      </div>

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

      <div className="text-center mb-8 relative z-10">
        <motion.div 
          className="flex items-baseline justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-5xl font-poppins font-bold gradient-text">
            ${price}
          </span>
          <span className="text-gray-400 ml-2 text-lg">/{period}</span>
        </motion.div>
        {isYearly && (
          <motion.p 
            className="text-emerald-400 text-sm mt-2 font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            💰 Save ${plan.price.monthly * 12 - plan.price.yearly}/year
          </motion.p>
        )}
      </div>

      <ul className="space-y-4 mb-8 relative z-10">
        {plan.features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 mt-0.5"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center border border-teal-400/30">
                <FiCheck className="text-teal-400 text-sm" />
              </div>
            </motion.div>
            <span className="text-gray-300 ml-3">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-full py-4 rounded-full font-semibold text-lg overflow-hidden z-10 ${
          plan.popular ? 'text-white' : 'text-white'
        }`}
        style={
          plan.popular
            ? {
                background: 'linear-gradient(90deg, #14B8A6 0%, #10B981 50%, #14B8A6 100%)',
                backgroundSize: '200% 100%',
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)',
              }
            : {
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
              }
        }
      >
        {plan.popular && (
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: 'linear-gradient(90deg, #14B8A6 0%, #10B981 50%, #14B8A6 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        )}
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: 'inset 0 0 20px rgba(20, 184, 166, 0.3)',
          }}
        />
        
        <span className="relative z-10">Get Started</span>
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;
