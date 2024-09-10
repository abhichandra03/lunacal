/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundSize: {
        'size-300': '200%',
      },
      backgroundPosition: {
        'pos-0': 'right',
        'pos-100': 'left',
      },
    },
  
  },
  plugins: [],
}