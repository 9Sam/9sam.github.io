import React from "react";
import { ItemsT, TechnologyI } from "../../types";

type Props = {
  items: ItemsT;
};

const h2Classes =
  "text-dark dark:text-light-gray text-xl md:text-2xl font-bold py-5 md:h-20";

function SkillsList({ items }: Props){
  return (
    <div className="w-full md:w-1/3 p-2 text-center">
      <h2 className={h2Classes}>{items.title}</h2>
      <div className="text-dark dark:text-light-gray text-lg md:text-xl">
        {items.technologies
          .filter((x) => x.skill === true)
          .map((item, index) => (
            <div key={index} className="flex mt-3">
              <div className="my-auto w-1/2 -ml-6 pr-2">
                {React.cloneElement(item.component, {
                  className: "w-6 h-6 mx-auto float-right",
                })}
              </div>
              <div className="flex w-1/2">
                <a
                  href={item.link}
                  className="hover:text-primary transition ease-out duration-200"
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
};

export default SkillsList;
