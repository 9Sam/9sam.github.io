import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";

function MainButton() {
   const [isVisible, setIsVisible] = useState(true);

   const scrollWithOffset = (el: HTMLElement) => {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      scrollTo({ top: yCoordinate, behavior: "smooth" });
   };

   useEffect(() => {
      document.addEventListener("scroll", () => {
         const section = document.querySelector("#home");
         const rect = section?.getBoundingClientRect();

         (rect && rect.top >= 0 && rect.top <= window.innerHeight)
         ?  setIsVisible(false)
         :  setIsVisible(true);
      });
   }, []);

   return (
      <AnimatePresence>
         {isVisible && (
            <m.div
               className="group z-20"
               initial={{ opacity: 0 }}
               animate={{ opacity: isVisible ? 1 : 0 }}
               exit={{ opacity: 0, transition: { duration: 0.5 } }} // Define the exit animation
               transition={{ duration: 3 }}
            >
               <Link
                  to="/#home"
                  className={`fixed bottom-20 right-10 flex h-10 w-10 cursor-pointer select-none justify-center rounded-full border p-2 align-middle dark:border-d-primary dark:group-hover:bg-d-primary group-hover:bg-l-primary`}
                  scroll={(el) => scrollWithOffset(el)}
               >
                  <BiArrowToTop
                     className={`h-6 w-6 animate-bounce dark:fill-d-primary dark:group-hover:fill-dark group-hover:fill-white`}
                  />
               </Link>
            </m.div>
         )}
      </AnimatePresence>
   );
}

export default MainButton;
