import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/Footer";
import { LazyMotion, domAnimation } from "framer-motion";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { useDarkMode } from "./context/DarkModeContext";
import { getTsConfig } from "./utils/tsParticlesConfiguration";
import MainButton from "./components/features/MainButton";

function App() {
   const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine);
   }, []);

   const particlesLoaded = useCallback(
      async (_container: Container | undefined) => {},
      [],
   );

   const { isDarkMode } = useDarkMode();

   return (
      <LazyMotion features={domAnimation}>
         <>
            <Particles
               id="tsparticles"
               init={particlesInit}
               loaded={particlesLoaded}
               options={getTsConfig(isDarkMode)}
            />
            <BrowserRouter>
               <div className="min-h-scree flex flex-col">
                  <Navbar />
                  <MainButton />
                  <div className="">
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                     </Routes>
                  </div>
                  <Footer />
               </div>
            </BrowserRouter>
         </>
      </LazyMotion>
   );
}

export default App;
