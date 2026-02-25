import { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "../components/src/**/*.{jsx,tsx}",
    "./docs/**/*.{jsx,tsx,mdx}",
    "./theme/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
