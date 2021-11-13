const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      light: '#FFFFFF',
      dark: '#2d3136',
      primary: '#1d9bf0',
      transparent: 'rgba(1,1,1,0)',
      gray: {
        ...colors.gray,
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#f7f9f9',
        lightest: '#f9fafc',
      }
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [
  ],
}
