/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      phone: "320px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
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
        "primary-opacity": "#FFF3E3",
        grey: "#666666",
        neutral: "#9f9f9f",
        "light-black": "#2D2D2D",
        green: "#AA894D",
        "event-hover": "#C59F4F",
        warning: "red",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-hamburgers")],
};
