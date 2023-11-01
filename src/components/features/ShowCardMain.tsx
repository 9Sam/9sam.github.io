type Props = {
   text: string;
   icon: any;
   alt: string;
};

function ShowCardMain({ text, icon }: Props) {
   return (
      <div className="w-full md:1/2 lg:w-1/3 h-auto min-h-[100px] rounded shadow blur-effect p-3">
         <div className="flex h-full">
            <div className="w-1/3 flex justify-center align-middle">{icon}</div>
            <div className="w-2/3 my-auto text-dark text-opacity-70 dark:text-white dark:text-opacity-90">
               {text}
            </div>
         </div>
      </div>
   );
}

export default ShowCardMain;
