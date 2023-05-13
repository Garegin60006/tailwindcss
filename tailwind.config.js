/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      colors: {
        primary: 'seagreen',
        miban: {
          100: 'red'
        }
      },
    },
  },
  plugins: [],
}

