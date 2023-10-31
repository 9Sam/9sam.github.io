type TitleT = {
   title: string;
};

function Title({ title }: TitleT) {
   return (
      <div className="mb-12">
         <h2 className="text-center text-2xl md:text-4xl mt-16 py-5 dark:text-light-gray">
            {title}
         </h2>
         <hr className="w-56 h-1 mx-auto bg-gradient-to-r from-l-secondary to-l-primary dark:from-d-secondary dark:to-d-primary border-0 rounded-sm " />
      </div>
   );
}

export default Title;
