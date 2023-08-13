/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
      },
      colors: {
        'custom-green': '#b5f7c9',
        'custom-light-green': '#E8FFF7',
        'custom-dark-green': '#4fac6b',
      },
      backgroundImage: {
        'pattern': '/src/assets/images/userBg.jpg',
      },
    },
  },
  plugins: [],
}

