module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: '#FFFFFF',
      dark: '#40434E',
      primary: '#20A39E',
      transparent: 'rgba(1,1,1,0)',
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
