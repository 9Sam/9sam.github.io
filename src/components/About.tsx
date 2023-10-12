import code from "/coding_1280.jpg";
import Title from "./shared/Title";
import { MessagesE } from "../utils/messages";
import { sectionClasses } from "../utils/themeClasses";

function About() {
   return (
      <section id="about" data-section className={`${sectionClasses} h-screen`}>
         <Title title="About me" />
         <div className="text-dark text-center rounded-md bg-dark bg-opacity-5 dark:bg-white dark:bg-opacity-5 h-auto z-10">
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
