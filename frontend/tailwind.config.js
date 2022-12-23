/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#181D31'
      },
      padding: {
        '26': '6.2rem'
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      height: {
        '100': '28rem',
        '104': '32rem',
        '105': '33.8rem',
        '106': '34rem',
        '107': '34.5rem',
        '108': '38rem',
        '110': '40rem',
      }
    }
  },
  plugins: []
}