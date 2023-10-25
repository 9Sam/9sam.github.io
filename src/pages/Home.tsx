import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectsMain from "../components/ProjectsMain";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeSection from "../components/HomeSection";
import Expirience from "../components/Experience";

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
         <HomeSection />
         <Expirience />
         <Skills />
         <div className="w-full bg-white">
            <ProjectsMain />
         </div>
         <About />
         <Contact />
      </div>
   );
}

export default Home;
