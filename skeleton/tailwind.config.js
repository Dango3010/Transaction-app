const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "nav-gray": "#D9D9D9",
      "mid-gray": "#C6C5B9",
      "side-white": "#FDFDFF",
      transparent: "transparent",
      current: "currentColor",
      "nav-gray": "#D9D9D9",
      "side-white": "#FDFDFF",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      turquoise: "#52A1A3",
      red: "#DC244B",
    },
  },

  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
      });
    },
  ],
};
