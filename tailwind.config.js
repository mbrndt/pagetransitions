/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        latoLight: "LatoLight",
        latoBold: "LatoBold",
        latoReg: "LatoRegular",
      },
    },
  },
  plugins: [],
};
