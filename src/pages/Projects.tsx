import ProjectCard from "../components/features/ProjectCard";
import Title from "../components/shared/Title";
import data from "../data/projects.json";
import { ProjectI } from "../interfaces/Project";

function Projects() {
   data as ProjectI[];

   return (
      <div className="dark:bg-dark dark:text-white h-auto">
         <section className="flex-1 max-w-[1400px] md:flex md:flex-col mx-auto p-5 md:p-14 bg-white dark:bg-dark">
            <Title title="Projects" />
            <div className="flex flex-wrap -m-1 md:-m-1 bg-gd gap-y-2">
               {data.map((project:ProjectI, index)  => {
                  return (
                     <div key={index} className="flex flex-wrap w-full md:w-1/2 lg:w-1/4 justify-center p-2">
                        <ProjectCard
                           key={project.id}
                           project={project}
                        />
                     </div>
                  );
               })}
            </div>
         </section>
      </div>
   );
}

export default Projects;
