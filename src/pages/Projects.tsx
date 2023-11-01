import ProjectCard from "../components/features/ProjectCard";
import Title from "../components/shared/Title";
import data from "../data/projects.json";
import { ProjectI } from "../interfaces/Project";

function Projects() {
   data as ProjectI[];

   return (
      <div className="h-auto dark:bg-dark dark:text-white">
         <section className="mx-auto max-w-[1400px] flex-1 bg-white p-5 dark:bg-dark md:flex md:flex-col md:p-14">
            <Title title="Projects" />
            <div className="bg-gd -m-1 flex flex-wrap gap-y-2 md:-m-1">
               {data.map((project: ProjectI, index) => {
                  return (
                     <div
                        key={index}
                        className="flex w-full flex-wrap justify-center p-2 md:w-1/2 lg:w-1/4"
                     >
                        <ProjectCard key={project.id} project={project} />
                     </div>
                  );
               })}
            </div>
         </section>
      </div>
   );
}

export default Projects;
