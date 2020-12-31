module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'display': ['brandon-grotesque', 'sans-serif' ],
        'body': ['open-sans', 'sans-serif'],
      },
      colors: {
        primary: '#5CDB95',
        secondary: '#05386B',
        third: '#379683'
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}