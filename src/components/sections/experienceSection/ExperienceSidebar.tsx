import { useEffect, useRef, useState } from "react";
import experiences from "../../../data/experience.json";
import { ExperienceI } from "../../../interfaces/experience.interface";
import { m } from "framer-motion";

type Props = {
   activeSection: number;
   setActiveSection: React.Dispatch<React.SetStateAction<number>>;
};

function ExperienceSidebar({ activeSection, setActiveSection }: Props) {
   const [barPosition, setBarPosition] = useState(0);
   const sectionRef = useRef(null);
   const divRef = useRef(null);
   const sections = experiences as ExperienceI[];

   const getSelectedPosition = (sectionId: number, elementHeight: number) => {
      let barPosition = sectionId * elementHeight - elementHeight;

      if (
         barPosition <= elementHeight * sections.length - elementHeight &&
         barPosition >= 0
      ) {
         setBarPosition(barPosition);
      }
   };

   const handleClick = (sectionId: number, e: any) => {
      setActiveSection(sectionId);
      // Find the clicked section in the sections array
      const clickedSection = sections.find(
         (section) => section.id === sectionId,
      );

      if (clickedSection) {
         // Get the top offset of the clicked section
         const sectionOffset = e.target.offsetTop;
         const sectionHeight = e.target.offsetHeight;
         const current: HTMLElement = sectionRef.current!;
         getSelectedPosition(sectionId, sectionHeight);

         // Calculate the scroll position
         const scrollPosition = sectionOffset - current.offsetTop;

         current.scrollTo({
            top: scrollPosition - sectionHeight,
            behavior: "smooth",
         });
      }
   };

   return (
      <section
         className="scrollbar-hide w-full overflow-auto rounded bg-cyan-400 bg-opacity-5 shadow md:w-2/3 lg:w-2/6"
         ref={sectionRef}
      >
         <div
            className="relative w-auto"
         >
            {sections.map((section) => {
               return (
                  <div
                     key={section.id}
                     className={`cursor-pointer select-none border-l-4 border-transparent p-4 hover:bg-cyan-100  hover:bg-opacity-40 dark:hover:bg-cyan-100 dark:hover:bg-opacity-5 ${section.id === activeSection ? "text-l-primary dark:text-d-primary" : ""}`}
                     onClick={(e) => handleClick(section.id, e)}
                  >
                     {section.name}
                  </div>
               );
            })}
         </div>
         <m.div
            className={`absolute h-14 w-1 rounded bg-l-primary dark:bg-d-primary`}
            animate={{ top: barPosition }}
         ></m.div>
      </section>
   );
}

export default ExperienceSidebar;
