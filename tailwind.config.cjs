/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#00BFA6',
          purple: '#6C63FF',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'particle-float': 'particle-float 15s ease-in-out infinite',
        'cube-rotate': 'cube-rotate 30s linear infinite',
        'sphere-pulse': 'sphere-pulse 4s ease-in-out infinite',
        'border-spin': 'border-spin 8s linear infinite',
        'breathing-glow': 'breathing-glow 3s ease-in-out infinite',
        'avatar-pop': 'avatar-pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'badge-shimmer': 'badge-shimmer 2s ease-in-out infinite',
        'counter-bounce': 'counter-bounce 2s ease-in-out infinite',
        'check-bounce': 'check-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) translateX(0) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(var(--float-x, 0)) scale(1)', opacity: '0' },
        },
        'cube-rotate': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        'sphere-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'breathing-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 191, 166, 0.4), 0 0 40px rgba(108, 99, 255, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 191, 166, 0.8), 0 0 80px rgba(108, 99, 255, 0.4), 0 0 120px rgba(147, 51, 234, 0.2)' 
          },
        },
        'avatar-pop': {
          '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
          '60%': { transform: 'scale(1.2) rotate(10deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'badge-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'counter-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'check-bounce': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.2) rotate(5deg)' },
          '75%': { transform: 'scale(0.9) rotate(-5deg)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
