/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      gray: {
        light: 'rgb(241, 243, 247)',
        dark: '#282c34'
      },
      cyan: '#00ffff',
      orange: 'rgb(255, 125, 20)'
    },
    extend: {}
  },
  plugins: []
}
