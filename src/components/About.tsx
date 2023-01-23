import code from "/coding_1280.jpg";
import Title from "./shared/Title";

const text = `I am Samuel Casco, a full-stack web developer oriented to the JavaScript ecosystem. I love programming because of the satisfaction of creating complex and interesting things and generating solutions that could improve the user experience and life in general. Some of my hobbies are listening to music, drawing, reading, playing the guitar, and enjoying nature.`;

function About() {
   return (
      <section id="about" className="flex-1 md:flex md:flex-col mx-auto my-20 p-5 ">
         <Title title="About me"/>
         <div className="text-dark text-center">
            <div className="">
               <img className="max-h-40 md:max-h-80 max-w-5xl object-cover w-full mx-auto rounded shadow-lg m-4" src={code} alt="" />
            </div>
            <p className="max-w-5xl mx-auto text-center dark:text-light-gray">
               <i>{text}</i></p>
         </div>
      </section>
   );
}

export default About;
