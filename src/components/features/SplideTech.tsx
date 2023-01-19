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
// import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
// import '@splidejs/react-splide/css/skyblue';
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

const iconClasses = "w-12 md:w-20 h-12 md:h-20 mx-auto align-middle";
const iconTextClasses =
   "dark:text-white text-sm md:text-base text-center pt-2 opacity-40";

function SplideTech() {
   return (
      <div>
         <Splide
            options={{
               perPage: 3,
               type: "loop",
               focus: "center",
               rewind: false,
               autoplay: true,
               interval: 5000,
               width: 800,
               
            }}
         >
            <SplideSlide id="siangular" className="mx-auto">
               <a href="https://angular.io/" target="_blank">
                  <SiAngular
                     className={`${iconClasses}`}
                     style={{ color: "red" }}
                  />
               </a>
               <p className={iconTextClasses}>Angular</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://es.reactjs.org" target="_blank">
                  <SiReact
                     className={`${iconClasses}`}
                     style={{ color: "#00D8FF" }}
                  />
               </a>
               <p className={iconTextClasses}>React</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://getbootstrap.com/docs/5.2" target="_blank">
                  <SiBootstrap
                     className={`${iconClasses}`}
                     style={{ color: "#8300FF" }}
                  />
               </a>
               <p className={iconTextClasses}>Bootstrap</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://expressjs.com" target="_blank">
                  <SiExpress
                     className={`${iconClasses}`}
                     style={{ color: "#9A9A9A" }}
                  />
               </a>
               <p className={iconTextClasses}>Express</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://nodejs.org" target="_blank">
                  <SiNodedotjs
                     className={`${iconClasses}`}
                     style={{ color: "#8BC500" }}
                  />
               </a>
               <p className={iconTextClasses}>NodeJS</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://www.typescriptlang.org" target="_blank">
                  <SiTypescript
                     className={`${iconClasses}`}
                     style={{ color: "#3178C6" }}
                  />
               </a>
               <p className={iconTextClasses}>Typescript</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://www.xataka.com/basics/que-html5-que-novedades-ofrece" target="_blank">
                  <SiHtml5
                     className={`${iconClasses}`}
                     style={{ color: "#FF4C1E" }}
                  />
               </a>
               <p className={iconTextClasses}>HTML5</p>
            </SplideSlide>
            <SplideSlide>
               <a href="https://www.java.com/" target="_blank">
                  <SiJava
                     className={`${iconClasses}`}
                     style={{ color: "red" }}
                  />
               </a>
               <p className={iconTextClasses}>Java</p>
            </SplideSlide>
         </Splide>
      </div>
   );
}

export default SplideTech;
