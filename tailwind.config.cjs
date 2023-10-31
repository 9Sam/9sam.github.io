/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            transparent: "transparent",
            dark: "var(--color-dark)",
            "light-gray": "var(--color-light-gray)",
            white: "var(--color-white)",
            "d-primary": "var(--color-primary-dark)",
            "l-primary": 'var(--color-primary-light)',
            "d-secondary": "var(--color-secondary-dark)",
            "l-secondary": "var(--color-secondary-light)",
            warning: "var(--color-warning)",
            danger: "var(--color-danger)",
         },
      },
   },
   plugins: [],
};
