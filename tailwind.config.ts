import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#e2e8f0",
        accent: "#3182ce",
      },
      height: {
        "70vh": "70vh",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "slide-left": "slide-left 20s linear infinite",
        zoom: "zoom 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;