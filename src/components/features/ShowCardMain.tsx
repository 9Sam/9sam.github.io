type Props = {
   text: string;
   icon: any;
   alt: string;
};

function ShowCardMain({ text, icon }: Props) {
   return (
      <div className="md:1/2 spotlight min-h-[100px] w-full rounded p-3 shadow-lg lg:w-1/3">
         <div className="flex h-16 md:h-full">
            <div className="flex w-1/3 my-auto md:h-full justify-center align-middle">{icon}</div>
            <div className="w-2/3 my-auto text-dark text-opacity-70 dark:text-white dark:text-opacity-90">
               {text}
            </div>
         </div>
      </div>
   );
}

export default ShowCardMain;
