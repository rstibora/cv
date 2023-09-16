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
        "sans": ["Helvetica", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
