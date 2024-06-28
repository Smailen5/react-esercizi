/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
      keyframes: {
        slideDown: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "100vh", opacity: "1" },
        },
        slideUp: {
          "0%": { maxHeight: "100vh", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDown 1s forwards",
        slideUp: "slideUp 1s forwards",
      },
    },
  },
  variants: {},
  plugins: [],
};
