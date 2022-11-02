/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      screens: {
        max1550: { max: "1550px" },
      },
    },
  },
  plugins: [],
};
