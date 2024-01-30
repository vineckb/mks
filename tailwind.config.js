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
      "dark-blue": "#3F374A",
      "background-blue": "#C5C3E0",
      "medium-blue": "#817D8E",
      "light-blue": "#DBD2EF",
      "text-primary": "#323232",
      "text-secondary": "#706F6F",
      "light-gray": "#F3F3F3",
      whatsapp: "#25D366",
    },
    extend: {},
  },
  plugins: [],
};
