/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '3': 3,
      },
      screens: {
        'max-sm': { 'max': '400px' }, // Defines max-sm for screens below 640px
      },
    },
  },
  plugins: [],
}