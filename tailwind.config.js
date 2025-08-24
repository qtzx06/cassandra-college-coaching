/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-darkest': '#0A2647',
        'brand-dark': '#144272',
        'brand-primary': '#205295',
        'brand-light': '#2C74B3',
      },
      fontFamily: {
        'lora': ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
}
