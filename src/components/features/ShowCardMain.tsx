type Props = {
   text: string;
   icon: any;
   alt: string;
};

function ShowCardMain({ text, icon }: Props) {
   return (
      <div className="w-full md:1/2 lg:w-1/3 h-28 rounded shadow bg-dark bg-opacity-5 dark:bg-white dark:bg-opacity-5 p-3">
         <div className="flex h-full">
            <div className="w-1/3 flex justify-center align-middle">{icon}</div>
            <div className="w-2/3 my-auto text-dark text-opacity-70 dark:text-white dark:text-opacity-90">
               {text}
            </div>
         </div>
      </div>
   );
};

export default ShowCardMain;
