module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#333D51',
        'equator': '#DFC15D',
        'ghost': '#CBD0D8',
        'spring-wood': '#F4F3EA'
      },
    },
    fontFamily: {
      'primary': ['Oswald']
    }
  },
  plugins: [],
}