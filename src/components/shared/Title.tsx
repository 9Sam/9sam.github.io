type TitleT = {
   title: string;
};

function Title({ title }: TitleT) {
   return (
      <div className="mb-12">
         <h2 className="mt-16 py-5 text-center text-2xl dark:text-light-gray md:text-4xl">
            {title}
         </h2>
         <hr className="mx-auto h-1 w-56 rounded-sm border-0 bg-gradient-to-r from-l-secondary to-l-primary dark:from-d-secondary dark:to-d-primary " />
      </div>
   );
}

export default Title;
