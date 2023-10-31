import ContactIcons from "../features/ContactIcons";
import CodeSvg from "../../icons/code-svgrepo-com.svg?react";
import TriangleSvgLeft from "../../icons/Triangle-Left.svg?react";
import TriangleSvgRight from "../../icons/Triangle-Right.svg?react";
import { useDarkMode } from "../../context/DarkModeContext";

const img = new Image();
img.src = "/icons/code-svgrepo-com 1.svg";

function HomeSection() {
   const { isDarkMode } = useDarkMode();

   return (
      <header
         className="flex h-screen max-h-screen mb-20 w-screen relative p-5 md:p-20"
         data-section
         id="home"
      >
         {/* Bottom */}
         <div className="left-triangle animation absolute bottom-[-18px] md:bottom-[-35px] left-0">
            <TriangleSvgLeft
               className="triangle animate__animated animate__fadeInLeft animate__delay-1s w-40 h-40 md:w-80 md:h-80"
               id="left-triangle"
            />
         </div>
         <section
            className="flex relative my-auto w-full justify-center"
            data-section
            id="home"
         >
            <div className="flex flex-row">
               <div className="w-100 animate__animated animate__rotateIn">
                  <CodeSvg className="code__icon w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72" />
               </div>
               <div className="animate__animated animate__fadeIn animate__delay-1s my-auto ml-6 md:ml-10 space-y-2">
                  <div className="flex flex-col gap-y-4">
                     <h2 className="text-light text-xl md:text-6xl fs-1 fs-sm-3">
                        Samuel Casco
                     </h2>
                     <h2 className="md:text-5xl text-gray-500 dark:text-gray-400">
                        Full-Stack web developer
                     </h2>
                  </div>
                  <ContactIcons />
               </div>
            </div>
         </section>
         {/* Top */}
         <div className="right-triangle animation absolute top-[-38px] md:top-5 right-0">
            <TriangleSvgRight
               className="triangle animate__animated animate__fadeInRight animate__delay-1s w-40 h-40 md:w-80 md:h-80"
               id="right-triangle"
            />
         </div>
      </header>
   );
}

export default HomeSection;
