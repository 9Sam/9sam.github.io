import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import darkLogo from "/icons/green.svg";
import lightLogo from "/icons/darkBlueI.svg";
import { MdMenu } from "react-icons/md";
import { m } from "framer-motion";
import LanguageButton from "./buttons/LanguageButton";
import { useDarkMode } from "../../context/DarkModeContext";
import DarkModeButton from "./buttons/DarkModeButton";

function Navbar() {
   const { isDarkMode, setDarkMode } = useDarkMode();
   const divRef = useRef<HTMLDivElement>();
   const [isOpen, setIsOpen] = useState(false);
   const [currentPathname, setCurrentPathname] = useState("");
   const location = useLocation();

   const [activeSection, setActiveSection] = useState(null);
   const observer = useRef(null);

   useEffect(() => {
      setCurrentPathname(location.hash);
   }, [location.hash]);

   useEffect(() => {
      //create new instance and pass a callback function
      observer.current = new IntersectionObserver((entries) => {
         const visibleSection = entries.find((entry) => entry.isIntersecting)
            ?.target;
         //Update state with the visible section ID
         if (visibleSection) {
            setActiveSection(visibleSection.id as any);
         }

      }) as any;
      //Get custom attribute data-section from all sections
      const sections = document.querySelectorAll("[data-section]");

      sections.forEach((section) => {
         if (observer.current) {
            (observer.current as IntersectionObserver).observe(section);
         }
      });


      //Cleanup function to remove observer
      return () => {
         sections.forEach((section) => {
            if (observer.current) {
               (observer.current as IntersectionObserver).unobserve(section);
            }
         });
      };
   }, []);

   useLayoutEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   const scrollWithOffset = (el: HTMLElement, isHome: boolean) => {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      let yOffset = isHome ? 0 : -80;
      if (window.innerWidth <= 768) yOffset = 0;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
   };

   const handleOpen = () => {
      return isOpen ? "" : "hidden";
   };

   const links = [
      { name: "Home", redirect: currentPathname === "/" ? "#home" : "/#home" },
      {
         name: "Experience",
         redirect: currentPathname === "/" ? "#experience" : "/#experience",
      },
      {
         name: "Skills",
         redirect: currentPathname === "/" ? "#skills" : "/#skills",
      },
      {
         name: "Projects",
         redirect: currentPathname === "/" ? "#projects" : "/#projects",
      },
      {
         name: "About",
         redirect: currentPathname === "/" ? "#about" : "/#about",
      },
      {
         name: "Contact",
         redirect: currentPathname === "/" ? "#contact" : "/#contact",
      },
   ];

   return (
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-20 px-2 sm:px-4 py-2.5 dark:bg-dark scrollbar-hide">
         
         <div className="container flex flex-wrap justify-between items-center mx-auto">
            <NavLink to="/" className="flex dark:text-light-gray">
               <img
                  className="h-10 w-7 mr-3"
                  src={isDarkMode ? darkLogo : lightLogo}
                  alt="icon"
               />
               <span className="self-center text-md font-semibold whitespace-nowrap dark:text-light-gray">
                  Samuel Casco
               </span>
            </NavLink>
            <button
               onClick={() => setIsOpen(!isOpen)}
               data-collapse-toggle="mobile-menu"
               type="button"
               className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:fill-white dark:text-white dark:focus:ring-d-primary"
               aria-controls="mobile-menu-2"
               aria-expanded="false"
            >
               <MdMenu className="w-5 h-5" fill="dark" />
            </button>
            <m.div
               animate={{}}
               className={`navbar w-full md:block md:w-auto
               transition ${
                  isOpen ? "top-20 opacity-100" : "top-[-490px]"
               } md:opacity-100 opacity-0 `}
               id="mobile-menu"
            >
               <ul
                  className={`flex flex-col dark:bg-dark items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-dark dark:text-light-gray ${
                     isOpen ? "" : "hidden md:flex"
                  }`}
               >
                  {links.map((link, index) => {
                     return (
                        <li key={index}>
                           <Link
                              to={link.redirect}
                              scroll={(el) =>
                                 link.redirect === "#home" ||
                                 link.redirect === "/#home"
                                    ? scrollWithOffset(el, true)
                                    : scrollWithOffset(el, false)
                              }
                              className={`block py-2 pr-4 pl-3 bg-white dark:bg-dark ${
                                 link.redirect === "/#" + activeSection ||
                                 link.redirect === "#" + activeSection
                                    ? "text-primary"
                                    : "text-dark dark:text-white"
                              }`}
                              onClick={() => handleOpen()}
                              aria-current="page"
                           >
                              {link.name}
                           </Link>
                        </li>
                     );
                  })}
                  <DarkModeButton />
                  <LanguageButton />
               </ul>
            </m.div>
         </div>
      </nav>
   );
}

export default Navbar;
