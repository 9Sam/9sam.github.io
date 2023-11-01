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
         <div className="my-10 flex flex-col gap-5 md:flex-row">
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
         <div className="blur-effect z-10 h-auto rounded-md text-center text-dark  text-opacity-70 shadow">
            <div className="flex flex-col md:flex-row">
               <Computer
                  className="computer-icon fillit h-full w-full"
                  color="#1f2937"
                  fill="red"
               />
               <p className="max-w-2/3 m-auto mx-auto p-5 text-lg dark:text-light-gray">
                  <i>{MessagesE.ABOUT_ME}</i>
               </p>
            </div>
         </div>
      </section>
   );
}

export default About;
