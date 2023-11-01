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
         <div className="h-96 w-96"></div>
      </section>
   );
}

export default Experience;
