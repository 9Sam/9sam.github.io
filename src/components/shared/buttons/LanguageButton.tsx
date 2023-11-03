import { m } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MdLanguage } from "react-icons/md";
import useClickOutside from "../../../hooks/useClickOutside";
import { IsOpenStateT } from "../../../types";

interface Language {
   name: string;
   code: string;
   icon: string;
}

type Props = {
   navbarState: IsOpenStateT;
};

function LanguageButton({ navbarState }: Props) {
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const ulRef = useRef<HTMLUListElement | null>(null);
   const [isOpen, setIsOpen] = useState(false);

   const languages: Language[] = [
      { name: "English", code: "en", icon: "" },
      { name: "Español", code: "es", icon: "" },
      { name: "Porugues", code: "pr", icon: "" },
   ];

   const handleLanguageClick = (target: any) => {
      navbarState.setIsOpen(false);
      localStorage.setItem("language", target.getAttribute("data-code"));
      window.location.reload();
   };

   useClickOutside([ulRef, buttonRef, isOpen, setIsOpen]);

   return (
      <div className="absoulte flex flex-col justify-center md:relative">
         <m.button
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="mx-auto cursor-pointer py-2 pr-4 pl-3 md:mx-0 md:py-0"
         >
            <MdLanguage className="h-6 w-6 hover:fill-l-primary dark:hover:fill-d-primary" />
         </m.button>
         <hr className={`${isOpen ? "block" : "hidden"} my-2 md:hidden`} />
         <m.ul
            animate={{ opacity: isOpen ? 1 : 0 }}
            ref={ulRef}
            className={`relative mx-auto flex w-full flex-col rounded bg-white transition-all duration-300 dark:bg-dark md:absolute md:top-10 md:right-0 md:w-32 md:shadow-md ${
               !isOpen ? "hidden" : ""
            }`}
         >
            {languages.map((language, index) => (
               <li
                  key={index}
                  className="cursor-pointer rounded py-2 px-4 text-center hover:bg-l-primary hover:text-white dark:hover:bg-d-primary dark:hover:text-dark"
                  onClick={(e) => handleLanguageClick(e.target)}
               >
                  {`(${language.code}) ${language.name}`}
               </li>
            ))}
         </m.ul>
      </div>
   );
}

export default LanguageButton;
