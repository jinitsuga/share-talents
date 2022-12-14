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
        shaman: "#0070DD",
        rogue: "#FFF468",
        priest: "#FFFFFF",
        paladin: "#F48CBA",
        mage: "#3FC7EB",
        hunter: "#AAD372",
        evoker: "#33937F",
        druid: "#FF7C0A",
        dh: "#A330C9",
        dk: "#C41E3A",
        modalBg: "rgba(0, 0, 0, 0.8)",
      },
      width: {
        classContainer: "600px",
        classContainerSmall: "450px",
        phoneSize: "375px",
      },
      height: {
        sideHeight: "750px",
      },
      scale: {
        115: "1.15",
      },
    },
  },
  plugins: [],
};
