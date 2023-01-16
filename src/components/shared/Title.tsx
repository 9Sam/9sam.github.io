type TitleT = {
   title: string
}

function Title({title}: TitleT) {
   return (
      <div className="my-10">
         <h2 className="text-center text-2xl md:text-4xl mt-16 py-5 dark:text-light-gray">
            {title}
         </h2>
         <hr className="w-56 mx-auto text-sm text-primary" />
      </div>
   );
}

export default Title;
