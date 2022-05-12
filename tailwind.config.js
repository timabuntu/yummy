module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss')('./src/tailwind.config.js'),
    require('autoprefixer'),
  ],
};
