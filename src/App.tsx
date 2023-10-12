import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import { getTsConfig } from "./utils/tsParticlesConfiguration";

function App() {
   const [darkMode, setDarkMode] = useState(true);

   useEffect(() => {
      const storedDarkMode = localStorage.getItem("darkMode");

      if (storedDarkMode !== null) {
         setDarkMode(JSON.parse(storedDarkMode));
      }
   }, []);

   const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
   }, []);

   const particlesLoaded = useCallback(
      async (container: Container | undefined) => {
         console.log(container);
      },
      []
   );

   const changeMode = (): any => {
      const newDarkMode = !darkMode;

      setDarkMode(newDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));

      return darkMode ? setDarkMode(false) : setDarkMode(true);
   };

   return (
      // <div className="wrapper">
      <LazyMotion features={domAnimation}>
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={getTsConfig(darkMode)}
         />
         <BrowserRouter>
            <main
               className={`flex flex-col min-h-screen ${
                  darkMode ? "dark bg-dark" : "bg-white"
               }`}
            >
               <Navbar changeMode={changeMode} darkMode={darkMode} />
               <div className="">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/blog" element={<Blog />} />
                  </Routes>
               </div>
               <Footer />
            </main>
         </BrowserRouter>
      </LazyMotion>
   );
}

export default App;
