/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgb(252 193 87)",
        secondary: "#f68200",
        grayDark: "#292D32",
        grayLight: "#E7ECF3",
      },
    },
  },
  plugins: [],
};
