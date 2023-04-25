/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    },
    extend: {
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
      },
      colors: {
        main: '#265399',
        second: '#FF9F1C',
        lightgray: '#E6E6E6',
        backgroundwhite: '#FBF9F6',
        darkblue: '#102835',
      },
    },
  },
  plugins: [],
};
