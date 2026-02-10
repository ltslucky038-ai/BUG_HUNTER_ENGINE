/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hamare project ke liye custom neon aur dark colors
        brand: {
          dark: "#0f172a",
          card: "#1e293b",
          accent: "#2563eb",
          danger: "#ef4444"
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}