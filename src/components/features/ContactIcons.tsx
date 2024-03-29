import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

type contactT = {
   isCenter?: boolean;
};

const iconClasses = `w-7 h-7 md:w-12 md:h-12 hover:text-l-primary dark:hover:text-d-primary transition ease-out duration-500 z-10`;

const contactIcons = [
   {
      href: "https://github.com/9Sam",
      icon: <BsGithub className={iconClasses} />,
   },
   {
      href: "https://www.linkedin.com/in/cascosam/",
      icon: <BsLinkedin className={iconClasses} />,
   },
   {
      href: "mailto:sacasco99@gmail.com",
      icon: <BsFillEnvelopeFill className={iconClasses} />,
   },
];

function ContactIcons({ isCenter }: contactT) {
   return (
      <div className="text z-10">
         <div
            className={`mx-auto flex gap-5 p-2 ${
               isCenter ? "justify-center" : ""
            }`}
         >
            {contactIcons.map((item, index) => (
               <a
                  className="text-dark dark:text-light-gray"
                  href={item.href}
                  target="_blank"
                  key={index}
               >
                  {item.icon}
               </a>
            ))}
         </div>
      </div>
   );
}

export default ContactIcons;
