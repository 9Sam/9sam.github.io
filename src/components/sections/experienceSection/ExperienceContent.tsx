import { ExperienceI } from "../../../interfaces/experience.interface";
import Tag from "../../shared/Tag";
import Title from "../../shared/Title";

type Props = {
   experience: ExperienceI;
};

const listItemIndicator = () => {
   return <div className="h-2 w-2 rounded-full mr-2 bg-l-secondary dark:bg-d-secondary"></div>;
};

const listItems = ({ title, items }: { title: string; items: string[] }) => {
   return (
      <>
         <h3 className="my-4 text-lg font-bold">{title}</h3>
         <ul>
            {items.map((item, index) => (
               <li className="flex flex-row" key={index}>
                  <div className="mt-2">{listItemIndicator()}</div>
                  <div>{item}</div>
               </li>
            ))}
         </ul>
      </>
   );
};

function ExperienceContent({ experience }: Props) {
   return (
      <div className="p-6 spotlight">
         <h2 className="pt-4 text-2xl font-bold">{experience.name}</h2>
         <p className="pt-4 mb-4">{experience.about}</p>

         {listItems({ title: "Activities", items: experience.activities })}
         {listItems({ title: "Achivements", items: experience.achievents })}

         <div className="flex flex-wrap gap-2 py-6">
            {experience.stack.map((item, index) => (
               <Tag size="w-4 h-4">{item}</Tag>
            ))}
         </div>
      </div>
   );
}

export default ExperienceContent;
