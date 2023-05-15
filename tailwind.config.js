/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    typography: require('./typography')
  },
  plugins: [require('@tailwindcss/typography')]
};
