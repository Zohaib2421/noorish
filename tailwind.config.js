/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:
      {
        'outfit': ['Outfit']
      },
      colors: 
      {
        noorishGreen: '#19251C',
        almostWhite: '#FFFBEB',
      }
    },
  },
  plugins: [],
}

