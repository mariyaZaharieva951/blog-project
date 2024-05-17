/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Inter', 'sans-serif'],
      }
    }, colors: {
      'button-bg': '#150050',
      'white-text': '#FFFFFF',
      'gray-light': '#DCDCDC',
      'gray-bg': '#F4F4F4',
      'gray-dark': '#D9D9D9',
      'gray-darked': '#787878',
      'blue-h': '#2D0896',
      'blue-bg': '#150050',
      'blue-benefit': '#1E0A57',
      'yellow': '#FFE377',
      'black-tx': '#000000',
      'green-tx': '#00CC61',
      'green-bg': '#EBFBF3'
    }
  },
  
  plugins: [],
}

