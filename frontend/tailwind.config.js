/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-bg": "#3381C6",
        "almost-white": "#FAFAFA",
        "dark-blue": "#0062B9",
        "almost-black": "#242422",
      },
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
