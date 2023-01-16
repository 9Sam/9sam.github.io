import ProjectCard from "./features/ProjectCard";
import data from '../data/projects.json';
import Title from "./shared/Title";
import Button from "./shared/Button";
import { AiFillFolderOpen } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ProjectI } from "../interfaces/Project";
import { useEffect, useState } from "react";

function ProjectsMain() {
   const navigate = useNavigate();
   const [state, setState] = useState(false);

   data as ProjectI[]

   useEffect(() => {
      if(state){
         navigate('/projects');
      }
   },[state])

   return (
      <section id="projects" className="flex-1 max-w-7xl md:flex md:flex-col my-20 mx-auto p-5 md:p-10 bg-white dark:bg-dark">
         <Title title="Projects" />
         <div className="flex flex-wrap justify-center lg:justify-between gap-3 gap-y-5 bg-gd">
            {data.filter(project => project.main === true).map((project:any, index) => {
               return (
                  <ProjectCard key={project.id} project={project} />   
               )
            })}
         </div>
         {data.length > 1 ? <div className="text-center my-10">
            <Button type="primary" onClick={() => setState(true)} icon={<AiFillFolderOpen className="w-6 h-6"/>}>
               See more projects
            </Button>
         </div> : ""}
      </section>
   );
}

export default ProjectsMain;
