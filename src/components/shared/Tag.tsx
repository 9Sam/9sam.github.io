import React from 'react';
import {frontendItems, backendItems, othersItems} from '../../utils/Technologies';
import {RiHashtag} from 'react-icons/ri';

interface PropsI {
   children: string;
   size: string;
}

function Tag({children, size}:PropsI) {
   const handleIcon = () => {
      let frontIcon = frontendItems.findIndex(item => item.name.toLowerCase() === children.toLowerCase());
      let backIcon = backendItems.findIndex(item => item.name.toLowerCase() === children.toLowerCase());
      let otherIcon = othersItems.findIndex(item => item.name.toLowerCase() === children.toLowerCase());

      if(frontIcon >= 0){
         return frontendItems[frontIcon]?.component;
      }
      if(backIcon >= 0){
         return backendItems[backIcon]?.component;
      }
      if(otherIcon >= 0){
         return othersItems[otherIcon]?.component;
      }
   
      return <RiHashtag className='w-6 h-6 fill-white' style={{fill:"#25B6D2"}}/>;
   }

  return (
   <div className='rounded shadow p-1 flex justify-center bg-white border border-secondary text-dark bg-opacity-90  dark:bg-dark dark:text-light-gray text-xs opacity-8 dark:opacity-100'>
      <div className='w-auto mr-1'>
         {React.cloneElement(handleIcon(), {className:size})}
      </div>
      <div className='w-auto my-auto'>
         {children}
      </div>
   </div>
  )
}

export default Tag;