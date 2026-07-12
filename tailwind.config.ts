import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#635cff",
          600: "#5249f0",
          700: "#463cdb",
          50: "#eef0ff",
          100: "#e3e4fe",
        },
        teal: {
          DEFAULT: "#15b89f",
          50: "#e3f7f2",
        },
        ink: "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
