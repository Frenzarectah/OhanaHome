/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'verona': "url('/src/assets/verona.png')"
      }
      },
  plugins: [],
}
}
