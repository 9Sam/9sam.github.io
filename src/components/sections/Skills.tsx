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
import Spotlight from "../shared/Spotlight";
import { SpotlightCard } from "../shared/SpotlightCard";

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
         <div>
            <Spotlight className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {items.map((item: ItemsT, index: number) => (
                  <SpotlightCard
                     key={index}
                     className="mx-auto w-full max-w-sm "
                  >
                     <SkillsList key={index} items={item} />
                  </SpotlightCard>
               ))}
            </Spotlight>
         </div>
      </section>
   );
}

export default Skills;
