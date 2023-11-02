import { m } from "framer-motion";
import ProjectWindowUpperBar from "./ProjectWindowUpperBar";
import ProjectWindowLowerBar from "./ProjectWindowLowerBar";

type ProjectWindowProps = {
   className?: string;
   imageSrc?: string;
   topColor: string;
   bottomColor: string;
};

function ProjectWindow({
   className,
   imageSrc,
   topColor,
   bottomColor,
}: ProjectWindowProps) {
   return (
      <div
         className={`cursor-pointer w-auto m-2 h-auto shadow rounded ${
            className !== undefined ? className : ""
         }`}
      >
         <ProjectWindowUpperBar color={topColor} />
         <div className="w-full h-full overflow-hidden">
            <m.img
               className="h-40 w-full object-cover"
               whileHover={{ scale: 1.3 }}
               transition={{ duration: 0.5 }}
               src={imageSrc}
               alt=""
            />
         </div>
         <ProjectWindowLowerBar color={bottomColor} />
      </div>
   );
}

export default ProjectWindow;
