import React from "react";
import { ItemsT } from "../../types";

type Props = {
   items: ItemsT;
};

const h2Classes =
   "text-dark dark:text-light-gray text-xl md:text-2xl font-bold py-5 md:h-20";

function SkillsList({ items }: Props) {
   return (
      <div className="spotlight w-full rounded p-2 text-center shadow md:w-[320px]">
         <h2 className={h2Classes}>{items.title}</h2>
         <div className="pb-10 text-lg text-dark dark:text-light-gray md:text-xl">
            {items.technologies
               .filter((x) => x.skill === true)
               .map((item, index) => (
                  <div key={index} className="mt-3 flex">
                     <div className="my-auto -ml-6 w-1/2 pr-2">
                        {React.cloneElement(item.component, {
                           className: "w-6 h-6 mx-auto float-right",
                        })}
                     </div>
                     <div className="flex w-1/2">
                        <a
                           href={item.link}
                           className="transition duration-200 ease-out hover:text-l-primary dark:hover:text-d-primary"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <span className="md:ml-3">{item.name}</span>
                        </a>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
}

export default SkillsList;
