/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], 
      },
      colors: {
        primary: '#4CAF50',
        secondary: '#FF6F61',
        third: '#FFFFFF',
        forth: '#8E7409',
        fifth: '#333333'
      },
    },
  },
  plugins: [],
}

