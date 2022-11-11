/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 960px) { ... }

      'lg': '1220px',
      // => @media (min-width: 1220px) { ... }

      'xl': '1310px',
      // => @media (min-width: 1310px) { ... }
    },
  },
  plugins: [],
}
