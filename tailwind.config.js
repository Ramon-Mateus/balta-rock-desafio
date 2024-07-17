/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo-balta': 'rgba(134, 37, 210, 1)',
        'cinza-navbar-l': 'rgba(231, 232, 228, 1)'
      },
    },
  },
  plugins: [],
}
