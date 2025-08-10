/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10B981",
          secondary: "#047857",
          text: "#FFFFFF",
          bg: "#0B1220"
        }
      }
    },
  },
  plugins: [],
}