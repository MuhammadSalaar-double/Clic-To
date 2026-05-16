import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          light: "rgba(255,255,255,0.6)",
          medium: "rgba(255,255,255,0.8)",
          dark: "rgba(0,0,0,0.05)",
        },
        neon: {
          pink: "#ff2d95",
          blue: "#1ae2ff",
          purple: "#a855f7",
          green: "#39ff14",
        },
        luxury: {
          gold: "#d4af37",
          cream: "#fdfbf7",
          charcoal: "#2e2e2e",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
