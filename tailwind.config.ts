import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matur: {
          primary: "#1E4E7A",
          primaryLight: "#3B82B1",
          accent: "#FF6B6B",
          bg: "#EAF4FF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        maturblue: {
          primary: "#1E4E7A",
          secondary: "#3B82B1",
          accent: "#FF6B6B",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#2563eb",
          success: "#059669",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
    ],
  },
} as const;


