/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:
      {
        'outfit': ['Outfit'],
        'outfit-bold': ['Outfit-Bold']
      },
      fontWeight:
      {
        'medium': 400,
        'semibold': 600,
        'bold': 700,
        'extra-bold': 800
      },
      colors: 
      {
        noorishGreen: '#19251C',
        almostWhite: '#FFFBEB',
        buttonTextColor: '#73592F'
      }
    },
  },
  plugins: [],
}

