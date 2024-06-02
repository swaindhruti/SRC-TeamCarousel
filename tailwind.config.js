/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern_1': "url('/src/assets/TeamCard/faceImage_1.png')",
        'hero-pattern_2': "url('/src/assets/TeamCard/faceImage_2.png')",
        'hero-pattern_3': "url('/src/assets/TeamCard/faceImage_3.png')",
        'hero-pattern_4': "url('/src/assets/TeamCard/faceImage_4.png')",
        'hero-pattern_5': "url('/src/assets/TeamCard/faceImage_5.png')",
        'hero-pattern_6': "url('/src/assets/TeamCard/faceImage_6.png')",
        'hero-pattern_7': "url('/src/assets/TeamCard/faceImage_7.png')",
        'icon_1' : "url('/src/assets/TeamCard/Logo.png')",
        'icon_2' : "url('/src/assets/TeamCard/Logo-1.png')",
        'icon_3' : "url('/src/assets/TeamCard/Logo-2.png')",
        'icon_4' : "url('/src/assets/TeamCard/Logo-3.png')",
        'icon_5' : "url('/src/assets/TeamCard/Logo-4.png')",
        'icon_6' : "url('/src/assets/TeamCard/Logo-5.png')",
    
      },
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

