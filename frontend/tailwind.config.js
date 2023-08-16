/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "#FAFAFA",
        "almost-black": "#242422",
        "blue-bg": "#3381C6",
        "blue-button": "#0062B9",
      },
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
