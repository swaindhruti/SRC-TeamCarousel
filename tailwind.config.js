/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'max': '241px',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        customShadow: '6px 5px 0px 0px rgba(64, 46, 50, 1)',
      },
      colors: {
        brown: {
          1: "#E7E7E7",
          2: "#FFEEDA",
          3: "#A59480",
          4: "#402E32",
          5: "#1D1D1D",
        },
        black: {
          1: "#151515",
          2: "#1d1d1d",
        },
      },
    },
  },
  plugins: [],
}

