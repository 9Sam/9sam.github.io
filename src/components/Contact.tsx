import Title from "./shared/Title";
import Button from "./shared/Button";
import { useEffect, useRef, useState } from "react";
import ContactIcons from "./features/ContactIcons";
import Alert from "./features/Alert";
import emailjs from "@emailjs/browser";
import { sectionClasses } from "../utils/themeClasses";

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
            "gJZ46YzwBsWV5tFji"
         )
         .then(
            (_result: any) => {
               setIsOpen(true);
               window.scrollTo(0, document.body.scrollHeight);
            },
            (_error) => {}
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
         className={`${sectionClasses} lg:mb-48`}
      >
         <Title title="Contact" />
         <form ref={formRef} onSubmit={sendEmail} className="z-50">
            <div className="mb-6">
               <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium dark:text-light-gray"
               >
                  Name
               </label>
               <input
                  type="name"
                  id="name"
                  name="name"
                  className="bg-gray-50 shadow text-dark bg-secondary bg-opacity-5 text-sm rounded-lg focus:border-secondary block w-full p-2.5 dark:bg-white dark:text-dark"
                  required
               />
            </div>
            <div className="mb-6">
               <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-light-gray"
               >
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 shadow text-dark bg-secondary bg-opacity-5  text-sm rounded-lg focus:border-secondary block w-full p-2.5 dark:bg-white dark:text-dark"
                  required
               />
            </div>
            <div className="mb-6">
               <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium dark:text-light-gray"
               >
                  Message
               </label>
               <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-gray-50 shadow text-gray-900 text-sm rounded-lg bg-secondary bg-opacity-5  focus:ring-primary block w-full p-2.5 dark:bg-white dark:placeholder-white dark:text-dark"
                  required
               ></textarea>
            </div>
            <div className="text-center my-10">
               <Button type="primary" htmlType="submit">
                  Send email
               </Button>
            </div>
         </form>
         <ContactIcons center={true} />
         {isOpen && <Alert onClick={handleClick} />}
      </section>
   );
}

export default Contact;
