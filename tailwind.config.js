/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tauste-red': '#C8102E',
        'tauste-red-dark': '#A00D24',
        'tektron-dark': '#0A0A0A',
        'tektron-surface': '#141414',
        'tektron-card': '#1A1A1A',
        'tektron-border': '#2A2A2A',
        'gray-warm': '#9CA3AF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
