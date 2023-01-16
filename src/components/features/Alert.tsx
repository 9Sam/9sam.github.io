import React, { useState } from 'react'
import {RiEmotionHappyFill} from 'react-icons/ri';
import {VscChromeClose} from 'react-icons/vsc';

function Alert({onClick}:{onClick: () => void }) {
  return (
    <div className={`absolute flex mx-4 bottom-24 right-0 shadow-lg md:w-2/6 h-auto text-sm md:text-base md:right-10 rounded text-dark p-3 bg-primary bg-opacity-90`}>
      <div className="w-1/6 my-auto">
         <RiEmotionHappyFill className='w-8 h-8 md:w-9 md:h-9'/>
      </div>
      <div className="w-5/6">
         <p className=''>Thank you for reaching out. Your message has been sent successfully and I will contact you as soon as possible.</p>
      </div>
      <div className="w-1/6 m-auto text-center">
         <button className='mx-auto' onClick={onClick}>
            <VscChromeClose className='w-5 h-5 md:w-8 md:h-8'/>
         </button>
      </div>
    </div>
  )
}

export default Alert