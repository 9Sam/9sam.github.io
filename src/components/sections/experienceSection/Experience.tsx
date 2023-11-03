import { sectionClasses } from "../../../utils/themeClasses";
import Title from "../../shared/Title";
import ExperienceContainer from "./ExperienceContainer";

function Experience() {
   return (
      <section
         id="experience"
         data-section
         className={`${sectionClasses} mx-1 md:mx-auto`}
      >
         <Title title="Experience" />
         <ExperienceContainer />
      </section>
   );
}

export default Experience;
