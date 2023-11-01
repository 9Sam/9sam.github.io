import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectI } from "../../interfaces/Project";
import { IoOpenOutline } from "react-icons/io5";
import Button from "../shared/buttons/Button";
import Tag from "../shared/Tag";

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
               <img
                  className="h-40 w-full rounded-t-md object-cover"
                  // src={getImageByKey((project.front) ? project.front : "")}
                  src={project.front}
                  alt=""
               />
            </div>
            <div className="p-5 md:h-64">
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
               {/* <hr className="w-full mx-auto text-sm text-primary mb-5" /> */}
               {React.cloneElement(
                  <Button
                     onClick={() => setState(true)}
                     type="primary"
                     icon={<IoOpenOutline className="h-6 w-6" />}
                  >
                     See more
                  </Button>,
                  { className: "" },
               )}
            </div>
         </div>
      );
   } else {
      return <div>404</div>;
   }
}

export default ProjectCard;
