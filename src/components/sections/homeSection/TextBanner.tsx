function TextBanner() {
   return (
      <div className="flex flex-col gap-y-1 md:gap-y-3">
         <h2 className="text-light fs-1 fs-sm-3 text-3xl md:text-6xl">
            Samuel Casco
         </h2>
         <h2 className="text-2xl text-gray-500 dark:text-gray-400 md:text-5xl">
            Full-Stack Developer
         </h2>
         <span className="text-2xl text-gray-500 italic">"Bringing code to life"</span>
      </div>
   );
}

export default TextBanner;
