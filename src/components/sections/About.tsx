import Title from "../shared/Title";
import { MessagesE } from "../../utils/messages";
import { sectionClasses } from "../../utils/themeClasses";
import ShowCardMain from "../features/ShowCardMain";
import { BiTestTube } from "react-icons/bi/index";
import { HiDatabase } from "react-icons/hi/index";
import { HiComputerDesktop } from "react-icons/hi2/index";
import Computer from "../../icons/green-computer.svg?react";
import Spotlight from "../shared/Spotlight";
import { SpotlightCard } from "../shared/SpotlightCard";

const iconsClasses =
   "w-12 h-full fill-l-secondary dark:fill-d-secondary animate-pulse";

const showCards = [
   {
      id: 1,
      icon: <HiComputerDesktop className={`${iconsClasses}`} />,
      imageAlt: "Experience icon",
      text: "1.6 years working as a profesional full-stack developer.",
   },
   {
      id: 2,
      icon: <BiTestTube className={iconsClasses} />,
      imageAlt: "Expirience icon",
      text: "Expirience working with unit testing and integration testing.",
   },
   {
      id: 3,
      icon: <HiDatabase className={iconsClasses} />,
      imageAlt: "Expirience icon",
      text: "Experience working with relational and non relational databases.",
   },
];

function About() {
   return (
      <section id="about" data-section className={sectionClasses}>
         <Title title="About me" />
         <Spotlight className="group grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
            {showCards.map((card, index) => {
               return (
                  <SpotlightCard key={index} className="col-span-full md:col-span-2 lg:col-span-1">
                     <ShowCardMain
                        key={card.id}
                        text={card.text}
                        icon={card.icon}
                        alt={card.imageAlt}
                     />
                  </SpotlightCard>
               );
            })}
            <SpotlightCard key={3} className="col-span-full">
               <div className="flex flex-col md:flex-row">
                  <Computer
                     className="computer-icon h-auto w-full md:w-1/3"
                     color="#1f2937"
                     fill="red"
                  />
                  <p className="max-w-2/3 m-auto mx-auto p-5 text-lg text-dark dark:text-light-gray md:w-2/3">
                     <i>{MessagesE.ABOUT_ME}</i>
                  </p>
               </div>
            </SpotlightCard>
         </Spotlight>
      </section>
   );
}

export default About;
