/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
   darkMode: "class",
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         'dark': '#030312',
         'darken-gray': '#ffff',
         'light-gray': '#E3E2E2',
         'white': '#ffffff',
         'primary': '#20FFA2',
         'secondary': '#25B6D2',
         'success': '#A1FF72',
         'warning': '#FFF25B',
         'danger': '#FF5B5B'
      },
      extend: {},
   },
   plugins: [],
};
