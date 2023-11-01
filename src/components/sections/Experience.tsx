import { sectionClasses } from "../../utils/themeClasses";
import Title from "../shared/Title";

function Experience() {
   return (
      <section
         id="experience"
         data-section
         className={`${sectionClasses} lg:mb-48`}
      >
         <Title title="Experience" />
         <div className="w-96 h-96"></div>
      </section>
   );
}

export default Experience;
