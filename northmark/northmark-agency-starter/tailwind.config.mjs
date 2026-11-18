/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#202B2A",
        navy: "#33423E",
        muted: "#65716C",
        paper: "#F6F5F1",
        line: "#E4E3DC",
        accent: "#A64F38"
      },
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["DM Serif Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 28, 43, .08)"
      }
    }
  },
  plugins: []
};