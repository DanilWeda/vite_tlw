/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["30px", "38px"],
      "2xl": ["38px", "46px"],
      "3xl": ["52px", "58px"],
    },
    extend: {
      colors: {
        "color-black": "#000000",
        primary: "#FFF3E3",
        secondary: "#cc9933",
        grey: "#666666",
      },
    },
  },
  plugins: [],
};
