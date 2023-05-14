/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'en':['Public Sans'],
        'cn':['Mi Sans'],
      },
      fontWeight: {
      },
      colors: {
        'dark': '#161616',
        'light': '#EDEDED',
        'active': '#B3B3B3',
        'red': '#ED1E24',
      },
    },
  },
  plugins: [],
}

