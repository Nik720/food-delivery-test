const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "c-heading": "#2B2B43",
        "c-sub-text": "#545563",
        "c-blue": "#697BFF"
      }
    },
  },
  plugins: [],
}
