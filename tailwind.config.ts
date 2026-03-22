import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          50: "#f7f6f3",
          100: "#ede9e0",
          200: "#d9d1c0",
          300: "#bfb198",
          400: "#a08e6c",
          500: "#8a7554",
          600: "#725f43",
          700: "#5c4a34",
          800: "#4c3d2c",
          900: "#413427",
          950: "#231c14",
        },
        sage: {
          50: "#f3f7f3",
          100: "#e2ece2",
          200: "#c5d9c6",
          300: "#9bbf9d",
          400: "#6a9e6d",
          500: "#488050",
          600: "#37663f",
          700: "#2d5233",
          800: "#274230",
          900: "#22372a",
          950: "#0f1f16",
        },
        cream: "#faf8f3",
        parchment: "#f0ead6",
      },
    },
  },
  plugins: [],
};

export default config;
