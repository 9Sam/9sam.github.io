import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectI } from "../../interfaces/project.interface";
import { IoOpenOutline } from "react-icons/io5";
import Button from "../shared/buttons/Button";
import Tag from "../shared/Tag";
import ProjectWindow from "./ProjectWindow/ProjectWindow";

type projectT = {
   project: ProjectI;
};

function ProjectCard({ project }: projectT) {
   const navigate = useNavigate();
   const [state, setState] = useState(false);

   useEffect(() => {
      if (state)
         navigate(`/projects/${project.id}`, {
            state: project,
            preventScrollReset: false,
         });
   }, [state]);

   if (project) {
      return (
         <div className="z-10 h-auto w-[350px] rounded-md bg-white shadow-md dark:border dark:border-d-primary dark:border-opacity-50 dark:bg-dark">
            <div className="cursor-pointer" onClick={() => setState(true)}>
               <ProjectWindow
                  imageSrc={project.front ? project.front : ""}
                  topColor={`${project.window?.topColor}`}
                  bottomColor={`${project.window?.bottomColor}`}
               />
            </div>
            <div className="px-5 pt-3 md:h-56">
               <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-light-gray">
                     {project.name}
                  </h5>
               </a>
               <p className="mb-3 font-normal dark:text-light-gray">
                  {project.description}
               </p>
               <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => {
                     return (
                        <Tag key={index} size="w-4 h-4">
                           {tag}
                        </Tag>
                     );
                  })}
               </div>
            </div>
            <div className="h-auto px-5 pb-5 pt-1 text-center">
               {React.cloneElement(
                  <Button
                     onClick={() => setState(true)}
                     type="primary"
                     icon={<IoOpenOutline className="h-6 w-6" />}
                  >
                     See more
                  </Button>,
                  { className: "" }
               )}
            </div>
         </div>
      );
   } else {
      return <div>404</div>;
   }
}

export default ProjectCard;
