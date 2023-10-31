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
         <div className="w-[350px] bg-white rounded-lg h-auto shadow-md dark:bg-dark dark:border dark:border-d-primary dark:border-opacity-50 z-10">
            <div className="cursor-pointer" onClick={() => setState(true)}>
               <img
                  className="rounded-t-lg h-40 object-cover w-full"
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
            <div className="text-center h-auto pb-5 pt-1 px-5">
               {/* <hr className="w-full mx-auto text-sm text-primary mb-5" /> */}
               {React.cloneElement(
                  <Button
                     onClick={() => setState(true)}
                     type="primary"
                     icon={<IoOpenOutline className="w-6 h-6" />}
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
