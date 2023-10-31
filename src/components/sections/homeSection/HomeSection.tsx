import ContactIcons from "../../features/ContactIcons";
import CodeSvg from "../../../icons/code-svgrepo-com.svg?react";
import TriangleSvgLeft from "../../../icons/Triangle-Left.svg?react";
import TriangleSvgRight from "../../../icons/Triangle-Right.svg?react";
import TextBanner from "./TextBanner";

const img = new Image();
img.src = "/icons/code-svgrepo-com 1.svg";

function HomeSection() {
   return (
      <header
         className="flex h-screen max-h-screen mb-20 w-screen relative md:p-10"
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
               <div className="w-1/3 animate__animated animate__rotateIn my-auto">
                  <CodeSvg className="code__icon w-full h-full md:w-64 md:h-64 lg:w-72 lg:h-72" />
               </div>
               <div className="w-2/3 animate__animated animate__fadeIn animate__delay-1s my-auto ml-6 md:ml-12 space-y-1 md:space-y-3">
                  <TextBanner />
                  <ContactIcons />
               </div>
            </div>
         </section>
         {/* Top */}
         <div className="right-triangle animation absolute top-[40px] md:top-5 right-0">
            <TriangleSvgRight
               className="triangle animate__animated animate__fadeInRight animate__delay-1s w-40 h-40 md:w-80 md:h-80"
               id="right-triangle"
            />
         </div>
      </header>
   );
}

export default HomeSection;
