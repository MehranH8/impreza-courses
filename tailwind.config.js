/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      sans: ["IRANSansX", ...defaultTheme.fontFamily.sans],
      yekan: ["IRANYekanX", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      "mainblue": "#646cfd",
      "darkcontainer":"rgba(15,19,31,0.45)",
      "darkcontainer2xl":"rgba(15,19,31,0.65)",
    },
    extend: {},
  },
  plugins: [],
})

