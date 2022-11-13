/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#201A2E",

          "base-100": "#F0F3F4",

          info: "#90BFF9",

          success: "#269C59",

          warning: "#995606",

          error: "#FC6975",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
