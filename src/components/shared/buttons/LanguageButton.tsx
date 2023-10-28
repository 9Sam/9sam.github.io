import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";

function LanguageButton(){
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const ulRef = useRef<HTMLUListElement>(null);
   const [isOpen, setIsOpen] = useState(false);

   const languages = [
      { name: "English", code: "en", icon: "" },
      { name: "Español", code: "es", icon: "" },
      { name: "Porugues", code: "pr", icon: "" },
   ];

   const handleLanguageClick = (target: any) => {
      console.log(target.innerHTMLFind);
   };

   useEffect(() => {
      function handleClickOutside(event: any) {
         if (
            ulRef.current &&
            !ulRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
         ) {
            setIsOpen(false);
         }
      }

      // if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // } else {
      //    document.body.removeEventListener("mousedown", handleClickOutside);
      // }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isOpen]);

   return (
      <>
         <m.button
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="relative mx-100 md:mx-0 py-2 md:py-0 pr-4 pl-3 m-auto md:m-0 cursor-pointer"
         >
            <MdLanguage className="w-6 h-6 hover:fill-primary" />
         </m.button>
         <ul
            ref={ulRef}
            className={`absolute top-14 right-24 flex flex-col shadow-md w-auto rounded bg-white dark:bg-dark transition-all duration-300 ${
               !isOpen ? "hidden" : ""
            }`}
         >
            {languages.map((language, index) => {
               return (
                  <li
                     className="py-2 px-4 hover:bg-primary hover:text-dark rounded cursor-pointer"
                     key={index}
                     onClick={(e) => handleLanguageClick(e.target)}
                  >
                     {`(${language.code}) ${language.name}`}
                  </li>
               );
            })}
         </ul>
      </>
   );
};

export default LanguageButton;
