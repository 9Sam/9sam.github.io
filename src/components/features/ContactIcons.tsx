import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

type contactT = {
   center?: boolean;
};

function ContactIcons({ center }: contactT) {
   const iconClasses = `w-7 h-7 md:w-10 md:h-10 hover:text-primary transition ease-out duration-500 z-10`;

   return (
      <div className="text z-10">
         <div
            className={`flex mx-auto gap-3 p-2 ${
               center ? "justify-center" : ""
            }`}
         >
            <a
               className="text-dark dark:text-light-gray"
               href="https://github.com/9Sam"
               target="_blank"
            >
               <BsGithub className={iconClasses} />
            </a>
            <a
               className="text-dark dark:text-light-gray"
               href="https://www.linkedin.com/in/cascosam/"
               target="_blank"
            >
               <BsLinkedin className={iconClasses} />
            </a>
            <a
               className="text-dark dark:text-light-gray"
               href="mailto:sacasco99@gmail.com"
               target="_blank"
            >
               <BsFillEnvelopeFill className={iconClasses} />
            </a>
         </div>
      </div>
   );
}

export default ContactIcons;
