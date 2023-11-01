import Title from "../shared/Title";
import { MessagesE } from "../../utils/messages";
import { sectionClasses } from "../../utils/themeClasses";
import ShowCardMain from "../features/ShowCardMain";
import { BiTestTube } from "react-icons/bi/index";
import { HiDatabase } from "react-icons/hi/index";
import { HiComputerDesktop } from "react-icons/hi2/index";
import Computer from "../../icons/green-computer.svg?react";

const iconsClasses =
   "w-12 h-12 my-auto fill-l-secondary dark:fill-d-secondary animate-pulse";

const showCards = [
   {
      id: 1,
      icon: <HiComputerDesktop className={`${iconsClasses}`} />,
      imageAlt: "Experience icon",
      text: "1.6 years working as a profesional full-stack web developer.",
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
         <div className="flex flex-col md:flex-row gap-5 my-10">
            {showCards.map((card, _index) => {
               return (
                  <ShowCardMain
                     key={card.id}
                     text={card.text}
                     icon={card.icon}
                     alt={card.imageAlt}
                  />
               );
            })}
         </div>
         <div className="blur-effect text-dark text-opacity-70 text-center rounded-md shadow  h-auto z-10">
            <div className="flex flex-col md:flex-row">
               <Computer
                  className="computer-icon w-full h-full fillit"
                  color="#1f2937"
                  fill="red"
               />
               <p className="max-w-2/3 mx-auto m-auto p-5 text-lg dark:text-light-gray">
                  <i>{MessagesE.ABOUT_ME}</i>
               </p>
            </div>
         </div>
      </section>
   );
}

export default About;
