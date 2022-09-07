/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'min': '0px', 'max': '600px' },
      'sm': { 'min': '600px', 'max': '900px' },
      'md': { 'min': '900px' },
    }
  },
  plugins: [],
}
