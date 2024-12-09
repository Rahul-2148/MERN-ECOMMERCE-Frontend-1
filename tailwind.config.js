/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   zoomIn: "zoomIn 1s ease-in-out forwards",
      // },
      // keyframes: {
      //   zoomIn: {
      //     "0%": { transform: "scale(3)", opacity: "0" },
      //     "100%": { transform: "scale(1)", opacity: "1" },
      //   },
      // },
    },
  },
  plugins: [],
}

