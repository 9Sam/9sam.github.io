import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectI } from "../../interfaces/Project";
import {IoOpenOutline} from 'react-icons/io5'
import Button from "../shared/Button";
import Tag from "../shared/Tag";

type projectT = {
   project: ProjectI;
}

function ProjectCard({project}:projectT) {
   const navigate = useNavigate();
   const [state, setState] = useState(false);

   useEffect(() => {
      if(state) navigate(`/projects/${project.id}`, {state: project, preventScrollReset:false});
   },[state])

   if(project){
      return (
         <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-dark dark:border dark:border-primary dark:border-opacity-50 ">
            <a href="" onClick={() => setState(true)}>
               <img
                  className="rounded-t-lg h-44 md:h-48 w-full"
                  // src={getImageByKey((project.front) ? project.front : "")}
                  src={project.front}
                  alt=""
               />
            </a>
            <div className="p-5 md:h-52">
               <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-light-gray">
                     {project.name}
                  </h5>
               </a>
               <p className="mb-3 font-normal dark:text-light-gray">
                  {project.description}
               </p>
               <div className="flex flex-wrap gap-2 my-4">
                  {project.tags?.map((tag, index)=>{
                     return (
                        <Tag key={index}>{tag}</Tag>
                     )
                  })}
               </div>
            </div>
            <div className="text-center p-5">
               {/* <hr className="w-full mx-auto text-sm text-primary mb-5" /> */}
               <Button onClick={() => setState(true)} type="primary" icon={<IoOpenOutline className="w-6 h-6"/>}>See more</Button>
            </div>
         </div>
      );
   }else{
      return(
         <div>404</div>
      )
   }
}

export default ProjectCard;
