/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkColor: '#0E0F12',
        primaryColor: '#68E570',
        redColor: '#DB4931',
        borderWhite: '#dee3ea',
        borderDark:  '#202228',
        grayText: '#848894',
        textThemeWhite: '#0f172a',
      }
    },
    fontFamily: {
      'lato': ['"Lato"', 'sans-serif'],
    },
  },
  plugins: [],
}