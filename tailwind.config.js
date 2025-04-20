/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4A373',
          light: '#E9C46A',
          dark: '#BC8A5F',
        },
        secondary: {
          DEFAULT: '#CCD5AE',
          light: '#E3E9C8',
          dark: '#A5AF89',
        },
        background: {
          light: '#FAF8F1',
          dark: '#1A1A1A',
        },
        card: {
          light: '#FFFFFF',
          dark: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};