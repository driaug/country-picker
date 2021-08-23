module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
