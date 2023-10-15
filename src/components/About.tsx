import code from "/coding_1280.jpg";
import Title from "./shared/Title";
import { MessagesE } from "../utils/messages";
import { sectionClasses } from "../utils/themeClasses";

function About() {
   return (
      <section id="about" data-section className={`${sectionClasses} h-screen`}>
         <Title title="About me" />
         <div className="flex flex-col md:flex-row gap-5 my-10">
            <div className="w-full md:1/2 lg:w-1/3 h-28 rounded shadow bg-dark bg-opacity-5 dark:bg-white dark:bg-opacity-5 p-3">
               {/* <h4 className="text-center">Expirience</h4> */}
               <div className="flex h-full">
                  <img className="w-1/3" src="" alt="" />
                  <div className="w-2/3 my-auto text-dark text-opacity-70 dark:text-white dark:text-opacity-90">
                     1.5 years of experience as profesional fullstack web
                     developer.
                  </div>
               </div>
            </div>
            <div className="w-full md:1/2 lg:w-1/3 h-28 rounded shadow bg-dark bg-opacity-5 dark:bg-white dark:bg-opacity-5 p-3">
               <img src="" alt="" />
               <p></p>
            </div>
            <div className="w-full md:1/2 lg:w-1/3 h-28 rounded shadow bg-dark bg-opacity-5 dark:bg-white dark:bg-opacity-5 p-3">
               <img src="" alt="" />
               <p></p>
            </div>
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
