/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["ClashDisplay-Regular", "sans-serif"],
        "clash-medium": ["ClashDisplay-Medium", "sans-serif"],
        "clash-semibold": ["ClashDisplay-Semibold", "sans-serif"],
        "clash-bold": ["ClashDisplay-Bold", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
