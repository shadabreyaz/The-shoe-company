/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media840':'842px',
        'media460':'454px'
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open", ".open&");
    })
  ],
}

