/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6d9fce",

          secondary: "#4c21ce",

          accent: "#2f1284",

          neutral: "#292438",

          "base-100": "#312F37",

          info: "#2E4DD6",

          success: "#1BBB9B",

          warning: "#947505",

          error: "#E6516C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
