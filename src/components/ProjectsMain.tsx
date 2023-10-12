import ProjectCard from "./features/ProjectCard";
import data from "../data/projects.json";
import Title from "./shared/Title";
import Button from "./shared/Button";
import { AiFillFolderOpen } from "react-icons/ai";
import { sectionClasses } from "../utils/themeClasses";

function ProjectsMain() {
   return (
      <section id="projects" data-section className={`${sectionClasses}`}>
         <Title title="Projects" />
         <div className="flex flex-wrap justify-center lg:justify-between gap-3 gap-y-5 bg-gd">
            {data
               .filter((project) => project.main === true)
               .map((project: any, index) => {
                  return <ProjectCard key={project.id} project={project} />;
               })}
         </div>
         {data.length > 1 ? (
            <div className="text-center my-10">
               <Button
                  type="primary"
                  icon={<AiFillFolderOpen className="w-6 h-6" />}
               >
                  See more projects
               </Button>
            </div>
         ) : (
            ""
         )}
      </section>
   );
}

export default ProjectsMain;
