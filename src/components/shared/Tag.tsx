import React from "react";
import {
   frontendItems,
   backendItems,
   othersItems,
} from "../../utils/Technologies";
import { RiHashtag } from "react-icons/ri";

interface PropsI {
   children: string;
   size: string;
}

function Tag({ children, size }: PropsI) {
   const handleIcon = () => {
      let frontIcon = frontendItems.findIndex(
         (item) => item.name.toLowerCase() === children.toLowerCase(),
      );
      let backIcon = backendItems.findIndex(
         (item) => item.name.toLowerCase() === children.toLowerCase(),
      );
      let otherIcon = othersItems.findIndex(
         (item) => item.name.toLowerCase() === children.toLowerCase(),
      );

      if (frontIcon >= 0) {
         return frontendItems[frontIcon]?.component;
      }
      if (backIcon >= 0) {
         return backendItems[backIcon]?.component;
      }
      if (otherIcon >= 0) {
         return othersItems[otherIcon]?.component;
      }

      return (
         <RiHashtag
            className="h-6 w-6 fill-white"
            style={{ fill: "#25B6D2" }}
         />
      );
   };

   return (
      <div className="bg-secondary dark:border-secondary opacity-8 flex justify-center rounded bg-opacity-10 p-1 text-xs text-dark shadow  dark:border dark:border-opacity-70 dark:bg-dark dark:text-light-gray dark:opacity-100">
         <div className="mr-1 w-auto">
            {React.cloneElement(handleIcon(), { className: size })}
         </div>
         <div className="my-auto w-auto">{children}</div>
      </div>
   );
}

export default Tag;
