module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff7e63',
          DEFAULT: '#e53e3e',
          dark: '#c53030',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}