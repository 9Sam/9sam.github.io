import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
   SiReact,
   SiAngular,
   SiBootstrap,
   SiExpress,
   SiNodedotjs,
   SiHtml5,
   SiTypescript,
   SiJava,
} from "react-icons/si";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { useDarkMode } from "../../context/DarkModeContext";

const iconClasses = "w-12 md:w-20 h-12 md:h-20 mx-auto align-middle";
const iconTextClasses =
   "dark:text-white text-sm md:text-base text-center pt-2 opacity-40";

function SplideTech() {
   const { isDarkMode } = useDarkMode();

   const slideOptions: any = {
      perPage: 3,
      type: "loop",
      focus: "center",
      rewind: false,
      autoplay: true,
      interval: 5000,
      width: 800,
   };

   const slides = [
      {
         id: "siangular",
         href: "https://angular.io/",
         icon: (
            <SiAngular className={`${iconClasses}`} style={{ color: "red" }} />
         ),
         text: "Angular",
      },
      {
         href: "https://es.reactjs.org",
         icon: (
            <SiReact
               className={`${iconClasses}`}
               style={{ color: "#00D8FF" }}
            />
         ),
         text: "React",
      },
      {
         href: "https://getbootstrap.com/docs/5.2",
         icon: (
            <SiBootstrap
               className={`${iconClasses}`}
               style={{ color: "#8300FF" }}
            />
         ),
         text: "Bootstrap",
      },
      {
         href: "https://expressjs.com",
         icon: (
            <SiExpress
               className={`${iconClasses}`}
               style={{ color: "#9A9A9A" }}
            />
         ),
         text: "Express",
      },
      {
         href: "https://nodejs.org",
         icon: (
            <SiNodedotjs
               className={`${iconClasses}`}
               style={{ color: "#8BC500" }}
            />
         ),
         text: "NodeJS",
      },
      {
         href: "https://www.typescriptlang.org",
         icon: (
            <SiTypescript
               className={`${iconClasses}`}
               style={{ color: "#3178C6" }}
            />
         ),
         text: "Typescript",
      },
      {
         href: "https://www.xataka.com/basics/que-html5-que-novedades-ofrece",
         icon: (
            <SiHtml5
               className={`${iconClasses}`}
               style={{ color: "#FF4C1E" }}
            />
         ),
         text: "HTML5",
      },
      {
         href: "https://www.java.com/",
         icon: <SiJava className={`${iconClasses}`} style={{ color: "red" }} />,
         text: "Java",
      },
   ];

   return (
      <div className={`${isDarkMode ? "splide_dark" : "splide_light"}`}>
         <Splide options={slideOptions}>
            {slides.map((slide, index) => (
               <SplideSlide key={index} id={slide.id}>
                  <a href={slide.href} target="_blank">
                     {slide.icon}
                  </a>
                  <p className={iconTextClasses}>{slide.text}</p>
               </SplideSlide>
            ))}
         </Splide>
      </div>
   );
}

export default SplideTech;
