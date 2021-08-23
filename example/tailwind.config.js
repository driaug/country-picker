module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
