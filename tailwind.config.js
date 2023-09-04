/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "moderate-violet": "hsl(263, 55%, 52%)",
      "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
      "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
      "light-gray": "hsl(0, 0%, 81%)",
      "light-grayish-blue": "hsl(210, 46%, 95%)",
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
