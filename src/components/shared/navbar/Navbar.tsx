import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeContext";
import { MenuContextProvider } from "../../../context/MenuContext";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";
import Logo from "./Logo";

function Navbar() {
   const { isDarkMode } = useDarkMode();
   const [isOpen, setIsOpen] = useState(false);
   const navRef = useRef<HTMLUListElement | null>(null);
   const location = useLocation();

   useLayoutEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   return (
      <MenuContextProvider>
         <nav
            className="shadow fixed top-0 left-0 w-full z-20 px-2 sm:px-4 py-2.5 bg-white dark:bg-dark scrollbar-hide"
            ref={navRef}
         >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
               <Logo isDarkMode={isDarkMode} />
               <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
               <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
         </nav>
      </MenuContextProvider>
   );
}

export default Navbar;
