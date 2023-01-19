import React from 'react';
import SplideTech from "./features/SplideTech";
import {
   frontendItems,
   backendItems,
   othersItems,
} from "../utils/Technologies";
import Title from "./shared/Title";

const h2Classes =
   "text-dark dark:text-light-gray text-xl md:text-2xl font-bold py-5 md:h-20";

function Skills() {
   return (
      <section
         id="skills"
         className="flex-1 md:flex md:flex-col my-20 mx-auto p-5 bg-white dark:bg-dark"
      >
         <Title title="Skills" />
         <div className="max-w-50 mx-auto">
            <SplideTech />
         </div>
         <div className="flex justify-center">
            <div className="flex flex-wrap pt-10 md:pt-20 w-full max-w-5xl">
               <div className="w-1/2 md:w-1/3 p-2 text-center">
                  <h2 className={h2Classes}>FrontEnd</h2>
                  <div className="text-dark dark:text-light-gray text-lg md:text-xl">
                     {frontendItems.map((item, index) => {
                        return (
                           <div key={index} className="flex mt-3">
                              <div className="my-auto w-1/2 -ml-6 pr-2">
                                 {React.cloneElement(item.component,{className:"w-6 h-6 mx-auto float-right"})}
                              </div>
                              <div className="flex w-1/2">
                                 <a href={item.link} target="_blank">
                                    <span className="md:ml-3">{item.name}</span>
                                 </a>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div className="w-1/2 md:w-1/3 p-2 text-center">
                  <h2 className={h2Classes}>Backend</h2>
                  <div className="text-dark dark:text-light-gray text-lg md:text-xl">
                     {backendItems.map((item, index) => {
                        return (
                           <div key={index} className="flex mt-3">
                              <div className="my-auto w-1/2 -ml-6 pr-2">
                                 {React.cloneElement(item.component,{className:"w-6 h-6 mx-auto float-right"})}
                              </div>
                              <div className="flex w-1/2">
                                 <a href={item.link} target="_blank">
                                    <span className="md:ml-3">{item.name}</span>
                                 </a>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div className="w-1/2 md:w-1/3 p-2 text-center">
                  <h2 className={h2Classes}>Other technologies and tools</h2>
                  <div className="text-dark dark:text-light-gray text-lg md:text-xl">
                     {othersItems.map((item, index) => {
                        return (
                           <div key={index} className="flex mt-3">
                              <div className="my-auto w-1/2 -ml-6 pr-2">
                                 {React.cloneElement(item.component,{className:"w-6 h-6 mx-auto float-right"})}
                              </div>
                              <div className="flex w-1/2">
                                 <a href={item.link} target="_blank">
                                    <span className="md:ml-3">{item.name}</span>
                                 </a>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Skills;
