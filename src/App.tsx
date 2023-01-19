import "./App.css";
import 'animate.css/animate.min.css';
import {
   BrowserRouter,
   Routes,
   Route,
   ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { useState } from "react";
import ProjectDetail from "./components/ProjectDetail";

function App() {
   const [darkMode, setDarkMode] = useState(true);

   const changeMode = (): any => {
      return darkMode ? setDarkMode(false) : setDarkMode(true);
   };

   return (
      // <div className="wrapper">
         <BrowserRouter>
            <main
               className={`flex flex-col min-h-screen ${
                  darkMode ? "dark bg-dark" : ""
               }`}
            >
               <Navbar changeMode={changeMode} darkMode={darkMode} />
               <div className="">
                  <Routes>
                     <Route path="/" element={<Home />}/>
                     <Route path="/projects" element={<Projects />}/>
                     <Route path="/projects/:id" element={<ProjectDetail />} />
                     <Route path="/blog" element={<Blog />} />
                  </Routes>
               </div>
               <Footer />
            </main>
         </BrowserRouter>
      // </div>
   );
}

export default App;
