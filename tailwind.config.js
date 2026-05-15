/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d5a27",
        secondary: "#d4a373",
        accent: "#bc6c25",
        "bg-light": "#fefae0",
        "text-dark": "#1a2a1a",
        "text-muted": "#606c38",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        premium: "0 10px 30px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
