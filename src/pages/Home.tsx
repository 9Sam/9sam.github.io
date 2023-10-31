import { useEffect } from "react";
import AOS from "aos";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import ProjectsMain from "../components/sections/ProjectsMain";
import HomeSection from "../components/sections/homeSection/HomeSection";
import Experience from "../components/sections/Experience";
import "aos/dist/aos.css";
import tailwindConfig from "tailwind-config";

function Home() {
   useEffect(() => {
      AOS.init({ once: false, duration: 1200 });
      console.log(tailwindConfig);
   }, []);

   useEffect(() => {
      const leftTriangle = document.getElementById("left-triangle");
      const rightTriangle = document.getElementById("right-triangle");

      let lastScrollTop = 0;

      const handleScroll = () => {
         let st = window.scrollY || document.documentElement.scrollTop;
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
      <div className="">
         <HomeSection />
         <Experience />
         <Skills />
         <ProjectsMain />
         <About />
         <Contact />
      </div>
   );
}

export default Home;
