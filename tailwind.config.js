module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'ocean': '#008080',
      // 2d898b possible new ocean
      // 0f7f96 possible new ocean
      // 006466 original ocean
      'mint': '#BDD4D5',
      // #BDD4D5 original mint
      // e0fafc possible new mint
      'midnight': '#1B3A4B',
      'plum': '#4D194D',
      'silver': '#9999A1',
      'ice': '#E6E6E9',
      'black': '#000',
      'white': '#fff',
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
