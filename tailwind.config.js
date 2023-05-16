/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#2716a0",
        "blue-2": "#49a4ff",
        "blue-3": "#0074e7",
        "blue-4": "#0080ff",
        "green": "#1abc9c",
        "light-green": "#57e694",
        "light-violet": "#9340ff"
      },
        screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    },
  },
  plugins: [],
}

  // linear-gradient(-135deg,#002a87 25%,#9340ff 100%)