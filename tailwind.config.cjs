const { readBuilderProgram } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warrior: "#C69B6D",
        warlock: "#8788EE",
        monk: "#00FF98",
      },
    },
  },
  plugins: [],
};
