/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Arima: ["Arima", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
};
