/** @type {import('tailwindcss').Config} */
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
      }
    }
  },
  plugins: [],
}