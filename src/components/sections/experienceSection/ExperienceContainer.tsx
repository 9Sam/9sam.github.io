import ExperienceContent from "./ExperienceContent";
import ExperienceSidebar from "./ExperienceSidebar";
import experienceData from "../../../data/experience.json";
import { ExperienceI } from "../../../interfaces/experience.interface";
import { useEffect, useState } from "react";

function ExperienceContainer() {
   const [activeSection, setActiveSection] = useState<number>(1);
   const experiences: ExperienceI[] = experienceData as ExperienceI[];


   return <div className="flex flex-col md:flex-row w-full h-auto bg-white blur-effect rounded shadow">
      <ExperienceSidebar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <ExperienceContent experience={experiences[activeSection - 1]}/>
   </div>
}

export default ExperienceContainer;