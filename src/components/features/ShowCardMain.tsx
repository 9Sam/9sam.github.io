type Props = {
   text: string;
   icon: any;
   alt: string;
};

function ShowCardMain({ text, icon }: Props) {
   return (
     <div className="z-10 flex md:h-20">
       <div className="w-1/3 flex items-center justify-center">{icon}</div>
       <div className="w-2/3 flex items-center text-dark text-opacity-70 dark:text-white dark:text-opacity-90">
         {text}
       </div>
     </div>
   );
 }



export default ShowCardMain;
