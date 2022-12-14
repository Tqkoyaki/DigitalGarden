/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      jet: "#343030",
      "dark-jet": "#262222",
      "gruv-dark": "#1D2021",
      cream: "#FFD6C0",
      blue: "#4D8189",
      red: "#9F6358",
      green: "#6A7E6F",
      pink: "#CDB0CA",
      black: "#000000",
    },
    extend: {
      dropShadow: {
        dS: "20px 20px 4px rgba(0, 0, 0, 0.4)",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "790px" },
      sm: { max: "639px" },
      xs: { max: "440px" },
      "xs-min": { min: "441px" },
    },
  },
  plugins: [],
};
