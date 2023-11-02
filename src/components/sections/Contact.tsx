import Title from "../shared/Title";
import Button from "../shared/buttons/Button";
import { useEffect, useRef, useState } from "react";
import ContactIcons from "../features/ContactIcons";
import Alert from "../features/Alert";
import emailjs from "@emailjs/browser";
import { sectionClasses } from "../../utils/themeClasses";

function Contact() {
   const formRef = useRef<HTMLFormElement>(null);
   const [isOpen, setIsOpen] = useState(false);
   let timeoutId: number;

   function sendEmail(e: any) {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_t8tz5p8",
            "template_t1yywrj",
            formRef.current ? formRef?.current : "",
            "gJZ46YzwBsWV5tFji",
         )
         .then(
            (_result: any) => {
               setIsOpen(true);
               window.scrollTo(0, document.body.scrollHeight);
            },
            (_error) => {},
         );

      formRef.current?.reset();
   }

   useEffect(() => {
      timeoutId = setTimeout(() => {
         setIsOpen(false);
      }, 7000);
      return () => clearTimeout(timeoutId);
   }, [isOpen]);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <section
         id="contact"
         data-section
         className={`${sectionClasses} px-4 lg:px-40 lg:mb-48`}
      >
         <Title title="Contact" />
         <form ref={formRef} onSubmit={sendEmail} className="z-10">
            <div className="mb-6">
               <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium dark:text-light-gray"
               >
                  Name
               </label>
               <input
                  type="name"
                  id="name"
                  name="name"
                  className="focus:border-secondary block w-full rounded p-2.5 text-sm text-dark shadow-md dark:bg-white dark:text-dark"
                  required
               />
            </div>
            <div className="mb-6">
               <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium dark:text-light-gray"
               >
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full  rounded p-2.5 text-sm text-dark shadow-md focus:border-l-secondary dark:bg-white dark:text-dark"
                  required
               />
            </div>
            <div className="mb-6">
               <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium dark:text-light-gray"
               >
                  Message
               </label>
               <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="focus:ring-primary block w-full rounded  p-2.5 text-sm text-gray-900 shadow-md dark:bg-white dark:text-dark dark:placeholder-white"
                  required
               ></textarea>
            </div>
            <div className="my-10 text-center">
               <Button type="primary" htmlType="submit">
                  Send email
               </Button>
            </div>
         </form>
         <ContactIcons isCenter={true} />
         {isOpen && <Alert onClick={handleClick} />}
      </section>
   );
}

export default Contact;
