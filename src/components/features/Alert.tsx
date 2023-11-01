import React, { useState } from "react";
import { RiEmotionHappyFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

function Alert({ onClick }: { onClick: () => void }) {
   return (
      <div
         className={`bg-primary absolute bottom-24 right-0 mx-4 flex h-auto rounded bg-opacity-90 p-3 text-sm text-dark shadow-lg md:right-10 md:w-2/6 md:text-base`}
      >
         <div className="my-auto w-1/6">
            <RiEmotionHappyFill className="h-8 w-8 md:h-9 md:w-9" />
         </div>
         <div className="w-5/6">
            <p className="">
               Thank you for reaching out. Your message has been sent
               successfully and I will contact you as soon as possible.
            </p>
         </div>
         <div className="m-auto w-1/6 text-center">
            <button className="mx-auto" onClick={onClick}>
               <VscChromeClose className="h-5 w-5 md:h-8 md:w-8" />
            </button>
         </div>
      </div>
   );
}

export default Alert;
