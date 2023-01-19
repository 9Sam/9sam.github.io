import {
   SiReact,
   SiAngular,
   SiBootstrap,
   SiExpress,
   SiNodedotjs,
   SiHtml5,
   SiTypescript,
   SiJava,
   SiTailwindcss,
   SiMongodb,
   SiMysql,
   SiFigma,
   SiPhp
} from "react-icons/si";

const iconClasses = "w-4 h-4 mx-auto float-right";

export const frontendItems = [
   {
      name: "HTML5",
      link: "https://www.xataka.com/basics/que-html5-que-novedades-ofrece",
      component: (
         <SiHtml5
            className={iconClasses}
            style={{ fill: "#FF4C1E" }}
         />
      ),
   },
   {
      name: "React",
      link: "https://es.reactjs.org/",
      component: (
         <SiReact
            className={iconClasses}
            style={{ fill: "#00D8FF" }}
         />
      ),
   },
   {
      name: "Angular",
      link: "https://angular.io/",
      component: (
         <SiAngular
            className={iconClasses}
            style={{ fill: "red" }}
         />
      ),
   },
   {
      name: "Bootstrap",
      link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
      component: (
         <SiBootstrap
            className={iconClasses}
            style={{ fill: "#8300FF" }}
         />
      ),
   },
   {
      name: "Tailwindcss",
      link: "https://tailwindcss.com/",
      component: (
         <SiTailwindcss
            className={iconClasses}
            style={{ fill: "#38BDF8" }}
         />
      ),
   },
];

export const backendItems = [
   {
      name: "NodeJS",
      link: "https://nodejs.org/en/",
      component: (
         <SiNodedotjs
            className={iconClasses}
            style={{ fill: "#8BC500" }}
         />
      ),
   },
   {
      name: "ExpressJs",
      link: "https://expressjs.com/es/",
      component: (
         <SiExpress
            className={iconClasses}
            style={{ fill: "#FF4C1E" }}
         />
      ),
   },
   {
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
      component: (
         <SiTypescript
            className={iconClasses}
            style={{ fill: "#3178C6" }}
         />
      ),
   },
   {
      name: "MySQL",
      link: "https://www.mysql.com/",
      component: (
         <SiMysql
            className={iconClasses}
            style={{ fill: "#00758F" }}
         />
      ),
   },
   {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      component: (
         <SiMongodb
            className={iconClasses}
            style={{ fill: "#4EAF3F" }}
         />
      ),
   },
   {
      name: "Java",
      link: "https://www.java.com/",
      component: (
         <SiJava
            className={iconClasses}
            style={{ fill: "red" }}
         />
      ),
   },
   {
      name: "Php",
      link: "https://www.php.com/",
      component: (
         <SiPhp
            className={iconClasses}
            style={{ fill: "#777BB3" }}
         />
      ),
   },
];

export const othersItems = [
   {
      name: "Figma",
      link: "https://www.figma.com/",
      component: (
         <SiFigma
            className={iconClasses}
            style={{ fill: "#9D56F7" }}
         />
      ),
   },
];