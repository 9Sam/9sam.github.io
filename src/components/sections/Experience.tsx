import { sectionClasses } from "../../utils/themeClasses";
import ProjectsContainer from "../features/ProjectCard2/ProjectsContainer";
import Title from "../shared/Title";

function Experience() {
   return (
      <section
         id="experience"
         data-section
         className={`${sectionClasses} lg:mb-48`}
      >
         <Title title="Experience" />
         <ProjectsContainer/>
      </section>
   );
}

export default Experience;
