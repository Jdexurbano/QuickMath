/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B3499",
        secondary: "#FF6C22",
        accent: "#FFD099",
      },
    },
  },
  plugins: [],
};
