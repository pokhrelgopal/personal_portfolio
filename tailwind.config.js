/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#222222",
      light: "#ffffff",
      green: "#9ccd62",
      blue: "#007CED",
      darkGray: "#333333",
      gray: "#666666",
      lightGray: "#999999",
      button: "#333333",
    },
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
