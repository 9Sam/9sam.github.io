import { MdDarkMode, MdLightMode } from "react-icons/md";
import { m } from "framer-motion";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useLayoutEffect } from "react";

function DarkModeButton() {
   const { isDarkMode, setDarkMode } = useDarkMode();

   const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
   };

   const iconClasses = "w-6 h-6 hover:fill-l-primary dark:hover:fill-d-primary";

   return (
      <m.button
         whileHover={{
            scale: 1.1,
            transition: { easeInOut: "easeOut", duration: 0.5 },
         }}
         transition={{ duration: 0.5 }}
         whileTap={{ scale: 0.9 }}
         onClick={toggleDarkMode}
         className="block mx-100 md:mx-0 py-2 md:py-0 pr-4 pl-3 m-auto md:m-0 cursor-pointer"
      >
         {isDarkMode ? (
            <MdLightMode className={iconClasses} />
         ) : (
            <MdDarkMode className={iconClasses} />
         )}
      </m.button>
   );
}

export default DarkModeButton;
