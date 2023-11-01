type Props = {
   setActiveSection: any;
};

function useIntersectionObserver({ setActiveSection }: Props) {
   const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");

      if(sections.length > 0){
         const sectionTops = Array.from(sections).map((section) => ({
            section: section,
            top: section.getBoundingClientRect().top,
         }));
   
         // Find the section that is closest to the top of the viewport
         const closestSection = sectionTops.reduce((prev, curr) =>
            Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev,
         ).section;
   
         if (closestSection) {
            setActiveSection(closestSection.id);
         }
      }
   };

   // Add the scroll event listener
   window.addEventListener("scroll", handleScroll);

   return () => {
      window.removeEventListener("scroll", handleScroll);
   };
}

export default useIntersectionObserver;
