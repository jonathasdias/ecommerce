/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(180px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [],
}