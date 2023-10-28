import { MdDarkMode, MdLightMode } from "react-icons/md";
import { m } from "framer-motion";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useLayoutEffect } from "react";

function DarkModeButton() {
   const { isDarkMode, setDarkMode } = useDarkMode();

   const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
   };

   return (
      <m.button
         whileHover={{
            scale: 1.1,
            transition: { ease: "linear", duration: 0.5 },
         }}
         onClick={toggleDarkMode}
         className="block mx-100 md:mx-0 py-2 md:py-0 pr-4 pl-3 m-auto md:m-0 cursor-pointer"
      >
         {isDarkMode ? (
            <MdLightMode className="w-6 h-6 hover:fill-primary" />
         ) : (
            <MdDarkMode className="w-6 h-6 hover:fill-primary" />
         )}
      </m.button>
   );
}

export default DarkModeButton;
