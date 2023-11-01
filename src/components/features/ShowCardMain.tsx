type Props = {
   text: string;
   icon: any;
   alt: string;
};

function ShowCardMain({ text, icon }: Props) {
   return (
      <div className="md:1/2 blur-effect h-auto min-h-[100px] w-full rounded p-3 shadow lg:w-1/3">
         <div className="flex h-full">
            <div className="flex w-1/3 justify-center align-middle">{icon}</div>
            <div className="my-auto w-2/3 text-dark text-opacity-70 dark:text-white dark:text-opacity-90">
               {text}
            </div>
         </div>
      </div>
   );
}

export default ShowCardMain;
