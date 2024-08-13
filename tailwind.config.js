/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#000",
        secondaryColor: "red",
        thirdColor: "#FFF"
      },

      fontFamily: {
        primaryFont: "Poppins"
      }
    },
  },
  plugins: [],
}

