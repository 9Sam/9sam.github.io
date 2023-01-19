import Title from "./shared/Title";
import Button from "./shared/Button";
import { useEffect, useRef, useState } from "react";
import ContactIcons from "./features/ContactIcons";
import Alert from "./features/Alert";
import emailjs from '@emailjs/browser';

function Contact() {
   const formRef = useRef<HTMLFormElement>(null);
   const [isOpen, setIsOpen] = useState(false);
   let timeoutId:number;

   function sendEmail(e:any){
      e.preventDefault();
      
      emailjs.sendForm('service_t8tz5p8', 'template_t1yywrj', (formRef.current) ? formRef?.current : "", 'gJZ46YzwBsWV5tFji')
      .then((result:any) => {
            setIsOpen(true);
            window.scrollTo(0, document.body.scrollHeight);
            console.log(result.text);
        }, (error) => {});

      formRef.current?.reset();
    };

    useEffect(() => {
      timeoutId = setTimeout(() => {
         setIsOpen(false);
      }, 7000);
      return () => clearTimeout(timeoutId);
    }, [isOpen]);

    const handleClick = () => {
      setIsOpen(!isOpen);
    }

   return (
      <section id="contact" className="flex-1 max-w-5xl md:flex md:flex-col mx-auto my-20 p-5 md:p-10 lg:p-0 dark:bg-dark">
         <Title title="Contact" />
         <form ref={formRef} onSubmit={sendEmail}>
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
                  className="bg-gray-50 border dark:border-primary text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
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
                  className="bg-gray-50 border dark:border-primary text-gray-900 text-sm rounded-lg focus:border-primary block w-full p-2.5 dark:bg-white dark:placeholder-white dark:text-dark dark:focus:ring-primary dark:focus:border-primary"
                  required
               ></textarea>
            </div>
            <div className="text-center my-10">
               <Button type="primary" htmlType="submit">Send email</Button>
            </div>
         </form>
         <ContactIcons center={true} />
         {isOpen && <Alert onClick={handleClick} />}
      </section>
   );
}

export default Contact;
