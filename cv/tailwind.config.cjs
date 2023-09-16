const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "sharp-yellow": "#FFFB63"
      },
      fontFamily: {
        "serif": ["Merriweather", ...defaultTheme.fontFamily.serif],
        "sans": ["Helvetica", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
