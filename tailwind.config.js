module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'ocean': '#006466',
      'midnight': '#1B3A4B',
      'plum': '#4D194D',
      'silver': '#9999A1',
      'ice': '#E6E6E9',
    },
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
