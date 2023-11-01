import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import DarkModeButton from "../buttons/DarkModeButton";
import LanguageButton from "../buttons/LanguageButton";
import useIntersectionObserver from "../../../hooks/useActiveLinkOnScroll";
import useClickOutside from "../../../hooks/useClickOutside";
import { useMenuContext } from "../../../context/MenuContext";

type Props = {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuItems({ isOpen, setIsOpen }: Props) {
   const ulRef = useRef<HTMLDivElement | null>(null);
   const [currentPathname, setCurrentPathname] = useState("");
   const [activeSection, setActiveSection] = useState(null);
   const { menuButtonRef } = useMenuContext();

   useEffect(() => {
      setCurrentPathname(location.hash);
   }, [location.hash]);

   useIntersectionObserver({ setActiveSection });
   useClickOutside([ulRef, menuButtonRef, isOpen, setIsOpen]);

   const scrollWithOffset = (el: HTMLElement, isHome: boolean) => {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      let yOffset = isHome ? 0 : -60;
      if (window.innerWidth <= 768) yOffset = -60;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
   };

   const handleClick = () => {
      return setIsOpen(!isOpen);
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
      <m.div
         animate={{}}
         className={`navbar w-full transition md:block md:w-auto ${
            isOpen ? "top-20 opacity-100" : "top-[-490px]"
         } opacity-0 md:opacity-100 `}
         id="mobile-menu"
         ref={ulRef}
      >
         <ul
            className={`mt-4 flex flex-col items-center text-dark dark:bg-dark dark:text-light-gray md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
             ${isOpen ? "" : "hidden md:flex"}`}
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
                        className={`block bg-white py-2 dark:bg-dark md:py-0 ${
                           link.redirect === `/#${activeSection}` ||
                           link.redirect === `#${activeSection}`
                              ? "font-bold text-l-primary dark:text-d-primary"
                              : "text-dark hover:text-l-primary dark:text-white dark:hover:text-d-primary"
                        }`}
                        onClick={() => handleClick()}
                        aria-current="page"
                     >
                        {link.name}
                     </Link>
                  </li>
               );
            })}
            <div className="flex w-full flex-col md:flex-row">
               <DarkModeButton />
               <LanguageButton />
            </div>
         </ul>
      </m.div>
   );
}

export default MenuItems;
