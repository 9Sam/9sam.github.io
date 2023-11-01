import SplideTech from "../features/SplideTech";
import {
   frontendItems,
   backendItems,
   othersItems,
} from "../../utils/Technologies";
import Title from "../shared/Title";
import { sectionClasses } from "../../utils/themeClasses";
import SkillsList from "../features/SkillsList";
import { ItemsT } from "../../types";

const items: ItemsT[] = [
   { title: "Frontend", technologies: frontendItems },
   { title: "Backend", technologies: backendItems },
   { title: "Others", technologies: othersItems },
];

function Skills() {
   return (
      <section id="skills" data-section className={`${sectionClasses}`}>
         <Title title="Skills" />
         <div className="flex justify-center">
            <SplideTech />
         </div>
         <div className="flex justify-center">
            <div className="flex flex-col justify-center md:flex-row md:flex-wrap w-full max-w-5xl gap-4 md:gap-6 lg:gap-x-8 z-10">
               {items.map((item: ItemsT, index: number) => (
                  <SkillsList key={index} items={item} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default Skills;
