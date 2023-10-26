import code from "/coding_1280.jpg";
import Title from "./shared/Title";
import { MessagesE } from "../utils/messages";
import { sectionClasses } from "../utils/themeClasses";
import ShowCardMain from "./features/ShowCardMain";
import { BiTestTube } from "react-icons/bi/index";
import { HiDatabase } from "react-icons/hi/index";
import { HiComputerDesktop } from "react-icons/hi2/index";

const iconsClasses = "w-12 h-12 my-auto fill-tertiary animate-pulse";

const showCards = [
   {
      id: 1,
      icon: <HiComputerDesktop className={`${iconsClasses}`} />,
      imageAlt: "Experience icon",
      text: "1.6 years working as a profesional fullstack web developer.",
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
      text: "Relational and non relational databases experience.",
   },
];

function About() {
   return (
      <section id="about" data-section className={`${sectionClasses}`}>
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
         <div className="text-dark text-opacity-70 text-center rounded-md shadow bg-dark bg-opacity-5 dark:bg-white dark:bg-opacity-5 h-auto z-10">
            <div className="flex flex-col md:flex-row">
               <img
                  className="max-h-40 md:max-h-80 md:max-w-1/3 object-cover w-full md:w-1/3 mx-auto rounded-bl rounded-tl shadow-lg"
                  src={code}
                  alt=""
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
