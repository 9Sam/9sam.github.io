import { m } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MdLanguage } from "react-icons/md";
import useClickOutside from "../../../hooks/useClickOutside";

interface Language {
   name: string;
   code: string;
   icon: string;
}

function LanguageButton() {
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const ulRef = useRef<HTMLUListElement | null>(null);
   const [isOpen, setIsOpen] = useState(false);

   const languages: Language[] = [
      { name: "English", code: "en", icon: "" },
      { name: "Español", code: "es", icon: "" },
      { name: "Porugues", code: "pr", icon: "" },
   ];

   const handleLanguageClick = (target: any) => {};

   useClickOutside([ulRef, buttonRef, isOpen, setIsOpen]);

   return (
      <>
         <m.button
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="relative mx-100 md:mx-0 py-2 md:py-0 pr-4 pl-3 m-auto md:m-0 cursor-pointer"
         >
            <MdLanguage className="w-6 h-6 hover:fill-l-primary dark:hover:fill-d-primary" />
         </m.button>
         <hr className={`${isOpen ? "block" : "hidden"} md:hidden my-2`} />
         <m.ul
            animate={{ opacity: isOpen ? 1 : 0 }}
            ref={ulRef}
            className={`relative md:absolute md:top-14 md:right-5 flex flex-col md:shadow-md w-auto rounded bg-white dark:bg-dark transition-all duration-300 ${
               !isOpen ? "hidden" : ""
            }`}
         >
            {languages.map((language, index) => (
               <li
                  key={index}
                  className="py-2 px-4 text-center hover:bg-l-primary dark:hover:bg-d-primary hover:text-white dark:hover:text-dark rounded cursor-pointer"
                  onClick={(e) => handleLanguageClick(e.target)}
               >
                  {`(${language.code}) ${language.name}`}
               </li>
            ))}
         </m.ul>
      </>
   );
}

export default LanguageButton;
