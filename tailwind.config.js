/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#22B925",
      },
      fontFamily:{
        "primary":['Inter','sans-serif']
      }
    },
  },
  plugins: [require('daisyui'),],
}

