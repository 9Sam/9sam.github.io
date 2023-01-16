import code from "/coding_1280.jpg";
import Title from "./shared/Title";

const text = `I am Samuel Casco, fullstack web developer oriented to the javascript ecosystem. I love programming because of the satisfaction of creating complex and interesting things and generate solutions that could improve the user experience and life in general.
Some of my hobbies are listening to music, drawing, playing the guitar and enjoy nature.`;

function About() {

   const textWithStyles = text.replace(
      "javascript",
      `<span class="text-primary">javascript</span>`
   );

   return (
      <section id="about" className="flex-1 md:flex md:flex-col mx-auto my-20 p-5 md:p-10 ">
         <Title title="About me"/>
         <div className="text-dark text-">
            <div className="">
               <img className="max-h-40 md:max-h-80 max-w-4xl object-cover w-full mx-auto rounded shadow-lg m-4" src={code} alt="" />
            </div>
            <p className="max-w-4xl mx-auto text-center dark:text-light-gray">
               <i>{text}</i></p>
         </div>
      </section>
   );
}

export default About;
