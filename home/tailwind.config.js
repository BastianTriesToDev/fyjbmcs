/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
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
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
