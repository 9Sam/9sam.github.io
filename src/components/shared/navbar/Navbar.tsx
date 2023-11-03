import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeContext";
import { MenuContextProvider } from "../../../context/MenuContext";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";
import Logo from "./Logo";
import { IsOpenStateT } from "../../../types";

function Navbar() {
   const { isDarkMode } = useDarkMode();
   const [isOpen, setIsOpen] = useState(false);
   const navRef = useRef<HTMLUListElement | null>(null);
   const location = useLocation();

   useLayoutEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   const navbarState: IsOpenStateT = {
      isOpen,
      setIsOpen,
   };

   return (
      <MenuContextProvider>
         <nav
            className="scrollbar-hide fixed top-0 left-0 z-20 w-full bg-white px-2 py-2.5 shadow dark:bg-dark sm:px-4"
            ref={navRef}
         >
            <div className="container mx-auto flex flex-wrap items-center justify-between">
               <Logo isDarkMode={isDarkMode} />
               <MenuButton navbarState={navbarState} />
               <MenuItems navbarState={navbarState} />
            </div>
         </nav>
      </MenuContextProvider>
   );
}

export default Navbar;
