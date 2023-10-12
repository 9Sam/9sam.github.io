import About from "../components/About";
import code from "/icons/code-svgrepo-com 1.svg";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ContactIcons from "../components/features/ContactIcons";
import ProjectsMain from "../components/ProjectsMain";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
   useEffect(() => {
      AOS.init({ once: false, duration: 1200 });
   }, []);

   useEffect(() => {
      const leftTriangle = document.getElementById("left-triangle");
      const rightTriangle = document.getElementById("right-triangle");

      var lastScrollTop = 0;

      const handleScroll = () => {
         var st = window.scrollY || document.documentElement.scrollTop;
         if (st > lastScrollTop) {
            leftTriangle?.classList.remove("animate__delay-1s");
            rightTriangle?.classList.remove("animate__delay-1s");
            leftTriangle?.classList.add("animate__fadeOutLeft");
            rightTriangle?.classList.add("animate__fadeOutRight");
         } else {
            leftTriangle?.classList.remove("animate__fadeOutLeft");
            rightTriangle?.classList.remove("animate__fadeOutRight");
         }
         lastScrollTop = st <= 0 ? 0 : st;
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className="text-dark bg-white dark:bg-dark dark:text-white">
         <header
            className="flex h-screen max-h-screen w-screen relative p-5 md:p-20"
            data-section
            id="home"
         >
            {/* Bottom */}
            <div className="left-triangle animation absolute bottom-[-18px] md:bottom-[-35px] left-0">
               <img
                  className="animate__animated animate__fadeInLeft animate__delay-1s w-40 h-40 md:w-80 md:h-80"
                  id="left-triangle"
                  src="/icons/Triangle-left.svg"
                  alt=""
               />
            </div>
            <section
               className="flex relative w-full justify-center"
               data-section
               id="home"
            >
               <div className="flex flex-row">
                  <div className="w-100 animate__animated animate__rotateIn">
                     <img
                        className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72"
                        src={code}
                        alt=""
                     />
                  </div>
                  <div className="animate__animated animate__fadeIn animate__delay-1s my-auto ml-6 md:ml-10 space-y-2">
                     <h2 className="text-light text-xl md:text-4xl fs-1 fs-sm-3">
                        Hi there!, my name is
                        <span className="text-secondary">
                           {" "}
                           Samuel Casco{" "}
                        </span>{" "}
                        and I am a Full-Stack web developer
                     </h2>
                     <ContactIcons />
                  </div>
               </div>
            </section>
            {/* Top */}
            <div className="right-triangle animation absolute top-[-38px] md:top-5 right-0">
               <img
                  className={`animate__animated animate__fadeInRight animate__delay-1s w-40 h-80 md:w-80 md:h-80`}
                  id="right-triangle"
                  src="/icons/Triangle.svg"
                  alt=""
               />
            </div>
         </header>
         <Skills />
         <ProjectsMain />
         <About />
         <Contact />
      </div>
   );
}

export default Home;
