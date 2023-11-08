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
         className="relative mb-20 flex h-screen max-h-screen w-screen md:p-10 z-30"
         data-section
         id="home"
      >
         {/* Bottom */}
         <div className="left-triangle animation absolute bottom-[-18px] left-0 md:bottom-[-35px]">
            <TriangleSvgLeft
               className="triangle animate__animated animate__fadeInLeft animate__delay-1s h-40 w-40 md:h-80 md:w-80"
               id="left-triangle"
            />
         </div>
         <section
            className="relative my-auto flex w-full md:justify-center"
            data-section
            id="home"
         >
            <div className="flex flex-row mx-auto">
               <div className="animate__animated animate__rotateIn my-auto w-[120px] pl-2 md:w-1/3">
                  <CodeSvg className="code__icon h-full w-full mr-4 md:mr-28 md:h-64 md:w-64 lg:h-72 lg:w-72" />
               </div>
               <div className="animate__animated animate__fadeIn animate__delay-1s my-auto ml-6 w-2/3 space-y-1 md:ml-12 md:space-y-3">
                  <TextBanner />
                  <ContactIcons />
               </div>
            </div>
         </section>
         {/* Top */}
         <div className="right-triangle animation absolute top-[40px] right-0 md:top-5">
            <TriangleSvgRight
               className="triangle animate__animated animate__fadeInRight animate__delay-1s h-40 w-40 md:h-80 md:w-80"
               id="right-triangle"
            />
         </div>
      </header>
   );
}

export default HomeSection;
