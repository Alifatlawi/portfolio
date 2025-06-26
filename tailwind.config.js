/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'tilt': 'tilt 10s infinite linear',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInDown': 'fadeInDown 0.6s ease-out',
        'fadeInLeft': 'fadeInLeft 0.6s ease-out',
        'fadeInRight': 'fadeInRight 0.6s ease-out',
        'slideInUp': 'slideInUp 0.8s ease-out',
        'slideInDown': 'slideInDown 0.8s ease-out',
        'zoomIn': 'zoomIn 0.6s ease-out',
        'zoomOut': 'zoomOut 0.6s ease-out',
        'rotateIn': 'rotateIn 0.8s ease-out',
        'flip': 'flip 1s ease-in-out',
        'rubber': 'rubber 1s ease-out',
        'swing': 'swing 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)',
            transform: 'scale(1.05)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translate3d(0, 40px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translate3d(0, -40px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translate3d(-40px, 0, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translate3d(40px, 0, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        slideInUp: {
          'from': { transform: 'translate3d(0, 100%, 0)', visibility: 'visible' },
          'to': { transform: 'translate3d(0, 0, 0)' },
        },
        slideInDown: {
          'from': { transform: 'translate3d(0, -100%, 0)', visibility: 'visible' },
          'to': { transform: 'translate3d(0, 0, 0)' },
        },
        zoomIn: {
          'from': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '50%': { opacity: '1' },
        },
        zoomOut: {
          'from': { opacity: '1' },
          '50%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          'to': { opacity: '0' },
        },
        rotateIn: {
          'from': { transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0' },
          'to': { transformOrigin: 'center', transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        flip: {
          'from': { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)' },
          '40%': { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)' },
          '50%': { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)' },
          '80%': { transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' },
          'to': { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' },
        },
        rubber: {
          'from': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          'to': { transform: 'scale3d(1, 1, 1)' },
        },
        swing: {
          '20%': { transform: 'rotate3d(0, 0, 1, 15deg)' },
          '40%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
          '60%': { transform: 'rotate3d(0, 0, 1, 5deg)' },
          '80%': { transform: 'rotate3d(0, 0, 1, -5deg)' },
          'to': { transform: 'rotate3d(0, 0, 1, 0deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        magnetic: {
          'to': { transform: 'translateY(-2px)' },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 70px -12px rgba(0, 0, 0, 0.25)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.7)',
        'colored': '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
        'colored-lg': '0 35px 60px -12px rgba(59, 130, 246, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
