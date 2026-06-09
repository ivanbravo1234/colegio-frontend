/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "#fbc02d",
        "on-surface": "#1b1b1c",
        "surface": "#fcf9f8",
        "surface-container-low": "#f6f3f2",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#4f4633",
        "outline-variant": "#d3c5ad",
        "on-primary": "#ffffff",
        "primary": "#795900",
        // Agrego solo los que usa el diseño principal para simplificar, pero puedes poner todos los que te di antes
      },
      fontFamily: {
        display: ['Public Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}