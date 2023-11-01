import ProjectCard from "../features/ProjectCard";
import data from "../../data/projects.json";
import Title from "../shared/Title";
import { sectionClasses } from "../../utils/themeClasses";

function ProjectsMain() {
   return (
      <section id="projects" data-section className={`${sectionClasses}`}>
         <Title title="Projects" />
         <div className="bg-gd flex flex-wrap justify-center gap-2 gap-y-5 lg:justify-between">
            {data
               .filter((project) => project.main === true)
               .map((project: any, index) => {
                  return <ProjectCard key={project.id} project={project} />;
               })}
         </div>
      </section>
   );
}

export default ProjectsMain;
