/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            transparent: "transparent",
            current: "currentColor",
            dark: "#030312",
            "darken-gray": "#ffff",
            "light-gray": "#E3E2E2",
            white: "#ffffff",
            "d-primary": "#20FFA2",
            primary: "#20FFA2",
            "d-secondary": "#25B6D2",
            secondary: "#25B6D2",
            "d-tertiary": "#25B6D2",
            tertiary: "#25B6D2",
            success: "#A1FF72",
            warning: "#FFF25B",
            danger: "#FF5B5B",
         },
      },
   },
   plugins: [],
};
