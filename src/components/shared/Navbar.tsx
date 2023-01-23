import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "/icons/Lion.svg";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";

function Navbar({ changeMode, darkMode }: any) {
   const [open, setOpen] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [currentPathname, setCurrentPathname] = useState("");
   const location = useLocation();

   useEffect(() => {
      setCurrentPathname(location.pathname);
   }, [location]);

   useLayoutEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   const scrollWithOffset = (el:HTMLElement, isHome: boolean) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      let yOffset = isHome ? 0 : 60;
      if(window.innerWidth <= 768) yOffset = 0;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
   };

   const activeLink = (isActive: boolean) => {
      return isActive
         ? 'text-light-gray md:bg-transparent md:text-white md:p-0 dark:text-light-gray"'
         : "my-auto text-md text-dark hover:bg-gray-50 md:text-dark md:border-0 md:hover:text-primary md:p-0 dark:text-light-gray md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-light-gray dark:border-light-gray";
   };

   const handleOpen = () => {
      return open ? "" : "hidden";
   };

   const links = [
      { name: "Home", redirect: currentPathname === "/" ? "#home" : "/#home" },
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
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-10 px-2 sm:px-4 py-2.5 dark:bg-dark scrollbar-hide">
         <div className="container flex flex-wrap justify-between items-center mx-auto">
            <NavLink to="/" className="flex dark:text-light-gray">
               <img className="h-10 w-10 mr-3" src={logo} alt="icon" />
               <span className="self-center text-md font-semibold whitespace-nowrap dark:text-light-gray">
                  Samuel Casco
               </span>
            </NavLink>
            <button
               onClick={() => setOpen(!open)}
               data-collapse-toggle="mobile-menu"
               type="button"
               className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:fill-white dark:text-white dark:focus:ring-primary"
               aria-controls="mobile-menu-2"
               aria-expanded="false"
            >
               <MdMenu className="w-5 h-5" fill="dark" />
            </button>
            <div
               className={`navbar w-full md:block md:w-auto ${handleOpen()} ${
                  isOpen ? "" : ""
               }
               transition${
                  open ? "top-20 opacity-100" : "top-[-490px]"
               } md:opacity-100 opacity-0 `}
               id="mobile-menu"
            >
               <ul
                  className={`flex flex-col dark:bg-dark items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-dark dark:text-light-gray`}
               >
                  {links.map((link, index) => {
                     return (
                        <li key={index}>
                           <Link
                              to={link.redirect}
                              scroll={el => (link.redirect === "#home" || link.redirect === "/#home") ? scrollWithOffset(el, true) : scrollWithOffset(el, false)}
                              className={`block py-2 pr-4 pl-3 bg-white dark:bg-dark ${activeLink}`}
                              onClick={() => setOpen(false)}
                              aria-current="page"
                           >
                              {link.name}
                           </Link>
                        </li>
                     );
                  })}
                  <button
                     onClick={() => changeMode()}
                     className="block mx-100 md:mx-0 py-2 md:py-0 pr-4 pl-3 m-auto md:m-0 cursor-pointer"
                  >
                     {darkMode ? (
                        <MdLightMode className="w-6 h-6 hover:fill-primary" />
                     ) : (
                        <MdDarkMode className="w-6 h-6 hover:fill-primary" />
                     )}
                  </button>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
