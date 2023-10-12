export const getTsConfig = (darkMode: boolean): any => {
   return {
      background: {
         color: {
            value: darkMode ? "#030312" : "#ffffff",
         },
      },
      fpsLimit: 120,
      interactivity: {
         events: {
            onClick: {
               enable: false,
               mode: "push",
            },
            onHover: {
               enable: true,
               mode: "repulse",
            },
            resize: true,
         },
         modes: {
            push: {
               quantity: 4,
            },
            repulse: {
               distance: 50,
               duration: 0.4,
            },
         },
      },
      particles: {
         color: {
            value: "#A1A1A1",
         },
         links: {
            color: "#A1A1A1",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
         },
         move: {
            direction: "none",
            enable: true,
            outModes: {
               default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
         },
         number: {
            density: {
               enable: true,
               area: 1000,
            },
            value: 80,
         },
         opacity: {
            value: 0.3,
         },
         shape: {
            type: "circle",
         },
         size: {
            value: { min: 1, max: 3 },
         },
      },
      detectRetina: true,
   };
};
