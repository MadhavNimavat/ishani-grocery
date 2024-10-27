/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 8px 14px 0px rgba(234, 124, 105, 0.4)",
      },
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        text: {
          dark: "#3B5162",
          gray: "#889898",
          light: "#ABBBC2",
          lighter: "#E0E6E9",
        },
        background: {
          normal: "#FAFAFA",
          form: "#2D303E",
          variantOne: "#252836",
          variantTwo: "#1F1D2B",
        },
        separator: "#393C49",
      },
      fontFamily: {
        display: ["Barlow", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      });
    },
  ],
};
