const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        borderSpin: {
          "0%, 25%": { borderWidth: "0px" },
          "25%, 50%": { borderWidth: "2px" },
          "50%, 75%": { borderWidth: "0px" },
          "75%, 100%": { borderWidth: "2px" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        slideInRight: "slideInRight 1s ease-out",
        spinSLow: "spin 50s linear infinite",
        spinMSlow: "spin 15s linear infinite",
        borderSpin: "borderSpin 2s linear infinite",
      },
    },
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
      rubik: ['"Rubik Scribble"', "system-ui"],
      jost: ['"Jost"', "sans-serif"],
    },
  },
  plugins: [],
};
