/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      white: "white",
      "dark-blue": "#2C3755",
      "background-blue": "#A2CBEA",
      "medium-blue": "#4B567D",
      "light-blue": "#BAE1FE",
      "text-primary": "#323232",
      "text-secondary": "#706F6F",
      "light-gray": "#F3F3F3",
      whatsapp: "#25D366",
    },
    extend: {},
  },
  plugins: [],
};
