import ProjectCard from "../features/ProjectCard";
import data from "../../data/projects.json";
import Title from "../shared/Title";
import { sectionClasses } from "../../utils/themeClasses";

function ProjectsMain() {
   return (
      <section id="projects" data-section className={`${sectionClasses}`}>
         <Title title="Projects" />
         <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data
               .filter((project) => project.main === true)
               .map((project: any, index) => {
                  return <ProjectCard key={project.id} project={project} />;
               })}
         </div>

         </div>
      </section>
   );
}

export default ProjectsMain;
