import React from "react";
import {
   frontendItems,
   backendItems,
   othersItems,
} from "../../utils/Technologies";
import { RiHashtag } from "react-icons/ri";
import { TechnologyI } from "../../types";

interface PropsI {
   children: string;
   size: string;
}

function Tag({ children, size }: PropsI) {
   const getIcon = (items: TechnologyI[]) => {
      return items.findIndex(
         (item: TechnologyI) =>
            item.name.toLowerCase() === children.toLowerCase(),
      );
   };

   const handleIcon = () => {
      let frontIcon = getIcon(frontendItems);
      let backIcon = getIcon(backendItems);
      let otherIcon = getIcon(othersItems);

      if (frontIcon >= 0) return frontendItems[frontIcon]?.component;

      if (backIcon >= 0) return backendItems[backIcon]?.component;

      if (otherIcon >= 0) return othersItems[otherIcon]?.component;

      return (
         <RiHashtag
            className="h-6 w-6 fill-white"
            style={{ fill: "#25B6D2" }}
         />
      );
   };

   return (
      <div className="flex justify-center rounded shadow bg-cyan-500 bg-opacity-10 border border-transparent dark:border-l-secondary p-1 text-xs text-dark dark:border-opacity-70 dark:bg-cyan-10 dark:text-light-gray">
         <div className="mr-1 w-auto">
            {React.cloneElement(handleIcon(), { className: size })}
         </div>
         <div className="my-auto w-auto">{children}</div>
      </div>
   );
}

export default Tag;
