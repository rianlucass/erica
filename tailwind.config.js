/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'romance': {
          pink: {
            light: '#FF9CC2',
            DEFAULT: '#FF6BA9',
            dark: '#FF3382',
          },
          purple: {
            light: '#C19EF6',
            DEFAULT: '#A172E0',
            dark: '#7B46C9',
          },
          gold: {
            light: '#FFE3AA',
            DEFAULT: '#FFD166',
            dark: '#FFB627',
          },
          black: {
            light: '#4D4D4D',
            DEFAULT: '#333333',
            dark: '#1A1A1A',
          },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'love-gradient': 'linear-gradient(135deg, #FF6BA9 0%, #A172E0 100%)',
      },
    },
  },
  plugins: [],
};