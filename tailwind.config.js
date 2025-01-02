/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta las rutas según tu proyecto
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1F2937',
        accent: '#eb4f47',
      },
      backgroundColor: {
        primary: '#000000',
        secondary: '#1F2937',
      }
    },
  },
  plugins: [],
};