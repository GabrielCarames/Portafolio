/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#002a87",
        "light-violet": "#9340ff"
      }
    },
  },
  plugins: [],
}

  // linear-gradient(-135deg,#002a87 25%,#9340ff 100%)